"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ShoppingBag, Star, Eye, X, ArrowRight, Shield, Clock, Gem } from "lucide-react"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

const watches = [
  {
    id: 1, name: "Midnight Sovereign", category: "Dress", price: "₹2,45,000", image: "/watch-midnight.png",
    description: "Rose gold case with a deep midnight blue dial. Crocodile leather strap. Swiss automatic movement.",
    longDescription: "The Midnight Sovereign is a masterpiece of horological elegance. Its deep midnight blue dial catches light at every angle, revealing subtle sunburst textures. The rose gold case is hand-polished to a mirror finish, housing a Swiss automatic caliber with 42-hour power reserve. The genuine crocodile leather strap ages beautifully with wear, developing a unique patina over time.",
    specs: ["41mm Case", "Swiss Auto", "50m Water Resist", "Sapphire Crystal"],
    movement: "Swiss ETA 2824-2 Automatic", caseMaterial: "18K Rose Gold", crystal: "Double-domed Sapphire", strapMaterial: "Genuine Crocodile Leather", dialColor: "Midnight Blue Sunburst",
    features: ["42-hour power reserve", "Date display at 3 o'clock", "Screw-down crown", "Hand-polished case", "Deployment clasp"],
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Phantom Skeleton", category: "Skeleton", price: "₹3,80,000", image: "/watch-skeleton.png",
    description: "Open-worked skeleton dial exposing the intricate mechanical movement. A conversation piece on your wrist.",
    longDescription: "The Phantom Skeleton strips away convention to reveal the beating heart of mechanical watchmaking. Every bridge and gear is meticulously hand-finished with beveling and perlage. The movement is visible from both sides through the exhibition case back, making it a true conversation piece.",
    specs: ["40mm Case", "Manual Wind", "30m Water Resist", "Exhibition Back"],
    movement: "In-house Manual Winding", caseMaterial: "Stainless Steel 316L", crystal: "Sapphire Crystal", strapMaterial: "Italian Calfskin Leather", dialColor: "Skeletonized",
    features: ["72-hour power reserve", "Hand-finished bridges", "Exhibition case back", "Côtes de Genève decoration", "Blued steel hands"],
    badge: "Limited"
  },
  {
    id: 3,
    name: "Aurelius Chronograph", category: "Chronograph", price: "₹4,15,000", image: "/watch-chrono.png",
    description: "Full gold chronograph with white dial and three subdials. The ultimate statement of prestige and precision.",
    longDescription: "The Aurelius is an exercise in opulence. Its fully gold-plated bracelet and case house a Swiss quartz chronograph movement capable of 1/10th second precision. Three subdials track seconds, minutes, and hours of elapsed time. The white lacquered dial provides perfect contrast against the warm gold tones.",
    specs: ["43mm Case", "Quartz Chrono", "100m Water Resist", "Gold Bracelet"],
    movement: "Swiss Quartz Chronograph", caseMaterial: "Gold-Plated Steel", crystal: "Sapphire Crystal", strapMaterial: "Gold-Plated Steel Bracelet", dialColor: "White Lacquer",
    features: ["Chronograph function", "Tachymeter bezel", "Luminous hands", "Screw-down pushers", "Butterfly clasp"],
    badge: null
  },
  {
    id: 4,
    name: "Abyssal Diver", category: "Diver", price: "₹1,95,000", image: "/watch-diver.png",
    description: "Professional-grade dive watch with rotating bezel, luminous markers, and serious depth rating.",
    longDescription: "Built for the deep, worn with pride. The Abyssal Diver features a unidirectional rotating bezel with 60-click action, fully luminous dial markers filled with Super-LumiNova, and a helium escape valve for saturation diving. The 300m water resistance is backed by ISO 6425 certification.",
    specs: ["44mm Case", "Auto Movement", "300m Water Resist", "Steel Bracelet"],
    movement: "Miyota 9015 Automatic", caseMaterial: "Stainless Steel 316L", crystal: "Sapphire with AR coating", strapMaterial: "Brushed Steel Bracelet", dialColor: "Deep Black",
    features: ["Unidirectional bezel", "Super-LumiNova markers", "Helium escape valve", "ISO 6425 certified", "Oyster-style bracelet"],
    badge: "New"
  },
  {
    id: 5,
    name: "Bauhaus Essential", category: "Dress", price: "₹1,65,000", image: "/watch-minimalist.png",
    description: "Clean Bauhaus-inspired design with a thin rose gold case. Understated elegance for the discerning minimalist.",
    longDescription: "Less is more. The Bauhaus Essential distills watchmaking to its purest form — a clean white dial, razor-thin dauphine hands, and a case that sits barely 7.5mm on the wrist. The rose gold PVD coating adds warmth without weight. Perfect for those who believe true luxury whispers.",
    specs: ["38mm Case", "Quartz", "30m Water Resist", "Leather Strap"],
    movement: "Ronda 762 Swiss Quartz", caseMaterial: "Rose Gold PVD Steel", crystal: "Mineral Crystal", strapMaterial: "Genuine Leather", dialColor: "Eggshell White",
    features: ["Ultra-thin 7.5mm case", "Dauphine hands", "Minimalist indices", "Quick-release strap", "Pin buckle"],
    badge: null
  },
  {
    id: 6,
    name: "Graviton Tourbillon", category: "Tourbillon", price: "₹12,50,000", image: "/watch-tourbillon.png",
    description: "Ultra-luxury tourbillon complication in a platinum case. The pinnacle of horological achievement.",
    longDescription: "The crown jewel of our collection. The Graviton houses a flying tourbillon that rotates once every 60 seconds, counteracting the effects of gravity on timekeeping accuracy. The platinum case is hand-engraved with guilloche patterns, and the alligator strap is hand-stitched with saddle stitching.",
    specs: ["42mm Case", "Tourbillon", "50m Water Resist", "Alligator Strap"],
    movement: "Flying Tourbillon Manual", caseMaterial: "950 Platinum", crystal: "Box Sapphire Crystal", strapMaterial: "Hand-stitched Alligator", dialColor: "Anthracite Guilloche",
    features: ["Flying tourbillon at 6 o'clock", "80-hour power reserve", "Hand-engraved case", "Individually numbered", "Presentation box included"],
    badge: "Flagship"
  }
]

