export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: "Parties" | "Concerts" | "Special Events";
  date: string; // display string, e.g. "September 20, 2026"
  isoDate: string; // ISO date for sorting
  time: string;
  location: string;
  description: string;
  shortDescription: string;
  flyer: string;
  priceFrom: string;
  ticketsAvailable: boolean;
}

export type TicketTier = "Early Bird" | "Stand Stool" | "VIP Lounge";

export interface TicketOption {
  id: string;
  tier: TicketTier;
  description: string;
  price: number;
  perks: string[];
  highlight?: boolean;
}

// export interface GalleryImage {
//   id: string;
//   src: string;
//   caption: string;
//   span?: "tall" | "wide" | "normal";
// }

export interface SelectedTicket {
  ticketId: string;
  tier: TicketTier;
  price: number;
  quantity: number;
}

export interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
}
