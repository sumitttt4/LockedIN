"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function createGoal(formData: FormData) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { error: "Unauthorized" };
    }

    const title = formData.get("title") as string;
    const deadline = formData.get("deadline") as string;
    const stakes = formData.get("stakes") as string;

    if (!title || !deadline || !stakes) {
        return { error: "Missing fields" };
    }

    const { error } = await supabase.from("goals").insert({
        user_id: user.id,
        title,
        deadline,
        stakes_type: stakes,
        status: "active",
    });

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/dashboard");
    return { success: "Protocol Initiated" };
}

export async function commitLog(formData: FormData) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { error: "Unauthorized" };
    }

    const content = formData.get("content") as string;

    if (!content) {
        return { error: "Log content empty" };
    }

    const { error } = await supabase.from("ledger").insert({
        user_id: user.id,
        content,
        log_date: new Date().toISOString(),
        status: "shipped",
    });

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/dashboard");
    return { success: "Log Committed" };
}