const categories = ["All", "Dress", "Skeleton", "Chronograph", "Diver", "Tourbillon"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 20 } }
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedWatch, setSelectedWatch] = useState<typeof watches[0] | null>(null)

  const filtered = activeCategory === "All" 
    ? watches 
    : watches.filter(w => w.category === activeCategory)

  return (
    <main className="flex min-h-screen flex-col items-center relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #2E3665, #3C467B)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(99, 108, 203, 0.12) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url(\'https://transparenttextures.com/patterns/stardust.png\')]" />
      </div>

      {/* Hero */}
      <section className="w-full pt-32 pb-16 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#A8B0D8] hover:text-[#6E8CFB] transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#636CCB]/20 bg-[#636CCB]/10 text-sm text-[#6E8CFB] mb-6">
                <ShoppingBag className="w-4 h-4" />
                <span>Exotic Collection</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold text-[#E0E4FF] mb-4">Our Timepieces</h1>
              <p className="text-[#A8B0D8] text-lg max-w-xl">Each watch in our collection is curated for those who appreciate the artistry of precision engineering and timeless design.</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#3C467B]/50 border border-[#636CCB]/10">
              <Star className="w-5 h-5 text-[#6E8CFB]" />
              <div>
                <p className="text-[#E0E4FF] font-medium text-sm">{watches.length} Timepieces</p>
                <p className="text-[#7A82B0] text-xs">Curated Collection</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full pb-8">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#636CCB] to-[#6E8CFB] text-[#E0E4FF] shadow-[0_4px_15px_rgba(99,108,203,0.3)]'
                    : 'bg-[#3C467B]/40 border border-[#636CCB]/12 text-[#A8B0D8] hover:border-[#6E8CFB]/30 hover:text-[#E0E4FF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full py-8 pb-24">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {filtered.map((watch) => (
              <motion.div
                variants={itemVariants}
                key={watch.id}
                onMouseEnter={() => setHoveredId(watch.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedWatch(watch)}
                className="group relative rounded-3xl overflow-hidden border border-[#636CCB]/10 hover:border-[#6E8CFB]/25 transition-all duration-700 cursor-pointer hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(110,140,251,0.15)]"
              >
                {/* Image Container */}
                <div className="relative h-[360px] overflow-hidden bg-[#2E3665]">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E3665] via-[#2E3665]/20 to-transparent" />
                  
                  {/* Badge */}
                  {watch.badge && (
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                      watch.badge === 'Bestseller' ? 'bg-[#636CCB] text-[#E0E4FF]' :
                      watch.badge === 'Limited' ? 'bg-[#6E8CFB] text-[#E0E4FF]' :
                      watch.badge === 'New' ? 'bg-[#50589C] text-[#E0E4FF]' :
                      'bg-gradient-to-r from-[#636CCB] to-[#6E8CFB] text-[#E0E4FF]'
                    }`}>
                      {watch.badge}
                    </div>
                  )}

                  {/* Quick view overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hoveredId === watch.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="px-6 py-3 rounded-full bg-[#3C467B]/80 backdrop-blur-md border border-[#636CCB]/20 flex items-center gap-2 text-[#E0E4FF] text-sm font-medium">
                      <Eye className="w-4 h-4" /> Quick View
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 bg-[#3C467B]/40 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-xs text-[#6E8CFB] uppercase tracking-wider font-medium mb-1">{watch.category}</p>
                      <h3 className="text-xl font-semibold text-[#E0E4FF] group-hover:text-[#6E8CFB] transition-colors duration-300">{watch.name}</h3>
                    </div>
                    <span className="text-lg font-semibold text-[#6E8CFB]">{watch.price}</span>
                  </div>
                  
                  <p className="text-sm text-[#A8B0D8] mb-4 leading-relaxed">{watch.description}</p>
                  
                  {/* Specs */}
                  <div className="flex flex-wrap gap-2">
                    {watch.specs.map(spec => (
                      <span key={spec} className="px-2.5 py-1 rounded-lg bg-[#2E3665]/60 border border-[#636CCB]/8 text-[10px] text-[#7A82B0] uppercase tracking-wider">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#7A82B0] text-lg">No timepieces in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 mb-12">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-12 border border-[#636CCB]/12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#E0E4FF] mb-4">Interested in a Timepiece?</h2>
            <p className="text-[#A8B0D8] mb-8 max-w-xl mx-auto">Contact us for pricing, availability, and custom orders. We also offer certified pre-owned exotic watches.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="px-8 py-3 rounded-full btn-primary font-semibold inline-flex items-center justify-center gap-2">
                Inquire Now <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
              <Link href="/" className="px-8 py-3 rounded-full border border-[#636CCB]/25 text-[#E0E4FF] font-medium hover:bg-[#636CCB]/12 transition-colors inline-flex items-center justify-center">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedWatch && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedWatch(null)}>
            <div className="absolute inset-0 bg-[#2E3665]/80 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ type: "spring", stiffness: 80, damping: 20 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#3C467B]/95 backdrop-blur-xl border border-[#636CCB]/15 shadow-[0_24px_80px_rgba(46,54,101,0.6)]">
              {/* Close button */}
              <button onClick={() => setSelectedWatch(null)} className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-[#2E3665]/80 border border-[#636CCB]/15 flex items-center justify-center text-[#A8B0D8] hover:text-[#E0E4FF] hover:border-[#6E8CFB]/30 transition-colors"><X className="w-5 h-5" /></button>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Image side */}
                <div className="relative h-[350px] md:h-full md:min-h-[600px] overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
                  <img src={selectedWatch.image} alt={selectedWatch.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E3665]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#3C467B]/30" />
                  {selectedWatch.badge && (<div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#636CCB] to-[#6E8CFB] text-xs font-semibold uppercase tracking-wider text-[#E0E4FF]">{selectedWatch.badge}</div>)}
                </div>

                {/* Details side */}
                <div className="p-8 md:p-10 flex flex-col">
                  <p className="text-xs text-[#6E8CFB] uppercase tracking-wider font-medium mb-2">{selectedWatch.category}</p>
                  <h2 className="text-3xl md:text-4xl font-semibold text-[#E0E4FF] mb-2">{selectedWatch.name}</h2>
                  <p className="text-2xl font-semibold text-[#6E8CFB] mb-6">{selectedWatch.price}</p>
                  <p className="text-[#A8B0D8] leading-relaxed mb-8">{selectedWatch.longDescription}</p>

                  {/* Specs grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {[{icon: <Clock className="w-4 h-4" />, label: "Movement", val: selectedWatch.movement},{icon: <Shield className="w-4 h-4" />, label: "Case", val: selectedWatch.caseMaterial},{icon: <Gem className="w-4 h-4" />, label: "Crystal", val: selectedWatch.crystal},{icon: <Eye className="w-4 h-4" />, label: "Dial", val: selectedWatch.dialColor}].map((s,i) => (
                      <div key={i} className="p-3 rounded-xl bg-[#2E3665]/50 border border-[#636CCB]/8">
                        <div className="flex items-center gap-2 text-[#6E8CFB] mb-1">{s.icon}<span className="text-[10px] uppercase tracking-wider">{s.label}</span></div>
                        <p className="text-sm text-[#E0E4FF] font-medium">{s.val}</p>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-[#E0E4FF] mb-3 uppercase tracking-wider">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedWatch.features.map(f => (<span key={f} className="px-3 py-1.5 rounded-lg bg-[#636CCB]/8 border border-[#636CCB]/10 text-xs text-[#A8B0D8]">{f}</span>))}
                    </div>
                  </div>

                  {/* Strap info */}
                  <p className="text-xs text-[#7A82B0] mb-8">Strap: {selectedWatch.strapMaterial}</p>

                  {/* CTA */}
                  <div className="mt-auto flex gap-3">
                    <Link href="/#contact" className="flex-1 py-3 rounded-full btn-primary font-semibold flex items-center justify-center gap-2 text-sm">Inquire About This Piece <ArrowRight className="w-4 h-4" /></Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
