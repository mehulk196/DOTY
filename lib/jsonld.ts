import { SITE } from "@/lib/site-config";
import { FAQS } from "@/lib/faq";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.organizer,
    alternateName: SITE.organizerShort,
    url: SITE.url,
  };
}

export function getEventJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: SITE.name,
    description: `${SITE.organizer} presents ${SITE.name} — a ${SITE.occasion} competition for fashion, textile & design students across Rajasthan.`,
    startDate: SITE.eventDateISO,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: [`${SITE.url}/opengraph-image`],
    location: {
      "@type": "Place",
      name: SITE.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: SITE.organizer,
      url: SITE.url,
    },
    url: SITE.url,
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function jsonLdScriptProps(data: unknown) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    },
  } as const;
}
