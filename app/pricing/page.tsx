import { Metadata } from 'next';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import WhyUs from '@/components/WhyUs';

export const metadata: Metadata = {
    title: "Pricing | SpaceLean - Scalable AI Task Management",
    description:
        "Explore SpaceLean's transparent pricing plans. From individual builders to large enterprises, find the right AI-powered tools for your workflow.",
    keywords: [
        "SpaceLean pricing",
        "AI project management cost",
        "SaaS pricing models",
        "enterprise project management",
    ],
    alternates: {
        canonical: "/pricing",
        languages: {
            "en-US": "/pricing",
            "en-GB": "/pricing",
            "en-IN": "/pricing",
            "x-default": "/pricing",
        },
    },
    openGraph: {
        title: "Pricing | SpaceLean — AI-Powered Task Management Plans",
        description:
            "Transparent pricing from free to enterprise. Find the right SpaceLean plan for your team.",
        type: "website",
    },
};

export default function PricingPage() {
    const pricingSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SpaceLean",
        "url": "https://spacelean.ai",
        "description": "SpaceLean AI-powered construction scheduling and project management platform. Free to start — plans for individuals, teams, and enterprises.",
        "applicationCategory": "ConstructionManagementSoftware",
        "screenshot": "https://spacelean.ai/dashboard.png",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1",
        },
        "offers": [
            {
                "@type": "Offer",
                "name": "Free",
                "price": "0.00",
                "priceCurrency": "USD",
                "url": "https://spacelean.ai/pricing",
                "availability": "https://schema.org/InStock",
                "description": "Free forever for individuals and small teams. AI task generation, Kanban boards, basic scheduling.",
            },
            {
                "@type": "Offer",
                "name": "Pro",
                "price": "15.00",
                "priceCurrency": "USD",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "billingIncrement": 1,
                    "price": "15.00",
                    "priceCurrency": "USD",
                    "unitText": "month",
                },
                "url": "https://spacelean.ai/pricing",
                "availability": "https://schema.org/InStock",
                "description": "Full AI scheduling, BIM integration, critical path analysis, and priority support.",
            },
            {
                "@type": "Offer",
                "name": "Teams",
                "price": "50.00",
                "priceCurrency": "USD",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "billingIncrement": 1,
                    "price": "50.00",
                    "priceCurrency": "USD",
                    "unitText": "month",
                },
                "url": "https://spacelean.ai/pricing",
                "availability": "https://schema.org/InStock",
                "description": "Everything in Pro plus SSO, audit logs, advanced analytics, and dedicated onboarding.",
            },
        ],
        "publisher": {
            "@type": "Organization",
            "name": "SpaceLean Inc.",
            "url": "https://spacelean.ai",
            "logo": "https://spacelean.ai/icononly_transparent_nobuffer.png",
        },
    } as const;
    return (
        <main className="min-h-screen bg-[#fafafa]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
            <section className="pt-32">
                <Pricing />
            </section>

            <WhyUs />
            <FAQ />

            {/* Bottom CTA */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-black mb-8 tracking-tighter">Ready to revolutionize your workflow?</h2>
                    <p className="text-xl text-gray-500 font-light mb-12">
                        Join thousands of teams using SpaceLean to automate their execution.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="https://cad.spaceaiapp.com/lean"
                            className="px-10 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-all shadow-xl shadow-black/20"
                        >
                            Get Started for Free
                        </a>
                        <a
                            href="/request-a-demo"
                            className="text-black font-bold border-b border-black pb-1 hover:text-gray-600 hover:border-gray-400 transition-all"
                        >
                            Schedule a Demo
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
