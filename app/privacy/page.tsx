import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | SpaceLean AI",
    description: "Learn how SpaceLean AI collects, uses, and protects your data.",
};

export default function PrivacyPage() {
    const sections = [
        {
            title: "1. Data Collection",
            content: "We collect information you provide directly to us when you create an account, use our AI task generation tools, or communicate with us. This may include your name, email address, and any project descriptions you input into our system.",
        },
        {
            title: "2. How We Use Data",
            content: "Your data is used to provide and improve our services, including training our AI models (anonymized) to better understand project structures and automate task breakdowns. We do not sell your personal information to third parties.",
        },
        {
            title: "3. Data Security",
            content: "We implement industry-standard security measures to protect your data, including end-to-end encryption for project data and secure storage for user credentials. Access to your data is strictly limited to authorized personnel.",
        },
        {
            title: "4. Cookies & Tracking",
            content: "Our website uses essential cookies to manage your session and improve user experience. We also use anonymized analytics to understand how users interact with our platform.",
        },
        {
            title: "5. Your Rights",
            content: "You have the right to access, correct, or delete your personal data. You can manage your account settings or contact our support team to exercise these rights at any time.",
        },
    ];

    return (
        <main className="min-h-screen bg-[#fafafa] text-primary-text pt-40 pb-32">
            <div className="max-w-4xl mx-auto px-6">
                <header className="mb-20">
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        Privacy <br />
                        <span className="text-gray-300">Policy.</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-light leading-relaxed">
                        Last updated: February 18, 2026. We take your privacy seriously. This document outlines our commitment to protecting your personal and project information.
                    </p>
                </header>

                <div className="space-y-16">
                    {sections.map((section, index) => (
                        <section key={index} className="border-t border-black/5 pt-12">
                            <h2 className="text-2xl font-bold mb-6 tracking-tight text-black">
                                {section.title}
                            </h2>
                            <p className="text-lg text-gray-500 font-light leading-relaxed">
                                {section.content}
                            </p>
                        </section>
                    ))}
                </div>

                <footer className="mt-24 pt-12 border-t border-black/5">
                    <p className="text-gray-400 text-sm italic">
                        Questions about our privacy practices? Contact us at legal@spacelean.com
                    </p>
                </footer>
            </div>
        </main>
    );
}
