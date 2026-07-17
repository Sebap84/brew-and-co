import type { ReactNode } from "react";

interface Category {
  id: string;
  label: string;
  icon: ReactNode;
  color: string;       /* Tailwind bg-* class for the circle */
  textColor: string;   /* Tailwind text-* class */
}

interface CategoryNavProps {
  active?: string;
  onSelect?: (id: string) => void;
  layout?: "vertical" | "horizontal";
  className?: string;
}

const CATEGORIES: Category[] = [
  {
    id: "espresso",
    label: "Café",
    color: "bg-caramel/30 hover:bg-caramel/50",
    textColor: "text-mocha",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 18h12l-1.5-10H7.5L6 18z" fill="currentColor" opacity=".25"/>
        <path d="M18 8h2.5a2.5 2.5 0 010 5H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="12" cy="18" rx="6" ry="1.5" fill="currentColor" opacity=".12"/>
      </svg>
    ),
  },
  {
    id: "frias",
    label: "Frías",
    color: "bg-teal/20 hover:bg-teal/35",
    textColor: "text-teal",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="8" height="14" rx="2" fill="currentColor" opacity=".2"/>
        <path d="M8 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 6V3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 11h6M9 14h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
  },
  {
    id: "pasteles",
    label: "Pasteles",
    color: "bg-blush/20 hover:bg-blush/35",
    textColor: "text-blush",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="14" width="16" height="7" rx="2" fill="currentColor" opacity=".2"/>
        <path d="M7 14c0-4 2.5-7 5-7s5 3 5 7" fill="currentColor" opacity=".12"/>
        <path d="M12 7V4M9 8.5L7.5 6M15 8.5L16.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "sandwiches",
    label: "Sándwiches",
    color: "bg-matcha/20 hover:bg-matcha/35",
    textColor: "text-matcha",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="7" width="18" height="3.5" rx="1.75" fill="currentColor" opacity=".3"/>
        <rect x="3" y="14" width="18" height="3.5" rx="1.75" fill="currentColor" opacity=".3"/>
        <rect x="5" y="10.5" width="14" height="3.5" fill="currentColor" opacity=".2"/>
      </svg>
    ),
  },
  {
    id: "todos",
    label: "Ver todo",
    color: "bg-espresso/8 hover:bg-espresso/15",
    textColor: "text-espresso",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="2" fill="currentColor"/>
        <circle cx="12" cy="6" r="2" fill="currentColor"/>
        <circle cx="18" cy="6" r="2" fill="currentColor"/>
        <circle cx="6" cy="12" r="2" fill="currentColor"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <circle cx="18" cy="12" r="2" fill="currentColor"/>
        <circle cx="6" cy="18" r="2" fill="currentColor"/>
        <circle cx="12" cy="18" r="2" fill="currentColor"/>
        <circle cx="18" cy="18" r="2" fill="currentColor"/>
      </svg>
    ),
  },
];

export function CategoryNav({
  active,
  onSelect,
  layout = "vertical",
  className = "",
}: CategoryNavProps) {
  const isVertical = layout === "vertical";

  return (
    <nav
      aria-label="Categorías del menú"
      className={[
        "flex gap-3",
        isVertical ? "flex-col items-center" : "flex-row flex-wrap items-start",
        className,
      ].join(" ")}
    >
      {CATEGORIES.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect?.(cat.id)}
            aria-pressed={isActive}
            aria-label={cat.label}
            className={[
              "group flex flex-col items-center gap-2",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/40 rounded-xl",
            ].join(" ")}
          >
            <span
              className={[
                "w-14 h-14 rounded-2xl flex items-center justify-center",
                "transition-all duration-200 ease-out",
                cat.color,
                cat.textColor,
                isActive
                  ? "ring-2 ring-offset-2 ring-offset-linen scale-105"
                  : "group-hover:scale-105",
                isActive ? `ring-current` : "",
              ].join(" ")}
            >
              {cat.icon}
            </span>
            <span
              className={[
                "font-sans text-xs font-semibold tracking-wide uppercase",
                "transition-colors duration-200",
                isActive ? cat.textColor : "text-stone group-hover:" + cat.textColor.replace("text-", ""),
              ].join(" ")}
            >
              {cat.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

export { CATEGORIES };
export type { Category };
