import { useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineCheckCircle, HiOutlinePaperAirplane } from "react-icons/hi";
import Button from "./Button";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const [values, setValues] = useState<FormValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!emailPattern.test(values.email)) nextErrors.email = "Enter a valid email address.";
    if (!values.message.trim()) nextErrors.message = "Tell us a little about your message.";
    else if (values.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // TODO(backend): POST this payload to /api/contact once an email/API
    // service is connected. For now we simulate a successful submission.
    setSubmitted(true);
    setValues({ name: "", email: "", message: "" });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass flex flex-col items-center gap-4 rounded-3xl p-10 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-gold/10 text-gold">
          <HiOutlineCheckCircle size={30} />
        </span>
        <h3 className="text-xl font-bold text-bone">Thanks! Your message has been received.</h3>
        <p className="max-w-sm text-sm text-mute">
          We'll get back to you soon. In the meantime, follow us for the latest party updates.
        </p>
        <Button variant="ghost" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="glass flex flex-col gap-5 rounded-3xl p-7 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-bone/85">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-bone placeholder:text-mute/70 outline-none transition-colors focus:border-gold/50"
          placeholder="Your full name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              id="name-error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1.5 text-xs text-red-400"
            >
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-bone/85">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-bone placeholder:text-mute/70 outline-none transition-colors focus:border-gold/50"
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              id="email-error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1.5 text-xs text-red-400"
            >
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-bone/85">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-bone placeholder:text-mute/70 outline-none transition-colors focus:border-gold/50"
          placeholder="Tell us what's on your mind..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              id="message-error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1.5 text-xs text-red-400"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <Button type="submit" variant="gold" fullWidth>
        Send Message <HiOutlinePaperAirplane className="rotate-90 text-sm" />
      </Button>
    </form>
  );
};

export default ContactForm;
