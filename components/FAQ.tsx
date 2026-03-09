'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div>
            {/* Badge pill — matches HeroSection */}
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              Support
            </span>

            <h2 className="text-3xl md:text-5xl font-normal tracking-tight leading-tight">
              Frequently asked <br />
              <span className="font-bold text-cyan-500">questions.</span>
            </h2>
          </div>

          {/* Pullquote — matches HeroSection/WhyUs style */}
          <span className="block border-l-4 border-cyan-400 pl-4 max-w-xs">
            <span className="block text-sm font-mono text-neutral-500 leading-relaxed">
              Everything you need to know about the product and billing.
            </span>
            <span className="block text-sm font-mono font-semibold text-cyan-500 leading-relaxed mt-1">
              Can't find the answer? Talk to our team.
            </span>
          </span>
        </div>

        {/* Column Headers */}
        <div className="grid md:grid-cols-[72px_1fr_120px] grid-cols-[56px_1fr] border-b border-black/8">
          <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-neutral-400 pb-4">#</div>
          <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-neutral-400 pb-4">Question</div>
          <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-neutral-400 pb-4 hidden md:block text-right">Category</div>
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
                  grid md:grid-cols-[72px_1fr_120px] p-2 grid-cols-[56px_1fr]
                  items-start border-t border-black/8 last:border-b
                  cursor-pointer relative overflow-hidden transition-colors duration-[250ms]
                  ${isOpen ? "bg-cyan-50/60" : hoveredIndex === idx ? "bg-cyan-50/30" : "bg-transparent"}
                `}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Number */}
                <div
                  className={`text-[15px] font-mono tracking-[0.15em] py-8 select-none transition-colors duration-250 ${
                    isHighlighted ? "text-cyan-400" : "text-neutral-300"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Question + Answer */}
                <div className="py-8 pr-8">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-neutral-800 leading-snug">
                      {faq.question}
                    </h3>

                    {/* +/× toggle — fills cyan when open */}
                    <div
                      className={`flex-shrink-0 w-7 h-7 mt-1 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-cyan-500 border-cyan-500 rotate-45"
                          : "bg-black/[0.04] border-black/10 rotate-0"
                      }`}
                    >
                      <svg
                        viewBox="0 0 20 20" fill="none"
                        stroke={isOpen ? "white" : "currentColor"}
                        strokeWidth="1.75"
                        className="w-3.5 h-3.5"
                      >
                        <line x1="10" y1="3" x2="10" y2="17" />
                        <line x1="3"  y1="10" x2="17" y2="10" />
                      </svg>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        {/* Answer uses font-mono + left accent — matches WhyUs pullquote */}
                        <div className="mt-6 border-l-4 border-cyan-400 pl-4">
                          <p className="text-sm font-mono text-neutral-500 leading-relaxed max-w-2xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tag */}
                <div
                  className={`hidden md:block text-[12px] font-mono tracking-[0.18em] uppercase py-8 text-right transition-colors duration-[250ms] ${
                    isHighlighted ? "text-cyan-500" : "text-neutral-300"
                  }`}
                >
                  {faq.tag}
                </div>

                {/* Animated bottom border — cyan sweep */}
                <div
                  className="absolute bottom-0 left-0 h-[1.5px] bg-cyan-500 transition-all duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ width: isHighlighted ? "100%" : "0" }}
                />
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-14 flex items-center gap-4">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-400">
            Click to expand
          </span>
          <div className="h-px flex-1 bg-black/8" />
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-400">
            {faqs.length} questions
          </span>
        </div>

      </div>
    </section>
  );
}