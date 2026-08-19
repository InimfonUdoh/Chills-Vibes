import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import type { GalleryImage } from "../types";

interface LightboxProps {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox = ({ images, activeIndex, onClose, onNavigate }: LightboxProps) => {
  const isOpen = activeIndex !== null;
  const image = isOpen ? images[activeIndex] : null;

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-bone transition-colors hover:border-gold/50 hover:text-gold"
          >
            <HiOutlineX size={22} />
          </button>

          <button
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/5 text-bone transition-colors hover:border-gold/50 hover:text-gold sm:left-6"
          >
            <HiChevronLeft size={24} />
          </button>

          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="mx-16 flex max-h-[85vh] max-w-3xl flex-col items-center gap-4"
          >
            <img
              src={image.src}
              alt={image.caption}
              className="max-h-[75vh] w-auto rounded-2xl border border-white/10 object-contain shadow-glass"
            />
            <p className="text-sm text-mute">{image.caption}</p>
          </motion.div>

          <button
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/5 text-bone transition-colors hover:border-gold/50 hover:text-gold sm:right-6"
          >
            <HiChevronRight size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
