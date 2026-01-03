"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const hasConsented = localStorage.getItem("cookie_consent");
        if (!hasConsented) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie_consent", "true");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t-2 border-black shadow-[0px_-4px_10px_rgba(0,0,0,0.1)]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-zinc-100 border border-black hidden md:block">
                        <Cookie className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                        <p className="font-bold text-sm uppercase tracking-wide">
                            We use cookies to improve your experience.
                        </p>
                        <p className="text-xs text-zinc-600 max-w-xl">
                            By using our site, you agree to our use of cookies for analytics and personalized content.
                            Review our <a href="/privacy" className="underline font-bold">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <Button
                        onClick={acceptCookies}
                        className="w-full md:w-auto bg-black text-white hover:bg-[#00FF00] hover:text-black font-bold uppercase tracking-wider rounded-none border-2 border-transparent hover:border-black transition-all"
                    >
                        Accept Protocol
                    </Button>
                </div>
            </div>
        </div>
    );
}
