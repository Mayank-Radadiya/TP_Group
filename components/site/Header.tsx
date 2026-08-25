"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { PHONES } from "@/lib/data";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur-sm hairline-b" : "bg-transparent"
      }`}
    >
      <div className="sheet flex h-16 items-center justify-between md:h-[72px]">
        <Link href="/" aria-label="Tirupati Precast — home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`link-sweep font-mono text-[11px] uppercase tracking-[0.22em] transition-colors ${
                  active ? "text-red" : "text-ink hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={PHONES[0].href}
            className="btn btn-ink !px-5 !py-2.5 !text-[10px]"
          >
            {PHONES[0].value}
          </a>
        </nav>

        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-paper px-6 pt-24 md:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  className="hairline-b"
                >
                  <Link
                    href={item.href}
                    className={`font-display block py-5 text-4xl ${
                      pathname === item.href ? "text-red" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto pb-10">
              <p className="label-mono mb-2">Head office</p>
              <a href={PHONES[0].href} className="font-display text-2xl text-red">
                {PHONES[0].value}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
