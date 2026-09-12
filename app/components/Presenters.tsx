import { PRESENTERS } from "@/lib/site-config";
import PartnerLogo from "@/app/components/PartnerLogo";

export default function Presenters() {
  return (
    <div className="border-b border-gold/20 bg-cream-dark/50 px-4 py-3 sm:px-6 sm:py-5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-10 sm:gap-y-4">
        <span className="w-full text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50 sm:w-auto sm:text-[11px] sm:tracking-[0.25em]">
          Presented by
        </span>
        {PRESENTERS.map((presenter) => (
          <PartnerLogo
            key={presenter.name}
            name={presenter.name}
            logo={presenter.logo}
            className="h-9 sm:h-16"
          />
        ))}
      </div>
    </div>
  );
}
