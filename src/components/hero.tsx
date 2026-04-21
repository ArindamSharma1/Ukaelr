"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full pt-40 pb-20 overflow-hidden flex flex-col items-center justify-center min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-[#03080c] to-[#03080c] -z-10" />
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-gray-300 mb-8"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Multilingual Chat Now Live • <span className="text-white hover:underline cursor-pointer">Get Early Acces <ArrowRight className="inline w-3 h-3" /></span></span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl mb-6"
        >
          Always-On AI Support for a <br className="hidden md:block"/> Global Customer Base
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
        >
          Orbita AI is a global chat assistant that keeps your business in orbit with seamless communication, instant responses, and smarter support across 30+ languages.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-all text-white font-medium w-full sm:w-auto">
            Book a Demo
          </button>
          <button className="px-8 py-3 rounded-full btn-primary text-black font-semibold flex items-center gap-2 w-full sm:w-auto justify-center">
            Get Started Free <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* The glowing planet/globe at the bottom of the hero */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative w-full max-w-5xl h-[40vh] md:h-[60vh] mt-20"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] rounded-full globe-glow blur-3xl opacity-50 -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-full h-full bg-gradient-to-t from-[#03080c] via-transparent to-transparent z-10" />
        <div 
          className="w-[150%] left-[-25%] md:w-[120%] md:left-[-10%] relative h-[200%] border-t border-teal-500/30 rounded-t-[100%] mt-32"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(45,212,191,0.2) 0%, rgba(3,8,12,1) 50%)',
            boxShadow: 'inset 0 20px 50px rgba(45,212,191,0.1)'
          }}
        >
          {/* Faux texture for the planet surface */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://transparenttextures.com/patterns/stardust.png')]" />
        </div>
      </motion.div>

      {/* Logos section - overlapping the dark fade from the globe */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-10 w-full flex flex-col items-center z-20"
      >
        <p className="text-sm text-gray-400 mb-6">Trusted by 500+ Global Teams.</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale">
          {/* using text instead of svg to save space but representing logos */}
          <div className="text-xl font-bold font-sans tracking-tighter">ATLASSIAN</div>
          <div className="text-xl font-semibold flex items-center gap-2">
            <div className="w-4 h-4 grid grid-cols-2 gap-[2px]">
              <div className="bg-white"></div><div className="bg-white"></div>
              <div className="bg-white"></div><div className="bg-white"></div>
            </div>
            Microsoft
          </div>
          <div className="text-xl font-bold flex items-center gap-1">
            <span className="w-5 h-5 flex items-center justify-center border border-white rounded-sm text-xs border-dashed">N</span>
            Notion
          </div>
          <div className="text-xl font-bold italic">shopify</div>
          <div className="text-xl font-bold flex items-center gap-1">
            <span className="w-4 h-4">#</span> slack
          </div>
        </div>
      </motion.div>
    </section>
  )
}
