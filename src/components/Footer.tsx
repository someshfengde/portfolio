import Link from "next/link";
import profile from "@/data/profile";
import { Socials } from "@/components/Socials";
import { FaHeart } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="w-full border-t border-primary/10 mt-16 bg-gradient-to-t from-primary/5 to-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link href="#" className="text-2xl font-bold glow-text">
            {profile.name}
          </Link>
          
          <p className="text-sm text-foreground/50 max-w-md">
            Machine Learning Engineer crafting intelligent systems that solve real-world problems.
          </p>
          
          <Socials size="lg" />
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-4" />
          
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-foreground/40">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              Built with <FaHeart className="text-red-400 text-xs" /> and lots of coffee
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}


