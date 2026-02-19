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
        let i = 0;
        const interval = setInterval(() => {
            setInput(hintText.slice(0, i));
            i++;
            if (i > hintText.length) {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 40);
        return () => clearInterval(interval);
    }, []);

    const handleGenerate = async () => {
        if (!input.trim() || isTyping) return;
        setIsLoading(true);
        setResult(null);

        // Simulate AI "thinking" with staggered tasks
        setTimeout(() => {
            setResult({
                title: input.length > 40 ? input.substring(0, 40) + "..." : input,
                tasks: exampleTasks
            });
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white border border-black/10 p-2 rounded-[2.5rem] shadow-2xl shadow-black/5 mb-16 group"
            >
                <div className="relative">
                    <div className="absolute top-4 left-6 flex gap-1.5 opacity-20">
                        <div className="w-2 h-2 rounded-full bg-black" />
                        <div className="w-2 h-2 rounded-full bg-black" />
                        <div className="w-2 h-2 rounded-full bg-black" />
                    </div>

                    <textarea
                        value={input}
                        onChange={(e) => {
                            if (!isTyping) setInput(e.target.value);
                        }}
                        readOnly={isTyping}
                        placeholder="Describe your project..."
                        className="w-full h-48 p-10 pt-14 bg-transparent text-xl text-black placeholder:text-gray-200 border-none focus:ring-0 resize-none outline-none rounded-2xl font-light tracking-tight leading-relaxed"
                    />

                    <div className="absolute bottom-6 right-6 flex items-center gap-4">
                        {isTyping && (
                            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest animate-pulse">
                                AI is suggesting...
                            </span>
                        )}
                        <button
                            onClick={handleGenerate}
                            disabled={isLoading || !input.trim() || isTyping}
                            className="bg-black text-white p-4 rounded-full font-bold flex items-center justify-center hover:scale-110 transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-xl shadow-black/20 group/btn"
                        >
                            {isLoading ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <Zap className="w-6 h-6 fill-current group-hover/btn:text-yellow-400 transition-colors" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Results */}
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-20 gap-4"
                    >
                        <div className="flex gap-1.5">
                            {[0, 0.2, 0.4].map((delay, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -8, 0],
                                        opacity: [0.3, 1, 0.3]
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay
                                    }}
                                    className="w-2 h-2 rounded-full bg-black"
                                />
                            ))}
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">Breaking down requirements</span>
                    </motion.div>
                )}

                {result && !isLoading && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white border border-black/10 rounded-[3rem] p-12 shadow-2xl shadow-black/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                            <Sparkles className="w-32 h-32 text-black" />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                            <div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Generated Plan</span>
                                <h2 className="text-3xl font-black text-black tracking-tighter leading-tight">
                                    {result.title}
                                </h2>
                            </div>
                            <button className="shrink-0 flex items-center gap-2 px-6 py-3 bg-gray-50 border border-black/5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                                <Terminal className="w-4 h-4" />
                                Export Specs
                            </button>
                        </div>

                        <div className="grid md:grid-cols-1 gap-4">
                            {result.tasks.map((task, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-6 p-6 hover:bg-gray-50/80 rounded-2xl transition-all border border-transparent hover:border-black/5 group cursor-default"
                                >
                                    <div className="shrink-0 mt-1">
                                        <CheckCircle2 className="w-5 h-5 text-black opacity-20 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="text-gray-800 text-lg font-light tracking-tight">{task}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16 pt-10 border-t border-black/5 text-center">
                            <p className="text-gray-400 text-sm mb-8 font-light italic">
                                This plan has been optimized by our v4.2 AI Engine for maximum execution speed.
                            </p>
                            <Link
                                href="/request-a-demo"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white rounded-full font-bold hover:scale-105 transition-all shadow-2xl shadow-black/20 group"
                            >
                                Build this with our Team
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
