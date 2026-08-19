import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import TicketCard from "../components/TicketCard";
import OrderSummary from "../components/OrderSummary";
import { ticketOptions } from "../data/tickets";
import { useCheckout } from "../hooks/useCheckout";
import type { SelectedTicket } from "../types";

const Tickets = () => {
  const { selectedTicket, setSelectedTicket } = useCheckout();
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(ticketOptions.map((t) => [t.id, 1]))
  );

  const handleQuantityChange = (ticketId: string, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [ticketId]: quantity }));

    if (selectedTicket?.ticketId === ticketId) {
      setSelectedTicket({ ...selectedTicket, quantity });
    }
  };

  const handleSelect = (ticketId: string) => {
    const ticket = ticketOptions.find((t) => t.id === ticketId);
    if (!ticket) return;

    const next: SelectedTicket = {
      ticketId: ticket.id,
      tier: ticket.tier,
      price: ticket.price,
      quantity: quantities[ticketId] ?? 1,
    };
    setSelectedTicket(next);
  };

  return (
    <section className="section-pad pt-32 pb-32 lg:pb-28">
      <div className="container-x">
        <SectionTitle
          eyebrow="Tickets"
          title="Choose Your Experience"
          description="Pick your ticket and get ready to make memories."
          align="center"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {ticketOptions.map((ticket, i) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                quantity={quantities[ticket.id]}
                selected={selectedTicket?.ticketId === ticket.id}
                onQuantityChange={(q) => handleQuantityChange(ticket.id, q)}
                onSelect={() => handleSelect(ticket.id)}
                index={i}
              />
            ))}
          </div>

          <OrderSummary selectedTicket={selectedTicket} />
        </div>
      </div>
    </section>
  );
};

export default Tickets;
