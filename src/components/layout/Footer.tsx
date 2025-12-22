"use client";

import { Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-white border-t border-zinc-200 py-16 px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-start gap-8">

                <div className="space-y-4 max-w-lg">
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                        Built by Sumit.
                    </h3>

                    <div className="space-y-2 text-zinc-500 font-medium">
                        <p>
                            I&apos;m building this in public. Follow updates on <a href="https://x.com/Sumitthq" target="_blank" className="text-zinc-900 underline underline-offset-2 hover:text-black">X/Twitter</a>.
                        </p>
                        <p>
                            Make it count. <span className="text-red-500">♥</span>
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-6 w-full justify-between">
                    <Button className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-8 h-11 font-medium transition-transform hover:scale-105">
                        Get Started
                    </Button>

                    <div className="flex gap-4">
                        <Link href="https://x.com/Sumitthq" target="_blank" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="w-full pt-8 border-t border-zinc-100 text-xs text-zinc-400 flex justify-between">
                    <span>© 2025 DayZero.</span>
                </div>

            </div>
        </footer>
    );
}
