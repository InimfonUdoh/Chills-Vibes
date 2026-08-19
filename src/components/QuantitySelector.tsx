import { AnimatePresence, motion } from "framer-motion";
import { HiMinus, HiPlus } from "react-icons/hi";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector = ({ quantity, onChange, min = 1, max = 20 }: QuantitySelectorProps) => {
  const decrease = () => onChange(Math.max(min, quantity - 1));
  const increase = () => onChange(Math.min(max, quantity + 1));

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1">
      <button
        type="button"
        onClick={decrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="grid h-9 w-9 place-items-center rounded-full text-bone transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <HiMinus size={16} />
      </button>

      <div className="relative w-10 overflow-hidden text-center">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={quantity}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="block text-sm font-bold text-bone"
          >
            {quantity}
          </motion.span>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={increase}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className="grid h-9 w-9 place-items-center rounded-full text-bone transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <HiPlus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;
