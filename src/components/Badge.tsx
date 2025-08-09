import React from "react";

type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-foreground/20 px-3 py-1 text-xs sm:text-sm">
      {children}
    </span>
  );
}


