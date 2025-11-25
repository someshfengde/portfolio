"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import profile from "@/data/profile";
import { Socials } from "@/components/Socials";
import { FaRegCopy, FaGamepad, FaRocket, FaCode } from "react-icons/fa6";
import { useCallback, useState, useEffect } from "react";

const floatingIcons = [
  { icon: "⚡", delay: 0 },
  { icon: "🎮", delay: 0.2 },
  { icon: "🚀", delay: 0.4 },
  { icon: "💻", delay: 0.6 },
  { icon: "🤖", delay: 0.8 },
  { icon: "🔥", delay: 1.0 },
];

export function GameHero() {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyEmail = useCallback(async () => {
    const value = profile.email;
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
        return;
      }
      throw new Error("Clipboard API not available");
    } catch {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.top = "-1000px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(textarea);
        if (ok) {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }
      } catch {
        window.location.href = `mailto:${value}`;
      }
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-background via-background to-transparent overflow-hidden">
      {/* Floating Icons */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {floatingIcons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [-20, -200],
                x: Math.sin(i) * 50,
              }}
              transition={{
                delay: item.delay + 2,
                duration: 4,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="absolute text-4xl"
              style={{
                left: `${15 + i * 14}%`,
                bottom: "10%",
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-32 pb-16 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Animated Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
              {/* Outer ring animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border-2 border-dashed border-purple-400/40"
              />
              
              {/* Avatar circle */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/40">
                <span className="text-4xl sm:text-5xl font-bold text-white">
                  {profile.name
                    .split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((n) => n[0]?.toUpperCase())
                    .join("")}
                </span>
              </div>

              {/* Status indicator */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-background shadow-lg shadow-green-400/50"
              />
            </div>
          </motion.div>

          {/* Title with glitch effect */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-3 mb-2"
            >
              <FaGamepad className="text-purple-400" />
              <span className="text-sm font-mono text-purple-400 uppercase tracking-widest">
                Player Profile Loaded
              </span>
              <FaGamepad className="text-purple-400" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 flex items-center justify-center gap-2 text-lg sm:text-xl text-foreground/80"
            >
              <FaCode className="text-cyan-400" />
              <span>{profile.title}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-2 text-sm text-foreground/60 flex items-center justify-center gap-2"
            >
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {profile.location} • Available for quests
            </motion.p>
          </div>

          {/* Summary in a game-style box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="max-w-3xl"
          >
            <div className="relative p-6 rounded-xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm">
              <div className="absolute -top-3 left-4 px-3 py-1 bg-background text-xs font-mono text-cyan-400 uppercase tracking-wider border border-foreground/20 rounded">
                Bio
              </div>
              <p className="text-base leading-relaxed text-foreground/80">
                {profile.summary}
              </p>
            </div>
          </motion.div>

          {/* Action buttons - game style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#projects"
              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaRocket />
                Start Quest
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href={"mailto:" + profile.email}
              className="px-8 py-3 border-2 border-purple-500/50 rounded-lg font-semibold text-purple-400 hover:bg-purple-500/10 transition-all hover:border-purple-400"
            >
              📬 Contact
            </Link>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-6 py-3 border border-foreground/20 rounded-lg text-sm hover:bg-foreground/5 transition-all flex items-center gap-2"
              aria-label="Copy email"
            >
              <FaRegCopy /> {copied ? "✓ Copied!" : "Copy Email"}
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Socials size="lg" />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-foreground/40 text-sm flex flex-col items-center gap-2"
            >
              <span className="font-mono text-xs">SCROLL TO EXPLORE</span>
              <span className="text-2xl">↓</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
