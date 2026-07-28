# Sihle Mahlangu — Portfolio

A personal portfolio site built with React + Vite, styled around a git/terminal
theme (commit log project cards, a typed terminal hero, a directory-listing
skills section) that reflects a Git-first workflow.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`. Deploy `dist/` to Vercel, Netlify,
GitHub Pages, or any static host.

## Editing content

- **Hero / typed intro:** `src/components/Terminal.jsx`
- **About:** `src/components/About.jsx`
- **Projects:** `src/components/Projects.jsx` (edit the `PROJECTS` array — add
  a project by adding an object with `hash`, `title`, `tech`, `bullets`, `link`)
- **Skills:** `src/components/Skills.jsx` (edit the `GROUPS` array)
- **Education:** `src/components/Education.jsx`
- **Contact links:** `src/components/Contact.jsx` (edit the `LINKS` array)
- **Colors / fonts / spacing:** `src/index.css` (CSS custom properties at the top)

## Stack

- React 18
- Vite 5
- Plain CSS (component-scoped via inline `<style>` tags, no framework)
