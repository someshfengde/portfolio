"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import profile from "@/data/profile";
import { Socials } from "@/components/Socials";
import { FaGamepad, FaHeart } from "react-icons/fa6";

export function GameFooter() {
  return (
    <footer className="relative w-full border-t border-foreground/10 mt-16 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Player card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 text-sm text-foreground/60 mb-2">
              <FaGamepad className="text-purple-400" />
              <span>Player Profile</span>
              <FaGamepad className="text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {profile.name}
            </h3>
            <p className="text-sm text-foreground/60 mt-1">{profile.title}</p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Socials size="lg" />
          </motion.div>

          {/* Quick links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm"
          >
            {[
              { href: "#projects", label: "Quests" },
              { href: "#experience", label: "Timeline" },
              { href: "#skills", label: "Skills" },
              { href: "#certifications", label: "Achievements" },
              { href: "#writing", label: "Content" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/50 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-foreground/20 text-sm font-medium hover:from-cyan-500/30 hover:to-purple-500/30 transition-all"
            >
              📬 Start a conversation
            </Link>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 text-xs text-foreground/40 pt-6 border-t border-foreground/10 w-full justify-center"
          >
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <FaHeart className="text-red-400 animate-pulse" /> and code
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
