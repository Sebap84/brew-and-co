import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/app/components/Badge";
import { Button } from "@/app/components/Button";
import { ProductCard } from "@/app/components/ProductCard";
import { EventCard } from "@/app/components/EventCard";
import { ReservationModal } from "@/app/components/ReservationModal";
import { POPULAR_ITEMS } from "@/lib/menu";

const HERO_IMAGE = "/images/pexels-1855214.webp";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Interior acogedor del café Brew & Co en Barrio Italia, Santiago"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-espresso/58" />
          {/* Bottom gradient for section transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-linen to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <Badge variant="category" className="mb-6 bg-cream/15 text-cream border-cream/20 backdrop-blur-sm">
            Barrio Italia · Santiago
          </Badge>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-cream leading-[1.05] tracking-tight mb-6">
            El café que{" "}
            <em className="text-caramel not-italic">mereces</em>
            <br />
            cada mañana
          </h1>

          <p className="font-sans text-lg md:text-xl text-cream/80 leading-relaxed mb-10 max-w-xl mx-auto">
            Tercera ola de café de especialidad, repostería artesanal y una
            comunidad que hace que cada visita valga la pena.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/menu">
              <Button variant="primary" size="lg">
                Ver menú completo
              </Button>
            </Link>
            <ReservationModal />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/40">
          <span className="font-sans text-xs tracking-widest uppercase">Descubrir</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true" className="animate-bounce">
            <path d="M8 4v16M3 15l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── Productos populares ───────────────────────────────── */}
      <section className="py-20 px-6 bg-linen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-xs font-bold tracking-widest uppercase text-stone">
              Lo más pedido
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-espresso mt-2 leading-tight">
              Productos populares
            </h2>
            <p className="font-sans text-base text-stone mt-3 max-w-md mx-auto">
              Los favoritos de nuestra comunidad, elegidos semana a semana por
              nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {POPULAR_ITEMS.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/menu">
              <Button variant="outline" size="md">
                Ver carta completa →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Próximos eventos ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-xs font-bold tracking-widest uppercase text-stone">
              Agenda semanal
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-espresso mt-2 leading-tight">
              Próximos eventos
            </h2>
            <p className="font-sans text-base text-stone mt-3 max-w-md mx-auto">
              Más que café, somos comunidad. Únete a nuestros eventos y descubre
              el Brew & Co de los viernes y sábados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <EventCard
              emoji="🎤"
              day="Todos los Viernes"
              time="18:00 – 22:00"
              title="Karaoke Night"
              description="Sube al escenario o disfruta desde tu mesa. Micrófonos abiertos, cócteles especiales y la mejor energía de Barrio Italia. Entrada libre."
              accentClass="bg-blush"
            />
            <EventCard
              emoji="☕"
              day="Todos los Sábados"
              time="10:00 – 12:00"
              title="Cata de Café"
              description="Aprende a distinguir orígenes, perfiles de tostado y métodos de extracción con nuestros baristas certificados Q-Grader. Cupos limitados."
              accentClass="bg-caramel"
            />
          </div>

          <div className="text-center mt-10">
            <ReservationModal />
          </div>
        </div>
      </section>

      {/* ── Nuestra propuesta ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-linen">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🌍",
                title: "Origen trazable",
                body: "Solo trabajamos con productores que conocemos por su nombre. Cada bolsa de café tiene historia, varietal y altitud.",
              },
              {
                emoji: "🏘️",
                title: "Comunidad primero",
                body: "Barrio Italia nos acogió desde el día uno. Cada evento, taller y acción local es nuestra forma de devolver.",
              },
              {
                emoji: "🤌",
                title: "Artesanía sin apuros",
                body: "Todo lo que sale de nuestra cocina está hecho con tiempo y cuidado. La calidad no se puede apresurar.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-4 p-8 bg-cream rounded-2xl border border-espresso/6 shadow-warm-sm"
              >
                <span className="text-4xl">{item.emoji}</span>
                <h3 className="font-display text-xl font-bold text-espresso">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-stone leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
