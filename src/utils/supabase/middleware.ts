import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL! || "https://zqeixlklsefoaqgaowbn.supabase.co",
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! || "sb_publishable_x5PD6Ve56ErzOFqZywmOGQ_ngVaKY64",
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        request.cookies.set(name, value);
                    });
                    supabaseResponse = NextResponse.next({
                        request,
                    });
                    cookiesToSet.forEach(({ name, value, options }) => {
                        supabaseResponse.cookies.set(name, value, options);
                    });
                },
            },
        }
    );

    // refreshing the auth token
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (request.nextUrl.pathname.startsWith("/dashboard") && !user) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // If user is logged in, don't let them go to login page, redirect to dashboard
    if (request.nextUrl.pathname.startsWith("/login") && user) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return supabaseResponse;
}
