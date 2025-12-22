"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle2, CircleDashed } from "lucide-react";

const goals = [
    { text: "Ship MVP", status: "pending" },
    { text: "Run 10k", status: "completed" },
    { text: "Write 500 words", status: "pending" },
    { text: "No Sugar", status: "pending" },
    { text: "Commit Daily", status: "completed" },
    { text: "Read 30 mins", status: "pending" },
    { text: "Launch DayZero", status: "pending" },
    { text: "Gym 4x/week", status: "completed" },
];

export function GoalMarquee() {
    return (
        <div className="w-full max-w-[100vw] bg-zinc-50 border-y border-zinc-200 overflow-hidden py-4 flex relative select-none">
            {/* Gradients to mask edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-50 to-transparent z-10" />

            <motion.div
                className="flex gap-8 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                {[...goals, ...goals, ...goals].map((goal, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-2 bg-white border border-zinc-200 rounded-full shadow-sm hover:border-zinc-300 transition-colors cursor-default"
                    >
                        {goal.status === "completed" ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        ) : (
                            <CircleDashed className="w-4 h-4 text-zinc-400" />
                        )}
                        <span className="font-semibold text-zinc-900 text-sm">{goal.text}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
