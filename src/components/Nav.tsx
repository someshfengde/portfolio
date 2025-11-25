"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Socials } from "@/components/Socials";
import { FaGamepad } from "react-icons/fa6";

const links = [
  { href: "#projects", label: "Quests", icon: "🎯" },
  { href: "#experience", label: "Timeline", icon: "⏱️" },
  { href: "#skills", label: "Skills", icon: "⚡" },
  { href: "#certifications", label: "Achievements", icon: "🏆" },
  { href: "#writing", label: "Content", icon: "📝" },
];

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 bg-background/90 border-b border-foreground/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between gap-4">
        <Link href="#" className="flex items-center gap-2 font-bold">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <FaGamepad className="text-purple-400" />
          </motion.div>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Somesh
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-3 py-1.5 rounded-md text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all flex items-center gap-1.5"
              >
                <span className="text-xs">{l.icon}</span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden sm:block">
          <Socials size="sm" />
        </div>
      </div>
    </nav>
  );
}


