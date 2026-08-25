"use client";

import PanelImage from "@/components/site/PanelImage";
import { Reveal } from "@/components/site/Reveal";
import { PROCESS } from "@/lib/data";

export default function ProcessSection() {
  return (
    <section className="hairline-b">
      <div className="sheet grid gap-14 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="label-mono mb-6">03 / The method</p>
              <h2 className="font-display text-[clamp(2rem,4.6vw,4rem)]">
                Cast once<span className="text-red">.</span>
                <br />
                Stand for decades<span className="text-red">.</span>
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft">
                Precast moves quality control from the building site to the
                factory floor. Four steps, each measurable, each repeatable —
                the reason a Tirupati wall goes up in days and stays up for
                decades.
              </p>
            </Reveal>
            <div className="mt-12">
              <PanelImage
                src="/images/2.jpg"
                alt="Crane lifting a stone-textured precast panel during erection"
                caption="Crane erection · one-piece design panel"
                slats={2}
              />
            </div>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {PROCESS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.05}>
              <li className="hairline-t group grid grid-cols-12 gap-4 py-10 transition-colors md:py-12">
                <span className="col-span-3 font-display text-3xl text-ink/20 transition-colors duration-300 group-hover:text-red md:col-span-2 md:text-5xl">
                  {step.n}
                </span>
                <div className="col-span-9 md:col-span-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl md:text-3xl">{step.title}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-concrete">
                      {step.spec}
                    </span>
                  </div>
                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
          <div className="hairline-t" />
        </ol>
      </div>
    </section>
  );
}
