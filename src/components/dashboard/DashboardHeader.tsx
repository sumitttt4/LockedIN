"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export function DashboardHeader({ title = "Overview" }: { title?: string }) {
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(new Date().toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
        }));
    }, []);

    return (
        <header className="flex items-center justify-between pt-6 pb-2 md:pb-6">
            <div className="flex flex-col">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                    Today, {date}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">{title}</h2>
            </div>
            <div className="flex items-center gap-3">
                <Button asChild variant="outline" size="sm" className="hidden md:flex gap-2 rounded-full border-zinc-200 hover:bg-zinc-50">
                    <Link href="/dashboard/settings">
                        <Settings className="w-4 h-4 text-zinc-500" />
                        <span className="text-zinc-600">Settings</span>
                    </Link>
                </Button>
                <div className="h-9 w-9 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200 overflow-hidden">
                    <Image src="/logo.png" alt="Profile" width={32} height={32} className="h-6 w-auto object-contain" />
                </div>
            </div>
        </header>
    );
}
