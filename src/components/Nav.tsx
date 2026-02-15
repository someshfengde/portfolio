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
    <nav className="sticky top-0 z-40 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 bg-background/95 border-b border-primary/10 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#" className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          Somesh
        </a>
        <ul className="hidden sm:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-foreground/70 hover:text-primary transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
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


