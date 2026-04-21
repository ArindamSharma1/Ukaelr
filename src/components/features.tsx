"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-6 uppercase tracking-wider">
            What You Get
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Your Global Support, Simplified
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            We built Orbita AI to be the global communication partner your business deserves—intelligent, reliable, and always there to keep you in orbit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Top Left Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-end min-h-[400px] relative overflow-hidden group border border-white/5"
          >
            {/* Background graphic */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1018] to-[#111827] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-full h-[300px] -z-10">
              <div className="absolute inset-0 border border-white/10 rounded-full scale-[0.6] opacity-30" />
              <div className="absolute inset-0 border border-white/10 rounded-full scale-[0.8] opacity-20" />
              <div className="absolute inset-0 border border-white/10 rounded-full scale-[1.0] opacity-10" />
              
              {/* Pseudo flags */}
              <div className="absolute top-[20%] left-[30%] w-6 h-6 rounded-full bg-red-500/80 shadow-md" />
              <div className="absolute top-[40%] right-[20%] w-6 h-6 rounded-full bg-blue-500/80 shadow-md" />
              <div className="absolute bottom-[20%] left-[40%] w-6 h-6 rounded-full bg-yellow-500/80 shadow-md" />
              <div className="absolute bottom-[40%] right-[30%] w-6 h-6 rounded-full bg-green-500/80 shadow-md" />

              {/* Center Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#1a2332] rounded-2xl flex items-center justify-center border border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-500">
                <div className="w-8 h-8 rounded bg-white/20" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-white mb-2">30+ Languages, Real-Time Translation.</h3>
              <p className="text-gray-400">Orbita AI understands context, tone, and cultural nuances. Conversations flow naturally—No awkward & no lost meaning.</p>
            </div>
          </motion.div>

          {/* Top Right Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-end min-h-[400px] relative overflow-hidden group border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1018] to-[#111827] -z-10" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[120%] h-[150px] bg-gradient-to-r from-emerald-500/20 via-teal-400/10 to-amber-500/20 blur-2xl -z-10" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] flex items-center justify-center gap-8 -z-10 w-full">
              <div className="w-14 h-14 rounded-2xl bg-[#1a2332] flex items-center justify-center border border-white/10 opacity-70">
                <div className="w-6 h-6 rounded-full border-2 border-amber-300 relative before:absolute before:inset-0 before:-m-1 before:border before:border-dashed before:border-amber-300 before:rounded-full before:animate-spin-slow" />
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-white/50" />
                  <ArrowRight className="w-3 h-3 text-white/50 rotate-180" />
                </div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#1a2332] flex items-center justify-center border border-white/10 opacity-70">
                <div className="w-6 h-6 rounded-full rounded-tr-none border-2 border-indigo-300 rotate-45" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-white mb-2">24/7 Automation That Actually Works</h3>
              <p className="text-gray-400">Your customers get instant responses anytime, anywhere. No waiting. No gaps. Orbita AI learns from every conversation to get smarter.</p>
            </div>
          </motion.div>

          {/* Bottom Full Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between min-h-[350px] relative overflow-hidden group border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1018] to-[#111827] -z-10" />
            
            <div className="md:w-1/2 z-10 mb-8 md:mb-0">
              <h3 className="text-3xl font-medium text-white mb-4">Seamlessly Integrate &<br/>Works on Your Channels</h3>
              <p className="text-gray-400 mb-8 max-w-md">Website chat. WhatsApp. Slack. Messenger. Facebook. Orbita AI syncs seamlessly with tools your team already uses.</p>
              
              <div className="flex items-center gap-4">
                <button className="px-6 py-2.5 rounded-full border border-white/20 text-sm hover:bg-white/5 transition-colors text-white">
                  Book a Demo
                </button>
                <button className="px-6 py-2.5 rounded-full btn-primary text-black text-sm flex items-center gap-2 font-medium">
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Faux isometric grid of app icons */}
            <div className="md:w-1/2 relative h-[250px] w-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 blur-3xl rounded-full" />
              <div className="grid grid-cols-4 gap-4 transform rotate-[-10deg] scale-110 md:scale-125 opacity-80 group-hover:scale-[1.3] transition-transform duration-700">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${i % 2 === 0 ? 'bg-[#1877F2]' : i % 3 === 0 ? 'bg-[#25D366]' : i % 5 === 0 ? 'bg-[#FF0000]' : 'bg-[#1a2332] border border-white/10 hover:bg-white/10'}`}>
                     <div className="w-6 h-6 bg-white/20 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
