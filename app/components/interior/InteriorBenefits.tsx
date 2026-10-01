import type { ReactNode } from "react";
import { INTERIOR_BENEFITS } from "@/lib/interior-config";

const ICONS: Record<string, ReactNode> = {
  "Cash Prize": (
    <path
      d="M4 8h12v8H4zM8 12h4M16 10h4v6h-4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Raj Aakar Award": (
    <path
      d="M8 4h8v4a4 4 0 0 1-8 0V4ZM6 5H4v2a4 4 0 0 0 4 4M18 5h2v2a4 4 0 0 1-4 4M10 14v3h4v-3M8 20h8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Certificate of Recognition": (
    <path
      d="M5 4h14v12H5zM9 20l3-2 3 2-1-4H10l-1 4Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "National Level Recognition": (
    <path
      d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.9L12 16.4 6.8 19.2l1-5.9-4.3-4.1 5.9-.9L12 3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Portfolio & Industry Exposure": (
    <path
      d="M3 11 20 5l-4 15-5-6-6-1 7-6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function InteriorBenefits() {
  return (
    <section id="awards" className="border-b border-gold/20 px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gold/50" />
          <h2 className="font-display text-3xl font-black uppercase tracking-wide text-gold sm:text-4xl">
            Win Awards
          </h2>
          <span className="h-px w-12 bg-gold/50" />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-5 sm:gap-4">
          {INTERIOR_BENEFITS.map((benefit) => (
            <div key={benefit} className="flex flex-col items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-8 w-8 text-gold"
              >
                {ICONS[benefit]}
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wide text-ink/75">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
