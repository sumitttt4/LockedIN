"use client";

import React, { useState } from "react";
import {
    Activity,
    Link as LinkIcon,
    Calendar,
    AlertTriangle,
    Users,
    Eye,
    Check
} from "lucide-react";
import { cn } from "@/lib/utils";
// --- WIDGET 1: THE METRIC PAYLOAD ---
export function MetricPayload() {
    const [source, setSource] = useState("stripe");

    // Mock Data based on source
    const dataDisplay = {
        stripe: { value: "$8,420", label: "/ $10,000 MRR", percent: 84, color: "bg-[#00FF00]" },
        github: { value: "42", label: "Commits / Week", percent: 65, color: "bg-black" },
        strava: { value: "124", label: "km / Month", percent: 40, color: "bg-orange-500" },
    };

    const currentData = dataDisplay[source as keyof typeof dataDisplay];

    return (
        <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">// AUTOMATED_PROOF</span>
                <div className="flex items-center gap-2 px-2 py-1 bg-zinc-50 border border-zinc-200">
                    <div className="w-2 h-2 bg-[#00FF00] rounded-none animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wide">Live</span>
                </div>
            </div>

            <div className="space-y-4">
                {/* Source Selector */}
                <div className="relative">
                    <select
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        className="w-full appearance-none bg-zinc-50 border-2 border-black px-4 py-3 font-mono text-sm uppercase font-bold focus:outline-none focus:bg-white rounded-none cursor-pointer"
                    >
                        <option value="stripe">Stripe Connect</option>
                        <option value="github">GitHub Stats</option>
                        <option value="strava">Strava Activity</option>
                    </select>
                    <LinkIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-zinc-500" />
                </div>

                {/* Main Data Display */}
                <div>
                    <div className="flex items-baseline gap-3">
                        <span className="text-5xl font-black tracking-tighter text-black tabular-nums">
                            {currentData.value}
                        </span>
                        <span className="font-mono text-sm text-zinc-500 font-bold">
                            {currentData.label}
                        </span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                    <div className="h-6 w-full bg-zinc-100 border-2 border-black relative">
                        <div
                            className={cn("h-full border-r-2 border-black transition-all duration-500", currentData.color)}
                            style={{ width: `${currentData.percent}%` }}
                        />
                    </div>
                    <p className="text-xs text-right font-mono text-zinc-400 uppercase">
                        {currentData.percent}% Complete
                    </p>
                </div>
            </div>

            <div className="mt-auto pt-4 border-t-2 border-zinc-100">
                <p className="text-xs flex items-center gap-2 text-zinc-500">
                    <Activity className="w-3 h-3" />
                    Auto-syncing via {source.charAt(0).toUpperCase() + source.slice(1)} API
                </p>
            </div>
        </div>
    );
}

import { createGoal } from "@/app/dashboard/actions";

