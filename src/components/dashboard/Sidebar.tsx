"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Target, Activity, Github } from "lucide-react";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <aside className="hidden md:flex flex-col w-64 border-r border-zinc-200 h-screen fixed left-0 top-0 bg-white p-6 justify-between">
            <div className="space-y-8">
                <div className="flex items-center gap-2 mb-6">
                    <Image src="/logo.png" alt="DayZero" width={200} height={64} className="h-16 w-auto object-contain -ml-2" priority />
                </div>
                <nav className="space-y-2">
                    <Button asChild variant="ghost" className={cn(
                        "w-full justify-start gap-3 font-medium",
                        isActive("/dashboard")
                            ? "bg-zinc-50 text-zinc-900 border border-zinc-200 shadow-sm"
                            : "text-zinc-500 hover:text-zinc-900"
                    )}>
                        <Link href="/dashboard">
                            <Home className="w-4 h-4" /> Home
                        </Link>
                    </Button>

                    <Button asChild variant="ghost" className={cn(
                        "w-full justify-start gap-3 font-medium",
                        isActive("/dashboard/goals")
                            ? "bg-zinc-50 text-zinc-900 border border-zinc-200 shadow-sm"
                            : "text-zinc-500 hover:text-zinc-900"
                    )}>
                        <Link href="/dashboard/goals">
                            <Target className="w-4 h-4" /> Goals
                        </Link>
                    </Button>

                    <Button asChild variant="ghost" className={cn(
                        "w-full justify-start gap-3 font-medium",
                        isActive("/dashboard/start")
                            ? "bg-zinc-50 text-zinc-900 border border-zinc-200 shadow-sm"
                            : "text-zinc-500 hover:text-zinc-900"
                    )}>
                        <Link href="/dashboard/start">
                            <Activity className="w-4 h-4" /> Start
                        </Link>
                    </Button>

                    <Button asChild variant="ghost" className={cn(
                        "w-full justify-start gap-3 font-medium",
                        isActive("/dashboard/integrations")
                            ? "bg-zinc-50 text-zinc-900 border border-zinc-200 shadow-sm"
                            : "text-zinc-500 hover:text-zinc-900"
                    )}>
                        <Link href="/dashboard/integrations">
                            <Github className="w-4 h-4" /> Integrations
                        </Link>
                    </Button>
                </nav>
            </div>
            <div className="flex items-center gap-3 border-t border-zinc-100 pt-6">
                <div className="h-9 w-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-semibold text-xs border border-zinc-200">
                    DZ
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-zinc-800">Demo User</span>
                    <span className="text-xs text-zinc-400">Pro Member</span>
                </div>
            </div>
        </aside>
    )
}
