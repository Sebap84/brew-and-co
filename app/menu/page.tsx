import type { Metadata } from "next";
import { MENU_ITEMS } from "@/lib/menu";
import { MenuClient } from "@/app/components/MenuClient";

export const metadata: Metadata = {
  title: "Menú",
  description:
    "Explora nuestra carta de bebidas de espresso, frías, pasteles y sándwiches artesanales en Brew & Co, Barrio Italia.",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-linen">
      {/* Page header */}
      <div className="bg-espresso text-cream py-16 px-6 relative overflow-hidden">
        {/* Decorative radial glow */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 50%, #C84B2E 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-sans text-xs font-bold tracking-widest uppercase text-cream/40">
            Brew & Co
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-black text-cream mt-2 leading-none tracking-tight">
            Nuestra carta
          </h1>
          <p className="font-sans text-lg text-cream/60 mt-4 max-w-lg">
            Ingredientes de origen, recetas artesanales, sabor de barrio.
          </p>
        </div>
      </div>

      {/* Menu content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <MenuClient items={MENU_ITEMS} />
      </div>
    </div>
  );
}
