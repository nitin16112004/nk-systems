"use client"

import SectionWrapper from "@/components/SectionWrapper"
import { motion } from "framer-motion"
import { metrics } from "@/data/portfolio"

export default function Metrics() {
  return (
    <SectionWrapper id="metrics" plain noPadding>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 text-center md:text-left">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 group relative min-w-0"
          >
            <div className="space-y-1">
              <h3 className={`${metric.compact ? "text-[clamp(1.85rem,4vw,3.35rem)] leading-tight" : "text-6xl md:text-7xl"} font-black text-white group-hover:text-cyan-300 transition-colors duration-700 tracking-tighter break-words`}>
                {metric.value}
              </h3>
              <div className="h-1 w-12 bg-cyan-500/20 group-hover:w-full group-hover:bg-cyan-500 transition-all duration-700 rounded-full" />
            </div>

            <div className="space-y-1">
              <p className="text-xl font-bold text-white/90">{metric.label}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.24em] font-black leading-relaxed">
                {metric.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
