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
    <div className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card-bg to-background p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
      <h4 className="text-base font-bold text-foreground/90 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <Badge key={i}>{i}</Badge>
        ))}
      </div>
    </div>
  );
}


