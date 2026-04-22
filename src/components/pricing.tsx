"use client"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export default function Pricing() {
  return (
    <section id="contact" className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1 rounded-full border border-[#636CCB]/20 bg-[#636CCB]/10 text-xs text-[#6E8CFB] mb-6 uppercase tracking-wider font-medium">Work With Us</div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-[#E0E4FF]">Let&apos;s Build Something Together</h2>
          <p className="text-[#A8B0D8] max-w-2xl text-lg">Whether you need plant machinery solutions, R&D partnerships, or intellectual property management — we&apos;re ready to talk.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card rounded-3xl p-8 md:p-10 border border-[#636CCB]/12">
            <h3 className="text-2xl font-semibold text-[#E0E4FF] mb-6">Send Us a Message</h3>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label className="text-sm text-[#A8B0D8] mb-2 block">Full Name</label><input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-[#3C467B]/60 border border-[#636CCB]/12 text-[#E0E4FF] placeholder-[#7A82B0] focus:outline-none focus:border-[#6E8CFB]/40 focus:ring-1 focus:ring-[#6E8CFB]/20 transition-all text-sm" /></div>
                <div><label className="text-sm text-[#A8B0D8] mb-2 block">Company</label><input type="text" placeholder="Company name" className="w-full px-4 py-3 rounded-xl bg-[#3C467B]/60 border border-[#636CCB]/12 text-[#E0E4FF] placeholder-[#7A82B0] focus:outline-none focus:border-[#6E8CFB]/40 focus:ring-1 focus:ring-[#6E8CFB]/20 transition-all text-sm" /></div>
              </div>
              <div><label className="text-sm text-[#A8B0D8] mb-2 block">Email</label><input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl bg-[#3C467B]/60 border border-[#636CCB]/12 text-[#E0E4FF] placeholder-[#7A82B0] focus:outline-none focus:border-[#6E8CFB]/40 focus:ring-1 focus:ring-[#6E8CFB]/20 transition-all text-sm" /></div>
              <div><label className="text-sm text-[#A8B0D8] mb-2 block">How can we help?</label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#3C467B]/60 border border-[#636CCB]/12 text-[#A8B0D8] focus:outline-none focus:border-[#6E8CFB]/40 focus:ring-1 focus:ring-[#6E8CFB]/20 transition-all text-sm appearance-none cursor-pointer">
                  <option value="">Select a service</option><option value="machinery">Plant Machinery & Equipment</option><option value="infrastructure">Factory & Infrastructure</option><option value="research">Scientific Research</option><option value="ip">Patents & Intellectual Property</option><option value="government">Government & Regulatory</option><option value="partnership">Business Partnership</option><option value="other">Other</option>
                </select>
              </div>
              <div><label className="text-sm text-[#A8B0D8] mb-2 block">Message</label><textarea rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-xl bg-[#3C467B]/60 border border-[#636CCB]/12 text-[#E0E4FF] placeholder-[#7A82B0] focus:outline-none focus:border-[#6E8CFB]/40 focus:ring-1 focus:ring-[#6E8CFB]/20 transition-all text-sm resize-none" /></div>
              <button className="w-full py-3.5 rounded-full btn-primary font-semibold flex items-center justify-center gap-2 mt-2">Send Inquiry <ArrowRight className="w-4 h-4" /></button>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="flex flex-col gap-6">
            <div className="glass-card rounded-3xl p-8 border border-[#636CCB]/12 flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-[#E0E4FF]">Get In Touch Directly</h3>
              {[{ icon: <Mail className="w-5 h-5 text-[#6E8CFB]" />, label: "Email Us", value: "contact@ukaelr.com" },{ icon: <Phone className="w-5 h-5 text-[#6E8CFB]" />, label: "Call Us", value: "+91 XXXXX XXXXX" },{ icon: <MapPin className="w-5 h-5 text-[#6E8CFB]" />, label: "Registered Office", value: "India" }].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#3C467B] border border-[#636CCB]/15 flex items-center justify-center shrink-0">{c.icon}</div>
                  <div><p className="text-sm text-[#7A82B0] mb-1">{c.label}</p><p className="text-[#E0E4FF] font-medium">{c.value}</p></div>
                </div>
              ))}
            </div>
            <div className="glass-card rounded-3xl p-8 border border-[#636CCB]/12">
              <h3 className="text-xl font-semibold text-[#E0E4FF] mb-6">Why Partner With Ukaelr</h3>
              <div className="grid grid-cols-2 gap-4">
                {[{ l: "Full-Cycle Engineering", i: "⚙️" },{ l: "Patent & IP Expertise", i: "📋" },{ l: "Government Liaison", i: "🏛️" },{ l: "India & Global Reach", i: "🌍" }].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#636CCB]/8 border border-[#636CCB]/10"><span className="text-lg">{item.i}</span><span className="text-sm text-[#A8B0D8]">{item.l}</span></div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
