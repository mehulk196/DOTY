import { INTERIOR_SITE, INTERIOR_BENEFITS, SUBMISSION_ITEMS } from "@/lib/interior-config";

export const INTERIOR_FAQS = [
  {
    question: `What is ${INTERIOR_SITE.name} — Designer of the Year?`,
    answer: `${INTERIOR_SITE.name} is a state-level design competition — an initiative by ${INTERIOR_SITE.associatedWith}, supported by ${INTERIOR_SITE.organizerShort} — inviting Architecture and Interior Design students to design a contemporary pavilion inspired by Rajasthan's heritage, culture and craftsmanship.`,
  },
  {
    question: "Who can participate?",
    answer: `${INTERIOR_SITE.participants} can participate, individually or in teams.`,
  },
  {
    question: "What do I need to submit?",
    answer: `Submit your pavilion concept online with: ${SUBMISSION_ITEMS.join(", ")}.`,
  },
  {
    question: "What is the submission deadline?",
    answer: `Designs must be submitted online by ${INTERIOR_SITE.submissionDeadlineLabel}.`,
  },
  {
    question: "How do I register?",
    answer:
      "Click \"Register Now\" anywhere on this site to fill out the official Google Form for online registration and submission.",
  },
  {
    question: "What can I win?",
    answer: `Winners receive: ${INTERIOR_BENEFITS.join(", ")}.`,
  },
  {
    question: "Who organizes Raj Aakar?",
    answer: `${INTERIOR_SITE.initiativeLine}. ${INTERIOR_SITE.organizerShort} coordinates registration, student outreach, promotion and recognition for winners.`,
  },
] as const;
