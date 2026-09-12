import { SITE } from "@/lib/site-config";

const DETAILS = [
  {
    label: "Date",
    value: SITE.eventDateLabel,
    icon: (
      <path
        d="M8 2v3M16 2v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Venue",
    value: SITE.venue,
    icon: (
      <path
        d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Zm0-8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Participants",
    value: SITE.participants,
    icon: (
      <path
        d="M16 11a4 4 0 1 0-4-4M12 14c-4.4 0-8 1.8-8 4v2h11M16 14c3.3 0 6 1.6 6 3.5V19h-4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function EventDetails() {
  return (
    <section
      id="details"
      className="border-b border-gold/20 bg-forest px-6 py-20 text-cream"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            Mark your calendar
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Event Details
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {DETAILS.map((d) => (
            <div
              key={d.label}
              className="flex flex-col items-center rounded-2xl border border-cream/15 bg-cream/5 px-6 py-8 text-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-9 w-9 text-gold-light"
              >
                {d.icon}
              </svg>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                {d.label}
              </p>
              <p className="mt-2 font-display text-lg font-semibold">
                {d.value}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center font-script text-2xl text-gold-light">
          Be Part of a Movement. Be the Change.
        </p>
        <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-cream/70">
          Create &middot; Inspire &middot; Transform
        </p>
      </div>
    </section>
  );
}
