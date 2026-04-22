"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/#services", label: "Services" },
    { href: "/#capabilities", label: "Capabilities" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4"
      >
        <div className="flex items-center justify-between px-6 py-2.5 rounded-full bg-[#2E3665]/80 backdrop-blur-lg border border-[#636CCB]/15 shadow-[0_8px_32px_rgba(46,54,101,0.5)]">
          <Link href="/" className="flex items-center py-1 z-[60]">
            <img src="/ukaelr-logo.png" alt="Ukaelr Logo" className="h-7 w-auto mix-blend-screen" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A8B0D8]">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="hover:text-[#6E8CFB] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6E8CFB] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link 
              href="/#contact" 
              className="hidden sm:block px-5 py-2 rounded-full border border-[#636CCB]/30 text-sm text-[#E0E4FF] hover:bg-[#636CCB]/20 hover:border-[#6E8CFB]/40 transition-all font-medium"
            >
              Get in Touch
            </Link>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#A8B0D8] hover:text-[#E0E4FF] transition-colors z-[60]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[45] md:hidden bg-[#2E3665]/95 backdrop-blur-2xl pt-32 px-8 flex flex-col items-center gap-8"
          >
            <div className="flex flex-col items-center gap-6 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.label}
                  className="w-full text-center"
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-semibold text-[#E0E4FF] hover:text-[#6E8CFB] transition-colors block py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 w-full"
            >
              <Link 
                href="/#contact" 
                onClick={() => setIsOpen(false)}
                className="w-full py-4 rounded-2xl btn-primary flex items-center justify-center text-lg font-bold"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
