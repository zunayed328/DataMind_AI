"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { testimonials } from "@/lib/constants";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="gradient-text">What Users Say</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg">Trusted by students and professionals</p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <motion.div whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${["from-blue-400 to-purple-500", "from-green-400 to-cyan-500", "from-orange-400 to-pink-500"][i]} flex items-center justify-center text-white font-bold text-sm`}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role} · {t.company}</p>
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
