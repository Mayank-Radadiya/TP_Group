import Image from "next/image";
import Link from "next/link";
import { ABOUT_COPY } from "@/constants";
import { CountUp } from "./count-up";
import { Reveal } from "./reveal";

const CORNER_MARKS = [
  "-top-1.5 -left-1.5 border-t-2 border-l-2",
  "-top-1.5 -right-1.5 rotate-90 border-t-2 border-l-2",
  "-bottom-1.5 -right-1.5 rotate-180 border-t-2 border-l-2",
  "-bottom-1.5 -left-1.5 -rotate-90 border-t-2 border-l-2",
];

const About = () => {
  return (
    <section className="border-t hairline">
      <div className="mx-auto w-full max-w-7xl px-6">
        <header className="flex items-baseline justify-between py-4">
          <h2 className="label-mono">01 / Who We Are</h2>
          <p className="label-mono">Precision, Poured</p>
        </header>

        <div className="grid gap-10 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <figure>
                  <div className="relative border border-ink p-2">
                    {CORNER_MARKS.map((mark) => (
                      <span
                        key={mark}
                        aria-hidden
                        className={`absolute h-3 w-3 border-ink ${mark}`}
                      />
                    ))}
                    <div className="relative mt-7 aspect-[4/3]">
                      <Image
                        src="/images/people.avif"
                        alt="Tirupati Precast crew at the Yelahanka plant"
                        fill
                        sizes="(min-width: 1024px) 38vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <figcaption className="label-mono mt-2">
                    THE CREW — YELAHANKA PLANT
                  </figcaption>
                </figure>
              </Reveal>
              <p
                aria-hidden
                className="-mt-8 select-none font-display text-[10rem] font-black leading-none text-transparent"
                style={{ WebkitTextStroke: "1px var(--concrete)" }}
              >
                01
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              {ABOUT_COPY.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="mt-6 max-w-[52ch] font-sans text-base leading-relaxed text-ink/70 first:mt-0 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t hairline pt-8">
                <div>
                  <p className="font-display text-4xl font-black uppercase tracking-tight text-ink md:text-5xl">
                    <CountUp to={1500} suffix="+" />
                  </p>
                  <p className="label-mono mt-2">Projects Delivered</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-black uppercase tracking-tight text-ink md:text-5xl">
                    2014
                  </p>
                  <p className="label-mono mt-2">Pouring Since</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <Link
                href="/about"
                className="mt-10 inline-block border border-ink px-8 py-4 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-bone"
              >
                More About Us →
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
