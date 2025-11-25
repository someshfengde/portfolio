"use client";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { FaTrophy, FaMedal, FaAward, FaCertificate } from "react-icons/fa6";

const achievementIcons = [FaTrophy, FaMedal, FaAward, FaCertificate];
const achievementColors = [
  "from-yellow-500/20 to-amber-500/20",
  "from-gray-400/20 to-slate-500/20",
  "from-orange-500/20 to-red-500/20",
  "from-cyan-500/20 to-blue-500/20",
];

export function AchievementBadges() {
  return (
    <Section id="certifications" title="" subtitle="">
      {/* Custom game-style header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30">
            <FaTrophy className="text-yellow-400 text-xl" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Achievements
            </h2>
            <p className="text-sm text-foreground/60">
              {profile.certifications.length} badges unlocked
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {profile.certifications.map((cert, index) => {
          const IconComponent = achievementIcons[index % achievementIcons.length];
          const colorClass = achievementColors[index % achievementColors.length];
          
          return (
            <motion.div
              key={`${cert.name}-${cert.issuer}`}
              initial={{ opacity: 0, y: 20, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className={`group relative p-5 rounded-xl border border-foreground/10 bg-gradient-to-br ${colorClass} backdrop-blur-sm cursor-default`}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              {/* Achievement badge icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg shadow-yellow-500/30"
              >
                <IconComponent className="text-white text-lg" />
              </motion.div>

              {/* Unlocked banner */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-green-500/20 text-green-400 border border-green-500/30">
                  Unlocked
                </span>
              </div>

              <div className="mt-6 space-y-2">
                <h3 className="text-base font-bold text-foreground group-hover:text-yellow-400 transition-colors pr-8">
                  {cert.name}
                </h3>
                <p className="text-sm text-foreground/60">{cert.issuer}</p>
                
                <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/50 pt-2">
                  {cert.issued && (
                    <span className="px-2 py-0.5 rounded-full bg-foreground/10">
                      📅 {cert.issued}
                    </span>
                  )}
                  {cert.credentialId && (
                    <span className="px-2 py-0.5 rounded-full bg-foreground/10 font-mono">
                      ID: {cert.credentialId.slice(0, 8)}...
                    </span>
                  )}
                </div>

                {cert.href && (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-sm text-cyan-400 hover:underline"
                  >
                    View credential ↗
                  </a>
                )}
              </div>

              {/* XP indicator */}
              <div className="absolute bottom-3 right-3 text-xs text-foreground/40 font-mono">
                +300 XP
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: "100%", opacity: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Achievement progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 p-4 rounded-xl border border-foreground/10 bg-foreground/5 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="text-2xl">🎮</div>
          <div>
            <p className="text-sm font-semibold">Achievement Hunter</p>
            <p className="text-xs text-foreground/50">
              {profile.certifications.length} / 15 achievements unlocked
            </p>
          </div>
        </div>
        <div className="w-32 h-2 bg-foreground/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${(profile.certifications.length / 15) * 100}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
          />
        </div>
      </motion.div>
    </Section>
  );
}
