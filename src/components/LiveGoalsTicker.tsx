"use client";

import { cn } from "@/lib/utils";

const GOALS = [
    { user: "@ALEX_DEV", goal: "SHIP MVP BY FRIDAY", avatar: "Alex" },
    { user: "@SARAH_RUNS", goal: "SUB-3 HOUR MARATHON", avatar: "Sarah" },
    { user: "@DAVID_K", goal: "$10K MRR OR BUST", avatar: "David" },
    { user: "@PRIYA_DES", goal: "LEARN SPANISH (B1)", avatar: "Priya" },
    { user: "@JASON_BLD", goal: "PUBLISH 30 DAYS CONTENT", avatar: "Jason" },
    { user: "@MIKEY_G", goal: "CLOSE 5 PREMIUM CLIENTS", avatar: "Mikey" },
    { user: "@EMILY_WRT", goal: "FINISH MANUSCRIPT DRAFT", avatar: "Emily" },
    { user: "@CARLOS_CD", goal: "DEPLOY REFACTOR TO PROD", avatar: "Carlos" },
    { user: "@LISA_FIT", goal: "HIT 225LB DEADLIFT", avatar: "Lisa" },
    { user: "@ROB_INDIE", goal: "LAUNCH ON PRODUCT HUNT", avatar: "Rob" },
    { user: "@SOPHIE_UX", goal: "REDESIGN PORTFOLIO", avatar: "Sophie" },
    { user: "@MARCUS_AI", goal: "TRAIN LLM MODEL", avatar: "Marcus" },
    { user: "@JENNA_CEO", goal: "HIRE SALES LEAD", avatar: "Jenna" },
    { user: "@TIM_GROWTH", goal: "REACH 10K SUBS", avatar: "Tim" },
    { user: "@NOAH_APP", goal: "FIX AUTH BUG", avatar: "Noah" }
];

export function LiveGoalsTicker({ className }: { className?: string }) {
    return (
        <div className={cn("w-full h-14 bg-black border-y-2 border-black flex items-center overflow-hidden", className)}>
            <div className="flex animate-marquee whitespace-nowrap">
                {/* First Set */}
                <div className="flex items-center">
                    {GOALS.map((item, i) => (
                        <div key={`set1-${i}`} className="flex items-center mx-8">
                            <img
                                src={`https://api.dicebear.com/9.x/notionists/svg?seed=${item.avatar}&backgroundColor=c0aede,b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
                                alt={item.user}
                                className="w-8 h-8 rounded-full border border-white/20 mr-3"
                            />
                            <span className="text-white font-bold font-mono text-sm md:text-base mr-3">{item.user}</span>
                            <span className="text-yellow-400 mr-3">⚡</span>
                            <span className="text-[#00FF00] font-mono text-sm md:text-base">{item.goal}</span>
                        </div>
                    ))}
                </div>
                {/* Second Set (Duplicate for seamless loop) */}
                <div className="flex items-center" aria-hidden="true">
                    {GOALS.map((item, i) => (
                        <div key={`set2-${i}`} className="flex items-center mx-8">
                            <img
                                src={`https://api.dicebear.com/9.x/notionists/svg?seed=${item.avatar}&backgroundColor=c0aede,b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
                                alt={item.user}
                                className="w-8 h-8 rounded-full border border-white/20 mr-3"
                            />
                            <span className="text-white font-bold font-mono text-sm md:text-base mr-3">{item.user}</span>
                            <span className="text-yellow-400 mr-3">⚡</span>
                            <span className="text-[#00FF00] font-mono text-sm md:text-base">{item.goal}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
