"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import profile from "@/data/profile";
import { FaArrowRight, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const statusStyles: Record<string, string> = {
  Active: "status-active",
  Completed: "status-completed",
  Beta: "status-beta",
  "Open Source": "status-opensource",
};

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof profile.projects)[number] | null>(null);

  const closeProject = () => setSelectedProject(null);

  return (
    <Section id="projects" title="Featured Projects" subtitle="Innovative solutions across GenAI, RAG pipelines, and intelligent data products">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profile.projects.map((p, index) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedProject(p)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedProject(p);
              }
            }}
            className="glass-card rounded-2xl p-6 cursor-pointer group h-full flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary-light transition-colors">
                  {p.name}
                </h3>
                {p.tagline && (
                  <p className="mt-1 text-sm text-foreground/60">{p.tagline}</p>
                )}
              </div>
              {p.status && (
                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[p.status] || "tech-badge"}`}>
                  {p.status}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-foreground/70 line-clamp-2 mb-4 flex-1">
              {p.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.slice(0, 4).map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
              {p.tech.length > 4 && (
                <Badge variant="secondary">+{p.tech.length - 4}</Badge>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
              <div className="flex items-center gap-3">
                {p.company && (
                  <span className="text-xs text-foreground/50">{p.company}</span>
                )}
                {p.year && (
                  <span className="text-xs text-foreground/40">{p.year}</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                <span>Learn more</span>
                <FaArrowRight className="text-xs" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
              onClick={closeProject}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative z-10 w-full max-w-3xl glass-card rounded-3xl p-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                aria-label="Close project details"
                onClick={closeProject}
                className="absolute right-6 top-6 w-10 h-10 rounded-full flex items-center justify-center border border-foreground/20 text-foreground/60 hover:bg-foreground/10 hover:text-foreground transition-all"
              >
                <FaTimes />
              </button>

              <div className="space-y-6">
                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-foreground/50 uppercase tracking-wider">
                  {selectedProject.role && <span>{selectedProject.role}</span>}
                  {selectedProject.company && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-foreground/30" />
                      <span>{selectedProject.company}</span>
                    </>
                  )}
                  {selectedProject.year && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-foreground/30" />
                      <span>{selectedProject.year}</span>
                    </>
                  )}
                </div>

                {/* Title */}
                <div className="space-y-2 pr-12">
                  <h3 className="text-3xl font-bold tracking-tight gradient-text">
                    {selectedProject.name}
                  </h3>
                  {selectedProject.tagline && (
                    <p className="text-lg text-foreground/70">{selectedProject.tagline}</p>
                  )}
                </div>

                {/* Status */}
                {selectedProject.status && (
                  <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${statusStyles[selectedProject.status] || "tech-badge"}`}>
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                    {selectedProject.status}
                  </span>
                )}

                {/* Overview */}
                {selectedProject.overview && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                      Project Overview
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">{selectedProject.overview}</p>
                  </div>
                )}

                {/* Highlights */}
                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                      Key Impact
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground/80">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {selectedProject.links && selectedProject.links.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                      Links
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/20 text-sm hover:bg-foreground/10 hover:border-primary/40 transition-all"
                        >
                          {l.label}
                          <FaExternalLinkAlt className="text-xs" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
