export const siteConfig = {
  name: "DataMind AI",
  description:
    "The AI-powered platform that turns any dataset into actionable business intelligence in seconds. Built for modern teams.",
  url: "https://datamind-ai.vercel.app",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/datamind-ai",
    linkedin: "https://linkedin.com/in/datamind-ai",
    twitter: "https://twitter.com/datamind_ai",
  },
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Demo", href: "/demo" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "Tech Stack", href: "/tech-stack" },
  { name: "Docs", href: "/docs" },
  { name: "Research", href: "/research" },
];

export const features = [
  {
    title: "Smart Data Upload",
    description: "CSV, Excel, JSON, PDF — auto-detect and validate with intelligent schema inference.",
  },
  {
    title: "Auto EDA Engine",
    description: "Complete exploratory analysis in 30 seconds. Charts, stats, outliers, and correlations — all automated.",
  },
  {
    title: "Chat With Your Data",
    description: "Ask questions in plain English. Powered by LangChain and GPT-4 for natural language queries.",
  },
  {
    title: "AutoML Pipeline",
    description: "Trains 5+ models simultaneously. Selects the best performer. Makes accurate predictions instantly.",
  },
  {
    title: "RAG Documents",
    description: "Upload PDFs, chat with them. FAISS vector database powers semantic search across your documents.",
  },
  {
    title: "AI Report Generator",
    description: "LLM writes executive summaries with key findings. Professional PDF export, ready to share.",
  },
  {
    title: "Time Series Forecast",
    description: "Prophet model predicts trends with confidence intervals. Interactive charts for temporal data.",
  },
  {
    title: "Cloud Deployment",
    description: "Docker + AWS + CI/CD. Production-ready infrastructure configured out of the box.",
  },
];

export const problems = [
  {
    title: "Manual analysis takes days",
    description: "Data scientists spend 80% of their time on repetitive cleaning and analysis tasks.",
    stat: "80% time wasted",
  },
  {
    title: "Technical skill barrier",
    description: "73% of business users can't analyze data without developer assistance.",
    stat: "73% blocked",
  },
  {
    title: "Fragmented tools",
    description: "Teams juggle 5+ different tools just to complete a single analysis workflow.",
    stat: "5+ tools needed",
  },
  {
    title: "ML deployment complexity",
    description: "Getting models to production requires weeks of DevOps and infrastructure work.",
    stat: "Weeks of setup",
  },
];

export const solutions = [
  {
    title: "AI analyzes in seconds",
    description: "Complete exploratory data analysis generated automatically in under 30 seconds.",
    benefit: "960x faster",
  },
  {
    title: "Talk to your data",
    description: "Ask questions in plain English and get instant, accurate answers from your data.",
    benefit: "Zero coding",
  },
  {
    title: "All-in-one platform",
    description: "Upload, analyze, predict, and report — everything in a single unified platform.",
    benefit: "One tool",
  },
  {
    title: "One-click deployment",
    description: "Docker containers + AWS infrastructure, ready for production in minutes.",
    benefit: "Minutes, not weeks",
  },
];

export const roadmapPhases = [
  {
    phase: 1,
    months: "Month 1–2",
    title: "Foundation",
    items: [
      "Python & ML mastery",
      "Docker deep dive",
      "FastAPI backend",
      "LLM fundamentals",
      "AWS cloud setup",
    ],
    progress: 100,
    status: "Complete",
  },
  {
    phase: 2,
    months: "Month 3–6",
    title: "Core Build",
    items: [
      "Smart data upload",
      "Auto EDA engine",
      "LLM integration",
      "ML auto-pipeline",
      "Data chat system",
      "Dashboard UI",
    ],
    progress: 100,
    status: "Complete",
  },
  {
    phase: 3,
    months: "Month 7–8",
    title: "Advanced AI",
    items: [
      "RAG system",
      "Time series forecast",
      "Anomaly detection",
      "Docker production",
      "CI/CD pipeline",
      "Monitoring setup",
    ],
    progress: 100,
    status: "Complete",
  },
  {
    phase: 4,
    months: "Month 9",
    title: "Polish",
    items: [
      "Unit testing (pytest)",
      "Load testing (Locust)",
      "Research paper",
      "Full documentation",
      "Security audit",
    ],
    progress: 90,
    status: "In progress",
  },
  {
    phase: 5,
    months: "Month 10",
    title: "Launch",
    items: [
      "AWS production deploy",
      "Custom domain + HTTPS",
      "Demo video recording",
      "Final presentation",
      "Job applications",
    ],
    progress: 60,
    status: "Upcoming",
  },
];

