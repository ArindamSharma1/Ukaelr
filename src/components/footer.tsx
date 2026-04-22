"use client"



export default function Footer() {
  return (
    <footer className="w-full relative z-10 border-t border-white/10 pt-20 pb-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6 py-2">
              <img src="/ukaelr-logo.png" alt="Ukaelr Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              Engineering excellence in plant machinery, industrial infrastructure, scientific research, and intellectual property. Building India&apos;s industrial future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Plant Machinery</a></li>
              <li><a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Infrastructure</a></li>
              <li><a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Scientific Research</a></li>
              <li><a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Patents & IP</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#vision" className="text-sm text-gray-400 hover:text-white transition-colors">Vision & Mission</a></li>
              <li><a href="#capabilities" className="text-sm text-gray-400 hover:text-white transition-colors">Capabilities</a></li>
              <li><a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
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
          <p className="text-sm text-gray-500">© 2026 UKAELR (OPC) PRIVATE LIMITED. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-sm text-gray-500">Engineering Excellence Since Day One</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
