"use client"

import SectionWrapper from "@/components/SectionWrapper"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { BookOpen, Boxes, Code2, Compass, MapPin, Package, type LucideIcon } from "lucide-react"
import { aboutParagraphs, statusItems, type StatusItem } from "@/data/portfolio"

const statusPresentation: Record<
  StatusItem["kind"],
  { icon: LucideIcon; color: string; dot: string }
> = {
  building: { icon: Code2, color: "text-cyan-300", dot: "bg-cyan-400" },
  maintaining: { icon: Package, color: "text-blue-300", dot: "bg-blue-400" },
  exploring: { icon: Compass, color: "text-indigo-300", dot: "bg-indigo-400" },
  learning: { icon: BookOpen, color: "text-cyan-300", dot: "bg-cyan-400" },
  available: { icon: Boxes, color: "text-emerald-300", dot: "bg-emerald-400" },
  location: { icon: MapPin, color: "text-white/70", dot: "bg-white/50" },
}

export default function About() {
  const prefersReducedMotion = useReducedMotion()

  const rightNowVariants: Variants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <SectionWrapper id="about" plain noPadding>
      <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight">
            Who I Am.
          </h2>
          <div className="h-1.5 w-20 bg-cyan-500 rounded-full" />

          <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-medium">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={rightNowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative group"
        >
          <motion.div
            animate={prefersReducedMotion ? {} : { backgroundPosition: ["0% center", "100% center", "0% center"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-30 blur"
            style={{ backgroundSize: "200% 200%" }}
          />

          <div className="relative bg-black/40 backdrop-blur-xl p-7 md:p-10 rounded-2xl border border-white/10 space-y-6">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Right Now</h3>

            <div className="space-y-4 divide-y divide-white/10">
              {statusItems.map((item, i) => {
                const presentation = statusPresentation[item.kind]
                const Icon = presentation.icon

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: prefersReducedMotion ? 0 : 0.1 + i * 0.1, duration: prefersReducedMotion ? 0 : 0.5 }}
                    viewport={{ once: true }}
                    className="py-4 first:pt-0 last:pb-0 space-y-1.5"
                  >
                    <div className={`flex items-center gap-2 text-sm md:text-base font-semibold ${presentation.color}`}>
                      <span className={`w-2 h-2 rounded-full ${presentation.dot}`} aria-hidden="true" />
                      <Icon size={17} aria-hidden="true" />
                      <span>{item.label}</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-400 pl-7 leading-relaxed">{item.value}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
