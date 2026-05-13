"use client";

import { motion } from "framer-motion";
import { FadeIn, CountUp } from "@/components/animations/fade-in";
import { performanceMetrics } from "@/lib/constants";
import { Zap, Search, Brain, TrendingUp, MessageSquare, Users } from "lucide-react";

const metricIcons = [Zap, Search, Brain, TrendingUp, MessageSquare, Users];
const metricColors = [
  { icon: "text-violet-400", bg: "from-violet-500/10 to-transparent", border: "hover:border-violet-500/20" },
  { icon: "text-cyan-400", bg: "from-cyan-500/10 to-transparent", border: "hover:border-cyan-500/20" },
  { icon: "text-emerald-400", bg: "from-emerald-500/10 to-transparent", border: "hover:border-emerald-500/20" },
  { icon: "text-amber-400", bg: "from-amber-500/10 to-transparent", border: "hover:border-amber-500/20" },
  { icon: "text-rose-400", bg: "from-rose-500/10 to-transparent", border: "hover:border-rose-500/20" },
  { icon: "text-blue-400", bg: "from-blue-500/10 to-transparent", border: "hover:border-blue-500/20" },
];

export function PerformanceSection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="aurora-blob aurora-blob-violet w-[700px] h-[500px] top-[10%] left-1/2 -translate-x-1/2 opacity-25" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <span className="badge-accent text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full inline-block mb-6">
            Benchmarks
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient">Performance that scales</span>
          </h2>
          <p className="mt-5 text-text-secondary text-lg">Industry-leading performance benchmarks</p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {performanceMetrics.map((metric, i) => {
            const Icon = metricIcons[i];
            const colors = metricColors[i];
            return (
              <FadeIn key={metric.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`card-premium p-8 ${colors.border}`}
                >
                  {/* Gradient corner glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${colors.bg} rounded-bl-[80px] opacity-50`} />

                  {/* Icon */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                    <Icon className={`w-4 h-4 ${colors.icon}`} />
                  </div>

                  <div className="relative">
                    <div className="text-4xl sm:text-5xl font-extrabold text-white mb-1.5 tracking-[-0.03em]">
                      <CountUp end={metric.value} prefix={metric.prefix} suffix={metric.unit} />
                    </div>
                    <p className="text-sm font-semibold text-text-secondary mb-2">{metric.label}</p>
                    <p className="text-[12px] text-text-disabled">{metric.comparison}</p>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
