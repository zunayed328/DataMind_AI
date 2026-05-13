"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { demoDatasets } from "@/lib/constants";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Check, Loader2, Database, ShoppingCart, Heart, DollarSign, Users, Car, Sparkles } from "lucide-react";

const datasetIcons: Record<string, React.ElementType> = {
  ecommerce: ShoppingCart, healthcare: Heart, financial: DollarSign, hr: Users, cars: Car,
};
const datasetColors: Record<string, string> = {
  ecommerce: "text-violet-400 bg-violet-500/[0.1] border-violet-500/[0.15]",
  healthcare: "text-rose-400 bg-rose-500/[0.1] border-rose-500/[0.15]",
  financial: "text-emerald-400 bg-emerald-500/[0.1] border-emerald-500/[0.15]",
  hr: "text-cyan-400 bg-cyan-500/[0.1] border-cyan-500/[0.15]",
  cars: "text-amber-400 bg-amber-500/[0.1] border-amber-500/[0.15]",
};

const barData = [
  { name: "Electronics", value: 4200 }, { name: "Clothing", value: 3100 },
  { name: "Food", value: 2800 }, { name: "Books", value: 1900 },
  { name: "Sports", value: 2400 }, { name: "Home", value: 3500 },
];
const lineData = [
  { month: "Jan", value: 2400 }, { month: "Feb", value: 3200 },
  { month: "Mar", value: 2900 }, { month: "Apr", value: 3800 },
  { month: "May", value: 4100 }, { month: "Jun", value: 3600 },
];
const pieData = [
  { name: "Online", value: 45 }, { name: "Retail", value: 30 }, { name: "Wholesale", value: 25 },
];
const COLORS = ["#7C3AED", "#06B6D4", "#10B981"];

const insights = [
  { title: "Revenue Trend Detected", importance: "HIGH", desc: "Revenue shows a 23.4% upward trend over the past quarter, primarily driven by electronics category." },
  { title: "Customer Segmentation", importance: "HIGH", desc: "Three distinct customer segments identified with unique purchasing patterns." },
  { title: "Seasonal Pattern", importance: "MEDIUM", desc: "Sales peak in Q4 with 40% higher volume compared to Q1-Q3 average." },
  { title: "Anomaly Detected", importance: "MEDIUM", desc: "Unusual spike in returns for electronics category during March." },
  { title: "Optimization Opportunity", importance: "LOW", desc: "Cross-selling books with electronics could increase basket size by 15%." },
];

const steps = ["Loading dataset...", "Running EDA...", "Generating charts...", "AI analyzing insights...", "Analysis complete!"];

const tooltipStyle = {
  background: "#0E0E16", border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12, fontSize: 12, color: "#F5F5F7", boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
};

