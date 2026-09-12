export const SITE = {
  name: "Designer of the Year",
  shortName: "DOTY",
  organizer: "Fashion Design Council of Rajasthan",
  organizerShort: "FDCR",
  domain: "doty.in",
  url: "https://doty.in",
  tagline: "Showcase Your Talent. Shape The Future.",
  occasion: "World Cotton Day Celebration",
  eventDateLabel: "7th October 2026",
  eventDateISO: "2026-10-07",
  venue: "Rajasthan Chamber of Commerce, Jaipur",
  participants: "Fashion, Textile & Design students from across Rajasthan",
  contactEmail: "info@doty.in",
  instagramUrl: "https://instagram.com/",
  // TODO: replace with the real Google Form link once created (see README for the field list).
  googleFormUrl: "https://forms.gle/REPLACE-WITH-YOUR-FORM-LINK",
} as const;

export const CATEGORIES = [
  {
    title: "Fashion Design",
    tagline: "Innovate. Create. Inspire.",
  },
  {
    title: "Textile Design",
    tagline: "Weave Ideas. Design Tomorrow.",
  },
  {
    title: "Sustainable Design",
    tagline: "Design for People. Design for Planet.",
  },
  {
    title: "Creative Innovation",
    tagline: "Bold Ideas. Bright Futures.",
  },
] as const;

export const AWARDS = [
  "Exciting Cash Prizes",
  "Trophies & Certificates",
  "Featured Showcase at World Cotton Day Celebration",
  "Industry Recognition & Exposure",
  "Internship & Placement Opportunities",
] as const;

export const PARTNERS = [
  "Skill India",
  "Skill Rajasthan",
  "RSLDC",
  "Amity University Rajasthan",
  "Colours of Fusion",
  "RCCI",
  "Jaipur Utsav",
  "SEWA",
] as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Categories", href: "#categories" },
  { label: "Awards", href: "#awards" },
  { label: "Details", href: "#details" },
  { label: "Partners", href: "#partners" },
] as const;
