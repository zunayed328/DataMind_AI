import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "DataMind AI — Intelligent Data Analysis Platform",
  description: "Transform any dataset into actionable business intelligence in seconds. AI-powered insights, automated ML predictions, and beautiful reports.",
  keywords: ["AI", "data analysis", "machine learning", "LLM", "GPT-4", "AutoML", "data science"],
  authors: [{ name: "DataMind AI Team" }],
  openGraph: {
    title: "DataMind AI — Intelligent Data Analysis Platform",
    description: "Transform any dataset into actionable business intelligence in seconds.",
    type: "website",
    url: "https://datamind-ai.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataMind AI — Intelligent Data Analysis",
    description: "AI-powered data analysis platform with GPT-4 and AutoML",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
