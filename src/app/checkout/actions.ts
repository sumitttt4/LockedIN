"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

/**
 * Create a DoDo Payment checkout session
 * Documentation: https://docs.dodo.co/api/checkout
 */
export async function createDoDoCheckout() {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { error: "Not authenticated" };

    // Get user profile for email
    const { data: profile } = await supabase
        .from('profiles')
        .select('username, display_name')
        .eq('id', user.id)
        .single();

    try {
        // Create DoDo Checkout Session
        const response = await fetch('https://api.dodo.co/v1/checkout/sessions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.DODO_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // Product Configuration
                amount: 900, // $9.00 in cents
                currency: 'USD',
                product_name: 'GetLockedIN - Lifetime Access',
                product_description: 'Day One Operator Access - Lifetime membership to GetLockedIN Protocol',

                // Customer Info
                customer_email: user.email,
                customer_name: profile?.display_name || profile?.username || user.email,

                // Metadata for webhook processing
                metadata: {
                    user_id: user.id,
                    product_type: 'lifetime_access',
                    environment: process.env.NODE_ENV || 'development'
                },

                // Redirect URLs
                success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/checkout`,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            return { error: error.message || 'Failed to create checkout session' };
        }

        const session = await response.json();

        // Return the checkout URL for redirect
        return {
            success: true,
            checkoutUrl: session.url,
            sessionId: session.id
        };

    } catch (error: any) {
        console.error('DoDo Checkout Error:', error);
        return { error: error.message || 'Payment system error' };
    }
}

/**
 * Verify DoDo Payment completion and update user status
 * Called after successful payment redirect or via webhook
 */
export async function verifyDoDoPayment(sessionId: string) {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { error: "Not authenticated" };

    try {
        // Verify the session with DoDo API
        const response = await fetch(`https://api.dodo.co/v1/checkout/sessions/${sessionId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.DODO_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            return { error: 'Failed to verify payment' };
        }

        const session = await response.json();

        // Check if payment is complete
        if (session.status === 'completed' || session.payment_status === 'paid') {
            // Update user profile
            const { error: updateError } = await supabase
                .from('profiles')
                .update({ has_paid: true })
                .eq('id', user.id);

            if (updateError) {
                return { error: updateError.message };
            }

            // Store the integration record (optional - for tracking)
            await supabase.from('integrations').upsert({
                user_id: user.id,
                type: 'dodo',
                config: {
                    session_id: sessionId,
                    payment_date: new Date().toISOString(),
                    amount: session.amount,
                }
            });

            revalidatePath('/dashboard');
            revalidatePath('/checkout');

            return { success: true };
        } else {
            return { error: 'Payment not completed' };
        }

    } catch (error: any) {
        console.error('Payment Verification Error:', error);
        return { error: error.message || 'Verification failed' };
    }
}

/**
 * DEVELOPMENT ONLY: Simulate payment for testing without API keys
 * Remove this in production
 */
export async function simulatePayment() {
    // Check if we're in development mode AND don't have DoDo keys
    if (process.env.NODE_ENV === 'development' && !process.env.DODO_SECRET_KEY) {
        const supabase = await createClient();

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return { error: "Not authenticated" };

        // UPDATE PROFILE
        const { error } = await supabase
            .from('profiles')
            .update({ has_paid: true })
            .eq('id', user.id);

        if (error) {
            return { error: error.message };
        }

        revalidatePath('/dashboard');
        revalidatePath('/checkout');

        return { success: true };
    }

    return { error: "Simulation only available in development mode" };
}
