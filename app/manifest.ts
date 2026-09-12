import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.organizer}`,
    short_name: SITE.shortName,
    description: `${SITE.name}: a ${SITE.occasion} competition for fashion, textile & design students across Rajasthan, presented by ${SITE.organizerShort}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#faf6ec",
    theme_color: "#16321f",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
