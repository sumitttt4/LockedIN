"use client";

import React, { useState } from "react";
import {
  Zap,
  Terminal,
  Swords,
  Activity,
  Plus,
  Settings,
  Github,
  CreditCard,
  CheckCircle2,
  Clock,
  MoreHorizontal,
  LayoutGrid,
  Target,
  Link as LinkIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { RealFeaturesGrid, NorthStarDirective } from "@/components/dashboard/RealFeatures"; // Reusing goal form
import { DailyLogWidget } from "@/components/dashboard/DailyLogWidget";

// --- MOCK DATA ---
const LEDGER_DAYS = Array.from({ length: 35 }, (_, i) => {
  if (i > 30) return 'empty';
  const isWeekend = i % 7 === 0 || i % 7 === 6;
  if (isWeekend) return 'missed';
  return 'shipped';
});

const ACTIVE_DIRECTIVES = [
  { id: 1, title: "Reach $1k MRR", progress: 65, status: "IN_PROGRESS", deadline: "2024-02-01" },
  { id: 2, title: "Ship MVP v1.0", progress: 100, status: "COMPLETED", deadline: "2024-01-15" },
  { id: 3, title: "Write 10 Blog Posts", progress: 20, status: "IN_PROGRESS", deadline: "2024-03-01" },
];

// --- UI PRIMITIVES ---
const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col", className)}>
    {children}
  </div>
);

const CardHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("px-6 py-4 border-b-2 border-black flex items-center justify-between bg-zinc-50", className)}>
    {children}
  </div>
);

const CardTitle = ({ children, icon: Icon }: { children: React.ReactNode; icon?: any }) => (
  <div className="flex items-center gap-2">
    {Icon && <Icon className="w-4 h-4" />}
    <h3 className="font-bold text-sm uppercase tracking-wider">{children}</h3>
  </div>
);

const Badge = ({ children, variant = "neutral" }: { children: React.ReactNode; variant?: "neutral" | "active" | "danger" | "success" }) => {
  const variants = {
    neutral: "bg-zinc-100 text-zinc-500",
    active: "bg-[#00FF00] text-black border-black",
    danger: "bg-red-500 text-white",
    success: "bg-black text-white"
  };
  return (
    <span className={cn("px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border border-transparent", variants[variant])}>
      {children}
    </span>
  );
};

// --- TAB VIEWS ---

