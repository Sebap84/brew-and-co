# Brew & Co — Especificaciones de Componentes

Stack: **Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS v4**  
Fuentes: **Playfair Display** (display) · **DM Sans** (sans) · **DM Mono** (mono)

---

## Integración de tokens

Importar los tokens en `app/globals.css`:

```css
@import "tailwindcss";
@import "../docs/design/tokens.css"; /* ajustar ruta según ubicación final */
```

O copiar el bloque `@theme` de `tokens.css` directamente al `globals.css` del proyecto.

Cargar fuentes en `app/layout.tsx`:

```tsx
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  axes: ["opsz"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});
```

---

## Badge

**Archivo:** `docs/design/components/Badge.tsx`

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `popular \| new \| seasonal \| sold-out \| category` | `popular` | Estilo visual |
| `children` | `ReactNode` | — | Texto de la insignia |
| `className` | `string` | `""` | Clases adicionales |

**Uso:**
```tsx
<Badge variant="popular">Popular</Badge>
<Badge variant="new">Nuevo</Badge>
<Badge variant="seasonal">Temporada</Badge>
<Badge variant="sold-out">Agotado</Badge>
```

**Anatomía:**
- `border-radius: full` — píldora perfecta
- `text-xs font-semibold tracking-wide uppercase` — all-caps compacto
- Altura visual: ~22px

---

## Button

**Archivo:** `docs/design/components/Button.tsx`

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `primary \| secondary \| ghost \| outline` | `primary` | Estilo visual |
| `size` | `sm \| md \| lg` | `md` | Tamaño (32 / 44 / 56px de altura) |
| `icon` | `ReactNode` | — | Ícono SVG |
| `iconPosition` | `left \| right` | `right` | Posición del ícono |
| `loading` | `boolean` | `false` | Muestra spinner, deshabilita |
| + todos los `ButtonHTMLAttributes` | | | |

**Variantes:**

| Variante | Fondo | Texto | Hover |
|----------|-------|-------|-------|
| `primary` | terracotta | cream | rust |
| `secondary` | espresso | cream | mocha |
| `outline` | transparente | espresso | espresso/5 |
| `ghost` | transparente | terracotta | terracotta/8 |

**Reglas:**
- Todos los botones usan `border-radius: full` (píldora)
- `active:scale-[0.97]` — feedback táctil sutil
- Focus ring: `ring-2 ring-terracotta/40 ring-offset-2`
- `disabled` y `loading` aplican `opacity-50 pointer-events-none`

---

## ProductCard

**Archivo:** `docs/design/components/ProductCard.tsx`

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `item` | `MenuItem` | — | Datos del producto (ver interfaz) |
| `onAdd` | `(item: MenuItem) => void` | — | Callback al pulsar "+" |
| `className` | `string` | `""` | Clases adicionales |

**Interfaz MenuItem:**
```ts
interface MenuItem {
  category: string;   // "Bebidas de Espresso" | "Bebidas Frías" | "Pasteles" | "Sándwiches"
  name: string;
  description: string;
  price: number;      // en pesos CLP enteros (ej: 4900)
  badge?: string;     // "Popular" | undefined
  imageSrc?: string;  // ruta a imagen; muestra ícono SVG si ausente
}
```

**Color de círculo por categoría:**

| Categoría | Color de fondo |
|-----------|---------------|
| Bebidas de Espresso | `bg-caramel/30` |
| Bebidas Frías | `bg-teal/20` |
| Pasteles | `bg-blush/20` |
| Sándwiches | `bg-matcha/20` |

**Comportamiento:**
- Hover: `translateY(-2px)` + sombra más profunda
- El círculo de imagen aplica `scale(1.05)` en hover (via `group-hover`)
- El botón "+" cambia de `espresso` a `terracotta` en hover
- Precio formateado con `toLocaleString("es-CL")` → `$4.900`

**Grid recomendado:**
```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
  {items.map(item => <ProductCard key={item.name} item={item} onAdd={handleAdd} />)}
</div>
```

---

## CategoryNav

