"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";
import { CropMarks, GRID_PAPER_DARK } from "@/components/site/CropMarks";
import { AWARD } from "@/lib/data";

export default function AwardBand() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgY = reduce ? 0 : y;

  return (
    <section ref={ref} className="dark-band grain relative overflow-hidden bg-ink text-paper">
      {/* inverted blueprint ground */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={GRID_PAPER_DARK} />
      <CropMarks light />
      <div className="sheet relative grid gap-14 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="label-mono !text-paper/50 mb-6 flex items-center gap-3">
              <span className="inline-block h-2 w-2 bg-red" aria-hidden />
              04 / Proof on site
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.4rem)]">
              Silver, at 52<span className="text-red"> MWp</span>.
            </h2>
            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-paper/65">
              {AWARD.title} — awarded for work on the {AWARD.project}. Safety
              and process discipline at national-park scale, verified by
              TATA&nbsp;Power&nbsp;Solar.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="chip !border-paper/25 !text-paper/70">52 MWp</span>
              <span className="chip !border-paper/25 !text-paper/70">Bidar, Karnataka</span>
              <span className="chip !border-red !text-paper">TATA Power Solar</span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
            <motion.div
              className="absolute inset-x-0"
              style={{ y: imgY, top: "-8%", bottom: "-8%" }}
            >
              <Image
                src={AWARD.image}
                alt="Adani-branded precast wall at a solar park boundary"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 border border-paper/20" aria-hidden />
            <p className="absolute bottom-3 left-3 bg-ink/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/70">
              Solar park boundary · cast client branding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
