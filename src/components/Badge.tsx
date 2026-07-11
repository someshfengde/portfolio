import React from "react";

type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 px-3 py-1 text-xs sm:text-sm font-medium text-foreground/90 hover:border-primary/50 hover:shadow-sm transition-all duration-200">
      {children}
    </span>
  );
}


