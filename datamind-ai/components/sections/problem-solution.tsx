"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { problems, solutions } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-white">From </span>
            <span className="text-red-400">Problem</span>
            <span className="text-white"> to </span>
            <span className="text-green-400">Solution</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-2xl mx-auto">
            See how DataMind AI transforms the way you work with data
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-start">
          {/* Problems */}
          <StaggerContainer className="space-y-4">
            <FadeIn>
              <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-sm">
                  ❌
                </span>
                The Problem
              </h3>
            </FadeIn>
            {problems.map((problem, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-red-500/20 hover:bg-red-500/[0.03] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{problem.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white mb-1">
                        {problem.title}
                      </h4>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {problem.description}
                      </p>
                      <span className="inline-block mt-2 text-xs font-medium text-red-400/80 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20">
                        {problem.stat}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Center Divider */}
          <div className="hidden lg:flex flex-col items-center justify-center h-full py-20">
            <div className="w-px h-full bg-gradient-to-b from-red-500/20 via-white/10 to-green-500/20 relative">
              <motion.div
                animate={{ y: [0, 200, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </div>

          {/* Solutions */}
          <StaggerContainer staggerDelay={0.12} className="space-y-4">
            <FadeIn>
              <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-sm">
                  ✅
                </span>
                Our Solution
              </h3>
            </FadeIn>
            {solutions.map((solution, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-green-500/20 hover:bg-green-500/[0.03] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{solution.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white mb-1">
                        {solution.title}
                      </h4>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {solution.description}
                      </p>
                      <span className="inline-block mt-2 text-xs font-medium text-green-400/80 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                        {solution.benefit}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
