export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-zinc-100 py-16 px-4">
            <div className="max-w-4xl mx-auto bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12">
                <h1 className="text-4xl font-black uppercase tracking-tighter mb-8 border-b-2 border-black pb-4">
                    Privacy Policy
                </h1>

                <div className="space-y-6 text-zinc-700 leading-relaxed">
                    <p className="text-sm text-zinc-500 font-mono">Last updated: January 3, 2026</p>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Information We Collect</h2>
                        <p>GetLockedIN ("we", "our", or "us") collects information you provide directly:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li><strong>Account Information:</strong> Email address, username, display name</li>
                            <li><strong>Profile Data:</strong> Bio, location, avatar, goals, and progress</li>
                            <li><strong>Payment Information:</strong> Processed securely via DoDo Payments (we do not store credit card details)</li>
                            <li><strong>Usage Data:</strong> How you interact with our platform, including goal creation, completion, and likes</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process your payments and transactions</li>
                            <li>Send you updates, notifications, and promotional materials (you can opt out)</li>
                            <li>Display your public profile and goals to other users (if you choose to make them public)</li>
                            <li>Analyze usage patterns to enhance user experience</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Information Sharing</h2>
                        <p>We do not sell your personal information. We may share your information with:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li><strong>Service Providers:</strong> Supabase (database), DoDo Payments (payment processing), Vercel (hosting)</li>
                            <li><strong>Public Profile:</strong> Your username, goals, and activity may be visible to other users if you choose public visibility</li>
                            <li><strong>Legal Requirements:</strong> If required by law or to protect our rights</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Data Security</h2>
                        <p>We implement industry-standard security measures to protect your data:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>SSL/TLS encryption for data in transit</li>
                            <li>Secure authentication via Supabase</li>
                            <li>PCI-compliant payment processing</li>
                            <li>Regular security audits and updates</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Your Rights (GDPR & CCPA)</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li><strong>Access:</strong> Request a copy of your personal data</li>
                            <li><strong>Correction:</strong> Update or correct your information</li>
                            <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                            <li><strong>Opt-out:</strong> Unsubscribe from marketing emails</li>
                            <li><strong>Data Portability:</strong> Export your data in a readable format</li>
                        </ul>
                        <p className="mt-4">To exercise these rights, contact us at: <a href="mailto:privacy@getlockedin.live" className="text-blue-600 underline">privacy@getlockedin.live</a></p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Cookies</h2>
                        <p>We use essential cookies to:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Maintain your login session</li>
                            <li>Remember your preferences</li>
                            <li>Analyze site traffic (via anonymous analytics)</li>
                        </ul>
                        <p className="mt-4">You can control cookies through your browser settings. Disabling cookies may affect functionality.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. International Data Transfers</h2>
                        <p>Your data may be transferred to and processed in countries outside your residence. We ensure adequate safeguards are in place to protect your data in accordance with this Privacy Policy.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. Children's Privacy</h2>
                        <p>Our service is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">9. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a prominent notice on our website.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">10. Contact Us</h2>
                        <p>For privacy-related questions or concerns:</p>
                        <p className="mt-2">
                            <strong>Email:</strong> <a href="mailto:privacy@getlockedin.live" className="text-blue-600 underline">privacy@getlockedin.live</a><br />
                            <strong>Website:</strong> <a href="https://getlockedin.live" className="text-blue-600 underline">getlockedin.live</a>
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
