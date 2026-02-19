"use client";

import { ComparisonData } from '@/lib/compare-data';
import { Check, X, ArrowRight, Star, HelpCircle, Lightbulb, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ComparisonDetailProps {
    data: ComparisonData;
}

export default function ComparisonDetail({ data }: ComparisonDetailProps) {
    return (
        <div className="bg-[#fafafa]">
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] border border-black/5 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />
                <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-white text-gray-500 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                            <span>Complexity</span>
                            <ArrowRight className="w-4 h-4" />
                            <span>Clarity</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter text-black">
                            SpaceLean <span className="text-gray-300">vs</span> {data.competitorName}
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed mb-12">
                            {data.summary}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="bg-white border border-black/5 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5">
                        <div className="grid grid-cols-3 bg-gray-50 p-8 border-b border-black/5">
                            <div className="col-span-1 font-bold text-gray-400 uppercase tracking-widest text-[10px] self-center">Feature Capability</div>
                            <div className="col-span-1 font-bold text-center text-2xl text-black">SpaceLean</div>
                            <div className="col-span-1 font-bold text-center text-2xl text-gray-400">{data.competitorName}</div>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {data.features.map((category) => (
                                <div key={category.category}>
                                    <div className="px-8 py-4 bg-gray-50/30 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-y border-gray-100">
                                        {category.category}
                                    </div>
                                    {category.items.map((item) => (
                                        <div key={item.name} className="grid grid-cols-3 px-8 py-6 hover:bg-gray-50 transition-colors group">
                                            <div className="col-span-1 text-gray-900 font-bold tracking-tight flex items-center">{item.name}</div>
                                            <div className="col-span-1 text-center flex justify-center items-center">
                                                {item.spacelean === true ? (
                                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                                                        <Check className="w-4 h-4 text-white" />
                                                    </div>
                                                ) : (
                                                    <span className="text-black font-bold uppercase text-xs tracking-wider">{item.spacelean}</span>
                                                )}
                                            </div>
                                            <div className="col-span-1 text-center flex justify-center items-center text-gray-400">
                                                {item.competitor === true ? (
                                                    <Check className="w-5 h-5 text-gray-200" />
                                                ) : item.competitor === false ? (
                                                    <X className="w-5 h-5 text-gray-200" />
                                                ) : (
                                                    <span className="font-medium text-xs tracking-wider">{item.competitor}</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-6xl font-bold text-black tracking-tighter mb-12">
                                The AI <br />
                                <span className="text-gray-300">Differentiator.</span>
                            </h2>
                            <div className="space-y-12">
                                {data.featuresDeepDive.map((dive) => (
                                    <div key={dive.title}>
                                        <h3 className="text-2xl font-bold text-black mb-4 tracking-tight flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center">
                                                <Star className="w-4 h-4 text-black" />
                                            </div>
                                            {dive.title}
                                        </h3>
                                        <p className="text-gray-500 font-light leading-relaxed text-lg italic">
                                            "{dive.description}"
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-50 p-12 rounded-[3rem] border border-black/5">
                            <h3 className="text-2xl font-bold text-black mb-8">When to stick with {data.competitorName}?</h3>
                            <ul className="space-y-6 mb-12">
                                {data.pros.map((pro, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5" />
                                        <span className="text-gray-600 font-light">{pro}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-8 border-t border-black/5">
                                <span className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] mb-4 block">Known Limitations</span>
                                <ul className="space-y-4">
                                    {data.cons.map((con, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <X className="w-4 h-4 text-gray-300 flex-shrink-0 mt-1" />
                                            <span className="text-gray-400 text-sm font-light">{con}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-32 bg-[#fafafa]">
                <div className="container mx-auto max-w-7xl px-4">
                    <h2 className="text-4xl font-bold text-black tracking-tighter mb-16 text-center">Best Applied In.</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {data.useCases.map((useCase) => (
                            <div key={useCase.title} className="bg-white p-12 rounded-3xl border border-black/5 shadow-sm">
                                <Lightbulb className="w-8 h-8 text-black mb-6" />
                                <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">{useCase.title}</h3>
                                <p className="text-gray-500 font-light leading-relaxed">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-32 bg-white">
                <div className="container mx-auto max-w-3xl px-4">
                    <h2 className="text-4xl font-bold text-black tracking-tighter mb-16 text-center">Common Questions.</h2>
                    <div className="space-y-8">
                        {data.faqs.map((faq) => (
                            <div key={faq.question} className="border-b border-black/5 pb-8">
                                <h3 className="text-xl font-bold text-black mb-4 flex items-start gap-4">
                                    <HelpCircle className="w-6 h-6 text-gray-300 mt-0.5" />
                                    {faq.question}
                                </h3>
                                <p className="text-gray-500 font-light pl-10 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verdict */}
            <section className="py-40 bg-black text-white text-center rounded-t-[4rem]">
                <div className="container mx-auto max-w-4xl px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <ShieldCheck className="w-16 h-16 text-gray-600 mx-auto mb-10" />
                        <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-10 leading-tight">The Verdict.</h2>
                        <p className="text-2xl sm:text-3xl font-light text-gray-400 mb-16 leading-relaxed">
                            {data.verdict}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <Link
                                href="https://cad.spaceaiapp.com/lean"
                                className="px-12 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-all text-lg"
                            >
                                Experience the AI Advantage
                            </Link>
                            <Link
                                href="/request-a-demo"
                                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                            >
                                Request a personalized demo
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
