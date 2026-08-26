"use client";

import CountUp from "@/components/site/CountUp";
import PanelImage from "@/components/site/PanelImage";
import { Reveal, KineticHeadline } from "@/components/site/Reveal";
import { CropMarks } from "@/components/site/CropMarks";
import { STATS } from "@/lib/data";

export default function Intro() {
  return (
    <section className="hairline-b">
      <div className="sheet grid gap-14 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="label-mono mb-8">01 / Who we are</p>
          </Reveal>
          <h2 className="font-display text-[clamp(2rem,4.6vw,4rem)] text-ink">
            <KineticHeadline text="Concrete, cast where" />
            <br />
            <KineticHeadline text="quality can still" delay={0.1} />{" "}
            <span className="text-red">
              <KineticHeadline text="be controlled." delay={0.2} />
            </span>
          </h2>
          <Reveal delay={0.15}>
            <div className="mt-10 grid max-w-2xl gap-6 text-[15px] leading-relaxed text-ink-soft md:grid-cols-2">
              <p>
                Every panel we ship is cast at our Yelahanka plant — steel
                moulds, controlled M30 mixes, a 21-day cure, in-house cube
                testing. Quality is inspected at the pour, not discovered after
                erection.
              </p>
              <p>
                From solar parks in Bidar to campuses across South India,
                Tirupati Precast runs one of the country&apos;s widest precast
                compound-wall networks: 16 branches, one manufacturing standard,
                Japanese-grade process discipline.
              </p>
            </div>
          </Reveal>

          {/* stats */}
          <div className="mt-16 grid grid-cols-2 gap-px bg-ink/10 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="bg-paper">
                <div className="relative flex h-full flex-col justify-between gap-6 p-5">
                  <CropMarks />
                  <CountUp
                    value={s.value}
                    prefix={"prefix" in s ? s.prefix : ""}
                    suffix={s.suffix}
                    className="font-display text-4xl text-ink md:text-[2.6rem]"
                  />
                  <span className="label-mono !tracking-[0.14em] !leading-relaxed">
                    {s.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:pt-24">
          <PanelImage
            src="/images/3.jpg"
            alt="Two engineers inspecting a stone-finish precast wall"
            caption="Pre-handover inspection · stone-finish panels"
            slats={2}
          />
        </div>
      </div>
    </section>
  );
}
