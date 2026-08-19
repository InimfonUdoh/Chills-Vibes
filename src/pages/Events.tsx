import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineCalendar } from "react-icons/hi";
import SectionTitle from "../components/SectionTitle";
import EventCard from "../components/EventCard";
import EventFilter, { type EventFilterValue } from "../components/EventFilter";
import EmptyState from "../components/EmptyState";
import { events } from "../data/events";

const Events = () => {
  const [filter, setFilter] = useState<EventFilterValue>("All");

  const filteredEvents = useMemo(() => {
    if (filter === "All") return events;
    return events.filter((event) => event.category === filter);
  }, [filter]);

  return (
    <section className="section-pad pt-32">
      <div className="container-x">
        <SectionTitle
          eyebrow="Upcoming Events"
          title="What's on the calendar"
          description="Parties, concerts and special nights — filter by what you're in the mood for."
        />

        <div className="mb-10">
          <EventFilter active={filter} onChange={setFilter} />
        </div>

        <AnimatePresence mode="wait">
          {filteredEvents.length > 0 ? (
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              {filteredEvents.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))}
            </motion.div>
          ) : (
            <EmptyState
              icon={<HiOutlineCalendar />}
              title="No events in this category yet"
              description="Check back soon or browse another category — we're always cooking up something new."
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Events;
