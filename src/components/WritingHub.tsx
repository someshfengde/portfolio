"use client";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { FaMedium, FaPenNib } from "react-icons/fa6";
import { SiSubstack, SiHuggingface, SiWeightsandbiases } from "react-icons/si";

const platformInfo = [
  {
    key: "medium",
    label: "Medium",
    icon: FaMedium,
    color: "from-green-500/20 to-emerald-500/20",
    textColor: "text-green-400",
    description: "Technical articles & ML insights",
  },
  {
    key: "substack",
    label: "Substack",
    icon: SiSubstack,
    color: "from-orange-500/20 to-amber-500/20",
    textColor: "text-orange-400",
    description: "Newsletter & deep dives",
  },
  {
    key: "huggingface",
    label: "Hugging Face",
    icon: SiHuggingface,
    color: "from-yellow-500/20 to-amber-500/20",
    textColor: "text-yellow-400",
    description: "Models & datasets",
  },
  {
    key: "wandb",
    label: "W&B Portfolio",
    icon: SiWeightsandbiases,
    color: "from-blue-500/20 to-cyan-500/20",
    textColor: "text-blue-400",
    description: "Experiment tracking",
  },
];

export function WritingHub() {
  return (
    <Section id="writing" title="" subtitle="">
      {/* Custom game-style header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
            <FaPenNib className="text-indigo-400 text-xl" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Content Hub
            </h2>
            <p className="text-sm text-foreground/60">Writing, models, and experiment logs</p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {platformInfo.map((platform, index) => {
          const href = profile.links[platform.key as keyof typeof profile.links];
          if (!href) return null;

          const Icon = platform.icon;

          return (
            <motion.a
              key={platform.key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className={`group relative p-5 rounded-xl border border-foreground/10 bg-gradient-to-br ${platform.color} hover:border-foreground/20 transition-all`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-foreground/10 ${platform.textColor}`}>
                  <Icon className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold ${platform.textColor} group-hover:underline`}>
                    {platform.label}
                  </h3>
                  <p className="text-sm text-foreground/60 mt-1">
                    {platform.description}
                  </p>
                </div>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="text-foreground/40 group-hover:text-foreground/60 transition-colors"
                >
                  →
                </motion.span>
              </div>

              {/* Visit indicator */}
              <div className="absolute bottom-3 right-3 text-xs text-foreground/40 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                Visit ↗
              </div>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}
