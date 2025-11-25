"use client";

import { useState } from "react";

import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import profile from "@/data/profile";
import { StaggerList, StaggerItem } from "@/components/animations";
import { FaArrowRight, FaTimes } from "react-icons/fa";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof profile.projects)[number] | null>(null);

  const closeProject = () => setSelectedProject(null);

  return (
    <Section id="projects" title="Projects" subtitle="Selected work across GenAI, RAG, and data products">
      <StaggerList>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {profile.projects.map((p, index) => (
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
                className="group relative rounded-2xl hover-card p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 cursor-pointer h-full flex flex-col overflow-hidden"
              >
                {/* Gradient accent on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none project-card-overlay" />
                
                {/* Project number indicator */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-foreground/[0.03] group-hover:text-primary/10 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{p.name}</h3>
                      {p.tagline ? (
                        <p className="mt-2 text-sm text-foreground/60">{p.tagline}</p>
                      ) : null}
                    </div>
                    {p.status ? (
                      <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                        p.status === 'Active' 
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                          : p.status === 'Completed'
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : 'bg-foreground/5 text-foreground/60 border border-foreground/10'
                      }`}>
                        {p.status}
                      </span>
                    ) : null}
                  </div>
                  
                  <p className="mt-4 text-sm text-foreground/70 line-clamp-2">{p.description}</p>
                  
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                    {p.tech.length > 4 && (
                      <span className="text-xs text-foreground/50 self-center">+{p.tech.length - 4} more</span>
                    )}
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                      View details
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </div>
      </StaggerList>

      {selectedProject ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
          <div 
            className="absolute inset-0 bg-background/90 backdrop-blur-md" 
            onClick={closeProject} 
          />
          <div className="relative z-10 w-full max-w-3xl rounded-3xl gradient-border bg-background/95 p-8 shadow-2xl shadow-primary/10 max-h-[90vh] overflow-y-auto">
            <button
              aria-label="Close project details"
              onClick={closeProject}
              className="absolute right-6 top-6 p-2 rounded-full hover:bg-foreground/5 transition-colors"
            >
              <FaTimes className="text-foreground/60" />
            </button>
            
            <div className="space-y-6">
              <div className="space-y-3 pr-12">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary/80">
                  {[selectedProject.role, selectedProject.company, selectedProject.year]
                    .filter(Boolean)
                    .join(" • ")}
                </div>
                <h3 className="text-3xl font-bold tracking-tight glow-text">{selectedProject.name}</h3>
                {selectedProject.tagline ? (
                  <p className="text-lg text-foreground/60">{selectedProject.tagline}</p>
                ) : null}
              </div>
              
              {selectedProject.status ? (
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider ${
                  selectedProject.status === 'Active' 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                    : selectedProject.status === 'Completed'
                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    : 'bg-foreground/5 text-foreground/60 border border-foreground/10'
                }`}>
                  <span className="h-2 w-2 rounded-full bg-current" />
                  {selectedProject.status}
                </div>
              ) : null}
              
              {selectedProject.overview ? (
                <div className="space-y-3 p-5 rounded-xl bg-foreground/[0.02] border border-foreground/5">
                  <p className="text-sm font-semibold uppercase tracking-widest text-foreground/50">Project overview</p>
                  <p className="text-foreground/80 leading-relaxed">{selectedProject.overview}</p>
                </div>
              ) : null}
              
              {selectedProject.highlights && selectedProject.highlights.length > 0 ? (
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-widest text-foreground/50">Key impact</p>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-foreground/80">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-widest text-foreground/50">Technologies & tools</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
              
              {selectedProject.links && selectedProject.links.length > 0 ? (
                <div className="space-y-3 pt-4 border-t border-foreground/10">
                  <p className="text-sm font-semibold uppercase tracking-widest text-foreground/50">Links</p>
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.links.map((l) => (
                      <a 
                        key={l.href} 
                        className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors" 
                        href={l.href} 
                        target="_blank"
                      >
                        {l.label}
                        <FaArrowRight className="text-xs" />
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


