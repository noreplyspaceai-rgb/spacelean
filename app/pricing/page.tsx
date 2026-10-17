import { Metadata } from 'next';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import WhyUs from '@/components/WhyUs';

export const metadata: Metadata = {
    title: "Construction Scheduling Software Pricing | SpaceLean — Free, Pro & Enterprise",
    description:
        "Explore SpaceLean pricing for AI-powered construction scheduling. Free plan includes BIM viewer and AI task generator. Pro at $19/user/month includes 4D sequencing, Monte Carlo risk analysis, and P6 export.",
    keywords: [
        "SpaceLean pricing",
        "AI project management cost",
        "SaaS pricing models",
        "enterprise project management",
    ],
    alternates: {
        canonical: "https://spacelean.ai/pricing",
        languages: {
            "en-US": "https://spacelean.ai/pricing",
            "en-GB": "https://spacelean.ai/pricing",
            "en-IN": "https://spacelean.ai/pricing",
            "x-default": "https://spacelean.ai/pricing",
        },
    },
    openGraph: {
        title: "SpaceLean Pricing — AI Construction Scheduling Plans",
        description:
            "Transparent pricing from free to enterprise. Find the right SpaceLean plan for your construction team. No hidden fees, cancel anytime.",
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
                "name": "Individual",
                "price": "0.00",
                "priceCurrency": "USD",
                "url": "https://spacelean.ai/pricing",
                "availability": "https://schema.org/InStock",
                "description": "Free forever for individuals and small teams. AI task generation, Kanban boards, basic scheduling.",
            },
            {
                "@type": "Offer",
                "name": "Pro",
                "price": "19.00",
                "priceCurrency": "USD",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "billingIncrement": 1,
                    "price": "19.00",
                    "priceCurrency": "USD",
                    "unitText": "month",
                },
                "url": "https://spacelean.ai/pricing",
                "availability": "https://schema.org/InStock",
                "description": "Full AI scheduling, BIM integration, critical path analysis, and priority support.",
            },
            {
                "@type": "Offer",
                "name": "Enterprise",
                "price": "0.00",
                "priceCurrency": "USD",
                "url": "https://spacelean.ai/request-a-demo",
                "availability": "https://schema.org/PreOrder",
                "description": "Enterprise-grade security, SSO/SAML, audit logs, custom AI training, and dedicated onboarding manager.",
            },
        ],
        "publisher": {
            "@type": "Organization",
            "name": "SpaceLean Inc.",
            "url": "https://spacelean.ai",
            "logo": "https://spacelean.ai/icononly_transparent_nobuffer.png",
        },
    } as const;

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "SpaceLean AI Construction Scheduling Platform",
        "image": "https://spacelean.ai/dashboard.png",
        "description": "SpaceLean is an AI-powered construction scheduling and project management platform. Choose from Individual (Free), Pro ($19/mo), and Enterprise (Custom) plans.",
        "brand": {
            "@type": "Brand",
            "name": "SpaceLean"
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "0.00",
            "highPrice": "19.00",
            "offerCount": "3",
            "offers": [
                {
                    "@type": "Offer",
                    "name": "SpaceLean Individual Plan",
                    "price": "0.00",
                    "priceCurrency": "USD",
                    "url": "https://spacelean.ai/pricing",
                    "availability": "https://schema.org/InStock",
                    "description": "Free forever for individuals and small teams. Includes basic AI task generation, Kanban boards, and manual tracking."
                },
                {
                    "@type": "Offer",
                    "name": "SpaceLean Pro Plan",
                    "price": "19.00",
                    "priceCurrency": "USD",
                    "priceSpecification": {
                        "@type": "UnitPriceSpecification",
                        "billingIncrement": 1,
                        "price": "19.00",
                        "priceCurrency": "USD",
                        "unitText": "month"
                    },
                    "url": "https://spacelean.ai/pricing",
                    "availability": "https://schema.org/InStock",
                    "description": "Full AI scheduling, BIM integration, critical path analysis, and priority email support."
                },
                {
                    "@type": "Offer",
                    "name": "SpaceLean Enterprise Plan",
                    "price": "0.00",
                    "priceCurrency": "USD",
                    "url": "https://spacelean.ai/pricing",
                    "availability": "https://schema.org/PreOrder",
                    "description": "Enterprise-grade security, SSO/SAML, audit logs, custom AI training, and dedicated onboarding manager."
                }
            ]
        }
    } as const;

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://spacelean.ai",
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Pricing",
                "item": "https://spacelean.ai/pricing",
            },
        ],
    } as const;

    return (
        <main className="min-h-screen bg-[#fafafa]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* HTML Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-2 text-xs font-mono text-neutral-500">
                <ol className="flex items-center space-x-2">
                    <li><a href="/" className="hover:text-cyan-600 transition-colors">Home</a></li>
                    <li><span>/</span></li>
                    <li className="text-neutral-900 font-semibold" aria-current="page">Pricing</li>
                </ol>
            </nav>

            <h1 className="sr-only">Construction Scheduling Software Pricing | SpaceLean</h1>

            <section className="pt-4">
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
