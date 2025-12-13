"use client";

import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" subtitle="My professional journey">
      <div className="relative border-l border-white/10 ml-3 sm:ml-4 space-y-12 pl-8 sm:pl-12 py-4">
        {profile.experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-white/10" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
              <div>
                <h3 className="text-xl font-medium text-foreground">
                  {item.role}
                </h3>
                <p className="text-base text-foreground/60">{item.company}</p>
              </div>
              <span className="text-sm font-mono text-foreground/40 mt-1 sm:mt-0">
                {item.period}
              </span>
            </div>

            <ul className="space-y-3">
              {item.bullets.map((b, idx) => (
                <li
                  key={idx}
                  className="text-base text-foreground/70 leading-relaxed font-light"
                >
                  — {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
