"use client";

import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  // Styles are now handled by CSS classes for better consistency and customization
  const variants = {
    default: "tech-badge",
    primary: "bg-primary/10 text-primary-light",
    secondary: "bg-secondary/10 text-secondary",
  };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
