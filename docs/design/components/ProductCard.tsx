import type { ReactNode } from "react";
import { Badge } from "./Badge";

interface MenuItem {
  category: string;
  name: string;
  description: string;
  price: number;
  badge?: string;
  imageSrc?: string;
}

interface ProductCardProps {
  item: MenuItem;
  onAdd?: (item: MenuItem) => void;
  className?: string;
}

/* Maps each category to its circular background color */
const categoryColor: Record<string, string> = {
  "Bebidas de Espresso": "bg-caramel/30",
  "Bebidas Frías":       "bg-teal/20",
  "Pasteles":            "bg-blush/20",
  "Sándwiches":          "bg-matcha/20",
};

function formatPrice(cents: number): string {
  return `$${cents.toLocaleString("es-CL")}`;
}

export function ProductCard({ item, onAdd, className = "" }: ProductCardProps) {
  const bgColor = categoryColor[item.category] ?? "bg-sand/30";

  return (
    <article
      className={[
        "group relative flex flex-col gap-4 p-5",
        "bg-cream rounded-xl border border-espresso/6",
        "shadow-warm-sm hover:shadow-warm-md",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-0.5",
        className,
      ].join(" ")}
    >
      {/* Image circle */}
      <div className={[
        "relative mx-auto w-28 h-28 rounded-full flex items-center justify-center overflow-hidden",
        bgColor,
        "transition-transform duration-300 ease-spring group-hover:scale-105",
      ].join(" ")}>
        {item.imageSrc ? (
          <img
            src={item.imageSrc}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <PlaceholderIcon category={item.category} />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 text-center">
        {item.badge && (
          <div className="flex justify-center">
            <Badge variant="popular">{item.badge}</Badge>
          </div>
        )}

        <h3 className="font-display text-lg font-bold text-espresso leading-snug">
          {item.name}
        </h3>

        <p className="font-sans text-sm text-stone leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* Price + add */}
        <div className="flex items-center justify-between mt-2 pt-3 border-t border-espresso/6">
          <span className="font-mono text-lg font-semibold text-terracotta">
            {formatPrice(item.price)}
          </span>

          <button
            onClick={() => onAdd?.(item)}
            aria-label={`Agregar ${item.name} al carrito`}
            className={[
              "w-8 h-8 rounded-full bg-espresso text-cream flex items-center justify-center",
              "hover:bg-terracotta active:scale-90",
              "transition-all duration-200 ease-spring",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/40",
            ].join(" ")}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </article>
  );
}

/* ── Sub-components ───────────────────────────────────────── */

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PlaceholderIcon({ category }: { category: string }) {
  const icons: Record<string, ReactNode> = {
    "Bebidas de Espresso": (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M10 30h20l-2-18H12L10 30z" fill="#4A2E1E" opacity=".2"/>
        <path d="M30 14h4a4 4 0 010 8h-4" stroke="#4A2E1E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 8h16" stroke="#4A2E1E" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="20" cy="30" rx="10" ry="2" fill="#4A2E1E" opacity=".1"/>
      </svg>
    ),
    "Bebidas Frías": (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="13" y="10" width="14" height="22" rx="3" fill="#2A6669" opacity=".2"/>
        <path d="M13 10h14" stroke="#2A6669" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 6h8" stroke="#2A6669" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 10v-4" stroke="#2A6669" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 18h10M15 22h7" stroke="#2A6669" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
    "Pasteles": (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="22" width="24" height="10" rx="3" fill="#C96060" opacity=".2"/>
        <path d="M12 22c0-6 4-10 8-10s8 4 8 10" fill="#C96060" opacity=".15"/>
        <path d="M20 12V8M16 14l-2-3M24 14l2-3" stroke="#C96060" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "Sándwiches": (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="12" width="24" height="5" rx="2.5" fill="#4F7942" opacity=".3"/>
        <rect x="8" y="23" width="24" height="5" rx="2.5" fill="#4F7942" opacity=".3"/>
        <rect x="10" y="17" width="20" height="6" fill="#E8944A" opacity=".3"/>
      </svg>
    ),
  };

  return (
    <span className="opacity-70">
      {icons[category] ?? (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <circle cx="20" cy="20" r="12" fill="#4A2E1E" opacity=".15"/>
        </svg>
      )}
    </span>
  );
}
