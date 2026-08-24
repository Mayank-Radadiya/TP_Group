import Link from "next/link";

const CTABand = () => {
  return (
    <section className="bg-ink py-24 text-bone">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.95] tracking-tight">
          Let&rsquo;s build your{" "}
          <span className="text-safety">perimeter.</span>
        </h2>
        <p className="mt-8 max-w-prose font-sans text-base leading-relaxed text-bone/70 md:text-lg">
          Compound walls, structural panels, decorative concrete — cast at our
          Yelahanka plant and erected on your schedule. Tell us what you are
          enclosing.
        </p>

        <div className="mt-12 flex flex-col gap-8 border-t border-bone/10 pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 font-mono text-sm uppercase tracking-widest sm:flex-row sm:items-baseline sm:gap-10">
            <a
              href="tel:+918884088878"
              className="transition-colors hover:text-safety"
            >
              +91 88840 88878
            </a>
            <a
              href="mailto:tirupatiprecast27@gmail.com"
              className="break-all normal-case transition-colors hover:text-safety"
            >
              tirupatiprecast27@gmail.com
            </a>
          </div>
          <Link
            href="/contact"
            className="w-fit bg-safety px-8 py-4 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-bone hover:text-ink"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
