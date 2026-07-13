"use client"

import SectionWrapper from "@/components/SectionWrapper"
import { motion } from "framer-motion"
import { ArrowUpRight, BookOpenCheck, Database, Package, type LucideIcon } from "lucide-react"
import { openSourceItems, type OpenSourceItem } from "@/data/portfolio"

const itemPresentation: Record<OpenSourceItem["kind"], { icon: LucideIcon; color: string }> = {
  opensource: { icon: Package, color: "text-cyan-300" },
  database: { icon: Database, color: "text-blue-300" },
  learning: { icon: BookOpenCheck, color: "text-emerald-300" },
}

export default function OpenSource() {
  return (
    <SectionWrapper id="opensource" plain noPadding>
      <div className="space-y-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-cyan-300 font-bold tracking-[0.2em] uppercase text-xs">
            <Package size={16} aria-hidden="true" />
            <span>Open Source &amp; Continuous Learning</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            Building Beyond <span className="text-white/40 italic">Projects.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {openSourceItems.map((item, index) => {
            const presentation = itemPresentation[item.kind]
            const Icon = presentation.icon
            const body = (
              <>
                <div className="flex items-center justify-between gap-4">
                  <span className="p-3 rounded-2xl bg-black/40 border border-white/5">
                    <Icon className={presentation.color} size={22} aria-hidden="true" />
                  </span>
                  {item.href ? <ArrowUpRight size={19} className="text-white/35 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden="true" /> : null}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
                <span className={`inline-flex w-fit rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] ${item.kind === "learning" ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-300" : "border-cyan-500/20 bg-cyan-500/5 text-cyan-300"}`}>
                  {item.label}
                </span>
              </>
            )

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col justify-between gap-8 p-8 md:p-10 rounded-[2.25rem] border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/20 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="group flex h-full flex-col justify-between gap-8 p-8 md:p-10 rounded-[2.25rem] border border-white/10 bg-white/[0.02]">
                    {body}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
