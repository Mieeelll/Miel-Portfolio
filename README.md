# Amiel John Metiam — Portfolio

A one-page portfolio built with **Next.js**, **React**, and **Tailwind CSS**. Showcases skills, projects, education, and contact info.

## Tech stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **TypeScript**

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy your profile photo into the public folder (if you haven’t already):

   ```bash
   copy images\profile.jpg public\images\profile.jpg
   ```
   (On macOS/Linux: `cp images/profile.jpg public/images/profile.jpg`)

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for production

```bash
npm run build
npm start
```

## Project structure

- `app/` — Next.js App Router: `layout.tsx`, `page.tsx`, `globals.css`
- `components/` — React components: `Nav`, `CustomCursor`, `Reveal`, `Education`, `ContactForm`
- `public/images/` — Static assets (e.g. `profile.jpg`)
- `tailwind.config.ts` — Tailwind theme (colors, fonts, keyframes)

## Contents

- **Hero** — Name, tagline, profile photo, CTAs
- **About** — Bio and core skills with tech icons
- **Work** — Projects (Ecommerce Website, MyPabahay)
- **Education** — Tabbed section (National University, APEC Schools)
- **Contact** — Email, phone, LinkedIn, GitHub, contact form

The original static `index.html` is still in the repo if you want to use it without Node.
