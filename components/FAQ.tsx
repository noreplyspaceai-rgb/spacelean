'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does the AI task planning actually work?",
    answer:
      "Our AI engine analyzes your project description to identify key deliverables, dependencies, and necessary steps. It then structures these into an actionable Kanban board or timeline, estimating duration based on millions of similar successful projects. You can refine the output instantly.",
    tag: "AI",
  },
  {
    question: "Can I integrate SpaceLean with my existing stack?",
    answer:
      "Absolutely. SpaceLean features native two-way sync with GitHub, GitLab, Slack, and Google Calendar. We also offer a Zapier integration to connect with over 5,000+ other applications, ensuring your workflow remains uninterrupted.",
    tag: "Integrations",
  },
  {
    question: "Is my data secure with SpaceLean?",
    answer:
      "Security is our top priority. We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. We are SOC2 Type II compliant and offer HIPAA-compliant instances for healthcare organizations. Your proprietary data is never used to train our AI models.",
    tag: "Security",
  },
  {
    question: "How does the pricing model work for larger teams?",
    answer:
      "SpaceLean is free forever for individuals and small teams up to 3 members. For larger organizations, we offer a per-seat pricing model that scales with your needs, including advanced features like SSO, audit logs, and dedicated support. Contact sales for enterprise volume discounts.",
    tag: "Billing",
  },
  {
    question: "Does SpaceLean support agile methodologies?",
    answer:
      "Yes, SpaceLean is built with Agile in mind. We support Scrum sprints, Kanban continuous flow, and hybrid methodologies. Features include burndown charts, velocity tracking, and retrospective boards.",
    tag: "Workflow",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#888] font-medium mb-5">
              Support
            </p>
            <h2 className="font-serif text-[clamp(36px,5vw,58px)] text-[#0a0a0a] leading-[1.1]">
              Frequently asked<br />
              <span className="">questions.</span>
            </h2>
          </div>
          <p className="font-mono text-[14px] text-[#555] leading-[1.85] font-light max-w-[420px]">
            Everything you need to know about the product and billing. Can't find
            the answer? Talk to our team.
          </p>
        </div>

        {/* Column Headers */}
        <div className="grid md:grid-cols-[72px_1fr_100px] grid-cols-[48px_1fr] border-b border-[#d8d8d8]">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#999] pb-[14px] font-medium">#</div>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#999] pb-[14px] font-medium">Question</div>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#999] pb-[14px] font-medium hidden md:block text-right">Category</div>
        </div>

        {/* Rows */}
        <div>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const isHighlighted = isOpen || hoveredIndex === idx;

            return (
              <div
                key={idx}
                className={`
                  grid md:grid-cols-[72px_1fr_100px] p-2 grid-cols-[48px_1fr]
                  items-start border-t border-[#d8d8d8] last:border-b
                  cursor-pointer relative overflow-hidden transition-colors duration-[250ms]
                  ${isOpen ? "bg-[#f4f4f4]" : hoveredIndex === idx ? "bg-[#f9f9f9]" : "bg-transparent"}
                `}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Number */}
                <div className="font-mono text-[13px] font-normal text-[#999] tracking-[0.12em] py-[30px] select-none">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Question + Answer */}
                <div className="py-[26px] pr-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-[24px] text-[#0a0a0a] leading-[1.25] m-0">
                      {faq.question}
                    </h3>
                    <div
                      className="flex-shrink-0 w-5 h-5 mt-[5px] transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#0a0a0a]">
                        <line x1="10" y1="3" x2="10" y2="17" />
                        <line x1="3" y1="10" x2="17" y2="10" />
                      </svg>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="font-mono text-[14px] leading-[1.9] text-[#444] font-light mt-5 max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tag */}
                <div
                  className={`hidden md:block font-mono text-[11px] tracking-[0.15em] uppercase py-8 text-right font-medium transition-colors duration-[250ms] ${
                    isHighlighted ? "text-[#0a0a0a]" : "text-[#aaa]"
                  }`}
                >
                  {faq.tag}
                </div>

                {/* Underline */}
                <div
                  className="absolute bottom-0 left-0 h-[1.5px] bg-[#0a0a0a] transition-all duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ width: isHighlighted ? "100%" : "0" }}
                />
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#888] font-medium">
            Click to expand
          </span>
          <div className="h-px flex-1 bg-[#d8d8d8]" />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#888] font-medium">
            {faqs.length} questions
          </span>
        </div>

      </div>
    </section>
  );
}