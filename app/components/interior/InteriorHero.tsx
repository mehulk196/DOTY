import Image from "next/image";
import { INTERIOR_SITE } from "@/lib/interior-config";
import { ArchMotif } from "@/app/components/BackgroundArt";

export default function InteriorHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-gold/20 px-6 pb-14 pt-10 sm:pb-20 sm:pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(179,135,47,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(22,50,31,0.10),transparent_40%)]"
      />
      <ArchMotif className="pointer-events-none absolute -left-6 -top-4 hidden h-64 w-56 opacity-70 sm:block" />
      <ArchMotif
        flip
        className="pointer-events-none absolute -right-6 bottom-0 hidden h-64 w-56 opacity-70 sm:block"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
          {INTERIOR_SITE.eyebrow}
        </p>
        <Image
          src="/interior/raj-aakar-logo.webp"
          alt={`${INTERIOR_SITE.fullName} — ${INTERIOR_SITE.tagline}`}
          width={1605}
          height={980}
          priority
          className="mt-4 h-auto w-full max-w-sm sm:max-w-xl"
        />
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-ink/70 sm:text-base">
          Architecture &amp; Interior Design
        </p>
        <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-ink/50 sm:text-sm">
          {INTERIOR_SITE.initiativeLine}
        </p>

        <h2 className="mt-6 font-display text-3xl font-black leading-tight text-ink sm:text-5xl">
          {INTERIOR_SITE.headline}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
          {INTERIOR_SITE.intro}
        </p>
        <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-forest sm:text-lg">
          {INTERIOR_SITE.opportunity}
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href="#register"
            className="w-full rounded-full bg-forest px-8 py-3.5 text-center text-sm font-semibold text-cream shadow-lg shadow-forest/20 transition hover:bg-forest-light sm:w-auto"
          >
            Register Now
          </a>
          <a
            href="#submission"
            className="w-full rounded-full border border-forest/30 px-8 py-3.5 text-center text-sm font-semibold text-forest transition hover:bg-forest/5 sm:w-auto"
          >
            Submission Details
          </a>
        </div>

        <dl className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-4 border-t border-gold/20 pt-6 text-left sm:mt-14 sm:grid-cols-3 sm:gap-6 sm:pt-8">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Submission Deadline
            </dt>
            <dd className="mt-1 font-display text-lg font-semibold text-ink">
              {INTERIOR_SITE.submissionDeadlineLabel}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Categories
            </dt>
            <dd className="mt-1 font-display text-lg font-semibold text-ink">
              Architecture &amp; Interior Design
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Opportunity
            </dt>
            <dd className="mt-1 font-display text-lg font-semibold text-ink">
              International Platform — IITF Delhi
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
