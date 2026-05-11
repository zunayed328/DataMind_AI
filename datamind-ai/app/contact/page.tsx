"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-20">
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="gradient-text">Get In Touch</span>
            </h1>
            <p className="mt-4 text-white/40 text-lg">Have questions? We&apos;d love to hear from you.</p>
          </FadeIn>

          <div className="grid lg:grid-cols-[1fr_400px] gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <FadeIn direction="left">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16">
                    <span className="text-6xl block mb-4">🎉</span>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/40">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-white/60 mb-1.5 block">Name</label>
                        <input type="text" required placeholder="Your name"
                          className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-white/60 mb-1.5 block">Email</label>
                        <input type="email" required placeholder="you@example.com"
                          className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white/60 mb-1.5 block">Subject</label>
                      <input type="text" required placeholder="What's this about?"
                        className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white/60 mb-1.5 block">Message</label>
                      <textarea rows={5} required placeholder="Tell us more..."
                        className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all resize-none" />
                    </div>
                    <button type="submit"
                      className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Info */}
            <FadeIn direction="right">
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-5 h-5" />, title: "Email", value: "hello@datamind-ai.com" },
                  { icon: <MapPin className="w-5 h-5" />, title: "Location", value: "University Campus, CSE Department" },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-white/30">{item.title}</p>
                        <p className="text-sm text-white/70 font-medium">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <p className="text-sm font-medium text-white/60 mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    {[{ icon: <Github className="w-4 h-4" />, href: "#" }, { icon: <Linkedin className="w-4 h-4" />, href: "#" }, { icon: <Twitter className="w-4 h-4" />, href: "#" }].map((s, i) => (
                      <a key={i} href={s.href} className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all">
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
