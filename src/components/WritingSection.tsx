"use client";

import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { motion } from "framer-motion";
import { FaMedium } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiSubstack, SiHuggingface, SiWeightsandbiases } from "react-icons/si";

const platforms = [
  {
    key: "medium",
    label: "Medium",
    icon: FaMedium,
    description: "Technical articles on ML/AI",
    color: "from-slate-600 to-slate-800"
  },
  {
    key: "substack",
    label: "Substack",
    icon: SiSubstack,
    description: "Newsletter on ML & data science",
    color: "from-orange-500 to-orange-700"
  },
  {
    key: "huggingface",
    label: "Hugging Face",
    icon: SiHuggingface,
    description: "ML models & datasets",
    color: "from-yellow-500 to-yellow-700"
  },
  {
    key: "wandb",
    label: "Weights & Biases",
    icon: SiWeightsandbiases,
    description: "ML experiment tracking",
    color: "from-amber-500 to-amber-700"
  },
];

export function WritingSection() {
  return (
    <Section id="writing" title="Writing & Profiles" subtitle="Sharing knowledge and contributing to the ML community">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {platforms.map((platform, index) => {
          const href = profile.links[platform.key as keyof typeof profile.links];
          if (!href) return null;

          const Icon = platform.icon;

          return (
            <motion.a
              key={platform.key}
              href={href}
              target="_blank"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 group block hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all`}>
                <Icon className="text-white text-2xl" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary-light transition-colors flex items-center gap-2">
                {platform.label}
                <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="text-sm text-foreground/60 mt-2">{platform.description}</p>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}
