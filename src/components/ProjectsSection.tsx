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
                className="rounded-lg border border-foreground/10 p-5 hover:bg-foreground/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 cursor-pointer h-full flex flex-col"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                    {p.tagline ? (
                      <p className="mt-1 text-sm text-foreground/70">{p.tagline}</p>
                    ) : null}
                  </div>
                  {p.status ? (
                    <span className="rounded-full border border-foreground/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-foreground/70">
                      {p.status}
                    </span>
                  ) : null}
                </div>
                {p.tagline ? (
                  <p className="sr-only">{p.tagline}</p>
                ) : null}
                <p className="mt-3 text-sm text-foreground/80 line-clamp-3">{p.description}</p>
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
                <div className="mt-5 flex items-center justify-between text-sm text-primary">
                  <span className="font-medium">View project</span>
                  <span aria-hidden>↗</span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </div>
      </StaggerList>

      {selectedProject ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center px-4 py-6">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={closeProject} />
          <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-foreground/10 bg-background p-6 shadow-2xl">
            <button
              aria-label="Close project details"
              onClick={closeProject}
              className="absolute right-4 top-4 rounded-full border border-foreground/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-foreground/60 hover:bg-foreground/5"
            >
              Close
            </button>
            <div className="space-y-4">
              <div className="space-y-2 pr-16">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-foreground/50">
                  {[selectedProject.role, selectedProject.company, selectedProject.year]
                    .filter(Boolean)
                    .join(" • ")}
                </p>
                <h3 className="text-2xl font-semibold tracking-tight">{selectedProject.name}</h3>
                {selectedProject.tagline ? (
                  <p className="text-base text-foreground/70">{selectedProject.tagline}</p>
                ) : null}
              </div>
              {selectedProject.status ? (
                <div className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground/70">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-primary/70" />
                  {selectedProject.status}
                </div>
              ) : null}
              {selectedProject.overview ? (
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">Project overview</p>
                  <p className="text-base text-foreground/80">{selectedProject.overview}</p>
                </div>
              ) : null}
              {selectedProject.highlights && selectedProject.highlights.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">Key impact</p>
                  <ul className="list-disc space-y-1 pl-5 text-foreground/80">
                    {selectedProject.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">Technologies & tools</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
              {selectedProject.links && selectedProject.links.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">Links</p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    {selectedProject.links.map((l) => (
                      <a key={l.href} className="underline underline-offset-4 hover:no-underline" href={l.href} target="_blank">
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


