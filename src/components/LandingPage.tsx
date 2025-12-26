"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CountdownTimer } from "@/components/landing/CountdownTimer";
import { LiveActivityBadge } from "@/components/landing/LiveActivityBadge";
import {
    ArrowRight,
    Lock,
    Zap,
    Target,
    Trophy,
    DollarSign,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { ContributionGrid } from "@/components/ContributionGrid";
import { DuelCard } from "@/components/DuelCard";
import { LockedInSwitch } from "@/components/LockedInSwitch";
import { motion } from "framer-motion";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            {/* Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Navbar */}
                <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
                    <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
                        <div className="flex items-center gap-2 font-semibold text-lg">
                            <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center glow-white">
                                <Lock className="h-4 w-4 text-black" />
                            </div>
                            <span className="text-white">LockedIn</span>
                        </div>

                        <div className="hidden md:block">
                            <LiveActivityBadge />
                        </div>

                        <div className="flex items-center gap-3">
                            <Link href="/login">
                                <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                                    Sign In
                                </Button>
                            </Link>
                            <Link href="/waitlist">
                                <Button className="bg-white hover:bg-white/90 text-black glow-white font-semibold">
                                    Join Waitlist
                                </Button>
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="pt-20 pb-16 md:pt-28 md:pb-24 relative overflow-hidden">
                        {/* Background Grid */}
                        <div className="absolute inset-0 pattern-grid opacity-40" />

                        <div className="max-w-6xl mx-auto px-6 relative z-10">
                            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                                {/* Countdown Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <CountdownTimer />
                                </motion.div>

                                {/* Headline */}
                                <motion.div
                                    className="space-y-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
                                        <span className="text-white">Another year.</span>
                                        <br />
                                        <span className="text-white">Another broken promise?</span>
                                        <br />
                                        <span className="text-white/40">Not this time.</span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                                        Build in public where{" "}
                                        <span className="font-semibold text-white">showing up daily</span>{" "}
                                        is the only thing that matters.
                                    </p>
                                </motion.div>

                                {/* CTA */}
                                <motion.div
                                    className="w-full max-w-md space-y-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-xl border border-white/10 focus-within:border-white/30 focus-within:bg-white/[0.07] transition-all">
                                        <Input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="border-0 focus-visible:ring-0 shadow-none text-base bg-transparent h-11 font-medium text-white placeholder:text-white/30 pl-4"
                                        />
                                        <Link href="/waitlist" className="flex-shrink-0">
                                            <Button className="h-11 px-6 bg-white hover:bg-white/90 text-black font-semibold rounded-lg glow-white hover:scale-105 transition-transform">
                                                Join Waitlist
                                            </Button>
                                        </Link>
                                    </div>

                                    <p className="text-sm text-white/40">
                                        <span className="text-green-400 font-semibold">$5 early bird</span> · $9 regular · Lifetime access
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* How It Works - Redesigned */}
                    <section className="py-32 border-y border-white/5 relative overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 pattern-grid opacity-20" />

                        <div className="max-w-6xl mx-auto px-6 relative z-10">
                            <div className="text-center mb-20">
                                <div className="inline-block mb-4 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
                                    <span className="text-xs font-mono text-white/60 uppercase tracking-widest">The Protocol</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                                    Three steps. Zero excuses.
                                </h2>
                                <p className="text-xl text-white/50 max-w-2xl mx-auto">
                                    The simplest accountability system that actually works.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                                {/* Step 1 */}
                                <div className="relative group">
                                    {/* Connector line */}
                                    <div className="hidden md:block absolute top-6 left-full w-16 h-px bg-gradient-to-r from-white/20 to-transparent" />

                                    <div className="flex flex-col space-y-6">
                                        {/* Number badge */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                <span className="text-2xl font-black text-white">1</span>
                                            </div>
                                            <div className="h-px flex-1 bg-white/10" />
                                        </div>

                                        {/* Icon */}
                                        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                                            <Target className="w-8 h-8 text-white/70" />
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-3">
                                                Set Your Goal
                                            </h3>
                                            <p className="text-white/50 leading-relaxed">
                                                Ship a product. Build an audience. Hit revenue targets. Pick one battle and commit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative group">
                                    {/* Connector line */}
                                    <div className="hidden md:block absolute top-6 left-full w-16 h-px bg-gradient-to-r from-white/20 to-transparent" />

                                    <div className="flex flex-col space-y-6">
                                        {/* Number badge */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                <span className="text-2xl font-black text-white">2</span>
                                            </div>
                                            <div className="h-px flex-1 bg-white/10" />
                                        </div>

                                        {/* Icon */}
                                        <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all">
                                            <Zap className="w-8 h-8 text-green-400" />
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-3">
                                                Show Up Daily
                                            </h3>
                                            <p className="text-white/50 leading-relaxed">
                                                One login per day = proof of life. Your public grid turns green or red. No hiding.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative group">
                                    <div className="flex flex-col space-y-6">
                                        {/* Number badge */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                <span className="text-2xl font-black text-white">3</span>
                                            </div>
                                            <div className="h-px flex-1 bg-white/10" />
                                        </div>

                                        {/* Icon */}
                                        <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/30 transition-all">
                                            <Trophy className="w-8 h-8 text-orange-400" />
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-3">
                                                Compete & Win
                                            </h3>
                                            <p className="text-white/50 leading-relaxed">
                                                Challenge friends to 7-day duels. Miss a day? Lose HP. Loser wears the badge of shame.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Features Bento Grid */}
                    <section className="py-20">
                        <div className="max-w-6xl mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Everything you need to stay accountable
                                </h2>
                                <p className="text-lg text-white/60">
                                    No fluff. Just the tools that force you to show up.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Grid of Truth - Large */}
                                <Card className="md:col-span-2 bg-white/[0.02] border-white/10 shadow-lg overflow-hidden">
                                    <CardContent className="p-8 md:p-10">
                                        <div className="flex items-start justify-between mb-6">
                                            <div>
                                                <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-2">
                                                    <Target className="w-4 h-4" />
                                                    THE PROOF
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                    Grid of Truth
                                                </h3>
                                                <p className="text-white/50 max-w-xl">
                                                    365-day public consistency record. Green = showed up. Red = missed.
                                                    No editing. No hiding. Pure accountability.
                                                </p>
                                            </div>
                                        </div>
                                        <ContributionGrid />
                                    </CardContent>
                                </Card>

                                {/* Focus Mode */}
                                <Card className="bg-white/[0.02] border-white/10 shadow-lg">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-2 text-white/70 text-sm font-medium mb-2">
                                            <Zap className="w-4 h-4" />
                                            THE ACTION
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            Focus Mode
                                        </h3>
                                        <p className="text-white/50 mb-6 text-sm">
                                            Flip the switch. Broadcast your deep work. Let the world see you lock in.
                                        </p>
                                        <div className="flex justify-center">
                                            <LockedInSwitch />
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Revenue Tracking */}
                                <Card className="bg-white/[0.02] border-white/10 shadow-lg">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-2">
                                            <TrendingUp className="w-4 h-4" />
                                            THE METRICS
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            Live Payment Tracking
                                        </h3>
                                        <p className="text-white/50 mb-6 text-sm leading-relaxed">
                                            Connect your payment API and track revenue goals automatically. Integrate with Stripe, Dodo, Polar, or Lemon Squeezy to track your revenue goals in real-time. Set MRR, ARR, or total revenue targets and watch your progress sync automatically.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                                <div className="flex justify-between items-baseline mb-2">
                                                    <span className="text-xs text-white/40">Current MRR</span>
                                                    <DollarSign className="w-4 h-4 text-white/40" />
                                                </div>
                                                <div className="font-mono text-3xl font-bold text-white">$849</div>
                                                <div className="mt-3 space-y-1.5">
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-white/50">Monthly Growth</span>
                                                        <span className="text-green-400 font-semibold">+23%</span>
                                                    </div>
                                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                        <div className="h-full bg-green-500 rounded-full" style={{ width: '78%' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* 1v1 Duels */}
                                <Card className="md:col-span-2 bg-white/[0.02] border-white/10 shadow-lg">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-2">
                                            <Trophy className="w-4 h-4" />
                                            THE ARENA
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            1v1 Consistency Battles
                                        </h3>
                                        <p className="text-white/50 mb-6">
                                            Challenge friends to 7-day duels. Street Fighter-style health bars.
                                            Winner takes credibility. Loser wears the shame badge.
                                        </p>
                                        <div className="max-w-md">
                                            <DuelCard
                                                challenger={{ name: "You", username: "you", hp: 100 }}
                                                opponent={{ name: "Alex", username: "alex", hp: 45 }}
                                                daysRemaining={4}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="py-24 border-t border-white/5">
                        <div className="max-w-4xl mx-auto px-6 text-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-bold text-white">
                                    1,247 spots already reserved.
                                    <br />
                                    <span className="text-green-400">Will you join them?</span>
                                </h2>
                                <p className="text-xl text-white/60">
                                    <span className="text-green-400 font-semibold">Early bird: $5</span> · Regular: $9 · Lifetime access
                                </p>

                                <div className="flex flex-col items-center gap-4 pt-6">
                                    <Link href="/waitlist">
                                        <Button size="lg" className="h-14 px-10 bg-white hover:bg-white/90 text-black text-lg font-semibold glow-white hover:scale-105 transition-transform">
                                            Join Waitlist
                                        </Button>
                                    </Link>
                                    <CountdownTimer />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="border-t border-white/5 py-12">
                        <div className="max-w-6xl mx-auto px-6">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="h-6 w-6 bg-white rounded-lg flex items-center justify-center">
                                        <Lock className="h-3 w-3 text-black" />
                                    </div>
                                    <span className="font-semibold text-white">LockedIn</span>
                                </div>

                                <div className="flex items-center gap-6 text-sm text-white/40">
                                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                                </div>

                                <p className="text-sm text-white/40">
                                    © 2025 LockedIn. Consistency is the only currency.
                                </p>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
}
