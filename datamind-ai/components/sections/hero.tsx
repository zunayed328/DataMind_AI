"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" id="hero">
      {/* Deep background */}
      <div className="absolute inset-0 bg-bg-primary" />

      {/* Animated grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Aurora blobs */}
      <div className="aurora-blob aurora-blob-violet w-[900px] h-[700px] top-[-250px] left-1/2 -translate-x-1/2" />
      <div className="aurora-blob aurora-blob-cyan w-[600px] h-[500px] top-[100px] right-[-200px]" />
      <div className="aurora-blob aurora-blob-rose w-[500px] h-[400px] bottom-[50px] left-[-150px]" />

      {/* Radial spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(124, 58, 237, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 w-full pt-28 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-2 text-[13px] font-medium text-accent-light rounded-full border border-accent/20 bg-accent/[0.06] backdrop-blur-xl shadow-[0_0_20px_rgba(124,58,237,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-light" />
              </span>
              <Sparkles className="w-3.5 h-3.5" />
              Now in Public Beta
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-bold tracking-[-0.04em] leading-[0.95] max-w-[950px]"
          >
            <span className="text-white">Transform data into</span>
            <br />
            <span className="text-gradient-hero">intelligent insights.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-7 text-lg sm:text-xl text-text-secondary leading-[1.7] max-w-[620px]"
          >
            The AI-powered platform that turns any dataset into actionable
            business intelligence in seconds. Built for modern teams.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/demo"
              className="group btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] rounded-xl"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/features"
              className="btn-secondary inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] rounded-xl"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </Link>
          </motion.div>

          {/* Trust text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-5 flex items-center gap-3 text-[13px] text-text-tertiary"
          >
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              No credit card required
            </span>
            <span className="w-1 h-1 rounded-full bg-text-disabled" />
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Free forever
            </span>
            <span className="w-1 h-1 rounded-full bg-text-disabled" />
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Open source
            </span>
          </motion.div>

          {/* Dashboard Preview — Cinematic */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="mt-20 w-full max-w-[1100px] relative"
          >
            {/* Multi-layer glow underneath */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[90%] h-[250px] pointer-events-none">
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.15) 0%, transparent 65%)" }} />
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.08) 0%, transparent 50%)" }} />
            </div>

            {/* Dashboard card with shimmer */}
            <div className="relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-bg-elevated/80 to-bg-primary/60 backdrop-blur-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] shimmer-border">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.05] bg-bg-primary/40">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-[11px] text-text-disabled font-mono px-4 py-1 rounded-md bg-white/[0.03] border border-white/[0.04]">
                    datamind-ai.vercel.app/dashboard
                  </span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 sm:p-8">
                {/* Metric cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Accuracy", value: "94.2%", trend: "+2.1%", color: "from-violet-500/10 to-violet-500/5" },
                    { label: "Processed", value: "1,247", trend: "+340", color: "from-cyan-500/10 to-cyan-500/5" },
                    { label: "Insights", value: "38", trend: "+12", color: "from-rose-500/10 to-rose-500/5" },
                    { label: "Models", value: "5", trend: "Active", color: "from-amber-500/10 to-amber-500/5" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.08, duration: 0.5, ease }}
                      className={`rounded-xl bg-gradient-to-br ${stat.color} border border-white/[0.06] p-4 hover:border-white/[0.12] transition-all duration-300`}
                    >
                      <p className="text-[10px] text-text-disabled uppercase tracking-[0.08em] mb-1.5 font-medium">{stat.label}</p>
                      <p className="text-xl font-bold text-white tracking-[-0.01em]">{stat.value}</p>
                      <p className="text-[11px] text-accent-light mt-1 font-medium">{stat.trend}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="rounded-xl bg-white/[0.015] border border-white/[0.05] p-5 mb-4">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-1.5 h-4 rounded-full bg-accent/60" />
                      <p className="text-[13px] font-semibold text-text-secondary">Revenue by Category</p>
                    </div>
                    <span className="text-[10px] text-text-disabled px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] font-medium">
                      Last 6 months
                    </span>
                  </div>
                  <div className="flex items-end justify-between h-32 gap-2 px-1">
                    {[45, 62, 38, 82, 55, 91, 48, 72, 88, 65, 95, 52].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: `${h}%`, opacity: 1 }}
                        transition={{ delay: 1 + i * 0.05, duration: 0.6, ease }}
                        className="flex-1 rounded-t-[4px] relative group cursor-pointer"
                        style={{
                          background: `linear-gradient(to top, rgba(124, 58, 237, 0.5), rgba(124, 58, 237, 0.15))`,
                        }}
                      >
                        <div className="absolute inset-0 rounded-t-[4px] bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* AI Insight */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5, ease }}
                  className="rounded-xl bg-gradient-to-r from-accent/[0.06] to-accent-cyan/[0.04] border border-accent/[0.12] p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-accent/20">
                      <Sparkles className="w-4 h-4 text-accent-light" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-accent-light mb-0.5 uppercase tracking-wider">AI Insight</p>
                      <p className="text-[12px] text-text-secondary leading-relaxed">
                        Revenue increased by <span className="text-white font-semibold">23.4%</span> in Q3, primarily driven by the electronics category. Consider increasing inventory allocation for the upcoming quarter.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
