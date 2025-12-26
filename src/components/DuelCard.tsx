"use client";

import { cn } from "@/lib/utils";
import { Swords, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DuelCardProps {
    className?: string;
    challenger: {
        name: string;
        username: string;
        hp: number;
        avatar?: string;
    };
    opponent: {
        name: string;
        username: string;
        hp: number;
        avatar?: string;
    };
    daysRemaining: number;
    isActive?: boolean;
}

export function DuelCard({
    className,
    challenger,
    opponent,
    daysRemaining,
}: DuelCardProps) {
    return (
        <div className={cn(
            "relative p-5 rounded-xl border border-white/5 bg-black/50 overflow-hidden",
            className
        )}>
            {/* Header */}
            <div className="relative flex items-center justify-between mb-5">
                <div className="flex items-center gap-2 text-white/50 font-mono text-xs uppercase tracking-widest">
                    <Swords className="w-3 h-3" />
                    7-Day Duel
                </div>
                <div className="text-xs font-mono text-white/30">
                    {daysRemaining}d left
                </div>
            </div>

            {/* Battle Arena */}
            <div className="relative space-y-4">
                {/* Challenger (You) */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-xs">
                                {challenger.name.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                                <div className="font-bold text-white text-sm">{challenger.name}</div>
                                <div className="text-xs text-white/30">@{challenger.username}</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className={cn(
                                "text-lg font-bold font-mono",
                                challenger.hp > 50 ? "text-green-400" : challenger.hp > 25 ? "text-yellow-400" : "text-red-500"
                            )}>
                                {challenger.hp}%
                            </div>
                        </div>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                            className={cn(
                                "h-full transition-all duration-500 rounded-full",
                                challenger.hp > 50 ? "bg-green-500" : challenger.hp > 25 ? "bg-yellow-500" : "bg-red-500"
                            )}
                            style={{ width: `${challenger.hp}%` }}
                        />
                    </div>
                </div>

                {/* VS Divider */}
                <div className="flex items-center justify-center py-1">
                    <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                        <span className="font-black text-white/50 text-xs">VS</span>
                    </div>
                </div>

                {/* Opponent */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/50 font-bold text-xs">
                                {opponent.name.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                                <div className="font-bold text-white text-sm">{opponent.name}</div>
                                <div className="text-xs text-white/30">@{opponent.username}</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className={cn(
                                "text-lg font-bold font-mono",
                                opponent.hp > 50 ? "text-green-400" : opponent.hp > 25 ? "text-yellow-400" : "text-red-500"
                            )}>
                                {opponent.hp}%
                            </div>
                        </div>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                            className={cn(
                                "h-full transition-all duration-500 rounded-full",
                                opponent.hp > 50 ? "bg-green-500" : opponent.hp > 25 ? "bg-yellow-500" : "bg-red-500"
                            )}
                            style={{ width: `${opponent.hp}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="relative mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/30">
                <span>Started 3d ago</span>
                {opponent.hp < 25 && (
                    <span className="flex items-center gap-1 text-green-400">
                        <Trophy className="w-3 h-3" />
                        Victory imminent
                    </span>
                )}
            </div>
        </div>
    );
}

// Challenge Button Component
export function ChallengeButton({ className }: { className?: string }) {
    return (
        <Button
            variant="outline"
            className={cn(
                "border-white/10 text-white/70 hover:bg-white/5 font-mono uppercase tracking-widest text-xs",
                className
            )}
        >
            <Swords className="w-3 h-3 mr-2" />
            Challenge
        </Button>
    );
}
