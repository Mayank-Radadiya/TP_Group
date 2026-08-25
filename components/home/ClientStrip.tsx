"use client";

import { Reveal } from "@/components/site/Reveal";
import { CLIENTS } from "@/lib/data";

export default function ClientStrip() {
  return (
    <section className="hairline-b">
      <div className="sheet py-16 md:py-20">
        <Reveal>
          <p className="label-mono mb-10 flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-red" aria-hidden />
            Trusted by India&apos;s largest solar, campus and infrastructure builders
          </p>
        </Reveal>
        <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {CLIENTS.map((c, i) => (
            <Reveal key={c} delay={Math.min(i * 0.02, 0.3)} y={14}>
              <li className="group flex h-14 items-center border-b border-ink/10">
                <span className="font-wide text-[13px] tracking-[0.06em] text-ink/45 transition-colors duration-300 group-hover:text-red">
                  {c}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
