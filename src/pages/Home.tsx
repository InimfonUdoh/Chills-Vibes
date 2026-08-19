import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineTicket,
  HiOutlineSparkles,
  HiOutlineArrowRight,
} from "react-icons/hi";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import EventCard from "../components/EventCard";
import Gallery from "../components/Gallery";
import Button from "../components/Button";
import { events, featuredEvent } from "../data/events";
import { galleryImages } from "../data/gallery";

const infoCards = [
  { icon: HiOutlineCalendar, label: "Event Date", value: featuredEvent.date },
  { icon: HiOutlineLocationMarker, label: "Location", value: featuredEvent.location },
  {
    icon: HiOutlineTicket,
    label: "Ticket Availability",
    value: featuredEvent.ticketsAvailable ? "Selling Fast" : "Sold Out",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero />

      {/* EVENT INFORMATION */}
      <section className="section-pad">
        <div className="container-x">
          <SectionTitle
            eyebrow="The Next One"
            title="Jersey Party is almost here"
            description="Get ready for an unforgettable night of music, fashion, energy and good vibes. Jersey Party brings together people who love great music, great company and unforgettable moments."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {infoCards.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass glass-hover flex items-center gap-4 rounded-2xl p-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-mute">{label}</p>
                  <p className="text-base font-semibold text-bone">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <Link to="/tickets" className="btn-gold">
              Get Tickets <HiOutlineTicket />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-pad bg-ink-900/60">
        <div className="container-x">
          <SectionTitle
            eyebrow="The Vibe"
            title="Moments from past nights"
            description="COMING SOON"
          />
          {/* <Gallery images={galleryImages} /> */}
        </div>
      </section>

      {/* UPCOMING EVENTS PREVIEW */}
      <section className="section-pad">
        <div className="container-x">
          <SectionTitle
            eyebrow="What's Coming"
            title="Upcoming events"
            description="From block parties to gold-carpet galas — there's always something on the calendar."
          />

          <div className="flex flex-col gap-6">
            {events.slice(0, 3).map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link to="/events" className="btn-ghost">
              View All Events <HiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-pad">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-violet-deep/30 via-ink-800 to-ink-900 p-10 text-center sm:p-16"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-violet/25 blur-[100px]" />
            <span className="eyebrow mx-auto mb-5 w-fit">
              <HiOutlineSparkles /> Your Party Hub
            </span>
            <h2 className="mx-auto max-w-xl text-3xl font-bold text-bone sm:text-4xl">
              Ready to make some memories?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-mute">
              Grab your ticket now before Jersey Party sells out.
            </p>
            <div className="mt-8">
              <Button variant="gold" onClick={() => navigate("/tickets")}>
                Get Your Ticket <HiOutlineTicket />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
