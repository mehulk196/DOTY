import { PARTNERS } from "@/lib/site-config";
import PartnerLogo from "@/app/components/PartnerLogo";

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

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {PARTNERS.map((partner) => (
            <PartnerLogo key={partner.name} name={partner.name} logo={partner.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
