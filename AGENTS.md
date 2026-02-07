# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds the Next.js App Router code.
- `app/page.tsx` composes the homepage from section components.
- `app/components/sections/` contains page sections (e.g., `Hero.tsx`, `Projects.tsx`).
- `app/components/ui/` contains reusable UI pieces (e.g., `Button.tsx`).
- `app/api/` hosts API routes like `app/api/contact/route.ts`.
- `app/i18n.ts` is the single source for EN/UK text strings.
- `app/globals.css` and `tailwind.config.ts` define the “Daylight Terminal” design system.
- Static assets live in `public/`; repo images for docs live in `images/`.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the dev server at `http://localhost:3000`.
- `npm run build` builds the production bundle.
- `npm run start` runs the production server from `.next/`.
- `npm run lint` runs ESLint with the Next.js config.

## Coding Style & Naming Conventions
- Language: TypeScript + React (Next.js App Router).
- Indentation: 2 spaces, prefer trailing commas and single quotes only when required by tooling.
- Components use `PascalCase` filenames (e.g., `ContactSection.tsx`).
- Section components live in `app/components/sections/` and should remain focused and small.
- Tailwind is the primary styling system; define reusable tokens in `tailwind.config.ts` and `globals.css`.

## Testing Guidelines
- No automated test framework is currently configured.
- Validate changes by running `npm run dev` and checking key flows:
- Language toggle (`?lang=en|uk`), section rendering, and contact form submission.
- If you add tests, document the framework and commands here.

## Commit & Pull Request Guidelines
- Recent commits favor Conventional Commit-style prefixes (e.g., `feat: Add loading skeleton`).
- Use an imperative, sentence-case summary and keep it scoped to one change.
- PRs should include:
- A short description of the change and rationale.
- Screenshots or a short clip for UI changes.
- Notes on i18n updates when text in `app/i18n.ts` changes.

## Notes for Contributors
- Content edits should go through `app/i18n.ts` to keep translations aligned.
- When adding new sections, export them from `app/components/sections/` and wire into `app/page.tsx`.
