"use client"
import { motion, Variants } from "framer-motion"
import { Target, Lightbulb } from "lucide-react"

const containerVariants: Variants = { 
  hidden: { opacity: 0 }, 
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.2 } 
  } 
}

const itemVariants: Variants = { 
  hidden: { opacity: 0, scale: 0.95, y: 30 }, 
  visible: { 
    opacity: 1, scale: 1, y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 20 } 
  } 
}

export default function Testimonials() {
  return (
    <section id="vision" className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1 rounded-full border border-[#636CCB]/20 bg-[#636CCB]/10 text-xs text-[#6E8CFB] mb-6 uppercase tracking-wider font-medium">Our Vision</div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-[#E0E4FF]">Purpose-Driven Engineering</h2>
          <p className="text-[#A8B0D8] max-w-2xl text-lg">Two principles guide everything we build at Ukaelr.</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 md:p-10 flex flex-col gap-6 border border-[#636CCB]/10 relative overflow-hidden group hover:border-[#6E8CFB]/25 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(110,140,251,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#636CCB]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <div className="w-14 h-14 rounded-2xl bg-[#3C467B] border border-[#636CCB]/15 flex items-center justify-center group-hover:border-[#6E8CFB]/30 transition-colors duration-500"><Target className="w-7 h-7 text-[#6E8CFB]" /></div>
            <div><h3 className="text-2xl font-semibold text-[#E0E4FF] mb-4">Our Mission</h3><p className="text-[#A8B0D8] leading-relaxed text-lg">To be the catalyst for India&apos;s industrial transformation — building world-class factories, advancing plant machinery technology, and creating sustainable infrastructure that powers the nation&apos;s manufacturing ambitions.</p></div>
            <div className="flex flex-wrap gap-3 mt-2">{["Precision","Scale","Sustainability","Innovation"].map(t=>(<span key={t} className="px-3 py-1 rounded-full bg-[#636CCB]/8 border border-[#636CCB]/12 text-xs text-[#A8B0D8] uppercase tracking-wider group-hover:border-[#6E8CFB]/20 transition-colors duration-300">{t}</span>))}</div>
          </motion.div>
          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 md:p-10 flex flex-col gap-6 border border-[#50589C]/15 relative overflow-hidden group hover:border-[#6E8CFB]/25 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(110,140,251,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6E8CFB]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <div className="w-14 h-14 rounded-2xl bg-[#3C467B] border border-[#50589C]/20 flex items-center justify-center group-hover:border-[#6E8CFB]/30 transition-colors duration-500"><Lightbulb className="w-7 h-7 text-[#636CCB]" /></div>
            <div><h3 className="text-2xl font-semibold text-[#E0E4FF] mb-4">Our Vision</h3><p className="text-[#A8B0D8] leading-relaxed text-lg">A future where Indian industry leads in intellectual property, scientific research, and engineered solutions — with Ukaelr at the forefront of every breakthrough. We aim to establish a global network of branches and partnerships that extends our reach beyond borders.</p></div>
            <div className="flex flex-wrap gap-3 mt-2">{["Global Reach","IP Leadership","R&D Excellence","Impact"].map(t=>(<span key={t} className="px-3 py-1 rounded-full bg-[#50589C]/10 border border-[#50589C]/15 text-xs text-[#A8B0D8] uppercase tracking-wider group-hover:border-[#6E8CFB]/20 transition-colors duration-300">{t}</span>))}</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
