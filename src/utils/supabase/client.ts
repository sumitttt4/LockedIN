import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL! || "https://zqeixlklsefoaqgaowbn.supabase.co",
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! || "sb_publishable_x5PD6Ve56ErzOFqZywmOGQ_ngVaKY64"
    );
}
