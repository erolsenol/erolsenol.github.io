# Erol Senol — Personal Site

The source for [erolsenol.github.io](https://erolsenol.github.io), a static portfolio and notes site built with Astro and TypeScript.

## Local development

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

## Content

- Update selected public projects in `src/data/projects.ts`.
- Add Markdown notes in `src/content/notes/`. The content schema validates each note's title, description, display order, and associated project.
- Edit the about and contact sections in `src/pages/index.astro`.

## Checks

```sh
npm run check
npm run build
npm run test:output
```

GitHub Actions runs checks for pull requests and deploys the generated `dist/` site to GitHub Pages from `main`.

Maintenance source-release entries live in `src/data/releases.ts` and are rendered at `/releases/`. Update entries only after the linked GitHub releases exist.
