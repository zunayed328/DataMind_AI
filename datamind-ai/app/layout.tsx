import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "DataMind AI — LLM-Powered Intelligent Data Analysis Platform",
  description: "Upload any dataset and get AI-powered insights, automated ML predictions, and beautiful reports in seconds. Built with GPT-4, LangChain, and AutoML.",
  keywords: ["AI", "data analysis", "machine learning", "LLM", "GPT-4", "AutoML", "data science"],
  authors: [{ name: "DataMind AI Team" }],
  openGraph: {
    title: "DataMind AI — LLM-Powered Intelligent Data Analysis Platform",
    description: "Upload any dataset and get AI-powered insights, automated ML predictions, and beautiful reports in seconds.",
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
      <body className="min-h-screen bg-[hsl(220,20%,3%)] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
