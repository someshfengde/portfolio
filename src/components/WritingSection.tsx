import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { FaMedium } from "react-icons/fa6";
import { SiSubstack, SiHuggingface, SiWeightsandbiases } from "react-icons/si";

export function WritingSection() {
  return (
    <Section id="writing" title="Writing & Profiles">
      <ul className="flex flex-wrap gap-3 text-sm items-center">
        <li>
          <a className="inline-flex items-center gap-2 underline underline-offset-4 hover:no-underline" href={profile.links.medium!} target="_blank">
            <FaMedium /> Medium ↗
          </a>
        </li>
        <li>
          <a className="inline-flex items-center gap-2 underline underline-offset-4 hover:no-underline" href={profile.links.substack!} target="_blank">
            <SiSubstack /> Substack ↗
          </a>
        </li>
        <li>
          <a className="inline-flex items-center gap-2 underline underline-offset-4 hover:no-underline" href={profile.links.huggingface!} target="_blank">
            <SiHuggingface /> Hugging Face ↗
          </a>
        </li>
        <li>
          <a className="inline-flex items-center gap-2 underline underline-offset-4 hover:no-underline" href={profile.links.wandb!} target="_blank">
            <SiWeightsandbiases /> W&B ↗
          </a>
        </li>
      </ul>
    </Section>
  );
}


