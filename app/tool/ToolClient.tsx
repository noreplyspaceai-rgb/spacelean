'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Loader2, CheckCircle2, Terminal, Play, Zap } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const exampleTasks = [
    "Strategic Market Research & Competitor Benchmarking",
    "Technical Architecture Design & Database Schema",
    "Interactive Prototype & High-Fidelity UI/UX Design",
    "Core API Development & Integration Layer",
    "Automated Testing Suite (Unit, Integration, E2E)",
    "Cross-Browser Optimization & Performance Tuning",
    "Secure Infrastructure Setup & CI/CD Deployment",
    "Pre-launch Marketing Assets & Documentation"
];

const hintText = "Build a modern AI-powered CRM for growing sales teams...";

export default function ToolClient() {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<null | { title: string; tasks: string[] }>(null);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (!hintText) return;
        let i = 0;
        const interval = setInterval(() => {
            setInput(hintText.slice(0, i));
            i++;
            if (i > hintText.length) {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 30);
        return () => {
            clearInterval(interval);
            setIsTyping(false);
        };
    }, []);

    const handleGenerate = async () => {
        if (!input.trim() || isTyping) return;
        setIsLoading(true);
        setResult(null);

        // Simulate AI thinking with slight delay
        setTimeout(() => {
            setResult({
                title: input.length > 50 ? input.substring(0, 50) + "..." : input,
                tasks: exampleTasks
            });
            setIsLoading(false);
        }, 1800);
    };

    return (
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-white mb-10 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-black" />
                        <span className="text-[11px] font-bold tracking-[0.3em] uppercase opacity-40">Intelligence v4.2</span>
                    </div>

                    <h1 className="text-xl sm:text-8xl lg:text-xl font-black mb-10 tracking-tighter text-primary-text leading-[0.9]">
                        Generate <br />
                        <span className="text-black/10 italic">Execution Maps.</span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                        The ultimate **AI task generator** for modern teams. Break down any project description into a
                        surgical **work breakdown structure** in seconds. No friction. All power.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-4xl mx-auto bg-white border border-black/5 p-3 rounded-[3rem] shadow-2xl shadow-black/[0.03] mb-24 relative"
            >
                <div className="absolute top-8 left-10 flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                </div>

                <textarea
                    value={input}
                    onChange={(e) => {
                        if (!isTyping) setInput(e.target.value);
                    }}
                    readOnly={isTyping}
                    placeholder="Describe your project vision..."
                    className="w-full h-56 p-12 pt-16 bg-transparent text-2xl text-primary-text placeholder:text-black/5 border-none focus:ring-0 resize-none outline-none rounded-[2.5rem] font-light tracking-tight leading-[1.4]"
                />

                <div className="absolute bottom-10 right-10 flex items-center gap-6">
                    {isTyping && (
                        <span className="text-[10px] font-bold text-black/20 uppercase tracking-[0.2em] animate-pulse font-mono">
                            AI Context Analysis...
                        </span>
                    )}
                    <button
                        onClick={handleGenerate}
                        disabled={isLoading || !input.trim() || isTyping}
                        className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-5 disabled:cursor-not-allowed shadow-2xl shadow-black/20 group"
                    >
                        {isLoading ? (
                            <Loader2 className="w-6 h-6 animate-spin" />
                        ) : (
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                        )}
                    </button>
                </div>
            </motion.div>

            {/* Results with Butter-Smooth Transitions */}
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-32 gap-6"
                    >
                        <div className="flex gap-2">
                            {[0, 0.1, 0.2].map((delay, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.1, 1, 0.1]
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        delay
                                    }}
                                    className="w-2.5 h-2.5 rounded-full bg-black"
                                />
                            ))}
                        </div>
                        <span className="text-[11px] font-bold text-black/30 uppercase tracking-[0.4em] font-mono">Orchestrating Logic</span>
                    </motion.div>
                )}

                {result && !isLoading && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="bg-white border border-black/5 rounded-[4rem] p-12 lg:p-24 shadow-2xl shadow-black/[0.02] relative"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
                            <div className="max-w-xl">
                                <span className="text-[11px] font-bold text-black/30 uppercase tracking-[0.3em] block mb-6 font-mono">Plan Hash: 0x82...f92</span>
                                <h2 className="text-4xl lg:text-5xl font-black text-primary-text tracking-tighter leading-none italic">
                                    {result.title}
                                </h2>
                            </div>
                            <button className="shrink-0 flex items-center gap-3 px-8 py-4 bg-[#FAFAFA] border border-black/5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500">
                                <Terminal className="w-4 h-4" />
                                Copy Schema
                            </button>
                        </div>

                        <div className="grid gap-px bg-black/5 border border-black/5 rounded-[2.5rem] overflow-hidden">
                            {result.tasks.map((task, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.08), duration: 0.5 }}
                                    className="flex items-start gap-8 p-8 lg:p-10 bg-white hover:bg-gray-50/50 transition-colors duration-500 group"
                                >
                                    <span className="shrink-0 text-[10px] font-black font-mono text-black/10 group-hover:text-black transition-colors pt-2">
                                        0{i + 1}
                                    </span>
                                    <span className="text-gray-600 text-xl lg:text-2xl font-light tracking-tight leading-relaxed group-hover:text-black transition-colors">
                                        {task}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-24 text-center">
                            <Link
                                href="/request-a-demo"
                                className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-black/30 group"
                            >
                                Deploy with SpaceLean
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
