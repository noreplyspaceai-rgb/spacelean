'use client';
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const logos = [
  { name: 'Google', initial: 'G' },
  { name: 'Microsoft', initial: 'M' },
  { name: 'Slack', initial: 'S' },
  { name: 'Notion', initial: 'N' },
  { name: 'Figma', initial: 'F' },
  { name: 'GitHub', initial: 'GH' },
];

interface StatConfig {
  end: number;
  suffix: string;
  decimals?: number;
  label: string;
  display?: (val: number) => string;
}

const stats: StatConfig[] = [
  {
    end: 500,
    suffix: 'K+',
    label: 'Active Users',
    display: (v) => `${Math.floor(v)}K+`,
  },
  {
    end: 10,
    suffix: 'M+',
    label: 'Tasks Completed',
    display: (v) => `${Math.floor(v)}M+`,
  },
  {
    end: 99.9,
    suffix: '%',
    decimals: 1,
    label: 'Uptime',
    display: (v) => `${v.toFixed(1)}%`,
  },
  {
    end: 4.9,
    suffix: '/5',
    decimals: 1,
    label: 'User Rating',
    display: (v) => `${v.toFixed(1)}/5`,
  },
];

function useCountUp(end: number, duration = 2000, decimals = 0, active = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      setValue(parseFloat(current.toFixed(decimals)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [end, duration, decimals, active]);

  return value;
}

/** Tilt-on-hover card — mirrors the icon cards in the hero orbit */
function StatItem({ stat, active, index }: { stat: StatConfig; active: boolean; index: number }) {
  const value = useCountUp(stat.end, 2000 + index * 100, stat.decimals ?? 0, active);

  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      initial={{ opacity: 0, y: 28 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      className="group relative text-center bg-white rounded-2xl px-6 py-8 shadow-sm border border-black/[0.06] cursor-default overflow-hidden"
    >
      {/* Subtle orange radial glow — echoes hero's orange-500 accent */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Animated top border line on hover — like the hero orbit ring */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-orange-400/60 rounded-full pointer-events-none"
        initial={{ width: "0%" }}
        whileHover={{ width: "60%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Floating ring ornament — miniature echo of the hero orbit dashes */}
      <motion.div
        className="absolute -top-6 -right-6 w-20 h-20 rounded-full border border-dashed border-black/[0.07] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ translateZ: "8px" }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full border border-dashed border-orange-300/30 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      {/* Value */}
      <div
        className="text-3xl lg:text-4xl font-bold tabular-nums"
        style={{ translateZ: "12px", color: "#f97316" /* orange-500 */ }}
      >
        {stat.display ? stat.display(value) : `${value}${stat.suffix}`}
      </div>

      {/* Label */}
      <div className="text-sm text-neutral-500 mt-2 font-medium" style={{ translateZ: "8px" }}>
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setActive(true); observer.disconnect(); }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-4" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading — same fadeUp pattern as hero */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-sm font-medium text-neutral-500 uppercase tracking-wider mb-8"
        >
          Trusted by leading teams worldwide
        </motion.p>

        {/* Connector line — tiny orbit-dash echo bridging hero → stats */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={active ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 h-px w-48 origin-left"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)",
            filter: "blur(0.5px)",
          }}
        />

        {/* Stats grid */}
        <div className="mt-0 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}