"use client";

import Link from "next/link";

import { Reveal } from "@/components/site/Reveal";
import { PRODUCTS } from "@/lib/data";

/* Mini technical glyphs per product — line drawings, not photos */
function ProductGlyph({ slug }: { slug: string }) {
  const stroke = "currentColor";
  if (slug === "compound-wall")
    return (
      <svg viewBox="0 0 120 72" className="h-full w-full" fill="none" aria-hidden>
        <path d="M10 66 V18 M110 66 V18" stroke={stroke} strokeWidth="2" />
        <rect x="22" y="30" width="38" height="36" stroke={stroke} strokeWidth="1.5" />
        <rect x="60" y="30" width="38" height="36" stroke={stroke} strokeWidth="1.5" />
        <path d="M10 66 h100" stroke={stroke} strokeWidth="1" />
        <path d="M22 30 l-6 -6 M60 30 l-6 -6 M98 30 l-6 -6" stroke={stroke} strokeWidth="0.75" opacity="0.5" />
      </svg>
    );
  if (slug === "u-drain")
    return (
      <svg viewBox="0 0 120 72" className="h-full w-full" fill="none" aria-hidden>
        <path d="M35 14 v34 a10 10 0 0 0 10 10 h30 a10 10 0 0 0 10 -10 V14" stroke={stroke} strokeWidth="2" />
        <path d="M28 14 h14 M78 14 h14" stroke={stroke} strokeWidth="2" />
        <path d="M35 24 h50" stroke={stroke} strokeWidth="0.75" strokeDasharray="3 3" opacity="0.5" />
      </svg>
    );
  return (
    <svg viewBox="0 0 120 72" className="h-full w-full" fill="none" aria-hidden>
      <path d="M30 14 v40 h60" stroke={stroke} strokeWidth="2" />
      <path d="M30 54 l-12 12 M90 54 l12 12" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <path d="M30 26 h60" stroke={stroke} strokeWidth="0.75" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="86" cy="20" r="3" stroke={stroke} strokeWidth="1" />
    </svg>
  );
}

export default function ProductsIndex() {
  return (
    <section className="hairline-b">
      <div className="sheet py-24 md:py-32">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label-mono mb-6">02 / The range</p>
              <h2 className="font-display text-[clamp(2rem,4.6vw,4rem)]">
                Three systems<span className="text-red">.</span>
                <br />
                One standard<span className="text-red">.</span>
              </h2>
            </div>
            <Link href="/products" className="link-sweep font-mono text-[11px] uppercase tracking-[0.22em]">
              Full catalogue
            </Link>
          </div>
        </Reveal>

        <ul>
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <li className="hairline-t group">
                <Link
                  href={`/products/${p.slug}`}
                  className="grid grid-cols-12 items-center gap-4 py-8 md:py-10"
                >
                  <span className="col-span-2 font-mono text-[11px] tracking-[0.22em] text-red md:col-span-1">
                    {p.index}
                  </span>
                  <span className="col-span-10 md:col-span-5">
                    <span className="font-display block text-[clamp(1.4rem,3vw,2.4rem)] transition-colors duration-300 group-hover:text-red">
                      {p.name}
                    </span>
                    <span className="mt-2 hidden flex-wrap gap-2 md:flex">
                      {p.chips.map((c) => (
                        <span key={c} className="chip">
                          {c}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="col-span-8 hidden text-sm leading-relaxed text-ink-soft md:col-span-4 md:block">
                    {p.summary.split(". ")[0]}.
                  </span>
                  <span className="col-span-2 flex justify-end">
                    <span className="h-16 w-24 text-ink/35 transition-all duration-300 group-hover:text-red md:h-20 md:w-32">
                      <ProductGlyph slug={p.slug} />
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="col-span-12 h-px origin-left scale-x-0 bg-red transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
        <div className="hairline-t" />
      </div>
    </section>
  );
}
