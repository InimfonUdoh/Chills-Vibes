import type { TicketOption } from "../types";

// TODO(backend): Replace with GET /api/events/:eventId/tickets so pricing and
// availability come from the server. Keep the TicketOption shape unchanged.
export const ticketOptions: TicketOption[] = [
  {
    id: "ticket-early-bird",
    tier: "Early Bird",
    description: "Admit One Person",
    price: 4000,
    perks: ["Entry for 1", "Access to the Hub",],
  },
  {
    id: "ticket-stand-stool",
    tier: "Standing Table",
    description: "Admit 5 People",
    price: 70000,
    perks: ["Entry for 5", "Reserved standing table",],
    highlight: true,
  },
  {
    id: "ticket-vip-lounge",
    tier: "VIP Lounge",
    description: "Admit 4 People",
    price: 200000,
    perks: ["Entry for 4", "Private VIP lounge table",],
  },
];

export const getTicketById = (id: string) =>
  ticketOptions.find((ticket) => ticket.id === id);
