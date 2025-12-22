"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Integrations } from "@/components/dashboard/Integrations";

export default function IntegrationsPage() {
    return (
        <div className="min-h-screen bg-zinc-50 font-sans selection:bg-zinc-200 pb-20 md:pb-0">
            <Sidebar />
            <div className="md:pl-64">
                <div className="max-w-5xl mx-auto px-4 md:px-12 py-6 md:py-12 min-h-screen">
                    <DashboardHeader title="Integrations" />
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Integrations</h2>
                        <Integrations />
                    </div>
                </div>
            </div>
        </div>
    );
}
