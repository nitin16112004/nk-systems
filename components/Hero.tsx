"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, MapPin, type LucideIcon } from "lucide-react"
import { profile, socialLinks, type SocialPlatform } from "@/data/portfolio"

const heroSocials: Array<{ platform: SocialPlatform; icon: LucideIcon }> = [
  { platform: "github", icon: Github },
  { platform: "linkedin", icon: Linkedin },
  { platform: "email", icon: Mail },
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [imageFailed, setImageFailed] = useState(false)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30, filter: prefersReducedMotion ? "none" : "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: prefersReducedMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : i * 0.05,
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  }

  const taglineVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: prefersReducedMotion ? 0 : 0.8 + i * 0.038,
        duration: prefersReducedMotion ? 0 : 0.1,
      },
    }),
  }

  const pillVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: prefersReducedMotion ? 0 : 1.8 + i * 0.2,
        duration: prefersReducedMotion ? 0 : 0.4,
      },
    }),
  }

  const badgePulseVariants: Variants = {
    animate: prefersReducedMotion
      ? {}
      : {
          scale: [1, 1.02, 1],
          boxShadow: [
            "0 0 20px rgba(34, 211, 238, 0)",
            "0 0 30px rgba(34, 211, 238, 0.4)",
            "0 0 20px rgba(34, 211, 238, 0)",
          ],
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        },
  }

  const arrowVariants: Variants = prefersReducedMotion
    ? {}
    : {
        animate: {
          y: [0, 8, 0],
          transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        },
      }

  let letterIndex = 0

  return (
    <section className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-24 overflow-hidden pt-[120px] md:pt-[160px] lg:pt-[180px] pb-16 md:pb-24">
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        animate={prefersReducedMotion ? {} : { y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center w-full max-w-[1240px] mx-auto relative z-10"
      >
        <div className="space-y-6 md:space-y-8 relative z-10 order-2 lg:order-1 text-center lg:text-left min-w-0">
          <div className="space-y-4">
            <motion.h2 variants={itemVariants} className="text-lg md:text-xl lg:text-2xl font-medium text-gray-400 tracking-tight">
              Hi, I&apos;m
            </motion.h2>

            <h1 className="flex flex-wrap justify-center lg:justify-start gap-x-[0.22em] gap-y-1 text-[clamp(2.65rem,10vw,7rem)] font-black leading-[0.84] tracking-[-0.075em] bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent" aria-label={profile.name}>
              {profile.name.split(" ").map((word) => (
                <span key={word} className="inline-flex whitespace-nowrap" aria-hidden="true">
                  {word.split("").map((letter) => {
                    const currentIndex = letterIndex++
                    return (
                      <motion.span
                        key={`${word}-${currentIndex}`}
                        custom={currentIndex}
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {letter}
                      </motion.span>
                    )
                  })}
                </span>
              ))}
            </h1>

            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 mt-2">
              <MapPin size={16} aria-hidden="true" />
              <span className="text-sm font-medium tracking-wide">{profile.location}</span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-sm md:text-base font-bold text-cyan-300/90 tracking-wide">
              {profile.headline}
            </motion.p>
          </div>

          <motion.div className="space-y-4 md:space-y-6">
            <div
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 leading-tight max-w-2xl mx-auto lg:mx-0"
              aria-label={profile.tagline}
            >
              <span aria-hidden="true">
                {profile.tagline.split("").map((letter, i) => (
                  <motion.span key={`${letter}-${i}`} custom={i} variants={taglineVariants} initial="hidden" animate="visible">
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  animate={prefersReducedMotion ? {} : { opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }}
                  className="text-cyan-400"
                >
                  |
                </motion.span>
              </span>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {profile.roles.map((role, i) => (
                <motion.div
                  key={role}
                  custom={i}
                  variants={pillVariants}
                  initial="hidden"
                  animate="visible"
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/20 text-xs md:text-sm font-medium text-white/80"
                >
                  {role}
                </motion.div>
              ))}
            </div>

            <motion.div variants={badgePulseVariants} animate={prefersReducedMotion ? "initial" : "animate"} className="inline-flex max-w-full">
              <div className="inline-flex max-w-full items-center justify-center gap-2 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.16em] sm:tracking-[0.22em] text-emerald-300 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>{profile.availability}</span>
              </div>
            </motion.div>

            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {profile.summary}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 pt-2">
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-black text-sm md:text-base font-bold rounded-full transition-all duration-500 hover:pr-10 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              <span className="relative z-10">Resume</span>
              <span className="absolute right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" aria-hidden="true">
                <ArrowRight size={18} />
              </span>
            </a>

            <div className="flex gap-3 md:gap-4">
              {heroSocials.map(({ platform, icon: Icon }) => {
                const social = socialLinks.find((item) => item.platform === platform)
                if (!social) return null
                const external = social.href.startsWith("http")

                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="p-3 md:p-4 border border-white/10 bg-white/[0.03] rounded-full text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            variants={arrowVariants}
            animate={prefersReducedMotion ? "initial" : "animate"}
            className="text-[10px] text-gray-600 tracking-[0.3em] uppercase pt-6 md:pt-8 font-bold flex items-center justify-center lg:justify-start"
          >
            Scroll to explore ↓
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9, filter: prefersReducedMotion ? "none" : "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.5, ease: [0.16, 1, 0.3, 1], delay: prefersReducedMotion ? 0 : 0.5 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className={`relative w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] rounded-full p-2 border border-white/10 bg-white/[0.02] shadow-[0_0_100px_rgba(37,99,235,0.08)] group transition-transform duration-700 ${prefersReducedMotion ? "" : "animate-float"}`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-indigo-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/5 bg-gradient-to-br from-cyan-500/20 via-blue-950 to-indigo-500/20">
              {imageFailed ? (
                <div className="absolute inset-0 flex items-center justify-center text-7xl md:text-8xl font-black tracking-tighter text-white" aria-label={profile.imageAlt}>
                  {profile.initials}
                </div>
              ) : (
                <Image
                  src={profile.imagePath}
                  alt={profile.imageAlt}
                  fill
                  sizes="(max-width: 639px) 230px, (max-width: 767px) 300px, (max-width: 1023px) 380px, 450px"
                  priority
                  onError={() => setImageFailed(true)}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                />
              )}
            </div>

            <motion.div
              className="absolute -top-4 -right-4 p-4 bg-black/80 backdrop-blur-xl border border-emerald-400/30 rounded-2xl shadow-2xl group-hover:-translate-y-2 transition-transform duration-500 hidden md:block"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold text-emerald-300 tracking-widest uppercase">Open to Opportunities</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
