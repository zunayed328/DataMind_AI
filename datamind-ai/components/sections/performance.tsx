"use client";

import { motion } from "framer-motion";
import { FadeIn, CountUp } from "@/components/animations/fade-in";
import { performanceMetrics } from "@/lib/constants";

export function PerformanceSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[150px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Built for Speed & Scale</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg">Industry-leading performance benchmarks</p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {performanceMetrics.map((metric, i) => (
            <FadeIn key={metric.label} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 text-center">
                <span className="text-3xl mb-3 block">{metric.icon}</span>
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  <CountUp end={metric.value} prefix={metric.prefix + " "} suffix={metric.unit} />
                </div>
                <p className="text-sm font-medium text-white/70 mb-2">{metric.label}</p>
                <p className="text-xs text-white/30">{metric.comparison}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
