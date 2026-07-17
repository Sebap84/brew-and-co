import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la historia de Brew & Co y sus fundadores Valentina Rojas y Matías Fuentes. Café de especialidad en Barrio Italia desde 2019.",
};

const HERO_IMG     = "/images/pexels-683039.webp";
const FOUNDERS_IMG = "/images/pexels-3182830.webp";
const GRID_IMGS    = [
  { src: "/images/pexels-374885.webp",  caption: "Selección de origen" },
  { src: "/images/pexels-2467558.webp", caption: "Extracción perfecta" },
  { src: "/images/pexels-1855214.webp", caption: "Nuestro espacio" },
];

export default function NosotrosPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMG}
            alt="Interior del café Brew & Co con luz cálida de mañana"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-espresso/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <span className="font-sans text-xs font-bold tracking-widest uppercase text-cream/50">
            Desde 2019 · Barrio Italia
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-black text-cream mt-3 leading-[1.05] tracking-tight">
            Somos más que<br />
            <em className="text-caramel not-italic">un café.</em>
          </h1>
          <p className="font-sans text-lg text-cream/70 mt-4">
            Somos el espacio donde la comunidad de Barrio Italia se encuentra.
          </p>
        </div>
      </section>

      {/* ── Historia fundadores ───────────────────────────────── */}
      <section className="py-24 px-6 bg-linen">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="font-sans text-xs font-bold tracking-widest uppercase text-stone">
                  Nuestra historia
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-espresso mt-2 leading-tight">
                  Valentina <span className="text-terracotta">&</span> Matías
                </h2>
                <p className="font-sans text-sm text-stone mt-1 uppercase tracking-wide">
                  Fundadores · 2019
                </p>
              </div>

              <div className="flex flex-col gap-4 font-sans text-base text-mocha leading-relaxed">
                <p>
                  Valentina Rojas creció entre los vapores de la cafetería de su
                  abuela en Valparaíso, donde aprendió que el café no es solo
                  una bebida, sino el pretexto perfecto para la conversación.
                  Desde pequeña se sentó en ese mostrador de madera desgastada y
                  entendió que lo que importa no está en la taza, sino en lo que
                  sucede alrededor de ella.
                </p>
                <p>
                  Matías Fuentes llegó al mundo del café por otro camino: trabajó
                  como tostador en Melbourne durante tres años, donde descubrió
                  los secretos de la tercera ola y se enamoró de la trazabilidad
                  del origen. Volvió a Chile con una libreta llena de notas, una
                  maleta de muestras de café de Etiopía y Colombia, y una
                  convicción: que Santiago merecía algo distinto.
                </p>
                <p>
                  En 2019, con sus ahorros, mucho entusiasmo y una bolsa de
                  café natural de Sidama, abrieron las puertas de Brew & Co en
                  un pequeño local de Barrio Italia. El vecindario los recibió
                  desde el primer día. Hoy, cinco años después, el local ha
                  crecido, el equipo también —son doce personas— pero la
                  filosofía sigue siendo la misma: café honesto, servido con
                  calidez.
                </p>
              </div>

              <blockquote className="border-l-4 border-terracotta pl-5 mt-2">
                <p className="font-display text-xl italic text-espresso leading-snug">
                  &ldquo;Queremos que cada persona que entre aquí sienta que
                  llegó a casa, aunque sea la primera vez.&rdquo;
                </p>
                <footer className="font-sans text-sm text-stone mt-2">
                  — Valentina Rojas, cofundadora
                </footer>
              </blockquote>
            </div>

            {/* Photo */}
            <div className="relative">
              <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-warm-lg">
                <Image
                  src={FOUNDERS_IMG}
                  alt="Valentina y Matías, fundadores de Brew & Co, en su cafetería de Barrio Italia"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-cream rounded-2xl shadow-warm-md p-5 flex flex-col gap-1">
                <span className="font-display text-4xl font-black text-terracotta">5+</span>
                <span className="font-sans text-sm text-stone">años en Barrio Italia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Valores ──────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-sans text-xs font-bold tracking-widest uppercase text-stone">
              Lo que nos mueve
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-espresso mt-2 leading-tight">
              Nuestra filosofía
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🌍",
                color: "bg-caramel/20",
                title: "Origen trazable",
                body: "Solo trabajamos con productores que conocemos por su nombre. Cada bolsa tiene historia, varietal y altitud. Nos importa saber quién cultivó ese café y en qué condiciones.",
              },
              {
                emoji: "🏘️",
                color: "bg-teal/15",
                title: "Comunidad primero",
                body: "Barrio Italia nos acogió desde el día uno. El Karaoke de los viernes, las catas del sábado, los talleres de latte art: todo nace de escuchar a nuestra gente.",
              },
              {
                emoji: "🤌",
                color: "bg-blush/15",
                title: "Artesanía sin apuros",
                body: "Todo lo que sale de nuestra cocina está hecho con tiempo y cuidado. Los croissants se laminan a mano desde las 5 AM. La calidad no se puede apresurar.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-5 p-8 bg-linen rounded-2xl border border-espresso/6 shadow-warm-sm hover:shadow-warm-md transition-shadow duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-2xl`}
                >
                  {item.emoji}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-espresso">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-stone leading-relaxed mt-2">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo grid ───────────────────────────────────────── */}
      <section className="py-20 px-6 bg-linen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-xs font-bold tracking-widest uppercase text-stone">
              Galería
            </span>
            <h2 className="font-display text-4xl font-bold text-espresso mt-2 leading-tight">
              Un vistazo a nuestro mundo
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {GRID_IMGS.map(({ src, caption }) => (
              <div key={src} className="group flex flex-col gap-3">
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-warm-sm">
                  <Image
                    src={src}
                    alt={caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <p className="font-sans text-sm text-stone text-center">
                  {caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-espresso text-cream text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 30% 60%, #C84B2E 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-6">
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
            Ven a visitarnos
          </h2>
          <p className="font-sans text-lg text-cream/70 leading-relaxed">
            Av. Italia 1234, Barrio Italia, Santiago.<br />
            Lunes a Viernes 7:30 – 21:00 · Fines de semana 8:00 – 22:00
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-terracotta text-cream font-sans font-semibold text-base hover:bg-rust transition-colors duration-200 shadow-warm-sm hover:shadow-warm-md"
          >
            Cómo llegar →
          </a>
        </div>
      </section>
    </>
  );
}
