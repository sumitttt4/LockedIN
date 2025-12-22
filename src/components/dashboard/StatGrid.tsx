"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, CheckCircle2, Eye, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatGrid() {
    const items = [
        {
            label: "Consistency",
            value: "14 Days",
            trend: "Top 5%",
            trendColor: "text-emerald-600",
            icon: CheckCircle2,
        },
        {
            label: "Total Shipped",
            value: "12",
            trend: "Goals",
            trendColor: "text-zinc-400",
            icon: Calendar,
        },
        {
            label: "Focus Score",
            value: "92",
            trend: "+4pts",
            trendColor: "text-emerald-600",
            icon: TrendingUp,
        },
        {
            label: "Watching",
            value: "34",
            trend: "People",
            trendColor: "text-zinc-400",
            icon: Users,
        },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pb-0 md:pb-0">
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between h-32 hover:border-zinc-300 transition-colors"
                >
                    <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                            {item.label}
                        </span>
                        <item.icon className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div>
                        <div className="text-2xl font-mono font-bold text-zinc-900 tracking-tight">
                            {item.value}
                        </div>
                        <div className={cn("text-xs font-medium mt-1", item.trendColor)}>
                            {item.trend}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
