-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PUBLIC PROFILES (Synced with Auth)
create table public.profiles (
  id uuid references auth.users not null primary key,
  username text,
  avatar_url text,
  updated_at timestamp with time zone,
  
  constraint username_length check (char_length(username) >= 3)
);

-- Function to handle new user signup automatically
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger for new signups
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 2. THE DIRECTIVE (Goals)
create table public.goals (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  title text not null,
  deadline date not null,
  stakes_type text check (stakes_type in ('burn_badge', 'penalty_50', 'public_shame')),
  status text default 'active' check (status in ('active', 'completed', 'failed')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. THE LEDGER (Daily Logs)
create table public.ledger (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  log_date date default current_date not null,
  content text not null,
  status text default 'shipped' check (status in ('shipped', 'missed', 'empty')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  unique(user_id, log_date)
);

-- 4. INTEGRATIONS (Proof of Work)
create table public.integrations (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  provider text not null check (provider in ('github', 'stripe', 'strava')),
  connected_at timestamp with time zone default timezone('utc'::text, now()) not null,
  meta_data jsonb
);

-- Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.goals enable row level security;
alter table public.ledger enable row level security;
alter table public.integrations enable row level security;

-- Policies (Users can only see/edit their own data)
create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);

create policy "Users can view own goals." on public.goals for select using (auth.uid() = user_id);
create policy "Users can insert own goals." on public.goals for insert with check (auth.uid() = user_id);

create policy "Users can view own ledger." on public.ledger for select using (auth.uid() = user_id);
create policy "Users can insert own ledger." on public.ledger for insert with check (auth.uid() = user_id);
