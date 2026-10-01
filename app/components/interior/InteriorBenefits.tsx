import { INTERIOR_BENEFITS } from "@/lib/interior-config";

export default function InteriorBenefits() {
  return (
    <section id="awards" className="border-b border-gold/20 px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gold/50" />
          <h2 className="font-display text-3xl font-black uppercase tracking-wide text-gold sm:text-4xl">
            Win Awards
          </h2>
          <span className="h-px w-12 bg-gold/50" />
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 text-left sm:grid-cols-2">
          {INTERIOR_BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
              <span className="text-base text-ink/80">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
