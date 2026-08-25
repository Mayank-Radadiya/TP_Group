"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { Reveal, KineticHeadline } from "@/components/site/Reveal";
import { BRANCH_STATES, COMPANY, PHONES } from "@/lib/data";

const PRODUCT_OPTIONS = [
  "75mm Compound Wall",
  "Precast 'U' Drain",
  "Retaining Wall",
  "Other precast product",
] as const;

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState<string>(PRODUCT_OPTIONS[0]);
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Name and phone are required.");
      return;
    }
    const subject = encodeURIComponent(`Enquiry — ${product} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nProduct: ${product}\n\n${message}`
    );
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  };

  const field =
    "w-full border border-ink/20 bg-transparent px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-concrete focus:border-red";

  return (
    <main className="overflow-x-clip pt-28 md:pt-36">
      {/* header */}
      <section className="hairline-b">
        <div className="sheet pb-14 md:pb-20">
          <Reveal>
            <p className="label-mono mb-8 flex items-center gap-3">
              <span className="inline-block h-2 w-2 bg-red" aria-hidden />
              Contact
            </p>
          </Reveal>
          <h1 className="font-display text-[clamp(3rem,9vw,8rem)]">
            <KineticHeadline text="Start your" />{" "}
            <span className="text-red">
              <KineticHeadline text="wall." delay={0.15} />
            </span>
          </h1>
        </div>
      </section>

      <section className="hairline-b">
        <div className="sheet grid gap-14 py-16 md:py-24 lg:grid-cols-12">
          {/* details */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label-mono mb-6">Direct lines</p>
              <ul className="mb-12 space-y-4">
                {PHONES.map((p) => (
                  <li key={p.value} className="hairline-b flex items-baseline justify-between pb-4">
                    <a href={p.href} className="link-sweep font-display text-2xl md:text-3xl">
                      {p.value}
                    </a>
                    <span className="label-mono !tracking-[0.14em]">{p.label}</span>
                  </li>
                ))}
                <li className="hairline-b flex items-baseline justify-between pb-4">
                  <a href={`mailto:${COMPANY.email}`} className="link-sweep font-mono text-sm tracking-[0.06em]">
                    {COMPANY.email}
                  </a>
                  <span className="label-mono !tracking-[0.14em]">Email</span>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="label-mono mb-6">Head office</p>
              <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
                {COMPANY.headOffice}
              </p>
              <div className="relative mt-8 border border-ink/15">
                <Image
                  src="/map.png"
                  alt="Map — Tirupati Precast Group, Sonnenahalli Village, north Bengaluru"
                  width={987}
                  height={866}
                  className="h-auto w-full"
                />
                <span className="absolute bottom-3 left-3 bg-paper/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em]">
                  North Bengaluru · Byatha
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="label-mono mb-4 mt-12">Branch states</p>
              <p className="text-sm leading-relaxed text-ink-soft">
                {BRANCH_STATES.join(" · ")} — 16 branches
              </p>
              <div className="mt-6 flex gap-6">
                {COMPANY.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-sweep font-mono text-[11px] uppercase tracking-[0.22em]"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form onSubmit={submit} className="border border-ink/15 p-6 md:p-10" noValidate>
                <p className="label-mono mb-8">Enquiry — replies from the head office</p>
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="block">
                    <span className="label-mono mb-2 block">Name *</span>
                    <input
                      className={field}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </label>
                  <label className="block">
                    <span className="label-mono mb-2 block">Phone *</span>
                    <input
                      className={field}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                    />
                  </label>
                </div>
                <div className="mt-6">
                  <span className="label-mono mb-2 block">Product</span>
                  <div className="grid grid-cols-2 gap-px bg-ink/10">
                    {PRODUCT_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setProduct(opt)}
                        aria-pressed={product === opt}
                        className={`p-4 text-left font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                          product === opt
                            ? "bg-ink text-paper"
                            : "bg-paper text-ink-soft hover:bg-paper-dim"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <label className="mt-6 block">
                  <span className="label-mono mb-2 block">Site &amp; requirement</span>
                  <textarea
                    className={`${field} min-h-32 resize-y`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Location, running metres, height, timeline…"
                  />
                </label>
                <button type="submit" className="btn btn-ink mt-8 w-full justify-center md:w-auto">
                  Send enquiry
                  <span aria-hidden>→</span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
