"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { testimonials } from "@/lib/constants";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]">
            <span className="text-gradient">What users say</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">Trusted by students and professionals</p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-white/[0.06] bg-bg-tertiary p-8 hover:border-white/[0.12] transition-all duration-300 h-full flex flex-col"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-accent/20 mb-5 -scale-x-100" />

                <p className="text-[15px] text-white/90 leading-relaxed mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="border-t border-white/[0.06] pt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/[0.1] border border-accent/[0.12] flex items-center justify-center text-accent-light font-semibold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-[12px] text-text-tertiary">{t.role} · {t.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