function CommandView() {
  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* ROW 1: CONTROLLER (& BATTLE) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <Card className="md:col-span-7 relative overflow-hidden group">
          <CardHeader className="py-3 px-5 bg-white">
            <div className="flex items-center gap-3">
              <CardTitle icon={Zap}>Session</CardTitle>
              <p className="font-mono text-[10px] text-zinc-400 uppercase">// SYSTEM_IDLE</p>
            </div>
            <Badge variant="neutral">Focus Mode</Badge>
          </CardHeader>
          <div className="flex-1 p-4 flex items-center justify-between gap-6">
            <div className="font-mono text-5xl md:text-6xl font-black tracking-tighter text-black tabular-nums leading-none">
              00:00:00
            </div>
            <button className="h-16 px-8 bg-black text-white hover:bg-[#00FF00] hover:text-black border-2 border-black font-black uppercase tracking-widest transition-all rounded-none flex items-center gap-2 text-sm whitespace-nowrap">
              <Zap className="w-4 h-4 fill-current" /> Initiate
            </button>
          </div>
        </Card>

        <Card className="md:col-span-5">
          <CardHeader className="py-3 px-5 bg-white">
            <CardTitle icon={Swords}>Battle</CardTitle>
            <Badge variant="danger">$50 Stakes</Badge>
          </CardHeader>
          <div className="p-5 flex-1 flex flex-col justify-center space-y-4">
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span>You</span> <span className="font-mono">85%</span>
                </div>
                <div className="h-2 w-full bg-zinc-100 border border-black relative">
                  <div className="absolute top-0 left-0 h-full w-[85%] bg-[#00FF00] border-r border-black" />
                </div>
              </div>
              <div className="space-y-1 opacity-60">
                <div className="flex justify-between text-[10px] font-bold uppercase text-zinc-500">
                  <span>@ALEX</span> <span className="font-mono">42%</span>
                </div>
                <div className="h-2 w-full bg-zinc-100 border border-zinc-300 relative">
                  <div className="absolute top-0 left-0 h-full w-[42%] bg-zinc-400 border-r border-zinc-500" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* ROW 2: LOG & CONSISTENCY */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
        <div className="md:col-span-8 h-full min-h-[250px]">
          <DailyLogWidget />
        </div>

        <Card className="md:col-span-4 h-full">
          <CardHeader className="py-3 px-5 bg-white">
            <CardTitle icon={Activity}>Ledger</CardTitle>
            <Badge>30d</Badge>
          </CardHeader>
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div className="grid grid-cols-7 gap-1">
              {LEDGER_DAYS.map((status, i) => (
                <div key={i} className={cn("w-full aspect-square transition-colors", status === 'shipped' ? "bg-[#00FF00] border border-black" : status === 'missed' ? "bg-red-500 border border-black" : "bg-zinc-50 border border-zinc-200")} />
              ))}
            </div>
            <div className="flex justify-between items-end mt-4 pt-4 border-t border-zinc-100">
              <div>
                <div className="text-2xl font-black">84%</div>
                <div className="text-[10px] font-bold uppercase text-zinc-400">Consistency</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function DirectivesView() {
  const [showNewGoal, setShowNewGoal] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="font-bold text-2xl uppercase tracking-tighter">Active Directives</h2>
          <p className="font-mono text-xs text-zinc-500 uppercase">// MANAGE_OBJECTIVES</p>
        </div>
        <button
          onClick={() => setShowNewGoal(!showNewGoal)}
          className="bg-black text-white px-6 py-3 font-bold uppercase hover:bg-[#00FF00] hover:text-black transition-colors flex items-center gap-2 border-2 border-transparent hover:border-black"
        >
          {showNewGoal ? "Cancel" : "New Directive"} {showNewGoal ? null : <Plus className="w-4 h-4" />}
        </button>
      </div>

      {showNewGoal && (
        <div className="mb-8">
          <NorthStarDirective />
        </div>
      )}

      <div className="grid gap-4">
        {ACTIVE_DIRECTIVES.map((goal) => (
          <div key={goal.id} className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between group hover:translate-x-1 transition-transform cursor-default">
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-3">
                <h3 className="font-black text-lg uppercase tracking-wide">{goal.title}</h3>
                <Badge variant={goal.status === 'COMPLETED' ? 'success' : 'active'}>
                  {goal.status.replace('_', ' ')}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Due: {goal.deadline}</span>
                <span>// Priority: HIGH</span>
              </div>
            </div>

            <div className="flex items-center gap-8 pl-8 border-l-2 border-zinc-100">
              <div className="w-32 space-y-1">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span>Progress</span>
                  <span>{goal.progress}%</span>
                </div>
                <div className="h-3 w-full bg-zinc-100 border border-black relative">
                  <div
                    className="h-full bg-[#00FF00] border-r border-black transition-all duration-500"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
              <button className="p-2 hover:bg-zinc-100 border border-transparent hover:border-black transition-all">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConnectionsView() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-1">
        <h2 className="font-bold text-2xl uppercase tracking-tighter">Integrations</h2>
        <p className="font-mono text-xs text-zinc-500 uppercase">// LINK_EXTERNAL_SYSTEMS</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* STRIPE CARD */}
        <Card>
          <CardHeader>
            <CardTitle icon={CreditCard}>Stripe Revenue</CardTitle>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase">Connected</span>
            </div>
          </CardHeader>
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-zinc-500">API Secret Key (Restricted)</label>
              <div className="flex">
                <input
                  type="password"
                  value="rk_live_MkQl..."
                  readOnly
                  className="flex-1 bg-zinc-100 border-2 border-black border-r-0 p-3 font-mono text-sm outline-none text-zinc-500" // Masked input
                />
                <button className="bg-black text-white px-4 text-xs font-bold uppercase tracking-wider">Update</button>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
              <span className="text-sm font-bold uppercase">Auto-Sync Transactions</span>
              <div className="w-10 h-5 bg-[#00FF00] border-2 border-black rounded-full relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 h-3 w-3 bg-black rounded-full" />
              </div>
            </div>
          </div>
        </Card>

        {/* GITHUB CARD */}
        <Card>
          <CardHeader>
            <CardTitle icon={Github}>GitHub Stats</CardTitle>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-300" />
              <span className="text-[10px] font-bold uppercase text-zinc-400">Disconnected</span>
            </div>
          </CardHeader>
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-zinc-500">GitHub Username</label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="e.g. shadcn"
                  className="flex-1 bg-white border-2 border-black p-3 font-mono text-sm outline-none focus:bg-zinc-50"
                />
              </div>
            </div>
            <button className="w-full bg-zinc-100 border-2 border-black border-dashed py-3 text-xs font-bold uppercase hover:bg-black hover:text-white hover:border-solid transition-all">
              Link GitHub Account
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}


import { useSearchParams } from "next/navigation";

// --- MAIN LAYOUT ---

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const viewParam = searchParams.get("view");

  const [activeTab, setActiveTab] = useState<"COMMAND" | "DIRECTIVES" | "CONNECTIONS">(
    (viewParam as "COMMAND" | "DIRECTIVES" | "CONNECTIONS") || "COMMAND"
  );

  const tabs = [
    { id: "COMMAND", icon: LayoutGrid, label: "Command Center" },
    { id: "DIRECTIVES", icon: Target, label: "Directives" },
    { id: "CONNECTIONS", icon: LinkIcon, label: "Connections" }
  ] as const;

  return (
    <div className="max-w-[1200px] mx-auto space-y-8 pb-12">

      {/* TABS HEADER */}
      <div className="flex items-center border-b-2 border-black">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-6 py-4 font-bold uppercase tracking-wider text-sm border-r-2 border-black transition-all hover:bg-zinc-100",
              activeTab === tab.id ? "bg-black text-white hover:bg-black hover:text-[#00FF00]" : "bg-white text-zinc-500"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="min-h-[600px]">
        {activeTab === "COMMAND" && <CommandView />}
        {activeTab === "DIRECTIVES" && <DirectivesView />}
        {activeTab === "CONNECTIONS" && <ConnectionsView />}
      </div>

    </div>
  );
}
