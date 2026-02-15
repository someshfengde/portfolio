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
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </h2>
        {subtitle ? (
          <p className="mt-3 text-base text-foreground/70">{subtitle}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}


