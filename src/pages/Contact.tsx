import { motion } from "framer-motion";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import SocialButton from "../components/SocialButton";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="section-pad pt-32">
      <div className="container-x">
        <SectionTitle
          eyebrow="Contact"
          title="Let's talk"
          description="Got a question, partnership idea, or just want to say hi? Reach us directly or drop a message below."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass glass-hover flex flex-col gap-4 rounded-3xl p-7 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/10 text-gold">
                  <FaWhatsapp size={20} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-mute">WhatsApp</p>
                  <p className="text-base font-semibold text-bone">+234 704 249 1149</p>
                </div>
              </div>
              <SocialButton
                href="https://wa.me/2347042491149"
                icon={<FaWhatsapp />}
                label="Chat on WhatsApp"
                variant="gold"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass glass-hover flex flex-col gap-4 rounded-3xl p-7 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-violet/10 text-violet-bright">
                  <FaTiktok size={20} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-mute">TikTok</p>
                  <p className="text-base font-semibold text-bone">@chillandvibesofficial</p>
                </div>
              </div>
              <SocialButton
                href="https://www.tiktok.com/@chillandvibesofficial?_r=1&_t=ZS-98WPwjDDeF8"
                icon={<FaTiktok />}
                label="Follow on TikTok"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
