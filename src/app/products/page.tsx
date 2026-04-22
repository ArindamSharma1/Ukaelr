"use client"

import { motion, AnimatePresence, Variants } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ShoppingBag, Star, Eye, X, ArrowRight, Shield, Clock, Gem } from "lucide-react"
import { useState } from "react"

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
}

const itemVariants: Variants = {
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
            <Link href="/" className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#A8B0D8] hover:text-[#6E8CFB] transition-colors mb-6 sm:mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#636CCB]/20 bg-[#636CCB]/10 text-[10px] sm:text-xs text-[#6E8CFB] mb-4 sm:mb-6 uppercase tracking-widest font-bold">
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Exotic Collection</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#E0E4FF] mb-4 leading-tight">Our Timepieces</h1>
              <p className="text-[#A8B0D8] text-base sm:text-lg max-w-xl leading-relaxed">Each watch in our collection is curated for those who appreciate the artistry of precision engineering and timeless design.</p>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-3xl bg-[#3C467B]/40 border border-[#636CCB]/15 backdrop-blur-sm shadow-xl">
              <Star className="w-5 h-5 text-[#6E8CFB] fill-[#6E8CFB]/20" />
              <div>
                <p className="text-[#E0E4FF] font-bold text-sm leading-none mb-1">{watches.length} Pieces</p>
                <p className="text-[#7A82B0] text-[10px] uppercase tracking-wider font-bold">Curated Collection</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full pb-8 sm:pb-12">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-2.5 sm:gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#636CCB] to-[#6E8CFB] text-[#E0E4FF] border-transparent shadow-[0_4px_20px_rgba(99,108,203,0.4)]'
                    : 'bg-[#3C467B]/30 border-[#636CCB]/15 text-[#A8B0D8] hover:border-[#6E8CFB]/40 hover:text-[#E0E4FF]'
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
          >
            {filtered.map((watch) => (
              <motion.div
                variants={itemVariants}
                key={watch.id}
                onMouseEnter={() => setHoveredId(watch.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedWatch(watch)}
                className="group relative rounded-[2rem] overflow-hidden border border-[#636CCB]/10 hover:border-[#6E8CFB]/30 transition-all duration-700 cursor-pointer hover:-translate-y-2 bg-[#3C467B]/20 backdrop-blur-sm"
              >
                {/* Image Container */}
                <div className="relative h-[320px] sm:h-[360px] overflow-hidden bg-[#2E3665]">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E3665] via-transparent to-transparent opacity-60" />
                  
                  {/* Badge */}
                  {watch.badge && (
                    <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] bg-gradient-to-r from-[#636CCB] to-[#6E8CFB] text-[#E0E4FF] shadow-lg shadow-black/20">
                      {watch.badge}
                    </div>
                  )}

                  {/* Quick view overlay - Visible on hover/touch */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 bg-black/20 backdrop-blur-[2px] ${hoveredId === watch.id ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                    <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Eye className="w-4 h-4" /> Quick View
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <p className="text-[10px] text-[#6E8CFB] uppercase tracking-[0.2em] font-black mb-1.5">{watch.category}</p>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#E0E4FF] group-hover:text-[#6E8CFB] transition-colors duration-300 leading-tight">{watch.name}</h3>
                    </div>
                    <span className="text-base sm:text-lg font-black text-[#6E8CFB] ml-4 whitespace-nowrap">{watch.price}</span>
                  </div>
                  
                  <p className="text-sm text-[#A8B0D8] mb-6 leading-relaxed line-clamp-2">{watch.description}</p>
                  
                  {/* Specs */}
                  <div className="flex flex-wrap gap-2">
                    {watch.specs.map(spec => (
                      <span key={spec} className="px-2.5 py-1.5 rounded-xl bg-[#2E3665]/40 border border-[#636CCB]/10 text-[9px] font-bold text-[#7A82B0] uppercase tracking-wider">
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
            <div className="text-center py-24 glass-card rounded-[2.5rem] border border-[#636CCB]/10 max-w-2xl mx-auto">
              <p className="text-[#A8B0D8] text-lg font-medium">No timepieces in this category currently available.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 sm:py-24 mb-12">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center glass-card rounded-[2.5rem] p-8 sm:p-16 border border-[#636CCB]/15 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#636CCB]/5 to-transparent -z-10 group-hover:opacity-100 transition-opacity opacity-50" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#E0E4FF] mb-6 tracking-tight">Interested in a<br className="sm:hidden"/> Timepiece?</h2>
            <p className="text-base sm:text-xl text-[#A8B0D8] mb-10 max-w-2xl mx-auto leading-relaxed">Contact our concierge for private viewings, pricing, and custom order inquiries. We deliver globally with white-glove service.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact" className="w-full sm:w-auto px-10 py-4 rounded-full btn-primary font-black flex items-center justify-center gap-3 text-lg shadow-2xl shadow-[#636CCB]/20">
                Inquire Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/" className="w-full sm:w-auto px-10 py-4 rounded-full border border-[#636CCB]/30 text-[#E0E4FF] font-bold hover:bg-[#636CCB]/15 transition-all text-lg">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedWatch && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10" 
            onClick={() => setSelectedWatch(null)}
          >
            <div className="absolute inset-0 bg-[#2E3665]/90 backdrop-blur-md" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }} 
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#3C467B]/95 backdrop-blur-2xl border border-[#636CCB]/20 shadow-[0_32px_120px_rgba(0,0,0,0.5)] scrollbar-hide"
            >
              {/* Close button */}
              <button 
                onClick={() => setSelectedWatch(null)} 
                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-[#2E3665]/80 border border-[#636CCB]/20 flex items-center justify-center text-[#A8B0D8] hover:text-[#E0E4FF] hover:border-[#6E8CFB]/50 transition-all backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image side */}
                <div className="relative h-[300px] sm:h-[450px] lg:h-auto min-h-[400px] lg:min-h-[700px] overflow-hidden">
                  <img src={selectedWatch.image} alt={selectedWatch.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E3665]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#3C467B]/40" />
                  {selectedWatch.badge && (
                    <div className="absolute top-8 left-8 px-5 py-2 rounded-full bg-gradient-to-r from-[#636CCB] to-[#6E8CFB] text-[10px] font-black uppercase tracking-[0.2em] text-[#E0E4FF] shadow-2xl">
                      {selectedWatch.badge}
                    </div>
                  )}
                </div>

                {/* Details side */}
                <div className="p-6 sm:p-10 lg:p-12 flex flex-col">
                  <div className="mb-6">
                    <p className="text-[10px] text-[#6E8CFB] uppercase tracking-[0.3em] font-black mb-2">{selectedWatch.category}</p>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#E0E4FF] mb-3 leading-tight tracking-tight">{selectedWatch.name}</h2>
                    <div className="flex items-center gap-4">
                      <p className="text-2xl font-black text-[#6E8CFB]">{selectedWatch.price}</p>
                      <div className="px-2.5 py-1 rounded-lg bg-[#636CCB]/10 border border-[#636CCB]/20 text-[9px] text-[#6E8CFB] font-bold uppercase tracking-wider">In Stock</div>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    <p className="text-[#A8B0D8] text-sm sm:text-base leading-relaxed opacity-90">{selectedWatch.longDescription}</p>

                    {/* Specs grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {icon: <Clock className="w-4 h-4" />, label: "Movement", val: selectedWatch.movement},
                        {icon: <Shield className="w-4 h-4" />, label: "Case", val: selectedWatch.caseMaterial},
                        {icon: <Gem className="w-4 h-4" />, label: "Crystal", val: selectedWatch.crystal},
                        {icon: <Eye className="w-4 h-4" />, label: "Dial", val: selectedWatch.dialColor}
                      ].map((s,i) => (
                        <div key={i} className="p-4 rounded-xl bg-[#2E3665]/40 border border-[#636CCB]/10 group/spec hover:border-[#6E8CFB]/30 transition-colors">
                          <div className="flex items-center gap-2 text-[#6E8CFB] mb-1 font-black uppercase tracking-widest text-[8px]">
                            {s.icon}
                            <span>{s.label}</span>
                          </div>
                          <p className="text-xs text-[#E0E4FF] font-bold truncate">{s.val}</p>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-[9px] font-black text-[#E0E4FF] mb-3 uppercase tracking-[0.3em] opacity-50">Technical Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedWatch.features.map(f => (
                          <span key={f} className="px-3 py-1.5 rounded-lg bg-[#636CCB]/10 border border-[#636CCB]/20 text-[10px] font-bold text-[#A8B0D8] hover:bg-[#636CCB]/20 hover:text-[#E0E4FF] transition-all cursor-default">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-[10px] text-[#7A82B0] font-medium tracking-wide border-t border-[#636CCB]/10 pt-6">
                      <span className="uppercase tracking-widest mr-2 opacity-40">Strap:</span> {selectedWatch.strapMaterial}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link 
                      href="/#contact" 
                      onClick={() => setSelectedWatch(null)}
                      className="w-full py-4 rounded-full btn-primary font-black flex items-center justify-center gap-3 text-sm shadow-2xl shadow-[#636CCB]/20"
                    >
                      Inquire About This Piece <ArrowRight className="w-4 h-4" />
                    </Link>
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
