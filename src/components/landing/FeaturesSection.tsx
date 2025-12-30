"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ContributionGrid } from "@/components/ContributionGrid";
import { DuelCard } from "@/components/DuelCard";
import { DailyLogPreview } from "@/components/landing/DailyLogPreview";
import {
    Target,
    Zap,
    TrendingUp,
    Trophy,
    Terminal,
    Lock,
    Check
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export function FeaturesSection() {
    return (
        <section id="features" className="py-24 bg-transparent border-t border-zinc-200">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-zinc-900 mb-6 uppercase tracking-tighter">
                        The Protocol
                    </h2>
                    <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-medium">
                        A battle-tested accountability system for those who refuse to settle.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[400px]">

                    {/* CARD 1: THE EXECUTION LEDGER (Wide) */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:col-span-7 bg-zinc-50 border-2 border-black p-0 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col group"
                    >
                        <div className="p-6 border-b-2 border-black bg-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-100 border border-black group-hover:bg-[#00FF00] transition-colors">
                                    <Target className="w-5 h-5 text-black" />
                                </div>
                                <div>
                                    <h3 className="font-black uppercase text-sm tracking-tight text-black">The Execution Ledger</h3>
                                    <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase">// PHASE_01</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-center gap-6 bg-white/50">
                            <p className="text-zinc-600 max-w-md text-sm leading-relaxed font-medium">
                                365-day public consistency record. No editing. No hiding.
                                <span className="text-black font-bold"> Pure accountability.</span>
                            </p>
                            <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] overflow-x-auto">
                                <ContributionGrid className="min-w-[500px] md:min-w-0" />
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2: FOCUS MODE (Medium) */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:col-span-5 bg-zinc-900 border-2 border-black p-0 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col group"
                    >
                        <div className="p-6 border-b-2 border-zinc-800 flex items-center justify-between text-white bg-black">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-zinc-800 border border-zinc-700 group-hover:bg-[#00FF00] group-hover:border-black transition-all">
                                    <Zap className="w-5 h-5 text-white group-hover:text-black" />
                                </div>
                                <div>
                                    <h3 className="font-black uppercase text-sm tracking-tight">Initiate Protocol</h3>
                                    <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase">// PHASE_02</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-500 animate-pulse"></span>
                                <span className="font-mono text-[10px] uppercase font-bold text-red-500">IDLE</span>
                            </div>
                        </div>
                        <div className="flex-1 p-8 flex flex-col justify-center items-center text-center bg-[#0a0a0a]">
                            <div className="font-mono text-6xl font-black tracking-tighter text-white tabular-nums mb-8">
                                00:00:00
                            </div>
                            <button className="w-full bg-white text-black py-4 font-black uppercase tracking-widest hover:bg-[#00FF00] hover:scale-[1.02] transition-all active:translate-y-1">
                                START SESSION
                            </button>
                        </div>
                    </motion.div>

                    {/* CARD 3: DAILY LOG (Bottom Left) */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:col-span-4 bg-zinc-50 border-2 border-black p-0 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col group"
                    >
                        <div className="p-4 border-b-2 border-black bg-white flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Terminal className="w-4 h-4 text-black" />
                                <h3 className="font-black uppercase text-[12px] tracking-tight text-black">Daily Entry</h3>
                            </div>
                            <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase">PH_03</p>
                        </div>
                        <div className="flex-1 p-4 overflow-hidden bg-white/50">
                            <DailyLogPreview className="w-full h-full border-2 border-black rounded-none shadow-none bg-white p-0" />
                        </div>
                    </motion.div>

                    {/* CARD 4: VISUAL PROOF (Bottom Center) */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:col-span-4 bg-white border-2 border-black p-0 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col group"
                    >
                        <div className="p-4 border-b-2 border-black flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-black" />
                                <h3 className="font-black uppercase text-[12px] tracking-tight text-black">Visual Proof</h3>
                            </div>
                            <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase">PH_04</p>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-center relative">
                            {/* Simple Stats Visualization */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="font-black text-4xl tracking-tighter">$8,420</span>
                                    <span className="font-mono text-xs text-zinc-400">/ $10,000</span>
                                </div>
                                <div className="h-6 w-full border-2 border-black bg-zinc-100 p-1">
                                    <div className="h-full bg-[#00FF00] border-r-2 border-black w-[84%]" />
                                </div>
                                <div className="grid grid-cols-2 gap-2 pt-4">
                                    <div className="border border-black p-2 bg-zinc-50">
                                        <div className="text-[10px] font-bold text-zinc-500 uppercase">Stripe</div>
                                        <div className="font-black text-sm">CONNECTED</div>
                                    </div>
                                    <div className="border border-black p-2 bg-zinc-50">
                                        <div className="text-[10px] font-bold text-zinc-500 uppercase">GitHub</div>
                                        <div className="font-black text-sm">SYNCED</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 5: THE ARENA (Bottom Right) */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:col-span-4 bg-orange-50 border-2 border-black p-0 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col group"
                    >
                        <div className="p-4 border-b-2 border-black bg-white flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-black" />
                                <h3 className="font-black uppercase text-[12px] tracking-tight text-black">1v1 Battles</h3>
                            </div>
                            <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase">PH_05</p>
                        </div>
                        <div className="flex-1 p-4 flex items-center justify-center overflow-hidden">
                            <div className="scale-90 transform-gpu w-full">
                                <DuelCard
                                    challenger={{ name: "You", username: "you", hp: 100 }}
                                    opponent={{ name: "Alex", username: "alex", hp: 45 }}
                                    daysRemaining={4}
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
