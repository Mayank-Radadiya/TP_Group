"use client";

import { motion, useReducedMotion } from "framer-motion";
import PanelImage from "@/components/site/PanelImage";
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

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      {/* faint grid rules */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[8.333%] hidden w-px bg-ink/[0.06] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[58.333%] hidden w-px bg-ink/[0.06] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[91.667%] hidden w-px bg-ink/[0.06] lg:block"
      />

      <div className="sheet relative pb-10 md:pb-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* headline column */}
          <div className="lg:col-span-7">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="label-mono mb-8 flex items-center gap-3"
            >
              <span className="inline-block h-2 w-2 bg-red" aria-hidden />
              {COMPANY.descriptor.replace("Manufacturer of ", "Manufacturers — ")}
            </motion.p>

            <h1 className="font-display text-[clamp(3.4rem,11.5vw,10.5rem)] text-ink">
              <KineticHeadline text="The Power" delay={0.15} />
              <br />
              <span className="text-red">
                <KineticHeadline text="of Precast" delay={0.3} />
              </span>
            </h1>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
            >
              <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
                Factory-cast compound walls, drains and retaining walls —
                engineered to Japanese standards, made in Bharat, erected at
                100&nbsp;metres a day. Two decades of panels that outlast the
                sites they close.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/products" className="btn btn-ink">
                  The range
                </a>
                <a href="/contact" className="btn btn-ghost">
                  Get a quote
                </a>
              </div>
            </motion.div>
          </div>

          {/* image column */}
          <div className="lg:col-span-5 lg:pt-14">
            <PanelImage
              src="/images/1.jpg"
              alt="Grey precast panel compound wall against a city skyline"
              priority
              caption="Panel wall · city-fringe development, Karnataka"
              slats={3}
            />
            <div className="mt-6 hidden md:block">
              <DimLine label="Panel 3048 × 75 mm · M30" />
            </div>
          </div>
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
