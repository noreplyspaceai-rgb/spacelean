"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import StartFreeTrialButton from "@/components/StartFreeTrialButton";

export default function CtaSection() {
  return (
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
            <StartFreeTrialButton />
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
  );
}
