"use client"

import SectionWrapper from "@/components/SectionWrapper"
import { AnimatePresence, motion } from "framer-motion"
import { Clock3, ExternalLink, Github, LockKeyhole, Package, Sparkles, X, type LucideIcon } from "lucide-react"
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react"
import { projects, type ProjectLink } from "@/data/portfolio"

const linkPresentation: Record<ProjectLink["kind"], { icon: LucideIcon; modalLabel: string }> = {
  github: { icon: Github, modalLabel: "Open Repository" },
  demo: { icon: ExternalLink, modalLabel: "Open Live Demo" },
  npm: { icon: Package, modalLabel: "View on NPM" },
  private: { icon: LockKeyhole, modalLabel: "Details available on request" },
  "in-progress": { icon: Clock3, modalLabel: "Currently Building" },
}

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalContentRef = useRef<HTMLDivElement>(null)
  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeId) ?? null,
    [activeId]
  )

  useEffect(() => {
    if (!activeProject) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const focusFrame = window.requestAnimationFrame(() => {
      modalContentRef.current?.scrollTo({ top: 0, behavior: "auto" })
      closeButtonRef.current?.focus()
    })
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [activeProject])

  return (
    <SectionWrapper id="projects" plain noPadding>
      <div className="space-y-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-cyan-300 font-bold tracking-[0.2em] uppercase text-xs">
            <Sparkles size={16} aria-hidden="true" />
            <span>Selected Works</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            Featured <span className="text-white/40 italic">Projects.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Backend architecture, real-time full-stack workflows, developer tooling and practical data management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-700 overflow-hidden flex flex-col justify-between min-w-0 ${
                project.featured
                  ? "md:col-span-2 border-white/20 bg-gradient-to-br from-white/[0.05] to-transparent shadow-[0_0_80px_rgba(255,255,255,0.02)]"
                  : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
              }`}
            >
              <div className="absolute inset-0 p-px bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-cyan-500/15 group-hover:via-blue-500/15 group-hover:to-indigo-500/15 transition-all duration-1000 pointer-events-none" />

              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  {project.featured ? (
                    <div className="inline-flex px-4 py-1.5 rounded-full bg-cyan-500 text-black text-[10px] font-black tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(34,211,238,0.35)]">
                      Flagship
                    </div>
                  ) : null}
                  <div className="space-y-2">
                    <p className="text-cyan-300 text-xs font-bold tracking-[0.18em] uppercase">{project.impact}</p>
                    <h3 className={`font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-500 break-words ${project.featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
                      {project.title}
                    </h3>
                  </div>
                  <p className={`text-gray-400 leading-relaxed ${project.featured ? "text-lg md:text-xl max-w-3xl" : "text-sm md:text-base"}`}>
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    {project.highlights.map((highlight) => (
                      <div key={highlight.label} className="text-sm text-gray-500 leading-relaxed">
                        <span className="text-white/80 font-black tracking-tight">{highlight.label}:</span>{" "}
                        <span className="text-gray-400">{highlight.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tech.map((technology) => (
                      <span key={technology} className="px-3 md:px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-xl border border-white/10 bg-white/5 text-gray-300 group-hover:border-cyan-500/20 group-hover:bg-cyan-500/5 transition-all duration-500">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveId(project.id)}
                    className="flex items-center gap-2 text-xs md:text-sm font-bold text-white uppercase tracking-widest hover:text-cyan-300 transition-colors duration-300 group/link rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    aria-label={`Open ${project.title} deep dive`}
                  >
                    <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" aria-hidden="true" />
                    Deep Dive
                  </button>

                  {project.links.map((link) => {
                    const presentation = linkPresentation[link.kind]
                    const Icon = presentation.icon

                    if (!("href" in link)) {
                      return (
                        <div key={`${project.id}-${link.kind}`} className="flex items-center gap-2 text-xs md:text-sm font-bold text-white/55 uppercase tracking-widest">
                          <Icon size={18} className="opacity-70 shrink-0" aria-hidden="true" />
                          <span>{link.label}</span>
                        </div>
                      )
                    }

                    return (
                      <a
                        key={`${project.id}-${link.kind}`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs md:text-sm font-bold text-white uppercase tracking-widest hover:text-cyan-300 transition-colors duration-300 group/link rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                        aria-label={`${link.label} for ${project.title}`}
                      >
                        <Icon size={18} className="group-hover/link:scale-110 transition-transform shrink-0" aria-hidden="true" />
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] group-hover:bg-cyan-600/10 transition-all duration-1000 pointer-events-none" />
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80]"
            aria-modal="true"
            aria-labelledby="project-deep-dive-title"
            role="dialog"
          >
            <button
              type="button"
              onClick={() => setActiveId(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300"
              aria-label="Close project details"
            >
              <span className="sr-only">Close project details</span>
            </button>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-3 sm:p-4 md:p-8">
              <motion.div
                ref={modalContentRef}
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.985 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-auto relative mx-auto max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl overflow-y-auto overscroll-contain rounded-[2rem] border border-white/10 bg-[#050505]/95 shadow-2xl backdrop-blur-3xl sm:max-h-[calc(100dvh-2rem)] md:max-h-[calc(100dvh-4rem)] md:rounded-[2.75rem]"
              >
                <div className="absolute inset-0 opacity-70 pointer-events-none" style={{ backgroundImage: "radial-gradient(1200px circle at 20% 0%, rgba(37,99,235,0.16), transparent 55%)" }} />
                <div className="relative z-10 p-5 sm:p-8 md:p-12 space-y-8 md:space-y-10">
                  <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-5 sm:gap-8">
                    <div className="space-y-3 min-w-0">
                      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">Project Deep Dive</div>
                      <h3 id="project-deep-dive-title" className="text-3xl md:text-5xl font-black tracking-tight text-white break-words">
                        {activeProject.title}
                      </h3>
                      <p className="text-white/65 text-base md:text-lg leading-relaxed">{activeProject.description}</p>
                    </div>
                    <button
                      ref={closeButtonRef}
                      type="button"
                      onClick={() => setActiveId(null)}
                      className="sticky top-0 z-20 inline-flex shrink-0 items-center gap-2 rounded-2xl border border-white/10 bg-[#050505]/90 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                      aria-label="Close project details"
                    >
                      <X size={16} aria-hidden="true" />
                      Close
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((technology) => (
                      <span key={technology} className="px-3 md:px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-xl border border-white/10 bg-white/5 text-gray-300">
                        {technology}
                      </span>
                    ))}
                  </div>

                  <DeepDiveSection title="Problem">
                    <p className="text-white/75 leading-relaxed">{activeProject.deepDive.problem}</p>
                  </DeepDiveSection>

                  <DeepDiveSection title="Approach">
                    <p className="text-white/75 leading-relaxed">{activeProject.deepDive.approach}</p>
                  </DeepDiveSection>

                  <DeepDiveSection title="System Flow">
                    <BulletList items={activeProject.deepDive.flow} />
                  </DeepDiveSection>

                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <DeepDiveSection title="Results">
                      <BulletList items={activeProject.deepDive.results} tone="emerald" />
                    </DeepDiveSection>

                    <DeepDiveSection title="Project Highlights">
                      <div className="space-y-3">
                        {activeProject.highlights.map((highlight) => (
                          <div key={highlight.label} className="text-white/75 leading-relaxed">
                            <span className="text-white/90 font-black tracking-tight">{highlight.label}:</span>{" "}
                            {highlight.text}
                          </div>
                        ))}
                      </div>
                    </DeepDiveSection>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <DeepDiveSection title="Trade-offs">
                      <BulletList items={activeProject.deepDive.tradeoffs} />
                    </DeepDiveSection>
                    <DeepDiveSection title="Challenges">
                      <BulletList items={activeProject.deepDive.challenges} />
                    </DeepDiveSection>
                  </div>

                  <DeepDiveSection title="Next Improvements">
                    <BulletList items={activeProject.deepDive.next} tone="blue" />
                  </DeepDiveSection>

                  <div className="flex flex-wrap gap-4 pt-2">
                    {activeProject.links.map((link) => {
                      const presentation = linkPresentation[link.kind]
                      const Icon = presentation.icon

                      if (!("href" in link)) {
                        return (
                          <div key={`${activeProject.id}-${link.kind}-modal`} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                            <Icon size={15} aria-hidden="true" />
                            {link.label}
                          </div>
                        )
                      }

                      return (
                        <a
                          key={`${activeProject.id}-${link.kind}-modal`}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-white/75 hover:bg-white/10 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                        >
                          <Icon size={15} aria-hidden="true" />
                          {presentation.modalLabel}
                        </a>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionWrapper>
  )
}

function DeepDiveSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/55">{title}</div>
      <div className="rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-8">{children}</div>
    </div>
  )
}

function BulletList({ items, tone = "default" }: { items: string[]; tone?: "default" | "emerald" | "blue" }) {
  const dotClass = tone === "emerald" ? "bg-emerald-400/70" : tone === "blue" ? "bg-cyan-400/70" : "bg-white/25"

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-white/75">
          <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${dotClass}`} />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}
