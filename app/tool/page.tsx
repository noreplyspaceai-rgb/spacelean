import type { Metadata } from "next";
import ToolClient from "./ToolClient";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Free AI Task Generator — Break Any Project into Steps | SpaceLean",
    description:
        "Free AI Task Generator by SpaceLean — transform any project description into a prioritized, dependency-mapped task list in seconds. No account required.",
    keywords: [
        "AI task generator",
        "free AI task generator",
        "AI task list generator",
        "automatic task breakdown",
        "AI project planner",
        "AI work breakdown structure",
        "project task generator",
        "AI to-do list generator",
        "AI sprint planner",
        "AI task decomposition tool",
        "automatic project scheduler",
        "AI-powered work breakdown structure",
    ],
    alternates: {
        canonical: "https://spacelean.ai/tool",
        languages: {
            "en-US": "https://spacelean.ai/tool",
            "en-GB": "https://spacelean.ai/tool",
            "en-IN": "https://spacelean.ai/tool",
            "x-default": "https://spacelean.ai/tool",
        },
    },
    openGraph: {
        title: "Free AI Task Generator — Turn Any Project into an Actionable Plan",
        description:
            "Describe your project in plain language. SpaceLean's AI generates a complete, prioritized task list with dependencies in seconds — free, no account required.",
        type: "website",
        url: "https://spacelean.ai/tool",
    },
    twitter: {
        card: "summary_large_image",
        title: "Free AI Task Generator | SpaceLean",
        description:
            "Describe your project, get back a structured task plan instantly. Free to use, no account needed.",
    },
};

