import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variantClasses = {
    default: "skill-badge",
    primary: "bg-primary/10 text-primary border-primary/30",
    accent: "bg-accent/10 text-accent border-accent/30",
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}


