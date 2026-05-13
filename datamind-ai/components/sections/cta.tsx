"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.06) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-2xl border border-white/[0.06] bg-bg-tertiary p-12 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.1] text-white mb-4">
              Start building today
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
              Join the next generation of data analysts. Transform any dataset into intelligence.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-black bg-white rounded-lg hover:bg-white/90 transition-all duration-200 hover:-translate-y-px shadow-[0_10px_40px_rgba(255,255,255,0.08)]"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-text-secondary border border-white/[0.1] rounded-lg hover:bg-white/[0.05] hover:text-white transition-all duration-200"
              >
                View Documentation
              </Link>
            </div>
            <p className="text-[13px] text-text-disabled">
              Free forever · No credit card required
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
