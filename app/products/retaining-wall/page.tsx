import type { Metadata } from "next";
import DimLine from "@/components/site/DimLine";
import { Reveal, KineticHeadline } from "@/components/site/Reveal";
import { RETAINING } from "@/lib/data";
import RetainingWallDrawing from "@/components/products/RetainingWallDrawing";

export const metadata: Metadata = {
  title: "Earth Retaining Wall",
  description:
    "L-shaped precast RCC retaining walls to Japanese Industrial Standards — self-compacting concrete, flange coupling, integral drainage, heights 1000–3000mm.",
};

export default function RetainingWallPage() {
  return (
    <main className="overflow-x-clip pt-28 md:pt-36">
      <section className="hairline-b">
        <div className="sheet pb-16 md:pb-24">
          <Reveal>
            <p className="label-mono mb-8">System 03 — Earth retention</p>
          </Reveal>
          <h1 className="font-display text-[clamp(2.6rem,7vw,6.5rem)]">
            <KineticHeadline text="Earth" />{" "}
            <span className="text-red">
              <KineticHeadline text="Retaining" delay={0.1} />
            </span>{" "}
            <KineticHeadline text="Wall" delay={0.2} />
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              L-shaped high-strength precast RCC units manufactured to Japanese
              Industrial Standards in self-compacting concrete, conforming
              Indian Standards. Flange-coupled joints, integral drain holes
              with soil-particle filters, draft-prevention details — engineered
              retention from 1 to 3 metres.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["JIS", "Self-compacting", "H 1000–3000 mm", "Flange coupling", "Ø70/75 drain"].map((c) => (
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
              <p className="label-mono mb-8">Cross-section — L unit</p>
              <div className="border border-ink/15 bg-paper-dim/50 p-6 md:p-10">
                <RetainingWallDrawing />
              </div>
              <div className="mt-6">
                <DimLine label="Drawn to brand specification · not to scale" />
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h2 className="font-display mb-6 text-2xl md:text-3xl">System</h2>
              <table className="spec-table mb-14">
                <tbody>
                  {RETAINING.rows.map(([k, v]) => (
                    <tr key={k}>
                      <td className="w-2/5 font-mono !text-[12px] uppercase tracking-[0.1em] text-concrete">{k}</td>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal>
              <h2 className="font-display mb-6 text-2xl md:text-3xl">Design parameters</h2>
              <ul className="grid grid-cols-2 gap-px bg-ink/10 sm:grid-cols-3">
                {RETAINING.params.map(([k, v]) => (
                  <li key={k} className="flex flex-col gap-2 bg-paper p-4">
                    <span className="font-display text-xl">{k}</span>
                    <span className="font-mono text-[11px] tracking-[0.08em] text-ink-soft">{v}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-concrete">
                Yc unit weight · Ys soil weight · Ø friction angle · q surcharge · Fs safety factor
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="sheet flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)]">
              Hold your ground<span className="text-red">.</span>
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
