import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import profile from "@/data/profile";
import { StaggerList, StaggerItem } from "@/components/animations";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work across GenAI, RAG, and data products">
      <StaggerList>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {profile.projects.map((p) => (
            <StaggerItem key={p.name}>
              <article className="rounded-lg border border-foreground/10 p-5 hover:bg-foreground/5 transition-colors">
                <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                {p.tagline ? (
                  <p className="mt-1 text-sm text-foreground/70">{p.tagline}</p>
                ) : null}
                <p className="mt-3 text-sm text-foreground/90">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                {p.links && p.links.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    {p.links.map((l) => (
                      <a key={l.href} className="underline underline-offset-4 hover:no-underline" href={l.href} target="_blank">
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            </StaggerItem>
          ))}
        </div>
      </StaggerList>
    </Section>
  );
}


