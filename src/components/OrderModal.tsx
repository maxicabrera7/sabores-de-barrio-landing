import { useEffect, useState } from 'react';
import { X, Minus, Plus, CheckCircle2, ShoppingBag } from 'lucide-react';
import type { OrderState } from '@/utils/order';

interface Props {
  order: OrderState | null;
  onClose: () => void;
}

function formatPrice(price: number): string {
  return `$${price.toLocaleString('es-AR')}`;
}

export default function OrderModal({ order, onClose }: Props) {
  const [qty, setQty] = useState(1);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (order) {
      setQty(1);
      setSuccess(false);
    }
  }, [order]);

  useEffect(() => {
    if (!order) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [order, onClose]);

  if (!order) return null;

  const total = order.price * qty;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/80 p-5 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-amber-400/30 bg-ink-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink-900/60 text-amber-100/60 transition-colors hover:bg-ink-900 hover:text-amber-100"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        {success ? (
          <div className="p-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-ember-500 text-ink-950 shadow-lg shadow-amber-500/30">
              <CheckCircle2 className="h-9 w-9" strokeWidth={2.5} />
            </div>
            <h3 className="font-display text-2xl font-bold text-amber-50">¡Pedido Confirmado!</h3>
            <p className="mt-2 text-sm text-amber-100/60">
              Tu pedido de <span className="font-semibold text-amber-300">{order.name}</span>
              {qty > 1 ? ` (x${qty})` : ''} fue enviado a la cocina. Total:{' '}
              <span className="font-semibold text-amber-300">{formatPrice(total)}</span>
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-xl border border-wood-700/50 bg-ink-900/50 px-6 py-3 text-sm font-semibold text-amber-100 transition-all hover:border-amber-400/40 hover:text-amber-300"
            >
              Seguir mirando el menú
            </button>
          </div>
        ) : (
          <>
            {/* Image header */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={order.image} alt={order.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/30 to-transparent" />
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-amber-50">{order.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-100/60">{order.description}</p>

              {/* Quantity selector */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-amber-100/80">Cantidad</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-wood-700/50 text-amber-100 transition-colors hover:border-amber-400/50 hover:text-amber-300 disabled:opacity-40"
                    disabled={qty <= 1}
                    aria-label="Disminuir"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-10 text-center font-display text-xl font-bold text-amber-50">{qty}</span>
                  <button
                    onClick={() => setQty((q) => Math.min(20, q + 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-wood-700/50 text-amber-100 transition-colors hover:border-amber-400/50 hover:text-amber-300"
                    aria-label="Aumentar"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-amber-400/20 bg-ink-900/60 px-5 py-4">
                <span className="text-sm text-amber-100/60">Total a pagar</span>
                <span className="font-display text-2xl font-bold text-amber-400">{formatPrice(total)}</span>
              </div>

              <button
                onClick={() => setSuccess(true)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-ember-500 px-6 py-4 text-base font-semibold text-ink-950 shadow-lg shadow-amber-500/20 transition-all hover:shadow-amber-500/40 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <ShoppingBag className="h-5 w-5" />
                Confirmar Pedido
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
