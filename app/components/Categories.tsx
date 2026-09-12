import type { ReactNode } from "react";
import { CATEGORIES } from "@/lib/site-config";

const ICONS: Record<string, ReactNode> = {
  "Fashion Design": (
    <path d="M9 3h6l1 3-3 2v13h-2V8L8 6l1-3Z" strokeLinejoin="round" />
  ),
  "Textile Design": (
    <path
      d="M4 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0M4 8c2-3 4-3 6 0s4 3 6 0 4-3 6 0M4 16c2-3 4-3 6 0s4 3 6 0 4-3 6 0"
      strokeLinecap="round"
    />
  ),
  "Sustainable Design": (
    <path
      d="M12 21C7 21 4 17.5 4 12.5 4 8 7 4 12 3c5 1 8 5 8 9.5C20 17.5 17 21 12 21Zm0 0V11"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Creative Innovation": (
    <path
      d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6V16h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function Categories() {
  return (
    <section id="categories" className="border-b border-gold/20 bg-cream-dark/60 px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Compete in
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Four Categories, One Stage
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="flex flex-col items-center rounded-2xl border border-gold/25 bg-cream px-4 py-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:px-6 sm:py-10"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-7 w-7 text-gold sm:h-10 sm:w-10"
              >
                {ICONS[cat.title]}
              </svg>
              <h3 className="mt-3 font-display text-base font-bold text-forest sm:mt-5 sm:text-lg">
                {cat.title}
              </h3>
              <p className="mt-1.5 text-xs text-ink/65 sm:mt-2 sm:text-sm">{cat.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
