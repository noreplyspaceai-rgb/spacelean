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
    },
};

export default function PricingPage() {
    const pricingSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Space Lean",
        "url": "https://spacelean.ai",
        "description": "Space Lean pricing page describing available subscription tiers for the AI-powered project management platform.",
        "applicationCategory": "ProjectManagement",
        "offers": [
            {
                "@type": "Offer",
                "name": "Free",
                "price": "0.00",
                "priceCurrency": "USD",
                "url": "https://spacelean.ai/#signup",
                "availability": "https://schema.org/InStock"
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
                    "unitText": "month"
                },
                "url": "https://spacelean.ai/pricing#pro",
                "availability": "https://schema.org/InStock"
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
                    "unitText": "month"
                },
                "url": "https://spacelean.ai/pricing#teams",
                "availability": "https://schema.org/InStock"
            }
        ],
        "publisher": {
            "@type": "Organization",
            "name": "Space Lean Inc.",
            "url": "https://spacelean.ai"
        }
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
