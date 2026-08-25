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

const SPECS = [
  "1500+ PROJECTS DELIVERED",
  "POURING SINCE 2014",
  "ISO CERTIFIED FACILITY",
  "M25 GRADE CONCRETE",
  "CAST IN STEEL MOULDS",
  "ERECTED IN DAYS, NOT MONTHS",
];

const RULER_MARKS = ["2400 MM", "1800", "1200", "600"];

const CORNER_MARKS = [
  "-top-1.5 -left-1.5 border-t-2 border-l-2",
  "-top-1.5 -right-1.5 rotate-90 border-t-2 border-l-2",
  "-bottom-1.5 -right-1.5 rotate-180 border-t-2 border-l-2",
  "-bottom-1.5 -left-1.5 -rotate-90 border-t-2 border-l-2",
];

const EASE = [0.16, 1, 0.3, 1] as const;

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
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function JointTicks() {
  return (
    <>
      <span
        aria-hidden
        className="absolute -bottom-[5px] left-0 h-2.5 w-px bg-safety"
      />
      <span
        aria-hidden
        className="absolute -bottom-[5px] right-0 h-2.5 w-px bg-safety"
      />
    </>
  );
}

const Hero = () => {
  const reduced = useReducedMotion() ?? false;
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="relative flex min-h-[100svh] flex-col">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6">
        <div className="flex items-baseline justify-between gap-6 border-b hairline pb-4 pt-20 lg:pt-24">
          <motion.p
            className="label-mono"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            TIRUPATI PRECAST CONCRETE WORKS
          </motion.p>
          <motion.p
            className="label-mono hidden sm:block"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            EST. 2014 — BENGALURU
          </motion.p>
        </div>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="font-display text-[clamp(3.25rem,9vw,8.5rem)] font-black uppercase leading-[0.92] tracking-tight text-ink">
              <span className="relative block divide-y divide-ink/15">
                <span className="relative block py-1">
                  <Hoist delay={0.35} reduced={reduced}>
                    Poured once.
                  </Hoist>
                  <JointTicks />
                </span>
                <span className="relative block py-1">
                  <Hoist delay={0.47} reduced={reduced}>
                    <span className="type-concrete">Standing</span>
                  </Hoist>
                  <JointTicks />
                </span>
                <span className="relative block py-1">
                  <Hoist delay={0.59} reduced={reduced}>
                    For decades<span className="text-safety">.</span>
                  </Hoist>
                  <JointTicks />
                </span>
              </span>
            </h1>

            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <motion.p
                className="max-w-prose font-sans text-base leading-relaxed text-ink/70 md:text-lg"
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
              >
                Factory-cast panels arrive on site finished and ready to erect
                — walls go up in days, not months.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
              >
                <Link
                  href="/products"
                  className="btn-wipe bg-ink px-8 py-4 font-mono text-xs uppercase tracking-widest text-bone"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="border border-ink px-8 py-4 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-bone"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </div>

          <div ref={railRef} className="hidden gap-5 self-stretch lg:flex lg:col-span-4">
            <div aria-hidden className="relative w-12 shrink-0">
              <span className="absolute bottom-0 left-0 top-0 w-px bg-ink/15" />
              {!reduced && (
                <motion.span
                  className="absolute bottom-0 left-0 top-0 w-px origin-top bg-safety"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              )}
              <div className="flex h-full flex-col justify-between py-1 pl-3">
                {RULER_MARKS.map((mark) => (
                  <span key={mark} className="flex items-center gap-1.5">
                    <span className="h-px w-2.5 bg-ink/30" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-concrete">
                      {mark}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <figure className="min-w-0 flex-1">
              <div className="relative border border-ink p-2">
                {CORNER_MARKS.map((mark) => (
                  <span
                    key={mark}
                    aria-hidden
                    className={`absolute h-3 w-3 border-ink ${mark}`}
                  />
                ))}
                <div className="relative mt-6 aspect-[3/4] overflow-hidden">
                  <motion.div
                    className="absolute inset-0 -top-[6%] h-[112%]"
                    style={reduced ? undefined : { y: imgY }}
                  >
                    <Image
                      src="/images/1.jpg"
                      alt="Precast compound wall running along a construction site, Bengaluru skyline behind"
                      fill
                      priority
                      sizes="(min-width: 1024px) 26vw, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
              <figcaption className="label-mono mt-2">
                FIG. 01 — COMPOUND WALL PANEL, YELAHANKA PLANT
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="pb-12 lg:hidden">
          <figure>
            <div className="relative border border-ink p-2">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/1.jpg"
                  alt="Precast compound wall running along a construction site, Bengaluru skyline behind"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="label-mono mt-2">
              FIG. 01 — COMPOUND WALL PANEL, YELAHANKA PLANT
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="marquee overflow-hidden border-t hairline py-4" aria-label="Company specifications">
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
