"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import DimLine from "@/components/site/DimLine";
import { KineticHeadline } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/data";

const FACTS = [
  "ISO 9001:2015",
  "16 branches across India",
  "M30 ready-mix · TMT reinforcement",
  "100m of wall in 2 days",
  "Solar · Campus · Industrial · Infrastructure",
];

const RAIL = [
  "TP/01 — Compound wall system",
  "ISO 9001:2015",
  "13.07°N 77.59°E — BLR",
  "Sheet 1 / 1",
];

const EASE = [0.22, 1, 0.36, 1] as const;
const SLATS = 6;

function Crosshair({ pos }: { pos: string }) {
  return (
    <span className={`absolute ${pos} h-4 w-4`} aria-hidden>
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-paper/80" />
      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-paper/80" />
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const secRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 72]);

  return (
    <section ref={secRef} className="relative overflow-hidden pt-28 md:pt-36">
      {/* drawing-sheet header rail */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="hairline-b"
      >
        <div className="sheet">
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {RAIL.map((item, i) => (
              <li
                key={item}
                className={`label-mono flex items-center gap-2 border-ink/10 py-3 ${
                  i > 0 ? "border-l pl-4" : ""
                } ${i >= 2 ? "hidden md:flex" : ""}`}
              >
                <span className="inline-block h-1.5 w-1.5 bg-red" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* monumental type block */}
      <div className="sheet">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="label-mono mb-6 mt-10 flex items-center gap-3 md:mt-14"
        >
          <span className="inline-block h-2 w-2 bg-red" aria-hidden />
          {COMPANY.descriptor.replace("Manufacturer of ", "Manufacturers — ")}
        </motion.p>

        <h1 className="font-display text-ink">
          <span className="block text-[clamp(4rem,19vw,19rem)] leading-[0.85]">
            <KineticHeadline text="The Power" delay={0.15} />
          </span>
          <span className="block pl-[5vw] text-[clamp(3.2rem,16vw,15.5rem)] leading-[0.95] text-red">
            <KineticHeadline text="of Precast." delay={0.35} />
          </span>
        </h1>

        {/* editorial row: subcopy · chip · CTAs */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="hairline-t mb-10 grid gap-8 pt-6 md:mb-14 md:grid-cols-12 md:items-end"
        >
          <p className="max-w-md text-[15px] leading-relaxed text-ink-soft md:col-span-6">
            Factory-cast compound walls, drains and retaining walls —
            engineered to Japanese standards, made in Bharat, erected at
            100&nbsp;metres a day. Two decades of panels that outlast the sites
            they close.
          </p>
          <div className="hidden md:col-span-3 md:flex md:justify-end">
            <span className="chip">Panel 3048 × 75 mm · M30</span>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-3 md:justify-end">
            <a href="/products" className="btn btn-ink">
              The range
            </a>
            <a href="/contact" className="btn btn-ghost">
              Get a quote
            </a>
          </div>
        </motion.div>
      </div>

      {/* full-bleed annotated site photograph */}
      <div className="relative h-[38vh] min-h-[280px] w-full overflow-hidden md:h-[46vh]">
        <motion.div style={reduce ? undefined : { y: parallaxY }} className="absolute inset-[-72px_0]">
          {Array.from({ length: SLATS }).map((_, i) => (
            <div
              key={i}
              aria-hidden={i > 0}
              className="absolute inset-y-0 overflow-hidden"
              style={{ left: `${(100 / SLATS) * i}%`, width: `${100 / SLATS}%` }}
            >
              <motion.div
                className="relative h-full"
                initial={reduce ? false : { y: "101%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.6 + i * 0.07, ease: EASE }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/1.jpg"
                  alt={
                    i === 0
                      ? "Grey precast panel compound wall against a city skyline"
                      : ""
                  }
                  className="absolute left-0 top-0 h-full max-w-none object-cover"
                  style={{
                    width: `${SLATS * 100}%`,
                    transform: `translateX(-${(100 / SLATS) * i}%)`,
                  }}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* blueprint annotations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/60 to-transparent" />
          <Crosshair pos="left-4 top-4" />
          <Crosshair pos="right-4 top-4" />
          <Crosshair pos="bottom-4 left-4" />
          <Crosshair pos="bottom-4 right-4" />

          <motion.span
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.25 }}
            className="absolute right-5 top-5 border border-paper/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper md:right-10 md:top-6"
          >
            Erected · Karnataka solar site
          </motion.span>

          <motion.div
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.05, ease: EASE }}
            className="absolute bottom-5 left-5 right-5 origin-left md:left-10 md:right-10"
          >
            <DimLine
              label="100 m of wall · erected in 2 days"
              className="[&_.tick]:bg-paper/70 [&_.arm]:bg-paper/50"
            />
          </motion.div>
        </div>
      </div>

      {/* fact ticker */}
      <div className="hairline-b relative overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-0 whitespace-nowrap py-4"
          initial={reduce ? false : { x: 0 }}
          animate={reduce ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: 36, ease: "linear", repeat: Infinity }}
        >
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {FACTS.map((f, i) => (
                <span
                  key={i}
                  className="flex items-center gap-6 pr-6 font-mono text-[10px] uppercase tracking-[0.22em] text-concrete"
                >
                  <span className="text-red">/</span>
                  {f}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
