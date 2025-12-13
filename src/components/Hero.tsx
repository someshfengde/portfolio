"use client";
import Link from "next/link";
import Image from "next/image";
import profile from "@/data/profile";
import { Socials } from "@/components/Socials";
import { Reveal } from "@/components/animations";
import { FaRegCopy, FaDownload } from "react-icons/fa6";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const [copied, setCopied] = useState(false);

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
    <section className="w-full min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 flex flex-col gap-6 sm:gap-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-primary-light mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{profile.name.split(" ")[0]}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-foreground/80 font-medium"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-foreground/60 flex items-center gap-2 justify-center lg:justify-start"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {profile.location}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl text-base sm:text-lg leading-relaxed text-foreground/70"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                className="glow-button rounded-full px-6 py-3 text-sm font-semibold text-white"
                href="#projects"
              >
                View My Work
              </Link>
              <Link
                className="outline-button rounded-full px-6 py-3 text-sm font-medium"
                href={"mailto:" + profile.email}
              >
                Get in Touch
              </Link>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="outline-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm"
                aria-label="Copy email"
              >
                <FaRegCopy className="text-primary" />
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <Socials size="md" />
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Animated gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-background" />
              </div>

              {/* Profile image */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-background">
                <Image
                  src="/profile.jpeg"
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-2 text-sm font-medium"
              >
                🤖 AI Engineer
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-2 text-sm font-medium"
              >
                ⚡ 3+ Years Exp
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-foreground/50">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Add spin-slow animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
