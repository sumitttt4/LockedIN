import { createClient } from "@/utils/supabase/server";
import { DashboardLayoutClient } from "./layout.client";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    // Provide defaults if user not found (though middleware should catch this)
    const userData = user ? {
        email: user.email,
        id: user.id
    } : null;

    return (
        <DashboardLayoutClient user={userData}>
            {children}
        </DashboardLayoutClient>
    );
}
