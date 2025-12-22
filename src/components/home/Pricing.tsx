"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-white border-t border-zinc-200">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-6">
                    Join the Protocol.
                </h2>
                <p className="text-lg text-zinc-500 mb-12 max-w-xl mx-auto">
                    No subscriptions. Just pure accountability.
                </p>

                <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 md:p-12 max-w-lg mx-auto shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-zinc-900 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                        Early Access
                    </div>

                    <div className="flex items-baseline justify-center gap-2 mb-8">
                        <span className="text-5xl font-bold text-zinc-900 tracking-tight">$5</span>
                        <span className="text-zinc-500 font-medium">/ beta</span>
                    </div>

                    <ul className="space-y-4 mb-8 text-left max-w-xs mx-auto">
                        {[
                            "Unlimited Goals & Streaks",
                            "All Integrations (GitHub, Strava)",
                            "PvP Mode Access",
                            "Data Export",
                            "Priority Support"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-zinc-700">
                                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Button className="w-full h-14 rounded-full text-lg font-semibold bg-zinc-900 hover:bg-zinc-800 text-white shadow-lg shadow-zinc-200">
                        Start Building Streak
                    </Button>
                    <p className="text-xs text-zinc-400 mt-4">
                        Limited spots available for beta cohort.
                    </p>
                </div>
            </div>
        </section>
    );
}
