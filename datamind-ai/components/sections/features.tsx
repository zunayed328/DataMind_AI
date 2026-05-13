"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { features } from "@/lib/constants";
import {
  Upload,
  Search,
  MessageSquare,
  Brain,
  FileText,
  FileOutput,
  TrendingUp,
  Cloud,
} from "lucide-react";

const featureIcons = [Upload, Search, MessageSquare, Brain, FileText, FileOutput, TrendingUp, Cloud];

export function FeaturesSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="features">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]">
            <span className="text-gradient">Everything you need to ship faster</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Powered by the latest in AI and machine learning
          </p>
        </FadeIn>

        {/* Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            const Icon = featureIcons[i];
            const isLarge = i === 0 || i === 3;
            return (
              <StaggerItem key={feature.title} className={isLarge ? "sm:col-span-2" : ""}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group relative rounded-2xl border border-white/[0.06] bg-bg-tertiary h-full transition-all duration-300 hover:border-accent/[0.2] hover:bg-bg-elevated overflow-hidden"
                >
                  <div className={isLarge ? "p-8 sm:p-10" : "p-7"}>
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-accent/[0.08] border border-accent/[0.1] flex items-center justify-center mb-5">
                      <Icon className="w-[18px] h-[18px] text-accent-light" />
                    </div>

                    <h3 className={`font-semibold text-white mb-2 ${isLarge ? "text-lg" : "text-[15px]"}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-text-secondary leading-relaxed ${isLarge ? "text-sm max-w-md" : "text-sm"}`}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
