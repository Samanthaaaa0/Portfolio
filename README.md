# Samantha Oh — Portfolio

A scrollable, Y2K-inspired portfolio site. Built with React + TypeScript + Vite + Tailwind + Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

To build for production / deploy:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Where to edit things

- **All your content (name, bio, jobs, education, projects, skills)** lives in one place:
  `src/data/resumeData.ts`. Edit that file and every section on the site updates.
- **The "Ask Sam" chat bot's answers** live in `src/data/askEngine.ts` — it's simple keyword
  matching (no API needed), add more `rules` entries to teach it new answers.
- **Sections/components** are in `src/components/` — one file per section
  (`Hero.tsx`, `Experience.tsx`, `Education.tsx`, `Projects.tsx`, `Skills.tsx`, `Footer.tsx`),
  plus the interactive bits (`AskMe.tsx`, `CursorTrail.tsx`, `DotNav.tsx`, `ScrollProgress.tsx`,
  `Marquee.tsx`).
- **Colors & fonts** are defined as design tokens in `tailwind.config.js` (`ink`, `panel`, `grey`,
  `pink`, `turq`) and `src/index.css` (font imports).

## Things you'll probably want to fill in

- `src/data/resumeData.ts` → `profile.linkedin` and `profile.github`: paste your real profile URLs.
- `src/data/resumeData.ts` → each project's `link`: add live demo or repo links as you get them.
  Until you add one, the card just shows "link coming soon".

## Deploying

This is a static Vite app, so it deploys anywhere static: Vercel, Netlify, GitHub Pages, Cloudflare
Pages. The general flow is: push this folder to a GitHub repo, then connect that repo on
Vercel/Netlify with build command `npm run build` and output directory `dist`.

## Notes

- The floating sparkle cursor trail only shows on devices with a mouse (it's hidden on touch/mobile).
- Reduced-motion preferences are respected — animations shorten automatically if a visitor has that
  turned on in their OS settings.
- The "Ask Sam" bot is fully client-side and rule-based — no API key, nothing to configure, works
  offline in dev.
