import { useState, type FormEvent } from 'react';
import { User, Phone, Calendar, Users, MessageSquare, CheckCircle2, X } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  date: string;
  guests: string;
  notes: string;
}

const initial: FormData = { name: '', phone: '', date: '', guests: '', notes: '' };

export default function Reservation() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [modal, setModal] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<Record<keyof FormData, boolean>> = {};
    (Object.keys(form) as (keyof FormData)[]).forEach((key) => {
      if (!form[key].trim()) newErrors[key] = true;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const code = `#RES-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setModal(code);
    setForm(initial);
  };

  const update = (key: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: false }));
  };

  const fieldClass = (key: keyof FormData) =>
    `w-full rounded-xl border bg-ink-900/60 px-4 py-3 pl-11 text-amber-50 placeholder-amber-100/30 transition-all focus:outline-none focus:ring-2 ${
      errors[key]
        ? 'border-red-500 focus:ring-red-500/30'
        : 'border-wood-700/50 focus:border-amber-400/50 focus:ring-amber-400/20'
    }`;

  return (
    <section id="reserva" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-ember-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: info */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-400">Reservas</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-amber-50 sm:text-5xl">
              Reservá tu Mesa
            </h2>
            <p className="mt-4 max-w-md text-amber-100/60">
              Asegurá tu lugar en Sabores de Barrio. Completá el formulario y recibí
              al instante tu número de reserva para presentarte en el local.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { label: 'Horario de atención', value: 'Martes a Domingo · 20:00 a 02:00 hs' },
                { label: 'Reservas por WhatsApp', value: '+54 9 3804 555-1234' },
                { label: 'Dirección', value: 'Av. Pelagio B. Luna 1230, La Rioja' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-amber-400" />
                  <div>
                    <div className="text-xs uppercase tracking-wide text-amber-100/40">{item.label}</div>
                    <div className="text-sm font-medium text-amber-100">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-wood-700/40 bg-ink-800/60 p-6 backdrop-blur-sm sm:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-amber-100/80">Nombre completo</label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-100/40" />
                  <input
                    id="reserva-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Juan Pérez"
                    className={fieldClass('name')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-amber-100/80">Teléfono</label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-100/40" />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="3804 555-1234"
                      className={fieldClass('phone')}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-amber-100/80">Fecha</label>
                  <div className="relative">
                    <Calendar className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-100/40" />
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                      className={fieldClass('date')}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-amber-100/80">Cantidad de personas</label>
                <div className="relative">
                  <Users className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-100/40" />
                  <select
                    value={form.guests}
                    onChange={(e) => update('guests', e.target.value)}
                    className={fieldClass('guests')}
                  >
                    <option value="">Seleccionar</option>
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5">5 personas</option>
                    <option value="6">6 personas</option>
                    <option value="7+">7 o más</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-amber-100/80">Notas adicionales</label>
                <div className="relative">
                  <MessageSquare className="pointer-events-none absolute left-3.5 top-4 h-5 w-5 text-amber-100/40" />
                  <textarea
                    value={form.notes}
                    onChange={(e) => update('notes', e.target.value)}
                    placeholder="Mesa al aire libre, celebración de cumpleaños, alergias..."
                    rows={3}
                    className={`${fieldClass('notes')} resize-none pt-3`}
                  />
                </div>
              </div>

              {Object.keys(errors).length > 0 && (
                <p className="text-sm text-red-400">Por favor completá todos los campos resaltados.</p>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-ember-500 px-6 py-4 text-base font-semibold text-ink-950 shadow-lg shadow-amber-500/20 transition-all hover:shadow-amber-500/40 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Confirmar Reserva
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success modal */}
      {modal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/80 p-5 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md rounded-3xl border border-amber-400/30 bg-ink-800 p-8 text-center shadow-2xl">
            <button
              onClick={() => setModal(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-amber-100/50 transition-colors hover:bg-wood-700/30 hover:text-amber-100"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-ember-500 text-ink-950 shadow-lg shadow-amber-500/30">
              <CheckCircle2 className="h-9 w-9" strokeWidth={2.5} />
            </div>

            <h3 className="font-display text-2xl font-bold text-amber-50">¡Reserva Confirmada!</h3>
            <p className="mt-2 text-sm text-amber-100/60">
              Guardá tu número de reserva y presentalo en el local el día de tu visita.
            </p>

            <div className="mt-6 rounded-2xl border border-amber-400/20 bg-ink-900/60 py-5">
              <div className="text-xs uppercase tracking-widest text-amber-100/40">Número de reserva</div>
              <div className="mt-1 font-display text-3xl font-bold text-amber-400">{modal}</div>
            </div>

            <button
              onClick={() => setModal(null)}
              className="mt-6 w-full rounded-xl border border-wood-700/50 bg-ink-900/50 px-6 py-3 text-sm font-semibold text-amber-100 transition-all hover:border-amber-400/40 hover:text-amber-300"
            >
              Listo
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