export const techStacks = [
  {
    title: "AI & LLM Stack",
    techs: [
      "LangChain",
      "GPT-4",
      "HuggingFace",
      "LLaMA 2",
      "FAISS",
      "Prompt Eng.",
      "LangGraph",
      "spaCy",
      "Embeddings",
    ],
  },
  {
    title: "Data Science & ML",
    techs: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "TensorFlow",
      "PyTorch",
      "Prophet",
      "Plotly",
      "MLflow",
      "ydata-profiling",
    ],
  },
  {
    title: "Cloud & DevOps",
    techs: [
      "Docker",
      "Docker Compose",
      "AWS EC2",
      "AWS S3",
      "GitHub Actions",
      "Nginx",
      "Grafana",
      "Prometheus",
      "Redis",
      "PostgreSQL",
    ],
  },
  {
    title: "Backend & API",
    techs: [
      "FastAPI",
      "Python 3.11",
      "JWT Auth",
      "SQLAlchemy",
      "Celery",
      "WebSockets",
      "Pydantic",
      "Pytest",
      "Alembic",
    ],
  },
];

export const testimonials = [
  {
    name: "Ahmed R.",
    role: "CSE Graduate",
    company: "Now at Google",
    quote:
      "This project helped me land my ML Engineer job at Google. The architecture and AI integration are genuinely top-notch.",
  },
  {
    name: "Dr. Sarah M.",
    role: "Professor",
    company: "Stanford University",
    quote:
      "The best capstone project I've seen in 10 years of teaching. Exceptional engineering and thoughtful design.",
  },
  {
    name: "Michael T.",
    role: "CTO",
    company: "AI Startup",
    quote:
      "DataMind AI saved our startup 3 months of development time. We integrated it directly into our pipeline.",
  },
];

export const performanceMetrics = [
  {
    value: 5,
    unit: "sec",
    label: "File Upload",
    comparison: "10x faster than traditional tools",
    prefix: "<",
  },
  {
    value: 30,
    unit: "sec",
    label: "EDA Generation",
    comparison: "960x faster than manual analysis",
    prefix: "<",
  },
  {
    value: 15,
    unit: "sec",
    label: "AI Insights",
    comparison: "Instant business intelligence",
    prefix: "<",
  },
  {
    value: 5,
    unit: "min",
    label: "ML Training",
    comparison: "Auto-optimized models",
    prefix: "<",
  },
  {
    value: 5,
    unit: "sec",
    label: "Chat Response",
    comparison: "Real-time conversation",
    prefix: "<",
  },
  {
    value: 50,
    unit: "+",
    label: "Concurrent Users",
    comparison: "Scalable architecture",
    prefix: "",
  },
];

export const careerRoles = [
  {
    title: "LLM Engineer",
    salary: "$110K – $150K",
    demand: "Very High",
    skills: ["LangChain", "GPT-4", "RAG", "Prompt Engineering"],
  },
  {
    title: "ML Engineer",
    salary: "$90K – $130K",
    demand: "Very High",
    skills: ["Scikit-learn", "TensorFlow", "MLOps", "Python"],
  },
  {
    title: "Data Scientist",
    salary: "$85K – $120K",
    demand: "High",
    skills: ["Pandas", "Statistics", "ML", "Visualization"],
  },
  {
    title: "AI Cloud Engineer",
    salary: "$95K – $135K",
    demand: "Very High",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "Backend AI Dev",
    salary: "$85K – $120K",
    demand: "High",
    skills: ["FastAPI", "PostgreSQL", "Redis", "WebSockets"],
  },
  {
    title: "AI Research Eng",
    salary: "$120K – $180K",
    demand: "Very High",
    skills: ["PyTorch", "NLP", "Transformers", "Research"],
  },
];

export const demoDatasets = [
  {
    id: "ecommerce",
    name: "E-commerce Sales",
    rows: 500,
    columns: 8,
    description: "Online retail transaction data",
  },
  {
    id: "healthcare",
    name: "Healthcare Patients",
    rows: 300,
    columns: 12,
    description: "Patient health records",
  },
  {
    id: "financial",
    name: "Financial Transactions",
    rows: 1000,
    columns: 10,
    description: "Banking transaction logs",
  },
  {
    id: "hr",
    name: "HR Employee Data",
    rows: 250,
    columns: 9,
    description: "Employee performance data",
  },
  {
    id: "cars",
    name: "Car Sales Dataset",
    rows: 400,
    columns: 7,
    description: "Automotive sales records",
  },
];
