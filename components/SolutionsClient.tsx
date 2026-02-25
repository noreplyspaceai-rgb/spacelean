"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Star, Sparkles, Terminal } from "lucide-react";
import { Solution } from "@/lib/solutions-data";

export function SolutionsIndexClient({ solutions }: { solutions: Solution[] }) {
    return (
        <>
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] border border-black/5 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />

            <section className="relative z-10 pt-20 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white mb-8 shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                        <span className="text-xs font-bold tracking-wide uppercase">Solutions for Every Team</span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-7xl font-bold text-gray-900 mb-8 tracking-tighter leading-tight"
                    >
                        One Platform,{" "}
                        <span className="text-gray-300">
                            Endless Clarity.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl sm:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                    >
                        SpaceLean adapts to your team&apos;s unique workflow. Whether
                        you&apos;re in marketing, engineering, design, or leading a startup,
                        our AI-powered platform helps you work smarter and achieve more.
                    </motion.p>
                </div>
            </section>

            <section className="relative z-10 pb-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, idx) => (
                            <motion.div
                                key={solution.slug}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.1 * idx }}
                            >
                                <Link
                                    href={`/solutions/${solution.slug}`}
                                    className="group relative bg-white rounded-3xl border border-black/5 overflow-hidden hover:border-black/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 block h-full"
                                >
                                    <div className="aspect-[16/10] relative overflow-hidden">
                                        <Image
                                            src={solution.heroImage}
                                            alt={solution.title}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                                    </div>

                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-3">
                                                <span className="text-3xl">{solution.icon}</span>
                                                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                                                    {solution.title.replace("Space Lean for ", "")}
                                                </h2>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-500">
                                                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                            </div>
                                        </div>

                                        <p className="text-gray-500 mb-8 line-clamp-2 text-lg leading-relaxed">
                                            {solution.tagline}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {solution.features.slice(0, 3).map((feature, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs font-bold tracking-wide uppercase bg-gray-50 text-gray-400 group-hover:text-black transition-colors px-3 py-1 rounded-full border border-black/5"
                                                >
                                                    {feature.title}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export function SolutionDetailClient({ solution, otherSolutions }: { solution: Solution, otherSolutions: Solution[] }) {
    return (
        <>
            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] border border-black/5 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />

            <section className="relative z-10 pb-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link
                                href="/solutions"
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-black mb-10 group transition-colors"
                                prefetch={false}
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-bold tracking-wide uppercase">All Solutions</span>
                            </Link>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-white border border-black/10 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                                    {solution.icon}
                                </div>
                                <div className="h-px w-8 bg-black/10" />
                                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                                    {solution.title.replace("Space Lean for ", "")}
                                </span>
                            </div>

                            <h1 className="text-5xl sm:text-7xl font-bold text-black mb-8 tracking-tighter leading-[1.1]">
                                {solution.tagline}
                            </h1>

                            <p className="text-xl sm:text-2xl text-gray-500 mb-12 leading-relaxed font-light">
                                {solution.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link
                                    href="/request-a-demo"
                                    className="inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-black/20"
                                >
                                    <span>{solution.cta.primary}</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/request-a-demo"
                                    className="inline-flex items-center justify-center gap-2 border border-black/10 text-black px-10 py-4 rounded-full font-bold hover:bg-black/5 transition-all"
                                >
                                    <span>{solution.cta.secondary}</span>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 border border-black/5 underline-offset-4">
                                <Image
                                    src={solution.heroImage}
                                    alt={solution.title}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-black/5 animate-bounce-slow">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Efficiency Boost</p>
                                <p className="text-2xl font-bold text-black">+40%</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="relative z-10 py-32 px-4 bg-black text-white rounded-[4rem] my-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center p-10 sm:p-20">
                        <div>
                            <h2 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tighter">
                                Built for your <br />
                                <span className="text-gray-500">workflow.</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
                                SpaceLean seamlessly integrates with how your team already
                                works. No complex migrations or steep learning curves.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {solution.useCases.map((useCase, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <span className="text-gray-300 font-medium">{useCase}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group/mockup">
                            {/* Decorative Glow */}
                            <div className="absolute -inset-20 bg-blue-500/10 rounded-full blur-[100px] opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a0a] p-1 shadow-2xl">
                                {/* Chrome-like Header */}
                                <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-400/40" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20 border border-yellow-400/40" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/20 border border-green-400/40" />
                                    </div>
                                    <div className="ml-4 px-4 py-1 bg-white/5 rounded-full text-[8px] font-bold text-gray-500 uppercase tracking-widest border border-white/5">
                                        app.spacelean.com / dashboard
                                    </div>
                                </div>

                                <div className="p-8 h-full flex flex-col gap-6">
                                    {/* Main Content Area */}
                                    <div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.01] p-6 relative overflow-hidden">
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="space-y-2">
                                                <div className="w-24 h-2 bg-white/10 rounded" />
                                                <div className="w-48 h-4 bg-white/20 rounded" />
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-white/10" />
                                        </div>

                                        <div className="space-y-4">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.02] bg-white/[0.02]">
                                                    <div className="w-4 h-4 rounded border border-white/20" />
                                                    <div className="w-full h-2 bg-white/10 rounded" />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Floating Layer 1: Progress Chart */}
                                        <motion.div
                                            style={{ y: -20, x: 20 }}
                                            animate={{ y: [-20, -30, -20] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute top-12 right-12 w-48 bg-white p-6 rounded-2xl shadow-2xl shadow-black/50 border border-black/5"
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                                <span className="text-[10px] font-bold text-black uppercase tracking-widest leading-none">Velocity Score</span>
                                            </div>
                                            <div className="flex items-end gap-1.5 h-16">
                                                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-gray-100 rounded-sm overflow-hidden relative">
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            whileInView={{ height: `${h}%` }}
                                                            className="absolute bottom-0 left-0 right-0 bg-black"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>

                                        {/* Floating Layer 2: AI Insight */}
                                        <motion.div
                                            style={{ y: 80, x: -40 }}
                                            animate={{ y: [80, 90, 80] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                            className="absolute bottom-12 left-12 w-64 bg-black text-white p-6 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl"
                                        >
                                            <div className="flex items-center gap-3 mb-4 text-blue-400">
                                                <Sparkles className="w-4 h-4" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest">AI Suggestion</span>
                                            </div>
                                            <div className="text-sm font-medium leading-relaxed text-gray-300">
                                                Based on team capacity, we recommend moving <span className="text-white">API Integration</span> to Sprint 3.
                                            </div>
                                            <div className="mt-4 flex gap-2">
                                                <div className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-tight">Accept</div>
                                                <div className="px-3 py-1 text-gray-500 rounded-full text-[9px] font-bold uppercase tracking-tight">Dismiss</div>
                                            </div>
                                        </motion.div>

                                        {/* Floating Layer 3: Team Activity */}
                                        <motion.div
                                            style={{ y: 40, x: 220 }}
                                            animate={{ y: [40, 30, 40] }}
                                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                            className="absolute top-1/2 right-4 w-56 bg-white p-5 rounded-2xl shadow-xl border border-black/5 hidden md:block"
                                        >
                                            <div className="flex -space-x-2 mb-4">
                                                {[1, 2, 3, 4].map(id => (
                                                    <div key={id} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                                                        <img src={`https://i.pravatar.cc/100?u=${id}`} alt="Avatar" className="w-full h-full object-cover grayscale" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Active Now</div>
                                            <div className="text-xs font-bold text-black italic">4 team members optimizing workflow...</div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Background Elements */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-10 py-32 px-4 bg-white border-y border-black/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <div className="w-12 h-1 bg-black mb-6" />
                        <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tighter mb-6">
                            Measurable impact. <br className="hidden sm:block" />
                            <span className="text-gray-300">No guesswork.</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {solution.benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group bg-[#fafafa] rounded-3xl p-8 border border-black/5 hover:border-black/20 transition-all duration-500"
                            >
                                <div className="text-2xl font-bold text-black mb-4 flex items-baseline">
                                    <span className="text-gray-300 mr-2 text-sm font-mono">0{index + 1}</span>
                                    {benefit.title}
                                </div>
                                <p className="text-gray-500 text-lg leading-relaxed font-light">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {solution.seoContent && (
                <section className="relative z-10 py-24 px-4 bg-white border-y border-black/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                            {solution.seoContent.split('\n\n').map((p, i) => (
                                <p key={i} className="mb-6">{p}</p>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="relative z-10 py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <h2 className="text-4xl sm:text-6xl font-bold text-black mb-8 tracking-tighter">
                            Powerful features built for your team.
                        </h2>
                        <p className="text-xl text-gray-500 font-light leading-relaxed">
                            Everything you need to supercharge your productivity and maintain clarity across your entire organization.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {solution.features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl border border-black/5 p-10 hover:border-black/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-gray-50 border border-black/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-500">
                                    <span className="text-3xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed font-light">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {solution.testimonial && (
                <section className="relative z-10 py-32 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white border border-black/5 rounded-[3rem] p-12 sm:p-20 text-center shadow-2xl shadow-black/5 relative overflow-hidden">
                            <div className="mb-12 flex justify-center">
                                <div className="flex gap-1 text-black">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-black" />)}
                                </div>
                            </div>
                            <blockquote className="text-2xl sm:text-4xl text-black font-bold leading-tight mb-12 tracking-tight">
                                &quot;{solution.testimonial.quote}&quot;
                            </blockquote>
                            <div className="h-px w-20 bg-black/10 mx-auto mb-8" />
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
                                Verified Customer Success
                            </p>
                        </div>
                    </div>
                </section>
            )}

            <section className="relative z-10 py-32 px-4 bg-[#fafafa]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div>
                            <h2 className="text-4xl font-bold text-black tracking-tighter mb-4">
                                Explore other solutions.
                            </h2>
                            <p className="text-xl text-gray-500 font-light">
                                Tailored workflows for every vertical in your organization.
                            </p>
                        </div>
                        <Link
                            href="/solutions"
                            className="inline-flex items-center gap-3 text-black font-bold text-lg border-b-2 border-black pb-1 hover:text-gray-500 hover:border-black/20 transition-all font-mono"
                        >
                            <span>View all solutions</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {otherSolutions.map((otherSolution) => (
                            <Link
                                key={otherSolution.slug}
                                href={`/solutions/${otherSolution.slug}`}
                                className="group bg-white rounded-3xl border border-black/5 p-10 hover:border-black/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-500">{otherSolution.icon}</span>
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                                        <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">
                                    {otherSolution.title.replace("Space Lean for ", "")}
                                </h3>
                                <p className="text-gray-500 text-lg font-light leading-relaxed">
                                    {otherSolution.tagline}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative z-10 py-32 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-5xl sm:text-7xl font-bold text-black mb-10 tracking-tighter leading-tight">
                        Ready to transform your <br />
                        <span className="text-gray-300">{solution.title.replace("Space Lean for ", "")}?</span>
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                        Join thousands of teams who have already made the switch. Start your
                        free trial today and see the difference SpaceLean can make.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/request-a-demo"
                            className="inline-flex items-center justify-center gap-3 bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-black/20"
                        >
                            <span>{solution.cta.primary}</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/request-a-demo"
                            className="inline-flex items-center justify-center gap-2 border border-black/10 text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-black/5 transition-all"
                        >
                            <span>Talk to Sales</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
