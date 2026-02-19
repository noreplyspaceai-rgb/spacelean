import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { comparisons } from '@/lib/compare-data';
import ComparisonDetail from '@/components/ComparisonDetail';

const SLUG = 'spacelean-vs-clickup';
const data = comparisons.find((c) => c.slug === SLUG);

export const metadata: Metadata = {
    title: data ? data.title : 'SpaceLean vs ClickUp',
    description: data ? data.description : 'Compare SpaceLean vs ClickUp',
    alternates: {
        canonical: `/compare/${SLUG}`,
    },
};

export default function ComparePage() {
    if (!data) return notFound();

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SpaceLean",
        "operatingSystem": "Web, iOS, Android",
        "applicationCategory": "ProjectManagementApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1200"
        }
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <ComparisonDetail data={data} />
        </main>
    );
}
