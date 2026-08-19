import { motion } from "framer-motion";

export type EventFilterValue = "All" | "Parties" | "Concerts" | "Special Events";

interface EventFilterProps {
  active: EventFilterValue;
  onChange: (value: EventFilterValue) => void;
}

const filters: EventFilterValue[] = ["All", "Parties", "Concerts", "Special Events"];

const EventFilter = ({ active, onChange }: EventFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter events by category">
      {filters.map((filter) => {
        const isActive = active === filter;
        return (
          <button
            key={filter}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
              isActive ? "text-ink" : "text-bone/80 hover:text-bone"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            {!isActive && <span className="absolute inset-0 rounded-full border border-white/15 bg-white/5" />}
            <span className="relative">{filter}</span>
          </button>
        );
      })}
    </div>
  );
};

export default EventFilter;
