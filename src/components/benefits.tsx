"use client"

import { motion } from "framer-motion"
import { Zap, Globe, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Instant Response. Every Time.",
    description: "Customers get answers in seconds, not hours. No more lost conversations. No more missed opportunities."
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Support That Speaks Every Language.",
    description: "Customers get answers in seconds, not hours. No more lost conversations. No more missed opportunities."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "Scale Without Breaking Your Team.",
    description: "Automate 80% of routine conversations. Free your team to handle complex issues. That's intelligent scaling."
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-6 uppercase tracking-wider">
            Why Orbita?
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Never Lose a Customer to Communication Again
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Three reasons why global teams choose Orbita AI over traditional support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="glass-card p-8 rounded-2xl flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-[#0a1017] border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] rounded-[15px] bg-[#0a1017] flex items-center justify-center z-10">
                   {benefit.icon}
                </div>
                {/* Glow border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-400 opacity-50 z-0" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-white">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
