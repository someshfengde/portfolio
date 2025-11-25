"use client";
import Link from "next/link";
import profile from "@/data/profile";
import { Socials } from "@/components/Socials";
import { Reveal } from "@/components/animations";
import { FaRegCopy, FaArrowDown } from "react-icons/fa6";
import { useCallback, useState } from "react";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(async () => {
    const value = profile.email;
    try {
      // Try async clipboard API first
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
        return;
      }
      throw new Error("Clipboard API not available");
    } catch {
      // Fallback for older browsers
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
        // As a last resort, open mailto
        window.location.href = `mailto:${value}`;
      }
    }
  }, []);

  return (
    <section className="w-full min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30 float-animation"
          style={{ 
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-25 float-animation"
          style={{ 
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '-2s'
          }}
        />
        <div 
          className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full opacity-20 float-animation"
          style={{ 
            background: 'radial-gradient(circle, rgba(129, 140, 248, 0.4) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '-4s'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 relative z-10">
        <div className="flex flex-col gap-8 sm:gap-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <Reveal>
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                    Available for opportunities
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="glow-text">{profile.name}</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-xl sm:text-2xl text-foreground/70 max-w-xl">
                  {profile.title}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-3 text-sm text-foreground/50 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  {profile.location}
                </p>
              </Reveal>
            </div>
            <div className="hidden sm:flex items-center justify-center h-28 w-28 rounded-2xl gradient-border pulse-glow select-none">
              <span className="text-3xl font-bold glow-text">
                {profile.name
                  .split(" ")
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((n) => n[0]?.toUpperCase())
                  .join("")}
              </span>
            </div>
          </div>

          <Reveal delay={0.2}>
            <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-foreground/80">
              {profile.summary}
            </p>
          </Reveal>

          <div className="flex flex-wrap items-center gap-4">
            <Reveal delay={0.25}>
              <Link
                className="gradient-btn rounded-full px-7 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform"
                href="#projects"
              >
                <span>View Projects</span>
              </Link>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                className="rounded-full border border-foreground/20 px-7 py-3 text-sm font-medium hover:bg-foreground/5 hover:border-primary/40 transition-all"
                href={"mailto:" + profile.email}
              >
                Contact Me
              </Link>
            </Reveal>
            <Reveal delay={0.35}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-3 text-sm hover:bg-foreground/5 hover:border-primary/40 transition-all"
                aria-label="Copy email"
              >
                <FaRegCopy className="text-primary" /> {copied ? "Copied!" : "Copy email"}
              </button>
            </Reveal>
            <Reveal delay={0.4}>
              <Socials />
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <FaArrowDown className="animate-bounce" />
      </div>
    </section>
  );
}


