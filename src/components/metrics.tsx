"use client"

import { motion } from "framer-motion"

const metrics = [
  { value: "9+", label: "Industrial Verticals" },
  { value: "360°", label: "Plant Lifecycle Coverage" },
  { value: "IN & Global", label: "Branch Network" },
  { value: "∞", label: "Innovation Commitment" }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
}

export default function Metrics() {
  return (
    <section className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="px-4 py-1 rounded-full border border-blue-400/20 bg-blue-500/10 text-xs text-blue-200 mb-6 uppercase tracking-wider">
            At a Glance
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            The Ukaelr Advantage
          </h2>
          <p className="text-gray-300 max-w-2xl text-lg">
            Depth of capability. Breadth of ambition. Built to scale.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex gap-4 md:gap-6 max-w-6xl mx-auto overflow-x-auto pb-8 snap-x hide-scrollbar"
        >
          {metrics.map((metric, i) => (
            <motion.div
              variants={itemVariants}
              key={i}
              className="flex-none w-[280px] md:w-64 h-80 rounded-3xl relative overflow-hidden flex flex-col justify-end p-8 border border-white/5 snap-center group hover:border-cyan-500/30 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] cursor-default"
            >
              <div className="absolute inset-0 bg-[#020b22] -z-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/40 via-cyan-500/10 to-transparent -z-10 group-hover:from-blue-400/50 transition-colors duration-500" />
              
              <h3 className="text-5xl font-light text-white mb-2 group-hover:scale-105 origin-left transition-transform duration-500">{metric.value}</h3>
              <p className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
