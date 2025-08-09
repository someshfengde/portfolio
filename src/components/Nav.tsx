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
    <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/90 border-b border-foreground/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between gap-4">
        <Link href="#" className="font-medium">Somesh.dev</Link>
        <ul className="hidden sm:flex items-center gap-5 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-foreground/80 hover:text-foreground">
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


