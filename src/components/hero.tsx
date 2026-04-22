"use client"

import { motion } from "framer-motion"
import { ArrowRight, Factory } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full pt-40 pb-20 overflow-hidden flex flex-col items-center justify-center min-h-screen">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#636CCB]/20 bg-[#636CCB]/10 backdrop-blur-sm text-sm text-[#A8B0D8] mb-8"
        >
          <Factory className="w-4 h-4 text-[#6E8CFB]" />
          <span>Engineering Excellence • <span className="text-[#E0E4FF] hover:underline cursor-pointer font-medium">Explore Our Work <ArrowRight className="inline w-3 h-3" /></span></span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight max-w-5xl mb-6 text-[#E0E4FF]"
        >
          Building India&apos;s Industrial <br className="hidden md:block"/>Future, One Venture at a Time
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-[#A8B0D8] max-w-2xl mb-10"
        >
          Ukaelr (OPC) Private Limited specializes in plant machinery, industrial infrastructure, scientific research, and intellectual property — powering enterprises with precision engineering and strategic innovation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="px-8 py-3 rounded-full border border-[#636CCB]/30 hover:bg-[#636CCB]/15 transition-all text-[#E0E4FF] font-medium w-full sm:w-auto">
            Our Services
          </button>
          <button className="px-8 py-3 rounded-full btn-primary font-semibold flex items-center gap-2 w-full sm:w-auto justify-center">
            Contact Us <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-10 w-full flex flex-col items-center z-20"
      >
        <p className="text-sm text-[#7A82B0] mb-6">Core Industrial Verticals</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {["Plant Machinery", "Infrastructure", "R&D", "Patents & IP", "Factory Management"].map(v => (
            <div key={v} className="text-sm font-medium tracking-wider uppercase text-[#A8B0D8] px-4 py-2 rounded-full border border-[#636CCB]/15 bg-[#636CCB]/8">{v}</div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
