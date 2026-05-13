"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, ExternalLink, Globe, MessageCircle, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-20">
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]">
              <span className="text-gradient">Get In Touch</span>
            </h1>
            <p className="mt-4 text-text-secondary text-lg">Have questions? We&apos;d love to hear from you.</p>
          </FadeIn>

          <div className="grid lg:grid-cols-[1fr_380px] gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <FadeIn direction="left">
              <div className="rounded-2xl border border-white/[0.06] bg-bg-tertiary p-8">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16">
                    <div className="w-14 h-14 rounded-xl bg-accent/[0.1] border border-accent/[0.15] flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-7 h-7 text-accent-light" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent</h3>
                    <p className="text-text-secondary">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[12px] font-medium text-text-tertiary uppercase tracking-[0.06em] mb-2 block">Name</label>
                        <input type="text" required placeholder="Your name"
                          className="w-full px-4 py-3 text-sm bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder:text-text-disabled focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all" />
                      </div>
                      <div>
                        <label className="text-[12px] font-medium text-text-tertiary uppercase tracking-[0.06em] mb-2 block">Email</label>
                        <input type="email" required placeholder="you@example.com"
                          className="w-full px-4 py-3 text-sm bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder:text-text-disabled focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[12px] font-medium text-text-tertiary uppercase tracking-[0.06em] mb-2 block">Subject</label>
                      <input type="text" required placeholder="What's this about?"
                        className="w-full px-4 py-3 text-sm bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder:text-text-disabled focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all" />
                    </div>
                    <div>
                      <label className="text-[12px] font-medium text-text-tertiary uppercase tracking-[0.06em] mb-2 block">Message</label>
                      <textarea rows={5} required placeholder="Tell us more..."
                        className="w-full px-4 py-3 text-sm bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder:text-text-disabled focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all resize-none" />
                    </div>
                    <button type="submit"
                      className="w-full py-3 rounded-lg text-sm font-medium text-black bg-white hover:bg-white/90 transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-px">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Info */}
            <FadeIn direction="right">
              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-4 h-4" />, title: "Email", value: "hello@datamind-ai.com" },
                  { icon: <MapPin className="w-4 h-4" />, title: "Location", value: "University Campus, CSE Department" },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-white/[0.06] bg-bg-tertiary p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-accent/[0.08] border border-accent/[0.1] flex items-center justify-center text-accent-light">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[11px] text-text-disabled uppercase tracking-[0.06em]">{item.title}</p>
                        <p className="text-sm text-text-secondary font-medium">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="rounded-xl border border-white/[0.06] bg-bg-tertiary p-5">
                  <p className="text-[11px] font-medium text-text-tertiary uppercase tracking-[0.06em] mb-3">Connect</p>
                  <div className="flex gap-2">
                    {[
                      { icon: <ExternalLink className="w-4 h-4" />, href: "https://github.com/datamind-ai", label: "GitHub" },
                      { icon: <Globe className="w-4 h-4" />, href: "#", label: "Website" },
                      { icon: <MessageCircle className="w-4 h-4" />, href: "#", label: "Chat" },
                    ].map((s, i) => (
                      <a key={i} href={s.href} aria-label={s.label}
                        className="w-9 h-9 rounded-lg border border-white/[0.06] flex items-center justify-center text-text-tertiary hover:text-white hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-200">
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
