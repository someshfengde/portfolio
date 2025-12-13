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
    <Section id="projects" title="Selected Work" subtitle="A selection of projects I've worked on">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profile.projects.map((p, index) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
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
            className="glass-card rounded-xl p-8 cursor-pointer group h-full flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
                  {p.name}
                </h3>
                {p.tagline && (
                  <p className="mt-1 text-sm text-foreground/60 font-light">{p.tagline}</p>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-foreground/70 line-clamp-3 mb-6 flex-1 leading-relaxed">
              {p.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.slice(0, 4).map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
              {p.tech.length > 4 && (
                <span className="text-xs text-foreground/40 self-center px-2">+{p.tech.length - 4}</span>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                {p.year && (
                  <span className="text-xs text-foreground/40 font-mono">{p.year}</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-foreground/80 text-sm group-hover:gap-3 transition-all">
                <span>Details</span>
                <FaArrowRight className="text-xs opacity-70" />
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
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={closeProject}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative z-10 w-full max-w-3xl glass-card rounded-2xl p-8 sm:p-10 max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl bg-[#0a0a0a]"
            >
              {/* Close button */}
              <button
                aria-label="Close project details"
                onClick={closeProject}
                className="absolute right-6 top-6 w-8 h-8 rounded-full flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-white/5 transition-all"
              >
                <FaTimes />
              </button>

              <div className="space-y-8">
                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-foreground/40 uppercase tracking-widest">
                  {[selectedProject.role, selectedProject.company, selectedProject.year]
                    .filter(Boolean)
                    .join(" • ")}
                </div>

                {/* Title */}
                <div className="space-y-2 pr-12">
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                    {selectedProject.name}
                  </h3>
                  {selectedProject.tagline && (
                    <p className="text-lg text-foreground/60 font-light">{selectedProject.tagline}</p>
                  )}
                </div>

                {/* Status */}
                {selectedProject.status && (
                  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${statusStyles[selectedProject.status] || "tech-badge"}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {selectedProject.status}
                  </span>
                )}

                <div className="w-full h-px bg-white/5" />

                {/* Overview */}
                {selectedProject.overview && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/40">
                      Overview
                    </h4>
                    <p className="text-foreground/80 leading-relaxed text-lg font-light">
                      {selectedProject.overview}
                    </p>
                  </div>
                )}

                {/* Highlights */}
                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/40">
                      Key Impact
                    </h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {selectedProject.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground/70">
                          <span className="mt-2 w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/40">
                    Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {selectedProject.links && selectedProject.links.length > 0 && (
                  <div className="pt-6 mt-6 border-t border-white/5">
                    <div className="flex flex-wrap gap-4">
                      {selectedProject.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors underline underline-offset-4"
                        >
                          {l.label}
                          <FaExternalLinkAlt className="text-[10px] opacity-50" />
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
