import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}

const EmptyState = ({ icon, title, description, action }: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass mx-auto flex max-w-md flex-col items-center gap-4 rounded-3xl p-10 text-center"
    >
      <span className="grid h-14 w-14 place-items-center rounded-full bg-white/5 text-3xl text-gold">
        {icon}
      </span>
      <h3 className="text-lg font-bold text-bone">{title}</h3>
      <p className="text-sm text-mute">{description}</p>
      {action}
    </motion.div>
  );
};

export default EmptyState;
