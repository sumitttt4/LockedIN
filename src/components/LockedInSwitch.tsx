"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, ZapOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface LockedInSwitchProps {
    onToggle?: (isLockedIn: boolean) => void;
    className?: string;
}

export function LockedInSwitch({ onToggle, className }: LockedInSwitchProps) {
    const [isLockedIn, setIsLockedIn] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isLockedIn) {
            interval = setInterval(() => {
                setElapsedTime((prev) => prev + 1);
            }, 1000);
        } else {
            setElapsedTime(0);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isLockedIn]);

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const handleToggle = () => {
        const newState = !isLockedIn;
        setIsLockedIn(newState);
        onToggle?.(newState);
    };

    return (
        <div className={cn("flex flex-col items-center gap-8", className)}>
            {/* Timer Display */}
            <div className={cn(
                "text-5xl md:text-7xl font-mono font-bold tracking-tighter transition-all duration-500",
                isLockedIn ? "text-green-400" : "text-white/20"
            )}>
                {formatTime(elapsedTime)}
            </div>

            {/* Status Label */}
            <div className={cn(
                "flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-all duration-300",
                isLockedIn ? "text-green-400" : "text-white/40"
            )}>
                <span className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    isLockedIn ? "bg-green-400 animate-pulse" : "bg-white/20"
                )} />
                {isLockedIn ? "Currently Locked In" : "Ready to Lock In"}
            </div>

            {/* The Switch Button */}
            <Button
                onClick={handleToggle}
                size="lg"
                className={cn(
                    "relative h-16 w-56 rounded-full text-base font-bold uppercase tracking-widest transition-all duration-500",
                    isLockedIn
                        ? "bg-green-500 text-black hover:bg-green-400 glow-green-intense"
                        : "bg-white text-black hover:bg-white/90"
                )}
            >
                <span className="flex items-center gap-2">
                    {isLockedIn ? (
                        <>
                            <Zap className="w-5 h-5 fill-current" />
                            Locked In
                        </>
                    ) : (
                        <>
                            <ZapOff className="w-5 h-5" />
                            Lock In
                        </>
                    )}
                </span>
            </Button>

            {/* Instruction Text */}
            <p className="text-xs text-white/30 font-mono text-center max-w-xs">
                {isLockedIn
                    ? "Focus mode active. Click to end session."
                    : "Click to start. Your status will be visible."
                }
            </p>
        </div>
    );
}
