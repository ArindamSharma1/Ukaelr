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
        {/* Deep base gradient */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(to bottom, #020617, #001a4d)' }} 
        />
        
        {/* Main Ambient Glow */}
        <motion.div 
          animate={{ opacity: [0.7, 0.9, 0.7], scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(0, 163, 255, 0.25) 0%, rgba(0, 229, 255, 0.15) 35%, rgba(0, 51, 204, 0.05) 60%, transparent 80%)'
          }}
        />

        {/* Lower Depth Glow */}
        <motion.div 
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 80%, rgba(0, 229, 255, 0.15), transparent 60%)'
          }}
        />
        
        {/* Subtle Noise Overlay */}
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
