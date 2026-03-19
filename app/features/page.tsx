import React from 'react';
import FeaturesClient from '../../components/FeaturesClient';
import type { Metadata } from 'next';

const faqData = [
    {
        question: 'How do I implement lean project management?',
        answer:
            'Start by identifying value for your customer, map the value stream to locate waste, create continuous flow, implement pull-based delivery (e.g., Kanban), and establish a culture of continuous improvement with regular retrospectives and metrics.'
    },
    {
        question: 'What tools support lean project management?',
        answer:
            'Use visual workflow tools such as Kanban boards (Trello, Jira, or SpaceLean Kanban), automation for repetitive tasks, and lightweight analytics to track cycle time, throughput, and WIP limits.'
    },
    {
        question: 'How do I measure success with lean methods?',
        answer:
            'Track lead/cycle time, throughput, work-in-progress (WIP), and customer satisfaction. Use these metrics to spot bottlenecks and prioritize improvements.'
    },
    {
        question: 'What are common pitfalls when adopting lean?',
        answer:
            'Common mistakes include focusing only on tools, ignoring people and culture, under-measuring outcomes, and not maintaining strict WIP limits. Address these by coaching teams and iterating on processes.'
    },
    {
        question: 'Can lean work with agile and remote teams?',
        answer:
            'Yes — lean complements agile by emphasizing flow and waste elimination. For remote teams, invest in clear visual boards, asynchronous communication, and frequent short feedback loops.'
    }
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
        }
    }))
};

export default function FeaturesPage() {
    return (
        <div className="min-h-screen text-primary-text font-sans">
            <main>
                <FeaturesClient />
                <script
                    type="application/ld+json"
                    // JSON-LD injected server-side for search engines
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </main>
        </div>
    );
}

export const metadata: Metadata = {
    title: "Features | SpaceLean - Intelligent Work",
    description:
        "Discover SpaceLean's core features: AI task decomposition, real-time collaboration, and intelligent automation to boost team productivity.",
    alternates: {
        canonical: "/features",
    },
};
