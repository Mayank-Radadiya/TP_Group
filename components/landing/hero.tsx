"use client";

import { useEffect, useRef, useState } from "react";
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

const VINYL_CALLOUTS = [
  "EST. 2014 — BENGALURU",
  "ISO CERTIFIED FACILITY",
  "M25 GRADE CONCRETE",
];

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── Hoist ────────────────────────────────────────────────────────────────────
// Masked-overflow line reveal — slides a text line up from below its container.

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
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// ─── JointTicks ───────────────────────────────────────────────────────────────
// Small tick marks at baseline of each headline line — engineering precision detail.

function JointTicks() {
  return (
    <>
      <span
        aria-hidden
        className="absolute -bottom-[5px] left-0 h-2.5 w-px bg-safety/60"
      />
      <span
        aria-hidden
        className="absolute -bottom-[5px] right-0 h-2.5 w-px bg-safety/60"
      />
    </>
  );
}

// ─── VinylBar ─────────────────────────────────────────────────────────────────
// Narrow 56px vertical strip pinned to the far-left of the section.
// An orange line draws down on load. Rotated mono text cycles every 4 seconds.

function VinylBar({ reduced }: { reduced: boolean }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduced) return;

    const cycle = () => {
      setVisible(false);
      const t = setTimeout(() => {
        setActiveIdx((i) => (i + 1) % VINYL_CALLOUTS.length);
        setVisible(true);
      }, 400);
      return t;
    };

    const id = setInterval(cycle, 4000);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <div
      aria-hidden
      className="absolute left-0 top-0 hidden h-full w-14 flex-col items-center lg:flex"
      style={{ zIndex: 20 }}
    >
      {/* Orange vertical line — draws down on load */}
      <motion.span
        className="absolute left-[27px] top-0 w-[2px] bg-safety origin-top"
        style={{ height: "100%" }}
        initial={reduced ? false : { scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease: "easeInOut" }}
      />

      {/* Safety orange accent square at vertical midpoint */}
      <span className="absolute left-[24px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 bg-safety" />

      {/* Rotating engineering callout — vertically oriented */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        <span
          className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone/50"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 400ms ease",
          }}
        >
          {VINYL_CALLOUTS[activeIdx]}
        </span>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => {
  const reduced = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-driven scale — video gently zooms as the hero scrolls out of view
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      {/* ─── Film grain: SVG feTurbulence filter definition ─────────────────── */}
      {/* Defined here, applied to an overlay div below. Zero render cost. */}
      <svg
        aria-hidden
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <filter id="tp-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>

      {/* ─── Video — full-bleed, behind everything ───────────────────────────── */}
      {/* scale is driven by useScroll for the parallax zoom; fades in on load. */}
      <motion.div
        className="absolute inset-0"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ scale: reduced ? undefined : videoScale }}
      >
        <video
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          poster="/images/1.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ─── Film grain overlay ──────────────────────────────────────────────── */}
      {/* opacity 0.045 + mix-blend-mode overlay = tactile surface texture.     */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          filter: "url(#tp-grain)",
          opacity: 0.045,
          mixBlendMode: "overlay" as React.CSSProperties["mixBlendMode"],
        }}
      />

      {/* ─── Dark gradient vignette (lower 85% height, darkest at bottom) ────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-[85%] bg-gradient-to-t from-ink/85 via-ink/40 to-transparent"
      />

      {/* ─── VinylBar — far-left engineering strip ───────────────────────────── */}
      <VinylBar reduced={reduced} />

      {/* ─── Main content layer ──────────────────────────────────────────────── */}
      {/* justify-end pushes all text to the bottom of the viewport — editorial. */}
      <div className="relative z-10 flex flex-1 flex-col justify-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-12 lg:pl-24">

          {/* Eyebrow */}
          <motion.p
            className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tirupati Precast Concrete Works
          </motion.p>

          {/* ── Headline ──────────────────────────────────────────────────────── */}
          {/* 4 stacked lines, each hoisting up from a clipped container.         */}
          {/* clamp ensures it fills the viewport at every breakpoint.            */}
          <h1
            className="font-display font-black uppercase leading-[0.88] tracking-tight text-bone"
            style={{ fontSize: "clamp(3.5rem, 11vw, 10rem)" }}
          >
            {/* Block 1: "Poured / Once." */}
            <span className="relative block divide-y divide-bone/10">
              <span className="relative block py-1">
                <Hoist delay={0.5} reduced={reduced}>
                  Poured
                </Hoist>
                <JointTicks />
              </span>
              <span className="relative block py-1">
                <Hoist delay={0.62} reduced={reduced}>
                  Once<span className="text-safety">.</span>
                </Hoist>
                <JointTicks />
              </span>
            </span>

            {/* Safety orange horizontal separator rule — scales in from left */}
            <motion.span
              aria-hidden
              className="my-3 block h-[2px] w-[55%] bg-safety origin-left"
              initial={reduced ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
            />

            {/* Block 2: "Standing / For Decades." */}
            <span className="relative block divide-y divide-bone/10">
              <span className="relative block py-1">
                <Hoist delay={0.74} reduced={reduced}>
                  {/* .type-concrete clips the precast site texture onto this word */}
                  <span className="type-concrete">Standing</span>
                </Hoist>
                <JointTicks />
              </span>
              <span className="relative block py-1">
                <Hoist delay={0.86} reduced={reduced}>
                  For Decades<span className="text-safety">.</span>
                </Hoist>
                <JointTicks />
              </span>
            </span>
          </h1>

          {/* ── Body text + CTAs ──────────────────────────────────────────────── */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <motion.p
              className="max-w-[42ch] font-sans text-base leading-relaxed text-bone/65 md:text-lg"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              Factory-cast panels arrive on site finished and ready to erect —
              walls go up in days, not months.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            >
              {/* Primary: inverted — bone background, ink text */}
              <Link
                href="/products"
                className="btn-wipe bg-bone px-8 py-4 font-mono text-xs uppercase tracking-widest text-ink"
              >
                Explore Products
              </Link>
              {/* Secondary: bone border, hovers to solid */}
              <Link
                href="/contact"
                className="border border-bone/50 px-8 py-4 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-bone hover:text-ink"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Marquee strip ───────────────────────────────────────────────────── */}
      <div
        className="marquee relative z-10 overflow-hidden border-t border-bone/10 py-4"
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
                  className="flex items-center font-mono text-[11px] uppercase tracking-[0.2em] text-bone/60"
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
