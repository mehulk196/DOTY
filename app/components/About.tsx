import { SITE } from "@/lib/site-config";

export default function About() {
  return (
    <section id="about" className="border-b border-gold/20 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          About the initiative
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          A Movement for Rajasthan&rsquo;s Next Generation of Designers
        </h2>
        <p className="mt-6 text-balance text-base leading-relaxed text-ink/75 sm:text-lg">
          The {SITE.organizer} ({SITE.organizerShort}) is hosting{" "}
          <strong className="text-forest">{SITE.name}</strong> to mark{" "}
          {SITE.occasion}, giving fashion, textile and design students across
          Rajasthan a platform to showcase original work, compete for real
          recognition, and connect with the industry that will shape their
          careers.
        </p>
        <p className="mt-4 text-balance text-base leading-relaxed text-ink/75 sm:text-lg">
          Held in association with the Ministry of Skill Development and
          Entrepreneurship, Skill India, Skill Rajasthan, RSLDC, Amity
          University Rajasthan and other partners, the event brings together
          mentors, jury members and institutions committed to nurturing
          homegrown design talent.
        </p>
      </div>
    </section>
  );
}
