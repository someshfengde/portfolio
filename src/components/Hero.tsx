"use client";
import Link from "next/link";
import Image from "next/image";
import profile from "@/data/profile";
import { Socials } from "@/components/Socials";
import { FaRegCopy } from "react-icons/fa6";
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
        // Fallback or ignore
    }
  }, []);

  return (
    <section className="w-full min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-foreground/80 border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                Available for new opportunities
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4">
                {profile.name}
              </h1>

              <h2 className="text-xl sm:text-2xl text-foreground/60 font-normal">
                {profile.title}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl text-lg sm:text-xl leading-relaxed text-foreground/70"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                className="glow-button rounded-full px-8 py-3 text-sm font-semibold"
                href="#projects"
              >
                View Work
              </Link>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="outline-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
                aria-label="Copy email"
              >
                <FaRegCopy />
                {copied ? "Copied" : profile.email}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4"
            >
              <Socials size="lg" />
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-1">
                <div className="w-full h-full rounded-xl overflow-hidden relative bg-neutral-900">
                   <Image
                    src="/profile.jpeg"
                    alt={profile.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
