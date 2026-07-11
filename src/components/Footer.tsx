import profile from "@/data/profile";
import { Socials } from "@/components/Socials";

export function Footer() {
  return (
    <footer className="w-full border-t border-primary/10 mt-20 bg-gradient-to-b from-background to-card-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-foreground/70">
          © {new Date().getFullYear()} <span className="font-semibold text-foreground/90">{profile.name}</span>
        </div>
        <Socials />
      </div>
    </footer>
  );
}


