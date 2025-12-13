"use client";

import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Professional Journey" subtitle="Building AI solutions that make a real impact">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 hidden sm:block" />

        <div className="space-y-8">
          {profile.experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-0 sm:pl-14"
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-0 top-2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center shadow-lg shadow-primary/30">
                <FaBriefcase className="text-white text-sm" />
              </div>

              <div className="glass-card rounded-2xl p-6 group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary-light transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-lg font-medium text-primary mt-1">{item.company}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-xs text-primary/60" />
                      {item.period}
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-xs text-primary/60" />
                        {item.location}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {item.bullets.map((b, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
