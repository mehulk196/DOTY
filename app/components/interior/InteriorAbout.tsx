import { INTERIOR_SITE, EXECUTION_POINTS } from "@/lib/interior-config";
import { JaliLattice } from "@/app/components/BackgroundArt";

export default function InteriorAbout() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-gold/20 px-6 py-14 sm:py-20"
    >
      <JaliLattice className="pointer-events-none absolute inset-0 -z-10 h-full w-full text-forest/[0.05]" />
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          About the initiative
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          A Partnership Between {INTERIOR_SITE.organizerShort} and{" "}
          {INTERIOR_SITE.associatedWith}
        </h2>
        <p className="mt-6 text-balance text-base leading-relaxed text-ink/75 sm:text-lg">
          {INTERIOR_SITE.organizer} ({INTERIOR_SITE.organizerShort}) will
          execute the competition with {INTERIOR_SITE.associatedWith},
          including:
        </p>

        <ul className="mx-auto mt-6 max-w-xl space-y-3 text-left">
          {EXECUTION_POINTS.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
              <span className="text-base leading-relaxed text-ink/75">
                {point}
              </span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-ink/60">
          {INTERIOR_SITE.organizerShort} will coordinate the complete
          competition process, while the initiative involves no financial
          commitment or liability on {INTERIOR_SITE.associatedWith} or the
          Government of Rajasthan.
        </p>
      </div>
    </section>
  );
}
