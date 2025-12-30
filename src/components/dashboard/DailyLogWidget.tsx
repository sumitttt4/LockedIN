"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { commitLog } from "@/app/dashboard/actions";

export function DailyLogWidget() {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    async function handleLogCommit(formData: FormData) {
        setIsLoading(true);
        setMessage(null);

        const result = await commitLog(formData);

        if (result?.error) {
            setMessage({ type: 'error', text: result.error });
        } else if (result?.success) {
            setMessage({ type: 'success', text: result.success });
            // Optional: clear form
            (document.getElementById('log-form') as HTMLFormElement)?.reset();
        }

        setIsLoading(false);
    }

    return (
        <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6 h-full">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h3 className="font-bold text-lg uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 bg-black animate-pulse" />
                        Daily Log
                    </h3>
                    <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">// COMMIT_PROGRESS</p>
                </div>
                <div className="px-2 py-1 bg-zinc-100 border border-black font-mono text-xs font-bold uppercase">
                    DAY 01
                </div>
            </div>

            <form id="log-form" action={handleLogCommit} className="flex-1 flex flex-col gap-4">
                <div className="relative flex-1 group">
                    <div className="absolute top-3 left-3 font-mono text-zinc-400 select-none">
                        $
                    </div>
                    <textarea
                        name="content"
                        placeholder="What did you ship today?"
                        required
                        className="w-full h-full bg-zinc-900 text-green-400 font-mono text-sm p-3 pl-8 border-2 border-transparent focus:border-black focus:outline-none resize-none placeholder:text-zinc-700 selection:bg-green-900 selection:text-white"
                    />
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

                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-black text-white px-6 py-2 font-bold uppercase tracking-widest text-xs hover:bg-[#00FF00] hover:text-black transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                        {isLoading ? "Committing..." : (
                            <>COMMIT LOG <ArrowRight className="w-3 h-3" /></>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
