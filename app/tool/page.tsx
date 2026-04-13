import type { Metadata } from "next";
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
    alternates: {
        canonical: "/tool",
    },
    openGraph: {
        title: "Free AI Task Generator | SpaceLean",
        description:
            "Transform any project idea into a step-by-step execution plan with AI — completely free.",
        type: "website",
    },
};

export default function ToolPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SpaceLean AI Task Generator",
        "alternateName": "SpaceLean Free AI Task Generator",
        "operatingSystem": "Web",
        "applicationCategory": "ProductivityApplication",
        "url": "https://spacelean.ai/tool",
        "description": "Automatically break down complex projects into prioritized, actionable tasks using SpaceLean's free AI engine. No account required.",
        "featureList": [
            "AI-Powered Task Decomposition",
            "Agile Workflow Generation",
            "Smart Task Prioritization",
            "Automated Project Scheduling",
            "OKR to Task Conversion",
            "Work Breakdown Structure Generation",
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1",
        },
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free to use — no account or credit card required",
        },
        "author": {
            "@type": "Organization",
            "name": "SpaceLean",
            "url": "https://spacelean.ai",
            "logo": "https://spacelean.ai/icononly_transparent_nobuffer.png",
        },
    };

    return (
        <main className="min-h-screen bg-[#FAFAFA] text-primary-text pt-32 pb-32 overflow-hidden relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Background Minimalist Accents (Static) */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-black/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-black/[0.02] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[0.5px] border-black/[0.03] rounded-full pointer-events-none scale-150" />

            {/* Interactive Client Component (Handles Hero Animation & Logic) */}
            <ToolClient />
        </main>
    );
}
