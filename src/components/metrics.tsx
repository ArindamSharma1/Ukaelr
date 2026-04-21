"use client"

import { motion } from "framer-motion"

const metrics = [
  { value: "+40%", label: "Faster Response Time" },
  { value: "+25%", label: "Customer Satisfaction" },
  { value: "80%", label: "Automation Rate" },
  { value: "5x", label: "Team Productivity" }
]

export default function Metrics() {
  return (
    <section className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-6 uppercase tracking-wider">
            Why It Works
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Why Global Brands Trust Orbita AI
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Real results. Real impact. Real growth.
          </p>
        </div>

        <div className="flex gap-4 max-w-6xl mx-auto overflow-x-auto pb-8 snap-x">
          {metrics.map((metric, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="flex-none w-64 h-80 rounded-2xl relative overflow-hidden flex flex-col justify-end p-8 border border-white/5 snap-center"
            >
              <div className="absolute inset-0 bg-[#0a1018] -z-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-500/40 via-emerald-500/10 to-transparent -z-10" />
              
              <h3 className="text-5xl font-light text-white mb-2">{metric.value}</h3>
              <p className="text-sm text-gray-300 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
