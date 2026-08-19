import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineZoomIn } from "react-icons/hi";
import type { GalleryImage } from "../types";
import Lightbox from "./Lightbox";

interface GalleryProps {
  images: GalleryImage[];
}

const spanClass: Record<NonNullable<GalleryImage["span"]>, string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

const Gallery = ({ images }: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-5">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
            className={`group relative aspect-square overflow-hidden rounded-2xl border border-white/10 sm:aspect-auto ${
              spanClass[image.span ?? "normal"]
            }`}
            aria-label={`Open image: ${image.caption}`}
          >
            <img
              src={image.src}
              alt={image.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="p-4 text-xs font-medium text-bone">{image.caption}</p>
            </div>
            <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ink/60 text-bone opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
              <HiOutlineZoomIn size={18} />
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={images}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
};

export default Gallery;
