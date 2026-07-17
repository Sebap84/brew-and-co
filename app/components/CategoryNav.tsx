"use client";

interface Category {
  id: string;
  label: string;
  emoji: string;
  color: string;
  textColor: string;
  activeRing: string;
}

const CATEGORIES: Category[] = [
  {
    id: "todos",
    label: "Ver todo",
    emoji: "✦",
    color: "bg-espresso/8 hover:bg-espresso/15",
    textColor: "text-espresso",
    activeRing: "ring-espresso/40",
  },
  {
    id: "espresso",
    label: "Café",
    emoji: "☕",
    color: "bg-caramel/25 hover:bg-caramel/40",
    textColor: "text-mocha",
    activeRing: "ring-caramel",
  },
  {
    id: "frias",
    label: "Frías",
    emoji: "🧊",
    color: "bg-teal/15 hover:bg-teal/30",
    textColor: "text-teal",
    activeRing: "ring-teal",
  },
  {
    id: "pasteles",
    label: "Pasteles",
    emoji: "🥐",
    color: "bg-blush/15 hover:bg-blush/30",
    textColor: "text-blush",
    activeRing: "ring-blush",
  },
  {
    id: "sandwiches",
    label: "Sándwiches",
    emoji: "🥪",
    color: "bg-matcha/15 hover:bg-matcha/30",
    textColor: "text-matcha",
    activeRing: "ring-matcha",
  },
];

interface CategoryNavProps {
  active?: string;
  onSelect?: (id: string) => void;
  layout?: "vertical" | "horizontal";
  className?: string;
}

export function CategoryNav({
  active = "todos",
  onSelect,
  layout = "horizontal",
  className = "",
}: CategoryNavProps) {
  const isHorizontal = layout === "horizontal";

  return (
    <nav
      aria-label="Categorías del menú"
      className={[
        "flex gap-3",
        isHorizontal
          ? "flex-row overflow-x-auto pb-1 scrollbar-none"
          : "flex-col items-center",
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
            className={[
              "group flex shrink-0 items-center gap-2.5",
              isHorizontal ? "flex-row" : "flex-col",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/40 rounded-2xl",
            ].join(" ")}
          >
            <span
              className={[
                "w-12 h-12 rounded-2xl flex items-center justify-center text-xl",
                "transition-all duration-200 ease-out",
                cat.color,
                isActive
                  ? `ring-2 ring-offset-2 ring-offset-linen scale-105 ${cat.activeRing}`
                  : "group-hover:scale-105",
              ].join(" ")}
            >
              {cat.emoji}
            </span>
            <span
              className={[
                "font-sans text-xs font-bold tracking-wide uppercase transition-colors duration-150",
                isActive ? cat.textColor : "text-stone group-hover:text-mocha",
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
