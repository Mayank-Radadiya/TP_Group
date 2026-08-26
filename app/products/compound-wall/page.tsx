import type { Metadata } from "next";
import DimLine from "@/components/site/DimLine";
import PanelImage from "@/components/site/PanelImage";
import { Reveal, KineticHeadline } from "@/components/site/Reveal";
import CompoundWallDrawing from "@/components/products/CompoundWallDrawing";
import {
  WALL_COLUMN,
  WALL_PANEL,
  WALL_VARIANTS,
  WALL_FINISHES,
  WALL_PERFORMANCE,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "75mm Single Panels Compound Wall",
  description:
    "Flagship precast compound wall system — one-piece 75mm panels, TMT weld-mesh reinforcement, M30 concrete, tested before dispatch. 6–12 ft heights, five finish options.",
};

export default function CompoundWallPage() {
  return (
    <main className="overflow-x-clip pt-28 md:pt-36">
      {/* hero */}
      <section className="hairline-b">
        <div className="sheet grid gap-12 pb-16 md:pb-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label-mono mb-8">System 01 — Flagship</p>
            </Reveal>
            <h1 className="font-display text-[clamp(2.6rem,7vw,6.5rem)]">
              <KineticHeadline text="75mm Single" />
              <br />
              <span className="text-red">
                <KineticHeadline text="Panels" delay={0.1} />
              </span>{" "}
              <KineticHeadline text="Wall" delay={0.2} />
            </h1>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                One-piece panels cast with TMT bar weld-mesh reinforcement in
                M30 ready-mix concrete with admixture. Every unit tested before
                dispatch. Replaces conventional RCC compound walls at a third
                of the weight — on smaller footings, at three times the speed.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["75 mm panel", "M30", "8 mm TMT mesh", "6–12 ft", "5 finishes"].map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <PanelImage
              src="/images/6.jpg"
              alt="Tall precast wall topped with concertina wire"
              caption="12 ft system · Y-posts + concertina wire"
              slats={3}
            />
          </div>
        </div>
      </section>

      {/* diagram + specs */}
      <section className="hairline-b">
        <div className="sheet grid gap-14 py-20 md:py-28 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="label-mono mb-8">Elevation — standard 6 ft module</p>
              <div className="border border-ink/15 bg-paper-dim/50 p-6 md:p-10">
                <CompoundWallDrawing />
              </div>
              <div className="mt-6">
                <DimLine label="Drawn to brand specification · not to scale" />
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h2 className="font-display mb-6 text-2xl md:text-3xl">Column</h2>
              <table className="spec-table mb-14">
                <tbody>
                  {WALL_COLUMN.map(([k, v]) => (
                    <tr key={k}>
                      <td className="w-2/5 font-mono !text-[12px] uppercase tracking-[0.1em] text-concrete">{k}</td>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal>
              <h2 className="font-display mb-6 text-2xl md:text-3xl">Panel</h2>
              <table className="spec-table mb-14">
                <tbody>
                  {WALL_PANEL.map(([k, v]) => (
                    <tr key={k}>
                      <td className="w-2/5 font-mono !text-[12px] uppercase tracking-[0.1em] text-concrete">{k}</td>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal>
              <h2 className="font-display mb-6 text-2xl md:text-3xl">Height variants</h2>
              <table className="spec-table mb-4">
                <thead>
                  <tr>
                    {WALL_VARIANTS.head.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {WALL_VARIANTS.rows.map((r) => (
                    <tr key={r[0]}>
                      {r.map((c, i) => (
                        <td key={i} className={i === 0 ? "font-mono !text-[12px] uppercase tracking-[0.1em]" : ""}>
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mb-14 font-mono text-[11px] uppercase tracking-[0.14em] text-concrete">
                {WALL_VARIANTS.constants}
              </p>
            </Reveal>
            <Reveal>
              <h2 className="font-display mb-6 text-2xl md:text-3xl">Top finishes</h2>
              <ul className="mb-2 grid grid-cols-2 gap-px bg-ink/10 sm:grid-cols-3">
                {WALL_FINISHES.map((f, i) => (
                  <li key={f} className="flex items-baseline justify-between bg-paper p-4">
                    <span className="text-sm text-ink-soft">{f}</span>
                    <span className="font-mono text-[10px] text-concrete">
                      F{String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* performance band */}
      <section className="dark-band grain relative bg-ink text-paper">
        <div className="sheet relative py-20 md:py-28">
          <Reveal>
            <p className="label-mono !text-paper/50 mb-12">Performance — published figures</p>
          </Reveal>
          <div className="grid gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
            {WALL_PERFORMANCE.map((p, i) => (
              <Reveal key={p.label} delay={i * 0.07} className="bg-ink">
                <div className="flex h-full flex-col justify-between gap-8 p-6">
                  <span className="font-display text-5xl text-paper">
                    {p.value}
                    <span className="ml-2 text-xl text-red">{p.unit}</span>
                  </span>
                  <span className="label-mono !text-paper/50 !tracking-[0.14em] !leading-relaxed">
                    {p.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section>
        <div className="sheet flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)]">
              Specify it for your site<span className="text-red">.</span>
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
