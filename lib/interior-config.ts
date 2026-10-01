export const INTERIOR_SITE = {
  name: "Raj Aakar",
  fullName: "Raj Aakar — Designer of the Year (DOTY) 2026",
  tagline: "The Shape of Rajasthan",
  eyebrow: "A Rajasthan-Level Design Competition",
  headline: "Design Rajasthan. Represent Rajasthan.",
  intro:
    "Calling all Architecture & Interior Design students across Rajasthan to create a contemporary pavilion that reflects the heritage, culture, craftsmanship and future of Rajasthan.",
  opportunity:
    "Your design could become an opportunity to represent Rajasthan on a national platform in Delhi.",
  organizer: "Fashion Design Council of Rajasthan",
  organizerShort: "FDCR",
  associatedWith: "RAJSICO",
  submissionDeadlineLabel: "18th October 2026",
  submissionDeadlineISO: "2026-10-18",
  participants:
    "Architecture & Interior Design students from colleges and universities across Rajasthan",
  closingTagline: "Your Design. Your Identity. Your Rajasthan.",
  // TODO: replace with the real Google Form link once created.
  googleFormUrl: "https://forms.gle/REPLACE-WITH-YOUR-INTERIOR-FORM-LINK",
} as const;

export const INTERIOR_CATEGORIES = [
  {
    title: "Architecture",
    tagline: "Shape heritage into form.",
  },
  {
    title: "Interior Design",
    tagline: "Craft spaces with identity.",
  },
] as const;

export const INTERIOR_BENEFITS = [
  "Cash Prize",
  "Raj Aakar Award",
  "Certificate of Recognition",
  "National Level Recognition",
  "Portfolio & Industry Exposure",
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

export const INTERIOR_PRESENTERS = [
  { name: "Fashion Design Council of Rajasthan", logo: "fdcr.png" },
  { name: "RAJSICO", logo: "rajsico.png" },
] as const;

export const INTERIOR_NAV_LINKS = [
  { label: "Categories", href: "#categories" },
  { label: "Awards", href: "#awards" },
  { label: "Submission", href: "#submission" },
  { label: "FAQ", href: "#faq" },
] as const;
