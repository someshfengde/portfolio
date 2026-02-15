import Link from "next/link";
import profile from "@/data/profile";
import { Socials } from "@/components/Socials";

export function Footer() {
  return (
    <footer className="w-full mt-16">
      <div className="section-divider mx-auto max-w-5xl" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-foreground/50 font-medium">© {new Date().getFullYear()} {profile.name}</div>
        <Socials />
      </div>
    </footer>
  );
}


