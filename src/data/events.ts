import type { EventItem } from "../types";
import jerseyFlyer from "../assets/images/jersey-hero.jpg";

// TODO(backend): Replace this static array with a fetch to your events API,
// e.g. GET /api/events — keep the EventItem shape stable so components don't change.
export const events: EventItem[] = [
  {
    id: "evt-001",
    slug: "jersey-party",
    title: "Jersey Party",
    category: "Parties",
    date: "September 20",
    isoDate: "2026-09-20",
    time: "7:00 PM",
    location: "Independence Hall, Abak",
    shortDescription:
      "Rep your favourite jersey and dance the night away — music, fashion and pure energy.",
    description:
      "Get ready for an unforgettable night of music, fashion, energy and good vibes. Jersey Party brings together people who love great music, great company and unforgettable moments. Pull up in your favourite jersey — football, basketball, throwback or streetwear — and let's turn the hall into a stadium of vibes.",
    flyer: jerseyFlyer,
    priceFrom: "₦4,000",
    ticketsAvailable: true,
  },
  // {
  //   id: "evt-002",
  //   slug: "afrobeats-block-party",
  //   title: "Afrobeats Block Party",
  //   category: "Concerts",
  //   date: "October 4",
  //   isoDate: "2026-10-04",
  //   time: "6:00 PM",
  //   location: "The Hideout, Abak",
  //   shortDescription:
  //     "An open-air Afrobeats takeover with live sets from the city's favourite DJs.",
  //   description:
  //     "The streets shut down and the speakers take over. Afrobeats Block Party is a full evening of live DJ sets, food trucks and an open dance floor under the stars — bring your crew and your energy.",
  //   flyer:
  //     "https://picsum.photos/seed/afrobeats-block/1000/1250",
  //   priceFrom: "₦5,000",
  //   ticketsAvailable: true,
  // },
  // {
  //   id: "evt-003",
  //   slug: "white-and-gold-gala",
  //   title: "White & Gold Gala",
  //   category: "Special Events",
  //   date: "November 15",
  //   isoDate: "2026-11-15",
  //   time: "8:00 PM",
  //   location: "Pato Gold Lounge, Uyo",
  //   shortDescription:
  //     "A dress-to-impress evening of live music, champagne toasts and gold-carpet moments.",
  //   description:
  //     "Chills & Vibes goes upscale for one night only. Dress code: white and gold. Expect a live band, curated cocktails and a gold carpet built for your best photos.",
  //   flyer: "https://picsum.photos/seed/white-gold-gala/1000/1250",
  //   priceFrom: "₦15,000",
  //   ticketsAvailable: true,
  // },
  // {
  //   id: "evt-004",
  //   slug: "sunday-sundown-sessions",
  //   title: "Sunday Sundown Sessions",
  //   category: "Parties",
  //   date: "December 6",
  //   isoDate: "2026-12-06",
  //   time: "4:00 PM",
  //   location: "Rooftop 88, Abak",
  //   shortDescription:
  //     "A laid-back rooftop sundowner with soulful sets as the sun goes down.",
  //   description:
  //     "Wind down the weekend right. Sunday Sundown Sessions is a chilled rooftop gathering with soulful DJ sets, small plates and golden-hour views — the softer side of Chills & Vibes.",
  //   flyer: "https://picsum.photos/seed/sundown-sessions/1000/1250",
  //   priceFrom: "₦3,500",
  //   ticketsAvailable: false,
  // },
];

export const getEventBySlug = (slug: string) =>
  events.find((event) => event.slug === slug);

export const featuredEvent = events[0];
