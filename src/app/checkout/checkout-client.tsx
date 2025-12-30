"use client";

import { useState } from "react";
import { Loader2, CreditCard } from "lucide-react";
import { createDoDoCheckout, simulatePayment } from "./actions";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    async function handlePayment() {
        setIsLoading(true);
        setError("");

        // Check if DoDo is configured (production mode)
        const useDoDo = process.env.NEXT_PUBLIC_USE_DODO_PAYMENTS === 'true';

        if (useDoDo) {
            // Use real DoDo Payments
            const result = await createDoDoCheckout();

            if (result?.checkoutUrl) {
                // Redirect to DoDo Payment page
                window.location.href = result.checkoutUrl;
            } else {
                setError(result?.error || "Failed to initialize payment");
                setIsLoading(false);
            }
        } else {
            // Development mode - use simulation
            const result = await simulatePayment();

            if (result?.success) {
                router.push("/dashboard");
            } else {
                setError(result?.error || "Payment failed");
                setIsLoading(false);
            }
        }
    }

    return (
        <div className="space-y-4">
            {error && (
                <div className="p-3 bg-red-50 border-2 border-red-500 text-red-700 text-xs font-bold uppercase">
                    {error}
                </div>
            )}

            <button
                onClick={handlePayment}
                disabled={isLoading}
                className="w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-[#00FF00] hover:text-black border-2 border-transparent hover:border-black transition-all flex items-center justify-center gap-2 group disabled:opacity-50 rounded-none"
            >
                {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                    <>
                        <CreditCard className="w-5 h-5" /> Pay $9.00
                    </>
                )}
            </button>

            {process.env.NEXT_PUBLIC_USE_DODO_PAYMENTS !== 'true' && (
                <p className="text-[10px] text-center text-zinc-400 font-mono">
                    DEV MODE: Payment simulation enabled
                </p>
            )}
        </div>
    );
}
