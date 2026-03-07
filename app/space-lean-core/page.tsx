"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Zap,
  BarChart3,
  CalendarClock,
  AlertCircle,
  CheckCircle2,
  Clock,
  Users,
  TrendingUp,
  Lightbulb,
  GitBranch,
  Shield,
} from "lucide-react";
import StartFreeTrialButton from "@/components/StartFreeTrialButton";

const FEATURES = [
  {
    id: "smart-bim",
    icon: Brain,
    title: "Smart BIM Intelligence",
    subtitle: "Auto-mapped relationships",
    description:
      "Upload your IFC or Revit model and our AI engine automatically detects and maps every physical relationship in your project.",
    keyPoints: [
      "Support & load-bearing detection",
      "Penetration & clashing identification",
      "Zone sequencing analysis",
      "Trade dependency mapping",
      "Multi-discipline integration",
    ],
    benefits: [
      {
        metric: "0",
        label: "Manual task links required",
        icon: Lightbulb,
      },
      {
        metric: "100%",
        label: "Geometric relationships detected",
        icon: CheckCircle2,
      },
    ],
    image: "/dashboard-bim.png",
    color: "from-blue-50 to-indigo-50",
    accentColor: "text-blue-600",
  },
  {
    id: "ai-sequencing",
    icon: Zap,
    title: "AI-Powered Sequencing",
    subtitle: "Optimal build sequences",
    description:
      "Drop your model and get a buildable sequence. Our AI reads geometry, detects clashes and workface constraints, producing multiple optimized strategies.",
    keyPoints: [
      "Geometric clash detection",
      "Workface constraint analysis",
      "Multi-strategy generation",
      "Crew compatibility checks",
      "Zone accessibility validation",
    ],
    benefits: [
      {
        metric: "< 60s",
        label: "From BIM upload to schedule",
        icon: Clock,
      },
      {
        metric: "8+",
        label: "Alternative sequences generated",
        icon: GitBranch,
      },
    ],
    image: "/dashboard-sequencing.png",
    color: "from-amber-50 to-orange-50",
    accentColor: "text-amber-600",
  },
  {
    id: "predictive-risk",
    icon: BarChart3,
    title: "Predictive Risk Analysis",
    subtitle: "Delay probability scoring",
    description:
      "1,000+ automated schedule simulations identify critical tasks before they become problems, using AI durations, crew load, and zone congestion.",
    keyPoints: [
      "Monte Carlo simulation (1000+ runs)",
      "AI-powered duration estimation",
      "Crew load balancing analysis",
      "Zone congestion modeling",
      "Critical path visualization",
    ],
    benefits: [
      {
        metric: "94%",
        label: "Delay prediction accuracy",
        icon: BarChart3,
      },
      {
        metric: "72h",
        label: "Early warning on risks",
        icon: AlertCircle,
      },
    ],
    image: "/dashboard-risk.png",
    color: "from-red-50 to-rose-50",
    accentColor: "text-red-600",
  },
  {
    id: "self-healing",
    icon: CalendarClock,
    title: "Self-Healing Schedules",
    subtitle: "Automatic replanning",
    description:
      "When a task slips, the engine instantly re-optimizes every impacted downstream task. No planner intervention needed. Schedules that adapt in real-time.",
    keyPoints: [
      "Real-time delay detection",
      "Automatic impact analysis",
      "Downstream task re-sequencing",
      "Constraint preservation",
      "Zero-manual intervention",
    ],
    benefits: [
      {
        metric: "10×",
        label: "Faster replanning vs Synchro",
        icon: TrendingUp,
      },
      {
        metric: "Instant",
        label: "Schedule updates on change",
        icon: Zap,
      },
    ],
    image: "/dashboard-healing.png",
    color: "from-green-50 to-emerald-50",
    accentColor: "text-green-600",
  },
];

const COMPARISON_FEATURES = [
  {
    feature: "Automatic BIM mapping",
    spaceLean: true,
    traditional: false,
  },
  {
    feature: "AI sequence generation",
    spaceLean: true,
    traditional: false,
  },
  {
    feature: "Predictive risk scoring",
    spaceLean: true,
    traditional: false,
  },
  {
    feature: "Auto-replanning on delay",
    spaceLean: true,
    traditional: false,
  },
  {
    feature: "Monte Carlo simulation",
    spaceLean: true,
    traditional: false,
  },
  {
    feature: "Trade dependency analysis",
    spaceLean: true,
    traditional: false,
  },
  {
    feature: "Manual task linking",
    spaceLean: false,
    traditional: true,
  },
  {
    feature: "Days to create schedule",
    spaceLean: false,
    traditional: true,
  },
];

