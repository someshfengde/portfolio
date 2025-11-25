"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { FaWandMagicSparkles } from "react-icons/fa6";

type SkillCategory = keyof typeof profile.skills;

const categoryInfo: Record<SkillCategory, { icon: string; color: string; bgColor: string }> = {
  languages: { icon: "💬", color: "text-blue-400", bgColor: "from-blue-500/20 to-cyan-500/20" },
  core: { icon: "🧠", color: "text-purple-400", bgColor: "from-purple-500/20 to-pink-500/20" },
  pythonMl: { icon: "🐍", color: "text-green-400", bgColor: "from-green-500/20 to-emerald-500/20" },
  frameworks: { icon: "⚡", color: "text-yellow-400", bgColor: "from-yellow-500/20 to-orange-500/20" },
  webTools: { icon: "🔧", color: "text-orange-400", bgColor: "from-orange-500/20 to-red-500/20" },
  databases: { icon: "🗄️", color: "text-cyan-400", bgColor: "from-cyan-500/20 to-teal-500/20" },
  infra: { icon: "☁️", color: "text-indigo-400", bgColor: "from-indigo-500/20 to-violet-500/20" },
  dataViz: { icon: "📊", color: "text-pink-400", bgColor: "from-pink-500/20 to-rose-500/20" },
};

const categoryNames: Record<SkillCategory, string> = {
  languages: "Languages",
  core: "Core Abilities",
  pythonMl: "Python / ML",
  frameworks: "Frameworks",
  webTools: "Web & Tools",
  databases: "Databases",
  infra: "Infrastructure",
  dataViz: "Data Viz",
};

export function SkillConstellation() {
  const [hoveredCategory, setHoveredCategory] = useState<SkillCategory | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);

  const categories = Object.keys(profile.skills) as SkillCategory[];
  const totalSkills = Object.values(profile.skills).flat().length;

  return (
    <Section id="skills" title="" subtitle="">
      {/* Custom game-style header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
            <FaWandMagicSparkles className="text-cyan-400 text-xl" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skill Tree
            </h2>
            <p className="text-sm text-foreground/60">
              {totalSkills} abilities unlocked across {categories.length} branches
            </p>
          </div>
        </motion.div>
      </div>

      {/* Skill categories grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((category, index) => {
          const info = categoryInfo[category];
          const skills = profile.skills[category];
          const isHovered = hoveredCategory === category;
          const isSelected = selectedCategory === category;

          return (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
              onClick={() => setSelectedCategory(isSelected ? null : category)}
              className={`relative p-4 rounded-xl border transition-all cursor-pointer text-left ${
                isSelected
                  ? "border-foreground/30 scale-[1.02]"
                  : "border-foreground/10 hover:border-foreground/20"
              } bg-gradient-to-br ${info.bgColor}`}
            >
              {/* Level indicator */}
              <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-background border border-foreground/20 text-[10px] font-bold">
                LV.{skills.length}
              </div>

              <div className="text-3xl mb-2">{info.icon}</div>
              <div className={`text-sm font-semibold ${info.color}`}>
                {categoryNames[category]}
              </div>
              <div className="text-xs text-foreground/50 mt-1">
                {skills.length} skills
              </div>

              {/* Progress bar */}
              <div className="mt-3 h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min((skills.length / 10) * 100, 100)}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  className={`h-full rounded-full bg-gradient-to-r ${info.bgColor.replace("/20", "/60")}`}
                />
              </div>

              {/* Hover glow effect */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-xl border-2 border-current pointer-events-none"
                  style={{ borderColor: `var(--tw-text-opacity)` }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Expanded skills view */}
      {selectedCategory && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-6"
        >
          <div className={`p-6 rounded-xl border border-foreground/10 bg-gradient-to-br ${categoryInfo[selectedCategory].bgColor}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{categoryInfo[selectedCategory].icon}</span>
              <h3 className={`text-lg font-bold ${categoryInfo[selectedCategory].color}`}>
                {categoryNames[selectedCategory]}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.skills[selectedCategory].map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-3 py-1.5 rounded-lg bg-foreground/10 border border-foreground/10 text-sm font-medium hover:bg-foreground/20 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* All skills compact view when nothing selected */}
      {!selectedCategory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 p-4 rounded-xl border border-foreground/5 bg-foreground/5"
        >
          <p className="text-xs text-foreground/50 mb-3 uppercase tracking-wider">
            Click a branch to explore • All {totalSkills} skills:
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.values(profile.skills)
              .flat()
              .map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 rounded text-xs bg-foreground/10 text-foreground/70"
                >
                  {skill}
                </span>
              ))}
          </div>
        </motion.div>
      )}
    </Section>
  );
}
