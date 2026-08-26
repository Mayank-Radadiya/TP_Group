import type { Metadata } from "next";
import DimLine from "@/components/site/DimLine";
import { Reveal, KineticHeadline } from "@/components/site/Reveal";
import { DRAIN_T6, DRAIN_T25 } from "@/lib/data";
import UDrainDrawing from "@/components/products/UDrainDrawing";

export const metadata: Metadata = {
  title: "Precast 'U' Shape Drain — T-6 & T-25",
  description:
    "Precast U-drain systems: T-6 light duty (1.5–5T axle) and T-25 heavy duty (5–10T axle), 2000mm units from 300×300 to 900×900mm with matching lids.",
};

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
                <UDrainDrawing />
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
