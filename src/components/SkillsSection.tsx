import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import profile from "@/data/profile";
import { Reveal, StaggerList, StaggerItem } from "@/components/animations";

export function SkillsSection() {
  const s = profile.skills;
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Reveal><SkillGroup title="Languages" items={s.languages} /></Reveal>
        <Reveal delay={0.05}><SkillGroup title="Core" items={s.core} /></Reveal>
        <Reveal delay={0.1}><SkillGroup title="Python / ML" items={s.pythonMl} /></Reveal>
        <Reveal delay={0.15}><SkillGroup title="Frameworks" items={s.frameworks} /></Reveal>
        <Reveal delay={0.2}><SkillGroup title="Web / Tools" items={s.webTools} /></Reveal>
        <Reveal delay={0.25}><SkillGroup title="Databases" items={s.databases} /></Reveal>
        <Reveal delay={0.3}><SkillGroup title="Infra / MLOps" items={s.infra} /></Reveal>
        <Reveal delay={0.35}><SkillGroup title="Data Viz" items={s.dataViz} /></Reveal>
      </div>
    </Section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-medium text-foreground/80">{title}</h4>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((i) => (
          <Badge key={i}>{i}</Badge>
        ))}
      </div>
    </div>
  );
}


