"use client";

import { useState } from "react";
import { CreateGoalModal } from "./CreateGoalModal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoreHorizontal, Play, Pause, CheckCircle2, Circle } from "lucide-react";
import { motion } from "framer-motion";

const TABS = [
    { id: "all", label: "All Goals" },
    { id: "active", label: "In Progress" },
    { id: "completed", label: "Completed" },
    { id: "paused", label: "Paused" },
];

const MOCK_GOALS = [
    {
        id: 1,
        title: "Ship DayZero MVP",
        description: "Complete the landing page and dashboard implementation.",
        status: "active",
        progress: 75,
        type: "manual",
    },
    {
        id: 2,
        title: "Morning Run 5k",
        description: "Run 5km every morning before 8am.",
        status: "active",
        progress: 40,
        type: "auto",
    },
    {
        id: 3,
        title: "Read 'Atomic Habits'",
        description: "Finish the book by end of month.",
        status: "completed",
        progress: 100,
        type: "manual",
    },
];

export function GoalListView() {
    const [activeTab, setActiveTab] = useState("all");

    const filteredGoals = MOCK_GOALS.filter(goal => {
        if (activeTab === "all") return true;
        return goal.status === activeTab;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Filter Tabs */}
                <div className="flex p-1 bg-zinc-100 rounded-xl w-full md:w-auto overflow-x-auto">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                                activeTab === tab.id
                                    ? "bg-white text-zinc-900 shadow-sm"
                                    : "text-zinc-500 hover:text-zinc-700 hover:bg-zinc-200/50"
                            )}
                        >
                            {tab.label}
                            <span className="ml-2 text-xs opacity-50 bg-zinc-200 px-1.5 py-0.5 rounded-full">
                                {tab.id === "all" ? MOCK_GOALS.length : MOCK_GOALS.filter(g => g.status === tab.id).length}
                            </span>
                        </button>
                    ))}
                </div>

                <CreateGoalModal />
            </div>

            {/* Goal Grid */}
            <div className="grid gap-4">
                {filteredGoals.map((goal) => (
                    <motion.div
                        key={goal.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="group bg-white rounded-2xl border border-zinc-200 p-6 flex items-start justify-between hover:border-zinc-300 transition-all shadow-sm hover:shadow-md"
                    >
                        <div className="flex gap-4">
                            <div className={cn(
                                "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                                goal.status === "completed" ? "bg-emerald-100 text-emerald-600" : "bg-zinc-100 text-zinc-500"
                            )}>
                                {goal.status === "completed" ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-zinc-900">{goal.title}</h3>
                                <p className="text-zinc-500 text-sm mb-3 line-clamp-1">{goal.description}</p>

                                <div className="flex items-center gap-3">
                                    <div className="w-32 h-2 bg-zinc-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-zinc-900 rounded-full"
                                            style={{ width: `${goal.progress}%` }}
                                        />
                                    </div>
                                    <span className="text-xs font-semibold text-zinc-600">{goal.progress}%</span>
                                    {goal.type === "auto" && (
                                        <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                                            Auto-Verified
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-900">
                            <MoreHorizontal className="w-5 h-5" />
                        </Button>
                    </motion.div>
                ))}

                {filteredGoals.length === 0 && (
                    <div className="text-center py-20 bg-zinc-50 rounded-2xl border border-dashed border-zinc-200">
                        <p className="text-zinc-400">No goals found in this view.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
