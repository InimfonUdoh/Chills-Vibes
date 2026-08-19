import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { CustomerInfo, EventItem, SelectedTicket } from "../types";
import { featuredEvent } from "../data/events";

interface CheckoutState {
  selectedTicket: SelectedTicket | null;
  event: EventItem;
  customer: CustomerInfo;
  paymentReference: string | null;
  setSelectedTicket: (ticket: SelectedTicket | null) => void;
  setCustomer: (customer: CustomerInfo) => void;
  setPaymentReference: (ref: string | null) => void;
  reset: () => void;
}

const CheckoutContext = createContext<CheckoutState | undefined>(undefined);

const emptyCustomer: CustomerInfo = { fullName: "", email: "", phone: "" };

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTicket, setSelectedTicket] = useState<SelectedTicket | null>(null);
  const [customer, setCustomer] = useState<CustomerInfo>(emptyCustomer);
  const [paymentReference, setPaymentReference] = useState<string | null>(null);

  const reset = () => {
    setSelectedTicket(null);
    setCustomer(emptyCustomer);
    setPaymentReference(null);
  };

  const value = useMemo(
    () => ({
      selectedTicket,
      event: featuredEvent,
      customer,
      paymentReference,
      setSelectedTicket,
      setCustomer,
      setPaymentReference,
      reset,
    }),
    [selectedTicket, customer, paymentReference]
  );

  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
};

export const useCheckout = (): CheckoutState => {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error("useCheckout must be used within a CheckoutProvider");
  return ctx;
};
