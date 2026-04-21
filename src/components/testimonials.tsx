"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    logo: "Spherule",
    quote: `"We entered 3 new markets in 6 months thanks to Orbita AI. Language was never a problem."`,
    author: "Marco Rodriguez",
    role: "CEO, SaaS Startup Co.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80"
  },
  {
    logo: "Olivienne",
    quote: `"Our support team now handles 5x more conversations without burnout. Orbita AI is game-changing."`,
    author: "Sarah Chen",
    role: "Support Manager, E-commerce Brand",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonial" className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-6 uppercase tracking-wider">
            In Their Words
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Trusted by Global Teams
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            See what customers are saying about Orbita AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="glass-card rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <div className="flex-1 flex flex-col justify-between h-full">
                <div className="text-xl font-bold font-serif mb-8 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white/80" />
                  </div>
                  {testimonial.logo}
                </div>
                <div>
                  <p className="text-lg md:text-xl text-gray-300 font-medium mb-8 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              <div className="w-32 h-40 md:w-48 md:h-56 rounded-2xl overflow-hidden shrink-0">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:saturate-100 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
