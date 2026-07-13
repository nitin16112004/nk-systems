"use client"

import SectionWrapper from "@/components/SectionWrapper"
import { motion, type Variants } from "framer-motion"
import { currentlyLearning, skillCategories } from "@/data/portfolio"

export default function Skills() {
  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    }),
  }

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
  }

  return (
    <SectionWrapper id="skills" plain noPadding>
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">The Stack.</h2>
          <div className="h-1.5 w-20 bg-cyan-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              custom={categoryIndex}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-3"
            >
              <h3 className="text-base md:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span className="text-xl" aria-hidden="true">{category.icon}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    custom={skillIndex}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-gray-400 hover:bg-cyan-500/10 hover:border-cyan-500/20 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-3 pt-8 border-t border-white/10"
        >
          <h3 className="text-base md:text-lg font-bold text-white/70 tracking-tight">Currently Learning →</h3>
          <div className="flex flex-wrap gap-2">
            {currentlyLearning.map((skill, index) => (
              <motion.span
                key={skill}
                custom={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + index * 0.05, duration: 0.4 }}
                className="px-3 py-1.5 rounded-full bg-emerald-500/[0.04] border border-emerald-500/15 text-xs md:text-sm font-medium text-gray-400"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
