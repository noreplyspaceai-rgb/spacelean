"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, ExternalLink } from "lucide-react";

interface AIPlatform {
  name: string;
  buildUrl: (prompt: string) => string;
  logo: React.ReactNode;
}

const PLATFORMS: AIPlatform[] = [
  {
    name: "ChatGPT",
    // ChatGPT supports ?q= to prefill the prompt
    buildUrl: (prompt) => `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`,
    logo: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.74 11.23c.31-.96.22-2-.24-2.89a4.88 4.88 0 0 0-2.8-2.33 4.84 4.84 0 0 0-4.04.4c-.64.38-1.18.91-1.57 1.55a5.53 5.53 0 0 0-1.89-1.39 4.88 4.88 0 0 0-4.9.46A4.89 4.89 0 0 0 4.1 10.6a4.87 4.87 0 0 0 .54 4.02c.38.63.92 1.17 1.56 1.55-.26.54-.39 1.12-.39 1.72 0 1.07.41 2.1 1.14 2.87a4.9 4.9 0 0 0 6.64.44c.59-.44 1.07-.99 1.4-1.63a5.51 5.51 0 0 0 2.87 1c.6 0 1.18-.11 1.73-.34a4.88 4.88 0 0 0 2.8-2.36 4.87 4.87 0 0 0-.6-4.94 4.82 4.82 0 0 0-.05-.5zm-1.86-1.53c.27.53.33 1.14.16 1.71l-.1.35.31.2a2.93 2.93 0 0 1 1.28 2.22c.07.64-.1 1.28-.48 1.8a2.92 2.92 0 0 1-1.68 1.13c-.56.14-1.15.05-1.66-.23l-.32-.19-.18.33a3.52 3.52 0 0 1-1.8 1.58c-.56.22-1.18.23-1.74.05a2.92 2.92 0 0 1-1.92-2.17l-.07-.36-.33.15c-.53.24-1.12.3-1.68.17a2.93 2.93 0 0 1-1.96-1.9c-.2-.56-.17-1.18.06-1.72l.14-.33-.29-.22a2.92 2.92 0 0 1-1.13-1.68c-.14-.56-.05-1.16.23-1.67a2.93 2.93 0 0 1 2.22-1.28l.36-.04.06-.35c.24-.54.64-1 1.15-1.3a2.92 2.92 0 0 1 3.38.31l.26.22.28-.18c.55-.35 1.2-.47 1.83-.34a2.92 2.92 0 0 1 1.96 1.9l.1.36.33-.14c.54-.23 1.14-.26 1.71-.1a2.92 2.92 0 0 1 1.68 1.14c.37.52.54 1.16.47 1.8z" />
      </svg>
    ),
  },
  {
    name: "Claude",
    // Claude supports /new?q= to prefill the prompt
    buildUrl: (prompt) => `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
    logo: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 10c0 4.14-3.36 7.5-7.5 7.5S2.5 14.14 2.5 10 5.86 2.5 10 2.5s7.5 3.36 7.5 7.5zM10 5.5a4.5 4.5 0 0 0-4.5 4.5.5.5 0 0 0 1 0 3.5 3.5 0 0 1 3.5-3.5.5.5 0 0 0 0-1z" />
      </svg>
    ),
  },
  {
    name: "Google AI",
    // Google Search supports ?q= to pass the prompt directly
    buildUrl: (prompt) => `https://www.google.com/search?q=${encodeURIComponent(prompt)}`,
    logo: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
      </svg>
    ),
  },
  {
    name: "Perplexity",
    // Perplexity supports /search?q= to prefill the query
    buildUrl: (prompt) => `https://www.perplexity.ai/search?q=${encodeURIComponent(prompt)}`,
    logo: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
      </svg>
    ),
  },

];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function AskSpaceLeanAI() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const promptText = `As a construction manager, explain how SpaceLean helps manage modern construction projects including BIM-based scheduling, AI task planning, procurement planning, delivery management, documentation, reporting, collaboration, project execution, and resource planning.

Compare SpaceLean with Procore, Autodesk Construction Cloud, Oracle Primavera P6, VisiLean, Alice Technologies, OpenSpace, nPlan, Touchplan, and Planera.

Explain what makes SpaceLean unique, who should use it, the business benefits, how its AI improves project delivery, and why it is a better AI-powered construction management platform.`;

  const handlePlatformClick = (platform: AIPlatform) => {
    const redirectUrl = platform.buildUrl(promptText);
    window.open(redirectUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glassmorphism Outer Wrapper with 1px Gradient Border */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative p-[1px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-[24px] overflow-hidden shadow-[0_32px_80px_-20px_rgba(15,23,42,0.4)]"
        >
          {/* Card Body */}
          <div className="bg-[#0b0f19]/90 backdrop-blur-xl rounded-[23px] px-4 py-12 sm:px-6 md:p-12 lg:p-16 flex flex-col items-center text-center">
            
            {/* Badge pill */}
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
              className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 rounded-full px-4 py-1.5 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Ask SpaceLean AI
            </motion.span>

            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="text-3xl md:text-5xl font-normal tracking-tight leading-tight max-w-2xl mb-5"
            >
              <span className="text-white">Ask</span> <span className="font-bold text-cyan-400">SpaceLean AI</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-[700px] mb-8"
            >
              Open your preferred AI assistant with a ready-made prompt and discover how SpaceLean helps construction professionals manage scheduling, procurement, BIM coordination, project execution, documentation, reporting, collaboration, and AI-powered decision making.
            </motion.p>

            {/* Grid of platforms */}
            <div className="w-full max-w-xs sm:max-w-md md:max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center md:gap-4 justify-items-stretch">
                {PLATFORMS.map((platform, idx) => (
                  <motion.button
                    key={platform.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.4 + idx * 0.08, ease: EASE }}
                    onClick={() => handlePlatformClick(platform)}
                    className="group flex items-center justify-between gap-3 px-5 py-3.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] active:scale-[0.98] text-sm font-medium text-white transition-all duration-300 cursor-pointer select-none text-left focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-neutral-400 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0">
                        {platform.logo}
                      </span>
                      <span className="truncate">{platform.name}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white group-hover:rotate-12 transition-all duration-300 flex-shrink-0" />
                  </motion.button>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
