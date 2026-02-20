'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        content: "SpaceLean stripped away the noise. We just drag, drop, and done. It’s the cleanest tool we’ve ever used. The AI suggestions are actually useful, not just a gimmick.",
        author: "Sarah Jenkins",
        role: "Product Manager, TechFlow",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
        content: "The AI doesn't guess; it knows. Our scheduling accuracy improved by 40% in the first week. It feels like having a dedicated project manager for every single team member.",
        author: "Michael Chen",
        role: "CTO, StartupX",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
    },
    {
        content: "Finally, a project management tool that respects my time. No clutter, just clarity. I spend less time managing tickets and more time actually building the product.",
        author: "Emily Rodriguez",
        role: "Marketing Lead",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 lg:py-32 bg-[#FAFAFA] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-black/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-black/40 mb-6 font-mono">
                        Wall of Love
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary-text tracking-tighter mb-8 leading-tight">
                        Trusted by builders <br />
                        <span className="text-black/20">worldwide.</span>
                    </h2>
                    <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                        Don't just take our word for it. Hear from the teams who have
                        transformed their workflow with SpaceLean.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                            className="bg-white border border-black/5 rounded-[3rem] p-10 lg:p-20 shadow-2xl shadow-black/[0.02] relative"
                        >
                            <Quote className="absolute top-10 right-10 w-20 h-20 text-black/[0.03] rotate-180" />

                            <div className="relative z-10">
                                <p className="text-2xl lg:text-4xl font-light text-gray-800 italic leading-relaxed mb-12 tracking-tight">
                                    "{testimonials[currentIndex].content}"
                                </p>

                                <div className="flex items-center gap-6">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-black/5">
                                        <Image
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-primary-text uppercase tracking-wider">
                                            {testimonials[currentIndex].author}
                                        </h4>
                                        <p className="text-sm text-gray-400 font-mono tracking-tight">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-12 gap-8 px-6">
                        <div className="flex gap-3 order-2 sm:order-1">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-12 bg-black' : 'w-4 bg-black/10 hover:bg-black/30'
                                        }`}
                                />
                            ))}
                        </div>

                        <div className="flex gap-4 order-1 sm:order-2">
                            <button
                                onClick={prev}
                                className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group/btn"
                            >
                                <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-0.5 transition-transform" />
                            </button>
                            <button
                                onClick={next}
                                className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group/btn"
                            >
                                <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

