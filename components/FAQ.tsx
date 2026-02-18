'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "How does the AI task generation actually work?",
        answer: "Our Large Language Model (LLM) analyzes your project description to identify key deliverables, dependencies, and necessary steps. It then structures these into a actionable Kanban board or timeline, estimating duration based on millions of similar successful projects. You can then refine the output instantly."
    },
    {
        question: "Can I integrate SpaceLean with my existing stack?",
        answer: "Absolutely. SpaceLean features native two-way sync with GitHub, GitLab, Slack, and Google Calendar. We also offer a Zapier integration to connect with over 5,000+ other applications, ensuring your workflow remains uninterrupted."
    },
    {
        question: "Is my data secure with SpaceLean?",
        answer: "Security is our top priority. We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. We are SOC2 Type II compliant and offer HIPAA-compliant instances for healthcare organizations. Your proprietary data is never used to train our public models."
    },
    {
        question: "How does the pricing model work for larger teams?",
        answer: "SpaceLean is free forever for individuals and small teams up to 3 members. For larger organizations, we offer a per-seat pricing model that scales with your needs, including advanced features like SSO, audit logs, and dedicated support. Contact sales for enterprise volume discounts."
    },
    {
        question: "Does SpaceLean support agile methodologies?",
        answer: "Yes, SpaceLean is built with Agile in mind. We support Scrum sprints, Kanban continuous flow, and hybrid methodologies. Features include burndown charts, velocity tracking, and retrospective boards."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // SEO Schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-32 bg-[#fafafa]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 tracking-tighter">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-500 font-light">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                <div className="border-t border-black">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border-b border-black/10"
                        >
                            <button
                                onClick={() => toggleFAQ(idx)}
                                className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
                                aria-expanded={openIndex === idx}
                            >
                                <span className="text-xl sm:text-2xl font-medium text-black group-hover:text-gray-600 transition-colors pr-8">{faq.question}</span>
                                {openIndex === idx ? (
                                    <Minus className="w-6 h-6 text-black flex-shrink-0" />
                                ) : (
                                    <Plus className="w-6 h-6 text-black flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl pb-10">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
