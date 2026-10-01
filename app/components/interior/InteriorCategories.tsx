import type { ReactNode } from "react";
import { INTERIOR_CATEGORIES } from "@/lib/interior-config";

const ICONS: Record<string, ReactNode> = {
  Architecture: (
    <path
      d="M4 20h16M6 20V8l6-4 6 4v12M10 20v-6h4v6M9 11h.01M15 11h.01"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Interior Design": (
    <path
      d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M3 10h18v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6ZM6 18v2M18 18v2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function InteriorCategories() {
  return (
    <section
      id="categories"
      className="border-b border-gold/20 bg-cream-dark/60 px-6 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Compete in
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Two Categories, One Pavilion
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {INTERIOR_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="flex flex-col items-center rounded-2xl border border-gold/25 bg-cream px-6 py-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:py-10"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-9 w-9 text-gold sm:h-10 sm:w-10"
              >
                {ICONS[cat.title]}
              </svg>
              <h3 className="mt-4 font-display text-lg font-bold text-forest sm:mt-5 sm:text-xl">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm text-ink/65">{cat.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