export default function ToolPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SpaceLean AI Task Generator",
        "alternateName": "Free AI Task Generator",
        "operatingSystem": "Web",
        "applicationCategory": "ProductivityApplication",
        "url": "https://spacelean.ai/tool",
        "description": "Free AI task generator that transforms any project description into a prioritized, dependency-mapped task list in seconds. No account required.",
        "featureList": [
            "AI Task Decomposition from Plain Text",
            "Automatic Dependency Mapping",
            "Priority Scoring (Critical / High / Medium / Low)",
            "Duration Estimation per Task",
            "Sprint-Ready Task Lists",
            "OKR-to-Task Conversion",
            "Work Breakdown Structure Generation",
            "Export to Kanban Board",
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
            "availability": "https://schema.org/InStock",
        },
        "author": {
            "@type": "Organization",
            "name": "SpaceLean",
            "url": "https://spacelean.ai",
            "logo": "https://spacelean.ai/icononly_transparent_nobuffer.png",
        },
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Use SpaceLean's Free AI Task Generator",
        "description": "Generate a complete, prioritized task list for any project using SpaceLean's free AI Task Generator.",
        "totalTime": "PT2M",
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Describe your project",
                "text": "Type a plain-language description of your project or goal. Be as specific or broad as you like — the AI adapts to any project type.",
                "url": "https://spacelean.ai/tool",
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "AI generates your task plan",
                "text": "SpaceLean's AI analyzes your description and generates a structured task list with priorities, dependency order, and duration estimates in under 10 seconds.",
                "url": "https://spacelean.ai/tool",
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Review and refine",
                "text": "Review the generated tasks, reorder or add tasks as needed, and assign to team members.",
                "url": "https://spacelean.ai/tool",
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Start executing",
                "text": "Move your task plan to a Kanban board, share with your team, and start executing immediately.",
                "url": "https://spacelean.ai/tool",
            },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is an AI task generator?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An AI task generator is a tool that uses artificial intelligence to automatically break down a project description into a structured list of tasks with dependencies, priorities, and time estimates. Instead of manually planning every step, you describe your goal in plain language and the AI generates a ready-to-execute project plan in seconds. SpaceLean's AI Task Generator is completely free — no account required.",
                },
            },
            {
                "@type": "Question",
                "name": "Is SpaceLean's AI task generator free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes — SpaceLean's AI Task Generator is completely free to use with no account required. For teams that want to save plans, collaborate, and run full project management workflows, SpaceLean offers a free plan (up to 3 members) and a Pro plan starting at $19/month.",
                },
            },
            {
                "@type": "Question",
                "name": "How does SpaceLean's AI task generator work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SpaceLean uses a large language model trained on project management data to understand your project description and decompose it into actionable tasks. It identifies what needs to happen, in what order (dependencies), roughly how long each task takes (duration estimates), and how important each task is (priority scoring). The result is a ready-to-execute project plan generated in under 10 seconds.",
                },
            },
            {
                "@type": "Question",
                "name": "What types of projects can I use the AI task generator for?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SpaceLean's AI Task Generator works for any project type: software development, marketing campaigns, construction projects, product launches, research projects, event planning, OKR execution, and more. The AI adapts to your industry and team size.",
                },
            },
            {
                "@type": "Question",
                "name": "Can the AI generate tasks from OKRs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. SpaceLean's AI can take an OKR (Objective and Key Results) and generate the specific tasks needed to achieve each Key Result. This bridges the gap between strategic goal-setting and daily execution — a common problem in OKR programs.",
                },
            },
            {
                "@type": "Question",
                "name": "How is an AI task generator different from a to-do list app?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A to-do list app stores tasks you manually create. An AI task generator creates the tasks for you from a high-level project description — including the dependencies, order, and priorities you'd otherwise spend an hour figuring out yourself.",
                },
            },
        ],
    };

    return (
        <main className="min-h-screen bg-[#FAFAFA] text-primary-text pt-32 pb-32 overflow-hidden relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Background Minimalist Accents (Static) */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-black/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-black/[0.02] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[0.5px] border-black/[0.03] rounded-full pointer-events-none scale-150" />

            {/* Interactive Client Component */}
            <ToolClient />

            {/* Server-rendered SEO content */}
            <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <h2 className="text-3xl font-bold mb-6 text-center">What Is an AI Task Generator?</h2>
                <p className="text-gray-600 leading-relaxed mb-4 text-center max-w-2xl mx-auto">
                    An <strong>AI task generator</strong> automatically breaks down any project description
                    into a structured list of tasks — complete with dependencies, priorities, and time
                    estimates — in under 10 seconds.
                </p>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { icon: "✅", title: "Task Breakdown", desc: "Every deliverable decomposed into specific, actionable steps." },
                        { icon: "🔗", title: "Dependency Mapping", desc: "The AI maps which tasks must finish before others can start." },
                        { icon: "🎯", title: "Priority Scoring", desc: "Tasks ranked Critical / High / Medium / Low automatically." },
                        { icon: "⏱️", title: "Duration Estimates", desc: "Time estimates per task calibrated from thousands of similar projects." },
                        { icon: "🏗️", title: "Construction Projects", desc: "Understands trade sequencing, BIM milestones, and permit dependencies." },
                        { icon: "🎯", title: "OKR-to-Task Conversion", desc: "Paste a Key Result and get the execution tasks needed to hit it." },
                    ].map((f) => (
                        <div key={f.title} className="bg-white border border-black/10 rounded-2xl p-6 flex gap-4 items-start">
                            <span className="text-2xl flex-shrink-0">{f.icon}</span>
                            <div>
                                <h3 className="font-semibold mb-1">{f.title}</h3>
                                <p className="text-sm text-gray-500">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* AI vs Manual comparison table */}
                <h2 className="text-3xl font-bold mb-8 mt-20 text-center">AI Task Generator vs Manual Planning</h2>
                <div className="overflow-x-auto rounded-2xl border border-black/10">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="text-left py-3 px-5 font-semibold">Dimension</th>
                                <th className="text-left py-3 px-5 font-semibold">AI Generator</th>
                                <th className="text-left py-3 px-5 font-semibold">Manual Planning</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Time to first plan", "Under 10 seconds", "60–90 minutes"],
                                ["Dependency mapping", "Automatic", "Manual (often missed)"],
                                ["Priority scoring", "AI-ranked automatically", "Subjective, often skipped"],
                                ["Cost", "Free", "PM time = $50–$150/hour"],
                                ["Iteration speed", "Regenerate in seconds", "Hours to revise"],
                            ].map(([dim, ai, manual], i) => (
                                <tr key={dim} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <td className="py-3 px-5 font-medium">{dim}</td>
                                    <td className="py-3 px-5 text-green-700 font-medium">{ai}</td>
                                    <td className="py-3 px-5 text-gray-500">{manual}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* FAQ */}
                <h2 className="text-3xl font-bold mb-8 mt-20 text-center">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        {
                            q: "What is an AI task generator?",
                            a: "An AI task generator uses artificial intelligence to automatically break down a project description into a structured list of tasks with dependencies, priorities, and time estimates. Instead of spending hours mapping out a project manually, you describe your goal and the AI generates the plan in seconds.",
                        },
                        {
                            q: "Is SpaceLean's AI task generator free?",
                            a: "Yes — completely free with no account required. For teams that want to save plans and collaborate, SpaceLean offers a free plan for up to 3 members and a Pro plan starting at $19/month.",
                        },
                        {
                            q: "Can the AI generate tasks from OKRs?",
                            a: "Yes. Paste your Key Results and the AI generates the specific tasks your team needs to execute to hit each one — bridging strategic goals and daily work.",
                        },
                        {
                            q: "Does it work for construction projects?",
                            a: "Yes — SpaceLean has specialized construction project training. It understands trade sequencing, BIM deliverables, permit milestones, and construction-specific dependencies.",
                        },
                        {
                            q: "How is this different from a to-do list app?",
                            a: "A to-do list app stores tasks you manually create. An AI task generator creates the tasks for you from a high-level description — including dependencies, order, and priorities.",
                        },
                        {
                            q: "How accurate are the duration estimates?",
                            a: "Duration estimates are calibrated on patterns from thousands of similar projects. For standard project types, estimates are typically within 20–30% of actual. You can always adjust estimates for your team's specific capacity.",
                        },
                    ].map((item) => (
                        <div key={item.q} className="border-b border-black/10 pb-6">
                            <h3 className="font-semibold text-base mb-2">{item.q}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">{item.a}</p>
                        </div>
                    ))}
                </div>

                {/* Internal nav for SEO */}
                <div className="sr-only" aria-hidden="true">
                    <nav aria-label="Related resources">
                        <ul>
                            <li><Link href="/features">All SpaceLean Features</Link></li>
                            <li><Link href="/pricing">SpaceLean Pricing Plans</Link></li>
                            <li><Link href="/solutions">Solutions for Every Team</Link></li>
                            <li><Link href="/blogs/ai-task-management-future-productivity">AI Task Management Guide</Link></li>
                            <li><Link href="/blogs/lean-project-management-software">Lean Project Management Software</Link></li>
                            <li><Link href="/blogs/okr-management-complete-guide">OKR Management Guide</Link></li>
                            <li><Link href="/compare">SpaceLean vs Competitors</Link></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </main>
    );
}
