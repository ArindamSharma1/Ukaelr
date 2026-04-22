"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4"
    >
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-[#F7F3EB]/85 backdrop-blur-md border border-[#0D9488]/10 shadow-[0_4px_20px_rgba(13,148,136,0.06)]">
        <Link href="/" className="flex items-center py-1">
          <img src="/ukaelr-logo.png" alt="Ukaelr Logo" className="h-7 w-auto" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-[#6B7C8E]">
          <Link href="#about" className="hover:text-[#0D9488] transition-colors">About</Link>
          <Link href="#services" className="hover:text-[#0D9488] transition-colors">Services</Link>
          <Link href="#capabilities" className="hover:text-[#0D9488] transition-colors">Capabilities</Link>
          <Link href="#vision" className="hover:text-[#0D9488] transition-colors">Vision</Link>
          <Link href="#contact" className="hover:text-[#0D9488] transition-colors">Contact</Link>
        </div>

        <button className="px-5 py-2 rounded-full border border-[#0D9488]/30 text-sm text-[#0D9488] hover:bg-[#0D9488]/10 hover:border-[#0D9488]/50 transition-colors font-medium">
          Get in Touch
        </button>
      </div>
    </motion.nav>
  )
}
