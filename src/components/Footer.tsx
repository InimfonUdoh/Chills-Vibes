import { Link } from "react-router-dom";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Tickets", to: "/tickets" },
  { label: "About", to: "/about" },
  { label: "Upcoming Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-ink-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="container-x grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <img src={logo} alt="Chills & Vibes" className="h-10 w-auto" />
          <p className="max-w-xs text-sm text-mute">
            Your Party Hub📢🏁
          </p>
          <p className="max-w-xs text-sm text-mute">
            WHERE EVERY NIGHT IS AN EXPERIENCE.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-light">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-mute transition-colors hover:text-bone">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-light">
            Social Media
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="https://www.tiktok.com/@chillandvibesofficial?_r=1&_t=ZS-98WPwjDDeF8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-bone"
              >
                <FaTiktok /> TikTok
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/2347042491149"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-bone"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-light">
            Get In Touch
          </h4>
          <p className="text-sm text-mute">Independence Hall, Abak</p>
          <p className="mt-2 text-sm text-mute">+234 704 249 1149</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-x text-center text-xs text-mute">
          © 2026 Chills &amp; Vibes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
