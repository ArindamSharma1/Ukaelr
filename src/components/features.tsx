"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Features() {
  return (
    <section id="capabilities" className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-6 uppercase tracking-wider">
            Our Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Engineered for Scale & Precision
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Every capability at Ukaelr is built to deliver measurable industrial impact — from plant-level operations to global IP strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Top Left Bento — Machinery & Infrastructure */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", type: "spring", stiffness: 80, damping: 20 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-end min-h-[400px] relative overflow-hidden group border border-white/5 hover:border-cyan-500/30 transition-all duration-700 shadow-lg hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]"
          >
            {/* Background graphic */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#020b22] to-[#04163b] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-full h-[300px] -z-10">
              {/* Industrial gears motif */}
              <div className="absolute inset-0 border border-white/10 rounded-full scale-[0.6] opacity-30" />
              <div className="absolute inset-0 border border-white/10 rounded-full scale-[0.8] opacity-20" />
              <div className="absolute inset-0 border border-white/10 rounded-full scale-[1.0] opacity-10" />
              
              {/* Sector indicators */}
              <div className="absolute top-[20%] left-[25%] px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-[10px] text-cyan-300 uppercase tracking-wider">Heavy Machinery</div>
              <div className="absolute top-[45%] right-[15%] px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-[10px] text-blue-300 uppercase tracking-wider">Gas & Electric</div>
              <div className="absolute bottom-[25%] left-[35%] px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-[10px] text-purple-300 uppercase tracking-wider">Warehousing</div>

              {/* Center Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#1a2332] rounded-2xl flex items-center justify-center border border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" /></svg>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-white mb-2">End-to-End Plant Machinery Operations</h3>
              <p className="text-gray-400">From procurement and import to installation, maintenance, and improvement — we handle the entire lifecycle of industrial plant equipment.</p>
            </div>
          </motion.div>

          {/* Top Right Bento — Patents & IP */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut", type: "spring", stiffness: 80, damping: 20 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-end min-h-[400px] relative overflow-hidden group border border-white/5 hover:border-cyan-500/30 transition-all duration-700 shadow-lg hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#020b22] to-[#04163b] -z-10 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[120%] h-[150px] bg-gradient-to-r from-cyan-500/30 via-blue-400/20 to-sky-500/30 blur-3xl -z-10 group-hover:opacity-100 transition-opacity duration-500 opacity-60" />
            
            {/* IP/Patent visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] flex flex-col items-center justify-center gap-4 -z-10 w-full">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0a1b42] flex items-center justify-center border border-white/10 opacity-70">
                  <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-3 h-3 text-white/50" />
                  </div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[#0a1b42] flex items-center justify-center border border-white/10 opacity-70">
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase tracking-wider">Patents</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase tracking-wider">Trademarks</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase tracking-wider">Licences</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-white mb-2">Intellectual Property & Patent Management</h3>
              <p className="text-gray-400">Acquire, protect, and license patents, trademarks, copyrights, and manufacturing know-how. We invest in testing, improving, and commercializing inventions.</p>
            </div>
          </motion.div>

          {/* Bottom Full Bento — Global Expansion */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut", type: "spring", stiffness: 80, damping: 20 }}
            className="md:col-span-2 glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between min-h-[350px] relative overflow-hidden group border border-white/5 hover:border-cyan-500/30 transition-all duration-700 shadow-lg hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#020b22] to-[#04163b] -z-10" />
            
            <div className="md:w-1/2 z-10 mb-8 md:mb-0">
              <h3 className="text-3xl font-medium text-white mb-4">Strategic Growth &<br/>Global Expansion</h3>
              <p className="text-gray-400 mb-8 max-w-md">Establish branches and subsidiaries across India and internationally. Promote companies, employ expert consultants, manage government relations, and create financial reserves for sustained industrial growth.</p>
              
              <div className="flex items-center gap-4">
                <button className="px-6 py-2.5 rounded-full border border-blue-400/30 text-sm hover:bg-blue-500/10 hover:border-blue-400/50 transition-colors text-white">
                  Learn More
                </button>
                <button className="px-6 py-2.5 rounded-full btn-primary text-white text-sm flex items-center gap-2 font-medium">
                  Partner With Us <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Global presence visual */}
            <div className="md:w-1/2 relative h-[250px] w-full flex items-center justify-center mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="grid grid-cols-3 gap-4 transform scale-110 md:scale-125 opacity-80 group-hover:scale-[1.3] transition-transform duration-700">
                {[
                  { label: "HQ", sub: "India", color: "bg-cyan-500/20 border-cyan-500/30" },
                  { label: "R&D", sub: "Labs", color: "bg-blue-500/20 border-blue-500/30" },
                  { label: "MFG", sub: "Plants", color: "bg-purple-500/20 border-purple-500/30" },
                  { label: "IP", sub: "Legal", color: "bg-orange-500/20 border-orange-500/30" },
                  { label: "OPS", sub: "Warehouses", color: "bg-green-500/20 border-green-500/30" },
                  { label: "BIZ", sub: "Partners", color: "bg-pink-500/20 border-pink-500/30" },
                ].map((item, i) => (
                  <div key={i} className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl flex flex-col items-center justify-center shadow-lg border ${item.color} transition-all duration-300 hover:scale-105`}>
                    <span className="text-white font-bold text-sm">{item.label}</span>
                    <span className="text-gray-400 text-[10px] mt-1">{item.sub}</span>
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
