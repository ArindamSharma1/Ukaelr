"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export default function Pricing() {
  return (
    <section id="contact" className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-6 uppercase tracking-wider">
            Work With Us
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Whether you need plant machinery solutions, R&D partnerships, or intellectual property management — we&apos;re ready to talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card rounded-3xl p-8 md:p-10 border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Company</label>
                  <input 
                    type="text" 
                    placeholder="Company name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Email</label>
                <input 
                  type="email" 
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">How can we help?</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm appearance-none cursor-pointer">
                  <option value="">Select a service</option>
                  <option value="machinery">Plant Machinery & Equipment</option>
                  <option value="infrastructure">Factory & Infrastructure</option>
                  <option value="research">Scientific Research</option>
                  <option value="ip">Patents & Intellectual Property</option>
                  <option value="government">Government & Regulatory</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project or requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm resize-none"
                />
              </div>
              <button className="w-full py-3.5 rounded-full btn-primary text-white font-semibold flex items-center justify-center gap-2 mt-2">
                Send Inquiry <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-white">Get In Touch Directly</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#021338] border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email Us</p>
                  <p className="text-white font-medium">contact@ukaelr.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#021338] border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Call Us</p>
                  <p className="text-white font-medium">+91 XXXXX XXXXX</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#021338] border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Registered Office</p>
                  <p className="text-white font-medium">India</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">Why Partner With Ukaelr</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Full-Cycle Engineering", icon: "⚙️" },
                  { label: "Patent & IP Expertise", icon: "📋" },
                  { label: "Government Liaison", icon: "🏛️" },
                  { label: "India & Global Reach", icon: "🌍" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm text-gray-300">{item.label}</span>
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
