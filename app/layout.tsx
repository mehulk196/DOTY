import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import { SITE } from "@/lib/site-config";
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
      className={`${bodoniModa.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
