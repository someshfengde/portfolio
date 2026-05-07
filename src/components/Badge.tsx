import React from "react";

type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs sm:text-sm font-medium text-foreground/80">
      {children}
    </span>
  );
}


