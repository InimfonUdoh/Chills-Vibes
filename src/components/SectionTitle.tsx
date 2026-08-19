import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionTitle = ({ eyebrow, title, description, align = "left" }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 flex flex-col gap-4 sm:mb-16 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="max-w-2xl text-3xl font-bold leading-tight text-bone sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`max-w-xl text-base text-mute sm:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
