import { SITE } from "@/lib/site-config";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-gold/20 px-6 pb-20 pt-16 sm:pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(179,135,47,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(22,50,31,0.10),transparent_40%)]"
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

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-ink/60">
          {SITE.organizer} presents
        </p>
        <h2 className="mt-3 font-display text-5xl font-black leading-[0.95] text-forest sm:text-7xl">
          Designer
          <br className="sm:hidden" /> of the Year
        </h2>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-ink/70 sm:text-base">
          For Fashion, Textile &amp; Design Students
        </p>

        <p className="mt-6 font-script text-2xl text-gold sm:text-3xl">
          {SITE.tagline}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#register"
            className="rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-forest/20 transition hover:bg-forest-light"
          >
            Register Now
          </a>
          <a
            href="#details"
            className="rounded-full border border-forest/30 px-8 py-3.5 text-sm font-semibold text-forest transition hover:bg-forest/5"
          >
            Event Details
          </a>
        </div>

        <dl className="mt-14 grid w-full max-w-2xl grid-cols-1 gap-6 border-t border-gold/20 pt-8 text-left sm:grid-cols-3">
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
