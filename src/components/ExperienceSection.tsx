import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { StaggerList, StaggerItem } from "@/components/animations";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <StaggerList as="ul">
        {profile.experience.map((item) => (
          <StaggerItem key={`${item.company}-${item.role}`} className="mb-6 last:mb-0">
            <li className="rounded-md border border-foreground/10 p-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-lg font-medium">
                  {item.role} · <span className="text-foreground/80">{item.company}</span>
                </h3>
                <div className="text-sm text-foreground/60">{item.period}</div>
              </div>
              {item.location ? (
                <div className="text-sm text-foreground/60 mt-0.5">{item.location}</div>
              ) : null}
              <ul className="mt-3 list-disc list-inside space-y-1 text-sm/6 text-foreground/90">
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


