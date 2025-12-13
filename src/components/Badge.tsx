"use client";

import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "tech-badge",
    primary: "bg-primary/20 border-primary/40 text-primary-light",
    secondary: "bg-secondary/20 border-secondary/40 text-secondary",
  };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm border ${variants[variant]}`}>
      {children}
    </span>
  );
}
