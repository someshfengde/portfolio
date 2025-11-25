"use client";

import Link from "next/link";
import profile from "@/data/profile";
import { Socials } from "@/components/Socials";
import { motion } from "framer-motion";
import { FaEnvelope, FaHeart } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full mt-20 relative overflow-hidden">
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-20"
      >
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg shadow-primary/30"
            >
              <FaEnvelope className="text-white text-3xl" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Let&apos;s Work Together
            </h2>
            
            <p className="text-foreground/70 max-w-xl mx-auto mb-8 text-lg">
              I&apos;m always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`mailto:${profile.email}`}
                className="glow-button rounded-full px-8 py-4 text-white font-semibold inline-flex items-center gap-2"
              >
                <FaEnvelope />
                Get In Touch
              </Link>
              <Link
                href={profile.links.linkedin}
                target="_blank"
                className="outline-button rounded-full px-8 py-4 font-semibold"
              >
                Connect on LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom footer */}
      <div className="border-t border-foreground/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <span>© {new Date().getFullYear()} {profile.name}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                Made with <FaHeart className="text-red-500 animate-pulse" /> 
              </span>
            </div>
            <Socials size="sm" />
          </div>
        </div>
      </div>
    </footer>
  );
}


