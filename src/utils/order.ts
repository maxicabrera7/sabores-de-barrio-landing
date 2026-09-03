export interface OrderState {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export function scrollToReservation() {
  document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    const el = document.getElementById('reserva-name');
    if (el instanceof HTMLInputElement) el.focus();
  }, 700);
}