const USE_CASES = [
  {
    icon: Users,
    title: "Complex Multi-Trade Projects",
    description:
      "Large projects with 20+ trades. Space Lean automatically manages interdependencies that would take weeks to manually sequence.",
  },
  {
    icon: Shield,
    title: "High-Risk Timelines",
    description:
      "When delays cost millions. Predictive risk and auto-replanning keep schedules realistic and achievable.",
  },
  {
    icon: TrendingUp,
    title: "Optimization-Driven Teams",
    description:
      "Organizations seeking competitive advantage through AI-driven scheduling and resource efficiency.",
  },
  {
    icon: Lightbulb,
    title: "Digital-First Contractors",
    description:
      "Firms already using Revit/BIM who want to extract maximum value from their digital models.",
  },
];

type Feature = (typeof FEATURES)[number];
type UseCase = (typeof USE_CASES)[number];

type FeatureCardProps = {
  feature: Feature;
  isActive: boolean;
  onClick: () => void;
};

// Feature Card with Toggle
function FeatureCard({ feature, isActive, onClick }: FeatureCardProps) {
  const { icon: Icon, title, subtitle, color, accentColor } = feature;

  return (
    <motion.button
      onClick={onClick}
      className="relative text-left w-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
          isActive
            ? `bg-gradient-to-br ${color} border-neutral-300 shadow-lg`
            : "bg-white border-neutral-200 hover:border-neutral-300"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Icon
                className={`w-5 h-5 transition-colors ${
                  isActive ? accentColor : "text-neutral-400"
                }`}
              />
              <span className="text-xs uppercase tracking-widest font-bold text-neutral-500">
                {subtitle}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-serif text-neutral-900 mb-1">
              {title}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight
              className={`w-5 h-5 flex-shrink-0 transition-colors ${
                isActive ? accentColor : "text-neutral-300"
              }`}
            />
          </motion.div>
        </div>
      </div>
    </motion.button>
  );
}

type FeatureDetailProps = {
  feature: Feature;
  isActive: boolean;
};

