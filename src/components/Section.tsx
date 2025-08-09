import React from "react";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14">
      <header className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-foreground/70">{subtitle}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}


