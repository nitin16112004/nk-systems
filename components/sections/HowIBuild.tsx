"use client"

import { motion, type Variants } from "framer-motion"
import SectionWrapper from "@/components/SectionWrapper"
import { buildPrinciples, type BuildPrinciple } from "@/data/portfolio"

const toneClasses: Record<BuildPrinciple["tone"], { glow: string; border: string; accent: string }> = {
  cyan: { glow: "from-cyan-500/20", border: "border-cyan-500/30", accent: "bg-cyan-400/30" },
  blue: { glow: "from-blue-500/20", border: "border-blue-500/30", accent: "bg-blue-400/30" },
  indigo: { glow: "from-indigo-500/20", border: "border-indigo-500/30", accent: "bg-indigo-400/30" },
  emerald: { glow: "from-emerald-500/15", border: "border-emerald-500/25", accent: "bg-emerald-400/30" },
}

export default function HowIBuild() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.12 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
  }

  return (
    <SectionWrapper id="how-i-build" plain noPadding>
      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight">
            How I Build.
          </h2>
          <div className="h-1.5 w-20 bg-cyan-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {buildPrinciples.map((principle, i) => {
            const tone = toneClasses[principle.tone]

            return (
              <motion.div
                key={principle.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="group relative h-full"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tone.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur`} />
                <div className={`relative h-full bg-white/[0.03] backdrop-blur-xl border ${tone.border} rounded-2xl p-6 md:p-8 space-y-4 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20 group-hover:shadow-lg group-hover:-translate-y-1`}>
                  <div className={`absolute top-0 left-0 right-0 h-1 ${tone.accent} rounded-t-2xl`} />
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight pt-2">{principle.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
