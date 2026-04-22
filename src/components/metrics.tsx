"use client"
import { motion } from "framer-motion"

const cardVisuals: React.ReactNode[] = [
  <div key="gears" className="absolute top-6 right-4 w-40 h-40 opacity-[0.15] group-hover:opacity-[0.3] transition-opacity duration-700">
    <svg className="absolute top-0 left-0 w-28 h-28 text-[#636CCB] group-hover:rotate-[30deg] transition-transform duration-[2s]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="50" cy="50" r="20" /><circle cx="50" cy="50" r="30" strokeDasharray="8 6" />{[0,45,90,135,180,225,270,315].map(a=>(<rect key={a} x="47" y="15" width="6" height="14" rx="2" transform={`rotate(${a} 50 50)`} fill="currentColor" />))}</svg>
    <svg className="absolute bottom-0 right-0 w-20 h-20 text-[#6E8CFB] group-hover:-rotate-[45deg] transition-transform duration-[2s]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="50" cy="50" r="16" /><circle cx="50" cy="50" r="24" strokeDasharray="6 5" />{[0,60,120,180,240,300].map(a=>(<rect key={a} x="46" y="20" width="8" height="12" rx="2" transform={`rotate(${a} 50 50)`} fill="currentColor" />))}</svg>
  </div>,
  <div key="lifecycle" className="absolute top-6 right-4 w-36 h-36 opacity-[0.15] group-hover:opacity-[0.3] transition-opacity duration-700">
    <svg className="w-full h-full text-[#636CCB] group-hover:rotate-[60deg] transition-transform duration-[2s]" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="2" strokeDasharray="12 4" /><circle cx="60" cy="60" r="34" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />{[0,60,120,180,240,300].map((a,i)=>{const r=(a*Math.PI)/180;return <circle key={i} cx={60+48*Math.cos(r)} cy={60+48*Math.sin(r)} r={i%2===0?5:3.5} fill="currentColor" opacity={i%2===0?0.8:0.4} />})}<path d="M60 40 A20 20 0 1 1 45 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /><polygon points="42,50 48,56 44,60" fill="currentColor" /></svg>
  </div>,
  <div key="globe" className="absolute top-6 right-4 w-36 h-36 opacity-[0.15] group-hover:opacity-[0.3] transition-opacity duration-700">
    <svg className="w-full h-full text-[#50589C] group-hover:scale-110 transition-transform duration-700" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="60" cy="60" r="46" strokeWidth="2" /><ellipse cx="60" cy="60" rx="46" ry="16" /><ellipse cx="60" cy="60" rx="46" ry="32" /><ellipse cx="60" cy="60" rx="16" ry="46" /><ellipse cx="60" cy="60" rx="32" ry="46" /><circle cx="40" cy="45" r="4" fill="currentColor" opacity="0.8" /><circle cx="75" cy="55" r="4" fill="currentColor" opacity="0.6" /><circle cx="55" cy="72" r="3" fill="currentColor" opacity="0.5" /><line x1="40" y1="45" x2="75" y2="55" strokeDasharray="3 3" opacity="0.4" /><line x1="75" y1="55" x2="55" y2="72" strokeDasharray="3 3" opacity="0.4" /></svg>
  </div>,
  <div key="infinity" className="absolute top-6 right-4 w-40 h-32 opacity-[0.15] group-hover:opacity-[0.3] transition-opacity duration-700">
    <svg className="w-full h-full text-[#6E8CFB]" viewBox="0 0 160 100" fill="none"><path d="M80 50 C80 30,50 10,30 30 C10 50,30 80,50 70 C60 65,70 55,80 50 C90 45,100 35,110 30 C130 20,150 50,130 70 C110 90,80 70,80 50Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 4" /><circle cx="30" cy="35" r="4" fill="currentColor" opacity="0.7" /><circle cx="80" cy="50" r="5" fill="currentColor" opacity="0.9" /><circle cx="130" cy="65" r="4" fill="currentColor" opacity="0.7" /><circle cx="80" cy="50" r="10" stroke="currentColor" strokeWidth="1" opacity="0.3" /><circle cx="80" cy="50" r="16" stroke="currentColor" strokeWidth="0.8" opacity="0.15" strokeDasharray="4 3" /></svg>
  </div>
]
const metrics = [{ value: "9+", label: "Industrial Verticals" },{ value: "360°", label: "Plant Lifecycle Coverage" },{ value: "IN & Global", label: "Branch Network" },{ value: "∞", label: "Innovation Commitment" }]
const cV = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
const iV = { hidden: { opacity: 0, scale: 0.9, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } } }

export default function Metrics() {
  return (
    <section className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1 rounded-full border border-[#636CCB]/20 bg-[#636CCB]/10 text-xs text-[#6E8CFB] mb-6 uppercase tracking-wider font-medium">At a Glance</div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-[#E0E4FF]">The Ukaelr Advantage</h2>
          <p className="text-[#A8B0D8] max-w-2xl text-lg">Depth of capability. Breadth of ambition. Built to scale.</p>
        </motion.div>
        <motion.div variants={cV} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="flex gap-4 md:gap-6 max-w-6xl mx-auto overflow-x-auto pb-8 snap-x hide-scrollbar">
          {metrics.map((m, i) => (
            <motion.div variants={iV} key={i} className="flex-none w-[280px] md:w-64 h-80 rounded-3xl relative overflow-hidden flex flex-col justify-end p-8 border border-[#636CCB]/10 snap-center group hover:border-[#6E8CFB]/25 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-[0_0_25px_rgba(110,140,251,0.12)] cursor-default">
              <div className="absolute inset-0 bg-[#3C467B] -z-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#636CCB]/20 via-[#6E8CFB]/5 to-transparent -z-10 group-hover:from-[#636CCB]/30 transition-colors duration-500" />
              {cardVisuals[i]}
              <h3 className="text-5xl font-light text-[#E0E4FF] mb-2 group-hover:scale-105 origin-left transition-transform duration-500">{m.value}</h3>
              <p className="text-sm text-[#A8B0D8] font-medium group-hover:text-[#E0E4FF] transition-colors duration-300">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
