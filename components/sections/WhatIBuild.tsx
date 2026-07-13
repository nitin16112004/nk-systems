"use client"

import SectionWrapper from "@/components/SectionWrapper"
import { motion } from "framer-motion"
import { BellRing, Boxes, Layers3, Package, ShieldCheck, type LucideIcon } from "lucide-react"
import { capabilities, type Capability } from "@/data/portfolio"

const capabilityIcons: Record<Capability["icon"], { icon: LucideIcon; color: string }> = {
  shield: { icon: ShieldCheck, color: "text-cyan-300" },
  realtime: { icon: BellRing, color: "text-blue-300" },
  package: { icon: Package, color: "text-indigo-300" },
  layers: { icon: Layers3, color: "text-emerald-300" },
}

export default function WhatIBuild() {
  return (
    <SectionWrapper id="what-i-build" plain noPadding>
      <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
        <div className="lg:w-1/3 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-cyan-300 font-bold tracking-[0.2em] uppercase text-xs">
              <Boxes size={16} aria-hidden="true" />
              <span>Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black leading-tight text-white tracking-tighter">
              What I <span className="text-white/40 italic">Build.</span>
            </h2>
            <div className="h-1.5 w-24 bg-cyan-500 rounded-full mx-auto lg:ml-0" />
          </div>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Secure backends, real-time experiences, reusable tooling and full-stack platforms designed around maintainable boundaries.
          </p>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {capabilities.map((item, index) => {
            const presentation = capabilityIcons[item.icon]
            const Icon = presentation.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 space-y-6">
                  <div className="mb-4 p-4 w-fit rounded-2xl bg-black/40 border border-white/5 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-500">
                    <Icon className={presentation.color} size={24} aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors duration-500 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-500 text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
