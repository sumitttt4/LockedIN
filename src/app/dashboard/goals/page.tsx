"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { GoalListView } from "@/components/dashboard/goals/GoalListView";

export default function GoalsPage() {
    return (
        <div className="min-h-screen bg-zinc-50 font-sans selection:bg-zinc-200 pb-20 md:pb-0">
            <Sidebar />
            <div className="md:pl-64">
                <div className="max-w-5xl mx-auto px-4 md:px-12 py-6 md:py-12 min-h-screen">
                    <DashboardHeader title="Goals" />
                    <div className="mt-8">
                        <GoalListView />
                    </div>
                </div>
            </div>
        </div>
    );
}
