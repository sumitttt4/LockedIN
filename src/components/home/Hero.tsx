"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 20,
        },
    },
};

const tickerItems = [
    { text: "Alex just staked $50 on Gym", icon: Zap },
    { text: "Sarah verified Stripe Revenue", icon: Trophy },
    { text: "David shipped Day 14", icon: Clock },
    { text: "Michael locked in 5AM Club", icon: Zap },
    { text: "Emma hit 10k MRR goal", icon: Trophy },
];

export function Hero() {
    return (
        <section className="relative pt-24 pb-12 md:pt-36 md:pb-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
                        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
                        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
                        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
                    `,
                }}
            />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-radial from-emerald-50/40 to-transparent opacity-50 -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Eyebrow */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold tracking-wide uppercase">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            PvP Productivity is here
                        </span>
                    </motion.div>

                    {/* Headlines */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
                            Don&apos;t just set goals.{" "}
                            <span className="relative inline-block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                                Prove them.
                                <svg
                                    className="absolute -bottom-2 w-full h-2 text-blue-500 opacity-20"
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M0 5 Q 50 10 100 5"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        fill="none"
                                    />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                            The public ledger for your ambitions. Verify streaks, build proof, and
                            ship faster than you ever thought possible.
                        </p>
                    </motion.div>

                    {/* Interactive Input */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full max-w-md relative group"
                    >
                        <div className="relative flex items-center transform transition-transform duration-200 focus-within:scale-105">
                            <span className="absolute left-6 text-zinc-400 font-medium select-none z-10 text-lg">
                                dayzero.so/
                            </span>
                            <Input
                                className="h-16 pl-[9rem] pr-44 rounded-full border-zinc-200 bg-white shadow-xl shadow-zinc-200/20 text-lg focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:border-zinc-900 hover:border-zinc-300 transition-all font-medium"
                                placeholder="yourname"
                            />
                            <div className="absolute right-2 top-2 bottom-2">
                                <Button
                                    size="lg"
                                    className="h-full rounded-full bg-zinc-900 text-white hover:bg-zinc-800 font-semibold px-6 transition-all hover:scale-105 text-base shadow-lg shadow-zinc-900/20"
                                >
                                    Claim Handle
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                        <p className="text-xs text-zinc-400 mt-2 text-center md:text-left pl-2">
                            Free forever for early believers.
                        </p>
                    </motion.div>

                    {/* Social Proof Ticker */}

                </motion.div>
            </div>

            <style jsx global>{`
        .fade-mask {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
        </section>
    );
}
