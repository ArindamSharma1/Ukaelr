"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    name: "Starter Plan",
    priceMonthly: "$99",
    priceAnnually: "$79",
    description: "Perfect for solo founders and small teams just getting started",
    features: [
      "Up to 10 languages",
      "10K monthly messages",
      "5 channels",
      "Basic automation flows",
      "Email sequences",
      "Dashboard analytics",
      "Standard support"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Professional Plan",
    priceMonthly: "$499",
    priceAnnually: "$399",
    description: "For growing teams that need more reach and smarter insights",
    features: [
      "30+ languages",
      "100K monthly messages",
      "Unlimited channels",
      "Advanced automation builder",
      "Multi-channel outreach (Email, SMS)",
      "Lead scoring + AI optimization",
      "Priority support"
    ],
    cta: "Start Scaling",
    popular: true
  },
  {
    name: "Enterprise Plan",
    priceMonthly: "Custom",
    priceAnnually: "Custom",
    description: "Engineered for sales-heavy teams and enterprises demanding premium support.",
    features: [
      "Unlimited languages",
      "Unlimited monthly messages",
      "Unlimited channels + integrations",
      "AI-driven workflows + playbooks",
      "CRM + Slack integrations",
      "Webhooks & API access",
      "Dedicated account manager"
    ],
    cta: "Request Demo",
    popular: false
  }
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="w-full py-24 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-6 uppercase tracking-wider">
            Simple Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Pricing Built for Every Stage
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg mb-10">
            Start small, scale fast. Your plan grows with you—only pay for what your team needs.
          </p>

          <div className="flex items-center gap-4 text-sm font-medium">
            <span className={!isAnnual ? "text-white" : "text-gray-500"}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 rounded-full bg-white/10 relative border border-white/20 transition-colors duration-300"
            >
              <motion.div 
                animate={{ x: isAnnual ? 24 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-5 h-5 rounded-full bg-white absolute top-0.5"
              />
            </button>
            <span className={isAnnual ? "text-white" : "text-gray-500"}>Annually <span className="text-emerald-400 ml-1">Save 20%</span></span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className={`rounded-3xl p-8 flex flex-col relative ${plan.popular ? 'border border-emerald-500/50 shadow-[0_0_50px_rgba(52,211,153,0.1)] bg-gradient-to-b from-[#0a1519] to-[#04080b]' : 'border border-white/10 glass-card'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white flex items-center gap-1 backdrop-blur-md">
                  🔥 Most Popular
                </div>
              )}
              
              <div className="mb-8 flex-1">
                <h3 className="text-xl font-medium text-white mb-4">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  {plan.priceMonthly === "Custom" ? (
                    <span className="text-4xl font-semibold text-white">Custom Pricing</span>
                  ) : (
                    <>
                      <span className="text-4xl font-semibold text-white">{isAnnual ? plan.priceAnnually : plan.priceMonthly}</span>
                      <span className="text-gray-500 mb-1">/month</span>
                    </>
                  )}
                </div>
                {plan.priceMonthly !== "Custom" && (
                  <p className="text-sm text-gray-500 mb-6 border-b border-white/10 pb-6">
                    {isAnnual ? `or ${plan.priceMonthly}/mo billed monthly` : `or ${plan.priceAnnually}/mo billed yearly`}
                  </p>
                )}
                {plan.priceMonthly === "Custom" && (
                  <p className="text-sm text-gray-500 mb-6 border-b border-white/10 pb-6">
                    Contact for custom discount
                  </p>
                )}
                <p className="text-sm text-gray-400 min-h-[60px]">{plan.description}</p>
                
                <ul className="space-y-4 mt-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3 rounded-full font-medium transition-all flex justify-center items-center gap-2 ${plan.popular ? 'btn-primary text-black hover:shadow-[0_0_20px_rgba(162,252,134,0.4)]' : 'border border-white/20 text-white hover:bg-white/5'}`}>
                {plan.cta} {plan.popular && <ArrowRight className="w-4 h-4" />}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
