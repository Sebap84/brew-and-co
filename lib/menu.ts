export type MenuCategory =
  | "Bebidas de Espresso"
  | "Bebidas Frías"
  | "Pasteles"
  | "Sándwiches";

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
  badge?: "Popular";
  imageSrc: string;
}

export const MENU_ITEMS: MenuItem[] = [
  /* ── Bebidas de Espresso ── */
  {
    id: "espresso-clasico",
    category: "Bebidas de Espresso",
    name: "Espresso Clásico",
    description:
      "Doble shot de espresso de origen único, tostado medio oscuro con notas de chocolate amargo y frutos secos",
    price: 3500,
    imageSrc: "/images/pexels-685527.webp",
  },
  {
    id: "cappuccino-artesanal",
    category: "Bebidas de Espresso",
    name: "Cappuccino Artesanal",
    description:
      "Espresso con leche entera vaporizada y espuma densa cremosa, decorado con arte latte",
    price: 4900,
    badge: "Popular",
    imageSrc: "/images/pexels-312418.webp",
  },
  {
    id: "caramel-latte",
    category: "Bebidas de Espresso",
    name: "Caramel Latte",
    description:
      "Espresso doble con leche vaporizada y sirope casero de caramelo tostado. Dulce y envolvente",
    price: 5500,
    badge: "Popular",
    imageSrc: "/images/pexels-302899.webp",
  },
  {
    id: "flat-white",
    category: "Bebidas de Espresso",
    name: "Flat White",
    description:
      "Dos ristrettos sobre micro-espuma de leche entera, estilo australiano. Intenso y aterciopelado",
    price: 5200,
    badge: "Popular",
    imageSrc: "/images/pexels-374885.webp",
  },
  {
    id: "cortado",
    category: "Bebidas de Espresso",
    name: "Cortado",
    description:
      "Espresso cortado con igual proporción de leche vaporizada caliente para equilibrar la acidez",
    price: 4500,
    imageSrc: "/images/pexels-3879495.webp",
  },
  {
    id: "mocha-intenso",
    category: "Bebidas de Espresso",
    name: "Mocha Intenso",
    description:
      "Espresso con chocolate negro belga fundido, leche vaporizada y crema batida artesanal",
    price: 5900,
    badge: "Popular",
    imageSrc: "/images/pexels-3879496.webp",
  },

  /* ── Bebidas Frías ── */
  {
    id: "cold-brew-18h",
    category: "Bebidas Frías",
    name: "Cold Brew 18h",
    description:
      "Extracción lenta en frío durante 18 horas. Suave, aterciopelado y naturalmente bajo en acidez",
    price: 5400,
    badge: "Popular",
    imageSrc: "/images/pexels-37603081.webp",
  },
  {
    id: "frappuccino-caramelo",
    category: "Bebidas Frías",
    name: "Frappuccino de Caramelo",
    description:
      "Espresso frío mezclado con caramelo tostado, hielo picado y crema batida con salsa de caramelo",
    price: 6900,
    badge: "Popular",
    imageSrc: "/images/pexels-20205947.webp",
  },
  {
    id: "matcha-latte-frio",
    category: "Bebidas Frías",
    name: "Matcha Latte Frío",
    description:
      "Té matcha ceremonial de Uji batido con leche de avena fría y hielo. Sin azúcar añadida",
    price: 6400,
    imageSrc: "/images/pexels-9309995.webp",
  },
  {
    id: "limonada-jengibre",
    category: "Bebidas Frías",
    name: "Limonada de Jengibre",
    description:
      "Limonada de prensado frío con jengibre fresco rallado y miel de acacia, servida sobre hielo abundante",
    price: 4700,
    imageSrc: "/images/pexels-4134388.webp",
  },
  {
    id: "toffee-shake",
    category: "Bebidas Frías",
    name: "Toffee Shake",
    description:
      "Batido cremoso de toffee con helado de vainilla artesanal y un shot de espresso frío por encima",
    price: 7900,
    badge: "Popular",
    imageSrc: "/images/pexels-3727250.webp",
  },
  {
    id: "chocolate-frio-belga",
    category: "Bebidas Frías",
    name: "Chocolate Frío Belga",
    description:
      "Chocolate negro 72% fundido con leche entera, enfriado y servido sobre hielo con crema batida",
    price: 5400,
    imageSrc: "/images/pexels-3020919.webp",
  },

  /* ── Pasteles ── */
  {
    id: "croissant-mantequilla",
    category: "Pasteles",
    name: "Croissant de Mantequilla",
    description:
      "Hojaldre laminado con mantequilla francesa AOP, horneado cada mañana. Crujiente por fuera y tierno por dentro",
    price: 3700,
    badge: "Popular",
    imageSrc: "/images/pexels-3892469.webp",
  },
  {
    id: "muffin-arandanos",
    category: "Pasteles",
    name: "Muffin de Arándanos",
    description:
      "Muffin esponjoso con arándanos frescos, ralladura de limón y streusel de almendra tostada",
    price: 3900,
    imageSrc: "/images/pexels-36927102.webp",
  },
  {
    id: "tarta-queso",
    category: "Pasteles",
    name: "Tarta de Queso",
    description:
      "Porción de cheesecake cremoso estilo New York con coulis artesanal de frambuesa y frutos rojos",
    price: 5700,
    badge: "Popular",
    imageSrc: "/images/pexels-1126359.webp",
  },
  {
    id: "brownie-chocolate",
    category: "Pasteles",
    name: "Brownie de Chocolate Negro",
    description:
      "Brownie denso de chocolate negro 70% con nueces pecanas tostadas y escamas de flor de sal",
    price: 4400,
    badge: "Popular",
    imageSrc: "/images/pexels-15106329.webp",
  },
  {
    id: "cinnamon-roll",
    category: "Pasteles",
    name: "Cinnamon Roll",
    description:
      "Rollo de canela con glaseado de queso crema. Receta tradicional horneada cada mañana en tienda",
    price: 4900,
    badge: "Popular",
    imageSrc: "/images/pexels-34661986.webp",
  },

  /* ── Sándwiches ── */
  {
    id: "club-pollo-asado",
    category: "Sándwiches",
    name: "Club de Pollo Asado",
    description:
      "Pollo asado a las hierbas provenzales, aguacate, tomate seco y rúcula en chapata artesanal con alioli",
    price: 9400,
    badge: "Popular",
    imageSrc: "/images/pexels-5122952.webp",
  },
  {
    id: "caprese-tostado",
    category: "Sándwiches",
    name: "Caprese Tostado",
    description:
      "Mozzarella de búfala fresca, tomate heirloom, pesto de albahaca casero en pan sourdough tostado al grill",
    price: 8700,
    badge: "Popular",
    imageSrc: "/images/pexels-35903112.webp",
  },
  {
    id: "pavo-ahumado-brie",
    category: "Sándwiches",
    name: "Pavo Ahumado y Brie",
    description:
      "Pavo ahumado artesanal, queso brie cremoso, mermelada de higos y espinacas baby en focaccia de romero",
    price: 9600,
    imageSrc: "/images/pexels-35239874.webp",
  },
];

export const POPULAR_ITEMS = MENU_ITEMS.filter((i) => i.badge === "Popular");

export const ITEMS_BY_CATEGORY: Record<string, MenuItem[]> = {
  espresso: MENU_ITEMS.filter((i) => i.category === "Bebidas de Espresso"),
  frias: MENU_ITEMS.filter((i) => i.category === "Bebidas Frías"),
  pasteles: MENU_ITEMS.filter((i) => i.category === "Pasteles"),
  sandwiches: MENU_ITEMS.filter((i) => i.category === "Sándwiches"),
};
