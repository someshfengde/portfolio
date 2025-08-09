import Link from "next/link";
import profile from "@/data/profile";
import { Socials } from "@/components/Socials";

export function Footer() {
  return (
    <footer className="w-full border-t border-foreground/10 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-foreground/70">© {new Date().getFullYear()} {profile.name}</div>
        <Socials />
      </div>
    </footer>
  );
}


