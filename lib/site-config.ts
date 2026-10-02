export const SITE = {
  name: "Designer of the Year",
  shortName: "DOTY",
  organizer: "Fashion Design Council of Rajasthan",
  organizerShort: "FDCR",
  domain: "doty.co.in",
  url: "https://doty.co.in",
  tagline: "Showcase Your Talent. Shape The Future.",
  occasion: "World Cotton Day Celebration",
  eventDateLabel: "7th – 19th October 2026",
  eventStartDateISO: "2026-10-07",
  eventEndDateISO: "2026-10-19",
  venue: "Rajasthan Chamber of Commerce, Jaipur",
  participants: "Fashion, Textile & Design students from across Rajasthan",
  instagramUrl: "https://instagram.com/",
  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfBgD2BllXSrxbDxaFymZVRCutdWPeR_J6Nm89pcWKEpc5rcA/viewform?usp=publish-editor",
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
  "Prestige & Recognition",
  "Certification",
  "Portfolio Building",
  "Industry Exposure",
  "Industry Networking",
  "Career Opportunities",
  "Media Visibility",
  "Mentorship",
  "National Exposure",
  "Future Opportunities",
  "Designer of the Year Title",
] as const;

// Shown above the headline on the homepage track-chooser.
export const HOMEPAGE_LOGOS = [
  { name: "Fashion Design Council of Rajasthan", logo: "fdcr.png" },
  {
    name: "Ministry of Skill Development and Entrepreneurship",
    logo: "ministry-skill-development.svg",
  },
  { name: "RAJSICO", logo: "rajsico.png" },
  { name: "Skill Rajasthan", logo: "skill-rajasthan.png" },
  { name: "Skill India", logo: "skill-india.png" },
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
// filename below. Until a file exists, PartnerLogo falls back to a text
// badge automatically. Each group renders as its own standalone section.
export const PARTNER_GROUPS = [
  {
    heading: "In Association With",
    partners: [
      { name: "Skill India", logo: "skill-india.png" },
      { name: "Skill Rajasthan", logo: "skill-rajasthan.png" },
      { name: "RSLDC", logo: "rsldc.png" },
    ],
  },
  {
    heading: "Our Partners",
    partners: [
      { name: "Amity University Rajasthan", logo: "amity-university.png" },
      { name: "Colours of Fusion", logo: "colours-of-fusion.png" },
      { name: "RCCI", logo: "rcci.png" },
      { name: "Jaipur Utsav", logo: "jaipur-utsav.png" },
      { name: "SEWA", logo: "sewa.png" },
    ],
  },
] as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Categories", href: "#categories" },
  { label: "Awards", href: "#awards" },
  { label: "Details", href: "#details" },
  { label: "Partners", href: "#partners" },
  { label: "FAQ", href: "#faq" },
] as const;
