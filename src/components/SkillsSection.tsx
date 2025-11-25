"use client";

import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import profile from "@/data/profile";
import { Reveal } from "@/components/animations";
import { 
  FaCode, 
  FaBrain, 
  FaPython, 
  FaServer, 
  FaScrewdriverWrench, 
  FaDatabase, 
  FaCloud, 
  FaChartLine 
} from "react-icons/fa6";

const skillGroups = [
  { key: "languages", title: "Languages", icon: FaCode, items: profile.skills.languages },
  { key: "core", title: "Core", icon: FaBrain, items: profile.skills.core },
  { key: "pythonMl", title: "Python / ML", icon: FaPython, items: profile.skills.pythonMl },
  { key: "frameworks", title: "Frameworks", icon: FaServer, items: profile.skills.frameworks },
  { key: "webTools", title: "Web / Tools", icon: FaScrewdriverWrench, items: profile.skills.webTools },
  { key: "databases", title: "Databases", icon: FaDatabase, items: profile.skills.databases },
  { key: "infra", title: "Infra / MLOps", icon: FaCloud, items: profile.skills.infra },
  { key: "dataViz", title: "Data Viz", icon: FaChartLine, items: profile.skills.dataViz },
];

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I work with">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((group, index) => (
          <Reveal key={group.key} delay={index * 0.05}>
            <div className="hover-card rounded-2xl p-5 group h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <group.icon className="text-lg" />
                </div>
                <h4 className="font-semibold text-foreground/90">{group.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}


