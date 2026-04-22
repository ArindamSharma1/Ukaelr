"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Features() {
  return (
    <section id="capabilities" className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="px-4 py-1 rounded-full border border-[#636CCB]/20 bg-[#636CCB]/10 text-[10px] sm:text-xs text-[#6E8CFB] mb-4 sm:mb-6 uppercase tracking-widest font-medium">Our Capabilities</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#E0E4FF]">Engineered for Scale & Precision</h2>
          <p className="text-[#A8B0D8] max-w-2xl text-base sm:text-lg">Every capability at Ukaelr is built to deliver measurable industrial impact — from plant-level operations to global IP strategy.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Machinery Card */}
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, type: "spring", stiffness: 80, damping: 20 }}
            className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-end min-h-[350px] sm:min-h-[400px] relative overflow-hidden group border border-[#636CCB]/10 hover:border-[#6E8CFB]/25 transition-all duration-700 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3C467B] to-[#2E3665] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] sm:-translate-y-[60%] w-full h-[250px] sm:h-[300px] -z-10">
              <div className="absolute inset-0 border border-[#636CCB]/10 rounded-full scale-[0.6] opacity-30" />
              <div className="absolute inset-0 border border-[#636CCB]/8 rounded-full scale-[0.8] opacity-20" />
              <div className="absolute top-[20%] left-[25%] px-3 py-1 rounded-full bg-[#636CCB]/15 border border-[#636CCB]/25 text-[8px] sm:text-[10px] text-[#6E8CFB] uppercase tracking-wider font-medium">Heavy Machinery</div>
              <div className="absolute top-[45%] right-[15%] px-3 py-1 rounded-full bg-[#6E8CFB]/10 border border-[#6E8CFB]/20 text-[8px] sm:text-[10px] text-[#6E8CFB] uppercase tracking-wider font-medium">Gas & Electric</div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-[#3C467B] rounded-2xl flex items-center justify-center border border-[#636CCB]/15 shadow-xl group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#6E8CFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" /></svg>
              </div>
            </div>
            <div className="relative z-10"><h3 className="text-xl sm:text-2xl font-bold text-[#E0E4FF] mb-2 sm:mb-3">End-to-End Plant Machinery</h3><p className="text-[#A8B0D8] text-sm sm:text-base leading-relaxed">From procurement and import to installation and maintenance — we handle the entire lifecycle of industrial equipment.</p></div>
          </motion.div>

          {/* IP Card */}
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: 0.15, type: "spring", stiffness: 80, damping: 20 }}
            className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-end min-h-[350px] sm:min-h-[400px] relative overflow-hidden group border border-[#636CCB]/10 hover:border-[#6E8CFB]/25 transition-all duration-700 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3C467B] to-[#2E3665] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] sm:-translate-y-[60%] w-[120%] h-[120px] sm:h-[150px] bg-gradient-to-r from-[#636CCB]/15 via-[#6E8CFB]/10 to-[#636CCB]/15 blur-3xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] sm:-translate-y-[60%] flex flex-col items-center gap-4 -z-10 w-full">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#3C467B] flex items-center justify-center border border-[#636CCB]/12 opacity-70"><svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E8CFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg></div>
                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-[#636CCB]/30 to-transparent relative"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><ArrowRight className="w-3 h-3 text-[#636CCB]/50" /></div></div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#3C467B] flex items-center justify-center border border-[#636CCB]/12 opacity-70"><svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#636CCB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg></div>
              </div>
              <div className="flex gap-2 sm:gap-3 mt-2">
                {["Patents", "Trademarks", "Licences"].map(t => (<span key={t} className="px-2 sm:px-3 py-1 rounded-full bg-[#636CCB]/8 border border-[#636CCB]/12 text-[8px] sm:text-[10px] text-[#A8B0D8] uppercase tracking-wider">{t}</span>))}
              </div>
            </div>
            <div className="relative z-10"><h3 className="text-xl sm:text-2xl font-bold text-[#E0E4FF] mb-2 sm:mb-3">Intellectual Property Management</h3><p className="text-[#A8B0D8] text-sm sm:text-base leading-relaxed">Acquire, protect, and license patents and manufacturing know-how. We invest in commercializing industrial breakthroughs.</p></div>
          </motion.div>

          {/* Global Expansion Card */}
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 80, damping: 20 }}
            className="md:col-span-2 glass-card rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between min-h-[400px] sm:min-h-[350px] relative overflow-hidden group border border-[#636CCB]/10 hover:border-[#6E8CFB]/25 transition-all duration-700 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3C467B] to-[#2E3665] -z-10" />
            <div className="w-full md:w-1/2 z-10 mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E0E4FF] mb-4 sm:mb-6">Strategic Growth &<br className="hidden sm:block"/>Global Expansion</h3>
              <p className="text-[#A8B0D8] mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">Establish branches and subsidiaries internationally. Promote companies, employ experts, and manage global industrial assets.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <button className="w-full sm:w-auto px-8 py-3 rounded-full border border-[#636CCB]/30 text-sm hover:bg-[#636CCB]/15 transition-all text-[#E0E4FF] font-semibold">Learn More</button>
                <button className="w-full sm:w-auto px-8 py-3 rounded-full btn-primary text-sm flex items-center justify-center gap-2 font-bold shadow-xl">Partner With Us <ArrowRight className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[200px] sm:h-[250px] flex items-center justify-center mt-4 md:mt-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#636CCB]/10 to-[#6E8CFB]/10 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="grid grid-cols-3 gap-3 sm:gap-4 transform scale-90 sm:scale-110 md:scale-125 opacity-80 group-hover:scale-[1.05] sm:group-hover:scale-[1.3] transition-transform duration-700">
                {[
                  { l: "HQ", s: "India", c: "bg-[#636CCB]/15 border-[#636CCB]/30" },
                  { l: "R&D", s: "Labs", c: "bg-[#6E8CFB]/10 border-[#6E8CFB]/30" },
                  { l: "MFG", s: "Plants", c: "bg-[#50589C]/20 border-[#50589C]/40" },
                  { l: "IP", s: "Legal", c: "bg-[#636CCB]/15 border-[#636CCB]/30" },
                  { l: "OPS", s: "Logistics", c: "bg-[#6E8CFB]/10 border-[#6E8CFB]/30" },
                  { l: "BIZ", s: "Global", c: "bg-[#50589C]/20 border-[#50589C]/40" },
                ].map((item, i) => (
                  <div key={i} className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex flex-col items-center justify-center shadow-2xl border ${item.c} backdrop-blur-sm transition-all duration-300`}>
                    <span className="text-[#E0E4FF] font-black text-sm sm:text-base">{item.l}</span>
                    <span className="text-[#A8B0D8] text-[8px] sm:text-[10px] mt-1 font-bold uppercase tracking-widest">{item.s}</span>
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