// --- WIDGET 2: THE NORTH STAR DIRECTIVE ---
export function NorthStarDirective() {
    const [stake, setStake] = useState("penalty");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    async function handleGoalCreation(formData: FormData) {
        setIsLoading(true);
        setMessage(null);

        formData.delete('stakes');
        formData.append('stakes', stake);

        const result = await createGoal(formData);

        if (result?.error) {
            setMessage({ type: 'error', text: result.error });
        } else if (result?.success) {
            setMessage({ type: 'success', text: result.success });
        }

        setIsLoading(false);
    }

    return (
        <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6">
            <div className="space-y-1">
                <h3 className="font-bold text-lg uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-black" />
                    New Directive
                </h3>
                <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">// DEFINE_PROTOCOL_GOAL</p>
            </div>

            <form action={handleGoalCreation} className="space-y-4 flex-1 flex flex-col">
                {/* Directive Input */}
                <div className="space-y-2">
                    <label className="font-mono text-xs font-bold uppercase text-zinc-600 block">
                        Objective
                    </label>
                    <input
                        name="title"
                        type="text"
                        required
                        placeholder="e.g. SHIP_MVP_V1"
                        className="w-full bg-zinc-50 border-2 border-black p-3 font-mono text-sm font-bold uppercase placeholder:text-zinc-300 focus:outline-none focus:bg-white rounded-none focus:ring-1 focus:ring-black"
                    />
                </div>

                {/* Deadline Input */}
                <div className="space-y-2">
                    <label className="font-mono text-xs font-bold uppercase text-zinc-600 block">
                        Hard Deadline
                    </label>
                    <div className="relative">
                        <input
                            name="deadline"
                            type="date"
                            required
                            className="w-full bg-zinc-50 border-2 border-black p-3 font-mono text-sm font-bold uppercase focus:outline-none focus:bg-white rounded-none"
                        />
                    </div>
                </div>

                {/* Stones (Stakes) Selection */}
                <div className="space-y-3 pt-2">
                    <label className="font-mono text-xs font-bold uppercase text-zinc-600 block pb-1 border-b border-black">
                        Select Stakes
                    </label>

                    <div className="space-y-2">
                        {['burn_badge', 'penalty_50', 'public_shame'].map((opt) => (
                            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative w-5 h-5 border-2 border-black bg-white flex items-center justify-center">
                                    <input
                                        type="radio"
                                        name="stakes"
                                        value={opt}
                                        checked={stake === opt}
                                        onChange={() => setStake(opt)}
                                        className="appearance-none absolute inset-0 cursor-pointer"
                                    />
                                    <div className={cn(
                                        "w-2.5 h-2.5 bg-black transition-opacity",
                                        stake === opt ? "opacity-100" : "opacity-0"
                                    )} />
                                </div>
                                <span className={cn(
                                    "font-mono text-xs font-bold uppercase transition-colors",
                                    stake === opt ? "text-black" : "text-zinc-400 group-hover:text-zinc-600"
                                )}>
                                    {opt === 'burn_badge' && "Burn Founder Badge"}
                                    {opt === 'penalty_50' && "$50 Financial Penalty"}
                                    {opt === 'public_shame' && "Post Failure to X/Twitter"}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Feedback Message */}
                {message && (
                    <div className={cn(
                        "p-3 border-2 text-xs font-bold uppercase tracking-wide",
                        message.type === 'success' ? "bg-green-50 border-green-500 text-green-700" : "bg-red-50 border-red-500 text-red-700"
                    )}>
                        {message.text}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-auto w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-[#00FF00] hover:text-black border-2 border-transparent hover:border-black transition-all active:translate-y-1 rounded-none text-sm gap-2 flex items-center justify-center disabled:opacity-50"
                >
                    {isLoading ? "Committing..." : (
                        <>Sign & Commit <Check className="w-4 h-4" /></>
                    )}
                </button>
            </form>
        </div>
    );
}

// --- WIDGET 3: THE WITNESS LIST ---
export function WitnessList() {
    const witnesses = [
        { name: "alex_builds", avatar: "Alexander" },
        { name: "sarah_ship", avatar: "Sarah" },
        { name: "dave_dev", avatar: "David" },
        { name: "max_power", avatar: "Max" },
        { name: "lisa_code", avatar: "Lisa" },
    ];

    return (
        <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">// ACTIVE_WITNESSES</span>
                <div className="flex items-center gap-1 text-zinc-400">
                    <Eye className="w-3 h-3" />
                    <span className="text-[10px] font-bold">12 Total</span>
                </div>
            </div>

            <div className="flex-1 space-y-4">
                {witnesses.map((w, i) => (
                    <div key={i} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 border border-black bg-zinc-100 rounded-none overflow-hidden">
                                <img
                                    src={`https://api.dicebear.com/9.x/notionists/svg?seed=${w.avatar}&backgroundColor=c0aede`}
                                    alt={w.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-sm leading-none group-hover:underline decoration-2 underline-offset-2">@{w.name}</p>
                            </div>
                        </div>
                        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest group-hover:text-black transition-colors">
                            Watching
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t-2 border-zinc-100">
                <div className="flex items-start gap-2 bg-zinc-50 p-3 border border-zinc-200">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-[10px] font-bold text-zinc-600 uppercase leading-tight">
                        Warning: If you fail your directive, these 12 users will be notified immediately.
                    </p>
                </div>
            </div>
        </div>
    );
}

export function RealFeaturesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MetricPayload />
            <NorthStarDirective />
            <WitnessList />
        </div>
    );
}
