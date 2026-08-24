"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety focus-visible:ring-offset-2";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 border-b hairline bg-bone/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <Link
            href="/"
            className={`flex flex-col ${RING} focus-visible:ring-offset-bone`}
          >
            <span className="font-display text-lg font-extrabold uppercase leading-none tracking-tight text-ink">
              Tirupati Precast
            </span>
            <span className="label-mono mt-1">EST. 2014 — BENGALURU</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-safety focus-visible:ring-offset-bone ${
                  pathname === item.href ? "text-safety" : "text-ink"
                } ${RING}`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+918884088778"
              className={`btn-wipe bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bone focus-visible:ring-offset-bone ${RING}`}
            >
              +91 88840 88778
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`relative z-50 flex h-10 w-10 items-center justify-center text-ink md:hidden focus-visible:ring-offset-bone ${RING}`}
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden />
            ) : (
              <Menu className="h-6 w-6" aria-hidden />
            )}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pb-10 pt-24 text-bone md:hidden">
          <nav className="flex flex-col">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`flex items-baseline gap-4 border-b border-bone/10 py-4 font-display text-3xl font-extrabold uppercase tracking-tight focus-visible:ring-offset-ink ${
                  pathname === item.href ? "text-safety" : "text-bone"
                } ${RING}`}
              >
                <span className="font-mono text-xs tracking-[0.2em] text-concrete">
                  0{i + 1}
                </span>
                {item.name}
              </Link>
            ))}
          </nav>
          <div>
            <p className="label-mono">Contact</p>
            <a
              href="tel:+918884088778"
              onClick={() => setMenuOpen(false)}
              className={`mt-2 block font-display text-2xl font-extrabold uppercase tracking-tight text-bone focus-visible:ring-offset-ink ${RING}`}
            >
              +91 88840 88778
            </a>
            <p className="label-mono mt-1">EST. 2014 — BENGALURU</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
