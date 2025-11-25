import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { FaMedium, FaArrowRight } from "react-icons/fa6";
import { SiSubstack, SiHuggingface, SiWeightsandbiases } from "react-icons/si";
import { Reveal } from "@/components/animations";

const writingLinks = [
  { 
    href: profile.links.medium!, 
    label: "Medium", 
    icon: FaMedium, 
    description: "Technical articles on ML & AI",
    color: "hover:border-[#00ab6c]/40 hover:bg-[#00ab6c]/5"
  },
  { 
    href: profile.links.substack!, 
    label: "Substack", 
    icon: SiSubstack, 
    description: "Newsletter on ML, data science & life",
    color: "hover:border-[#ff6719]/40 hover:bg-[#ff6719]/5"
  },
  { 
    href: profile.links.huggingface!, 
    label: "Hugging Face", 
    icon: SiHuggingface, 
    description: "Models and spaces",
    color: "hover:border-[#ffd21e]/40 hover:bg-[#ffd21e]/5"
  },
  { 
    href: profile.links.wandb!, 
    label: "W&B Portfolio", 
    icon: SiWeightsandbiases, 
    description: "ML experiment tracking",
    color: "hover:border-[#ffbe00]/40 hover:bg-[#ffbe00]/5"
  },
];

export function WritingSection() {
  return (
    <Section id="writing" title="Writing & Profiles" subtitle="Where I share knowledge and experiments">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {writingLinks.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.05}>
            <a 
              className={`hover-card rounded-2xl p-5 group flex flex-col h-full ${item.color}`}
              href={item.href} 
              target="_blank"
            >
              <div className="flex items-center gap-3 mb-3">
                <item.icon className="text-2xl text-foreground/60 group-hover:text-foreground transition-colors" />
                <span className="font-semibold">{item.label}</span>
              </div>
              <p className="text-sm text-foreground/50 flex-1">{item.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-primary group-hover:text-accent transition-colors">
                Visit
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}


