export type Category = 'hamburguesas' | 'pizzas' | 'lomitos' | 'bebidas';

export interface MenuItem {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  image: string;
  category: Category;
  tag?: string;
}

export const categories: { id: Category; label: string; icon: string }[] = [
  { id: 'hamburguesas', label: 'Hamburguesas', icon: '🍔' },
  { id: 'pizzas', label: 'Pizzas', icon: '🍕' },
  { id: 'lomitos', label: 'Lomitos', icon: '🥪' },
  { id: 'bebidas', label: 'Bebidas', icon: '🍺' },
];

export const menuItems: MenuItem[] = [
  // Hamburguesas
  {
    id: 'h1',
    name: 'Barrio Classic',
    ingredients: 'Carne 180g, cheddar, lechuga, tomate, cebolla caramelizada, salsa de la casa',
    price: 8500,
    image: 'https://images.pexels.com/photos/18713424/pexels-photo-18713424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'hamburguesas',
    tag: 'Más pedida',
  },
  {
    id: 'h2',
    name: 'Doble Ahumada',
    ingredients: 'Doble carne 160g, bacon ahumado, cheddar x2, bbq, aros de cebolla',
    price: 11200,
    image: 'https://images.pexels.com/photos/11022623/pexels-photo-11022623.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'hamburguesas',
  },
  {
    id: 'h3',
    name: 'Carbonera Especial',
    ingredients: 'Carne 180g, pan de carbón, rúcula, queso azul, tomate seco, alioli',
    price: 10800,
    image: 'https://images.pexels.com/photos/20652774/pexels-photo-20652774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'hamburguesas',
    tag: 'Nueva',
  },
  {
    id: 'h4',
    name: 'Crispy Chicken',
    ingredients: 'Pollo crispy, colcannon, cheddar, pepinillos, mayo de chipotle',
    price: 9200,
    image: 'https://images.pexels.com/photos/28828555/pexels-photo-28828555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'hamburguesas',
  },

  // Pizzas
  {
    id: 'p1',
    name: 'Margherita de la Casa',
    ingredients: 'Salsa de tomate San Marzano, mozzarella, albahaca fresca, oliva',
    price: 7800,
    image: 'https://images.pexels.com/photos/19260728/pexels-photo-19260728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'pizzas',
    tag: 'Clásica',
  },
  {
    id: 'p2',
    name: 'Barrio Especial',
    ingredients: 'Mozzarella, jamón, morrones, aceitunas, huevo, orégano',
    price: 9500,
    image: 'https://images.pexels.com/photos/33593003/pexels-photo-33593003.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'pizzas',
  },
  {
    id: 'p3',
    name: 'Napolitana',
    ingredients: 'Salsa de tomate, mozzarella, ajo, tomate en rodajas, albahaca',
    price: 8900,
    image: 'https://images.pexels.com/photos/30737921/pexels-photo-30737921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'pizzas',
  },
  {
    id: 'p4',
    name: 'Calabresa Artesanal',
    ingredients: 'Mozzarella, salame picante calabrés, cebolla, ají molido',
    price: 9800,
    image: 'https://images.pexels.com/photos/34667359/pexels-photo-34667359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'pizzas',
  },

  // Lomitos
  {
    id: 'l1',
    name: 'Lomito Completo',
    ingredients: 'Lomo de cerdo, jamón, queso, huevo, lechuga, tomate, salsa golf',
    price: 7600,
    image: 'https://images.pexels.com/photos/30350297/pexels-photo-30350297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'lomitos',
    tag: 'Top ventas',
  },
  {
    id: 'l2',
    name: 'Lomito Artesanal',
    ingredients: 'Lomo de ternera, cebolla caramelizada, queso fontina, rúcula, alioli',
    price: 8200,
    image: 'https://images.pexels.com/photos/37624172/pexels-photo-37624172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'lomitos',
  },
  {
    id: 'l3',
    name: 'Lomito Criollo',
    ingredients: 'Lomo de cerdo, chimichurri de la casa, morrones asados, provoleta',
    price: 8800,
    image: 'https://images.pexels.com/photos/19585039/pexels-photo-19585039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'lomitos',
  },
  {
    id: 'l4',
    name: 'Lomito Vegetariano',
    ingredients: 'Portobello a la parrilla, queso de cabra, cebolla morada, rúcula, pesto',
    price: 7900,
    image: 'https://images.pexels.com/photos/11256670/pexels-photo-11256670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'lomitos',
    tag: 'Veggie',
  },

  // Bebidas
  {
    id: 'b1',
    name: 'Pinta Artesanal IPA',
    ingredients: 'Cerveza IPA de la casa, 500ml, notas cítricas y amargas',
    price: 3200,
    image: 'https://images.pexels.com/photos/5537958/pexels-photo-5537958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'bebidas',
    tag: 'De la casa',
  },
  {
    id: 'b2',
    name: 'Ambar Rubia Artesanal',
    ingredients: 'Cerveza rubia artesanal, 500ml, suave y refrescante',
    price: 2900,
    image: 'https://images.pexels.com/photos/13027856/pexels-photo-13027856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'bebidas',
  },
  {
    id: 'b3',
    name: 'Pinta Negra Stout',
    ingredients: 'Cerveza stout, 500ml, notas a café y chocolate',
    price: 3400,
    image: 'https://images.pexels.com/photos/15991209/pexels-photo-15991209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'bebidas',
  },
  {
    id: 'b4',
    name: 'Gaseosa Cola con Hielo',
    ingredients: 'Vaso 400ml, hielo, limón opcional',
    price: 1800,
    image: 'https://images.pexels.com/photos/4113632/pexels-photo-4113632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'bebidas',
  },
];

export interface Promotion {
  id: string;
  title: string;
  description: string;
  price: number;
  oldPrice: number;
  discount: string;
  image: string;
  badge: string;
}

export const promotions: Promotion[] = [
  {
    id: 'promo1',
    title: 'Combo Burgers + Pintas',
    description: '2 hamburguesas Barrio Classic + 2 pintas de cerveza artesanal. Ideal para compartir.',
    price: 19000,
    oldPrice: 23400,
    discount: '-19%',
    image: 'https://images.pexels.com/photos/38896826/pexels-photo-38896826.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Combo Pareja',
  },
  {
    id: 'promo2',
    title: 'Noche de Pizzas',
    description: 'Pizza grande Barrio Especial + 2 pintas artesanales. Todos los martes y miércoles.',
    price: 12500,
    oldPrice: 15700,
    discount: '-20%',
    image: 'https://images.pexels.com/photos/12664774/pexels-photo-12664774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Martes y Miércoles',
  },
];
