import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import { SITE } from "@/lib/site-config";
import { getOrganizationJsonLd, jsonLdScriptProps } from "@/lib/jsonld";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const description = `${SITE.organizer} presents Designer of the Year — a ${SITE.occasion} competition for fashion, textile & design students across Rajasthan. ${SITE.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.organizerShort}`,
    template: `%s | ${SITE.shortName}`,
  },
  description,
  applicationName: SITE.name,
  authors: [{ name: SITE.organizer, url: SITE.url }],
  creator: SITE.organizer,
  publisher: SITE.organizer,
  category: "Education",
  keywords: [
    "Designer of the Year",
    "DOTY",
    "FDCR",
    "Fashion Design Council of Rajasthan",
    "World Cotton Day",
    "World Cotton Day 2026",
    "fashion design competition Rajasthan",
    "textile design competition Rajasthan",
    "Jaipur fashion event",
    "fashion student competition India",
    "Rajasthan Chamber of Commerce Jaipur event",
  ],
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: `${SITE.name} | ${SITE.organizerShort}`,
    description: `Showcase your talent. Shape the future. A ${SITE.occasion} competition for fashion, textile & design students — ${SITE.eventDateLabel}, ${SITE.venue}.`,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.organizerShort}`,
    description: `Showcase your talent. Shape the future. ${SITE.eventDateLabel} at ${SITE.venue}.`,
  },
};

export const viewport: Viewport = {
  themeColor: "#16321f",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <script {...jsonLdScriptProps(getOrganizationJsonLd())} />
        {children}
      </body>
    </html>
  );
}
