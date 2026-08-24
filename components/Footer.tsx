import Link from "next/link";
import { contactLinks } from "@/constants";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-bone/10 bg-ink text-bone">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-12 py-16 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-extrabold uppercase leading-none tracking-tight">
              Tirupati Precast
            </p>
            <p className="label-mono mt-1">EST. 2014 — BENGALURU</p>
            <p className="mt-6 max-w-xs font-sans text-sm leading-relaxed text-bone/70">
              Factory-cast compound walls and structural panels, poured at our
              Yelahanka plant and erected across Karnataka.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="label-mono">Index</p>
            <ul className="mt-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-safety"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label-mono">Contact</p>
            <address className="mt-4 space-y-2 font-sans text-sm not-italic leading-relaxed text-bone/70">
              <p>
                Sonnenahali Village, Bytha Post, Yelahanka to Rajankhunte
                Madhure Temple Road, Bangalore North, Karnataka-560089
              </p>
              <p>
                <a
                  href="tel:+918884088878"
                  className="transition-colors hover:text-safety"
                >
                  +91 88840 88878
                </a>
              </p>
              <p className="break-all">
                <a
                  href="mailto:tirupatiprecast27@gmail.com"
                  className="transition-colors hover:text-safety"
                >
                  tirupatiprecast27@gmail.com
                </a>
              </p>
              <p>Mon–Sun 9AM–6PM</p>
            </address>
          </div>

          <div>
            <p className="label-mono">Follow</p>
            <div className="mt-4 flex gap-3">
              {contactLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center border border-bone/20 transition-colors hover:border-safety hover:text-safety [&_svg]:h-4 [&_svg]:w-4"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-bone/10 py-6 font-mono text-[11px] uppercase tracking-[0.2em] text-bone/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Tirupati Precast Concrete Works</p>
          <p>Site by The Formwork</p>
        </div>
      </div>

      <p
        aria-hidden
        className="select-none overflow-hidden whitespace-nowrap text-center font-display text-[18vw] font-black uppercase leading-none opacity-5"
      >
        Tirupati Precast
      </p>
    </footer>
  );
};

export default Footer;
