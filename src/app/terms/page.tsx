export default function TermsPage() {
    return (
        <div className="min-h-screen bg-zinc-100 py-16 px-4">
            <div className="max-w-4xl mx-auto bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12">
                <h1 className="text-4xl font-black uppercase tracking-tighter mb-8 border-b-2 border-black pb-4">
                    Terms of Service
                </h1>

                <div className="space-y-6 text-zinc-700 leading-relaxed">
                    <p className="text-sm text-zinc-500 font-mono">Last updated: January 3, 2026</p>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing or using the GetLockedIN platform ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. Description of Service</h2>
                        <p>GetLockedIN is a productivity and accountability platform designed to help users set, track, and achieve goals through public commitment and gamification.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Accounts</h2>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>You must be at least 13 years old to use the Service.</li>
                            <li>You are responsible for maintaining the security of your account credentials.</li>
                            <li>You are responsible for all activities that occur under your account.</li>
                            <li>You agree to provide accurate and complete information during registration.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Payment Terms</h2>
                        <p>Access to premium features requires a one-time fee of $9.00 USD.</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Payments are processed securely via DoDo Payments.</li>
                            <li>The fee grants you lifetime access to the "Operator" features.</li>
                            <li><strong>Refund Policy:</strong> Payments are generally non-refundable, but we may consider exceptions at our sole discretion within 14 days of purchase.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Use of Service</h2>
                        <p>You agree not to misuse the Service or help anyone else do so. Specifically, you agree not to:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Post content that is illegal, harmful, threatening, or harassing.</li>
                            <li>Attempt to gain unauthorized access to the Service or related systems.</li>
                            <li>Use the Service for any purpose that violates applicable laws or regulations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Intellectual Property</h2>
                        <p>The Service and its original content, features, and functionality are owned by GetLockedIN and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Termination</h2>
                        <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. Limitation of Liability</h2>
                        <p>In no event shall GetLockedIN, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">9. Changes to Terms</h2>
                        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">10. Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us at:</p>
                        <p className="mt-2">
                            <strong>Email:</strong> <a href="mailto:support@getlockedin.live" className="text-blue-600 underline">support@getlockedin.live</a>
                        </p>
                    </section>
                </div>

                <div className="mt-12 pt-8 border-t-2 border-zinc-200">
                    <a
                        href="/"
                        className="inline-block bg-black text-white px-6 py-3 font-bold uppercase hover:bg-zinc-800 transition-colors"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
}
