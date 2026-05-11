"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-lg text-white/50 mb-8">
            Start your AI-powered analytics journey today
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link href="/demo"
              className="px-8 py-4 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105">
              🚀 Try Live Demo
            </Link>
            <Link href="/docs"
              className="px-8 py-4 text-sm font-semibold text-white/80 rounded-xl border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-300">
              📚 View Documentation
            </Link>
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white/50 rounded-full border border-white/10 bg-white/5">
            🎉 Free & Open Source
          </span>
        </FadeIn>
      </div>
    </section>
  );
}
