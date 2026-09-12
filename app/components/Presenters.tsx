import { PRESENTERS } from "@/lib/site-config";
import PartnerLogo from "@/app/components/PartnerLogo";

export default function Presenters() {
  return (
    <div className="border-b border-gold/20 bg-cream-dark/50 px-6 py-4">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/50">
          Presented by
        </span>
        {PRESENTERS.map((presenter) => (
          <PartnerLogo
            key={presenter.name}
            name={presenter.name}
            logo={presenter.logo}
            className="h-10 w-28"
          />
        ))}
      </div>
    </div>
  );
}
