"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Pause, Play, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: 0,
    videoSrc: "/videos/Space lean Systems Infrastructure Engineering Software.mp4",
    poster: "/videos/hero-1-poster.jpg",
    eyebrow: "Construction Sequencing, Reimagined",
    heading: "Upload a Model.\nGet a Build Plan.",
    body: "SPACE AI reads your BIM file and generates a fully sequenced, dependency-resolved construction plan — automatically. No manual linking. No guesswork.",
    cta: { label: "Start Free Trial", href: "https://cad.spaceaiapp.com/lean" },
  },
  {
    id: 1,
    videoSrc: "/videos/Space lean Systems Infrastructure Engineering Software.mp4",
    poster: "/videos/hero-2-poster.jpg",
    eyebrow: "Intelligent Scheduling",
    heading: "Schedules That\nThink Ahead.",
    body: "SPACE AI detects conflicts, crew clashes, and zone bottlenecks before they reach the site — then adapts the schedule in real time when conditions change.",
    cta: { label: "See How It Works", href: "#demo" },
  },
  {
    id: 2,
    videoSrc: "/videos/Space lean Systems Infrastructure Engineering Software.mp4",
    poster: "/videos/hero-3-poster.jpg",
    eyebrow: "Built for AEC Teams",
    heading: "Less Planning Time.\nMore Build Time.",
    body: "What takes experienced planners days now takes minutes. SPACE AI handles sequencing, crew allocation, and risk forecasting — so your team stays focused on delivery.",
    cta: { label: "Explore Features", href: "#features" },
  },
];

const SLIDE_DURATION = 8000;

export default function VideoHero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
    startTimeRef.current = Date.now();
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      videoRefs.current[current]?.pause();
      return;
    }

    videoRefs.current[current]?.play().catch(() => {});

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, SLIDE_DURATION);

    if (progressRef.current) clearInterval(progressRef.current);
    const tick = 50;
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
    }, tick);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [current, paused, next]);

  useEffect(() => {
    goTo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full h-[80vh] min-h-[560px] max-h-[960px] overflow-hidden bg-black">

      {/* ── Video layers ── */}
      {SLIDES.map((s, i) => (
        <video
          key={s.id}
          ref={(el) => { videoRefs.current[i] = el; }}
          src={s.videoSrc}
          poster={s.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

      {/* ── Slide content ── */}
      <div className="relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <p className="text-sm font-semibold tracking-[0.22em] uppercase text-[#c8c8c8] mb-4">
                {slide.eyebrow}
              </p>

              {/* Heading */}
              <h1 className="text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.05] !text-[#f5f5f0] tracking-tight mb-6 whitespace-pre-line">
                {slide.heading}
              </h1>

              {/* Body */}
              <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-10 text-[#b8b8b0]">
                {slide.body}
              </p>

              {/* CTA */}
              <Link
                href={slide.cta.href}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white  text-white font-semibold text-base hover:bg-white hover:text-black transition-colors duration-200 rounded-full group"
              >
                {slide.cta.label}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Bottom bar: pause + slide dots + progress ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-5">

        {/* Pause / Play */}
        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          {paused
            ? <Play className="w-4 h-4 fill-white" />
            : <Pause className="w-4 h-4 fill-white" />
          }
        </button>

        {/* Dot indicators with progress fill */}
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => { setPaused(false); goTo(i); }}
            aria-label={`Go to slide ${i + 1}`}
            className="relative rounded-full flex items-center justify-center"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" className="-rotate-90">
              <circle
                cx="16" cy="16" r="11"
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
              />
              {i === current && (
                <circle
                  cx="16" cy="16" r="11"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray={`${2 * Math.PI * 11}`}
                  strokeDashoffset={`${2 * Math.PI * 11 * (1 - progress / 100)}`}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 0.05s linear" }}
                />
              )}
            </svg>
            <span className={`absolute w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/40"
            }`} />
          </button>
        ))}
      </div>

    </section>
  );
}