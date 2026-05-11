"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, CountUp } from "@/components/animations/fade-in";
import { features } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const colorMap: Record<string, { border: string; glow: string; bg: string }> = {
  blue: { border: "hover:border-blue-500/30", glow: "group-hover:shadow-blue-500/10", bg: "bg-blue-500" },
  purple: { border: "hover:border-purple-500/30", glow: "group-hover:shadow-purple-500/10", bg: "bg-purple-500" },
  green: { border: "hover:border-green-500/30", glow: "group-hover:shadow-green-500/10", bg: "bg-green-500" },
  orange: { border: "hover:border-orange-500/30", glow: "group-hover:shadow-orange-500/10", bg: "bg-orange-500" },
  pink: { border: "hover:border-pink-500/30", glow: "group-hover:shadow-pink-500/10", bg: "bg-pink-500" },
  yellow: { border: "hover:border-yellow-500/30", glow: "group-hover:shadow-yellow-500/10", bg: "bg-yellow-500" },
  cyan: { border: "hover:border-cyan-500/30", glow: "group-hover:shadow-cyan-500/10", bg: "bg-cyan-500" },
  indigo: { border: "hover:border-indigo-500/30", glow: "group-hover:shadow-indigo-500/10", bg: "bg-indigo-500" },
};

const stats = [
  { label: "Datasets Analyzed", value: 100, suffix: "+" },
  { label: "ML Models", value: 5, suffix: "" },
  { label: "Months Built", value: 10, suffix: "" },
  { label: "Uptime", value: 99.9, suffix: "%" },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="features">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Everything You Need</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg">
            8 Powerful AI-Driven Features in One Platform
          </p>
        </FadeIn>

        {/* Feature Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const colors = colorMap[feature.color] || colorMap.blue;
            return (
              <StaggerItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 h-full transition-all duration-300 ${colors.border} ${colors.glow} hover:shadow-xl hover:bg-white/[0.04]`}
                >
                  {/* Icon */}
                  <motion.span
                    className="text-4xl block mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.span>

                  <h3 className="text-base font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                    Learn more
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>

                  {/* Bottom gradient line */}
                  <div className={`absolute bottom-0 left-4 right-4 h-px ${colors.bg} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Counter Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <FadeIn key={stat.label}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-sm text-white/40">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
