"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github, Code2, Globe, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const PROVIDERS = [
    {
        id: "github",
        name: "GitHub",
        description: "Verify commits & PRs",
        icon: Github,
        color: "bg-zinc-900 text-white",
    },
    {
        id: "wakatime",
        name: "WakaTime",
        description: "Verify coding time",
        icon: Code2,
        color: "bg-blue-600 text-white",
    },
    {
        id: "vercel",
        name: "Vercel",
        description: "Verify deployments",
        icon: Globe,
        color: "bg-black text-white",
    },
];

export function Integrations({ compact = false }: { compact?: boolean }) {
    const [mode, setMode] = useState<"manual" | "auto">("auto");
    const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
    const [config, setConfig] = useState({ github: "", wakatime: "", vercel: "" });

    return (
        <div className="space-y-6">
            {/* Mode Toggle */}
            <div className="bg-white p-1 rounded-xl border border-zinc-200 inline-flex w-full md:w-auto">
                <button
                    onClick={() => setMode("auto")}
                    className={cn(
                        "flex-1 md:flex-none px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all flex items-center justify-center gap-2",
                        mode === "auto" ? "bg-zinc-100 text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-900"
                    )}
                >
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-emerald-500" />
                    Auto-Verify
                </button>
                <button
                    onClick={() => setMode("manual")}
                    className={cn(
                        "flex-1 md:flex-none px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all flex items-center justify-center gap-2",
                        mode === "manual" ? "bg-zinc-100 text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-900"
                    )}
                >
                    <AlertCircle className="w-3 h-3 md:w-4 md:h-4 text-zinc-400" />
                    Manual
                </button>
            </div>

            {mode === "auto" ? (
                <div className="space-y-6">
                    {/* Provider Grid */}
                    <div className={cn(
                        "grid gap-3 transition-all",
                        compact ? "grid-cols-1 xl:grid-cols-2" : "grid-cols-1 md:grid-cols-3"
                    )}>
                        {PROVIDERS.map((provider) => (
                            <div
                                key={provider.id}
                                onClick={() => setSelectedProvider(provider.id)}
                                className={cn(
                                    "cursor-pointer group flex flex-col items-center p-4 rounded-2xl border transition-all hover:scale-[1.02] text-center",
                                    selectedProvider === provider.id
                                        ? "bg-zinc-50 border-zinc-900 ring-1 ring-zinc-900 shadow-md"
                                        : "bg-white border-zinc-200 hover:border-zinc-300 shadow-sm"
                                )}
                            >
                                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110", provider.color)}>
                                    <provider.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-bold text-zinc-900">{provider.name}</h3>
                                <p className="text-xs text-zinc-500 line-clamp-1">{provider.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Configuration Section */}
                    <AnimatePresence mode="wait">
                        {selectedProvider && (
                            <motion.div
                                key={selectedProvider}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className={cn(
                                    "bg-white rounded-3xl border border-zinc-200 shadow-lg overflow-hidden",
                                    compact ? "p-4" : "p-8"
                                )}
                            >
                                <div className="max-w-md mx-auto space-y-4">
                                    <div className="text-center">
                                        <h3 className="text-base font-bold text-zinc-900">Configure {PROVIDERS.find(p => p.id === selectedProvider)?.name}</h3>
                                        <p className="text-xs text-zinc-500">Connect account to verify.</p>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="space-y-1">
                                            <Label htmlFor="apiKey" className="text-xs">API Key / Token</Label>
                                            <Input
                                                id="apiKey"
                                                placeholder="Enter Token"
                                                className="h-10 text-sm border-zinc-200 focus:border-zinc-900"
                                            />
                                        </div>
                                        <Button className="w-full h-10 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 text-sm">
                                            Verify
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-2xl border border-zinc-200 text-center space-y-3">
                    <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center mx-auto text-zinc-400">
                        <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-zinc-900">Manual Mode</h3>
                        <p className="text-xs text-zinc-500">
                            Upload proof manually for each check-in.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
