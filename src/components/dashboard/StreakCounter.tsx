"use client";

export function StreakCounter() {
    return (
        <div className="flex flex-col items-center justify-center py-6 md:py-10 bg-white md:bg-transparent rounded-2xl md:rounded-none border md:border-none border-zinc-100 shadow-sm md:shadow-none mb-6 md:mb-0">
            <span className="text-xs font-semibold text-zinc-400 tracking-[0.2em] uppercase mb-2">
                Current Streak
            </span>
            <h1 className="text-6xl md:text-8xl font-mono font-bold tracking-tighter text-zinc-900 leading-none">
                DAY <span className="text-zinc-300">0</span>01
            </h1>
        </div>
    );
}
