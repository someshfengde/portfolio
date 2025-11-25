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
const sizeClassMap: Record<Size, string> = { sm: "h-9 w-9", md: "h-10 w-10", lg: "h-12 w-12" };

export function Socials({ size = "md" }: { size?: Size }) {
  const iconSize = sizeMap[size];
  const dimClass = sizeClassMap[size];
  const items = [
    { href: profile.links.github, label: "GitHub", icon: <FaGithub size={iconSize} />, hoverColor: "hover:text-white hover:bg-[#333]" },
    { href: profile.links.linkedin, label: "LinkedIn", icon: <FaLinkedin size={iconSize} />, hoverColor: "hover:text-white hover:bg-[#0077b5]" },
    profile.links.wandb ? { href: profile.links.wandb, label: "Weights & Biases", icon: <SiWeightsandbiases size={iconSize} />, hoverColor: "hover:text-black hover:bg-[#ffbe00]" } : null,
    profile.links.huggingface ? { href: profile.links.huggingface, label: "Hugging Face", icon: <SiHuggingface size={iconSize} />, hoverColor: "hover:text-black hover:bg-[#ffd21e]" } : null,
    profile.links.medium ? { href: profile.links.medium, label: "Medium", icon: <FaMedium size={iconSize} />, hoverColor: "hover:text-white hover:bg-[#00ab6c]" } : null,
    profile.links.substack ? { href: profile.links.substack, label: "Substack", icon: <SiSubstack size={iconSize} />, hoverColor: "hover:text-white hover:bg-[#ff6719]" } : null,
    profile.links.x ? { href: profile.links.x, label: "X", icon: <FaXTwitter size={iconSize} />, hoverColor: "hover:text-white hover:bg-black" } : null,
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode; hoverColor: string }[];

  return (
    <ul className="flex items-center gap-2 text-foreground/70">
      {items.map((it) => (
        <li key={it.href}>
          <Link
            href={it.href}
            target="_blank"
            aria-label={it.label}
            className={`inline-flex items-center justify-center ${dimClass} rounded-xl transition-all duration-200 ${it.hoverColor} hover:scale-110`}
          >
            {it.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}


