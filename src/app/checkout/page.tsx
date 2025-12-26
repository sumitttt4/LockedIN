"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Check, Zap, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CheckoutPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [earlyBirdLeft, setEarlyBirdLeft] = useState(47); // Mock counter

    useEffect(() => {
        // Get email from session
        const storedEmail = sessionStorage.getItem("waitlist_email");
        if (!storedEmail) {
            router.push("/waitlist");
            return;
        }
        setEmail(storedEmail);
    }, [router]);

    const handleSelectPlan = (plan: 'early' | 'regular') => {
        // Store selected plan
        sessionStorage.setItem("selected_plan", plan);

        // TODO: After deployment, integrate DoDo Payments API here
        // For now, redirect to success page
        alert(`Payment integration coming soon!\n\nSelected: ${plan === 'early' ? 'Early Bird ($5)' : 'Regular ($9)'}\nEmail: ${email}\n\nAfter deployment, this will redirect to DoDo Payments.`);

        // Temporary redirect to success
        // router.push("/success");
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
            <main className="flex-1 flex items-center justify-center p-6 py-12">
                <div className="w-full max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
                                Choose Your Plan
                            </h1>
                            <p className="text-white/60 text-lg">
                                One-time payment. Lifetime access. No subscriptions.
                            </p>
                        </div>

                        {/* Pricing Cards */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Early Bird */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Card className="relative bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20 shadow-2xl hover:shadow-green-500/10 transition-shadow">
                                    {/* Badge */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <div className="px-4 py-1.5 bg-green-500 text-black text-xs font-bold rounded-full flex items-center gap-1.5">
                                            <Zap className="w-3.5 h-3.5" />
                                            EARLY BIRD - {earlyBirdLeft} LEFT
                                        </div>
                                    </div>

                                    <CardContent className="p-8 pt-10">
                                        {/* Icon */}
                                        <div className="flex justify-center mb-4">
                                            <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center">
                                                <Sparkles className="w-8 h-8 text-green-400" />
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="text-center mb-6">
                                            <div className="text-5xl font-black text-white mb-2">$5</div>
                                            <div className="text-white/60">Limited time offer</div>
                                        </div>

                                        {/* Features */}
                                        <div className="space-y-3 mb-8">
                                            <div className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-white/80">Lifetime access</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-white/80">All future features</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-white/80">Early access on Dec 31st</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-white/80">Support development</span>
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <Button
                                            onClick={() => handleSelectPlan('early')}
                                            className="w-full h-12 bg-green-500 hover:bg-green-600 text-black font-bold text-base"
                                        >
                                            Grab Early Bird Spot
                                        </Button>

                                        <p className="text-center text-white/40 text-xs mt-4">
                                            Save $4 with early bird pricing
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Regular */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Card className="bg-white/[0.02] border-white/10 shadow-2xl">
                                    <CardContent className="p-8 pt-10">
                                        {/* Icon */}
                                        <div className="flex justify-center mb-4">
                                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                                                <Lock className="w-8 h-8 text-white/70" />
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="text-center mb-6">
                                            <div className="text-5xl font-black text-white mb-2">$9</div>
                                            <div className="text-white/60">Regular price</div>
                                        </div>

                                        {/* Features */}
                                        <div className="space-y-3 mb-8">
                                            <div className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                                                <span className="text-white/80">Lifetime access</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                                                <span className="text-white/80">All future features</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                                                <span className="text-white/80">Access on Dec 31st</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                                                <span className="text-white/80">Support development</span>
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <Button
                                            onClick={() => handleSelectPlan('regular')}
                                            variant="outline"
                                            className="w-full h-12 border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-base"
                                        >
                                            Reserve Your Spot
                                        </Button>

                                        <p className="text-center text-white/40 text-xs mt-4">
                                            Available after early bird sells out
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Footer */}
                        <div className="text-center mt-8">
                            <p className="text-white/50 text-sm">
                                Secure payment powered by <span className="text-white font-medium">DoDo Payments</span>
                            </p>
                            <p className="text-white/40 text-xs mt-2">
                                Integration will be added after deployment
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
