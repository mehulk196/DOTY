import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { PARTNERS } from "@/lib/site-config";

function hasLogo(logo: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "partners", logo));
}

export default function Partners() {
  return (
    <section id="partners" className="border-b border-gold/20 px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          In association with
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          Our Partners
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {PARTNERS.map((partner) =>
            hasLogo(partner.logo) ? (
              <div
                key={partner.name}
                className="flex h-16 w-32 items-center justify-center rounded-xl border border-forest/10 bg-cream-dark/40 p-3"
                title={partner.name}
              >
                <Image
                  src={`/partners/${partner.logo}`}
                  alt={partner.name}
                  width={140}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <span
                key={partner.name}
                className="rounded-full border border-forest/20 bg-cream-dark/60 px-6 py-3 text-sm font-semibold text-forest"
              >
                {partner.name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
