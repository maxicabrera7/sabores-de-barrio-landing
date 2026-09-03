import { promotions } from '@/data/menu';
import { Tag, Clock } from 'lucide-react';
import type { OrderState } from '@/utils/order';

function formatPrice(price: number): string {
  return `$${price.toLocaleString('es-AR')}`;
}

interface Props {
  onOrder: (order: OrderState) => void;
}

export default function Promotions({ onOrder }: Props) {
  return (
    <section id="promociones" className="relative overflow-hidden py-24 sm:py-32">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-400">Ofertas</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-amber-50 sm:text-5xl">
            Promociones de la Semana
          </h2>
          <p className="mt-4 text-amber-100/60">
            Combos pensados para compartir. Válidos según día indicado, en local y para llevar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {promotions.map((promo) => (
            <article
              key={promo.id}
              className="group relative overflow-hidden rounded-3xl border border-wood-700/40 bg-gradient-to-br from-ink-800/80 to-ink-900/80 transition-all duration-300 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
                <img
                  src={promo.image}
                  alt={promo.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />

                {/* Discount badge */}
                <div className="absolute right-4 top-4 flex flex-col items-center">
                  <span className="flex items-center gap-1 rounded-xl bg-gradient-to-br from-ember-500 to-amber-600 px-4 py-2 text-lg font-extrabold text-white shadow-xl">
                    <Tag className="h-4 w-4" />
                    {promo.discount}
                  </span>
                </div>

                {/* Badge label */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-950/70 px-3 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-sm">
                    <Clock className="h-3.5 w-3.5" />
                    {promo.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold text-amber-50 sm:text-3xl">{promo.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-amber-100/70">{promo.description}</p>

                <div className="mt-6 flex items-end justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl font-bold text-amber-400">{formatPrice(promo.price)}</span>
                    <span className="text-lg text-amber-100/40 line-through">{formatPrice(promo.oldPrice)}</span>
                  </div>
                  <button
                    onClick={() =>
                      onOrder({
                        id: promo.id,
                        name: promo.title,
                        description: promo.description,
                        price: promo.price,
                        image: promo.image,
                      })
                    }
                    className="rounded-full bg-gradient-to-r from-amber-400 to-ember-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-all hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
                  >
                    Aprovechar
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
