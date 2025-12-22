"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "How it Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-md border-zinc-200 shadow-md"
                        : "bg-transparent border-transparent"
                )}
            >
                <div className="container max-w-5xl mx-auto px-4 flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1.5 z-50">
                        <Image src="/logo.png" alt="DayZero" width={200} height={64} className="h-24 w-auto object-contain" priority />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button
                            asChild
                            className="h-9 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-all shadow-sm px-4 text-sm"
                        >
                            <Link href="/login">
                                Start your goal
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden z-50 p-2 text-zinc-600"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    {/* Mobile Menu Overlay */}
                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 p-4 flex flex-col gap-4 shadow-xl md:hidden"
                            >
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium text-zinc-600 py-2 border-b border-zinc-50"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="pt-2">
                                    <Button asChild className="w-full rounded-full bg-zinc-900 text-white py-6 text-lg">
                                        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                            Start your goal
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>
        </>
    );
}
