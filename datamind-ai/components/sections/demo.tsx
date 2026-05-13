"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { demoDatasets } from "@/lib/constants";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Check, Loader2, Database, ShoppingCart, Heart, DollarSign, Users, Car } from "lucide-react";

const datasetIcons: Record<string, React.ElementType> = {
  ecommerce: ShoppingCart,
  healthcare: Heart,
  financial: DollarSign,
  hr: Users,
  cars: Car,
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
  { name: "Online", value: 45 }, { name: "Retail", value: 30 },
  { name: "Wholesale", value: 25 },
];
const COLORS = ["#6366F1", "#818CF8", "#06B6D4"];

const insights = [
  { title: "Revenue Trend Detected", importance: "HIGH", desc: "Revenue shows a 23.4% upward trend over the past quarter, primarily driven by electronics category." },
  { title: "Customer Segmentation", importance: "HIGH", desc: "Three distinct customer segments identified with unique purchasing patterns." },
  { title: "Seasonal Pattern", importance: "MEDIUM", desc: "Sales peak in Q4 with 40% higher volume compared to Q1-Q3 average." },
  { title: "Anomaly Detected", importance: "MEDIUM", desc: "Unusual spike in returns for electronics category during March." },
  { title: "Optimization Opportunity", importance: "LOW", desc: "Cross-selling books with electronics could increase basket size by 15%." },
];

const steps = ["Loading dataset...", "Running EDA...", "Generating charts...", "AI analyzing insights...", "Analysis complete!"];

