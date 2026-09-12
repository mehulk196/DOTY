import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script, Inter } from "next/font/google";
import { SITE } from "@/lib/site-config";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} | ${SITE.organizerShort}`,
  description: `${SITE.organizer} presents Designer of the Year — a ${SITE.occasion} competition for fashion, textile & design students across Rajasthan. ${SITE.tagline}`,
  keywords: [
    "Designer of the Year",
    "FDCR",
    "Fashion Design Council of Rajasthan",
    "World Cotton Day",
    "fashion design competition",
    "textile design competition Rajasthan",
    "Jaipur fashion event",
  ],
  openGraph: {
    title: `${SITE.name} | ${SITE.organizerShort}`,
    description: `Showcase your talent. Shape the future. A ${SITE.occasion} competition for fashion, textile & design students — ${SITE.eventDateLabel}, ${SITE.venue}.`,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.organizerShort}`,
    description: `Showcase your talent. Shape the future. ${SITE.eventDateLabel} at ${SITE.venue}.`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dancingScript.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
