import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { SITE } from "@/lib/site-config";
import { INTERIOR_SITE, INTERIOR_NAV_LINKS } from "@/lib/interior-config";
import { RAJASTHAN_PAVILION } from "@/lib/rajasthan-pavilion";

export const metadata: Metadata = {
  title: { absolute: `${RAJASTHAN_PAVILION.title} | Raj Aakar | ${INTERIOR_SITE.organizerShort}` },
  description: RAJASTHAN_PAVILION.subtitle,
  alternates: {
    canonical: `${SITE.url}/interior-design/rajasthan-pavilion`,
  },
};

export default function RajasthanPavilionPage() {
  return (
    <>
      <Header navLinks={INTERIOR_NAV_LINKS} />
      <main className="border-b border-gold/20 px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Design Reference
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            {RAJASTHAN_PAVILION.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance font-display text-lg italic text-forest">
            {RAJASTHAN_PAVILION.subtitle}
          </p>
          <a
            href={RAJASTHAN_PAVILION.pdfUrl}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream shadow-lg shadow-forest/20 transition hover:bg-forest-light"
          >
            {RAJASTHAN_PAVILION.pdfLabel}
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-gold/20">
          <table className="w-full text-left text-sm">
            <tbody>
              {RAJASTHAN_PAVILION.facts.map((fact) => (
                <tr key={fact.label} className="border-b border-gold/20 last:border-b-0">
                  <th className="w-40 bg-cream/60 px-4 py-3 align-top font-semibold text-forest">
                    {fact.label}
                  </th>
                  <td className="px-4 py-3 text-ink/80">{fact.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="font-display text-xl font-bold text-forest sm:text-2xl">
            {RAJASTHAN_PAVILION.vision.heading}
          </h2>
          <div className="mt-4 space-y-4">
            {RAJASTHAN_PAVILION.vision.paragraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink/80">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="font-display text-xl font-bold text-forest sm:text-2xl">
            {RAJASTHAN_PAVILION.zones.heading}
          </h2>
          <div className="mt-6 space-y-6">
            {RAJASTHAN_PAVILION.zones.items.map((zone) => (
              <div key={zone.name}>
                <h3 className="font-display text-base font-semibold text-ink">{zone.name}</h3>
                <ul className="mt-2 space-y-2">
                  {zone.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span className="text-sm leading-relaxed text-ink/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="font-display text-xl font-bold text-forest sm:text-2xl">
            {RAJASTHAN_PAVILION.framework.heading}
          </h2>
          <ol className="mt-4 space-y-3">
            {RAJASTHAN_PAVILION.framework.items.map((item, i) => (
              <li key={item.title} className="flex gap-3">
                <span className="font-display text-sm font-bold text-gold">{i + 1}.</span>
                <p className="text-sm leading-relaxed text-ink/80">
                  <span className="font-semibold text-ink">{item.title}:</span> {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="font-display text-xl font-bold text-forest sm:text-2xl">
            {RAJASTHAN_PAVILION.guidelines.heading}
          </h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-gold/20">
            <table className="w-full text-left text-sm">
              <tbody>
                {RAJASTHAN_PAVILION.guidelines.rows.map((row) => (
                  <tr key={row.label} className="border-b border-gold/20 last:border-b-0">
                    <th className="w-40 bg-cream/60 px-4 py-3 align-top font-semibold text-forest">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-ink/80">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm italic text-ink/60">{RAJASTHAN_PAVILION.guidelines.note}</p>
        </div>
      </main>
      <Footer
        meta={`Submission Deadline: ${INTERIOR_SITE.submissionDeadlineLabel}`}
      />
    </>
  );
}