const tooltipStyle = {
  background: "#15151F",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 8,
  fontSize: 12,
  color: "#FAFAFA",
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
    <section className="relative py-24 sm:py-32 overflow-hidden" id="demo">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]">
            <span className="text-gradient">See it in action</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">Interactive demo. No signup required.</p>
        </FadeIn>

        <div className="grid lg:grid-cols-[380px_1fr] gap-6">
          {/* Controls */}
          <FadeIn direction="left">
            <div className="rounded-2xl border border-white/[0.06] bg-bg-tertiary p-6 space-y-6">
              {/* Step indicators */}
              <div className="flex items-center gap-3 mb-2">
                {[1, 2, 3].map((n, i) => (
                  <div key={n} className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-medium border transition-colors ${
                      (i === 0 && selectedDataset) || (i === 1 && selectedDataset) || (i === 2 && done)
                        ? "bg-accent/20 border-accent/30 text-accent-light"
                        : "bg-white/[0.03] border-white/[0.08] text-text-disabled"
                    }`}>
                      {n}
                    </div>
                    {i < 2 && <div className="w-6 h-px bg-white/[0.06]" />}
                  </div>
                ))}
              </div>

              <div>
                <label className="text-[12px] font-medium text-text-tertiary uppercase tracking-[0.06em] mb-3 block">Select Dataset</label>
                <div className="space-y-2">
                  {demoDatasets.map(ds => {
                    const Icon = datasetIcons[ds.id] || Database;
                    return (
                      <button key={ds.id} onClick={() => setSelectedDataset(ds.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-200 ${
                          selectedDataset === ds.id
                            ? "border-accent/30 bg-accent/[0.06] text-white"
                            : "border-white/[0.06] bg-white/[0.02] text-text-secondary hover:border-white/[0.1] hover:bg-white/[0.04]"
                        }`}>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          selectedDataset === ds.id ? "bg-accent/20" : "bg-white/[0.04]"
                        }`}>
                          <Icon className={`w-4 h-4 ${selectedDataset === ds.id ? "text-accent-light" : "text-text-tertiary"}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{ds.name}</p>
                          <p className="text-[11px] text-text-disabled">{ds.description}</p>
                        </div>
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-text-disabled">{ds.rows}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-[12px] font-medium text-text-tertiary uppercase tracking-[0.06em] mb-3 block">Analysis Options</label>
                <div className="space-y-1">
                  {Object.entries(options).map(([key, val]) => (
                    <label key={key} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.03] cursor-pointer transition-colors">
                      <input type="checkbox" checked={val} onChange={() => setOptions(p => ({ ...p, [key]: !p[key as keyof typeof options] }))}
                        className="w-4 h-4 rounded border-white/20 bg-white/[0.03] accent-accent" />
                      <span className="text-sm text-text-secondary">{key === "eda" ? "Auto EDA" : key === "ml" ? "ML Prediction" : key === "timeseries" ? "Time Series" : key === "insights" ? "Generate AI Insights" : key === "anomalies" ? "Detect Anomalies" : "Correlation Analysis"}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button onClick={runAnalysis} disabled={!selectedDataset || loading}
                className="w-full py-3 rounded-xl text-sm font-medium text-black bg-white hover:bg-white/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin text-black" />Analyzing...</> : "Run Analysis"}
              </button>
            </div>
          </FadeIn>

          {/* Results */}
          <FadeIn direction="right">
            <div className="rounded-2xl border border-white/[0.06] bg-bg-tertiary p-6 min-h-[500px]">
              <AnimatePresence mode="wait">
                {!done && !loading && (
                  <motion.div key="placeholder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20">
                    <Database className="w-10 h-10 text-text-disabled mb-4" />
                    <p className="text-base text-text-tertiary">Select a dataset and run analysis</p>
                    <p className="text-sm text-text-disabled mt-1">Results will appear here</p>
                  </motion.div>
                )}
                {loading && (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-16 space-y-3">
                    {steps.map((step, i) => (
                      <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${i <= currentStep ? "bg-white/[0.03]" : "opacity-30"}`}>
                        {i < currentStep ? <Check className="w-4 h-4 text-accent-light" /> : i === currentStep ? <Loader2 className="w-4 h-4 text-accent animate-spin" /> : <div className="w-4 h-4 rounded-full border border-white/[0.1]" />}
                        <span className={`text-sm ${i <= currentStep ? "text-text-secondary" : "text-text-disabled"}`}>{step}</span>
                        {i <= currentStep && <div className="flex-1"><div className="h-1 rounded-full bg-white/[0.03]"><motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.5 }} className="h-full rounded-full bg-accent/40" /></div></div>}
                      </div>
                    ))}
                  </motion.div>
                )}
                {done && (
                  <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="flex gap-1 mb-6 bg-white/[0.02] rounded-lg p-1 overflow-x-auto">
                      {tabs.map(tab => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                          className={`relative px-4 py-2 rounded-md text-[13px] font-medium transition-all whitespace-nowrap ${activeTab === tab.id ? "text-white" : "text-text-tertiary hover:text-text-secondary"}`}>
                          {tab.label}
                          {activeTab === tab.id && (
                            <motion.div layoutId="demo-tab" className="absolute inset-0 rounded-md bg-white/[0.06]" transition={{ type: "spring", stiffness: 350, damping: 30 }} />
                          )}
                        </button>
                      ))}
                    </div>
                    <AnimatePresence mode="wait">
                      {activeTab === "overview" && (
                        <motion.div key="ov" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                            {[{ l: "Total Rows", v: dataset?.rows || 500 }, { l: "Columns", v: dataset?.columns || 8 }, { l: "Missing", v: "2.3%" }, { l: "Duplicates", v: "0" }, { l: "Quality", v: "94/100" }, { l: "Memory", v: "48KB" }].map(m => (
                              <div key={m.l} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                                <p className="text-[10px] text-text-disabled uppercase tracking-[0.06em]">{m.l}</p>
                                <p className="text-xl font-semibold text-white mt-1">{m.v}</p>
                              </div>
                            ))}
                          </div>
                          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                            <p className="text-sm font-medium text-text-secondary mb-3">Data Quality Score</p>
                            <div className="flex items-center gap-4">
                              <div className="relative w-20 h-20">
                                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
                                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="3" />
                                  <motion.path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" initial={{ strokeDasharray: "0, 100" }} animate={{ strokeDasharray: "94, 100" }} transition={{ duration: 1.5, delay: 0.3 }} />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center"><span className="text-sm font-semibold text-white">94</span></div>
                              </div>
                              <div><p className="text-sm text-accent-light font-medium">Excellent Quality</p><p className="text-[12px] text-text-disabled">Your dataset is clean and ready</p></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      {activeTab === "insights" && (
                        <motion.div key="ins" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-3">
                          {insights.map((ins, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-colors">
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-accent/[0.08] border border-accent/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-[11px] font-bold text-accent-light">{i + 1}</span>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="text-sm font-semibold text-white">{ins.title}</h4>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-md font-medium border ${
                                      ins.importance === "HIGH" ? "bg-accent/[0.08] text-accent-light border-accent/[0.15]" :
                                      ins.importance === "MEDIUM" ? "bg-white/[0.03] text-text-secondary border-white/[0.08]" :
                                      "bg-white/[0.02] text-text-tertiary border-white/[0.06]"
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
                        <motion.div key="ch" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-6">
                          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                            <p className="text-sm font-medium text-text-secondary mb-3">Sales by Category</p>
                            <ResponsiveContainer width="100%" height={200}>
                              <BarChart data={barData}><XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} /><YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} /><Tooltip contentStyle={tooltipStyle} /><Bar dataKey="value" radius={[4, 4, 0, 0]} fill="#6366F1" fillOpacity={0.6} /></BarChart>
                            </ResponsiveContainer>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                              <p className="text-sm font-medium text-text-secondary mb-3">Monthly Trend</p>
                              <ResponsiveContainer width="100%" height={160}>
                                <LineChart data={lineData}><XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} /><YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} /><Tooltip contentStyle={tooltipStyle} /><Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={2} dot={{ fill: "#6366F1", r: 3 }} /></LineChart>
                              </ResponsiveContainer>
                            </div>
                            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                              <p className="text-sm font-medium text-text-secondary mb-3">Distribution</p>
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
                            <div key={i} className="space-y-2">
                              <div className="flex justify-between text-sm"><span className="text-text-secondary">{m.l}</span><span className="text-text-tertiary">{m.v}%</span></div>
                              <div className="h-1.5 rounded-full bg-white/[0.04]"><motion.div initial={{ width: 0 }} animate={{ width: `${m.v}%` }} transition={{ duration: 1, delay: i * 0.12 }} className="h-full rounded-full bg-accent/50" /></div>
                            </div>
                          ))}
                          <div className="mt-6 space-y-2">
                            {[
                              { severity: "High", text: "12 missing values in revenue column" },
                              { severity: "Medium", text: "3 duplicate records found" },
                              { severity: "Low", text: "2 date format inconsistencies" },
                            ].map((issue, i) => (
                              <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-sm">
                                <span className={`text-[10px] px-2 py-0.5 rounded-md font-medium border ${
                                  issue.severity === "High" ? "bg-accent/[0.08] text-accent-light border-accent/[0.15]" :
                                  issue.severity === "Medium" ? "bg-white/[0.04] text-text-secondary border-white/[0.08]" :
                                  "bg-white/[0.02] text-text-tertiary border-white/[0.06]"
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
    </section>
  );
}
