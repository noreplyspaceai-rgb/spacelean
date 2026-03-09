"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Zap, CheckCircle2 } from 'lucide-react';

const features = [
    {
        title: "AI Task Decomposition",
        description: "Our core AI engine takes a single project description and breaks it down into actionable, high-priority tasks in seconds. It uses advanced natural language processing to understand context and intent.",
        icon: <Sparkles className="w-8 h-8" />,
        bullets: ["Natural Language Processing", "Context-Aware Breakdown", "Auto-Priority Tagging", "Estimated Time Allocation"]
    },
    {
        title: "Real-time Collaboration",
        description: "Built for teams that move fast. Update tasks, share feedback, and sync with your team members in real-time. Experience a seamless flow of information without the clutter of endless emails.",
        icon: <Users className="w-8 h-8" />,
        bullets: ["Live Task Updates", "Inline Comments", "Activity Feed", "Team Mentions"]
    },
    {
        title: "Intelligent Automation",
        description: "Automate the repetitive so you can focus on the creative. Set up custom triggers and actions with our no-code automation builder to streamline your repetitive workflows and save hours every week.",
        icon: <Zap className="w-8 h-8" />,
        bullets: ["No-Code Builder", "Custom Triggers", "Workflow Templates", "Third-Party Integrations"]
    }
];

const images = [
    '/design.jpg',
    '/engineering.jpg',
    '/marketing.jpg',
    '/productmanagement.jpg',
    '/remote.jpg',
    '/startups.jpg'
];

export default function FeaturesClient() {
    const selectedImages = React.useMemo(() => {
        // simple shuffle and pick first N unique images
        const arr = images.slice();
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.slice(0, features.length);
    }, []);
    return (
        <>
            {/* Features Hero Section */}
            <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-black/[0.02] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.4em] text-black/40 mb-8 font-sans">
                            The Platform
                        </span>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-10 leading-[0.9] text-primary-text">
                            The future of <br />
                            <span className="text-black/10 italic">intelligent work.</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl">
                            Experience the most advanced <strong>AI productivity</strong> suite designed for high-performance teams.
                            From <strong>automated task decomposition</strong> to <strong>real-time collaboration</strong>, SpaceLean is built
                            to scale with your ambitions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="py-24 border-t border-black/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid gap-24 lg:gap-32">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl mb-10 shadow-2xl shadow-black/10">
                                        {feature.icon}
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-primary-text mb-8 italic">
                                        {feature.title}
                                    </h2>
                                    <p className="text-xl text-gray-500 font-light leading-relaxed mb-10">
                                        {feature.description}
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {feature.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-black/60 capitalize tracking-tight">
                                                <CheckCircle2 className="w-4 h-4 text-black" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-1 w-full aspect-square lg:aspect-video bg-black/5 rounded-[3rem] border border-black/5 relative overflow-hidden group shadow-2xl shadow-black/[0.02]">
                                    <img
                                        src={selectedImages[index]}
                                        alt={`${feature.title} preview`}
                                        className="absolute inset-0 w-full h-full object-cover rounded-[3rem]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 lg:py-32 bg-black text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter mb-10">
                        Transform your <br />
                        <span className="text-white/40 italic">workflow today.</span>
                    </h2>
                    <p className="text-xl text-white/60 font-light mb-12 max-w-2xl mx-auto">
                        Join thousands of teams who are already building faster and smarter with
                        the power of SpaceLean AI productivity.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform">
                            Get Started for Free
                        </button>
                        <button className="px-10 py-5 border border-white/20 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ Section (visible) */}
            <section className="py-16 border-t border-black/5 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h3 className="text-3xl font-extrabold mb-6">People Also Ask — Lean Project Management</h3>
                    <div className="space-y-6">
                        {[
                            {
                                q: 'How do I implement lean project management?',
                                a: 'Start by identifying customer value, map value streams to remove waste, introduce flow and pull (Kanban), limit WIP, and iterate with retrospectives and metrics.'
                            },
                            {
                                q: 'What tools support lean project management?',
                                a: 'Visual Kanban boards, lightweight analytics for cycle time and throughput, and automation for repetitive tasks are core tools.'
                            },
                            {
                                q: 'How do I measure success with lean methods?',
                                a: 'Monitor lead/cycle time, throughput, WIP, and customer satisfaction; use trends to guide improvements.'
                            },
                            {
                                q: 'What are common pitfalls when adopting lean?',
                                a: 'Focusing only on tools, ignoring team culture, and not enforcing WIP limits are common pitfalls.'
                            },
                            {
                                q: 'Can lean work with agile and remote teams?',
                                a: 'Yes — combine lean flow principles with agile iterations; for remote work, use visual boards and short feedback loops.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-lg">
                                <p className="font-semibold mb-2">{item.q}</p>
                                <p className="text-sm text-gray-700">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