**Archivo:** `docs/design/components/CategoryNav.tsx`

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `active` | `string` | — | ID de la categoría activa |
| `onSelect` | `(id: string) => void` | — | Callback al seleccionar |
| `layout` | `vertical \| horizontal` | `vertical` | Orientación |
| `className` | `string` | `""` | Clases adicionales |

**IDs de categoría:** `espresso` · `frias` · `pasteles` · `sandwiches` · `todos`

**Estado activo:**
- `ring-2 ring-offset-2` en el color de la categoría
- `scale(1.05)` en el ícono
- Label cambia de `text-stone` al color de la categoría

**Layouts:**
- `vertical`: columna centrada — ideal para sidebar desktop (referencia de imagen)
- `horizontal`: fila con wrap — ideal para navegación móvil o filtros horizontales

---

## Navbar

**Archivo:** `docs/design/components/Navbar.tsx`

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `cartCount` | `number` | `0` | Ítems en el carrito (muestra badge rojo) |
| `onCartOpen` | `() => void` | — | Abre el drawer del carrito |

**Características:**
- `"use client"` — usa `useState` para búsqueda y menú móvil
- `sticky top-0 z-sticky` — se queda fija al hacer scroll
- `backdrop-blur-md bg-linen/90` — efecto glassmorphism cálido
- Búsqueda: botón ícono → campo animado → `onBlur` cierra
- Carrito: badge `terracotta` con conteo; `9+` si supera 9
- Móvil: hamburger → drawer vertical con todos los enlaces

**Posición en el layout:**
```tsx
// app/layout.tsx
<body>
  <Navbar cartCount={cartItems.length} onCartOpen={() => setCartOpen(true)} />
  <main>{children}</main>
</body>
```

---

## Tokens de diseño — referencia rápida

### Colores principales

```css
--terracotta: #C84B2E   /* CTA primario, precios, activos */
--espresso:   #2B1A0E   /* texto principal, botón secundario */
--linen:      #F7EDE2   /* fondo de página */
--cream:      #FFF8F0   /* superficies / tarjetas */
--stone:      #A8917A   /* texto secundario, placeholders */
--caramel:    #E8944A   /* categoría espresso, acentos cálidos */
--teal:       #2A6669   /* categoría bebidas frías */
--blush:      #C96060   /* categoría pasteles */
--matcha:     #4F7942   /* categoría sándwiches / éxito */
```

### Tailwind v4 — uso en JSX

Los colores del `@theme` están disponibles como utilidades directas:

```tsx
<div className="bg-linen text-espresso">       // fondo y texto
<span className="text-terracotta font-mono">   // precio
<div className="bg-caramel/30">                // círculo categoría (con opacidad)
<button className="bg-terracotta hover:bg-rust text-cream rounded-full">
```

### Tipografía en JSX

```tsx
<h1 className="font-display text-5xl font-black leading-none tracking-tight">
<h2 className="font-display text-3xl font-bold leading-tight">
<p  className="font-sans text-base leading-relaxed text-mocha">
<span className="font-mono text-lg font-semibold text-terracotta">  {/* precio */}
<span className="font-sans text-xs font-bold tracking-widest uppercase text-stone">  {/* label */}
```

### Sombras en JSX

```tsx
className="shadow-warm-sm"   // tarjetas en reposo
className="shadow-warm-md"   // tarjetas en hover
className="shadow-warm-lg"   // modales, dropdowns
```

---

## Guía de accesibilidad

- Todos los botones icon-only llevan `aria-label` descriptivo
- Botón de carrito anuncia el conteo: `aria-label="Carrito, 2 artículos"`
- `CategoryNav` usa `aria-pressed` para el estado activo
- `Navbar` usa `aria-expanded` en el toggle móvil
- Focus ring visible en todos los elementos interactivos: `ring-2 ring-terracotta/40`
- Contraste: `terracotta` (#C84B2E) sobre `cream` (#FFF8F0) → ratio 4.7:1 ✓
- Contraste: `espresso` (#2B1A0E) sobre `linen` (#F7EDE2) → ratio 14.2:1 ✓
