import { useState } from 'react';
import { categories, menuItems, type Category } from '@/data/menu';
import { ShoppingBag } from 'lucide-react';
import type { OrderState } from '@/utils/order';

function formatPrice(price: number): string {
  return `$${price.toLocaleString('es-AR')}`;
}

interface Props {
  onOrder: (order: OrderState) => void;
}

export default function MenuSection({ onOrder }: Props) {
  const [active, setActive] = useState<Category>('hamburguesas');
  const filtered = menuItems.filter((item) => item.category === active);

  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-400">Nuestra Carta</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-amber-50 sm:text-5xl">
            Menú Artesanal
          </h2>
          <p className="mt-4 text-amber-100/60">
            Cada plato se prepara al momento con ingredientes frescos de productores locales.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`group flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base ${
                active === cat.id
                  ? 'bg-gradient-to-r from-amber-400 to-ember-500 text-ink-950 shadow-lg shadow-amber-500/30'
                  : 'border border-wood-700/50 bg-ink-800/50 text-amber-100/70 hover:border-amber-400/40 hover:text-amber-300'
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item, idx) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-wood-700/40 bg-ink-800/60 transition-all duration-300 hover:border-amber-400/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
                {item.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-ink-950 shadow-lg">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-amber-50">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-amber-100/60 line-clamp-3 min-h-[60px]">
                  {item.ingredients}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-amber-400">
                    {formatPrice(item.price)}
                  </span>
                  <button
                    onClick={() =>
                      onOrder({
                        id: item.id,
                        name: item.name,
                        description: item.ingredients,
                        price: item.price,
                        image: item.image,
                      })
                    }
                    className="flex items-center gap-2 rounded-full bg-ember-500/90 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember-500 hover:shadow-lg hover:shadow-ember-500/30 active:scale-95"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Pedir
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
