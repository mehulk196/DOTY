export const SITE = {
  name: "Designer of the Year",
  shortName: "DOTY",
  organizer: "Fashion Design Council of Rajasthan",
  organizerShort: "FDCR",
  domain: "doty.co.in",
  url: "https://doty.co.in",
  tagline: "Showcase Your Talent. Shape The Future.",
  occasion: "World Cotton Day Celebration",
  eventDateLabel: "7th October 2026",
  eventDateISO: "2026-10-07",
  venue: "Rajasthan Chamber of Commerce, Jaipur",
  participants: "Fashion, Textile & Design students from across Rajasthan",
  contactEmail: "info@doty.co.in",
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

// Organizing bodies presenting the event, shown above the partners grid.
export const PRESENTERS = [
  { name: "Fashion Design Council of Rajasthan", logo: "fdcr.png" },
  {
    name: "Ministry of Skill Development and Entrepreneurship",
    logo: "ministry-skill-development.svg",
  },
] as const;

// Drop each partner's logo file into public/partners/ using the `logo`
// filename below. Until a file exists, Partners.tsx falls back to a text
// badge automatically.
export const PARTNERS = [
  { name: "Skill India", logo: "skill-india.png" },
  { name: "Skill Rajasthan", logo: "skill-rajasthan.png" },
  { name: "RSLDC", logo: "rsldc.png" },
  { name: "Amity University Rajasthan", logo: "amity-university.png" },
  { name: "Colours of Fusion", logo: "colours-of-fusion.png" },
  { name: "RCCI", logo: "rcci.png" },
  { name: "Jaipur Utsav", logo: "jaipur-utsav.png" },
  { name: "SEWA", logo: "sewa.png" },
] as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Categories", href: "#categories" },
  { label: "Awards", href: "#awards" },
  { label: "Details", href: "#details" },
  { label: "Partners", href: "#partners" },
] as const;
