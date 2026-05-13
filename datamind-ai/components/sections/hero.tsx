"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden" id="hero">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute inset-0 dot-pattern" />
      
      {/* Radial glow — subtle indigo at top center */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        {/* Centered content */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium text-accent-light rounded-full border border-accent/20 bg-accent/[0.08]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-light" />
              </span>
              Now in Public Beta
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.04em] leading-[1] max-w-[900px]"
          >
            <span className="text-white">Transform data into</span>
            <br />
            <span className="text-gradient">intelligent insights.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg sm:text-xl text-text-secondary leading-[1.6] max-w-[600px]"
          >
            The AI-powered platform that turns any dataset into actionable
            business intelligence in seconds. Built for modern teams.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-black bg-white rounded-lg hover:bg-white/90 transition-all duration-200 hover:-translate-y-px shadow-[0_10px_40px_rgba(255,255,255,0.08)]"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-white bg-white/[0.05] border border-white/[0.1] rounded-lg hover:bg-white/[0.1] transition-all duration-200"
            >
              View Features
            </Link>
          </motion.div>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-[13px] text-text-tertiary"
          >
            No credit card required · Free forever
          </motion.p>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 w-full max-w-[1100px] relative"
          >
            {/* Glow underneath */}
            <div
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-[200px] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
              }}
            />

            {/* Dashboard card */}
            <div className="relative rounded-2xl border border-white/[0.08] bg-bg-tertiary/50 backdrop-blur-sm overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-bg-secondary/60">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-[11px] text-text-disabled font-mono px-3 py-1 rounded-md bg-white/[0.03]">datamind-ai.vercel.app/dashboard</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 sm:p-8">
                {/* Metric cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Accuracy", value: "94.2%", trend: "+2.1%" },
                    { label: "Processed", value: "1,247", trend: "+340" },
                    { label: "Insights", value: "38", trend: "+12" },
                    { label: "Models", value: "5", trend: "Active" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                      <p className="text-[10px] text-text-disabled uppercase tracking-[0.06em] mb-1">{stat.label}</p>
                      <p className="text-xl font-semibold text-white">{stat.value}</p>
                      <p className="text-[11px] text-accent-light mt-0.5">{stat.trend}</p>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[12px] font-medium text-text-secondary">Revenue by Category</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-text-disabled px-2 py-0.5 rounded bg-white/[0.03]">Last 6 months</span>
                    </div>
                  </div>
                  <div className="flex items-end justify-between h-28 gap-2 px-1">
                    {[45, 62, 38, 82, 55, 91, 48, 72, 88, 65, 95, 52].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.8 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 rounded-t-[3px]"
                        style={{
                          background: `linear-gradient(to top, rgba(99, 102, 241, 0.4), rgba(99, 102, 241, 0.15))`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* AI Insight */}
                <div className="rounded-xl bg-accent/[0.05] border border-accent/[0.12] p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#818CF8" opacity="0.9"/>
                        <path d="M2 17L12 22L22 17" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                        <path d="M2 12L12 17L22 12" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-accent-light mb-0.5">AI Insight</p>
                      <p className="text-[12px] text-text-secondary leading-relaxed">
                        Revenue increased by <span className="text-white font-medium">23.4%</span> in Q3, primarily driven by the electronics category. Consider increasing inventory allocation for the upcoming quarter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
