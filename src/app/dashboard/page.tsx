"use client";

import { redirect } from "next/navigation";

export default function DashboardPage() {
    // Redirect to landing page - Dashboard disabled until post-launch
    redirect('/');

    /* 
    ============================================
    DASHBOARD CODE - DISABLED FOR WAITLIST LAUNCH
    ============================================
    
    This will be enabled after Dec 31st launch.
    All dashboard features are preserved below for post-launch activation.
    
    ============================================
    */

    /*
    return (
      <div className="min-h-screen bg-black text-white">
        ... existing dashboard code ...
      </div>
    );
    */
}
