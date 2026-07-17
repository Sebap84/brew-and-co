"use client";

import { useState } from "react";
import { CategoryNav } from "./CategoryNav";
import { ProductCard } from "./ProductCard";
import type { MenuItem, MenuCategory } from "@/lib/menu";

const CATEGORY_MAP: Record<string, MenuCategory | "todos"> = {
  todos: "todos",
  espresso: "Bebidas de Espresso",
  frias: "Bebidas Frías",
  pasteles: "Pasteles",
  sandwiches: "Sándwiches",
};

const SECTION_META: Record<
  MenuCategory,
  { emoji: string; colorClass: string }
> = {
  "Bebidas de Espresso": { emoji: "☕", colorClass: "text-caramel" },
  "Bebidas Frías": { emoji: "🧊", colorClass: "text-teal" },
  Pasteles: { emoji: "🥐", colorClass: "text-blush" },
  Sándwiches: { emoji: "🥪", colorClass: "text-matcha" },
};

const ALL_CATEGORIES: MenuCategory[] = [
  "Bebidas de Espresso",
  "Bebidas Frías",
  "Pasteles",
  "Sándwiches",
];

export function MenuClient({ items }: { items: MenuItem[] }) {
  const [active, setActive] = useState("todos");

  const activeCategoryValue = CATEGORY_MAP[active];

  const visibleCategories =
    activeCategoryValue === "todos"
      ? ALL_CATEGORIES
      : [activeCategoryValue as MenuCategory];

  return (
    <div>
      {/* Sticky category filter */}
      <div className="sticky top-16 z-[150] bg-linen/95 backdrop-blur-md -mx-6 px-6 py-4 border-b border-espresso/8 mb-12">
        <CategoryNav
          active={active}
          onSelect={setActive}
          layout="horizontal"
        />
      </div>

      {/* Category sections */}
      <div className="flex flex-col gap-16">
        {visibleCategories.map((cat) => {
          const catItems = items.filter((i) => i.category === cat);
          if (catItems.length === 0) return null;
          const { emoji, colorClass } = SECTION_META[cat];

          return (
            <section key={cat}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{emoji}</span>
                <div>
                  <h2
                    className={`font-display text-3xl font-bold leading-none ${colorClass}`}
                  >
                    {cat}
                  </h2>
                  <p className="font-sans text-sm text-stone mt-1">
                    {catItems.length}{" "}
                    {catItems.length === 1 ? "producto" : "productos"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {catItems.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
