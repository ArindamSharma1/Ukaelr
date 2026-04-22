"use client"

import { motion } from "framer-motion"

/* Abstract SVG visuals for each card — positioned as decorative background art */
const cardVisuals: React.ReactNode[] = [
  // 1 — Industrial Verticals: Interlocking gears
  <div key="gears" className="absolute top-6 right-4 w-40 h-40 opacity-[0.12] group-hover:opacity-[0.25] transition-opacity duration-700">
    {/* Large gear */}
    <svg className="absolute top-0 left-0 w-28 h-28 text-cyan-400 group-hover:rotate-[30deg] transition-transform duration-[2s] ease-out" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="50" cy="50" r="20" />
      <circle cx="50" cy="50" r="30" strokeDasharray="8 6" />
      {[0,45,90,135,180,225,270,315].map(angle => (
        <rect key={angle} x="47" y="15" width="6" height="14" rx="2" transform={`rotate(${angle} 50 50)`} fill="currentColor" />
      ))}
    </svg>
    {/* Small gear */}
    <svg className="absolute bottom-0 right-0 w-20 h-20 text-blue-400 group-hover:-rotate-[45deg] transition-transform duration-[2s] ease-out" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="50" cy="50" r="16" />
      <circle cx="50" cy="50" r="24" strokeDasharray="6 5" />
      {[0,60,120,180,240,300].map(angle => (
        <rect key={angle} x="46" y="20" width="8" height="12" rx="2" transform={`rotate(${angle} 50 50)`} fill="currentColor" />
      ))}
    </svg>
  </div>,

  // 2 — 360° Lifecycle: Circular ring with stage markers
  <div key="lifecycle" className="absolute top-6 right-4 w-36 h-36 opacity-[0.12] group-hover:opacity-[0.25] transition-opacity duration-700">
    <svg className="w-full h-full text-cyan-400 group-hover:rotate-[60deg] transition-transform duration-[2s] ease-out" viewBox="0 0 120 120" fill="none">
      {/* Outer track */}
      <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="2" strokeDasharray="12 4" />
      {/* Inner track */}
      <circle cx="60" cy="60" r="34" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      {/* Stage dots */}
      {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
        const rad = (angle * Math.PI) / 180
        const cx = 60 + 48 * Math.cos(rad)
        const cy = 60 + 48 * Math.sin(rad)
        return <circle key={idx} cx={cx} cy={cy} r={idx % 2 === 0 ? 5 : 3.5} fill="currentColor" opacity={idx % 2 === 0 ? 0.8 : 0.4} />
      })}
      {/* Center arrow-circle */}
      <path d="M60 40 A20 20 0 1 1 45 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="42,50 48,56 44,60" fill="currentColor" />
    </svg>
  </div>,

  // 3 — Branch Network: Globe with grid lines + pin markers
  <div key="globe" className="absolute top-6 right-4 w-36 h-36 opacity-[0.12] group-hover:opacity-[0.25] transition-opacity duration-700">
    <svg className="w-full h-full text-cyan-400 group-hover:scale-110 transition-transform duration-700" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Globe outline */}
      <circle cx="60" cy="60" r="46" strokeWidth="2" />
      {/* Latitude lines */}
      <ellipse cx="60" cy="60" rx="46" ry="16" />
      <ellipse cx="60" cy="60" rx="46" ry="32" />
      {/* Longitude lines */}
      <ellipse cx="60" cy="60" rx="16" ry="46" />
      <ellipse cx="60" cy="60" rx="32" ry="46" />
      {/* Pin markers */}
      <circle cx="40" cy="45" r="4" fill="currentColor" opacity="0.8" />
      <circle cx="75" cy="55" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="55" cy="72" r="3" fill="currentColor" opacity="0.5" />
      {/* Connection lines */}
      <line x1="40" y1="45" x2="75" y2="55" strokeDasharray="3 3" opacity="0.4" />
      <line x1="75" y1="55" x2="55" y2="72" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  </div>,

  // 4 — Innovation: Infinity loop with pulse nodes
  <div key="infinity" className="absolute top-6 right-4 w-40 h-32 opacity-[0.12] group-hover:opacity-[0.25] transition-opacity duration-700">
    <svg className="w-full h-full text-cyan-400" viewBox="0 0 160 100" fill="none">
      {/* Infinity path */}
      <path 
        d="M80 50 C80 30, 50 10, 30 30 C10 50, 30 80, 50 70 C60 65, 70 55, 80 50 C90 45, 100 35, 110 30 C130 20, 150 50, 130 70 C110 90, 80 70, 80 50Z" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round"
        className="group-hover:[stroke-dashoffset:0] transition-all duration-[2s]"
        strokeDasharray="6 4"
      />
      {/* Pulse nodes along the path */}
      <circle cx="30" cy="35" r="4" fill="currentColor" opacity="0.7" />
      <circle cx="80" cy="50" r="5" fill="currentColor" opacity="0.9" />
      <circle cx="130" cy="65" r="4" fill="currentColor" opacity="0.7" />
      {/* Sparkle accents */}
      <circle cx="55" cy="68" r="2.5" fill="currentColor" opacity="0.4" />
      <circle cx="105" cy="32" r="2.5" fill="currentColor" opacity="0.4" />
      {/* Radiant rings around center node */}
      <circle cx="80" cy="50" r="10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="80" cy="50" r="16" stroke="currentColor" strokeWidth="0.8" opacity="0.15" strokeDasharray="4 3" />
    </svg>
  </div>
]

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
              
              {/* Decorative visual */}
              {cardVisuals[i]}
              
              <h3 className="text-5xl font-light text-white mb-2 group-hover:scale-105 origin-left transition-transform duration-500">{metric.value}</h3>
              <p className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
