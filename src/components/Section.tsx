import React from "react";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
        {subtitle ? (
          <p className="mt-3 text-sm text-foreground/60">{subtitle}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}


