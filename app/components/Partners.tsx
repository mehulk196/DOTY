import { PARTNER_GROUPS } from "@/lib/site-config";
import PartnerLogo from "@/app/components/PartnerLogo";

type Partner = { name: string; logo: string };
type PartnerGroup = { heading: string; partners: readonly Partner[] };

export default function Partners({
  groups = PARTNER_GROUPS,
}: {
  groups?: readonly PartnerGroup[];
}) {
  return (
    <section id="partners" className="border-b border-gold/20 px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl space-y-14 text-center sm:space-y-16">
        {groups.map((group) => (
          <div key={group.heading}>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              {group.heading}
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-6 sm:gap-x-10 sm:gap-y-8">
              {group.partners.map((partner) => (
                <PartnerLogo key={partner.name} name={partner.name} logo={partner.logo} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
