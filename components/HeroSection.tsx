"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import VideoModal from "./VideoModal";

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] pt-32 pb-20">
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual product demo video
      />

      {/* Abstract Minimalist Background Shapes (Subtle) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-[60vw] h-[60vw] border border-black/5 rounded-full translate-x-1/3 -translate-y-1/3"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-[50vw] h-[50vw] border border-black/5 rounded-full -translate-x-1/3 translate-y-1/3"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-black/10 bg-white mb-10 shadow-sm hover:shadow-md transition-shadow cursor-default"
        >
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          <span className="text-sm font-semibold tracking-wide text-gray-800 uppercase">AI Task Management V2.0</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl sm:text-7xl lg:text-9xl font-bold tracking-tighter text-black mb-10 leading-[1.05]"
        >
          Orchestrate <br />
          <span className="text-gray-300">Your Chaos.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-500 mb-16 leading-relaxed font-light"
        >
          SpaceLean is the <strong>AI task breakdown tool</strong> and <strong>automatic project scheduler</strong> designed for high-velocity teams.
          Effortlessly <strong>turn notes into tasks with AI</strong>, automate workflows, and ship faster.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24"
        >
          <Link
            href="https://cad.spaceaiapp.com/lean"
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-black text-white text-lg font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-xl hover:shadow-2xl shadow-black/20"
          >
            <span className="relative z-10">Start Free Trial</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
          </Link>

          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="group inline-flex items-center gap-4 px-8 py-5 text-black text-lg font-semibold hover:text-gray-600 transition-colors"
          >
            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-white shadow-sm group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 ml-1 fill-black" />
            </div>
            See How It Works
          </button>
        </motion.div>

        {/* UI Preview (Abstract/Minimal) */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full max-w-6xl rounded-t-3xl border-t border-x border-black/10 bg-white shadow-2xl shadow-black/5 p-2 pb-0 overflow-hidden"
        >
          <div className="relative rounded-t-2xl overflow-hidden aspect-[16/9] bg-gray-50">
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent z-10" />
            {/* Actual Dashboard Image (Minimalist) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop"
              alt="SpaceLean Dashboard Interface"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
