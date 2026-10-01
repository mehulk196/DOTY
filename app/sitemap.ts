import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/fashion`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // /interior-design is excluded until it has real content of its own —
    // it currently noindex-mirrors /fashion (see app/interior-design/page.tsx).
  ];
}
