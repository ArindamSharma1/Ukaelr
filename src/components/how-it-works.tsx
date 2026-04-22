"use client"

import { motion, Variants } from "framer-motion"
import { Cog, Building, FlaskConical, FileCheck, Shield, Users, Search, PiggyBank, MapPin } from "lucide-react"

const services = [
  { icon: <Cog className="w-5 h-5" />, title: "Machinery & Equipment", description: "Import, buy, exchange, alter, and improve all kinds of plant machinery, apparatus, tools and things necessary for the main business." },
  { icon: <Building className="w-5 h-5" />, title: "Factory & Infrastructure", description: "Purchase, equip, maintain, and manage factories, plants, warehouses, workshops, offices, stores, electric & gas works, and all necessary facilities." },
  { icon: <FlaskConical className="w-5 h-5" />, title: "Scientific Research", description: "Undertake and promote scientific research relating to the main business, driving technological innovation and industrial advancement." },
  { icon: <FileCheck className="w-5 h-5" />, title: "Patents & Intellectual Property", description: "Apply for, obtain, purchase and manage patents, trademarks, copyrights, licences, manufacturing know-how, and IP rights of all types." },
  { icon: <Shield className="w-5 h-5" />, title: "Government & Regulatory", description: "Obtain orders, charters, licences, and authorisations from government authorities for carrying out business objectives and protecting company interests." },
  { icon: <Users className="w-5 h-5" />, title: "Business Promotion", description: "Establish or promote companies for the purpose of carrying on business, acquiring rights, and managing liabilities of the company." },
  { icon: <Search className="w-5 h-5" />, title: "Expert Investigation", description: "Employ agents and experts to investigate conditions, prospects, value, and circumstances of business concerns, assets, properties, and rights." },
  { icon: <PiggyBank className="w-5 h-5" />, title: "Financial Reserves", description: "Create reserve funds, sinking funds, and special funds for depreciation, repair, improvement, research, and extension of company properties." },
  { icon: <MapPin className="w-5 h-5" />, title: "Branch Establishment", description: "Establish branches and firms at places in or outside India as the company determines, expanding operational reach globally." }
]

const containerVariants: Variants = { 
  hidden: { opacity: 0 }, 
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.08, delayChildren: 0.15 } 
  } 
}

const itemVariants: Variants = { 
  hidden: { opacity: 0, y: 20, scale: 0.95 }, 
  visible: { 
    opacity: 1, y: 0, scale: 1, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  } 
}

export default function HowItWorks() {
  return (
    <section id="services" className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="px-4 py-1 rounded-full border border-[#636CCB]/20 bg-[#636CCB]/10 text-xs text-[#6E8CFB] mb-6 uppercase tracking-wider font-medium">Our Services</div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-[#E0E4FF]">Full-Spectrum Industrial Solutions</h2>
          <p className="text-[#A8B0D8] max-w-2xl text-lg">From plant machinery to global expansion — nine key domains that power Ukaelr&apos;s mission of industrial excellence.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {services.map((service, i) => (
            <motion.div 
              variants={itemVariants} 
              key={i} 
              className="glass-card rounded-2xl p-7 flex flex-col gap-4 group hover:-translate-y-1 hover:border-[#6E8CFB]/25 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(110,140,251,0.1)] cursor-default"
            >
              <div className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-11 h-11 rounded-xl border bg-[#3C467B] shrink-0 transition-all duration-500 group-hover:scale-110 shadow-lg ${i === 0 ? 'text-[#6E8CFB] border-[#636CCB]/30 shadow-[0_0_12px_rgba(110,140,251,0.15)]' : 'border-[#636CCB]/12 text-[#7A82B0] group-hover:text-[#6E8CFB] group-hover:border-[#636CCB]/30'}`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-medium text-[#E0E4FF] group-hover:text-[#6E8CFB] transition-colors duration-300">{service.title}</h3>
              </div>
              <p className="text-[#7A82B0] text-sm leading-relaxed pl-[60px]">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
