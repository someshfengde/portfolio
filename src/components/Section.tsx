import React from "react";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
      <header className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-primary to-transparent" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight glow-text">{title}</h2>
        </div>
        {subtitle ? (
          <p className="text-foreground/60 max-w-xl">{subtitle}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}


