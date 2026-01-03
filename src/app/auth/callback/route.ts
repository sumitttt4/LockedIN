import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    // Always redirect to checkout after login - it will handle redirecting to dashboard if already paid
    const next = "/checkout";

    if (code) {
        const supabase = await createClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (!error) {
            // Force redirect to checkout with proper cookie handling
            const redirectUrl = new URL(next, origin);
            return NextResponse.redirect(redirectUrl);
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/login?error=auth_code_error`);
}
