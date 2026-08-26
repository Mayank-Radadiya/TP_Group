"use client";

import { Reveal } from "@/components/site/Reveal";
import { BRANCH_STATES, COMPANY } from "@/lib/data";

export default function NetworkBand() {
  return (
    <section className="hairline-b">
      <div className="sheet grid gap-14 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="label-mono mb-6">06 / The network</p>
            <h2 className="font-display text-[clamp(2rem,4.6vw,4rem)]">
              16 branches<span className="text-red">.</span>
              <br />
              7 states<span className="text-red">.</span>
              <br />
              One standard<span className="text-red">.</span>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft">
              National reach, local crews. Branches across South and West India
              keep transport short and erection crews close to every site.
            </p>
            <a href="/contact" className="btn btn-ghost mt-10">
              Find your branch
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-ink/15">
            {/* schedule plate header */}
            <div className="hairline-b flex items-center justify-between gap-4 px-5 py-3">
              <span className="label-mono">Schedule A — Branch network</span>
              <span className="font-mono text-[10px] tracking-[0.18em] text-red">
                {BRANCH_STATES.length.toString().padStart(2, "0")} STATES · 16 BRANCHES
              </span>
            </div>
            <ul className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
              {BRANCH_STATES.map((s, i) => (
                <Reveal key={s} delay={i * 0.05} y={12}>
                  <li className="group flex h-full items-center justify-between bg-paper p-5 transition-colors duration-300 hover:bg-ink">
                    <span className="font-wide text-sm tracking-[0.06em] text-ink transition-colors group-hover:text-paper">
                      {s}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.18em] text-concrete transition-colors group-hover:text-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                </Reveal>
              ))}
              <Reveal delay={BRANCH_STATES.length * 0.05} y={12}>
                <li className="flex h-full flex-col justify-between gap-4 bg-ink p-5 text-paper">
                  <span className="font-display text-4xl leading-none">16</span>
                  <span className="label-mono !text-paper/50 !tracking-[0.14em]">
                    Branches · HQ {COMPANY.websites[0].replace("www.", "")}
                  </span>
                </li>
              </Reveal>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
