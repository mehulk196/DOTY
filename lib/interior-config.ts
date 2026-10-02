export const INTERIOR_SITE = {
  name: "Raj Aakar",
  fullName: "Raj Aakar — Designer of the Year (DOTY) 2026",
  tagline: "The Shape of Rajasthan",
  eyebrow: "A State-Level Design Competition",
  headline: "Design Rajasthan. Represent Rajasthan.",
  intro:
    "Calling all Architecture & Interior Design students across Rajasthan to create a contemporary pavilion that reflects the heritage, culture, craftsmanship and future of Rajasthan.",
  opportunity:
    "Your design could become an opportunity to represent Rajasthan at an international platform — IITF 2026, New Delhi.",
  initiativeLine: "An initiative by RAJSICO, supported by FDCR",
  organizer: "Fashion Design Council of Rajasthan",
  organizerShort: "FDCR",
  associatedWith: "RAJSICO",
  submissionDeadlineLabel: "18th October 2026",
  submissionDeadlineISO: "2026-10-18",
  participants:
    "Architecture & Interior Design students from colleges and universities across Rajasthan",
  closingTagline: "Your Design. Your Identity. Your Rajasthan.",
  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdYVM9yr0uS_ZIiUirkWOUo4eYMSTxiXcMtGVxLeCV3MaNtmA/viewform",
} as const;

export const INTERIOR_BENEFITS = [
  "Prestige & Recognition",
  "Certification",
  "Portfolio Building",
  "Industry Exposure",
  "Industry Networking",
  "Career Opportunities",
  "Media Visibility",
  "National Exposure",
  "Future Opportunities",
] as const;

export const SUBMISSION_ITEMS = [
  "Mood board",
  "Floor plan",
  "Facade design",
  "Interior design",
  "3D views / renders",
  "Concept note",
] as const;

export const THEME_PILLARS = [
  "Heritage",
  "Culture",
  "Craftsmanship",
  "Innovation",
] as const;

export const ELIGIBLE_DISCIPLINES = [
  "Architecture",
  "Interior Design",
  "Related design disciplines",
] as const;

// RAJSICO initiates Raj Aakar; FDCR supports it. Order matters for the
// "An initiative of / Supported by" banner.
export const INTERIOR_INITIATIVE = { name: "RAJSICO", logo: "rajsico.png" } as const;
export const INTERIOR_SUPPORTER = {
  name: "Fashion Design Council of Rajasthan",
  logo: "fdcr.png",
} as const;

export const INTERIOR_NAV_LINKS = [
  { label: "Awards", href: "#awards" },
  { label: "Submission", href: "#submission" },
  { label: "FAQ", href: "#faq" },
] as const;
