"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Terminal, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const exampleTasks = [
    "Identify target demographics and user personas",
    "Design landing page wireframes with high-fidelity mockups",
    "Develop responsive front-end using Next.js and Tailwind",
    "Implement secure user authentication and profile management",
    "Set up automated CI/CD pipeline for seamless deployment",
];

export default function ToolsSection() {
    const [isGenerating, setIsGenerating] = useState(false);
    const [currentTasks, setCurrentTasks] = useState<string[]>([]);
    const [displayText, setDisplayText] = useState("");
    const fullText = "Launch a modern AI-powered SaaS platform for remote teams...";

    const handleGenerate = () => {
        if (isGenerating) return;
        setIsGenerating(true);
        setCurrentTasks([]);
        setDisplayText("");

        // Simulate typing text
        let i = 0;
        const typingInterval = setInterval(() => {
            setDisplayText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(typingInterval);

                // Start generating tasks one by one
                setTimeout(() => {
                    let taskIdx = 0;
                    const taskInterval = setInterval(() => {
                        setCurrentTasks(prev => [...prev, exampleTasks[taskIdx]]);
                        taskIdx++;
                        if (taskIdx === exampleTasks.length) {
                            clearInterval(taskInterval);
                            setIsGenerating(false);
                        }
                    }, 600);
                }, 500);
            }
        }, 30);
    };

    return (
        <section className="py-32 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative border border-black/5 bg-white p-8 md:p-24 overflow-hidden shadow-2xl shadow-black/5 rounded-[3rem]">
                    {/* Subtle Decorative Gradient */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-gray-50/50 to-blue-50/20 pointer-events-none" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8 rounded-full">
                                <Sparkles className="w-3 h-3" />
                                Featured Tool
                            </div>
                            <h2 className="text-5xl sm:text-6xl font-bold text-black mb-8 tracking-tighter leading-[1.1]">
                                AI Task <br />
                                <span className="text-gray-300">Breakdown.</span>
                            </h2>
                            <p className="text-gray-500 text-xl mb-12 leading-relaxed font-light max-w-md">
                                Stuck in the planning phase? Describe your project in plain English, and watch our AI build a comprehensive, step-by-step execution plan in seconds.
                            </p>

                            <Link
                                href="/tool"
                                className="group inline-flex items-center gap-4 px-8 py-4 bg-black text-white text-lg font-bold rounded-full hover:scale-105 transition-all shadow-xl shadow-black/10"
                            >
                                Go to Generator
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>

                        {/* Realistic Interactive Demo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="bg-white border border-black/10 rounded-[2rem] p-8 shadow-2xl shadow-black/5 min-h-[450px] flex flex-col relative overflow-hidden group">
                                {/* Dashboard-like Header */}
                                <div className="flex items-center justify-between mb-8 border-b border-black/5 pb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-400/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20 border border-yellow-400/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-400/20 border border-green-400/40" />
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-2">Project Terminal v1.0</span>
                                    </div>
                                    <Terminal className="w-4 h-4 text-gray-300" />
                                </div>

                                {/* Input Area */}
                                <div className="mb-8">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gray-50 rounded-2xl -z-10 opacity-50" />
                                        <div
                                            className="w-full p-6 text-sm text-gray-700 bg-transparent border-none focus:ring-0 min-h-[80px] font-medium leading-relaxed"
                                        >
                                            {displayText || <span className="text-gray-400">What are you working on?</span>}
                                            {isGenerating && displayText.length < fullText.length && (
                                                <span className="inline-block w-1.5 h-4 bg-black/40 ml-1 animate-pulse align-middle" />
                                            )}
                                        </div>
                                    </div>

                                    {!isGenerating && displayText === "" && (
                                        <button
                                            onClick={handleGenerate}
                                            className="mt-4 flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest group/btn"
                                        >
                                            <Play className="w-3 h-3 fill-current group-hover/btn:scale-110 transition-transform" />
                                            Click to Demo
                                        </button>
                                    )}
                                </div>

                                {/* Task Generator Results */}
                                <div className="flex-1 space-y-3">
                                    <AnimatePresence>
                                        {currentTasks.map((task, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                                className="flex items-center gap-4 p-4 bg-gray-50/50 border border-black/[0.03] rounded-xl group/item cursor-default hover:bg-white hover:shadow-sm hover:border-black/10 transition-all"
                                            >
                                                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                                                <span className="text-sm font-medium text-gray-800">{task}</span>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>

                                    {isGenerating && currentTasks.length === 0 && displayText.length === fullText.length && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex flex-col items-center justify-center h-32 gap-3"
                                        >
                                            <div className="flex gap-1">
                                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 rounded-full bg-black/20" />
                                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-black/20" />
                                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-black/20" />
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Processing request...</span>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Bottom Badge */}
                                <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between text-gray-400">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" className="w-full h-full object-cover grayscale" />
                                            </div>
                                        ))}
                                        <div className="w-6 h-6 rounded-full border-2 border-white bg-black flex items-center justify-center text-[8px] font-bold text-white tracking-tighter">
                                            +50k
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest italic">SpaceLean AI Engine v4.2</span>
                                </div>
                            </div>

                            {/* Decorative Floating Element */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 p-6 bg-white border border-black/10 rounded-2xl shadow-xl z-20 hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-lg shadow-black/20">
                                        <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Success</div>
                                        <div className="text-sm font-bold text-black">Project Optimized</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
