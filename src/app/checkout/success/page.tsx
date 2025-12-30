import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { verifyDoDoPayment } from "../actions";
import { CheckCircle2, Loader2 } from "lucide-react";

export default async function CheckoutSuccessPage({
    searchParams,
}: {
    searchParams: { session_id?: string };
}) {
    const supabase = await createClient();

    // Check Auth
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        redirect("/login");
    }

    const sessionId = searchParams.session_id;

    if (!sessionId) {
        redirect("/checkout");
    }

    // Verify the payment
    const result = await verifyDoDoPayment(sessionId);

    if (result?.success) {
        // Payment verified, redirect to dashboard after showing success
        setTimeout(() => {
            redirect("/dashboard");
        }, 2000);
    }

    return (
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 pattern-grid opacity-[0.05] pointer-events-none" />

            <div className="w-full max-w-md bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10">

                {result?.success ? (
                    // Success State
                    <div className="p-8 text-center space-y-6">
                        <div className="mx-auto w-16 h-16 bg-green-100 border-2 border-black flex items-center justify-center rounded-none">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-3xl font-black uppercase tracking-tighter">Payment Complete</h1>
                            <p className="text-zinc-500 font-mono text-xs uppercase">Access Granted</p>
                        </div>

                        <div className="bg-green-50 border-2 border-green-200 p-4">
                            <div className="text-sm font-bold text-green-800 mb-2">✓ Welcome to Day One</div>
                            <div className="text-xs text-green-700">
                                Your account has been activated. Redirecting to dashboard...
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-zinc-400">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span className="text-xs font-mono">Loading your dashboard</span>
                        </div>
                    </div>
                ) : (
                    // Error State
                    <div className="p-8 text-center space-y-6">
                        <div className="mx-auto w-16 h-16 bg-red-100 border-2 border-black flex items-center justify-center rounded-none">
                            <span className="text-3xl">⚠️</span>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-3xl font-black uppercase tracking-tighter">Verification Failed</h1>
                            <p className="text-zinc-500 font-mono text-xs uppercase">Payment Issue</p>
                        </div>

                        <div className="bg-red-50 border-2 border-red-200 p-4">
                            <div className="text-xs text-red-700">
                                {result?.error || "Unable to verify payment. Please contact support."}
                            </div>
                        </div>

                        <a
                            href="/checkout"
                            className="inline-block w-full bg-black text-white py-3 font-black uppercase tracking-widest hover:bg-[#00FF00] hover:text-black transition-all border-2 border-black rounded-none"
                        >
                            Try Again
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
