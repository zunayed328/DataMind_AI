"use client";

import { motion } from "framer-motion";
import { FadeIn, CountUp } from "@/components/animations/fade-in";
import { performanceMetrics } from "@/lib/constants";
import { Zap, Search, Brain, TrendingUp, MessageSquare, Users } from "lucide-react";

const metricIcons = [Zap, Search, Brain, TrendingUp, MessageSquare, Users];

export function PerformanceSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]">
            <span className="text-gradient">Performance that scales</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">Industry-leading performance benchmarks</p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {performanceMetrics.map((metric, i) => {
            const Icon = metricIcons[i];
            return (
              <FadeIn key={metric.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="relative rounded-xl border border-white/[0.06] bg-bg-tertiary p-8 hover:border-white/[0.12] transition-all duration-300"
                >
                  {/* Icon top-right */}
                  <div className="absolute top-6 right-6 w-9 h-9 rounded-lg bg-accent/[0.06] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent-light/60" />
                  </div>

                  <div className="text-4xl sm:text-5xl font-semibold text-white mb-1 tracking-[-0.02em]">
                    <CountUp end={metric.value} prefix={metric.prefix} suffix={metric.unit} />
                  </div>
                  <p className="text-sm font-medium text-text-secondary mb-2">{metric.label}</p>
                  <p className="text-[12px] text-text-disabled">{metric.comparison}</p>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
