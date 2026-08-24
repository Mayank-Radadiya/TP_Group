import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    verb: "CAST",
    line: "Panels poured and cured in controlled plant conditions.",
  },
  {
    n: "02",
    verb: "CURE",
    line: "Strength develops off-site — no weather delays, no site curing time.",
  },
  {
    n: "03",
    verb: "HAUL",
    line: "Finished panels trucked to your plot on schedule.",
  },
  {
    n: "04",
    verb: "ERECT",
    line: "Crane-set and bolted in days, not months of masonry.",
  },
];

const Process = () => {
  return (
    <section className="border-t hairline">
      <div className="mx-auto w-full max-w-7xl px-6">
        <header className="flex items-baseline justify-between py-4">
          <h2 className="label-mono">03 / How We Work</h2>
          <p className="label-mono">Plant to Plot</p>
        </header>

        <ol className="grid gap-12 py-16 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, index) => (
            <li key={step.n}>
              <Reveal
                delay={index * 0.08}
                className="relative h-full border-l hairline pl-6 lg:border-l-0 lg:pl-0"
              >
                {index < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-full top-8 hidden w-full border-t hairline lg:block"
                  />
                )}
                <p className="label-mono">{step.n}</p>
                <h3 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink">
                  {step.verb}
                </h3>
                <p className="mt-2 max-w-[36ch] font-sans text-sm leading-relaxed text-concrete">
                  {step.line}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
