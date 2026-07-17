import Image from "next/image";
import { Badge } from "./Badge";
import type { MenuItem } from "@/lib/menu";

interface ProductCardProps {
  item: MenuItem;
  className?: string;
}

function formatPrice(price: number): string {
  return `$${price.toLocaleString("es-CL")}`;
}

export function ProductCard({ item, className = "" }: ProductCardProps) {
  return (
    <article
      className={[
        "group flex flex-col",
        "bg-cream rounded-2xl border border-espresso/6",
        "shadow-warm-sm hover:shadow-warm-md",
        "transition-all duration-300 ease-out hover:-translate-y-0.5",
        "overflow-hidden",
        className,
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={item.imageSrc}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant="popular">{item.badge}</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-bold text-espresso leading-snug">
            {item.name}
          </h3>
          <span className="font-mono text-sm font-semibold text-terracotta whitespace-nowrap">
            {formatPrice(item.price)}
          </span>
        </div>

        <p className="font-sans text-xs text-stone leading-relaxed line-clamp-2">
          {item.description}
        </p>

        <div className="mt-auto pt-3 flex justify-end">
          <button
            aria-label={`Agregar ${item.name} al carrito`}
            className={[
              "w-8 h-8 rounded-full bg-espresso text-cream",
              "flex items-center justify-center",
              "hover:bg-terracotta active:scale-90",
              "transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/40",
            ].join(" ")}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
