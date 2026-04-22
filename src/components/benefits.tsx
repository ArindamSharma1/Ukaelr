"use client"

import { motion } from "framer-motion"
import { Wrench, Building2, FlaskConical } from "lucide-react"

const coreBusiness = [
  {
    icon: <Wrench className="w-6 h-6 text-[#0D9488]" />,
    title: "Plant Machinery & Equipment",
    description: "Import, purchase, exchange, alter, and improve all kinds of plant machinery, apparatus, tools and equipment necessary for carrying on the main business operations."
  },
  {
    icon: <Building2 className="w-6 h-6 text-[#0D9488]" />,
    title: "Industrial Infrastructure",
    description: "Build, equip, maintain, and manage factories, plants, warehouses, workshops, offices, electric works, and all kinds of industrial facilities and conveniences."
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-[#0D9488]" />,
    title: "Scientific Research & Innovation",
    description: "Undertake and promote scientific research relating to the company's core business, driving innovation and technological advancement in industrial processes."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
}

export default function Benefits() {
  return (
    <section id="about" className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="px-4 py-1 rounded-full border border-[#0D9488]/20 bg-[#0D9488]/8 text-xs text-[#0D9488] mb-6 uppercase tracking-wider font-medium">
            What We Do
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-[#1B2A3D]">
            Engineering the Backbone of Industry
          </h2>
          <p className="text-[#6B7C8E] max-w-2xl text-lg">
            Three pillars that define Ukaelr&apos;s core business operations — from heavy machinery to cutting-edge research.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {coreBusiness.map((item, i) => (
            <motion.div
              variants={itemVariants}
              key={i}
              className="glass-card p-10 rounded-3xl flex flex-col hover:-translate-y-2 hover:border-[#0D9488]/25 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(13,148,136,0.1)]"
            >
              <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-[#0D9488]/8 border border-[#0D9488]/15 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/20 to-[#10B981]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                <div className="absolute inset-[1px] rounded-[15px] bg-[#F7F3EB] flex items-center justify-center z-10 transition-colors duration-300 group-hover:bg-[#F0ECE3]">
                   {item.icon}
                </div>
                {/* Glow border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488] to-[#10B981] opacity-20 z-0" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1B2A3D] tracking-wide">{item.title}</h3>
              <p className="text-[#6B7C8E] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
