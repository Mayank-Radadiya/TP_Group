"use client";

import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/data";

export default function VideoBand() {
  return (
    <section className="hairline-b">
      <div className="sheet py-24 md:py-32">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label-mono mb-6">05 / Watch it go up</p>
              <h2 className="font-display text-[clamp(2rem,4.6vw,4rem)]">
                Erection, unedited<span className="text-red">.</span>
              </h2>
            </div>
            <a
              href={COMPANY.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep font-mono text-[11px] uppercase tracking-[0.22em]"
            >
              YouTube channel
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative border border-ink/15">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/9_y5IhUpAzI"
                title="Precast compound wall installation walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="label-mono !tracking-[0.14em]">
                Compound wall · boundary wall · readymade installation
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
