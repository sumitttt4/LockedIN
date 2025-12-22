"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function StartPage() {
    return (
        <div className="min-h-screen bg-zinc-50 font-sans selection:bg-zinc-200 pb-20 md:pb-0">
            <Sidebar />
            <div className="md:pl-64">
                <div className="max-w-5xl mx-auto px-4 md:px-12 py-6 md:py-12 min-h-screen">
                    <DashboardHeader title="Start Challenge" />
                    <div className="mt-8 flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
                        <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400">
                            <Plus className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-zinc-900">Start a New Challenge</h2>
                            <p className="text-zinc-500 max-w-md mt-2">
                                Ready to level up? Define a new goal and start your streak.
                            </p>
                        </div>
                        <Button className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-xl px-8 py-6 text-lg">
                            Begin Protocol
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