// Detail View
function FeatureDetail({ feature, isActive }: FeatureDetailProps) {
  if (!isActive) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="mt-8 lg:mt-0 lg:pl-8"
      >
        {/* Description */}
        <p className="text-base text-neutral-600 leading-relaxed mb-8 max-w-2xl">
          {feature.description}
        </p>

        {/* Key Points */}
        <div className="mb-10">
          <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-700 mb-4">
            Key Capabilities
          </h4>
          <ul className="space-y-3">
            {feature.keyPoints.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-sm text-neutral-600"
              >
                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${feature.accentColor}`} />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {feature.benefits.map((benefit, i) => {
            const BenefitIcon = benefit.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-4 rounded-lg border border-neutral-200"
              >
                <div className="flex items-start gap-3">
                  <BenefitIcon className={`w-5 h-5 flex-shrink-0 mt-1 ${feature.accentColor}`} />
                  <div>
                    <div className={`text-2xl font-serif font-bold ${feature.accentColor}`}>
                      {benefit.metric}
                    </div>
                    <div className="text-xs text-neutral-500 leading-tight">
                      {benefit.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dashboard Image Placeholder */}
        <div
          className={`bg-gradient-to-br ${feature.color} border-2 border-neutral-200 rounded-xl p-8 aspect-video flex items-center justify-center`}
        >
          <div className="text-center">
            <div className={`text-4xl mb-3 ${feature.accentColor}`}>
              📊
            </div>
            <p className="text-sm text-neutral-600 font-serif max-w-xs">
              Dashboard preview: {feature.title}
            </p>
            <p className="text-xs text-neutral-500 mt-2">
              Add your software screenshot here: {feature.image}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Comparison Table
function ComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="overflow-x-auto"
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-neutral-200">
            <th className="text-left py-4 px-4 sm:px-6 font-serif text-base text-neutral-900">
              Feature
            </th>
            <th className="text-center py-4 px-4 sm:px-6 font-serif text-base text-neutral-900">
              Space Lean
            </th>
            <th className="text-center py-4 px-4 sm:px-6 font-serif text-base text-neutral-900">
              Traditional Tools
            </th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON_FEATURES.map((item, i) => (
            <tr
              key={i}
              className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
            >
              <td className="py-4 px-4 sm:px-6 text-neutral-700">{item.feature}</td>
              <td className="py-4 px-4 sm:px-6 text-center">
                {item.spaceLean ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                ) : (
                  <div className="w-5 h-5 mx-auto" />
                )}
              </td>
              <td className="py-4 px-4 sm:px-6 text-center">
                {item.traditional ? (
                  <CheckCircle2 className="w-5 h-5 text-neutral-400 mx-auto" />
                ) : (
                  <div className="w-5 h-5 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

type UseCaseCardProps = {
  useCase: UseCase;
  index: number;
};

// Use Case Card
function UseCaseCard({ useCase, index }: UseCaseCardProps) {
  const Icon = useCase.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white border-2 border-neutral-200 rounded-xl p-6 sm:p-8 hover:border-neutral-300 transition-colors group"
    >
      <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neutral-200 transition-colors">
        <Icon className="w-6 h-6 text-neutral-700" />
      </div>
      <h3 className="text-lg font-serif text-neutral-900 mb-3">{useCase.title}</h3>
      <p className="text-sm text-neutral-600 leading-relaxed">{useCase.description}</p>
    </motion.div>
  );
}

export default function SpaceLeanCorePage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  return (
    <div className="bg-white">
      {/* ─────────────────────────────────────────── HERO ─────────────────────────────────────────── */}
      <section ref={heroRef} className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-black/40 mb-4">
              Space Lean Core
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-neutral-900 leading-[1.1] mb-6">
              AI-Powered Construction Scheduling
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Transform your BIM models into optimized, intelligent schedules. Space Lean
              Core combines geometric intelligence, predictive risk analysis, and adaptive
              replanning to keep your projects on track.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
           <StartFreeTrialButton/>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-neutral-50 transition-colors"
            >
              Explore Features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────── FEATURES ─────────────────────────────────────────── */}
      <section id="features" ref={featuresRef} className="py-20 sm:py-32 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 sm:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-900 mb-4">
              Core Capabilities
            </h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              Four pillars of AI-powered scheduling intelligence, working in harmony to
              transform how construction teams plan and execute.
            </p>
          </div>

          {/* Features Grid + Detail */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Feature Cards */}
            <div className="space-y-4">
              {FEATURES.map((feature, i) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  isActive={activeFeature === i}
                  onClick={() => setActiveFeature(i)}
                />
              ))}
            </div>

            {/* Feature Detail View */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <FeatureDetail feature={FEATURES[activeFeature]} isActive={true} />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────── COMPARISON ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-4">
              Space Lean vs Traditional Tools
            </h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              See how Space Lean Core&apos;s AI-driven approach compares to conventional scheduling
              methods.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl border-2 border-neutral-200 p-6 sm:p-8">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────── USE CASES ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-32 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-4">
              Who Benefits Most
            </h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              Space Lean Core is built for teams that demand better visibility, faster
              planning, and adaptive schedules.
            </p>
          </div>

          {/* Use Case Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((useCase, i) => (
              <UseCaseCard key={i} useCase={useCase} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────── WORKFLOW ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-4">
              How It Works
            </h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              A simple, four-step workflow that turns your BIM model into an intelligent
              schedule.
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                step: 1,
                title: "Upload Your Model",
                description:
                  "Import your IFC or Revit model. Space Lean reads the entire geometric structure in seconds.",
                icon: "📥",
              },
              {
                step: 2,
                title: "AI Analyzes Relationships",
                description:
                  "Our engine detects physical dependencies, zoning, penetrations, and trade interactions automatically.",
                icon: "🧠",
              },
              {
                step: 3,
                title: "Generate Sequences",
                description:
                  "Get multiple optimized build sequences with predictive risk scores for each task and path.",
                icon: "⚡",
              },
              {
                step: 4,
                title: "Deploy & Adapt",
                description:
                  "Use your schedule. Space Lean monitors progress and reoptimizes automatically as delays occur.",
                icon: "🚀",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center text-2xl font-serif font-bold text-neutral-900">
                  {item.step}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-serif text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="text-3xl">{item.icon}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────── METRICS ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-32 px-4 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif mb-16 text-center">
            Proven Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                metric: "< 60s",
                label: "From upload to schedule",
              },
              {
                metric: "94%",
                label: "Delay prediction accuracy",
              },
              {
                metric: "10×",
                label: "Faster replanning",
              },
              {
                metric: "0",
                label: "Manual task links needed",
              },
              {
                metric: "1000+",
                label: "Simulations per analysis",
              },
              {
                metric: "∞",
                label: "Schedule optimization cycles",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-serif font-bold mb-2">
                  {item.metric}
                </div>
                <div className="text-sm text-neutral-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────── CTA ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-32 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-6">
              Ready to Transform Your Scheduling?
            </h2>
            <p className="text-base text-neutral-600 mb-8 max-w-2xl mx-auto">
              Join forward-thinking construction teams who are using AI to plan smarter,
              identify risks earlier, and adapt faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <StartFreeTrialButton/>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-neutral-800 px-6 text-sm font-medium hover:underline"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-xs text-neutral-500 mt-6">
              No credit card required. Get your first schedule in under 2 minutes.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
