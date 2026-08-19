import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SocialButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  variant?: "gold" | "ghost";
}

const SocialButton = ({ href, icon, label, variant = "ghost" }: SocialButtonProps) => {
  const base =
    variant === "gold"
      ? "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-ink shadow-gold"
      : "border border-white/20 bg-white/5 text-bone hover:border-gold/50";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide backdrop-blur-md transition-colors duration-300 ${base}`}
      aria-label={label}
    >
      <span className="text-lg">{icon}</span>
      {label}
    </motion.a>
  );
};

export default SocialButton;
