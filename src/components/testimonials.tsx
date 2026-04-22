"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 }
  }
}

export default function Testimonials() {
  return (
    <section id="vision" className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="px-4 py-1 rounded-full border border-blue-400/20 bg-blue-500/10 text-xs text-blue-200 mb-6 uppercase tracking-wider">
            Our Vision
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Purpose-Driven Engineering
          </h2>
          <p className="text-gray-300 max-w-2xl text-lg">
            Two principles guide everything we build at Ukaelr.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-3xl p-8 md:p-10 flex flex-col gap-6 border border-white/5 relative overflow-hidden group hover:border-cyan-400/30 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            
            <div className="w-14 h-14 rounded-2xl bg-[#021338] border border-white/10 flex items-center justify-center group-hover:border-cyan-400/30 transition-colors duration-500">
              <Target className="w-7 h-7 text-cyan-400" />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To be the catalyst for India&apos;s industrial transformation — building world-class factories, advancing plant machinery technology, and creating sustainable infrastructure that powers the nation&apos;s manufacturing ambitions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              {["Precision", "Scale", "Sustainability", "Innovation"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 uppercase tracking-wider group-hover:border-cyan-500/20 transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-3xl p-8 md:p-10 flex flex-col gap-6 border border-white/5 relative overflow-hidden group hover:border-cyan-400/30 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            
            <div className="w-14 h-14 rounded-2xl bg-[#021338] border border-white/10 flex items-center justify-center group-hover:border-cyan-400/30 transition-colors duration-500">
              <Lightbulb className="w-7 h-7 text-cyan-400" />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                A future where Indian industry leads in intellectual property, scientific research, and engineered solutions — with Ukaelr at the forefront of every breakthrough. We aim to establish a global network of branches and partnerships that extends our reach beyond borders.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              {["Global Reach", "IP Leadership", "R&D Excellence", "Impact"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 uppercase tracking-wider group-hover:border-purple-500/20 transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
