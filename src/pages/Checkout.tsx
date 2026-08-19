import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineTicket } from "react-icons/hi";
import SectionTitle from "../components/SectionTitle";
import CheckoutForm from "../components/CheckoutForm";
import SuccessScreen from "../components/SuccessScreen";
import EmptyState from "../components/EmptyState";
import Button from "../components/Button";
import { useCheckout } from "../hooks/useCheckout";
import { generatePaymentReference } from "../utils/format";
import type { CustomerInfo } from "../types";

const Checkout = () => {
  const navigate = useNavigate();
  const { selectedTicket, event, customer, setCustomer, paymentReference, setPaymentReference } =
    useCheckout();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (values: CustomerInfo) => {
    setCustomer(values);
    setSubmitting(true);

    // TODO(backend): Replace this simulated delay with a real Paystack
    // checkout call. On success, store the returned reference instead of
    // generating one locally, and verify it server-side before issuing a ticket.
    window.setTimeout(() => {
      setPaymentReference(generatePaymentReference());
      setSubmitting(false);
    }, 2200);
  };

  if (!selectedTicket) {
    return (
      <div className="section-pad pt-32">
        <div className="container-x">
          <EmptyState
            icon={<HiOutlineTicket />}
            title="No ticket selected"
            description="Choose a ticket tier first so we know what you're checking out for."
            action={
              <Button variant="gold" onClick={() => navigate("/tickets")}>
                Choose a Ticket
              </Button>
            }
          />
        </div>
      </div>
    );
  }

  if (paymentReference) {
    return (
      <div className="section-pad pt-32">
        <div className="container-x">
          <SuccessScreen
            customer={customer}
            ticket={selectedTicket}
            event={event}
            reference={paymentReference}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="section-pad pt-32">
      <div className="container-x">
        <SectionTitle eyebrow="Checkout" title="Almost there" description="Enter your details to secure your spot." />
        <CheckoutForm ticket={selectedTicket} event={event} onSubmit={handleSubmit} submitting={submitting} />
      </div>
    </div>
  );
};

export default Checkout;
