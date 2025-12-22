"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
    return (
        <div className="min-h-screen bg-zinc-50 font-sans selection:bg-zinc-200 pb-20 md:pb-0">
            <Sidebar />

            <div className="md:pl-64">
                <div className="max-w-2xl mx-auto px-4 md:px-12 py-6 md:py-12 min-h-screen">
                    <DashboardHeader title="Settings" />

                    <div className="mt-8 space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-zinc-900 mb-1">Profile Settings</h3>
                            <p className="text-sm text-zinc-500">Manage your account and public profile.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 space-y-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Display Name</Label>
                                <Input id="name" defaultValue="Demo User" className="max-w-md" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="handle">Handle</Label>
                                <div className="flex items-center gap-2">
                                    <span className="text-zinc-400">dayzero.so/</span>
                                    <Input id="handle" defaultValue="demo" className="max-w-xs" />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Input id="bio" defaultValue="Building something new every day." className="max-w-lg" />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-zinc-900 mb-1">Notifications</h3>
                            <p className="text-sm text-zinc-500">How should we alert you?</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label className="text-base">Daily Reminders</Label>
                                    <p className="text-sm text-zinc-500">Get a nudge to commit your work.</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label className="text-base">Streak Alerts</Label>
                                    <p className="text-sm text-zinc-500">Notify me when my streak is at risk.</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                        </div>

                        <div className="flex justify-end gap-4">
                            <Button variant="outline">Cancel</Button>
                            <Button className="bg-zinc-900 text-white hover:bg-zinc-800">Save Changes</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
