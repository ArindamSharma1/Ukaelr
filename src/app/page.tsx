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
        {/* Warm base */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(to bottom, #F7F3EB, #EDE8DC)' }} 
        />
        
        {/* Subtle Teal Ambient */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(13, 148, 136, 0.06) 0%, rgba(16, 185, 129, 0.04) 35%, rgba(13, 148, 136, 0.02) 60%, transparent 80%)'
          }}
        />

        {/* Lower warm glow */}
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 80%, rgba(232, 114, 58, 0.04), transparent 60%)'
          }}
        />
        
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://transparenttextures.com/patterns/stardust.png')]" />
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
