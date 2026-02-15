"use client";
import profile from "@/data/profile";
import { Socials } from "@/components/Socials";
import { Reveal } from "@/components/animations";
import { FaRegCopy } from "react-icons/fa6";
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
    <section className="w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-28 relative">
        <div className="flex flex-col gap-8 sm:gap-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <Reveal>
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  {profile.name}
                </h1>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-3 text-xl sm:text-2xl text-foreground/90 font-medium">
                  {profile.title}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-2 text-sm sm:text-base text-foreground/60 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  {profile.location}
                </p>
              </Reveal>
            </div>
            <div className="hidden sm:flex items-center justify-center h-24 w-24 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg shadow-primary/10 select-none backdrop-blur-sm">
              <span className="text-2xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                {profile.name
                  .split(" ")
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((n) => n[0]?.toUpperCase())
                  .join("")}
              </span>
            </div>
          </div>

          <Reveal>
            <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-foreground/80">
              {profile.summary}
            </p>
          </Reveal>

          <div className="flex flex-wrap items-center gap-3">
            <Reveal>
              <a
                className="rounded-full bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2.5 text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                href="#projects"
              >
                View Projects
              </a>
            </Reveal>
            <Reveal delay={0.05}>
              <a
                className="inline-flex items-center rounded-full border-2 border-primary/30 px-6 py-2.5 text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                href={"mailto:" + profile.email}
              >
                Contact
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 px-6 py-2.5 text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                aria-label="Copy email"
              >
                <FaRegCopy /> {copied ? "Copied!" : "Copy email"}
              </button>
            </Reveal>
            <Reveal delay={0.15}>
              <Socials />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


