"use client"

import SectionWrapper from "@/components/SectionWrapper"
import { motion } from "framer-motion"
import { Award, Boxes, ExternalLink, GraduationCap, History, Package, type LucideIcon } from "lucide-react"
import { certifications, timelineItems, type TimelineItem } from "@/data/portfolio"

const timelineIcons: Record<TimelineItem["kind"], { icon: LucideIcon; color: string }> = {
  opensource: { icon: Package, color: "text-cyan-300" },
  project: { icon: Boxes, color: "text-blue-300" },
  education: { icon: GraduationCap, color: "text-indigo-300" },
  leadership: { icon: Award, color: "text-emerald-300" },
}

export default function Timeline() {
  return (
    <SectionWrapper id="experience" plain noPadding>
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center md:text-left space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-3 text-emerald-300 font-bold tracking-[0.2em] uppercase text-xs">
            <History size={16} aria-hidden="true" />
            <span>Experience, Projects &amp; Education</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            My <span className="text-white/40 italic">Journey.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mx-auto md:ml-0">
            A practical path through open-source backend tooling, full-stack projects, computer science education and campus collaboration.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {timelineItems.map((item, index) => {
            const presentation = timelineIcons[item.kind]
            const Icon = presentation.icon

            return (
              <motion.div
                key={`${item.title}-${item.date}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-white/20 bg-black text-white shadow-2xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-700 group-hover:scale-110 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.16)] z-20">
                  <Icon className={presentation.color} size={24} aria-hidden="true" />
                </div>

                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-3.5rem)] p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl hover:bg-white/[0.05] transition-all duration-700 group-hover:border-cyan-500/20 group-hover:shadow-[0_0_80px_rgba(34,211,238,0.02)] min-w-0">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6">
                    <div className="space-y-1 min-w-0">
                      <h3 className="font-black text-white text-xl md:text-2xl group-hover:text-cyan-300 transition-colors duration-500 break-words">
                        {item.title}
                      </h3>
                      <div className="text-cyan-300/80 text-sm font-bold flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{item.organization}</span>
                      </div>
                    </div>
                    <time className="text-[10px] font-black text-gray-500 uppercase tracking-[0.16em] bg-white/5 px-3 py-1.5 rounded-xl border border-white/5 group-hover:text-cyan-300 group-hover:border-cyan-500/20 transition-all self-start whitespace-normal">
                      {item.date}
                    </time>
                  </div>
                  <ul className="text-gray-500 text-sm md:text-base space-y-4 leading-relaxed">
                    {item.description.map((description) => (
                      <li key={description} className="flex items-start gap-3 group/item">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0 group-hover/item:bg-cyan-400 transition-colors duration-300" />
                        <span className="group-hover/item:text-gray-300 transition-colors duration-300">{description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="space-y-6 pt-8 border-t border-white/10"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white tracking-tight">Certifications &amp; Learning</h3>
            <p className="text-sm text-gray-500">Verified credentials and clearly marked ongoing learning.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((certification, index) => {
              const content = (
                <>
                  <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${certification.status === "Certificate" ? "bg-cyan-400" : "bg-emerald-400"}`} />
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-semibold text-white">{certification.title}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-[0.14em] font-bold">{certification.status}</p>
                  </div>
                  {certification.href ? <ExternalLink size={16} className="text-white/35 group-hover:text-cyan-300 transition-colors" aria-hidden="true" /> : null}
                </>
              )

              return (
                <motion.div
                  key={certification.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {certification.href ? (
                    <a
                      href={certification.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="group flex h-full items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                      {content}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
