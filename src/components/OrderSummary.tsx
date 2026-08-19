import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineTicket, HiChevronUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import type { SelectedTicket } from "../types";
import { formatNaira } from "../utils/format";
import Button from "./Button";

interface OrderSummaryProps {
  selectedTicket: SelectedTicket | null;
}

const SummaryContent = ({ selectedTicket }: OrderSummaryProps) => {
  const navigate = useNavigate();
  const total = selectedTicket ? selectedTicket.price * selectedTicket.quantity : 0;

  return (
    <>
      <h3 className="text-lg font-bold text-bone">Order Summary</h3>

      {!selectedTicket ? (
        <p className="mt-4 text-sm text-mute">
          Select a ticket tier to see your order summary here.
        </p>
      ) : (
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-bone/85">
              {selectedTicket.tier} × {selectedTicket.quantity}
            </span>
            <span className="text-mute">{formatNaira(selectedTicket.price)} each</span>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-sm font-medium text-mute">Total</span>
            <span className="text-2xl font-extrabold text-gradient-gold">{formatNaira(total)}</span>
          </div>
        </div>
      )}

      <Button
        variant="gold"
        fullWidth
        disabled={!selectedTicket}
        onClick={() => navigate("/checkout")}
        className="mt-6"
      >
        Proceed to Checkout
      </Button>
    </>
  );
};

const OrderSummary = ({ selectedTicket }: OrderSummaryProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const total = selectedTicket ? selectedTicket.price * selectedTicket.quantity : 0;

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <aside className="glass sticky top-28 hidden rounded-3xl p-7 lg:block">
        <SummaryContent selectedTicket={selectedTicket} />
      </aside>

      {/* Mobile: floating bottom bar that expands into a sheet */}
      <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="glass rounded-t-3xl border-b-0 p-6 pb-4"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="mx-auto mb-4 block h-1.5 w-12 rounded-full bg-white/20"
                aria-label="Collapse order summary"
              />
              <SummaryContent selectedTicket={selectedTicket} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="border-t border-white/10 bg-ink/95 px-5 py-3.5 backdrop-blur-xl">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex w-full items-center justify-between"
            aria-expanded={mobileOpen}
          >
            <span className="flex items-center gap-2 text-sm font-medium text-bone">
              <HiOutlineTicket className="text-gold" />
              {selectedTicket ? `${selectedTicket.tier} × ${selectedTicket.quantity}` : "No ticket selected"}
            </span>
            <span className="flex items-center gap-2">
              <span className="text-base font-bold text-gold-light">{formatNaira(total)}</span>
              <motion.span animate={{ rotate: mobileOpen ? 180 : 0 }}>
                <HiChevronUp className="text-mute" />
              </motion.span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
