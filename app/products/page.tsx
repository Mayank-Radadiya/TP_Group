"use client";

import Link from "next/link";
import PanelImage from "@/components/site/PanelImage";
import { Reveal, KineticHeadline } from "@/components/site/Reveal";
import { HERITAGE_PRODUCTS, PRODUCTS } from "@/lib/data";

const COMPANY_DESCRIPTOR =
  "Single Panels 75mm Compound Wall · Precast 'U' Drain · Retaining Wall";

export default function ProductsPage() {
  return (
    <main className="overflow-x-clip pt-28 md:pt-36">
      {/* header */}
      <section className="hairline-b">
        <div className="sheet pb-16 md:pb-24">
          <Reveal>
            <p className="label-mono mb-8 flex items-center gap-3">
              <span className="inline-block h-2 w-2 bg-red" aria-hidden />
              Catalogue — {COMPANY_DESCRIPTOR}
            </p>
          </Reveal>
          <h1 className="font-display text-[clamp(3rem,9vw,8rem)]">
            <KineticHeadline text="Cast," />{" "}
            <span className="text-red">
              <KineticHeadline text="cured," delay={0.1} />
            </span>{" "}
            <KineticHeadline text="erected." delay={0.2} />
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Every product below is factory-manufactured, tested before
              dispatch, and erected by trained crews. Flagship systems carry
              full published specifications; the heritage line covers two
              decades of special precast work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* flagship systems */}
      <section className="hairline-b">
        <div className="sheet py-20 md:py-28">
          <ul className="space-y-20 md:space-y-28">
            {PRODUCTS.map((p) => (
              <Reveal key={p.slug}>
                <li>
                  <Link
                    href={`/products/${p.slug}`}
                    className="group grid gap-10 lg:grid-cols-12 lg:gap-8"
                  >
                    <div className="lg:col-span-2">
                      <span className="font-mono text-[11px] tracking-[0.22em] text-red">
                        SYS—{p.index}
                      </span>
                    </div>
                    <div className="lg:col-span-6">
                      <h2 className="font-display text-[clamp(1.8rem,4vw,3.4rem)] transition-colors duration-300 group-hover:text-red">
                        {p.name}
                      </h2>
                      <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                        {p.summary}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.chips.map((c) => (
                          <span key={c} className="chip">
                            {c}
                          </span>
                        ))}
                      </div>
                      <span className="link-sweep mt-8 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-red">
                        Specifications →
                      </span>
                    </div>
                    <div className="lg:col-span-4">
                      {p.image ? (
                        <PanelImage
                          src={p.image}
                          alt={p.imageCaption || p.name}
                          slats={3}
                        />
                      ) : (
                        <div
                          className="flex items-center justify-center border border-ink/15 p-10"
                          style={{ aspectRatio: "16/10" }}
                        >
                          <span className="font-display text-6xl text-ink/10 transition-colors duration-300 group-hover:text-red/20">
                            {p.short}
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* heritage line */}
      <section>
        <div className="sheet py-20 md:py-28">
          <Reveal>
            <p className="label-mono mb-10">Heritage line — two decades of special precast</p>
          </Reveal>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {HERITAGE_PRODUCTS.map((h, i) => (
              <Reveal key={h} delay={Math.min(i * 0.03, 0.25)} y={10}>
                <li className="hairline-t flex items-baseline justify-between py-4">
                  <span className="text-[15px] text-ink-soft">{h}</span>
                  <span className="font-mono text-[10px] text-concrete">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
          <div className="hairline-t" />
        </div>
      </section>
    </main>
  );
}
