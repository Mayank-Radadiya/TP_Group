import Image from "next/image";
import Link from "next/link";
import { CountUp } from "./count-up";
import { Reveal } from "./reveal";

const STATS = [
  {
    value: <CountUp to={1500} suffix="+" />,
    label: "PROJECTS DELIVERED",
  },
  { value: "2014", label: "POURING SINCE" },
  { value: "ISO", label: "CERTIFIED FACILITY" },
];

const CORNER_MARKS = [
  "-top-1.5 -left-1.5 border-t-2 border-l-2",
  "-top-1.5 -right-1.5 rotate-90 border-t-2 border-l-2",
  "-bottom-1.5 -right-1.5 rotate-180 border-t-2 border-l-2",
  "-bottom-1.5 -left-1.5 -rotate-90 border-t-2 border-l-2",
];

const Hero = () => {
  return (
    <section className="relative flex min-h-[92svh] flex-col">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-end gap-10 pb-16 pt-24 lg:grid-cols-12 lg:pt-32">
          <div className="lg:col-span-7">
            <Reveal delay={0}>
              <p className="label-mono">
                TIRUPATI PRECAST CONCRETE WORKS — BENGALURU
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.95] tracking-tight text-ink">
                Poured once.
                <br />
                Standing
                <br />
                <span className="text-safety">for decades.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-prose font-sans text-base leading-relaxed text-ink/70 md:text-lg">
                Factory-cast concrete panels arrive on site finished and ready
                to erect — walls go up in days, not months, with the strength
                brick can never match.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="btn-wipe bg-ink px-8 py-4 font-mono text-xs uppercase tracking-widest text-bone"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="border border-ink px-8 py-4 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-bone"
                >
                  Get a Quote
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <figure>
                <div className="relative border border-ink p-2">
                  {CORNER_MARKS.map((mark) => (
                    <span
                      key={mark}
                      aria-hidden
                      className={`absolute h-3 w-3 border-ink ${mark}`}
                    />
                  ))}
                  <div className="relative mt-7 aspect-[4/5]">
                    <Image
                      src="/images/main.jpg"
                      alt="Precast compound wall panel installation"
                      fill
                      priority
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-x-0 -top-6 flex items-center gap-3">
                      <span className="w-full border-t border-dashed border-concrete" />
                      <span className="label-mono whitespace-nowrap text-[10px] text-concrete">
                        2400 MM
                      </span>
                    </div>
                  </div>
                </div>
                <figcaption className="label-mono mt-2">
                  FIG. 01 — PRECAST COMPOUND WALL PANEL
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 divide-y divide-ink/10 border-t hairline sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:divide-ink/10">
          {STATS.map((stat) => (
            <div key={stat.label} className="py-6">
              <p className="font-display text-4xl font-black uppercase tracking-tight text-ink md:text-5xl">
                {stat.value}
              </p>
              <p className="label-mono mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
