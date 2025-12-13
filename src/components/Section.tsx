"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="section-heading mb-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text">{title}</h2>
        </div>
        {subtitle ? (
          <p className="mt-2 text-base text-foreground/60">{subtitle}</p>
        ) : null}
      </motion.header>
      {children}
    </section>
  );
}
