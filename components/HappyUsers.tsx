'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const userAvatars = [
    { id: 1, src: '/design.jpg' },
    { id: 2, src: '/engineering.jpg' },
    { id: 3, src: '/marketing.jpg' },
    { id: 4, src: '/productmanagement.jpg' },
    { id: 5, src: '/startups.jpg' },
];

export default function HappyUsers() {
    return (
        <section className="py-24 bg-white border-y border-black/5 relative overflow-hidden">
            {/* Subtle background grain or accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-black/5" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                    {/* SEO Content & Heading */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary-text tracking-tighter mb-8 leading-tight">
                                Join 500k+ builders <br />
                                <span className="text-black/20">mastering their craft.</span>
                            </h2>
                            <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                SpaceLean is the industry standard for **AI productivity** and **agile task management**.
                                We help high-performance teams streamline **team collaboration** and automate
                                complex workflows with surgical precision.
                                <span> Built for developers, designers, and visionaries.</span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Visual Proof */}
                    <div className="shrink-0">
                        <div className="flex flex-col items-center lg:items-end gap-8">
                            <div className="flex -space-x-4">
                                {userAvatars.map((avatar, i) => (
                                    <motion.div
                                        key={avatar.id}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="w-16 h-16 rounded-full border-4 border-white shadow-2xl shadow-black/5 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                                    >
                                        <Image
                                            src={avatar.src}
                                            alt="User Avatar"
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="w-16 h-16 rounded-full border-4 border-white bg-black text-white flex items-center justify-center text-xs font-bold shadow-2xl shadow-black/20 z-10"
                                >
                                    +500K
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-col items-center lg:items-end"
                            >
                                <div className="flex gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                                    Top-rated on Product Hunt
                                </span>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

