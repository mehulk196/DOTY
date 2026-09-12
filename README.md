# Designer of the Year (doty.in)

Marketing site for **Designer of the Year**, a World Cotton Day Celebration
competition presented by the Fashion Design Council of Rajasthan (FDCR) for
fashion, textile & design students across Rajasthan.

Built with Next.js (App Router) + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before going live: set up the Google Form

The **Register Now** button links to a Google Form. Create one at
[forms.google.com](https://forms.google.com) with these fields:

1. Full Name (short answer, required)
2. Email Address (short answer, required, validated as email)
3. Phone Number (short answer, required)
4. College / Institute Name (short answer, required)
5. City (short answer, required)
6. Category (multiple choice, required):
   - Fashion Design
   - Textile Design
   - Sustainable Design
   - Creative Innovation
7. Year / Course (short answer)
8. Portfolio / Instagram / Work Sample Link (short answer)
9. A short note about your entry (paragraph, optional)

Once created, click **Send** → the link icon → copy the short `forms.gle`
link, then paste it into [`lib/site-config.ts`](lib/site-config.ts) as
`googleFormUrl`. That single constant powers every "Register" link/button
on the site.

## Editing content

All event copy (dates, venue, categories, awards, partners, contact email)
lives in [`lib/site-config.ts`](lib/site-config.ts) — update it there rather
than hunting through components.

## Deploying

1. Push this repo to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Add `doty.in` as a custom domain in the Vercel project's Domains settings
   and point your domain's DNS at Vercel per its instructions.

Every push to `main` redeploys automatically once the Vercel project is
connected.
