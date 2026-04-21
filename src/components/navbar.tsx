"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
    >
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-[#020b22]/80 backdrop-blur-md border border-white/10 shadow-lg">
        <Link href="/" className="flex items-center py-1">
          <img src="/ukaelr-logo.png" alt="Ukaelr Logo" className="h-7 w-auto mix-blend-screen" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#testimonial" className="hover:text-white transition-colors">Testimonials</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        <button className="px-5 py-2 rounded-full border border-blue-500/30 text-sm hover:bg-blue-500/10 hover:border-blue-400/50 transition-colors">
          Sign In
        </button>
      </div>
    </motion.nav>
  )
}
