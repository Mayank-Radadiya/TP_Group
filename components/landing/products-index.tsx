"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Reveal } from "./reveal";

const PRODUCTS = [
  {
    id: "01",
    title: "Compound Walls",
    img: "/images/9.jpg",
    desc: "Ready-to-erect perimeter panels that take a site from bare mud to fully secured in days.",
    alt: "Precast compound wall panels installed along a site boundary",
  },
  {
    id: "02",
    title: "Structural Elements",
    img: "/images/11.jpg",
    desc: "Columns, beams and slabs cast under plant control — dimensionally true and load-ready on arrival.",
    alt: "Precast structural concrete elements stacked at the plant",
  },
  {
    id: "03",
    title: "Decorative Concrete",
    img: "/images/12.jpg",
    desc: "Facade cladding and landscape pieces with the texture poured in — no paint, no upkeep.",
    alt: "Decorative precast concrete facade piece",
  },
];

const ProductsIndex = () => {
  const [active, setActive] = useState(0);
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="border-t hairline">
      <div className="mx-auto w-full max-w-7xl px-6">
        <header className="flex items-baseline justify-between py-4">
          <h2 className="label-mono">02 / What We Make</h2>
          <p className="label-mono">Index of Products</p>
        </header>

        <div className="grid gap-10 py-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div role="list">
                {PRODUCTS.map((product, index) => {
                  const expanded = openId === product.id;
                  return (
                    <div
                      key={product.id}
                      role="listitem"
                      className="group border-t hairline last:border-b"
                    >
                      <button
                        type="button"
                        aria-expanded={expanded}
                        onClick={() => {
                          setActive(index);
                          setOpenId(expanded ? null : product.id);
                        }}
                        className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-8 text-left transition-colors duration-300 focus-visible:bg-ink focus-visible:text-bone group-focus-within:bg-ink group-focus-within:text-bone group-hover:bg-ink group-hover:text-bone"
                      >
                        <span className="font-mono text-xs tracking-[0.2em] text-concrete transition-colors duration-300 group-focus-within:text-bone/60 group-hover:text-bone/60">
                          {product.id}
                        </span>
                        <span className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight lg:text-6xl">
                          {product.title}
                        </span>
                        <ArrowUpRight
                          aria-hidden
                          className="hidden h-8 w-8 shrink-0 text-current transition-colors duration-300 group-focus-within:text-safety group-hover:text-safety lg:block"
                        />
                        <ChevronDown
                          aria-hidden
                          className={`h-6 w-6 shrink-0 text-current transition-transform duration-300 lg:hidden ${
                            expanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {expanded && (
                        <div className="px-6 pb-8 lg:hidden">
                          <div className="relative aspect-[4/3] border border-ink">
                            <Image
                              src={product.img}
                              alt={product.alt}
                              fill
                              sizes="100vw"
                              className="object-cover"
                            />
                          </div>
                          <p className="mt-4 max-w-prose font-sans text-base leading-relaxed text-ink/70">
                            {product.desc}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="lg:sticky lg:top-32">
              <Reveal delay={0.1}>
                <figure>
                  <div className="relative aspect-[4/3] border border-ink p-2">
                    <div className="relative h-full w-full overflow-hidden">
                      {PRODUCTS.map((product, index) => (
                        <Image
                          key={product.id}
                          src={product.img}
                          alt={index === active ? product.alt : ""}
                          fill
                          sizes="(min-width: 1024px) 38vw"
                          className={`object-cover transition-opacity duration-500 ${
                            index === active ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <figcaption className="label-mono mt-2">
                    FIG. {PRODUCTS[active].id} — {PRODUCTS[active].title}
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>

        <Link
          href="/products"
          className="block w-full border-t hairline px-6 py-6 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:text-safety focus-visible:text-safety"
        >
          View All Products →
        </Link>
      </div>
    </section>
  );
};

export default ProductsIndex;
