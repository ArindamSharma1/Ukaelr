"use client"

import { Sparkles, Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full relative z-10 border-t border-white/10 bg-[#03080c] pt-20 pb-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-white tracking-wide text-xl">Orbita AI</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              Keep your business in orbit with seamless communication, instant responses, and smarter support across 30+ languages.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 Orbita AI. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-gray-500">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
