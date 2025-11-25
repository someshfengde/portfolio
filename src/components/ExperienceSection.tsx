import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { StaggerList, StaggerItem } from "@/components/animations";
import { FaBriefcase } from "react-icons/fa6";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" subtitle="Professional journey building AI-powered solutions">
      <StaggerList as="ul">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent hidden sm:block" />
          
          {profile.experience.map((item) => (
            <StaggerItem key={`${item.company}-${item.role}`} className="mb-8 last:mb-0">
              <li className="relative sm:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 hidden sm:flex items-center justify-center w-5 h-5 rounded-full bg-background border-2 border-primary shadow-lg shadow-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                
                <div className="hover-card rounded-2xl p-6 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <FaBriefcase className="text-primary text-sm" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary/80">
                          {item.company}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {item.role}
                      </h3>
                      {item.location ? (
                        <div className="text-sm text-foreground/50 mt-1">{item.location}</div>
                      ) : null}
                    </div>
                    <div className="text-sm font-medium text-foreground/60 bg-foreground/5 px-3 py-1 rounded-full whitespace-nowrap">
                      {item.period}
                    </div>
                  </div>
                  
                  <ul className="mt-5 space-y-3">
                    {item.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground/70">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </StaggerItem>
          ))}
        </div>
      </StaggerList>
    </Section>
  );
}


