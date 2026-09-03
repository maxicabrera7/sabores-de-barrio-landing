import { ChevronDown, UtensilsCrossed } from 'lucide-react';
import { scrollToReservation } from '@/utils/order';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4315148/pexels-photo-4315148.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Hamburguesas gourmet en tabla de madera"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/70 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-transparent to-ink-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 pt-24 pb-16 text-center sm:px-8">
        <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300 backdrop-blur-sm">
          <UtensilsCrossed className="h-4 w-4" />
          Bar & Restaurante Artesanal
        </div>

        <h1 className="animate-fade-in-up font-display text-4xl font-bold leading-tight text-amber-50 text-balance sm:text-6xl lg:text-7xl">
          Auténtico Sabor Casero y{' '}
          <span className="bg-gradient-to-r from-amber-400 to-ember-500 bg-clip-text text-transparent">
            Cerveza Artesanal
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up text-base leading-relaxed text-amber-100/70 text-balance sm:text-lg" style={{ animationDelay: '0.15s' }}>
          En el corazón de La Rioja, cocinamos con fuego lento y pasión. Hamburguesas
          de carne molida a la vista, pizzas al horno de leña, lomitos completos y la
          mejor selección de cervezas artesanales de la región.
        </p>

        <div className="mt-10 flex animate-fade-in-up flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: '0.3s' }}>
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-ember-500 px-8 py-4 text-base font-semibold text-ink-950 shadow-xl shadow-amber-500/30 transition-all hover:shadow-amber-500/50 hover:-translate-y-1"
          >
            Ver Menú Digital
            <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
          </a>
          <button
            onClick={scrollToReservation}
            className="inline-flex items-center gap-2 rounded-full border border-wood-500/50 bg-ink-900/50 px-8 py-4 text-base font-semibold text-amber-100 backdrop-blur-sm transition-all hover:border-amber-400/50 hover:bg-ink-800/60 hover:text-amber-300"
          >
            Reservar Mesa
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid animate-fade-in grid-cols-3 gap-4 sm:gap-8" style={{ animationDelay: '0.45s' }}>
          {[
            { value: '+15', label: 'Platos artesanales' },
            { value: '6', label: 'Cervezas de autor' },
            { value: '6', label: 'Años de barrio' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-amber-400 sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs text-amber-100/60 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-amber-400/40 p-1.5">
          <div className="h-2 w-1 rounded-full bg-amber-400/60" />
        </div>
      </div>
    </section>
  );
}
