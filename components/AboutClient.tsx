"use client";

import { motion } from "framer-motion";
import {
    Building2,
    Target,
    Lightbulb,
    TrendingUp,
    ArrowRight,
    Cpu,
    Layers,
    Globe,
    Clock,
    CheckCircle2,
    BarChart3,
    Users
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
            description: "Building the backbone of AI-powered construction planning with a focus on speed and reliability — turning CAD files into structured plans in minutes.",
            image: "/engineering.jpg"
        },
        {
            role: "Product",
            title: "Design & UX",
            description: "Obsessed with creating an interface that disappears, leaving only your productivity. Planning tools should feel effortless.",
            image: "/productmanagement.jpg"
        },
        {
            role: "Strategy",
            title: "Customer Success",
            description: "Dedicated to helping construction companies, architects, and developers achieve faster, smarter project delivery with less manual effort.",
            image: "/startups.jpg"
        }
    ];

    const whoWeServe = [
        {
            icon: <Building2 className="w-6 h-6" />,
            title: "Construction Companies",
            description: "Plan projects faster and reduce risks before work begins."
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Architects & Consultants",
            description: "Provide clients with realistic timelines and budgets directly from your drawings."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Developers & Builders",
            description: "Evaluate feasibility and optimize resources before committing capital."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Infrastructure & Government",
            description: "Improve transparency and planning accuracy at scale."
        }
    ];

    const whatMakesDifferent = [
        {
            icon: <Clock className="w-5 h-5" />,
            point: "Reduce planning time from weeks to minutes"
        },
        {
            icon: <CheckCircle2 className="w-5 h-5" />,
            point: "Increase accuracy in quantity and cost estimation"
        },
        {
            icon: <Users className="w-5 h-5" />,
            point: "Improve coordination between all stakeholders"
        },
        {
            icon: <BarChart3 className="w-5 h-5" />,
            point: "Enable smarter decision-making before construction begins"
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
                            <Building2 className="w-4 h-4 text-black" />
                            <span className="text-xs font-bold tracking-widest uppercase">Our Mission</span>
                        </span>
                        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-gray-900 tracking-tighter mb-8 leading-[0.9]">
                            Built for <br />
                            <span className="text-gray-300">Execution.</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
                            Space Lean is on a mission to eliminate the gap between architectural drawings and real-world project planning — turning CAD files into structured tasks, schedules, and cost calculations automatically.
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

            {/* Vision Section */}
            <section className="py-32 bg-[#fafafa]">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 block">Our Vision</span>
                            <h2 className="text-4xl sm:text-6xl font-bold text-black tracking-tighter mb-8 leading-[0.95]">
                                The World's Most Intelligent <span className="text-gray-300">Planning Engine.</span>
                            </h2>
                            <p className="text-xl text-gray-500 font-light leading-relaxed">
                                We envision a future where every design can instantly become an executable project plan — where construction delays are minimized, budget overruns are reduced, and teams collaborate on a single source of truth.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            {whatMakesDifferent.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-black/5 shadow-sm"
                                >
                                    <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-700 font-medium">{item.point}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-32 bg-white">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="mb-24">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 block">What Makes Us Different</span>
                        <h2 className="text-4xl sm:text-6xl font-bold text-black tracking-tighter mb-8">
                            From Design <br />
                            <span className="text-gray-300">to Execution. Automatically.</span>
                        </h2>
                        <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
                            Unlike traditional project management tools that require manual task creation, Space Lean understands your drawings and generates the plan for you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: "📐", title: "Identify Components", description: "Automatically recognizes structural and architectural components from uploaded CAD or BIM files." },
                            { icon: "📋", title: "Generate Task Breakdowns", description: "Produces detailed work breakdown structures without any manual input from your team." },
                            { icon: "📦", title: "Calculate Material Quantities", description: "Computes exact quantities needed for every phase of the project directly from drawings." },
                            { icon: "💰", title: "Estimate Costs", description: "Generates accurate cost estimates based on extracted data and real-world pricing models." },
                            { icon: "📅", title: "Create Schedules", description: "Builds fully linked project schedules with task dependencies automatically established." },
                            { icon: "🔗", title: "Connect Design to Reality", description: "Bridges the gap between design intent and execution reality — the missing link in construction." }
                        ].map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-[#fafafa] p-10 rounded-3xl border border-black/5 hover:shadow-xl hover:bg-white transition-all duration-500 group"
                            >
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 border border-black/5 group-hover:bg-black group-hover:text-white transition-colors shadow-sm">
                                    <span className="text-2xl">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-black mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-gray-500 font-light leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 bg-[#fafafa]">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="mb-24">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 block">Our Principles</span>
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

            {/* Who We Serve */}
            <section className="py-32 bg-white">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="mb-24">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 block">Who We Serve</span>
                        <h2 className="text-4xl sm:text-6xl font-bold text-black tracking-tighter">
                            Built for the Entire <br />
                            <span className="text-gray-300">Construction Ecosystem.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {whoWeServe.map((segment, idx) => (
                            <motion.div
                                key={segment.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-8 p-10 rounded-3xl border border-black/5 hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-black/5 group-hover:bg-black group-hover:text-white transition-colors">
                                    {segment.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-3 tracking-tight">{segment.title}</h3>
                                    <p className="text-gray-500 font-light leading-relaxed">{segment.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-32 bg-black text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] border border-white/5 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6 block">Our Approach</span>
                            <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-8 leading-[0.95]">
                                Why We Built <br />
                                <span className="text-white/30">Space Lean.</span>
                            </h2>
                            <p className="text-xl text-white/60 font-light leading-relaxed mb-8">
                                We saw a critical inefficiency in the industry: design tools create drawings, project tools manage tasks — but nothing connects the two automatically.
                            </p>
                            <p className="text-xl text-white/60 font-light leading-relaxed">
                                Space Lean was created to be that missing link — the intelligent layer between design and execution.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            {[
                                { icon: <Cpu className="w-5 h-5" />, title: "Artificial Intelligence", desc: "Deep learning models trained to understand construction drawings and project logic." },
                                { icon: <Building2 className="w-5 h-5" />, title: "Construction Domain Knowledge", desc: "Built by people who understand the industry — not just the technology." },
                                { icon: <BarChart3 className="w-5 h-5" />, title: "Data-Driven Planning Models", desc: "A system that learns from real projects and continuously improves accuracy." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-5 p-6 border border-white/10 rounded-2xl hover:border-white/30 transition-colors">
                                    <div className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-white/70">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="font-bold text-white mb-1">{item.title}</div>
                                        <div className="text-white/50 text-sm font-light">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Highlights */}
            <section className="py-32 bg-white">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="mb-24">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 block">Our Team</span>
                        <h2 className="text-4xl sm:text-6xl font-bold text-black tracking-tighter">
                            The People <br />
                            <span className="text-gray-300">Behind the Platform.</span>
                        </h2>
                    </div>
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

            {/* Future Section */}
            <section className="py-32 bg-[#fafafa]">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 block">The Future We're Building</span>
                            <h2 className="text-4xl sm:text-6xl font-bold text-black tracking-tighter leading-[0.95]">
                                Planning <br />
                                <span className="text-gray-300">Intelligence.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8 pt-2"
                        >
                            <p className="text-xl text-gray-500 font-light leading-relaxed">
                                Space Lean is evolving into a complete planning intelligence platform. We're not just building a tool — we are building the future of project planning.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Predict risks before they occur",
                                    "Optimize schedules automatically",
                                    "Recommend cost-saving alternatives",
                                    "Enable fully data-driven construction planning"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                                        <span className="text-gray-600 font-light">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
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
                        Ready to move from <br />
                        <span className="text-gray-500">blueprint to execution?</span>
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