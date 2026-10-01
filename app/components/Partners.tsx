import { PARTNER_GROUPS } from "@/lib/site-config";
import PartnerLogo from "@/app/components/PartnerLogo";

type Partner = { name: string; logo: string };
type PartnerGroup = { label: string; partners: readonly Partner[] };

export default function Partners({
  groups = PARTNER_GROUPS,
  eyebrow = "In association with",
  heading = "Our Partners",
}: {
  groups?: readonly PartnerGroup[];
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <section id="partners" className="border-b border-gold/20 px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          {heading}
        </h2>

        <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest/70">
                {group.label}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-6 sm:gap-x-10 sm:gap-y-8">
                {group.partners.map((partner) => (
                  <PartnerLogo key={partner.name} name={partner.name} logo={partner.logo} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
