"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { testimonials } from "@/lib/constants";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="aurora-blob aurora-blob-cyan w-[600px] h-[400px] top-[20%] left-[-200px] opacity-30" />
      <div className="aurora-blob aurora-blob-violet w-[500px] h-[400px] bottom-[10%] right-[-200px] opacity-25" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <span className="badge-accent text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full inline-block mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient">What users say</span>
          </h2>
          <p className="mt-5 text-text-secondary text-lg">Trusted by students and professionals</p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="card-premium p-8 h-full flex flex-col"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-[15px] text-white/90 leading-[1.7] mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="border-t border-white/[0.06] pt-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent/20 to-accent-cyan/10 border border-accent/[0.15] flex items-center justify-center text-accent-light font-bold text-sm">
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
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
