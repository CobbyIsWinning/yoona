# Yoona landing page

A responsive landing and about page built with Next.js 16, React 19, and Tailwind CSS 4. Available at `/` and `/about`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000/about.

## Production

```bash
npm run build
npm start
```

## Page features

- A fixed four-image fashion gallery that rotates through all seven fashion images, fading in one fresh photo every three seconds while the sharp highlight moves to the next position and the others blur. Each position renders only its current photo, and visible images stay distinct. Hover, tap, or keyboard-focus to select an image; pause controls, reduced-motion support, and Pinterest source links are preserved.
- A sticky product belt with jackets moving vertically through a clipped viewport as you scroll, with manual colour selection and a static layout for reduced motion.
- Keyboard-accessible Build, Decide, and Handoff tabs with illustrative workflow previews.
- A keyboard-accessible popular-agents section featuring Yoona’s real analysis screenshots and verified capabilities for trend forecasting, sales confidence, and product optimisation.
- A credited fashion film below the Build preview. It plays muted when visible, pauses offscreen, and offers native playback controls.
- Audience-specific content for creative, merchandising, and brand teams.
- About, whitepaper, demo, and contact sections using Yoona’s existing destinations.
- Leadership and team profiles with all eight published names, roles, and official portraits from Yoona’s About page.
- Responsive navigation with Escape-to-close support, visible focus states, and a skip link.

## Main files

- `app/page.tsx`: page content and sections.
- `app/components/landing.tsx`: navigation, collage, and interactive sections.
- `app/components/team.tsx`: leadership and team profiles, rendered on the server.
- `app/components/styles.ts`: shared Tailwind recipes for containers, headings, section spacing, labels, and links.
- `app/globals.css`: brand tokens, base accessibility styles, and bespoke illustration/scroll effects.
- `docs/styling.md`: styling conventions and the boundary between Tailwind utilities and custom CSS.
- `docs/image-sources.md`: image provenance and design references.

The workflow previews are illustrative presentation content. Demo requests, login, whitepaper, and contact actions link to Yoona’s live services.

## Verification

Production build and TypeScript checks. Browser checks cover image loading, workflow tab keyboard navigation, audience selection, static gallery layout, mobile navigation, reduced motion, and horizontal overflow from 320px to 1920px.
