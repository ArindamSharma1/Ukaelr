"use client"

import Hero from "@/components/hero";
import Benefits from "@/components/benefits";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Metrics from "@/components/metrics";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      {/* Seamless Global Background System */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(to bottom, #2E3665, #3C467B)' }} 
        />
        
        <motion.div 
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(99, 108, 203, 0.15) 0%, rgba(110, 140, 251, 0.08) 35%, rgba(80, 88, 156, 0.04) 60%, transparent 80%)'
          }}
        />

        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 80%, rgba(110, 140, 251, 0.1), transparent 60%)'
          }}
        />
        
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://transparenttextures.com/patterns/stardust.png')]" />
      </div>

      <Hero />
      <Benefits />
      <HowItWorks />
      <Features />
      <Metrics />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
