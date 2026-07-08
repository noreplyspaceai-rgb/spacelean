import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | SpaceLean AI",
    description:
        "Read the terms and conditions for using the SpaceLean AI platform, including account policies, service usage, intellectual property, and liability.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
        canonical: "/terms",
    },
    openGraph: {
        title: "Terms of Service | SpaceLean AI",
        description:
            "Terms and conditions for using the SpaceLean AI construction scheduling platform.",
        type: "website",
    },
};

export default function TermsPage() {
    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: "By accessing or using SpaceLean AI, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you may not use our services.",
        },
        {
            title: "2. User Accounts",
            content: "You are responsible for maintaining the security of your account and any activities that occur under your credentials. You must provide accurate and complete information when creating an account.",
        },
        {
            title: "3. Service Usage",
            content: "SpaceLean is designed for professional project management. You may not use the service for any illegal activities or to generate harmful content. We reserve the right to suspend accounts that violate these guidelines.",
        },
        {
            title: "4. Intellectual Property",
            content: "You retain ownership of any content you upload or generate. SpaceLean owns the platform, proprietary AI models, and trademarked material. You grant us a limited license to process your data to provide the service.",
        },
        {
            title: "5. Limitation of Liability",
            content: "SpaceLean AI is provided 'as is' without warranties. We are not liable for any indirect or consequential damages resulting from your use of the platform or AI-generated output.",
        },
    ];

    return (
        <main className="min-h-screen bg-[#fafafa] text-primary-text pt-40 pb-32">
            <div className="max-w-4xl mx-auto px-6">
                <header className="mb-20">
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        Terms of <br />
                        <span className="text-gray-300">Service.</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-light leading-relaxed">
                        Last updated: February 18, 2026. Please read these terms carefully before using our AI-powered orchestration platform.
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
                        By using SpaceLean, you agree to these legal conditions.
                    </p>
                </footer>
            </div>
        </main>
    );
}
