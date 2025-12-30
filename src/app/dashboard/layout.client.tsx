"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Trophy,
    Target,
    Settings,
    LogOut,
    Menu,
    X,
    Terminal,
    User
} from "lucide-react";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export function DashboardLayoutClient({
    children,
    user
}: {
    children: React.ReactNode;
    user: { email?: string; id?: string } | null;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        router.push("/login"); // Redirect to login after sign out
    };

    const navItems = [
        { name: "Command", href: "/dashboard", icon: LayoutDashboard },
        { name: "Directives", href: "/dashboard?view=DIRECTIVES", icon: Target },
        { name: "Integrations", href: "/dashboard?view=CONNECTIONS", icon: Trophy },
        { name: "Settings", href: "/dashboard/settings", icon: Settings },
    ];

    // Derived User Badge
    const userBadge = user?.email?.split('@')[0] || "OPERATOR";

    return (
        <div className="h-screen overflow-hidden bg-white font-sans text-zinc-900 flex">

            {/* MOBILE OVERLAY */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* SIDEBAR */}
            <aside
                className={cn(
                    "fixed top-0 left-0 z-50 h-full w-64 bg-black text-white border-r-2 border-black transition-transform duration-300 lg:translate-x-0 lg:static flex flex-col justify-between flex-shrink-0 overflow-y-auto",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div>
                    {/* Logo Area */}
                    <div className="h-16 flex items-center px-6 border-b border-zinc-800">
                        <Link href="/" className="font-black tracking-[-0.1em] text-xl uppercase text-white flex items-center gap-2">
                            <span className="w-6 h-6 bg-white text-black flex items-center justify-center rounded-none">
                                <Terminal className="w-4 h-4" />
                            </span>
                            LOCKED_IN
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="p-4 space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all border-l-4",
                                        isActive
                                            ? "border-[#00FF00] text-[#00FF00] bg-black"
                                            : "border-transparent text-zinc-500 hover:text-white hover:bg-zinc-900/50"
                                    )}
                                >
                                    <item.icon className={cn("w-4 h-4", isActive ? "text-[#00FF00]" : "text-zinc-600")} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Footer User */}
                <div className="p-4 border-t border-zinc-800">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-zinc-400 hover:text-white hover:bg-zinc-900 text-sm font-bold uppercase tracking-wider transition-all"
                    >
                        <LogOut className="w-4 h-4" />
                        Disconnect
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT WRAPPER */}
            <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">

                {/* TOP BAR */}
                <header className="h-16 bg-white border-b-2 border-black flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 hover:bg-zinc-100"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>

                        {/* Breadcrumbs */}
                        <div className="hidden sm:flex items-center gap-2 font-mono text-xs md:text-sm font-bold tracking-widest text-zinc-400 uppercase">
                            <span>PROTOCOL</span>
                            <span className="text-zinc-300">//</span>
                            <span className="text-black">DASHBOARD</span>
                            <span className="text-zinc-300">//</span>
                            <span className="text-[#00FF00] bg-black px-1">@{userBadge}</span>
                        </div>
                    </div>

                    {/* Right Side Status */}
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-none h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] md:text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest hidden sm:block">
                                Status: ONLINE
                            </span>
                        </div>

                        {/* User Avatar (Square) */}
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-zinc-100 border-2 border-black rounded-none overflow-hidden">
                            <img
                                src={`https://api.dicebear.com/9.x/notionists/svg?seed=${userBadge}&backgroundColor=ffdfbf`}
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </header>

                {/* PAGE CONTENT */}
                <main className="flex-1 bg-zinc-50/50 p-4 md:p-8 overflow-y-auto">
                    {children}
                </main>

            </div>
        </div>
    );
}
