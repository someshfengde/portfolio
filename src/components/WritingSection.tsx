import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { FaMedium } from "react-icons/fa6";
import { SiSubstack, SiHuggingface, SiWeightsandbiases } from "react-icons/si";

export function WritingSection() {
  return (
    <Section id="writing" title="Writing & Profiles">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <a
          className="flex flex-col items-center gap-3 rounded-xl border border-foreground/10 p-5 hover:border-accent/30 hover:shadow-md transition-all text-center"
          href={profile.links.medium!}
          target="_blank"
        >
          <FaMedium className="text-2xl" />
          <span className="text-sm font-medium">Medium</span>
        </a>
        <a
          className="flex flex-col items-center gap-3 rounded-xl border border-foreground/10 p-5 hover:border-accent/30 hover:shadow-md transition-all text-center"
          href={profile.links.substack!}
          target="_blank"
        >
          <SiSubstack className="text-2xl" />
          <span className="text-sm font-medium">Substack</span>
        </a>
        <a
          className="flex flex-col items-center gap-3 rounded-xl border border-foreground/10 p-5 hover:border-accent/30 hover:shadow-md transition-all text-center"
          href={profile.links.huggingface!}
          target="_blank"
        >
          <SiHuggingface className="text-2xl" />
          <span className="text-sm font-medium">Hugging Face</span>
        </a>
        <a
          className="flex flex-col items-center gap-3 rounded-xl border border-foreground/10 p-5 hover:border-accent/30 hover:shadow-md transition-all text-center"
          href={profile.links.wandb!}
          target="_blank"
        >
          <SiWeightsandbiases className="text-2xl" />
          <span className="text-sm font-medium">W&B</span>
        </a>
      </div>
    </Section>
  );
}