export function DemoSection() {
  const [selectedDataset, setSelectedDataset] = useState("");
  const [options, setOptions] = useState({ eda: true, insights: true, anomalies: true, correlation: true, ml: false, timeseries: false });
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [done, setDone] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const runAnalysis = () => {
    if (!selectedDataset) return;
    setLoading(true); setDone(false); setCurrentStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= steps.length) { clearInterval(interval); setLoading(false); setDone(true); setCurrentStep(-1); }
      else setCurrentStep(step);
    }, 800);
  };

  const dataset = demoDatasets.find(d => d.id === selectedDataset);
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "insights", label: "AI Insights" },
    { id: "charts", label: "Charts" },
    { id: "quality", label: "Data Quality" },
  ];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden" id="demo">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="aurora-blob aurora-blob-violet w-[600px] h-[500px] top-[10%] left-[-200px] opacity-25" />
      <div className="aurora-blob aurora-blob-cyan w-[500px] h-[400px] bottom-[10%] right-[-200px] opacity-20" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="badge-accent text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full inline-block mb-6">
            Interactive Demo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient">See it in action</span>
          </h2>
          <p className="mt-5 text-text-secondary text-lg">Interactive demo. No signup required.</p>
        </FadeIn>

        <div className="grid lg:grid-cols-[380px_1fr] gap-5">
          {/* Controls */}
          <FadeIn direction="left">
            <div className="card-premium p-6 space-y-6">
              {/* Steps */}
              <div className="flex items-center gap-3 mb-2">
                {[1, 2, 3].map((n, i) => (
                  <div key={n} className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold border transition-all duration-300 ${
                      (i === 0 && selectedDataset) || (i === 1 && selectedDataset) || (i === 2 && done)
                        ? "bg-accent/20 border-accent/30 text-accent-light shadow-[0_0_10px_rgba(124,58,237,0.15)]"
                        : "bg-white/[0.03] border-white/[0.08] text-text-disabled"
                    }`}>{n}</div>
                    {i < 2 && <div className="w-6 h-px bg-white/[0.06]" />}
                  </div>
                ))}
              </div>

              <div>
                <label className="text-[11px] font-bold text-text-tertiary uppercase tracking-[0.1em] mb-3 block">Select Dataset</label>
                <div className="space-y-2">
                  {demoDatasets.map(ds => {
                    const Icon = datasetIcons[ds.id] || Database;
                    const colors = datasetColors[ds.id] || "text-text-tertiary bg-white/[0.04] border-white/[0.06]";
                    return (
                      <button key={ds.id} onClick={() => setSelectedDataset(ds.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-300 ${
                          selectedDataset === ds.id
                            ? "border-accent/30 bg-accent/[0.06] text-white shadow-[0_0_15px_rgba(124,58,237,0.08)]"
                            : "border-white/[0.05] bg-white/[0.02] text-text-secondary hover:border-white/[0.1] hover:bg-white/[0.04]"
                        }`}>
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                          selectedDataset === ds.id ? "bg-accent/20 border-accent/20" : colors
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold truncate">{ds.name}</p>
                          <p className="text-[11px] text-text-disabled">{ds.description}</p>
                        </div>
                        <span className="text-[11px] px-2 py-0.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-text-disabled font-semibold">{ds.rows}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-text-tertiary uppercase tracking-[0.1em] mb-3 block">Analysis Options</label>
                <div className="space-y-0.5">
                  {Object.entries(options).map(([key, val]) => (
                    <label key={key} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.03] cursor-pointer transition-colors">
                      <input type="checkbox" checked={val} onChange={() => setOptions(p => ({ ...p, [key]: !p[key as keyof typeof options] }))}
                        className="w-4 h-4 rounded border-white/20 bg-white/[0.03] accent-accent" />
                      <span className="text-sm text-text-secondary font-medium">
                        {key === "eda" ? "Auto EDA" : key === "ml" ? "ML Prediction" : key === "timeseries" ? "Time Series" : key === "insights" ? "Generate AI Insights" : key === "anomalies" ? "Detect Anomalies" : "Correlation Analysis"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button onClick={runAnalysis} disabled={!selectedDataset || loading}
                className="w-full py-3.5 rounded-xl text-sm font-semibold btn-primary disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" />Analyzing...</> : <><Sparkles className="w-4 h-4" />Run Analysis</>}
              </button>
            </div>
          </FadeIn>

          {/* Results */}
          <FadeIn direction="right">
            <div className="card-premium p-6 min-h-[500px]">
              <AnimatePresence mode="wait">
                {!done && !loading && (
                  <motion.div key="placeholder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20">
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-5">
                      <Database className="w-7 h-7 text-text-disabled" />
                    </div>
                    <p className="text-base text-text-tertiary font-medium">Select a dataset and run analysis</p>
                    <p className="text-sm text-text-disabled mt-1">Results will appear here</p>
                  </motion.div>
                )}
                {loading && (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-16 space-y-3">
                    {steps.map((step, i) => (
                      <div key={i} className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${i <= currentStep ? "bg-white/[0.03] border border-white/[0.05]" : "opacity-30"}`}>
                        {i < currentStep ? <Check className="w-4 h-4 text-emerald-400" /> : i === currentStep ? <Loader2 className="w-4 h-4 text-accent animate-spin" /> : <div className="w-4 h-4 rounded-full border border-white/[0.1]" />}
                        <span className={`text-sm font-medium ${i <= currentStep ? "text-text-secondary" : "text-text-disabled"}`}>{step}</span>
                        {i <= currentStep && <div className="flex-1"><div className="h-1.5 rounded-full bg-white/[0.03] overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.5 }} className="h-full rounded-full bg-gradient-to-r from-accent/50 to-accent-cyan/30" /></div></div>}
                      </div>
                    ))}
                  </motion.div>
                )}
                {done && (
                  <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="flex gap-1 mb-6 bg-white/[0.02] rounded-xl p-1 overflow-x-auto border border-white/[0.04]">
                      {tabs.map(tab => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                          className={`relative px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-all whitespace-nowrap ${activeTab === tab.id ? "text-white" : "text-text-tertiary hover:text-text-secondary"}`}>
                          {tab.label}
                          {activeTab === tab.id && (
                            <motion.div layoutId="demo-tab" className="absolute inset-0 rounded-lg bg-accent/[0.1] border border-accent/[0.15]" transition={{ type: "spring", stiffness: 350, damping: 30 }} />
                          )}
                        </button>
                      ))}
                    </div>
                    <AnimatePresence mode="wait">
                      {activeTab === "overview" && (
                        <motion.div key="ov" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                            {[{ l: "Total Rows", v: dataset?.rows || 500 }, { l: "Columns", v: dataset?.columns || 8 }, { l: "Missing", v: "2.3%" }, { l: "Duplicates", v: "0" }, { l: "Quality", v: "94/100" }, { l: "Memory", v: "48KB" }].map(m => (
                              <div key={m.l} className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 hover:border-white/[0.1] transition-colors">
                                <p className="text-[10px] text-text-disabled uppercase tracking-[0.08em] font-semibold">{m.l}</p>
                                <p className="text-xl font-bold text-white mt-1">{m.v}</p>
                              </div>
                            ))}
                          </div>
                          <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-5">
                            <p className="text-sm font-semibold text-text-secondary mb-4">Data Quality Score</p>
                            <div className="flex items-center gap-5">
                              <div className="relative w-20 h-20">
                                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
                                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="3" />
                                  <motion.path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="url(#qualityGrad)" strokeWidth="3" strokeLinecap="round" initial={{ strokeDasharray: "0, 100" }} animate={{ strokeDasharray: "94, 100" }} transition={{ duration: 1.5, delay: 0.3 }} />
                                  <defs><linearGradient id="qualityGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#7C3AED" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient></defs>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center"><span className="text-sm font-bold text-white">94</span></div>
                              </div>
                              <div><p className="text-sm text-accent-light font-semibold">Excellent Quality</p><p className="text-[12px] text-text-disabled">Your dataset is clean and ready</p></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      {activeTab === "insights" && (
                        <motion.div key="ins" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-3">
                          {insights.map((ins, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                              className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300">
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-accent/[0.1] border border-accent/[0.12] flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-[11px] font-bold text-accent-light">{i + 1}</span>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="text-sm font-bold text-white">{ins.title}</h4>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold border ${
                                      ins.importance === "HIGH" ? "bg-accent/[0.08] text-accent-light border-accent/[0.15]" :
                                      ins.importance === "MEDIUM" ? "bg-amber-500/[0.08] text-amber-400 border-amber-500/[0.12]" :
                                      "bg-white/[0.03] text-text-tertiary border-white/[0.06]"
                                    }`}>{ins.importance}</span>
                                  </div>
                                  <p className="text-[12px] text-text-secondary leading-relaxed">{ins.desc}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                      {activeTab === "charts" && (
                        <motion.div key="ch" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-5">
                          <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-5">
                            <p className="text-sm font-semibold text-text-secondary mb-4">Sales by Category</p>
                            <ResponsiveContainer width="100%" height={200}>
                              <BarChart data={barData}><XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} /><YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} /><Tooltip contentStyle={tooltipStyle} /><Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#7C3AED" fillOpacity={0.7} /></BarChart>
                            </ResponsiveContainer>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-5">
                              <p className="text-sm font-semibold text-text-secondary mb-4">Monthly Trend</p>
                              <ResponsiveContainer width="100%" height={160}>
                                <LineChart data={lineData}><XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} /><YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} /><Tooltip contentStyle={tooltipStyle} /><Line type="monotone" dataKey="value" stroke="#7C3AED" strokeWidth={2} dot={{ fill: "#7C3AED", r: 3 }} /></LineChart>
                              </ResponsiveContainer>
                            </div>
                            <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-5">
                              <p className="text-sm font-semibold text-text-secondary mb-4">Distribution</p>
                              <ResponsiveContainer width="100%" height={160}>
                                <PieChart><Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} dataKey="value" stroke="none">{pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}</Pie><Tooltip contentStyle={tooltipStyle} /></PieChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      {activeTab === "quality" && (
                        <motion.div key="qa" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                          {[{ l: "Completeness", v: 97 }, { l: "Consistency", v: 94 }, { l: "Validity", v: 98 }, { l: "Accuracy", v: 92 }, { l: "Uniqueness", v: 100 }].map((m, i) => (
                            <div key={i} className="space-y-2.5">
                              <div className="flex justify-between text-sm"><span className="text-text-secondary font-medium">{m.l}</span><span className="text-text-tertiary font-semibold">{m.v}%</span></div>
                              <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${m.v}%` }} transition={{ duration: 1, delay: i * 0.12 }} className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent-cyan/40" /></div>
                            </div>
                          ))}
                          <div className="mt-6 space-y-2">
                            {[
                              { severity: "High", text: "12 missing values in revenue column" },
                              { severity: "Medium", text: "3 duplicate records found" },
                              { severity: "Low", text: "2 date format inconsistencies" },
                            ].map((issue, i) => (
                              <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-sm hover:border-white/[0.08] transition-colors">
                                <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold border ${
                                  issue.severity === "High" ? "bg-rose-500/[0.08] text-rose-400 border-rose-500/[0.15]" :
                                  issue.severity === "Medium" ? "bg-amber-500/[0.08] text-amber-400 border-amber-500/[0.12]" :
                                  "bg-white/[0.03] text-text-tertiary border-white/[0.06]"
                                }`}>{issue.severity}</span>
                                <span className="text-text-secondary">{issue.text}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
