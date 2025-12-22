"use client";

import { motion } from "framer-motion";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StreakCounter } from "@/components/dashboard/StreakCounter";
import { ActiveGoalCard } from "@/components/dashboard/ActiveGoalCard";
import { StatGrid } from "@/components/dashboard/StatGrid";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Integrations } from "@/components/dashboard/Integrations";
import { containerVariants } from "@/lib/animation-variants";
import { Home, Target, Activity, User } from "lucide-react";
import { cn } from "@/lib/utils";

function BottomNav() {
    const items = [
        { icon: Home, label: "Home", active: true },
        { icon: Target, label: "Goals", active: false },
        { icon: Activity, label: "Activity", active: false },
        { icon: User, label: "Profile", active: false },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-zinc-100 z-50 padding-safe-bottom">
            <div className="flex items-center justify-around h-16 max-w-md mx-auto">
                {items.map((item, i) => (
                    <button
                        key={i}
                        className={cn(
                            "flex flex-col items-center gap-1 p-2 transition-colors",
                            item.active ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                        )}
                    >
                        <item.icon
                            className={cn("w-6 h-6", item.active && "fill-current")}
                            strokeWidth={item.active ? 0 : 2}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-zinc-50 font-sans selection:bg-zinc-200 pb-20 md:pb-0">
            <Sidebar />

            <div className="md:pl-64">
                <div className="max-w-5xl mx-auto px-4 md:px-12 py-6 md:py-12 min-h-screen">
                    <DashboardHeader />

                    <motion.main
                        className="space-y-6 md:space-y-12 mt-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                            {/* Left Column (Counter + Integrations on Desktop) */}
                            <div className="md:col-span-4 space-y-6">
                                <StreakCounter />
                                <div className="hidden md:block">
                                    <h3 className="text-sm font-bold text-zinc-900 mb-4 px-1">Active Integrations</h3>
                                    <Integrations compact={true} />
                                </div>
                            </div>

                            {/* Right Column (Focus + Stats on Desktop) */}
                            <div className="md:col-span-8 space-y-6 md:space-y-8">
                                <ActiveGoalCard />
                                <StatGrid />
                                {/* Mobile Only Integrations */}
                                <div className="md:hidden">
                                    <h3 className="text-sm font-bold text-zinc-900 mb-4 px-1">Connect Apps</h3>
                                    <Integrations />
                                </div>
                            </div>
                        </div>
                    </motion.main>
                </div>
            </div>

            <BottomNav />
        </div>
    );
}
