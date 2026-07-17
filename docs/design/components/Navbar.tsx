"use client";

import { useState } from "react";

interface NavbarProps {
  cartCount?: number;
  onCartOpen?: () => void;
}

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/menu", label: "Menú" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
];

export function Navbar({ cartCount = 0, onCartOpen }: NavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-sticky bg-linen/90 backdrop-blur-md border-b border-espresso/8">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="Brew & Co — Inicio">
          <LogoIcon />
          <span className="font-display text-xl font-bold text-espresso tracking-tight group-hover:text-terracotta transition-colors duration-200">
            Brew<span className="text-terracotta">&</span>Co.
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={[
                "px-4 py-2 rounded-full font-sans text-sm font-medium",
                "text-mocha hover:text-espresso hover:bg-espresso/6",
                "transition-all duration-150 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/40",
              ].join(" ")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* Search */}
          <div className="relative hidden sm:block">
            {searchOpen ? (
              <input
                autoFocus
                type="search"
                placeholder="Buscar en el menú…"
                onBlur={() => setSearchOpen(false)}
                aria-label="Buscar en el menú"
                className={[
                  "w-56 h-9 pl-9 pr-4 rounded-full",
                  "bg-espresso/6 border border-espresso/10",
                  "font-sans text-sm text-espresso placeholder:text-stone",
                  "focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:bg-cream",
                  "transition-all duration-200",
                ].join(" ")}
              />
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Abrir búsqueda"
                className="w-9 h-9 rounded-full flex items-center justify-center text-mocha hover:bg-espresso/6 hover:text-espresso transition-all duration-150"
              >
                <SearchIcon />
              </button>
            )}
            {searchOpen && (
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone pointer-events-none">
                <SearchIcon />
              </span>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={onCartOpen}
            aria-label={`Carrito de compras${cartCount > 0 ? `, ${cartCount} artículos` : ""}`}
            className="relative w-9 h-9 rounded-full flex items-center justify-center text-mocha hover:bg-espresso/6 hover:text-espresso transition-all duration-150"
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 rounded-full bg-terracotta text-cream text-[10px] font-bold flex items-center justify-center font-sans leading-none">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-mocha hover:bg-espresso/6 transition-all duration-150"
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav
          aria-label="Navegación móvil"
          className="md:hidden border-t border-espresso/8 bg-linen px-6 py-4 flex flex-col gap-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl font-sans text-base font-medium text-mocha hover:text-espresso hover:bg-espresso/6 transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

/* ── Icons ────────────────────────────────────────────────── */

function LogoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="8" fill="#2B1A0E"/>
      <path d="M8 20h12l-1.5-10H9.5L8 20z" fill="#F7EDE2" opacity=".9"/>
      <path d="M20 11h2a2 2 0 010 4h-2" stroke="#C84B2E" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 8h10" stroke="#E8944A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M1 1h2.5l1.8 9h8.4l1.3-6H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="7" cy="15.5" r="1" fill="currentColor"/>
      <circle cx="13" cy="15.5" r="1" fill="currentColor"/>
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
