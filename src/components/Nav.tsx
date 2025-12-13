"use client";

import Link from "next/link";
import { Socials } from "@/components/Socials";
import { useState, useEffect } from "react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#writing", label: "Writing" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "backdrop-blur-xl bg-background/80 border-b border-primary/10 shadow-lg shadow-primary/5" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="#" className="font-bold text-lg glow-text">
          SF
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link 
                href={l.href} 
                className="relative px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="hidden sm:block">
          <Socials size="sm" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden p-2 rounded-lg hover:bg-foreground/5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`h-0.5 bg-foreground rounded transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`h-0.5 bg-foreground rounded transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-foreground rounded transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-primary/10 p-4">
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link 
                  href={l.href} 
                  className="block px-4 py-3 text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-foreground/10">
            <Socials size="sm" />
          </div>
        </div>
      )}
    </nav>
  );
}


