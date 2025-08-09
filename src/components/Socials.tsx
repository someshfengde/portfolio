import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaXTwitter,
} from "react-icons/fa6";
import { SiWeightsandbiases, SiHuggingface, SiSubstack } from "react-icons/si";
import profile from "@/data/profile";

type Size = "sm" | "md" | "lg";

const sizeMap: Record<Size, number> = { sm: 16, md: 20, lg: 24 };
const sizeClassMap: Record<Size, string> = { sm: "h-8 w-8", md: "h-10 w-10", lg: "h-11 w-11" };

export function Socials({ size = "md" }: { size?: Size }) {
  const iconSize = sizeMap[size];
  const dimClass = sizeClassMap[size];
  const items = [
    { href: profile.links.github, label: "GitHub", icon: <FaGithub size={iconSize} /> },
    { href: profile.links.linkedin, label: "LinkedIn", icon: <FaLinkedin size={iconSize} /> },
    profile.links.wandb ? { href: profile.links.wandb, label: "Weights & Biases", icon: <SiWeightsandbiases size={iconSize} /> } : null,
    profile.links.huggingface ? { href: profile.links.huggingface, label: "Hugging Face", icon: <SiHuggingface size={iconSize} /> } : null,
    profile.links.medium ? { href: profile.links.medium, label: "Medium", icon: <FaMedium size={iconSize} /> } : null,
    profile.links.substack ? { href: profile.links.substack, label: "Substack", icon: <SiSubstack size={iconSize} /> } : null,
    profile.links.x ? { href: profile.links.x, label: "X", icon: <FaXTwitter size={iconSize} /> } : null,
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode }[];

  return (
    <ul className="flex items-center gap-3 text-foreground/80">
      {items.map((it) => (
        <li key={it.href}>
          <Link
            href={it.href}
            target="_blank"
            aria-label={it.label}
            className={`inline-flex items-center justify-center ${dimClass} rounded-md hover:bg-foreground/10 leading-none`}
          >
            {it.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}


