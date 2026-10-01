import type { Metadata } from "next";
import InteriorLanding from "@/app/components/InteriorLanding";
import { SITE } from "@/lib/site-config";
import { INTERIOR_SITE } from "@/lib/interior-config";

const description = `${INTERIOR_SITE.organizer} presents ${INTERIOR_SITE.fullName}, in association with ${INTERIOR_SITE.associatedWith} — a Rajasthan-level design competition for Architecture & Interior Design students. ${INTERIOR_SITE.headline}`;

export const metadata: Metadata = {
  title: { absolute: `${INTERIOR_SITE.fullName} | ${INTERIOR_SITE.organizerShort}` },
  description,
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
