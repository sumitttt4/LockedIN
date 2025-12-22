"use client";

import { motion } from "framer-motion";

export function HowItWorks() {
    const steps = [
        {
            num: "01",
            title: "Commit",
            desc: "Set a tangible goal and declare it to the world.",
        },
        {
            num: "02",
            title: "Act",
            desc: "Do the work. Our integrations verify your progress automatically.",
        },
        {
            num: "03",
            title: "Survive",
            desc: "Build your streak, earn reputation, and prove your consistency.",
        },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden">
            <div className="absolute inset-0 pattern-grid opacity-40 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white to-transparent opacity-60 -z-10" />
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-zinc-200 -z-10" />

                    {steps.map((step, i) => (
                        <div key={i} className="relative pt-8 md:pt-0">
                            <div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-sm font-mono font-bold text-zinc-900 shadow-sm mb-6 mx-auto md:mx-0 z-10 relative">
                                {step.num}
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-zinc-900 mb-2">{step.title}</h3>
                                <p className="text-zinc-500 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
