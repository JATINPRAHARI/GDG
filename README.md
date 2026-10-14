# HackHeist 2026 — Landing Page

Single-page event site for **HACKHEIST**, organised by **GDG on Campus MIET**.
Built with React 19 + TypeScript + Vite and plain CSS (no UI libraries, no backend).

## Sections

1. **Hero** — HACKHEIST, "Build. Break. Solve.", organiser, event, venue, time, Register button
2. **About** — what HackHeist is
3. **Event Highlights** — Hackathon · Workshop · Tech Session · Networking
4. **Event Details** — Event · Venue · Time
5. **Final CTA** — "Ready to HackHeist?" + Register button

## Local development

```bash
npm install     # install dependencies
npm run dev     # start dev server at http://localhost:5173
npm run build   # type-check + production build into dist/
npm run preview # serve the production build at http://localhost:4173
npm run lint    # oxlint
```

## Updating event content

Everything editable lives in one file: **`src/config/event.ts`**.

```ts
// PLACEHOLDER — swap this for the real registration form URL before publishing.
export const REGISTRATION_URL = 'https://example.com/hackheist-2026/register'
```

Both "Register Now" buttons (hero and final CTA) read that single constant, so changing it
updates both. While the placeholder is still in place the final CTA shows
"Registration form link coming soon." — that notice disappears automatically once a real URL
is set, because `REGISTRATION_IS_PLACEHOLDER` is derived from the value.

Nav links are defined in the same file via `NAV_LINKS`.

## Project structure

```
src/
  config/event.ts        all copy + registration URL
  components/            Navbar, Hero, About, Highlights, EventDetails, FinalCta,
                         Footer, Section, RegisterButton, Icon, ColorMark
  hooks/useReveal.ts     scroll-triggered entrance animations
  lib/                   cx(), stagger() helpers
  styles/                tokens.css, base.css + one file per section
```

## Accessibility & responsiveness

- Semantic landmarks (`header`/`nav`/`main`/`section`/`footer`), skip link, labelled sections
- Visible `:focus-visible` outlines on every interactive element
- Mobile menu uses `aria-expanded` / `aria-controls`, closes on link click and `Escape`
- All motion respects `prefers-reduced-motion`
- Verified with no horizontal overflow at 360, 390, 768, 1024, 1366 and 1920 px

## Deploy to Vercel

Vercel detects Vite automatically — no extra config needed.

1. Push to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: HackHeist 2026 landing page"
   git branch -M main
   git remote add origin https://github.com/<your-user>/hackheist-landing.git
   git push -u origin main
   ```

2. Import the repo at [vercel.com/new](https://vercel.com/new), or:

   ```bash
   npm i -g vercel
   vercel          # preview deployment
   vercel --prod   # production deployment
   ```

Build command `npm run build`, output directory `dist`, install command `npm install` — all
detected automatically.