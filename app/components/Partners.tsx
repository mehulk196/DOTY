import { PARTNERS } from "@/lib/site-config";

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

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {PARTNERS.map((partner) => (
            <span
              key={partner}
              className="rounded-full border border-forest/20 bg-cream-dark/60 px-6 py-3 text-sm font-semibold text-forest"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
