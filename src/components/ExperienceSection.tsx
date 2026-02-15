import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { StaggerList, StaggerItem } from "@/components/animations";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <StaggerList as="ul">
        {profile.experience.map((item) => (
          <StaggerItem key={`${item.company}-${item.role}`} className="mb-6 last:mb-0">
            <li className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card-bg to-background p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h3 className="text-lg font-bold">
                  {item.role} · <span className="text-foreground/80 font-semibold">{item.company}</span>
                </h3>
                <div className="text-sm text-primary font-medium">{item.period}</div>
              </div>
              {item.location ? (
                <div className="text-sm text-foreground/60 mt-1">{item.location}</div>
              ) : null}
              <ul className="mt-4 list-disc list-inside space-y-2 text-sm/6 text-foreground/90">
                {item.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </li>
          </StaggerItem>
        ))}
      </StaggerList>
    </Section>
  );
}


