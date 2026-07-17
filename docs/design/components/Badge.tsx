import type { ReactNode } from "react";

type BadgeVariant = "popular" | "new" | "seasonal" | "sold-out" | "category";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  popular:
    "bg-terracotta text-cream",
  new:
    "bg-matcha text-cream",
  seasonal:
    "bg-caramel text-espresso",
  "sold-out":
    "bg-stone/20 text-stone line-through",
  category:
    "bg-espresso/8 text-mocha border border-espresso/10",
};

export function Badge({ variant = "popular", children, className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1 px-2.5 py-0.5",
        "rounded-full text-xs font-semibold tracking-wide uppercase",
        "font-sans leading-none",
        variantStyles[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
