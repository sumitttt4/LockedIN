"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WaitlistPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && agreed) {
            // Store email in session/localStorage for checkout page
            sessionStorage.setItem("waitlist_email", email);
            router.push("/checkout");
        }
    };

    return (
        <div className="min-h-screen bg-black flex flex-col">
            {/* Navbar */}
            <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
                <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
                        <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center glow-white">
                            <Lock className="h-4 w-4 text-black" />
                        </div>
                        <span className="text-white">LockedIn</span>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="bg-white/[0.02] border-white/10 shadow-2xl">
                            <CardContent className="p-8 md:p-12">
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
                                        Join the Waitlist
                                    </h1>
                                    <p className="text-white/60 text-lg">
                                        Reserve your lifetime access before launch
                                    </p>
                                </div>

                                {/* Benefits */}
                                <div className="space-y-3 mb-8 p-6 bg-white/5 border border-white/10 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <p className="text-white/70">
                                            <span className="text-green-400 font-semibold">Early bird: $5</span> (limited to first 100)
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <p className="text-white/70">
                                            Regular: $9 (after early bird sells out)
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <p className="text-white/70">
                                            Lifetime access - No subscriptions ever
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <p className="text-white/70">
                                            Launch access on December 31st, 2025
                                        </p>
                                    </div>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="text-white/80 text-sm font-medium mb-2 block">
                                            Email Address
                                        </label>
                                        <Input
                                            type="email"
                                            placeholder="your@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-white/30"
                                        />
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="updates"
                                            checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                            className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5"
                                            required
                                        />
                                        <label htmlFor="updates" className="text-white/60 text-sm">
                                            I agree to receive updates about the launch and product news
                                        </label>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={!email || !agreed}
                                        className="w-full h-12 bg-white hover:bg-white/90 text-black font-semibold text-base glow-white disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Continue to Payment
                                    </Button>
                                </form>

                                {/* Footer */}
                                <p className="text-center text-white/40 text-sm mt-6">
                                    Secure payment powered by DoDo Payments
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
