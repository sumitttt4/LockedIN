"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitCommit, CheckCircle2, Terminal, Loader2, Lock } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a standard clsx utility

export function VerificationCard() {
    const [step, setStep] = useState(0);

    // Cycle through the verification simulation
    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev === 4 ? 0 : prev + 1));
        }, 3500); // Reset every 3.5s for the demo loop
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">

            {/* 1. Header: The "Proof" Statement */}
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="rounded-md bg-zinc-100 p-1.5">
                        <GitCommit className="h-4 w-4 text-zinc-600" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-900">Auto-Verification</span>
                </div>
                {step === 3 ? (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700"
                    >
                        <CheckCircle2 className="h-3 w-3" /> Verified
                    </motion.div>
                ) : (
                    <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500">
                        <Loader2 className="h-3 w-3 animate-spin" /> Syncing
                    </div>
                )}
            </div>

            {/* 2. The Interactive "Terminal" Area */}
            <div className="relative flex flex-col gap-3">

                {/* Step 1: Listening for Commits */}
                <VerificationStep
                    isActive={step >= 0}
                    isComplete={step > 0}
                    icon={<Terminal className="h-4 w-4" />}
                    label="Listening to repo: dayzero-web..."
                    subLabel="main branch"
                />

                {/* Step 2: Commit Detected */}
                <VerificationStep
                    isActive={step >= 1}
                    isComplete={step > 1}
                    icon={<GitCommit className="h-4 w-4" />}
                    label="New Commit Detected"
                    subLabel="feat: integrated stripe billing (82a1b)"
                    highlight
                />

                {/* Step 3: Logic Check */}
                <VerificationStep
                    isActive={step >= 2}
                    isComplete={step > 2}
                    icon={<Lock className="h-4 w-4" />}
                    label="Verifying timestamps..."
                    subLabel="Delta: +2m 14s from goal start"
                />

                {/* Success Overlay (Stamps on top) */}
                <AnimatePresence>
                    {step === 3 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm"
                        >
                            <div className="rounded-full bg-emerald-100 p-3 mb-2">
                                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h4 className="text-lg font-bold text-zinc-900">Streak Extended</h4>
                            <p className="text-sm text-zinc-500">Day 14 • +$50.00 Saved</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Subtle Bottom Fade for Depth */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
        </div>
    );
}

// Sub-component for clean code
function VerificationStep({ isActive, isComplete, icon, label, subLabel, highlight = false }: any) {
    return (
        <motion.div
            animate={{ opacity: isActive ? 1 : 0.4, x: isActive ? 0 : -10 }}
            className={cn(
                "flex items-start gap-3 rounded-lg border p-3 transition-colors",
                isActive ? "bg-white border-zinc-200" : "bg-transparent border-transparent",
                highlight && isActive && "bg-zinc-50 border-zinc-300 ring-1 ring-zinc-100"
            )}
        >
            <div className={cn(
                "mt-0.5 flex h-6 w-6 items-center justify-center rounded-md",
                isComplete ? "bg-emerald-100 text-emerald-600" : "bg-zinc-100 text-zinc-500"
            )}>
                {isComplete ? <CheckCircle2 className="h-3.5 w-3.5" /> : icon}
            </div>
            <div>
                <p className={cn("text-sm font-medium leading-none", isActive ? "text-zinc-900" : "text-zinc-400")}>
                    {label}
                </p>
                <p className="mt-1 text-xs font-mono text-zinc-500">{subLabel}</p>
            </div>
        </motion.div>
    );
}
