import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <LogoIcon />
              <span className="font-display text-xl font-bold tracking-tight">
                Brew<span className="text-terracotta">&</span>Co.
              </span>
            </div>
            <p className="font-sans text-sm text-cream/60 leading-relaxed max-w-xs">
              Café de especialidad en el corazón de Barrio Italia. Donde cada
              taza tiene una historia y cada visita es un reencuentro.
            </p>
            <div className="flex gap-3 mt-2">
              <SocialIcon href="#" label="Instagram">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </SocialIcon>
              <SocialIcon href="#" label="Facebook">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </SocialIcon>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-cream/40">
              Explorar
            </h3>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Inicio" },
                { href: "/menu", label: "Menú" },
                { href: "/nosotros", label: "Nosotros" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-cream/70 hover:text-cream transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-cream/40">
              Visítanos
            </h3>
            <div className="flex flex-col gap-3 font-sans text-sm text-cream/70">
              <p>Av. Italia 1234<br />Barrio Italia, Santiago</p>
              <p>
                <span className="text-cream/40 text-xs uppercase tracking-wide block mb-0.5">Horario</span>
                Lun – Vie · 6:00 – 20:00<br />
                Sáb · 7:00 – 21:00
              </p>
              <p>
                <a
                  href="tel:+56223456789"
                  className="hover:text-cream transition-colors duration-150"
                >
                  +56 2 2345 6789
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-cream/40">
            © 2025 Brew & Co. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-cream/30">
            Barrio Italia, Santiago de Chile
          </p>
        </div>
      </div>
    </footer>
  );
}

function LogoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="8" fill="#C84B2E" />
      <path d="M8 20h12l-1.5-10H9.5L8 20z" fill="#FFF8F0" opacity=".9" />
      <path d="M20 11h2a2 2 0 010 4h-2" stroke="#FFF8F0" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 8h10" stroke="#E8944A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center text-cream/60 hover:bg-cream/20 hover:text-cream transition-all duration-150"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}
