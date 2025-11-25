"use client";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { FaBriefcase, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

export function TimelineExperience() {
  return (
    <Section id="experience" title="" subtitle="">
      {/* Custom game-style header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <FaBriefcase className="text-purple-400 text-xl" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Journey Timeline
            </h2>
            <p className="text-sm text-foreground/60">Career progression & milestones unlocked</p>
          </div>
        </motion.div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-transparent" />

        {profile.experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="relative pl-8 sm:pl-20 pb-8 last:pb-0"
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
              className="absolute left-0 sm:left-8 top-0 -translate-x-1/2 z-10"
            >
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50" />
                <div className="absolute inset-0 rounded-full bg-purple-500/50 animate-ping" />
              </div>
            </motion.div>

            {/* Experience card */}
            <div className="group relative rounded-xl border border-foreground/10 p-5 bg-gradient-to-br from-purple-500/5 to-pink-500/5 hover:from-purple-500/10 hover:to-pink-500/10 transition-all">
              {/* Period badge */}
              <div className="absolute -top-3 right-4 px-3 py-1 bg-background text-xs font-mono text-purple-400 border border-purple-500/30 rounded-full">
                {item.period}
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-purple-400 transition-colors flex items-center gap-2">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <span className="text-sm font-medium text-foreground/70">{item.company}</span>
                    {item.location && (
                      <span className="flex items-center gap-1 text-xs text-foreground/50">
                        <FaMapMarkerAlt className="text-pink-400" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2">
                  {item.bullets.map((bullet, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + idx * 0.05 }}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <FaChevronRight className="text-purple-400 mt-1 flex-shrink-0 text-xs" />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>

                {/* XP earned indicator */}
                <div className="pt-3 border-t border-foreground/10 flex items-center gap-2 text-xs text-foreground/50">
                  <span className="text-yellow-400">⭐</span>
                  <span>+{(index + 1) * 200 + 500} XP earned</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
