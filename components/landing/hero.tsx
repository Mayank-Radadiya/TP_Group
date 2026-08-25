"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

// ─── constants ────────────────────────────────────────────────────────────────

const SPECS = [
  "1500+ PROJECTS DELIVERED",
  "POURING SINCE 2014",
  "ISO CERTIFIED FACILITY",
  "M25 GRADE CONCRETE",
  "CAST IN STEEL MOULDS",
  "ERECTED IN DAYS, NOT MONTHS",
];

const STATS = [
  { value: "1500+", label: "Projects" },
  { value: "2014",  label: "Est. Year" },
  { value: "M25",   label: "Grade", accent: true },
] as const;

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── Hoist ────────────────────────────────────────────────────────────────────
// Masked-overflow line reveal — each word slides up from beneath its clip.

function Hoist({
  delay,
  reduced,
  children,
}: {
  delay: number;
  reduced: boolean;
  children: React.ReactNode;
}) {
  if (reduced) return <span className="block">{children}</span>;
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.85, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => {
  const reduced = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle parallax on the left image as the hero scrolls away
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="flex min-h-svh flex-col"
    >
      {/* ── Split: image left | text right ──────────────────────────────────── */}
      <div className="flex flex-1 flex-col lg:flex-row">

        {/* ── LEFT PANEL: full-bleed site photograph ────────────────────────── */}
        {/* Mobile: fixed 260px tall image strip. Desktop: 55% width, full height. */}
        <div className="relative h-[260px] overflow-hidden lg:h-auto lg:w-[55%] lg:flex-none">
          <motion.div
            className="absolute inset-0"
            style={{ transformOrigin: "center" }}
            initial={reduced ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            {/* Parallax wrapper — extends beyond container, shifts on scroll */}
            <motion.div
              className="absolute inset-0 -top-[4%] h-[108%]"
              style={reduced ? undefined : { y: imgY }}
            >
              <Image
                src="/images/main.jpg"
                alt="Precast compound wall installation at a Bengaluru construction site"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Figcaption — bottom-left of image, bone text on dark photo */}
          <motion.p
            className="absolute bottom-4 left-5 font-mono text-[9px] uppercase tracking-[0.2em] text-bone/60"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            Fig. 01 — Compound Wall, Bengaluru
          </motion.p>

          {/* Bottom fade — ties the image into the split at the horizontal join on mobile */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink to-transparent lg:hidden"
          />
        </div>

        {/* ── ORANGE SEAM — vertical rule, desktop only ─────────────────────── */}
        <motion.div
          aria-hidden
          className="hidden w-[3px] shrink-0 bg-safety lg:block"
          style={{ transformOrigin: "top" }}
          initial={reduced ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.85, delay: 0.25, ease: "easeInOut" }}
        />

        {/* ── RIGHT PANEL: ink background, editorial typography ─────────────── */}
        <div className="flex flex-1 flex-col bg-ink px-8 py-10 xl:px-14 xl:py-12">

          {/* Top metadata bar */}
          <motion.div
            className="flex items-center justify-between border-b border-bone/10 pb-5"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/30">
              Tirupati Precast Concrete Works
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/30">
              Bengaluru, KA
            </span>
          </motion.div>

          {/* Flexible spacer — pushes content toward the bottom for editorial weight */}
          <div className="min-h-[2rem] flex-1" />

          {/* ── Headline ──────────────────────────────────────────────────────── */}
          {/* clamp is conservative — max 4.5rem so it never overflows the panel. */}
          <h1
            className="font-display font-black uppercase leading-[0.88] tracking-tight text-bone"
            style={{ fontSize: "clamp(2.5rem, 3.6vw, 4.5rem)" }}
          >
            <Hoist delay={0.48} reduced={reduced}>
              Poured
            </Hoist>
            <Hoist delay={0.60} reduced={reduced}>
              Once<span className="text-safety">.</span>
            </Hoist>

            {/* Orange rule — horizontal separator between the two phrases */}
            <motion.span
              aria-hidden
              className="my-3 block h-[2px] bg-safety"
              style={{ width: "3rem", transformOrigin: "left" }}
              initial={reduced ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.68, ease: "easeOut" }}
            />

            <Hoist delay={0.74} reduced={reduced}>
              {/* .type-concrete background-clips concrete texture onto the letterforms */}
              <span className="type-concrete">Standing</span>
            </Hoist>
            <Hoist delay={0.84} reduced={reduced}>
              For Decades<span className="text-safety">.</span>
            </Hoist>
          </h1>

          {/* Body copy */}
          <motion.p
            className="mt-7 max-w-[36ch] font-sans text-sm leading-relaxed text-bone/50 md:text-base"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
          >
            Factory-cast panels arrive on site finished and ready to erect —
            walls go up in days, not months.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="mt-8 flex gap-8 border-t border-bone/10 pt-6"
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
          >
            {STATS.map(({ value, label, accent }) => (
              <div key={label}>
                <p
                  className={`font-display text-2xl font-black uppercase tracking-tight ${
                    accent ? "text-safety" : "text-bone"
                  }`}
                >
                  {value}
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-bone/30">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
          >
            {/* Primary: bone bg, ink text, safety-orange wipe on hover */}
            <Link
              href="/products"
              className="btn-wipe bg-bone px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-ink"
            >
              Explore Products
            </Link>
            {/* Secondary: ghost border */}
            <Link
              href="/contact"
              className="border border-bone/25 px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-bone/8"
            >
              Get a Quote
            </Link>
          </motion.div>

          {/* Bottom certification tag */}
          <motion.div
            className="mt-8 border-t border-bone/10 pt-5"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.35 }}
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone/20">
              ISO Certified Facility — Yelahanka Plant — Est. 2014
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Marquee strip — full width across both panels ─────────────────────── */}
      <div
        className="marquee overflow-hidden border-t border-ink/10 bg-bone py-4"
        aria-label="Company specifications"
      >
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {SPECS.map((spec) => (
                <li
                  key={spec}
                  className="flex items-center font-mono text-[11px] uppercase tracking-[0.2em] text-concrete"
                >
                  <span className="mx-6 h-1.5 w-1.5 bg-safety" aria-hidden />
                  {spec}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
