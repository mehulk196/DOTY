import { SITE } from "@/lib/site-config";
import { ThreadSwirl } from "@/app/components/BackgroundArt";

export default function RegisterCta() {
  return (
    <section id="register" className="border-b border-gold/20 px-6 py-24">
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-gold/30 bg-cream-dark/60 px-8 py-14 text-center shadow-sm">
        <ThreadSwirl className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 opacity-80" />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Registrations open
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          Ready to Showcase Your Talent?
        </h2>
        <p className="mt-4 text-base text-ink/70">
          Submit your registration for {SITE.name} — it only takes a couple
          of minutes. Seats are limited to students from across Rajasthan.
        </p>
        <a
          href={SITE.googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-forest px-10 py-4 text-base font-semibold text-cream shadow-lg shadow-forest/25 transition hover:bg-forest-light"
        >
          Register via Google Form
        </a>
        <p className="mt-4 text-xs text-ink/50">
          Deadline and full terms will be shared on confirmation. Queries:{" "}
          <a
            href={`mailto:${SITE.contactEmail}`}
            className="font-semibold text-forest underline underline-offset-2"
          >
            {SITE.contactEmail}
          </a>
        </p>
      </div>
    </section>
  );
}
