"use client";

import { motion } from "framer-motion";
import { Github, DollarSign, Swords, Smartphone, Laptop, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export function FeaturesBento() {
    return (
        <section className="py-16 md:py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">
                        Automate your ambition.
                    </h2>
                    <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
                        Manual tracking is for amateurs. LockedIn connects to your real work to verify your progress instantly.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {/* Card 1: Automated Tracking (Large) */}
                    <motion.div
                        variants={cardVariants}
                        className="md:col-span-2 row-span-2 bg-zinc-50 border border-zinc-200 rounded-3xl p-8 relative overflow-hidden group hover:border-zinc-300 transition-colors"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-zinc-200 mb-6 shadow-sm">
                                <Github className="w-6 h-6 text-zinc-900" />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 mb-2">Automated Verification</h3>
                            <p className="text-zinc-500 max-w-xs">Connecting GitHub, Strava, and Stripe allows for "Passive Proof". You do the work; we verify it.</p>
                        </div>
                        <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-zinc-200/50 to-transparent opacity-50 rounded-tl-full translate-x-12 translate-y-12" />
                    </motion.div>

                    {/* Card 2: The Stake (Tall) */}
                    <motion.div
                        variants={cardVariants}
                        className="row-span-2 bg-zinc-900 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center border border-zinc-700 mb-6">
                                <Lock className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">High Stakes</h3>
                            <p className="text-zinc-400 text-sm">Put money on the line. If you miss a day, you lose it. Simple.</p>
                        </div>
                        <div className="mt-8 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-zinc-400">At Risk</span>
                                <span className="text-red-400 font-mono">$50.00</span>
                            </div>
                            <div className="w-full bg-zinc-700 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-red-500 w-3/4 h-full" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: PvP Mode */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 hover:border-zinc-300 transition-colors"
                    >
                        <Swords className="w-8 h-8 text-zinc-900 mb-4" />
                        <h3 className="text-xl font-bold text-zinc-900 mb-1">PvP Mode</h3>
                        <p className="text-sm text-zinc-500">Challenge a rival. Winner takes existing stake.</p>
                    </motion.div>

                    {/* Card 4: Cross Platform */}
                    <motion.div
                        variants={cardVariants}
                        className="md:col-span-2 bg-gradient-to-r from-zinc-50 to-white border border-zinc-200 rounded-3xl p-8 flex items-center justify-between overflow-hidden relative"
                    >
                        <div className="z-10 max-w-sm">
                            <h3 className="text-xl font-bold text-zinc-900 mb-1">Cross-Platform</h3>
                            <p className="text-sm text-zinc-500">Seamless sync between Desktop and Mobile. Your goals, everywhere.</p>
                        </div>
                        <div className="flex gap-4 opacity-50 absolute right-8 top-1/2 -translate-y-1/2">
                            <Smartphone className="w-16 h-16 text-zinc-300" />
                            <Laptop className="w-16 h-16 text-zinc-300" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
