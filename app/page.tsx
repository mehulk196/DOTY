import Link from "next/link";
import { CottonBranch } from "@/app/components/BackgroundArt";
import { SITE } from "@/lib/site-config";

const TRACKS = [
  {
    label: "Fashion & Textile Design",
    href: "/fashion",
    variant: "solid" as const,
    icon: (
      <path d="M9 3h6l1 3-3 2v13h-2V8L8 6l1-3Z" strokeLinejoin="round" />
    ),
  },
  {
    label: "Architecture & Interior Design",
    href: "/interior-design",
    variant: "solid" as const,
    icon: (
      <path
        d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M3 10h18v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6ZM6 18v2M18 18v2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(179,135,47,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(22,50,31,0.10),transparent_40%)]"
      />
      <CottonBranch className="pointer-events-none absolute -left-6 -top-4 hidden h-64 w-56 opacity-70 sm:block" />
      <CottonBranch
        flip
        className="pointer-events-none absolute -right-6 bottom-0 hidden h-64 w-56 opacity-70 sm:block"
      />

      <div className="flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/partners/fdcr.png"
          alt={SITE.organizer}
          className="h-20 w-auto object-contain sm:h-28"
        />
      </div>

      <h1 className="mt-10 font-display text-4xl font-black leading-[0.95] text-forest sm:text-6xl">
        Designer of the Year
      </h1>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-ink/60 sm:text-base">
        by {SITE.organizer}
      </p>

      <div className="mt-14 flex w-full max-w-sm flex-col gap-4 sm:max-w-none sm:w-auto sm:flex-row sm:gap-6">
        {TRACKS.map((track) => (
          <Link
            key={track.href}
            href={track.href}
            className={
              track.variant === "solid"
                ? "inline-flex items-center justify-center gap-3 rounded-full bg-forest px-10 py-4 text-base font-semibold text-cream shadow-lg shadow-forest/20 transition hover:bg-forest-light"
                : "inline-flex items-center justify-center gap-3 rounded-full border border-forest/30 px-10 py-4 text-base font-semibold text-forest transition hover:bg-forest/5"
            }
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="h-5 w-5"
              aria-hidden
            >
              {track.icon}
            </svg>
            {track.label}
          </Link>
        ))}
      </div>
    </main>
  );
}
