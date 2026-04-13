import React from 'react';
import Link from 'next/link';
import FeaturesClient from '../../components/FeaturesClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Features | SpaceLean — AI Task Management, Kanban & Lean Scheduling Tools",
    description:
        "SpaceLean features AI task decomposition, real-time Kanban boards, intelligent automation, and lean scheduling — everything your team needs to deliver projects 40% faster. Free to start.",
    keywords: [
        "AI task management features",
        "lean project management tools",
        "AI task decomposition",
        "real-time team collaboration",
        "intelligent workflow automation",
        "Kanban board software",
        "construction scheduling features",
        "productivity software features",
        "AI project planning",
        "lean construction scheduling",
        "automated task breakdown",
    ],
    alternates: {
        canonical: "/features",
        languages: {
            "en-US": "/features",
            "en-GB": "/features",
            "en-IN": "/features",
            "x-default": "/features",
        },
    },
    openGraph: {
        title: "Features | SpaceLean — AI Task Management & Lean Scheduling",
        description:
            "AI task decomposition, real-time Kanban boards, and intelligent automation. Deliver projects 40% faster with SpaceLean.",
        type: "website",
        images: ["/marketing.jpg"],
    },
};

const faqData = [
    {
        question: 'How does SpaceLean AI task decomposition work?',
        answer:
            'SpaceLean uses advanced natural language processing to analyze your project description and automatically break it into actionable tasks with priorities, time estimates, and dependencies — in seconds, not hours.'
    },
    {
        question: 'What tools support lean project management?',
        answer:
            'Use visual workflow tools such as Kanban boards (Trello, Jira, or SpaceLean), automation for repetitive tasks, and lightweight analytics to track cycle time, throughput, and WIP limits.'
    },
    {
        question: 'How do I measure success with lean methods?',
        answer:
            'Track lead/cycle time, throughput, work-in-progress (WIP), and customer satisfaction. Use these metrics to spot bottlenecks and prioritize improvements.'
    },
    {
        question: 'Can SpaceLean integrate with my existing tools?',
        answer:
            'Yes — SpaceLean integrates with GitHub, GitLab, Slack, Google Calendar, and 5,000+ apps via Zapier. Your workflow stays connected without switching tools.'
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

const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SpaceLean',
    applicationCategory: 'ProjectManagementSoftware',
    operatingSystem: 'Web',
    description: 'AI-powered lean project management and construction scheduling platform with task decomposition, Kanban boards, intelligent automation, and BIM-to-schedule generation.',
    url: 'https://spacelean.ai/features',
    screenshot: 'https://spacelean.ai/dashboard.png',
    featureList: [
        'AI Task Decomposition',
        'Real-Time Collaboration',
        'Intelligent Workflow Automation',
        'Kanban Board Management',
        'Lean Scheduling',
        'BIM to Schedule Integration',
        'Critical Path Analysis',
        'Crew & Trade Optimization',
        'OKR Goal Management',
        'Construction Sequencing AI',
        'Predictive Risk Detection',
        'Sprint Planning',
    ],
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1',
    },
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        url: 'https://spacelean.ai/pricing',
        description: 'Free plan available — no credit card required',
    },
    author: {
        '@type': 'Organization',
        name: 'SpaceLean',
        url: 'https://spacelean.ai',
        logo: 'https://spacelean.ai/icononly_transparent_nobuffer.png',
    },
};

const featuresSummary = [
    {
        title: "AI Task Decomposition",
        description: "Describe your project in plain language and SpaceLean instantly breaks it into prioritized, time-estimated tasks with dependencies mapped automatically.",
    },
    {
        title: "Real-Time Collaboration",
        description: "Work together with your team in real time — see live updates, assign tasks, track progress, and communicate directly within project boards.",
    },
    {
        title: "Intelligent Automation",
        description: "Automate repetitive workflows, trigger actions based on task status changes, and let AI handle scheduling adjustments when plans change.",
    },
];

export default function FeaturesPage() {
    return (
        <div className="min-h-screen text-primary-text font-sans">
            <main>
                {/* Server-rendered content for SEO */}
                <div className="sr-only">
                    <h1>SpaceLean Features — AI Task Management & Lean Scheduling Tools</h1>
                    <p>
                        SpaceLean combines AI task decomposition, real-time Kanban boards, and intelligent
                        automation to help teams deliver projects faster. Used by construction, engineering,
                        and product teams worldwide.
                    </p>

                    <h2>Core Features</h2>
                    {featuresSummary.map((f) => (
                        <section key={f.title}>
                            <h3>{f.title}</h3>
                            <p>{f.description}</p>
                        </section>
                    ))}

                    <h2>Related Resources</h2>
                    <ul>
                        <li><Link href="/solutions">Solutions for Every Team</Link></li>
                        <li><Link href="/space-lean-core">Space Lean Core Platform</Link></li>
                        <li><Link href="/tool">Free AI Task Generator</Link></li>
                        <li><Link href="/pricing">Pricing Plans</Link></li>
                        <li><Link href="/blogs/okr-templates-every-team">Free OKR Templates</Link></li>
                    </ul>
                </div>

                <FeaturesClient />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
                />
            </main>
        </div>
    );
}
