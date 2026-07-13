"use client"

import SectionWrapper from "@/components/SectionWrapper"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, MessageCircle, Package, Phone, Send, type LucideIcon } from "lucide-react"
import { emailComposeUrl, profile, socialLinks, type SocialPlatform } from "@/data/portfolio"

const contactSocials: Array<{ platform: SocialPlatform; icon: LucideIcon }> = [
  { platform: "github", icon: Github },
  { platform: "linkedin", icon: Linkedin },
  { platform: "npm", icon: Package },
]

export default function Contact() {
  const contactMethods = [
    { icon: Mail, label: "Email", value: profile.email, href: emailComposeUrl, tone: "cyan" },
    { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref, tone: "emerald" },
  ] as const

  return (
    <SectionWrapper id="contact" plain noPadding>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="max-w-[1240px] w-full mx-auto bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group flex flex-col lg:flex-row"
      >
        <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[140px] group-hover:bg-blue-500/20 transition-all duration-1000 pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[140px] group-hover:bg-cyan-500/15 transition-all duration-1000 pointer-events-none" />

        <div className="relative z-10 w-full lg:w-[58%] p-7 sm:p-8 md:p-14 lg:p-16 xl:p-20 flex flex-col justify-between">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-cyan-300 font-bold tracking-[0.2em] uppercase text-xs">
                <MessageCircle size={16} aria-hidden="true" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-tight">
                Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 italic">Build.</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                Open to backend development, software engineering, full-stack opportunities, internships with PPO, and 2027 graduate roles.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactMethods.map((item) => {
                const Icon = item.icon
                const cyan = item.tone === "cyan"
                const external = item.href.startsWith("http")

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 sm:gap-5 group/item min-w-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <span className={`p-4 md:p-5 rounded-[1.25rem] md:rounded-[1.5rem] bg-white/5 border border-white/10 transition-all duration-500 ${cyan ? "group-hover/item:bg-cyan-500/10 group-hover/item:border-cyan-500/20" : "group-hover/item:bg-emerald-500/10 group-hover/item:border-emerald-500/20"}`}>
                      <Icon size={24} className={`${cyan ? "group-hover/item:text-cyan-300" : "group-hover/item:text-emerald-300"} text-gray-400 transition-colors`} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black mb-1">{item.label}</span>
                      <span className={`block text-white text-sm sm:text-base md:text-lg font-bold break-all sm:break-normal transition-colors ${cyan ? "group-hover/item:text-cyan-300" : "group-hover/item:text-emerald-300"}`}>
                        {item.value}
                      </span>
                    </span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-12 sm:mt-16">
            {contactSocials.map(({ platform, icon: Icon }) => {
              const social = socialLinks.find((item) => item.platform === platform)
              if (!social) return null

              return (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  aria-label={social.label}
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="relative z-10 w-full lg:w-[42%] bg-white/[0.03] border-t lg:border-t-0 lg:border-l border-white/10 p-7 sm:p-8 md:p-14 lg:p-14 xl:p-20 flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 pointer-events-none" />
          <div className="relative space-y-10">
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight">Quick Intro</h3>
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                The fastest way to reach me is by email or LinkedIn. Please include the role, location, timeline and a short description of the opportunity.
              </p>
            </div>

            <a
              href={emailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 lg:py-6 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.24)] group/button relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              <Send size={20} className="group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform" aria-hidden="true" />
              Email Me
            </a>

            <div className="flex items-center gap-3 bg-white/5 w-fit px-4 py-2.5 rounded-full border border-white/5">
              <MapPin size={15} className="text-emerald-300" aria-hidden="true" />
              <p className="text-[10px] sm:text-xs text-gray-300 uppercase tracking-[0.1em] font-bold">
                Based in {profile.location}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
