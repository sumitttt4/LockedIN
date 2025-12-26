"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-black relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pattern-grid opacity-30" />

            <Card className="w-full max-w-md border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl relative z-10">
                <CardContent className="p-10 text-center">
                    {/* Logo */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mb-4 glow-white">
                            <Lock className="h-8 w-8 text-black" />
                        </div>
                        <h1 className="text-2xl font-bold text-white">Login Opens Dec 31st</h1>
                        <p className="text-white/50 text-sm mt-2">
                            Join the waitlist to get early access
                        </p>
                    </div>

                    {/* Message */}
                    <div className="mb-8 p-6 bg-white/5 border border-white/10 rounded-xl">
                        <p className="text-white/70 leading-relaxed">
                            We're launching on <span className="font-semibold text-white">December 31st</span>.
                            Reserve your spot now for just <span className="text-green-400 font-bold">$5</span> (early bird)
                            or <span className="text-white font-bold">$9</span> after.
                        </p>
                    </div>

                    {/* CTA */}
                    <Link href="/">
                        <Button className="w-full h-12 bg-white hover:bg-white/90 text-black font-semibold glow-white">
                            Join Waitlist
                        </Button>
                    </Link>

                    <p className="text-white/40 text-xs mt-6">
                        One-time payment. Lifetime access.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
