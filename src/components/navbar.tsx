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
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-[#2E3665]/85 backdrop-blur-md border border-[#636CCB]/12 shadow-[0_4px_20px_rgba(46,54,101,0.4)]">
        <Link href="/" className="flex items-center py-1">
          <img src="/ukaelr-logo.png" alt="Ukaelr Logo" className="h-7 w-auto mix-blend-screen" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-[#A8B0D8]">
          <Link href="#about" className="hover:text-[#6E8CFB] transition-colors">About</Link>
          <Link href="#services" className="hover:text-[#6E8CFB] transition-colors">Services</Link>
          <Link href="#capabilities" className="hover:text-[#6E8CFB] transition-colors">Capabilities</Link>
          <Link href="#vision" className="hover:text-[#6E8CFB] transition-colors">Vision</Link>
          <Link href="#contact" className="hover:text-[#6E8CFB] transition-colors">Contact</Link>
        </div>

        <button className="px-5 py-2 rounded-full border border-[#636CCB]/30 text-sm text-[#E0E4FF] hover:bg-[#636CCB]/15 hover:border-[#6E8CFB]/50 transition-colors font-medium">
          Get in Touch
        </button>
      </div>
    </motion.nav>
  )
}
