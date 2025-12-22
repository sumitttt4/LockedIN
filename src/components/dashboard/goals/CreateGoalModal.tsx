"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Assuming you have this or will use standard select for now
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Assuming Shadcn Tabs
import { Plus, Target, Zap, Lock, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function CreateGoalModal() {
    const [open, setOpen] = useState(false);
    const [verificationType, setVerificationType] = useState<"manual" | "auto">("manual");

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-zinc-900 text-white rounded-full hover:bg-zinc-800 gap-2">
                    <Plus className="w-4 h-4" /> Create Goal
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white border-zinc-200">
                <DialogHeader className="px-6 pt-6 pb-4 border-b border-zinc-100">
                    <DialogTitle className="flex items-center gap-2 text-xl font-bold">
                        <div className="p-2 bg-zinc-100 rounded-full">
                            <Zap className="w-5 h-5 text-zinc-900" />
                        </div>
                        Create New Goal
                    </DialogTitle>
                </DialogHeader>

                <div className="p-6 space-y-8">
                    {/* Basics Section */}
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">Basics</h3>
                            <p className="text-xs text-zinc-500">A clear title makes it easier to stick to.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Goal Title <span className="text-red-500">*</span></Label>
                                <Input
                                    id="title"
                                    placeholder="e.g., Ship MVP, Run a Marathon"
                                    className="bg-zinc-50 border-zinc-200 focus:bg-white transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Why is this important? What defines success?"
                                    className="bg-zinc-50 border-zinc-200 focus:bg-white transition-colors min-h-[100px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Verification Method Section */}
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">Progress Tracking</h3>
                            <p className="text-xs text-zinc-500">How will you prove your progress?</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 p-1 bg-zinc-100/50 rounded-xl border border-zinc-200">
                            <button
                                onClick={() => setVerificationType("manual")}
                                className={cn(
                                    "flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all",
                                    verificationType === "manual"
                                        ? "bg-white text-zinc-900 shadow-sm border border-zinc-200"
                                        : "text-zinc-500 hover:text-zinc-900"
                                )}
                            >
                                <Target className="w-4 h-4" /> Manual Check-in
                            </button>
                            <button
                                onClick={() => setVerificationType("auto")}
                                className={cn(
                                    "flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all",
                                    verificationType === "auto"
                                        ? "bg-white text-zinc-900 shadow-sm border border-zinc-200"
                                        : "text-zinc-500 hover:text-zinc-900"
                                )}
                            >
                                <Zap className="w-4 h-4 text-emerald-500" /> Auto-Verify
                            </button>
                        </div>

                        {verificationType === "auto" && (
                            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex gap-3 text-sm text-emerald-800">
                                <Zap className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                                <p>We'll automatically track your progress via integrations like GitHub, Strava, or WakaTime. You can configure this in the next step.</p>
                            </div>
                        )}
                    </div>

                    {/* Privacy Section */}
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">Visibility</h3>
                        </div>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 text-sm text-zinc-700 cursor-pointer">
                                <input type="radio" name="visibility" className="accent-zinc-900" defaultChecked />
                                <Globe className="w-4 h-4 text-zinc-500" /> Public
                            </label>
                            <label className="flex items-center gap-2 text-sm text-zinc-700 cursor-pointer">
                                <input type="radio" name="visibility" className="accent-zinc-900" />
                                <Lock className="w-4 h-4 text-zinc-500" /> Private
                            </label>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-zinc-50 border-t border-zinc-200 flex justify-end gap-3">
                    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button className="bg-zinc-900 text-white hover:bg-zinc-800">Create Goal</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
