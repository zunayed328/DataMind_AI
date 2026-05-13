"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Centered aurora */}
      <div className="aurora-blob aurora-blob-violet w-[800px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="aurora-blob aurora-blob-cyan w-[500px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="card-premium shimmer-border p-12 sm:p-16 text-center">
            {/* Floating sparkle */}
            <motion.div
              animate={{ y: [-4, 4, -4], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-cyan/10 border border-accent/20 mb-8"
            >
              <Sparkles className="w-6 h-6 text-accent-light" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.1] text-white mb-5">
              Start building today
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-md mx-auto leading-relaxed">
              Join the next generation of data analysts. Transform any dataset into intelligence.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Link
                href="/demo"
                className="group btn-primary inline-flex items-center gap-2.5 px-8 py-3.5 text-[15px] rounded-xl"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/docs"
                className="btn-secondary inline-flex items-center gap-2.5 px-8 py-3.5 text-[15px] rounded-xl"
              >
                View Documentation
              </Link>
            </div>

            <div className="flex items-center justify-center gap-3 text-[13px] text-text-disabled">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Free forever
              </span>
              <span className="w-1 h-1 rounded-full bg-text-disabled" />
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                No credit card
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
