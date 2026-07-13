"use client"

import { ArrowUp, ChevronRight, Github, Linkedin, Mail, Package, type LucideIcon } from "lucide-react"
import { emailComposeUrl, profile, socialLinks, type SocialPlatform } from "@/data/portfolio"

const footerSocials: Array<{ platform: SocialPlatform; icon: LucideIcon }> = [
  { platform: "github", icon: Github },
  { platform: "linkedin", icon: Linkedin },
  { platform: "email", icon: Mail },
  { platform: "npm", icon: Package },
]

const footerNavigation = [
  { name: "About Me", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Featured Projects", href: "/#projects" },
  { name: "Technical Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black text-gray-400 py-24 md:py-32 px-6 md:px-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 mb-24">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <h3 className="text-3xl font-black text-white tracking-tighter">
            NITIN <span className="text-white/40 italic">KUMAR.</span>
          </h3>
          <div className="space-y-2">
            <p className="max-w-md text-white text-lg leading-relaxed font-bold">{profile.tagline}</p>
            <p className="max-w-md text-gray-500 text-base leading-relaxed font-medium">
              Backend engineering, real-time applications and reusable developer tooling.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {footerSocials.map(({ platform, icon: Icon }) => {
              const social = socialLinks.find((item) => item.platform === platform)
              if (!social) return null
              const external = social.href.startsWith("http")

              return (
                <a
                  key={social.platform}
                  href={social.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white hover:text-black transition-all duration-500 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  aria-label={social.label}
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Navigation</h4>
          <ul className="space-y-5">
            {footerNavigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:text-cyan-300"
                >
                  <ChevronRight size={14} className="text-cyan-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" aria-hidden="true" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Contact</h4>
          <ul className="space-y-5">
            <li>
              <a
                href={emailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-gray-500 hover:text-white break-all transition-colors duration-300 focus-visible:outline-none focus-visible:text-cyan-300"
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.phoneHref} className="text-sm font-bold text-gray-500 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:text-cyan-300">
                {profile.phone}
              </a>
            </li>
            <li className="text-sm font-bold text-gray-600">{profile.location}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-black text-gray-600 tracking-[0.25em] uppercase text-center md:text-left">
          © {new Date().getFullYear()} Nitin Kumar — Portfolio
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className="group flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-[0.3em] hover:text-cyan-300 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded-lg"
        >
          <span>Back to Top</span>
          <span className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/30 transition-all">
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
          </span>
        </button>
      </div>
    </footer>
  )
}
