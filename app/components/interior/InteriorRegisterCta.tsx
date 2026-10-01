import { INTERIOR_SITE } from "@/lib/interior-config";
import { CompassAccent } from "@/app/components/BackgroundArt";

export default function InteriorRegisterCta() {
  return (
    <section id="register" className="border-b border-gold/20 px-6 py-16 sm:py-24">
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-gold/30 bg-cream-dark/60 px-6 py-10 text-center shadow-sm sm:px-8 sm:py-14">
        <CompassAccent className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 opacity-80" />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Registrations open
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          Ready to Design Rajasthan?
        </h2>
        <p className="mt-4 text-base text-ink/70">
          Register and submit your pavilion concept for {INTERIOR_SITE.name}{" "}
          — Architecture &amp; Interior Design students across Rajasthan,
          individually or in teams.
        </p>
        <a
          href={INTERIOR_SITE.googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block whitespace-nowrap rounded-full bg-forest px-6 py-4 text-sm font-semibold text-cream shadow-lg shadow-forest/25 transition hover:bg-forest-light sm:px-10 sm:text-base"
        >
          Register via Google Form
        </a>
        <p className="mt-4 text-xs text-ink/50">
          Last date of submission: {INTERIOR_SITE.submissionDeadlineLabel}.
        </p>
      </div>
    </section>
  );
}
