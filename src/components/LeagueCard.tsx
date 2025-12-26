"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Trophy, Check, Zap, Crown } from "lucide-react";

interface LeagueCardProps {
    className?: string;
}

export function LeagueCard({ className }: LeagueCardProps) {
    const features = [
        "Access to Global Leaderboard",
        "Unlimited AI Protocols",
        "Verified Badge on Profile",
        "Priority Challenge Queue",
        "Exclusive Discord Access",
    ];

    return (
        <div className={cn(
            "relative p-8 overflow-hidden",
            className
        )}>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

            {/* Badge */}
            <div className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono uppercase tracking-widest mb-6">
                <Crown className="w-3 h-3" />
                Premium League
            </div>

            {/* Title */}
            <div className="relative mb-6">
                <h3 className="text-xl font-bold text-white mb-2">January Builders League</h3>
                <p className="text-white/40 text-sm">
                    Free users play for fun. Pros play for blood.
                </p>
            </div>

            {/* Price */}
            <div className="relative mb-6">
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">₹100</span>
                    <span className="text-white/40 text-sm">/ month</span>
                </div>
            </div>

            {/* Features */}
            <ul className="relative space-y-2 mb-6">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs">
                        <Check className="w-3 h-3 text-green-400" />
                        <span className="text-white/70">{feature}</span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <Button
                className="relative w-full h-12 bg-white hover:bg-white/90 text-black font-bold font-mono"
            >
                <Zap className="w-4 h-4 mr-2 fill-current" />
                Join League
            </Button>

            {/* Prize Pool */}
            <div className="relative flex items-center justify-center gap-2 mt-4 text-xs font-mono text-white/30">
                <Trophy className="w-3 h-3 text-yellow-400" />
                Prize Pool: ₹10,000+
            </div>
        </div>
    );
}
