import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { comparisons } from '@/lib/compare-data';
import ComparisonDetail from '@/components/ComparisonDetail';

const SLUG = 'spacelean-vs-asana';
const data = comparisons.find((c) => c.slug === SLUG);

export const metadata: Metadata = {
    title: data ? data.title : 'SpaceLean vs Asana',
    description: data ? data.description : 'Compare SpaceLean vs Asana',
    alternates: {
        canonical: `/compare/${SLUG}`,
    },
};

export default function ComparePage() {
    if (!data) return notFound();

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faqs.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <ComparisonDetail data={data} />
        </main>
    );
}
