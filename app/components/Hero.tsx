import { SITE } from "@/lib/site-config";
import { CottonBranch } from "@/app/components/BackgroundArt";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-gold/20 px-6 pb-14 pt-10 sm:pb-20 sm:pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(179,135,47,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(22,50,31,0.10),transparent_40%)]"
      />
      <CottonBranch className="pointer-events-none absolute -left-6 -top-4 hidden h-64 w-56 opacity-70 sm:block" />
      <CottonBranch
        flip
        className="pointer-events-none absolute -right-6 bottom-0 hidden h-64 w-56 opacity-70 sm:block"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
          On the occasion of
        </p>
        <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-ink sm:text-6xl">
          World Cotton Day
        </h1>
        <p className="mt-1 text-sm font-semibold uppercase tracking-[0.4em] text-ink/70 sm:text-base">
          Celebration
        </p>

        <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-ink/60 sm:mt-8">
          {SITE.organizer} presents
        </p>
        <h2 className="mt-3 font-display text-5xl font-black leading-[0.95] text-forest sm:text-7xl">
          Designer
          <br className="sm:hidden" /> of the Year
        </h2>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-ink/70 sm:text-base">
          For Fashion, Textile &amp; Design Students
        </p>

        <p className="mt-6 font-display text-2xl italic text-gold sm:text-3xl">
          {SITE.tagline}
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href="#register"
            className="w-full rounded-full bg-forest px-8 py-3.5 text-center text-sm font-semibold text-cream shadow-lg shadow-forest/20 transition hover:bg-forest-light sm:w-auto"
          >
            Register Now
          </a>
          <a
            href="#details"
            className="w-full rounded-full border border-forest/30 px-8 py-3.5 text-center text-sm font-semibold text-forest transition hover:bg-forest/5 sm:w-auto"
          >
            Event Details
          </a>
        </div>

        <dl className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-4 border-t border-gold/20 pt-6 text-left sm:mt-14 sm:grid-cols-3 sm:gap-6 sm:pt-8">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Date
            </dt>
            <dd className="mt-1 font-display text-lg font-semibold text-ink">
              {SITE.eventDateLabel}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Venue
            </dt>
            <dd className="mt-1 font-display text-lg font-semibold text-ink">
              {SITE.venue}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Participants
            </dt>
            <dd className="mt-1 font-display text-lg font-semibold text-ink">
              Students from Across Rajasthan
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
