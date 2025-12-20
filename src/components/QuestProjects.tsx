"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import profile from "@/data/profile";
import { FaTrophy, FaStar, FaRocket, FaCode, FaCheck } from "react-icons/fa6";

const statusColors: Record<string, { bg: string; text: string; glow: string }> = {
  Active: { bg: "from-green-500/20 to-emerald-500/20", text: "text-green-400", glow: "shadow-green-500/20" },
  Completed: { bg: "from-blue-500/20 to-cyan-500/20", text: "text-cyan-400", glow: "shadow-cyan-500/20" },
  Beta: { bg: "from-yellow-500/20 to-amber-500/20", text: "text-yellow-400", glow: "shadow-yellow-500/20" },
  "Open Source": { bg: "from-purple-500/20 to-pink-500/20", text: "text-purple-400", glow: "shadow-purple-500/20" },
};

export function QuestProjects() {
  const [selectedProject, setSelectedProject] = useState<(typeof profile.projects)[number] | null>(null);

  const closeProject = () => setSelectedProject(null);

  return (
    <Section id="projects" title="" subtitle="">
      {/* Custom game-style header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
            <FaRocket className="text-cyan-400 text-xl" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Quest Log
            </h2>
            <p className="text-sm text-foreground/60">Completed missions across GenAI, RAG, and data products</p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {profile.projects.map((p, index) => {
          const colors = statusColors[p.status || "Active"] || statusColors.Active;
          
          return (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(p)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedProject(p);
                }
              }}
              className={`group relative rounded-xl border border-foreground/10 p-5 bg-gradient-to-br ${colors.bg} backdrop-blur-sm hover:border-foreground/20 transition-all cursor-pointer hover:scale-[1.02] shadow-lg ${colors.glow}`}
            >
              {/* Quest difficulty indicator */}
              <div className="absolute -top-2 -right-2 flex gap-0.5">
                {[...Array(Math.min(p.tech.length, 5))].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <FaStar className="text-yellow-400 text-xs drop-shadow-lg" />
                  </motion.div>
                ))}
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold tracking-tight group-hover:text-cyan-400 transition-colors">
                      {p.name}
                    </h3>
                  </div>
                  {p.tagline && (
                    <p className="mt-1 text-sm text-foreground/60 italic">{p.tagline}</p>
                  )}
                </div>
                {p.status && (
                  <span className={`flex items-center gap-1.5 rounded-full border border-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide ${colors.text}`}>
                    {p.status === "Completed" && <FaCheck />}
                    {p.status}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm text-foreground/70 line-clamp-2">{p.description}</p>

              {/* Tech stack as power-ups */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded-md bg-foreground/10 border border-foreground/10 font-mono"
                  >
                    {t}
                  </span>
                ))}
                {p.tech.length > 4 && (
                  <span className="px-2 py-1 text-xs rounded-md bg-foreground/10 border border-foreground/10 font-mono text-foreground/50">
                    +{p.tech.length - 4}
                  </span>
                )}
              </div>

              {/* XP reward indicator */}
              <div className="mt-4 pt-4 border-t border-foreground/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-foreground/50">
                  <FaTrophy className="text-yellow-400" />
                  <span>+500 XP</span>
                </div>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="text-sm font-medium text-cyan-400 flex items-center gap-1"
                >
                  View Quest →
                </motion.span>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={closeProject} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-10 w-full max-w-3xl rounded-2xl border border-foreground/10 bg-gradient-to-br from-background to-foreground/5 p-6 shadow-2xl"
          >
            <button
              aria-label="Close project details"
              onClick={closeProject}
              className="absolute right-4 top-4 rounded-full border border-foreground/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-foreground/60 hover:bg-foreground/5"
            >
              ESC
            </button>

            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2 pr-16">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
                  <FaCode />
                  {[selectedProject.role, selectedProject.company, selectedProject.year]
                    .filter(Boolean)
                    .join(" • ")}
                </div>
                <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-foreground/80 bg-clip-text text-transparent">
                  {selectedProject.name}
                </h3>
                {selectedProject.tagline && (
                  <p className="text-base text-foreground/60">{selectedProject.tagline}</p>
                )}
              </div>

              {/* Status badge */}
              {selectedProject.status && (
                <div className={`inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-sm font-semibold ${statusColors[selectedProject.status]?.text || "text-foreground"}`}>
                  <span className="h-2 w-2 rounded-full bg-current animate-pulse" />
                  {selectedProject.status}
                </div>
              )}

              {/* Overview */}
              {selectedProject.overview && (
                <div className="p-4 rounded-lg bg-foreground/5 border border-foreground/10">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/50 mb-2">
                    Mission Brief
                  </p>
                  <p className="text-foreground/80">{selectedProject.overview}</p>
                </div>
              )}

              {/* Highlights */}
              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/50 mb-3">
                    🏆 Achievements Unlocked
                  </p>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((item) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-start gap-2 text-foreground/80"
                      >
                        <FaStar className="text-yellow-400 mt-1 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech stack */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/50 mb-3">
                  ⚡ Power-ups Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              {selectedProject.links && selectedProject.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {selectedProject.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </Section>
  );
}
