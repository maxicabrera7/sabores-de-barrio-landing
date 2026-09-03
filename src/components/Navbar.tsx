import { useEffect, useState } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { scrollToReservation } from '@/utils/order';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#menu', label: 'Menú' },
  { href: '#promociones', label: 'Promociones' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#ubicacion', label: 'Ubicación' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-900/90 backdrop-blur-xl border-b border-wood-700/40 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="group flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-ember-600 text-ink-950 shadow-lg shadow-amber-500/30 transition-transform group-hover:scale-110">
            <UtensilsCrossed className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-amber-50">
            Sabores <span className="text-amber-400">de Barrio</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-amber-100/80 transition-colors hover:bg-wood-700/30 hover:text-amber-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={scrollToReservation}
            className="hidden rounded-full bg-gradient-to-r from-amber-400 to-ember-500 px-6 py-2.5 text-sm font-semibold text-ink-950 shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50 hover:-translate-y-0.5 sm:inline-block"
          >
            Reservar Mesa
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-amber-100 transition-colors hover:bg-wood-700/30 lg:hidden"
            aria-label="Menú"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-auto mt-3 flex max-w-7xl flex-col gap-1 px-5 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-amber-100/90 transition-colors hover:bg-wood-700/30 hover:text-amber-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setOpen(false);
                scrollToReservation();
              }}
              className="mt-2 block w-full rounded-full bg-gradient-to-r from-amber-400 to-ember-500 px-6 py-3 text-center text-sm font-semibold text-ink-950"
            >
              Reservar Mesa
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
