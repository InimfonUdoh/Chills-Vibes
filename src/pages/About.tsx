import { motion } from "framer-motion";
import {
  HiOutlineMusicNote,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineHeart,
  HiOutlineFire,
  HiOutlinePhotograph,
} from "react-icons/hi";
import SectionTitle from "../components/SectionTitle";

const vibePillars = [
  { icon: HiOutlineFire, label: "Fun" },
  { icon: HiOutlineMusicNote, label: "Music" },
  { icon: HiOutlinePhotograph, label: "Fashion" },
  { icon: HiOutlineUserGroup, label: "People" },
  { icon: HiOutlineSparkles, label: "Energy" },
  { icon: HiOutlineHeart, label: "Memories" },
];

const stats = [
  { value: "500+", label: "Party People" },
  { value: "10+", label: "Events" },
  { value: "100%", label: "Good Vibes" },
];

const About = () => {
  return (
    <div className="pt-32">
      {/* WHO WE ARE */}
      <section className="section-pad">
        <div className="container-x">
          <SectionTitle
            eyebrow="Who We Are"
            title="A party brand built for unforgettable nights"
            description="Chills & Vibes is a party and event brand focused on creating memorable experiences. From intimate rooftop sessions to full-scale block parties, we bring people together around music, fashion and good energy."
          />
        </div>
      </section>

      {/* MISSION */}
      <section className="section-pad bg-ink-900/60">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-5">Our Mission</span>
            <h2 className="max-w-lg text-3xl font-bold leading-tight text-bone sm:text-4xl">
              Creating unforgettable social experiences
            </h2>
            <p className="mt-5 max-w-md text-mute">
              We exist to bring people together through music, entertainment, fashion and
              community — turning ordinary nights into stories worth retelling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="glass glass-hover flex flex-col items-center gap-2 rounded-3xl p-6 text-center sm:p-8"
              >
                <span className="text-3xl font-extrabold text-gradient-gold sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wide text-mute sm:text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR VIBE */}
      <section className="section-pad">
        <div className="container-x">
          <SectionTitle eyebrow="Our Vibe" title="What we're all about" align="center" />

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {vibePillars.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass glass-hover flex flex-col items-center gap-3 rounded-2xl p-6 text-center"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/10 text-gold">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-semibold text-bone">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
