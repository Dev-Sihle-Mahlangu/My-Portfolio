# Sihle Mahlangu | Portfolio

Personal developer portfolio built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:5173).

## Build and deploy

```bash
npm run build
npm run preview
```

Vercel detects Vite automatically. Push to GitHub and import the repo.

## Where to edit things

- Contact details and file links: `src/data/site.js`
- CV PDF: replace `public/Sihle_Mahlangu_CV.pdf` (keep the same filename)
- Transcript PDF: replace `public/Sihle_Mahlangu_Academic_Transcript.pdf`
  (redact ID and student numbers first)
- Portrait: replace the files in `src/assets/` (`sihle-portrait.jpg` and `.webp`, 4:5 ratio)
- Transcript marks: `RECORD` in `src/components/Transcript.jsx`
- Projects: `PROJECTS` in `src/components/Projects.jsx`
- Skills: `GROUPS` in `src/components/Skills.jsx`
- Colours and fonts: CSS variables at the top of `src/index.css`
- Logo: `src/components/Logo.jsx` and `public/favicon.svg`
