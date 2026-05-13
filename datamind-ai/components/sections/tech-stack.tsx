"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { techStacks } from "@/lib/constants";
import { Brain, BarChart3, Cloud, Server } from "lucide-react";

const categoryIcons = [Brain, BarChart3, Cloud, Server];

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="tech-stack">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]">
            <span className="text-gradient">Modern stack, proven tools</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">Built with industry-leading technologies</p>
        </FadeIn>

        {/* Category tabs */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {techStacks.map((stack, i) => {
              const Icon = categoryIcons[i];
              return (
                <button
                  key={stack.title}
                  onClick={() => setActiveTab(i)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    activeTab === i
                      ? "text-white"
                      : "text-text-tertiary hover:text-text-secondary"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {stack.title}
                  {activeTab === i && (
                    <motion.div
                      layoutId="tech-tab"
                      className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.08]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Tech badges */}
        <FadeIn>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {techStacks[activeTab].techs.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                className="px-4 py-2 text-sm font-medium text-text-secondary rounded-lg border border-white/[0.06] bg-bg-tertiary hover:border-accent/[0.2] hover:text-white hover:bg-bg-elevated transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </FadeIn>

        {/* Architecture Flow */}
        <FadeIn>
          <div className="mt-16 rounded-xl border border-white/[0.06] bg-bg-tertiary p-8">
            <h3 className="text-[15px] font-semibold text-white text-center mb-8">System Architecture</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { label: "Streamlit UI", icon: "UI" },
                { label: "FastAPI", icon: "API" },
                { label: "LangChain", icon: "LC" },
                { label: "GPT-4", icon: "AI" },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="px-5 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-center hover:border-accent/[0.2] transition-all duration-200 cursor-default">
                    <span className="text-[11px] font-semibold text-accent-light block mb-0.5">{item.icon}</span>
                    <span className="text-[12px] font-medium text-text-secondary">{item.label}</span>
                  </div>
                  {i < 3 && <span className="text-text-disabled text-sm hidden sm:block">→</span>}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {["PostgreSQL", "Docker Compose", "AWS Cloud", "GitHub Actions"].map((item) => (
                  <span key={item} className="px-3 py-1.5 text-[11px] font-medium text-text-disabled rounded-md border border-white/[0.04] bg-white/[0.01]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
