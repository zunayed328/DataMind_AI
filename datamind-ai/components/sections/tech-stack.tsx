"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { techStacks } from "@/lib/constants";
import { Brain, BarChart3, Cloud, Server } from "lucide-react";

const categoryIcons = [Brain, BarChart3, Cloud, Server];
const tabColors = [
  "from-violet-500/20 to-violet-500/5",
  "from-cyan-500/20 to-cyan-500/5",
  "from-emerald-500/20 to-emerald-500/5",
  "from-amber-500/20 to-amber-500/5",
];

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden" id="tech-stack">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="aurora-blob aurora-blob-cyan w-[600px] h-[500px] top-[20%] right-[-250px] opacity-30" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <span className="badge-accent text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full inline-block mb-6">
            Technology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient">Modern stack, proven tools</span>
          </h2>
          <p className="mt-5 text-text-secondary text-lg">Built with industry-leading technologies</p>
        </FadeIn>

        {/* Category tabs */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {techStacks.map((stack, i) => {
              const Icon = categoryIcons[i];
              return (
                <button
                  key={stack.title}
                  onClick={() => setActiveTab(i)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 ${
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
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tabColors[i]} border border-white/[0.08]`}
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {techStacks[activeTab].techs.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                className="px-5 py-2.5 text-sm font-medium text-text-secondary rounded-xl border border-white/[0.06] bg-bg-tertiary hover:border-accent/[0.25] hover:text-white hover:bg-bg-elevated hover:shadow-[0_0_20px_rgba(124,58,237,0.06)] transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </FadeIn>

        {/* Architecture Flow */}
        <FadeIn>
          <div className="mt-20 card-premium p-8 sm:p-10">
            <h3 className="text-[15px] font-bold text-white text-center mb-10">System Architecture</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { label: "Streamlit UI", icon: "UI", color: "from-violet-500/15 to-violet-500/5 border-violet-500/15" },
                { label: "FastAPI", icon: "API", color: "from-cyan-500/15 to-cyan-500/5 border-cyan-500/15" },
                { label: "LangChain", icon: "LC", color: "from-emerald-500/15 to-emerald-500/5 border-emerald-500/15" },
                { label: "GPT-4", icon: "AI", color: "from-amber-500/15 to-amber-500/5 border-amber-500/15" },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className={`px-6 py-4 rounded-xl border bg-gradient-to-br ${item.color} text-center hover:scale-105 transition-transform duration-300 cursor-default`}>
                    <span className="text-[11px] font-bold text-accent-light block mb-1">{item.icon}</span>
                    <span className="text-[12px] font-medium text-text-secondary">{item.label}</span>
                  </div>
                  {i < 3 && <span className="text-accent/40 text-lg hidden sm:block">→</span>}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {["PostgreSQL", "Docker Compose", "AWS Cloud", "GitHub Actions"].map((item) => (
                  <span key={item} className="px-3.5 py-1.5 text-[11px] font-semibold text-text-disabled rounded-lg border border-white/[0.04] bg-white/[0.02]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
