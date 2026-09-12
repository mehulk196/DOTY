import { SITE, CATEGORIES, AWARDS } from "@/lib/site-config";

export const FAQS = [
  {
    question: `What is ${SITE.name} (${SITE.shortName})?`,
    answer: `${SITE.name} is a competition held by the ${SITE.organizer} (${SITE.organizerShort}) on the occasion of ${SITE.occasion}. It gives fashion, textile and design students across Rajasthan a platform to showcase original work and compete for recognition.`,
  },
  {
    question: "Who can participate in Designer of the Year?",
    answer: `${SITE.participants} are eligible to register and compete.`,
  },
  {
    question: "What categories can I compete in?",
    answer: `There are four categories: ${CATEGORIES.map((c) => c.title).join(", ")}.`,
  },
  {
    question: `When and where is ${SITE.shortName} ${new Date(SITE.eventDateISO).getFullYear()} held?`,
    answer: `The event takes place on ${SITE.eventDateLabel} at ${SITE.venue}.`,
  },
  {
    question: "How do I register for Designer of the Year?",
    answer:
      "Click the \"Register Now\" button anywhere on this site to fill out the official Google Form registration. Registration takes only a couple of minutes.",
  },
  {
    question: "What can I win?",
    answer: `Winners receive: ${AWARDS.join(", ")}.`,
  },
  {
    question: `Who organizes ${SITE.shortName}?`,
    answer: `${SITE.name} is presented by the ${SITE.organizer}, in association with the Ministry of Skill Development and Entrepreneurship, Skill India, Skill Rajasthan, RSLDC, Amity University Rajasthan, and other partners.`,
  },
] as const;
