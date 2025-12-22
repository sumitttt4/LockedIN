"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, Circle, ExternalLink, Globe, Heart, Link as LinkIcon, Lock, Share2, Timer, TrendingUp, Users } from "lucide-react";
import { VerificationCard } from "@/components/features/VerificationCard";

// --- Visual Components ---

function VisualTimer() {
    return (
        <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Pulsing Circles */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="absolute border border-indigo-500/30 rounded-full"
                    initial={{ width: "100%", height: "100%", opacity: 0 }}
                    animate={{
                        width: ["100%", "200%"],
                        height: ["100%", "200%"],
                        opacity: [0.5, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: i * 0.6,
                        ease: "easeOut",
                    }}
                />
            ))}

            {/* Core Timer UI */}
            <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-xl border border-zinc-100 flex flex-col items-center justify-center">
                <div className="flex items-center gap-1 mb-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Timer</span>
                </div>
                <span className="text-3xl font-mono font-bold text-zinc-900 tracking-tighter">25:00</span>
                <span className="text-xs text-zinc-400 mt-1">Deep Work</span>
            </div>

            {/* Floating Badge */}
            <motion.div
                className="absolute -top-4 -right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
                <Globe className="w-3 h-3" /> Live
            </motion.div>
        </div>
    );
}

function VisualNetwork() {
    return (
        <div className="relative w-full h-[300px] flex items-center justify-center">
            {/* Central User */}
            <div className="relative z-20 w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center shadow-xl ring-4 ring-zinc-100">
                <span className="text-white font-bold text-xl">DZ</span>
            </div>

            {/* Connecting Nodes */}
            {[0, 90, 180, 270].map((deg, i) => (
                <motion.div
                    key={i}
                    className="absolute z-10"
                    initial={{ rotate: deg, opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                >
                    <div
                        className="w-[120px] h-[2px] bg-gradient-to-r from-zinc-300 to-transparent origin-left"
                        style={{ transform: `rotate(${deg}deg)` }}
                    />
                    <motion.div
                        className="absolute top-1/2 left-[120px] -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center shadow-sm text-zinc-600"
                        style={{ transform: `rotate(${deg}deg)` }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 3, delay: i }}
                    >
                        {i === 0 && <Share2 className="w-4 h-4" />}
                        {i === 1 && <LinkIcon className="w-4 h-4" />}
                        {i === 2 && <Users className="w-4 h-4" />}
                        {i === 3 && <Heart className="w-4 h-4" />}
                    </motion.div>
                </motion.div>
            ))}

            {/* Background Mesh */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
    )
}

function VisualRevenueCard() {
    return (
        <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-xl w-full max-w-full md:max-w-sm mx-auto relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-[#635BFF] flex items-center justify-center text-white font-bold text-sm">S</div>
                    <span className="font-semibold text-zinc-900">Revenue Goal</span>
                </div>
                <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-white" />
                    <div className="w-6 h-6 rounded-full bg-black border-2 border-white" />
                </div>
            </div>

            {/* Amounts */}
            <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-zinc-900">$8,420</span>
                <span className="text-lg text-zinc-400 font-medium">/ $10,000</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden mb-4">
                <motion.div
                    className="h-full bg-[#635BFF] rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "84%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>

            {/* Footer Badge */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Auto-sourcing
                </div>
                <div className="text-xs font-mono bg-zinc-100 px-2 py-1 rounded text-zinc-500">
                    API_CONNECTED
                </div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#635BFF]/10 rounded-full blur-3xl pointer-events-none" />
        </div>
    )
}


// --- Main Component ---

const features = [
    {
        title: "Create, Track, and Share Your Goals with the World",
        desc: "Set public tasks with custom timers and personal links. Share your progress with friends, family, and the community. Get motivated by public accountability.",
        tag: "Public Task Timer",
        color: "text-indigo-600",
        visual: VisualTimer,
    },
    {
        title: "Automated Verification",
        desc: "Connect your GitHub, Strava, or other tools. DayZero listens for your activity and automatically verifies your progress. No manual check-ins.",
        tag: "Passive Proof",
        color: "text-emerald-600",
        visual: VerificationCard,
    },
    {
        title: "Share your journey publicly... let community support drive success",
        desc: "Make your commitment public with your personal link. Receive encouragement, celebrate milestones together, and let the power of public accountability push you.",
        tag: "Stay Accountable",
        color: "text-emerald-600",
        visual: VisualNetwork,
    },
    {
        title: "Connect your payment API and track revenue goals automatically",
        desc: "Integrate with Stripe, Lemonsqueezy, or Polar to track your revenue goals in real-time. Set MRR, ARR, or total revenue targets and watch your progress sync automatically.",
        tag: "Live Payment Tracking",
        color: "text-[#635BFF]",
        visual: VisualRevenueCard,
    },
];

export function FeatureDeepDive() {
    return (
        <section className="py-24 px-4 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
                {features.map((feature, i) => (
                    <div key={i} className={cn(
                        "flex flex-col md:flex-row items-center gap-12 md:gap-24",
                        i % 2 === 1 && "md:flex-row-reverse"
                    )}>
                        {/* Text Content */}
                        <motion.div
                            className="flex-1 space-y-6"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className={cn("text-sm font-bold uppercase tracking-wider pl-4 border-l-2", feature.color, feature.color.replace("text-", "border-"))}>
                                {feature.tag}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
                                {feature.title}
                            </h2>
                            <p className="text-lg text-zinc-500 leading-relaxed max-w-lg">
                                {feature.desc}
                            </p>
                            <div className="pt-4">
                                <button className="text-sm font-semibold text-zinc-900 flex items-center gap-2 group">
                                    Learn more <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>

                        {/* Visual Content */}
                        <motion.div
                            className="flex-1 w-full flex justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="relative w-full max-w-lg aspect-square md:aspect-[4/3] bg-zinc-50 rounded-[40px] border border-zinc-100 flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                {/* Background Patterns */}
                                <div className="absolute inset-0 pattern-grid opacity-30" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/80 to-transparent pointer-events-none" />

                                {/* The Component Visual */}
                                <div className="relative z-10 w-full px-8">
                                    <feature.visual />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
