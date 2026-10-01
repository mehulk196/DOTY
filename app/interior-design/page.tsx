import type { Metadata } from "next";
import FashionLanding from "@/app/components/FashionLanding";
import { SITE } from "@/lib/site-config";

// TEMPORARY: Interior Design has no content of its own yet, so this route
// reuses the Fashion page verbatim as a placeholder. Replace
// <FashionLanding /> below with real Interior Design content/components
// once materials are provided, and drop the noindex + canonical override.
export const metadata: Metadata = {
  title: { absolute: `${SITE.name} | ${SITE.organizerShort}` },
  alternates: {
    canonical: `${SITE.url}/fashion`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function InteriorDesignPage() {
  return <FashionLanding />;
}
