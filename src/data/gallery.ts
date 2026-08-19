import type { GalleryImage } from "../types";
import chills from "../assets/images/chills.jpg";
import chill from "../assets/images/chill.jpg";
import chillss from "../assets/images/chillss.jpg";
import chillsss from "../assets/images/chillsss.jpg";

// TODO(backend): Replace with GET /api/gallery — swap the placeholder seeds
// for real event photography once available.
export const galleryImages: GalleryImage[] = [
  { id: "g1", src: chill, caption: "Jersey Party 2025 — dance floor", span: "tall" },
  { id: "g2", src: chills, caption: "Afrobeats Block Party — DJ set", span: "wide" },
  { id: "g3", src: chillss, caption: "White & Gold Gala — gold carpet" },
  { id: "g4", src: chillsss, caption: "Sundown Sessions — rooftop crowd", span: "tall" },
  // { id: "g5", src: "https://picsum.photos/seed/cv-gallery-5/900/900", caption: "Jersey Party 2025 — crew shot" },
  // { id: "g6", src: "https://picsum.photos/seed/cv-gallery-6/1000/700", caption: "Live band — Gala night", span: "wide" },
  // { id: "g7", src: "https://picsum.photos/seed/cv-gallery-7/900/900", caption: "VIP lounge — bottle service" },
  // { id: "g8", src: "https://picsum.photos/seed/cv-gallery-8/900/1100", caption: "Block Party — open floor", span: "tall" },
];
