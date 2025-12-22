"use client";

import { motion } from "framer-motion";
import { Plus, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { itemVariants } from "@/lib/animation-variants";

export function SetGoalDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full mt-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl h-12 font-medium text-base shadow-lg shadow-zinc-200/50 flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" />
                    Set New Goal
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-2xl">
                <DialogHeader>
                    <DialogTitle>Set a New Goal</DialogTitle>
                    <DialogDescription>
                        Define what you want to achieve today. We'll verify it automatically.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="goal">Goal Title</Label>
                        <Input id="goal" placeholder="e.g. Launch DayZero MVP" className="col-span-3 rounded-lg" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="category">Category</Label>
                        <Select>
                            <SelectTrigger className="w-full rounded-lg">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="dev">Development</SelectItem>
                                <SelectItem value="fitness">Fitness</SelectItem>
                                <SelectItem value="writing">Writing</SelectItem>
                                <SelectItem value="hustle">Business</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className="w-full rounded-xl bg-zinc-900 text-white hover:bg-zinc-800">Create Goal</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export function ActiveGoalCard() {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
            }}
            className="relative w-full overflow-hidden"
        >
            <div className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm flex flex-col justify-between h-full min-h-[280px]">
                <div className="space-y-4 z-10">
                    <div className="flex justify-between items-start">
                        <div className="px-3 py-1 bg-zinc-100 rounded-full inline-flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-bold text-zinc-600 uppercase tracking-wider">
                                Active Goal
                            </span>
                        </div>
                        <div className="relative w-12 h-12">
                            <div className="w-full h-full rounded-full border-4 border-zinc-100 border-t-zinc-900 flex items-center justify-center">
                                <span className="text-xs font-bold font-mono">75%</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 mt-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 leading-tight">
                            Build DayZero MVP
                        </h3>
                        <p className="text-zinc-500 text-sm md:text-base">
                            Commit 2 hours of deep work today.
                        </p>
                    </div>
                </div>

                <div className="pt-6">
                    <div className="w-full bg-zinc-100 rounded-full h-2 mb-2 overflow-hidden">
                        <div className="bg-zinc-900 h-2 rounded-full w-3/4" />
                    </div>
                    <div className="flex justify-between text-xs text-zinc-400 font-medium">
                        <span>Progress</span>
                        <span>6/8 Hours</span>
                    </div>
                    <SetGoalDialog />
                </div>
            </div>
        </motion.div>
    );
}
