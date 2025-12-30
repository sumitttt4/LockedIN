"use client";

import { cn } from "@/lib/utils";

const MARQUEE_ITEMS = [
    "LOCKED IN",
    "SHIP DAILY",
    "NO EXCUSES",
    "BUILD IN PUBLIC",
    "LOCKED IN",
    "HIT $10K MRR",
    "RUN MARATHON",
    "WRITE DAILY",
    "LOCKED IN",
    "SHIP MVP",
];

export function Marquee({ className }: { className?: string }) {
    return (
        <div className={cn("w-full overflow-hidden bg-black border-y border-black py-4", className)}>
            <div className="flex w-max animate-marquee space-x-12">
                {/* First Set */}
                <div className="flex space-x-12 items-center">
                    {MARQUEE_ITEMS.map((item, i) => (
                        <span key={i} className={cn(
                            "text-lg md:text-xl font-bold tracking-wider font-mono uppercase text-[#00FF00]"
                        )}>
                            {item}
                        </span>
                    ))}
                </div>
                {/* Second Set (Duplicate for seamless loop) */}
                <div className="flex space-x-12 items-center" aria-hidden="true">
                    {MARQUEE_ITEMS.map((item, i) => (
                        <span key={`dup-${i}`} className={cn(
                            "text-lg md:text-xl font-bold tracking-wider font-mono uppercase text-[#00FF00]"
                        )}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
