import { Clock, MapPin, Phone, Instagram, Facebook, UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-wood-700/40 bg-ink-900">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-ember-600 text-ink-950 shadow-lg shadow-amber-500/20">
                <UtensilsCrossed className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold text-amber-50">
                Sabores <span className="text-amber-400">de Barrio</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-amber-100/50">
              Bar & restaurante artesanal en el corazón de La Rioja. Cocina casera,
              cerveza de autor y buena música.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-wood-700/50 text-amber-100/60 transition-all hover:border-amber-400/40 hover:text-amber-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-wood-700/50 text-amber-100/60 transition-all hover:border-amber-400/40 hover:text-amber-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div id="horarios">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-amber-50">
              <Clock className="h-5 w-5 text-amber-400" />
              Horarios
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-amber-100/60">Martes a Jueves</span>
                <span className="text-amber-100">20:00 - 02:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-amber-100/60">Viernes y Sábado</span>
                <span className="text-amber-100">20:00 - 02:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-amber-100/60">Domingo</span>
                <span className="text-amber-100">20:00 - 02:00</span>
              </li>
              <li className="flex justify-between pt-2 border-t border-wood-700/30">
                <span className="text-amber-100/60">Lunes</span>
                <span className="text-red-400/80">Cerrado</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div id="ubicacion">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-amber-50">
              <MapPin className="h-5 w-5 text-amber-400" />
              Ubicación
            </h3>
            <p className="mt-4 text-sm text-amber-100/60">
              Av. Pelagio B. Luna 1230
              <br />
              La Rioja Capital, Argentina
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=La+Rioja+Argentina"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-wood-700/50 bg-ink-800/50 px-4 py-2 text-sm font-medium text-amber-300 transition-all hover:border-amber-400/40 hover:bg-ink-800"
            >
              <MapPin className="h-4 w-4" />
              Ver en Google Maps
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-amber-50">
              <Phone className="h-5 w-5 text-amber-400" />
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-amber-100/60">
              <li>
                <a href="tel:+54938045551234" className="transition-colors hover:text-amber-300">
                  +54 9 3804 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:hola@saboresdebarrio.com" className="transition-colors hover:text-amber-300">
                  hola@saboresdebarrio.com
                </a>
              </li>
            </ul>

            {/* Decorative map */}
            <div className="mt-4 overflow-hidden rounded-xl border border-wood-700/40">
              <a
                href="https://www.google.com/maps/search/?api=1&query=La+Rioja+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ink-800 to-ink-950" />
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `linear-gradient(rgba(245,158,11,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.15) 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }} />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="flex h-8 w-8 animate-pulse-glow items-center justify-center rounded-full bg-amber-400 text-ink-950 shadow-lg">
                    <MapPin className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                </div>
                <span className="absolute bottom-2 left-3 text-xs font-medium text-amber-100/50">La Rioja, Argentina</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-wood-700/30 pt-8 sm:flex-row">
          <p className="text-sm text-amber-100/40">
            © {new Date().getFullYear()} Sabores de Barrio. Todos los derechos reservados.
          </p>
          <p className="text-xs text-amber-100/30">
            Hecho con fuego en La Rioja, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
