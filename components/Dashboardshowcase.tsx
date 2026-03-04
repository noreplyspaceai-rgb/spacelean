"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  LayoutDashboard,
  Zap,
  BarChart3,
  CalendarClock,
} from "lucide-react";

const SLIDES = [
  {
    icon: LayoutDashboard,
    tag: "Overview",
    headline: "Your entire project on one canvas.",
    body: "Instantly see every task, dependency, and deadline visualised in a single, live-updating board.",
    stat: "10×",
    statLabel: "faster project setup",
  },
  {
    icon: Zap,
    tag: "Automation",
    headline: "Drop a file. Get a full plan.",
    body: "Upload your IFC, RVT, or DWG and our AI parses it end-to-end.",
    stat: "< 30s",
    statLabel: "from upload to plan",
  },
  {
    icon: BarChart3,
    tag: "Analytics",
    headline: "Predict delays before they happen.",
    body: "Our live risk engine scores every milestone automatically.",
    stat: "94%",
    statLabel: "delay prediction accuracy",
  },
  {
    icon: CalendarClock,
    tag: "Scheduling",
    headline: "Schedules that update themselves.",
    body: "Connect your calendar and resource pool.",
    stat: "3 hrs",
    statLabel: "saved per week",
  },
];

const SPRING = { stiffness: 100, damping: 28, mass: 0.8 };

function LaptopMockup() {
  return (
    <div className="w-full select-none" style={{ perspective: "1200px" }}>
      {/* ── Lid ── */}
      <div
        className="relative w-full"
        style={{
          paddingBottom: "53%",
          borderRadius: "12px 12px 0 0",
          background: "linear-gradient(160deg, #e8e8e8 0%, #c8c8c8 60%, #b0b0b0 100%)",
          boxShadow:
            "0 -1px 0 #a0a0a0, inset 0 1px 0 rgba(255,255,255,0.8), 0 4px 24px rgba(0,0,0,0.18)",
        }}
      >
        {/* Bezel */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: "10px 10px 0 0",
            background: "#1a1a1a",
            margin: "5px 5px 0 5px",
          }}
        >
          {/* Camera notch */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center"
            style={{
              width: 56,
              height: 8,
              background: "#1a1a1a",
              borderRadius: "0 0 6px 6px",
              paddingTop: 2,
            }}
          >
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#2e2e2e",
                boxShadow: "0 0 0 1px #111, inset 0 0 2px rgba(255,255,255,0.15)",
              }}
            />
          </div>

          {/* Screen contents */}
          <div
            className="absolute flex flex-col overflow-hidden"
            style={{
              inset: "16px 4px 0 4px",
              borderRadius: "4px 4px 0 0",
              background: "#0f0f0f",
            }}
          >
            {/* macOS menu bar */}
            <div
              className="flex items-center px-3 gap-1.5 flex-shrink-0"
              style={{
                height: 22,
                background: "rgba(30,30,30,0.97)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {[
                { bg: "#ff5f57", shadow: "#e0443e" },
                { bg: "#febc2e", shadow: "#d4a017" },
                { bg: "#28c840", shadow: "#1aab29" },
              ].map(({ bg, shadow }, i) => (
                <div
                  key={i}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: bg,
                    boxShadow: `0 0 0 0.5px ${shadow}`,
                    flexShrink: 0,
                  }}
                />
              ))}
              {/* URL bar */}
              <div
                className="mx-auto flex items-center gap-1 px-2"
                style={{
                  width: "38%",
                  height: 13,
                  background: "rgba(255,255,255,0.07)",
                  borderRadius: 4,
                  border: "0.5px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#28c840",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 6,
                    color: "rgba(255,255,255,0.45)",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.02em",
                  }}
                >
                  cad.spaceaiapp.com
                </span>
              </div>
            </div>

            {/* Dashboard image fills remaining space */}
            <div className="flex-1 overflow-hidden">
              <img
                src="/dashboard.png"
                alt="Space AI Dashboard"
                style={{ width: "100%", height: "100%", objectFit: "fill", objectPosition: "top", display: "block" }}
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Apple logo watermark */}
        <div
          className="absolute"
          style={{
            width: 18,
            height: 22,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.15,
          }}
        >
          <svg viewBox="0 0 814 1000" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.8-154.6-110.1C180.3 760.9 120 614.3 120 484.4c0-232.7 150.6-355.7 299-355.7 79.1 0 144.9 52.2 194.7 52.2 47.7 0 122.5-55.1 212.8-55.1 34.3 0 101.8 3.2 154.2 56.4zm-209.2-137.1c-5.8-28.3-20.5-67.9-51.4-100.3C487.8 63.5 426.5 43.3 382.5 43.3c-.6 0-1.3 0-1.9.1.6 26.9 10.3 70.9 42.2 110.1 32.5 40.2 89.6 68.5 134.8 68.5 1.3-.1 1.3-.1 1.3-.1z" />
          </svg>
        </div>
      </div>

      {/* ── Hinge ── */}
      <div
        style={{
          height: 3,
          background: "linear-gradient(to bottom, #888, #b8b8b8)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
        }}
      />

      {/* ── Base / keyboard deck ── */}
      <div
        style={{
          height: 18,
          background: "linear-gradient(180deg, #c4c4c4 0%, #d6d6d6 45%, #dcdcdc 100%)",
          borderRadius: "0 0 10px 10px",
          boxShadow:
            "0 6px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.55)",
          position: "relative",
        }}
      >
        {/* Trackpad */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: 4,
            width: "22%",
            height: 9,
            borderRadius: 3,
            background: "rgba(0,0,0,0.06)",
            border: "0.5px solid rgba(0,0,0,0.09)",
          }}
        />
      </div>

      {/* ── Drop shadow under base ── */}
      <div
        style={{
          height: 8,
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.15) 0%, transparent 70%)",
          marginTop: 0,
        }}
      />
    </div>
  );
}

