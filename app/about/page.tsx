"use client";

import PanelImage from "@/components/site/PanelImage";
import { Reveal, KineticHeadline } from "@/components/site/Reveal";
import { COMPANY, STATS, WHY_US } from "@/lib/data";

const TECH = [
  {
    n: "01",
    title: "Pre-stressed technique",
    body: "Factory-manufactured members with eccentric pre-stressing counterbalancing dead load — long economical spans, high impact and fatigue resistance, tested before use.",
  },
  {
    n: "02",
    title: "Japanese process, Bharat build",
    body: "JIS self-compacting concrete for retaining walls, advanced Japanese technology on Indian production lines — Make-in-Bharat products without process compromise.",
  },
  {
    n: "03",
    title: "Controlled curing & cube tests",
    body: "A 21-day controlled cure on the pre-stressed system, verified in our in-house concrete cube test lab before any unit ships.",
  },
  {
    n: "04",
    title: "Reusability by design",
    body: "Walls are portable: 100% of panels and 90% of columns come back for reuse. Precast that outlives its first site.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-clip pt-28 md:pt-36">
      {/* header */}
      <section className="hairline-b">
        <div className="sheet pb-16 md:pb-24">
          <Reveal>
            <p className="label-mono mb-8 flex items-center gap-3">
              <span className="inline-block h-2 w-2 bg-red" aria-hidden />
              About — {COMPANY.group}
            </p>
          </Reveal>
          <h1 className="font-display text-[clamp(3rem,9vw,8rem)]">
            <KineticHeadline text="Synonym to" />{" "}
            <span className="text-red">
              <KineticHeadline text="strength," delay={0.1} />
            </span>
            <br />
            <KineticHeadline text="quality, service." delay={0.25} />
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              {COMPANY.descriptor} Two decades of factory discipline from our
              Bengaluru plant, delivered through 16 branches across India.
            </p>
          </Reveal>
        </div>
      </section>

      {/* story */}
      <section className="hairline-b">
        <div className="sheet grid gap-14 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <PanelImage
              src="/images/3.jpg"
              alt="Two engineers inspecting a stone-finish precast wall"
              caption="Pre-handover inspection · design-finish panels"
              slats={2}
            />
          </div>
          <div className="lg:col-span-7 lg:pt-8">
            <Reveal>
              <p className="font-display text-[clamp(1.4rem,2.6vw,2.1rem)] leading-snug">
                &ldquo;{COMPANY.vision}&rdquo;
              </p>
              <p className="label-mono mt-4">— Vision, as published</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-12 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                &ldquo;{COMPANY.mission}&rdquo;
              </p>
              <p className="label-mono mt-4">— Mission, as published</p>
            </Reveal>

            <div className="mt-16 grid grid-cols-2 gap-px bg-ink/10 md:grid-cols-4">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06} className="bg-paper">
                  <div className="flex h-full flex-col justify-between gap-6 p-5">
                    <span className="font-display text-3xl md:text-4xl">
                      {"prefix" in s ? s.prefix : ""}
                      {s.value}
                      {s.suffix}
                    </span>
                    <span className="label-mono !tracking-[0.12em] !leading-relaxed">{s.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* why us */}
      <section className="hairline-b">
        <div className="sheet py-20 md:py-28">
          <Reveal>
            <p className="label-mono mb-12">Why us — as published</p>
          </Reveal>
          <ul className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((w, i) => (
              <Reveal key={w.n} delay={Math.min(i * 0.04, 0.28)} className="bg-paper">
                <li className="group flex h-full flex-col justify-between gap-10 p-6 transition-colors duration-300 hover:bg-ink">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-red">{w.n}</span>
                  <div>
                    <h2 className="font-display text-xl transition-colors group-hover:text-paper md:text-2xl">
                      {w.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft transition-colors group-hover:text-paper/60">
                      {w.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* technology */}
      <section className="dark-band grain relative bg-ink text-paper">
        <div className="sheet relative py-20 md:py-28">
          <Reveal>
            <p className="label-mono !text-paper/50 mb-12">The technology</p>
          </Reveal>
          <ol>
            {TECH.map((t, i) => (
              <Reveal key={t.n} delay={i * 0.05}>
                <li className="hairline-t group grid grid-cols-12 gap-4 py-8 md:py-10">
                  <span className="col-span-2 font-mono text-[11px] tracking-[0.22em] text-red md:col-span-1">
                    {t.n}
                  </span>
                  <h2 className="col-span-10 font-display text-xl md:col-span-4 md:text-2xl">
                    {t.title}
                  </h2>
                  <p className="col-span-12 text-sm leading-relaxed text-paper/60 md:col-span-7 md:text-[15px]">
                    {t.body}
                  </p>
                </li>
              </Reveal>
            ))}
            <div className="hairline-t" />
          </ol>
        </div>
      </section>
    </main>
  );
}
