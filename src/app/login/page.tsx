"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate auth
        setTimeout(() => {
            router.push("/dashboard");
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col px-6 py-12">
            <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-zinc-900 transition-colors mb-12">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-sm mx-auto flex-1 flex flex-col justify-center"
            >
                <div className="mb-8 text-center flex flex-col items-center">
                    <Image src="/logo.png" alt="DayZero" width={200} height={80} className="h-24 w-auto object-contain mb-6" priority />
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Welcome Back</h1>
                    <p className="text-zinc-500 mt-2">Enter your handle to continue</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                        <Input
                            type="text"
                            placeholder="dayzero.so/username"
                            className="h-12 rounded-xl border-zinc-200 bg-zinc-50 focus:bg-white transition-all font-medium"
                            required
                        />
                    </div>
                    <Button
                        className="w-full h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-lg" // Increased text size
                        disabled={isLoading}
                    >
                        {isLoading ? "Verifying..." : "Continue"}
                    </Button>
                </form>

                <p className="mt-8 text-center text-sm text-zinc-400">
                    Don't have an account? <Link href="/" className="text-zinc-900 font-medium underline">Claim one</Link>
                </p>
            </motion.div>
        </div>
    );
}
