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
  { key: "languages", title: "Languages", icon: FaCode },
  { key: "core", title: "Core Expertise", icon: FaBrain },
  { key: "pythonMl", title: "Python / ML", icon: FaPython },
  { key: "frameworks", title: "Frameworks", icon: FaServer },
  { key: "webTools", title: "Web / Tools", icon: FaTools },
  { key: "databases", title: "Databases", icon: FaDatabase },
  { key: "infra", title: "Infra / MLOps", icon: FaDocker },
  { key: "dataViz", title: "Data Viz", icon: FaChartBar },
];

export function SkillsSection() {
  const s = profile.skills;

  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillCategories.map((category, index) => {
          const items = s[category.key as keyof typeof s];
          const Icon = category.icon;

          return (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card rounded-xl p-6 hover:bg-white/5 transition-colors"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-foreground/40 text-lg" />
                <h4 className="font-medium text-foreground/90 text-sm tracking-wide uppercase">
                  {category.title}
                </h4>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
