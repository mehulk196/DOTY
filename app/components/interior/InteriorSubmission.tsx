import {
  INTERIOR_SITE,
  SUBMISSION_ITEMS,
  THEME_PILLARS,
  ELIGIBLE_DISCIPLINES,
} from "@/lib/interior-config";

export default function InteriorSubmission() {
  return (
    <section
      id="submission"
      className="border-b border-gold/20 bg-forest px-6 py-14 text-cream sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            Get ready
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            What to Submit
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-14 sm:grid-cols-3 sm:gap-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
              Submit your pavilion concept online with
            </h3>
            <ul className="mt-4 space-y-2.5 text-left">
              {SUBMISSION_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-light" />
                  <span className="text-sm text-cream/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            {THEME_PILLARS.map((pillar, i) => (
              <div key={pillar} className="flex flex-col items-center">
                <span className="font-display text-lg font-bold tracking-wide text-gold-light">
                  {pillar}
                </span>
                {i < THEME_PILLARS.length - 1 && (
                  <span className="my-2 text-gold-light/60" aria-hidden>
                    +
                  </span>
                )}
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
              Who can participate?
            </h3>
            <p className="mt-4 text-left text-sm text-cream/85">
              Students from colleges and universities across Rajasthan
              studying:
            </p>
            <ul className="mt-3 space-y-2.5 text-left">
              {ELIGIBLE_DISCIPLINES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-light" />
                  <span className="text-sm text-cream/85">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-left text-sm font-semibold text-gold-light">
              Individual or Team Participation
            </p>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center font-display text-2xl italic text-gold-light sm:mt-16">
          {INTERIOR_SITE.closingTagline}
        </p>
      </div>
    </section>
  );
}
