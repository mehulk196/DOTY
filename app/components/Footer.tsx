import { SITE } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink px-6 py-10 text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-lg font-bold text-cream">
            {SITE.shortName}
          </p>
          <p className="mt-1 text-xs">
            {SITE.organizer} ({SITE.organizerShort})
          </p>
        </div>

        <div className="text-xs">
          <p>
            {SITE.eventDateLabel} &middot; {SITE.venue}
          </p>
          <p className="mt-1">
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="underline underline-offset-2 hover:text-cream"
            >
              {SITE.contactEmail}
            </a>
          </p>
        </div>

        <p className="text-xs text-cream/50">
          &copy; {new Date().getFullYear()} {SITE.organizerShort}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
