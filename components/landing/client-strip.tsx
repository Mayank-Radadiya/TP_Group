import Image from "next/image";
import { Reveal } from "./reveal";

const LOGOS = Array.from({ length: 13 }, (_, i) => `/images/logo${i + 1}.jpg`);

const ClientStrip = () => {
  return (
    <section className="border-t hairline py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <p className="label-mono">Trusted By</p>
        <Reveal className="mt-8">
          <ul className="flex flex-wrap items-center gap-x-12 gap-y-8">
            {LOGOS.map((src, i) => (
              <li key={src}>
                <Image
                  src={src}
                  alt={`Client logo ${i + 1}`}
                  width={120}
                  height={40}
                  className="h-10 w-auto grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default ClientStrip;
