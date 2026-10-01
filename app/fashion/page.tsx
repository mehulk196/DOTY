import type { Metadata } from "next";
import FashionLanding from "@/app/components/FashionLanding";
import { SITE } from "@/lib/site-config";

const description = `${SITE.organizer} presents Designer of the Year — a ${SITE.occasion} competition for fashion, textile & design students across Rajasthan. ${SITE.tagline}`;

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} | ${SITE.organizerShort}` },
  description,
  alternates: {
    canonical: `${SITE.url}/fashion`,
  },
  openGraph: {
    title: `${SITE.name} | ${SITE.organizerShort}`,
    description,
    url: `${SITE.url}/fashion`,
  },
};

export default function FashionPage() {
  return <FashionLanding />;
}
