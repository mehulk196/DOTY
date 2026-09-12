import { FAQS } from "@/lib/faq";
import { getFaqJsonLd, jsonLdScriptProps } from "@/lib/jsonld";

export default function FAQ() {
  return (
    <section id="faq" className="border-b border-gold/20 px-6 py-14 sm:py-20">
      <script {...jsonLdScriptProps(getFaqJsonLd())} />
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Good to know
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-gold/20 border-y border-gold/20">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink marker:content-none">
                {faq.question}
                <span
                  aria-hidden
                  className="shrink-0 text-xl text-gold transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-ink/70">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
