"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { features } from "@/lib/constants";
import { Upload, Search, MessageSquare, Brain, FileText, FileOutput, TrendingUp, Cloud } from "lucide-react";

const featureIcons = [Upload, Search, MessageSquare, Brain, FileText, FileOutput, TrendingUp, Cloud];
const iconColors = [
  "text-violet-400 bg-violet-500/[0.12] border-violet-500/[0.18]",
  "text-cyan-400 bg-cyan-500/[0.12] border-cyan-500/[0.18]",
  "text-emerald-400 bg-emerald-500/[0.12] border-emerald-500/[0.18]",
  "text-amber-400 bg-amber-500/[0.12] border-amber-500/[0.18]",
  "text-rose-400 bg-rose-500/[0.12] border-rose-500/[0.18]",
  "text-blue-400 bg-blue-500/[0.12] border-blue-500/[0.18]",
  "text-orange-400 bg-orange-500/[0.12] border-orange-500/[0.18]",
  "text-teal-400 bg-teal-500/[0.12] border-teal-500/[0.18]",
];

export function FeaturesSection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden" id="features">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="aurora-blob aurora-blob-violet w-[700px] h-[500px] top-[20%] right-[-300px] opacity-40" />
      <div className="aurora-blob aurora-blob-cyan w-[500px] h-[400px] bottom-[10%] left-[-200px] opacity-30" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <span className="badge-accent text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full inline-block mb-6">
            Platform Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient">Everything you need to ship faster</span>
          </h2>
          <p className="mt-5 text-text-secondary text-lg">Powered by the latest in AI and machine learning</p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const Icon = featureIcons[i];
            const isLarge = i === 0 || i === 3;
            return (
              <StaggerItem key={feature.title} className={isLarge ? "sm:col-span-2" : ""}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group card-premium h-full"
                >
                  <div className={isLarge ? "p-8 sm:p-10" : "p-7"}>
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-6 ${iconColors[i]}`}>
                      <Icon className="w-[18px] h-[18px]" />
                    </div>
                    <h3 className={`font-bold text-white mb-2.5 ${isLarge ? "text-lg" : "text-[15px]"}`}>{feature.title}</h3>
                    <p className={`text-text-secondary leading-relaxed ${isLarge ? "text-sm max-w-md" : "text-sm"}`}>{feature.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
