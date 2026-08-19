import { motion } from "framer-motion";
import { HiOutlineCheckCircle } from "react-icons/hi";
import type { TicketOption } from "../types";
import { formatNaira } from "../utils/format";
import QuantitySelector from "./QuantitySelector";
import Button from "./Button";

interface TicketCardProps {
  ticket: TicketOption;
  quantity: number;
  selected: boolean;
  onQuantityChange: (quantity: number) => void;
  onSelect: () => void;
  index?: number;
}

const TicketCard = ({ ticket, quantity, selected, onQuantityChange, onSelect, index = 0 }: TicketCardProps) => {
  const subtotal = ticket.price * quantity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-300 ${
        selected
          ? "border-gold/60 bg-gold/[0.06] shadow-gold"
          : ticket.highlight
          ? "border-violet/40 bg-violet/[0.05] shadow-violet"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      {ticket.highlight && (
        <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-violet-deep to-violet-bright px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          Most Popular
        </div>
      )}

      <div className="flex flex-1 flex-col gap-6 p-7 sm:p-8">
        <div>
          <h3 className="text-2xl font-bold text-bone">{ticket.tier}</h3>
          <p className="mt-1 text-sm text-mute">{ticket.description}</p>
        </div>

        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-gradient-gold">{formatNaira(ticket.price)}</span>
          <span className="text-sm text-mute">/ ticket</span>
        </div>

        <ul className="flex flex-col gap-2.5">
          {ticket.perks.map((perk) => (
            <li key={perk} className="flex items-center gap-2.5 text-sm text-bone/85">
              <HiOutlineCheckCircle className="shrink-0 text-gold" />
              {perk}
            </li>
          ))}
        </ul>

        {/* Perforated divider evoking a real ticket stub */}
        <div className="relative -mx-7 flex items-center sm:-mx-8">
          <div className="h-3 w-3 shrink-0 -translate-x-1/2 rounded-full bg-ink-900" />
          <div className="ticket-perf h-px flex-1" />
          <div className="h-3 w-3 shrink-0 translate-x-1/2 rounded-full bg-ink-900" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-mute">Quantity</p>
            <QuantitySelector quantity={quantity} onChange={onQuantityChange} />
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-wide text-mute">Subtotal</p>
            <p className="text-lg font-bold text-bone">{formatNaira(subtotal)}</p>
          </div>
        </div>

        <Button variant={selected ? "gold" : "ghost"} onClick={onSelect} fullWidth>
          {selected ? "Selected" : "Buy Ticket"}
        </Button>
      </div>
    </motion.div>
  );
};

export default TicketCard;
