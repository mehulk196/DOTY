import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { SITE } from "@/lib/site-config";
import { INTERIOR_SITE, INTERIOR_NAV_LINKS } from "@/lib/interior-config";
import { IITF_REFERENCE, IITF_REFERENCE_SECTIONS } from "@/lib/iitf-pavilion-reference";

export const metadata: Metadata = {
  title: { absolute: `${IITF_REFERENCE.title} | Raj Aakar | ${INTERIOR_SITE.organizerShort}` },
  description: IITF_REFERENCE.purpose,
  alternates: {
    canonical: `${SITE.url}/interior-design/iitf-pavilion-reference`,
  },
};

export default function IitfPavilionReferencePage() {
  return (
    <>
      <Header navLinks={INTERIOR_NAV_LINKS} />
      <main className="border-b border-gold/20 px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Design Research
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            {IITF_REFERENCE.title}
          </h1>
          <p className="mt-3 font-display text-lg italic text-forest">
            {IITF_REFERENCE.subtitle}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-ink/70">
            {IITF_REFERENCE.purpose}
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-12">
          {IITF_REFERENCE_SECTIONS.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-bold text-forest sm:text-2xl">
                {section.heading}
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {section.links.map((link, i) => (
                  <li key={`${link.url}-${i}`}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink/80 underline decoration-gold/40 underline-offset-2 transition hover:text-forest hover:decoration-forest"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer
        meta={`Submission Deadline: ${INTERIOR_SITE.submissionDeadlineLabel}`}
      />
    </>
  );
}
