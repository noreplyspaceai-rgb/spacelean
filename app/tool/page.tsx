import { Metadata } from "next";
import ToolClient from "./ToolClient";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "Free AI Task Generator | SpaceLean AI Tool",
    description:
        "Transform any project idea into a step-by-step execution plan with our free AI Task Generator. Break down complex projects instantly using the SpaceLean AI engine.",
    keywords: [
        "AI task generator",
        "project breakdown tool",
        "free project planner",
        "AI task list creator",
        "automatic project scheduler",
        "AI-powered work breakdown structure",
    ],
};

export default function ToolPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SpaceLean AI Task Generator",
        "operatingSystem": "Web",
        "applicationCategory": "ProductivityApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
        },
        "description": "A free AI-powered tool that automatically breaks down complex project descriptions into actionable tasks and structured project plans.",
        "featureList": [
            "Natural Language Project Decomposition",
            "Instant Task Generation",
            "Structured Execution Planning",
            "AI-Powered Work Breakdown Structure"
        ],
        "author": {
            "@type": "Organization",
            "name": "SpaceLean AI"
        }
    };

    const howToLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Generate a Project Plan with SpaceLean AI",
        "description": "Create a complete project breakdown in under 60 seconds using artificial intelligence.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Describe your project",
                "text": "Enter a high-level description of your project or goal in plain English."
            },
            {
                "@type": "HowToStep",
                "name": "Click Generate",
                "text": "Press the generate button to activate the SpaceLean AI decomposition engine."
            },
            {
                "@type": "HowToStep",
                "name": "Review your plan",
                "text": "Watch as the AI instantly generates a step-by-step list of actionable tasks."
            }
        ]
    };

    return (
        <main className="min-h-screen bg-[#fafafa] text-black pt-32 pb-20 overflow-hidden relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
            />

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] border border-black/5 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none opacity-40" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] border border-black/5 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none opacity-40" />

            {/* Header Section */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white mb-8 shadow-sm">
                    <Sparkles className="w-3 h-3 text-black" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Free AI Tool</span>
                </div>

                <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter text-black leading-tight">
                    AI Task <br />
                    <span className="text-gray-300">Generator.</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                    Turn a simple idea into a structured project plan in seconds. <br className="hidden md:block" />
                    No sign-up required. Powered by SpaceLean v4.2.
                </p>
            </div>

            {/* Interactive Client Component */}
            <ToolClient />
        </main>
    );
}
