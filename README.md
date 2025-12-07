# Portfolio

Personal portfolio website built with Next.js and TypeScript.

This repository contains the source for a personal portfolio site located in the `app/` directory and using React components under `components/`.

## Features

- Next.js app router structure (`app/`)
- Reusable UI components in `components/` and `components/ui/`
- Static assets in `public/` (images)
- Global styles in `styles/globals.css`

## Requirements

- Node.js (recommended >= 18)
- pnpm (recommended) — this repo uses `pnpm-lock.yaml`

If you don't have `pnpm` installed, you can use `npm` or `yarn`, but `pnpm` is recommended for reproducible installs.

## Setup (Windows)

Open a terminal in the project root (`C:\Users\darsh\Downloads\portfolio`) and run:

```powershell
# install dependencies (pnpm recommended)
pnpm install

# start dev server
pnpm dev
```

Or with npm:

```cmd
npm install
npm run dev
```

Available scripts (as defined in `package.json`):

- `dev` — run local development server
- `build` — create production build
- `start` — start the production server
- `lint` — run linter (if configured)

Run them using `pnpm <script>` or `npm run <script>`.

## .gitignore and node_modules

This repository contains a `.gitignore` which excludes `node_modules/`. Make sure `node_modules` is not committed — the repository's history should not contain `node_modules`. If you need to remove `node_modules` from an existing commit history, use a history-rewrite tool such as `git filter-repo` or BFG. If you prefer a simpler route and don't need old history, delete the `.git` folder and reinitialize Git (then commit with `node_modules` ignored).

## Deployment

Recommended hosting platforms:

- Vercel — seamless for Next.js apps
- Netlify — supports Next.js with some configuration
- Any Node hosting that can run a Next.js production server

Basic Vercel flow:

1. Push repo to GitHub.
2. Import the repo into Vercel (vercel.com) and choose the root project.
3. Vercel will detect Next.js and set sensible defaults.

## Project structure

- `app/` — Next.js app router pages and layouts
- `components/` — site-specific components (hero, about, projects, etc.)
- `components/ui/` — shared UI primitives and design system components
- `styles/` — global CSS and Tailwind/PostCSS config (if used)
- `public/images/` — static images

