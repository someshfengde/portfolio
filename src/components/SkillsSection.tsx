"use client";

import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import profile from "@/data/profile";
import { motion } from "framer-motion";
import {
  FaCode,
  FaBrain,
  FaPython,
  FaServer,
  FaTools,
  FaDatabase,
  FaDocker,
  FaChartBar
} from "react-icons/fa";

const skillCategories = [
  { key: "languages", title: "Languages", icon: FaCode, color: "from-violet-500 to-purple-500" },
  { key: "core", title: "Core Expertise", icon: FaBrain, color: "from-pink-500 to-rose-500" },
  { key: "pythonMl", title: "Python / ML", icon: FaPython, color: "from-blue-500 to-cyan-500" },
  { key: "frameworks", title: "Frameworks", icon: FaServer, color: "from-green-500 to-emerald-500" },
  { key: "webTools", title: "Web / Tools", icon: FaTools, color: "from-orange-500 to-amber-500" },
  { key: "databases", title: "Databases", icon: FaDatabase, color: "from-teal-500 to-cyan-500" },
  { key: "infra", title: "Infra / MLOps", icon: FaDocker, color: "from-indigo-500 to-blue-500" },
  { key: "dataViz", title: "Data Viz", icon: FaChartBar, color: "from-yellow-500 to-orange-500" },
];

export function SkillsSection() {
  const s = profile.skills;

  return (
    <Section id="skills" title="Technical Arsenal" subtitle="Technologies and tools I use to bring ideas to life">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => {
          const items = s[category.key as keyof typeof s];
          const Icon = category.icon;

          return (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-5 group"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="text-white text-lg" />
                </div>
                <h4 className="font-semibold text-foreground group-hover:text-primary-light transition-colors">
                  {category.title}
                </h4>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {items.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                  >
                    <Badge>{item}</Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
