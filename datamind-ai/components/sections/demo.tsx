"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { demoDatasets } from "@/lib/constants";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Check, Loader2, Sparkles } from "lucide-react";

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
const COLORS = ["#3b82f6", "#8b5cf6", "#10b981"];

const insights = [
  { title: "Revenue Trend Detected", importance: "HIGH", desc: "Revenue shows a 23.4% upward trend over the past quarter, primarily driven by electronics category.", icon: "📈" },
  { title: "Customer Segmentation", importance: "HIGH", desc: "Three distinct customer segments identified with unique purchasing patterns.", icon: "👥" },
  { title: "Seasonal Pattern", importance: "MEDIUM", desc: "Sales peak in Q4 with 40% higher volume compared to Q1-Q3 average.", icon: "📊" },
  { title: "Anomaly Detected", importance: "MEDIUM", desc: "Unusual spike in returns for electronics category during March.", icon: "⚠️" },
  { title: "Optimization Opportunity", importance: "LOW", desc: "Cross-selling books with electronics could increase basket size by 15%.", icon: "💡" },
];

const steps = ["Loading dataset...", "Running EDA...", "Generating charts...", "AI analyzing insights...", "Analysis complete!"];

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
    { id: "overview", label: "📊 Overview" },
    { id: "insights", label: "🤖 AI Insights" },
    { id: "charts", label: "📈 Charts" },
    { id: "quality", label: "⚠️ Data Quality" },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="demo">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[150px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="gradient-text">🎮 Try It Live Right Now</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg">No signup needed. See the AI in action.</p>
        </FadeIn>

        <div className="grid lg:grid-cols-[380px_1fr] gap-6">
          {/* Controls */}
          <FadeIn direction="left">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-6 space-y-6">
              <div>
                <label className="text-sm font-medium text-white/70 mb-3 block">Step 1: Select Dataset</label>
                <div className="space-y-2">
                  {demoDatasets.map(ds => (
                    <button key={ds.id} onClick={() => setSelectedDataset(ds.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-200 ${selectedDataset === ds.id ? "border-blue-500/40 bg-blue-500/10 text-white" : "border-white/[0.06] bg-white/[0.02] text-white/60 hover:border-white/10 hover:bg-white/[0.04]"}`}>
                      <span className="text-xl">{ds.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{ds.name}</p>
                        <p className="text-xs text-white/30">{ds.description}</p>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40">{ds.rows} rows</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-white/70 mb-3 block">Step 2: Analysis Options</label>
                <div className="space-y-2">
                  {Object.entries(options).map(([key, val]) => (
                    <label key={key} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.03] cursor-pointer transition-colors">
                      <input type="checkbox" checked={val} onChange={() => setOptions(p => ({ ...p, [key]: !p[key] }))}
                        className="w-4 h-4 rounded border-white/20 bg-white/5 accent-blue-500" />
                      <span className="text-sm text-white/60 capitalize">{key === "eda" ? "Auto EDA" : key === "ml" ? "ML Prediction" : key === "timeseries" ? "Time Series" : key === "insights" ? "Generate AI Insights" : key === "anomalies" ? "Detect Anomalies" : "Correlation Analysis"}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button onClick={runAnalysis} disabled={!selectedDataset || loading}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" />Analyzing...</> : <><Sparkles className="w-4 h-4" />🚀 Run AI Analysis</>}
              </button>
            </div>
          </FadeIn>

          {/* Results */}
          <FadeIn direction="right">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-6 min-h-[500px]">
              <AnimatePresence mode="wait">
                {!done && !loading && (
                  <motion.div key="placeholder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20">
                    <div className="text-6xl mb-4">👆</div>
                    <p className="text-lg text-white/40">Select a dataset and click Analyze</p>
                    <p className="text-sm text-white/20 mt-2">Results will appear here</p>
                  </motion.div>
                )}
                {loading && (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-16 space-y-4">
                    {steps.map((step, i) => (
                      <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${i <= currentStep ? "bg-white/[0.04]" : "opacity-30"}`}>
                        {i < currentStep ? <Check className="w-4 h-4 text-green-400" /> : i === currentStep ? <Loader2 className="w-4 h-4 text-blue-400 animate-spin" /> : <div className="w-4 h-4 rounded-full border border-white/20" />}
                        <span className={`text-sm ${i <= currentStep ? "text-white/70" : "text-white/30"}`}>{step}</span>
                        {i <= currentStep && <div className="flex-1"><div className="h-1 rounded-full bg-white/5"><motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.6 }} className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" /></div></div>}
                      </div>
                    ))}
                  </motion.div>
                )}
                {done && (
                  <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="flex gap-1 mb-6 bg-white/[0.03] rounded-lg p-1 overflow-x-auto">
                      {tabs.map(tab => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                          className={`px-4 py-2 rounded-md text-xs font-medium transition-all whitespace-nowrap ${activeTab === tab.id ? "bg-white/10 text-white" : "text-white/40 hover:text-white/60"}`}>
                          {tab.label}
                        </button>
                      ))}
                    </div>
                    <AnimatePresence mode="wait">
                      {activeTab === "overview" && (
                        <motion.div key="ov" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                            {[{ l: "Total Rows", v: dataset?.rows || 500 }, { l: "Columns", v: dataset?.columns || 8 }, { l: "Missing", v: "2.3%" }, { l: "Duplicates", v: "0" }, { l: "Quality", v: "94/100" }, { l: "Memory", v: "48KB" }].map(m => (
                              <div key={m.l} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                                <p className="text-[10px] text-white/30 uppercase tracking-wider">{m.l}</p>
                                <p className="text-xl font-bold text-white mt-1">{m.v}</p>
                              </div>
                            ))}
                          </div>
                          <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                            <p className="text-sm font-medium text-white/70 mb-2">Data Quality Score</p>
                            <div className="flex items-center gap-4">
                              <div className="relative w-20 h-20">
                                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
                                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                                  <motion.path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="url(#grad)" strokeWidth="3" strokeLinecap="round" initial={{ strokeDasharray: "0, 100" }} animate={{ strokeDasharray: "94, 100" }} transition={{ duration: 1.5, delay: 0.3 }} />
                                  <defs><linearGradient id="grad"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#8b5cf6" /></linearGradient></defs>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center"><span className="text-sm font-bold text-white">94</span></div>
                              </div>
                              <div><p className="text-sm text-green-400 font-medium">Excellent Quality</p><p className="text-xs text-white/30">Your dataset is clean and ready for analysis</p></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      {activeTab === "insights" && (
                        <motion.div key="ins" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-3">
                          {insights.map((ins, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                              className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 hover:bg-white/[0.05] transition-colors">
                              <div className="flex items-start gap-3">
                                <span className="text-2xl">{ins.icon}</span>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="text-sm font-semibold text-white">{ins.title}</h4>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${ins.importance === "HIGH" ? "bg-red-500/10 text-red-400 border border-red-500/20" : ins.importance === "MEDIUM" ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" : "bg-green-500/10 text-green-400 border border-green-500/20"}`}>{ins.importance}</span>
                                  </div>
                                  <p className="text-xs text-white/40 leading-relaxed">{ins.desc}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                      {activeTab === "charts" && (
                        <motion.div key="ch" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-6">
                          <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                            <p className="text-sm font-medium text-white/60 mb-3">Sales by Category</p>
                            <ResponsiveContainer width="100%" height={200}>
                              <BarChart data={barData}><XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} /><YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} /><Tooltip contentStyle={{ background: "hsl(220,25%,8%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12, color: "#fff" }} /><Bar dataKey="value" radius={[4, 4, 0, 0]} fill="url(#barGrad)" /><defs><linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#8b5cf6" /></linearGradient></defs></BarChart>
                            </ResponsiveContainer>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                              <p className="text-sm font-medium text-white/60 mb-3">Monthly Trend</p>
                              <ResponsiveContainer width="100%" height={160}>
                                <LineChart data={lineData}><XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} /><YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} /><Tooltip contentStyle={{ background: "hsl(220,25%,8%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12, color: "#fff" }} /><Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{ fill: "#3b82f6", r: 3 }} /></LineChart>
                              </ResponsiveContainer>
                            </div>
                            <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                              <p className="text-sm font-medium text-white/60 mb-3">Distribution</p>
                              <ResponsiveContainer width="100%" height={160}>
                                <PieChart><Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} dataKey="value" stroke="none">{pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}</Pie><Tooltip contentStyle={{ background: "hsl(220,25%,8%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12, color: "#fff" }} /></PieChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      {activeTab === "quality" && (
                        <motion.div key="qa" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                          {[{ l: "Completeness", v: 97 }, { l: "Consistency", v: 94 }, { l: "Validity", v: 98 }, { l: "Accuracy", v: 92 }, { l: "Uniqueness", v: 100 }].map((m, i) => (
                            <div key={i} className="space-y-1.5">
                              <div className="flex justify-between text-sm"><span className="text-white/60">{m.l}</span><span className="text-white/40">{m.v}%</span></div>
                              <div className="h-2 rounded-full bg-white/5"><motion.div initial={{ width: 0 }} animate={{ width: `${m.v}%` }} transition={{ duration: 1, delay: i * 0.15 }} className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" /></div>
                            </div>
                          ))}
                          <div className="mt-6 space-y-2">
                            {[{ s: "🔴", t: "HIGH: 12 missing values in revenue column" }, { s: "🟡", t: "MEDIUM: 3 duplicate records found" }, { s: "🟢", t: "LOW: 2 date format inconsistencies" }].map((issue, i) => (
                              <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] text-sm"><span>{issue.s}</span><span className="text-white/50">{issue.t}</span></div>
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
