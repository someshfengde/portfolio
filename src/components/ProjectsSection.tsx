"use client";

import { useState } from "react";

import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import profile from "@/data/profile";
import { StaggerList, StaggerItem } from "@/components/animations";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof profile.projects)[number] | null>(null);

  const closeProject = () => setSelectedProject(null);

  return (
    <Section id="projects" title="Projects" subtitle="Selected work across GenAI, RAG, and data products">
      <StaggerList>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {profile.projects.map((p) => (
            <StaggerItem key={p.name}>
              <article
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(p)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProject(p);
                  }
                }}
                className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card-bg to-background p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 cursor-pointer h-full flex flex-col group"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{p.name}</h3>
                    {p.tagline ? (
                      <p className="mt-1.5 text-sm text-foreground/70">{p.tagline}</p>
                    ) : null}
                  </div>
                  {p.status ? (
                    <span className="rounded-full border-2 border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                      {p.status}
                    </span>
                  ) : null}
                </div>
                {p.tagline ? (
                  <p className="sr-only">{p.tagline}</p>
                ) : null}
                <p className="mt-3 text-sm text-foreground/80 line-clamp-3 flex-grow">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                {p.links && p.links.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    {p.links.map((l) => (
                      <a key={l.href} className="underline underline-offset-4 hover:no-underline text-primary" href={l.href} target="_blank">
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                ) : null}
                <div className="mt-5 flex items-center justify-between text-sm text-primary font-medium">
                  <span>View details</span>
                  <span aria-hidden className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </div>
      </StaggerList>

      {selectedProject ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={closeProject} />
          <div className="relative z-10 w-full max-w-3xl rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-background to-card-bg p-8 shadow-2xl shadow-primary/20">
            <button
              aria-label="Close project details"
              onClick={closeProject}
              className="absolute right-6 top-6 rounded-full border-2 border-primary/30 bg-background/80 backdrop-blur px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80 hover:bg-primary/10 hover:border-primary/50 transition-all"
            >
              Close
            </button>
            <div className="space-y-5">
              <div className="space-y-2 pr-20">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                  {[selectedProject.role, selectedProject.company, selectedProject.year]
                    .filter(Boolean)
                    .join(" • ")}
                </p>
                <h3 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">{selectedProject.name}</h3>
                {selectedProject.tagline ? (
                  <p className="text-base text-foreground/70">{selectedProject.tagline}</p>
                ) : null}
              </div>
              {selectedProject.status ? (
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
                  {selectedProject.status}
                </div>
              ) : null}
              {selectedProject.overview ? (
                <div className="space-y-2">
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-foreground/70">Project overview</p>
                  <p className="text-base text-foreground/90 leading-relaxed">{selectedProject.overview}</p>
                </div>
              ) : null}
              {selectedProject.highlights && selectedProject.highlights.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-foreground/70">Key impact</p>
                  <ul className="list-disc space-y-2 pl-5 text-foreground/90">
                    {selectedProject.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="space-y-2">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-foreground/70">Technologies & tools</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
              {selectedProject.links && selectedProject.links.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-foreground/70">Links</p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    {selectedProject.links.map((l) => (
                      <a key={l.href} className="underline underline-offset-4 hover:no-underline text-primary font-medium" href={l.href} target="_blank">
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}


