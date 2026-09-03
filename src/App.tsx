import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import Promotions from '@/components/Promotions';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import type { OrderState } from '@/utils/order';

function App() {
  const [order, setOrder] = useState<OrderState | null>(null);

  return (
    <div className="min-h-screen bg-ink-950 text-amber-50">
      <Navbar />
      <main>
        <Hero />
        <MenuSection onOrder={setOrder} />
        <Promotions onOrder={setOrder} />
        <Reservation />
      </main>
      <Footer />
      <OrderModal order={order} onClose={() => setOrder(null)} />
    </div>
  );
}

export default App;
