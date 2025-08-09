"use client";
import Link from "next/link";
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
    <section className="w-full bg-gradient-to-b from-background to-background/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20">
        <div className="flex flex-col gap-8 sm:gap-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <Reveal>
                <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
                  {profile.name}
                </h1>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-2 text-lg sm:text-xl text-foreground/80">
                  {profile.title}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-3 text-sm text-foreground/70">
                  {profile.location}
                </p>
              </Reveal>
            </div>
            <div className="hidden sm:flex items-center justify-center h-20 w-20 rounded-full border border-foreground/20 bg-foreground/5 shadow-sm select-none">
              <span className="text-xl font-semibold">
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
            <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-foreground/90">
              {profile.summary}
            </p>
          </Reveal>

          <div className="flex flex-wrap items-center gap-3">
            <Reveal>
              <Link
                className="rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium hover:opacity-90"
                href="#projects"
              >
                View Projects
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <Link
                className="inline-flex items-center rounded-full border border-foreground/20 px-5 py-2 text-sm hover:bg-foreground/5"
                href={"mailto:" + profile.email}
              >
                Contact
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2 text-sm hover:bg-foreground/5"
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


