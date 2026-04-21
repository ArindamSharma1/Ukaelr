"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
    >
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-[#0a1017]/80 backdrop-blur-md border border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-medium text-white tracking-wide">Orbita AI</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#testimonial" className="hover:text-white transition-colors">Testimonial</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        <button className="px-5 py-2 rounded-full border border-white/20 text-sm hover:bg-white/5 transition-colors">
          Sign In
        </button>
      </div>
    </motion.nav>
  )
}
