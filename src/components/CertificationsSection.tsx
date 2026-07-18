"use client";

import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { motion } from "framer-motion";
import { FaCertificate, FaAward, FaExternalLinkAlt } from "react-icons/fa";

export function CertificationsSection() {
  return (
    <Section id="certifications" title="Certifications & Achievements" subtitle="Continuous learning and professional development">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {profile.certifications.map((c, index) => (
          <motion.div
            key={`${c.name}-${c.issuer}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="glass-card rounded-2xl p-5 group relative overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FaAward className="text-primary text-xl" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-foreground group-hover:text-primary-light transition-colors line-clamp-2 min-h-[3rem]">
                {c.name}
              </h3>
              
              <p className="text-sm text-primary mt-2">{c.issuer}</p>
              
              {(c.issued || c.credentialId) && (
                <div className="mt-3 text-xs text-foreground/50 space-y-1">
                  {c.issued && <div>{c.issued}</div>}
                  {c.credentialId && (
                    <div className="truncate">ID: {c.credentialId}</div>
                  )}
                </div>
              )}

              {c.href && (
                <a
                  href={c.href}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
                >
                  View credential
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