export default function DashboardShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const animationStart = 0.2;
  const animationEnd = 0.6;

  const laptopWidthNum = useTransform(
    scrollYProgress,
    [animationStart, animationEnd],
    [100, 58]
  );
  const laptopWidthSpring = useSpring(laptopWidthNum, SPRING);
  const laptopWidth = useMotionTemplate`${laptopWidthSpring}%`;

  const leftWidthNum = useTransform(
    scrollYProgress,
    [animationStart, animationEnd],
    [0, 42]
  );
  const leftWidthSpring = useSpring(leftWidthNum, SPRING);
  const leftWidth = useMotionTemplate`${leftWidthSpring}%`;

  const leftOpacity = useTransform(
    scrollYProgress,
    [animationStart + 0.05, animationEnd],
    [0, 1]
  );
  const leftX = useTransform(
    scrollYProgress,
    [animationStart + 0.05, animationEnd],
    [-40, 0]
  );

  const prev = () => {
    setDirection(-1);
    setActiveSlide((s) => (s - 1 + SLIDES.length) % SLIDES.length);
  };

  const next = () => {
    setDirection(1);
    setActiveSlide((s) => (s + 1) % SLIDES.length);
  };

  const slide = SLIDES[activeSlide];
  const SlideIcon = slide.icon;

  const contentVariants = {
    enter: (d: number) => ({ x: d * 24, opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
    exit: (d: number) => ({
      x: d * -24,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" as const },
    }),
  };

  return (
    <section ref={sectionRef} className="relative">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="mb-16">
            <h2 className="text-5xl font-serif leading-tight">
              Your blueprint thinks.
              <br />
              Your schedule builds itself.
            </h2>
          </div>

          <div className="flex items-center w-full">
            {/* LEFT PANEL */}
            <motion.div
              style={{
                width: leftWidth,
                opacity: leftOpacity,
                x: leftX,
                willChange: "width, opacity, transform",
              }}
              className="pr-12 overflow-hidden flex-shrink-0"
            >
              <div className="min-w-[320px] flex flex-col gap-6">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeSlide}
                    custom={direction}
                    variants={contentVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex flex-col gap-6"
                  >
                    <span className="text-xs uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                      <SlideIcon className="w-4 h-4" />
                      {slide.tag}
                    </span>
                    <h3 className="text-3xl font-serif">{slide.headline}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {slide.body}
                    </p>
                    <div className="flex items-end gap-3">
                      <span className="text-5xl font-serif">{slide.stat}</span>
                      <span className="text-xs uppercase tracking-wider text-neutral-400">
                        {slide.statLabel}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center gap-3 pt-4">
                  <button
                    onClick={prev}
                    aria-label="Previous slide"
                    className="hover:opacity-60 transition-opacity"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div className="flex gap-1.5">
                    {SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setDirection(i > activeSlide ? 1 : -1);
                          setActiveSlide(i);
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                          i === activeSlide ? "bg-black" : "bg-neutral-300"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    aria-label="Next slide"
                    className="hover:opacity-60 transition-opacity"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <Link
                  href="https://cad.spaceaiapp.com/lean"
                  className="inline-flex items-center gap-2 mt-4 bg-black text-white px-6 py-3 rounded-full text-xs uppercase w-fit"
                >
                  Space lean core
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* LAPTOP */}
            <motion.div
              style={{ width: laptopWidth, willChange: "width" }}
              className="flex-shrink-0"
            >
              <LaptopMockup />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}