import type { Metadata } from "next";
import { Shield, Lock, Eye, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Security Standards | SpaceLean AI",
    description:
        "Explore the security protocols, encryption standards, SOC 2 compliance, and infrastructure powering SpaceLean AI's construction scheduling platform.",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
        canonical: "https://spacelean.ai/security",
        languages: {
            "en-US": "https://spacelean.ai/security",
            "en-GB": "https://spacelean.ai/security",
            "en-IN": "https://spacelean.ai/security",
            "x-default": "https://spacelean.ai/security",
        },
    },
    openGraph: {
        title: "Security Standards | SpaceLean AI",
        description:
            "Enterprise-grade security: AES-256 encryption, SOC 2 compliance, and multi-region cloud infrastructure.",
        type: "website",
    },
};

export default function SecurityPage() {
    const pillars = [
        {
            icon: <Lock className="w-8 h-8" />,
            title: "Encryption",
            content: "All data is encrypted at rest using AES-256 and in transit via TLS 1.3. Your project sensitive data is isolated and protected by modern cryptographic standards.",
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "SOC 2 Compliance",
            content: "We follow SOC 2 Type II principles for security, availability, and confidentiality. Regular third-party audits ensure our infrastructure remains resilient.",
        },
        {
            icon: <Eye className="w-8 h-8" />,
            title: "Privacy by Design",
            content: "We implement PII (Personally Identifiable Information) masking and data anonymization before training our internal task decomposition models.",
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Infrastructure",
            content: "Hosted on AWS and Google Cloud with multi-region redundancy, real-time intrusion detection, and automated vulnerability scanning.",
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white pt-40 pb-32">
            <div className="max-w-7xl mx-auto px-6">
                <header className="max-w-4xl mb-32">
                    <h1 className="text-5xl sm:text-8xl font-bold tracking-tighter mb-10 leading-none">
                        Fortified <br />
                        <span className="text-gray-500">Stability.</span>
                    </h1>
                    <p className="text-2xl text-gray-400 font-light leading-relaxed">
                        Enterprise-grade security for construction teams using SpaceLean&apos;s AI scheduling, BIM-to-schedule automation, and project management platform. We protect your project data, BIM files, schedules, and intellectual property with modern security architecture.
                    </p>
                </header>

                <section className="mb-20 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 tracking-tight">
                        Security for AI construction project data
                    </h2>
                    <p className="text-lg text-gray-400 font-light leading-relaxed">
                        SpaceLean is designed for general contractors, owners, consultants, and project controls teams that need secure construction scheduling software. Our platform protects sensitive model data, schedule logic, task assignments, and risk forecasts while keeping teams aligned across planning, execution, and reporting workflows.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="group p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all">
                                {pillar.icon}
                            </div>
                            <h2 className="text-3xl font-bold mb-6 tracking-tight">
                                {pillar.title}
                            </h2>
                            <p className="text-lg text-gray-400 font-light leading-relaxed">
                                {pillar.content}
                            </p>
                        </div>
                    ))}
                </div>

                <section className="mt-40 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 mb-10">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest">Active Monitoring</span>
                    </div>
                    <p className="text-gray-500 italic">
                        Found a vulnerability? Report it to security@spacelean.com
                    </p>
                </section>
            </div>
        </main>
    );
}
