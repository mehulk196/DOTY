import PartnerLogo from "@/app/components/PartnerLogo";
import { INTERIOR_INITIATIVE, INTERIOR_SUPPORTER, INTERIOR_SITE } from "@/lib/interior-config";

export default function InteriorPresentedBand() {
  return (
    <div className="border-b border-gold/20 bg-cream-dark/50 px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto flex max-w-5xl flex-wrap items-start justify-center gap-x-10 gap-y-3 sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50 sm:text-[11px]">
            An initiative of
          </span>
          <PartnerLogo
            name={INTERIOR_INITIATIVE.name}
            logo={INTERIOR_INITIATIVE.logo}
            className="h-[54px] sm:h-[84px]"
          />
        </div>

        <div className="hidden flex-col items-center gap-1 text-center sm:flex">
          <span aria-hidden className="text-gold/60">
            &#10022;
          </span>
          <p className="font-display text-lg font-bold leading-snug text-ink sm:text-xl">
            {INTERIOR_SITE.eyebrow}
          </p>
          <span aria-hidden className="text-gold/60">
            &#10022;
          </span>
        </div>

        <div className="flex flex-col items-center gap-1 sm:items-end">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50 sm:text-[11px]">
            Supported by
          </span>
          <PartnerLogo
            name={INTERIOR_SUPPORTER.name}
            logo={INTERIOR_SUPPORTER.logo}
            className="h-[72px] sm:h-[112px]"
          />
        </div>
      </div>
    </div>
  );
}
