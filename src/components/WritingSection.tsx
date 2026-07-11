import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { FaMedium } from "react-icons/fa6";
import { SiSubstack, SiHuggingface, SiWeightsandbiases } from "react-icons/si";

export function WritingSection() {
  return (
    <Section id="writing" title="Writing & Profiles">
      <ul className="flex flex-wrap gap-4 text-sm items-center">
        <li>
          <a className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 px-5 py-2.5 font-medium hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300" href={profile.links.medium!} target="_blank">
            <FaMedium /> Medium ↗
          </a>
        </li>
        <li>
          <a className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 px-5 py-2.5 font-medium hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300" href={profile.links.substack!} target="_blank">
            <SiSubstack /> Substack ↗
          </a>
        </li>
        <li>
          <a className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 px-5 py-2.5 font-medium hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300" href={profile.links.huggingface!} target="_blank">
            <SiHuggingface /> Hugging Face ↗
          </a>
        </li>
        <li>
          <a className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 px-5 py-2.5 font-medium hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300" href={profile.links.wandb!} target="_blank">
            <SiWeightsandbiases /> W&B ↗
          </a>
        </li>
      </ul>
    </Section>
  );
}


