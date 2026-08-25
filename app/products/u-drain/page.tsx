import type { Metadata } from "next";
import DimLine from "@/components/site/DimLine";
import { Reveal, KineticHeadline } from "@/components/site/Reveal";
import { DRAIN_T6, DRAIN_T25 } from "@/lib/data";

export const metadata: Metadata = {
  title: "Precast 'U' Shape Drain — T-6 & T-25",
  description:
    "Precast U-drain systems: T-6 light duty (1.5–5T axle) and T-25 heavy duty (5–10T axle), 2000mm units from 300×300 to 900×900mm with matching lids.",
};

function DrainDiagram() {
  const s = "#1A1917";
  return (
    <svg viewBox="0 0 420 300" className="w-full" role="img" aria-label="U-drain cross-section — internal width 300 to 900mm, walls 65 to 150mm, lid on top">
      {/* lid */}
      <rect x="120" y="70" width="180" height="26" fill="none" stroke={s} strokeWidth="2" />
      <path d="M130 83 h160" stroke={s} strokeWidth="0.4" opacity="0.35" />
      {/* u section outer */}
      <path d="M110 96 v96 a26 26 0 0 0 26 26 h148 a26 26 0 0 0 26 -26 v-96" fill="none" stroke={s} strokeWidth="2.5" />
      {/* u section inner */}
      <path d="M136 96 v90 a14 14 0 0 0 14 14 h120 a14 14 0 0 0 14 -14 v-90" fill="none" stroke={s} strokeWidth="1.5" />
      {/* haunch lines */}
      <path d="M136 150 l-14 14 M284 150 l14 14" stroke={s} strokeWidth="0.75" opacity="0.5" />

      {/* internal width dim */}
      <path d="M136 60 h148 M136 56 v8 M284 56 v8" stroke={s} strokeWidth="0.75" />
      <text x="210" y="48" textAnchor="middle" fontSize="11" fill={s} fontFamily="var(--font-plex-mono), monospace" letterSpacing="1">
        300 – 900 mm
      </text>

      {/* wall thickness dim */}
      <path d="M110 120 h-16 M94 96 v48" stroke={s} strokeWidth="0.75" />
      <text x="86" y="148" fontSize="10" fill={s} fontFamily="var(--font-plex-mono), monospace" letterSpacing="1" textAnchor="end">
        c 65–85
      </text>

      {/* depth dim */}
      <path d="M322 96 h16 M330 96 v110" stroke={s} strokeWidth="0.75" />
      <text x="336" y="155" fontSize="10" fill={s} fontFamily="var(--font-plex-mono), monospace" letterSpacing="1" transform="rotate(90 336 155)" textAnchor="middle">
        H 375 – 1170
      </text>

      {/* bedding */}
      <path d="M60 240 h300" stroke={s} strokeWidth="1.5" />
      <path d="M70 240 l-8 8 M130 240 l-8 8 M190 240 l-8 8 M250 240 l-8 8 M310 240 l-8 8" stroke={s} strokeWidth="0.75" opacity="0.4" />
      <text x="210" y="264" textAnchor="middle" fontSize="9" fill="#8B8680" fontFamily="var(--font-plex-mono), monospace" letterSpacing="1">
        100 mm PCC + 20 mm dry mortar · groove joints · lifting inserts
      </text>
    </svg>
  );
}

function SpecTable({ rows }: { rows: readonly (readonly [string, string])[] | readonly string[][] }) {
  return (
    <table className="spec-table">
      <tbody>
        {rows.map((r) => (
          <tr key={r[0]}>
            <td className="w-2/5 font-mono !text-[12px] uppercase tracking-[0.1em] text-concrete">{r[0]}</td>
            <td>{r[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function UDrainPage() {
  return (
    <main className="overflow-x-clip pt-28 md:pt-36">
      <section className="hairline-b">
        <div className="sheet pb-16 md:pb-24">
          <Reveal>
            <p className="label-mono mb-8">System 02 — Drainage</p>
          </Reveal>
          <h1 className="font-display text-[clamp(2.6rem,7vw,6.5rem)]">
            <KineticHeadline text="Precast" />{" "}
            <span className="text-red">
              <KineticHeadline text="'U' Drain" delay={0.1} />
            </span>
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Two duty classes, one geometry family. T-6 for campuses and
              residential infrastructure; T-25 where trucks roll over —
              industrial yards, highways, solar parks. Groove-jointed units on
              PCC bedding, lids rated to 10 tonnes.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["T-6 light", "T-25 heavy", "L = 2000 mm", "300–900 mm", "≤ 10 T axle"].map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hairline-b">
        <div className="sheet grid gap-14 py-20 md:py-28 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="label-mono mb-8">Cross-section — typical unit</p>
              <div className="border border-ink/15 bg-paper-dim/50 p-6 md:p-10">
                <DrainDiagram />
              </div>
              <div className="mt-6">
                <DimLine label="Drawn to brand specification · not to scale" />
              </div>
            </Reveal>
          </div>

          <div className="space-y-16">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-display text-2xl md:text-3xl">{DRAIN_T6.name}</h2>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  Axle {DRAIN_T6.axle}
                </span>
              </div>
              <div className="mt-6">
                <SpecTable rows={DRAIN_T6.rows} />
              </div>
            </Reveal>
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-display text-2xl md:text-3xl">{DRAIN_T25.name}</h2>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  Axle {DRAIN_T25.axle}
                </span>
              </div>
              <div className="mt-6">
                <SpecTable rows={DRAIN_T25.rows} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="sheet flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)]">
              Size it to your flow<span className="text-red">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="/contact" className="btn btn-red">
              Request a quote
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
