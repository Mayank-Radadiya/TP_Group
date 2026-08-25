import type { Metadata } from "next";
import DimLine from "@/components/site/DimLine";
import { Reveal, KineticHeadline } from "@/components/site/Reveal";
import { RETAINING } from "@/lib/data";

export const metadata: Metadata = {
  title: "Earth Retaining Wall",
  description:
    "L-shaped precast RCC retaining walls to Japanese Industrial Standards — self-compacting concrete, flange coupling, integral drainage, heights 1000–3000mm.",
};

function RetainingDiagram() {
  const s = "#1A1917";
  return (
    <svg viewBox="0 0 420 300" className="w-full" role="img" aria-label="L-shaped retaining wall cross-section — stem height 1000 to 3000mm, base 850 to 2050mm, drain hole through stem">
      {/* soil line behind */}
      <path d="M20 60 h130" stroke={s} strokeWidth="1" strokeDasharray="5 4" opacity="0.6" />
      <text x="24" y="50" fontSize="9" fill="#8B8680" fontFamily="var(--font-plex-mono), monospace" letterSpacing="1">
        retained soil
      </text>

      {/* L unit: stem + base */}
      <path d="M150 40 v170 h150" fill="none" stroke={s} strokeWidth="3" />
      <path d="M176 40 v144 h124" fill="none" stroke={s} strokeWidth="1.5" />
      {/* flange coupling */}
      <path d="M150 96 h-10 v14 h10 M176 96 h10 v14 h-10" fill="none" stroke={s} strokeWidth="1" />
      <text x="120" y="88" fontSize="9" fill="#8B8680" fontFamily="var(--font-plex-mono), monospace" letterSpacing="1">
        flange coupling
      </text>

      {/* drain hole */}
      <circle cx="163" cy="180" r="6" fill="none" stroke={s} strokeWidth="1.25" />
      <path d="M163 186 v24" stroke={s} strokeWidth="0.75" strokeDasharray="3 3" />
      <text x="185" y="184" fontSize="9" fill="#8B8680" fontFamily="var(--font-plex-mono), monospace" letterSpacing="1">
        Ø 70/75 drain · filter
      </text>

      {/* H dim */}
      <path d="M120 40 h-16 M120 210 h-16 M112 40 v170" stroke={s} strokeWidth="0.75" />
      <path d="M112 40 l6 -3 M112 40 l6 3 M112 210 l6 -3 M112 210 l6 3" stroke={s} strokeWidth="0.75" />
      <text x="104" y="128" fontSize="11" fill={s} fontFamily="var(--font-plex-mono), monospace" letterSpacing="1" transform="rotate(-90 104 128)" textAnchor="middle">
        H 1000 – 3000
      </text>

      {/* B dim */}
      <path d="M150 240 h150 M150 236 v8 M300 236 v8" stroke={s} strokeWidth="0.75" />
      <path d="M150 236 l-3 6 M150 236 l3 6 M300 236 l-3 6 M300 236 l3 6" stroke={s} strokeWidth="0.75" />
      <text x="225" y="262" textAnchor="middle" fontSize="11" fill={s} fontFamily="var(--font-plex-mono), monospace" letterSpacing="1">
        B 850 – 2050 · unit L = 2000
      </text>

      {/* foundation build-up */}
      <path d="M60 282 h320" stroke={s} strokeWidth="1.5" />
      <text x="210" y="296" textAnchor="middle" fontSize="9" fill="#8B8680" fontFamily="var(--font-plex-mono), monospace" letterSpacing="1">
        bedding mortar → foundation concrete → crushed stone
      </text>
    </svg>
  );
}

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
                <RetainingDiagram />
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
