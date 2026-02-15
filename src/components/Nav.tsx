import Link from "next/link";
import { Socials } from "@/components/Socials";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#writing", label: "Writing" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 bg-background/90 border-b border-foreground/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="#" className="font-bold text-lg gradient-text">Somesh</Link>
        <ul className="hidden sm:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-foreground/60 hover:text-foreground transition-colors font-medium">
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


