"use client";

import { motion } from "framer-motion";
import {
    Users,
    Target,
    Lightbulb,
    TrendingUp,
    ArrowRight,
    ShieldCheck,
    Zap,
    Star
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface AboutClientProps {
    values: {
        title: string;
        description: string;
        icon: string;
    }[];
    stats: {
        number: string;
        label: string;
    }[];
}

export default function AboutClient({ values, stats }: AboutClientProps) {
    const teamHighlights = [
        {
            role: "Engineering",
            title: "Core Infrastructure",
            description: "Building the backbone of AI-powered task management with a focus on speed and reliability.",
            image: "/engineering.jpg"
        },
        {
            role: "Product",
            title: "Design & UX",
            description: "Obsessed with creating an interface that disappears, leaving only your productivity.",
            image: "/productmanagement.jpg"
        },
        {
            role: "Strategy",
            title: "Customer Success",
            description: "Dedicated to helping teams of all sizes achieve high-velocity output with less stress.",
            image: "/startups.jpg"
        }
    ];

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] border border-black/5 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] border border-black/5 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />

                <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white shadow-sm mb-8">
                            <Users className="w-4 h-4 text-black" />
                            <span className="text-xs font-bold tracking-widest uppercase">Our Mission</span>
                        </span>
                        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-gray-900 tracking-tighter mb-8 leading-[0.9]">
                            Built for <br />
                            <span className="text-gray-300">Velocity.</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                            SpaceLean is on a mission to solve the modern productivity crisis by combining AI intelligence with uncompromising minimalist design.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-32 bg-white relative z-10">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 sm:gap-20">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-5xl sm:text-7xl font-bold text-black tracking-tighter mb-4">
                                    {stat.number}
                                </div>
                                <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 bg-[#fafafa]">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="mb-24">
                        <h2 className="text-4xl sm:text-6xl font-bold text-black tracking-tighter mb-8">
                            Principles <br />
                            <span className="text-gray-300">of Operation.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, idx) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 border border-black/5 group-hover:bg-black group-hover:text-white transition-colors">
                                    <span className="text-2xl">{value.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-black mb-4 tracking-tight">{value.title}</h3>
                                <p className="text-gray-500 font-light leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Highlights */}
            <section className="py-32 bg-white">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="space-y-32">
                        {teamHighlights.map((highlight, idx) => (
                            <div
                                key={highlight.title}
                                className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 lg:gap-24`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="flex-1"
                                >
                                    <div className="aspect-[4/3] relative rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl shadow-black/5">
                                        <Image
                                            src={highlight.image}
                                            alt={highlight.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 1 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="flex-1"
                                >
                                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 block">
                                        {highlight.role}
                                    </span>
                                    <h3 className="text-4xl sm:text-5xl font-bold text-black tracking-tighter mb-8 leading-tight">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-xl text-gray-500 font-light leading-relaxed">
                                        {highlight.description}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-40 bg-black text-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-white/5 rounded-full pointer-events-none" />

                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl sm:text-7xl font-bold tracking-tighter mb-12"
                    >
                        Ready to experience <br />
                        <span className="text-gray-500">the future of work?</span>
                    </motion.h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <Link
                            href="https://cad.spaceaiapp.com/lean"
                            className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:scale-105 transition-all shadow-xl shadow-white/10"
                        >
                            Start Free Trial
                        </Link>
                        <Link
                            href="/request-a-demo"
                            className="inline-flex items-center gap-4 text-lg font-medium hover:text-gray-400 transition-colors group"
                        >
                            Book a session
                            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
