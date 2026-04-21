"use client"

import { motion } from "framer-motion"
import { Plug, Settings, Rocket, LineChart, FileCode2, Copy, Check } from "lucide-react"
import { useState } from "react"

const steps = [
  {
    icon: <Plug className="w-5 h-5" />,
    title: "1 — Connect",
    description: "Link your chat channels. Copy & paste one code. Done in 5 minutes."
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "2 — Configure",
    description: "Customize Ukaelr's personality & knowledge. Upload FAQs, product info, brand guidelines."
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "3 — Launch",
    description: "Go live with instant 24/7 support. Your customers see instant responses, any time."
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    title: "4 — Scale",
    description: "Watch your efficiency soar. Analyze conversations. Improve continuously."
  }
]

export default function HowItWorks() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="how-it-works" className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-6 uppercase tracking-wider">
            How It Works
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Get Started in 4 Simple Steps
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            From zero to global support—faster than you think.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          {/* Left: Steps Timeline */}
          <div className="flex flex-col gap-10 md:gap-12 relative pl-2 md:pl-4">
            <div className="absolute left-[31px] md:left-[39px] top-6 bottom-6 w-px bg-white/10" />
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "30%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="absolute left-[31px] md:left-[39px] top-6 w-px bg-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.6)] z-10" 
            />
            
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="relative flex gap-6 md:gap-8 group cursor-pointer items-start"
              >
                <div className={`relative z-20 flex items-center justify-center w-14 h-14 rounded-2xl border bg-[#020b22] shrink-0 transition-all duration-500 group-hover:scale-110 shadow-xl ${i === 0 ? 'text-cyan-400 border-cyan-500/30 shadow-[0_0_20px_rgba(0,229,255,0.15)]' : 'border-white/10 text-gray-500 group-hover:text-white group-hover:border-white/20'}`}>
                  {step.icon}
                </div>
                <div className="flex flex-col gap-2 pt-2 md:pt-3">
                  <h3 className={`text-xl font-medium transition-colors duration-300 ${i === 0 ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base pr-4">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Code editor mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Ambient glow behind card */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
            
            <div className="glass-card rounded-2xl p-2 relative z-10 border border-white/10 bg-[#020b22]/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
              
              {/* App icon faux connector */}
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-[#04163b] border border-cyan-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.15)] z-20">
                <FileCode2 className="w-8 h-8 text-cyan-400" />
              </div>

              <div className="bg-[#0d131f] rounded-xl overflow-hidden border border-white/5 mt-6 mb-4">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0a1018]">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                  <span className="text-gray-500">// Ukaelr Integration</span><br/>
                  <span className="text-blue-400">{`<script`}</span> <span className="text-cyan-300">src</span>=<span className="text-orange-300">"ukaelr.js"</span><span className="text-blue-400">{`></script>`}</span><br/>
                  <span className="text-purple-400">const</span> <span className="text-blue-300">ukaelr</span> <span className="text-white">=</span> <span className="text-purple-400">new</span> <span className="text-yellow-200">Ukaelr</span>(<span className="text-yellow-400">{`{`}</span><br/>
                  <span className="text-cyan-200 pl-4">apiKey:</span> <span className="text-orange-300">"your-api-key"</span>,<br/>
                  <span className="text-cyan-200 pl-4">channels:</span> [<span className="text-orange-300">"website"</span>, <span className="text-orange-300">"whatsapp"</span>]<br/>
                  <span className="text-yellow-400">{`}`}</span>);<br/>
                  <span className="text-blue-300">ukaelr</span>.<span className="text-yellow-200">init</span>();
                </div>
              </div>

              <div className="flex justify-end gap-2 px-4 pb-2">
                <button 
                  onClick={handleCopy}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors text-gray-400 hover:text-white"
                >
                  {copied ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
