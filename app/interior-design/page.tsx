import type { Metadata } from "next";
import InteriorLanding from "@/app/components/InteriorLanding";
import { SITE } from "@/lib/site-config";
import { INTERIOR_SITE } from "@/lib/interior-config";

const description = `${INTERIOR_SITE.fullName} — ${INTERIOR_SITE.initiativeLine}, a state-level design competition for Architecture & Interior Design students. ${INTERIOR_SITE.headline}`;

export const metadata: Metadata = {
  title: { absolute: `${INTERIOR_SITE.fullName} | ${INTERIOR_SITE.organizerShort}` },
  description,
  keywords: [
    "Raj Aakar",
    "Designer of the Year",
    "DOTY",
    "FDCR",
    "RAJSICO",
    "Fashion Design Council of Rajasthan",
    "architecture competition Rajasthan",
    "interior design competition Rajasthan",
    "Rajasthan design competition students",
    "architecture student competition India",
  ],
  alternates: {
    canonical: `${SITE.url}/interior-design`,
  },
  openGraph: {
    title: `${INTERIOR_SITE.fullName} | ${INTERIOR_SITE.organizerShort}`,
    description,
    url: `${SITE.url}/interior-design`,
  },
};

export default function InteriorDesignPage() {
  return <InteriorLanding />;
}
