"use client";

import Link from "next/link";
import { Socials } from "@/components/Socials";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#writing", label: "Writing" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-primary/10 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between gap-4">
        <Link
          href="#"
          className="font-bold text-lg gradient-text hover:opacity-80 transition-opacity"
        >
          SF
        </Link>
        <ul className="hidden sm:flex items-center gap-6 text-sm">
          {links.map((l, index) => (
            <motion.li
              key={l.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <Link
                href={l.href}
                className="text-foreground/70 hover:text-foreground animated-underline transition-colors"
              >
                {l.label}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="hidden sm:block">
          <Socials size="sm" />
        </div>
      </div>
    </motion.nav>
  );
}
