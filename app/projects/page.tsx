"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { Reveal, KineticHeadline } from "@/components/site/Reveal";
import { AWARD, IMG_ALT, PROJECTS, SECTORS } from "@/lib/data";

export default function ProjectsPage() {
  const [sector, setSector] = useState<(typeof SECTORS)[number]>("All");
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () => (sector === "All" ? PROJECTS : PROJECTS.filter((p) => p.sector === sector)),
    [sector]
  );

  return (
    <main className="overflow-x-clip pt-28 md:pt-36">
      {/* header */}
      <section className="hairline-b">
        <div className="sheet pb-14 md:pb-20">
          <Reveal>
            <p className="label-mono mb-8 flex items-center gap-3">
              <span className="inline-block h-2 w-2 bg-red" aria-hidden />
              Selected work
            </p>
          </Reveal>
          <h1 className="font-display text-[clamp(3rem,9vw,8rem)]">
            <KineticHeadline text="Walls that" />{" "}
            <span className="text-red">
              <KineticHeadline text="closed the site." delay={0.15} />
            </span>
          </h1>
        </div>
      </section>

      {/* award feature */}
      <section className="hairline-b">
        <div className="sheet grid gap-10 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label-mono mb-6 flex items-center gap-3">
                <span className="inline-block h-2 w-2 bg-red" aria-hidden />
                Award
              </p>
              <h2 className="font-display text-[clamp(1.8rem,3.6vw,3rem)]">
                TATA Power Solar Contractors Safety Award<span className="text-red"> — Silver.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
                {AWARD.project}. Process and safety discipline, verified at
                national scale by TATA Power Solar.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="chip">52 MWp</span>
                <span className="chip">Bidar, Karnataka</span>
                <span className="chip !border-red">Silver category</span>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden border border-ink/15" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={AWARD.image}
                  alt="Adani-branded precast wall at a solar park boundary"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* filter */}
      <section className="hairline-b">
        <div className="sheet flex flex-wrap items-center gap-x-8 gap-y-3 py-6">
          <span className="label-mono">Sector</span>
          {SECTORS.map((s) => (
            <button
              key={s}
              onClick={() => setSector(s)}
              aria-pressed={sector === s}
              className={`link-sweep font-mono text-[11px] uppercase tracking-[0.22em] transition-colors ${
                sector === s ? "text-red" : "text-ink-soft hover:text-ink"
              }`}
            >
              {s}
            </button>
          ))}
          <span className="ml-auto font-mono text-[11px] tracking-[0.18em] text-concrete">
            {String(filtered.length).padStart(2, "0")} / {PROJECTS.length}
          </span>
        </div>
      </section>

      {/* grid */}
      <section>
        <div className="sheet py-14 md:py-20">
          <motion.ul layout className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.li
                  key={p.title}
                  layout
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <div className="relative overflow-hidden border border-ink/15" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={p.image}
                      alt={IMG_ALT[p.image] || p.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span className="absolute right-3 top-3 bg-paper/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-ink">
                      {p.sector}
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h2 className="font-display text-xl">{p.title}</h2>
                    {p.client && (
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-red">
                        {p.client}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.caption}</p>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </section>
    </main>
  );
}
