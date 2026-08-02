# Oleksandr Tolochko — Atlassian Portfolio

Editorial, bilingual portfolio for an Atlassian Certified Expert. The site is built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and a predominantly server-rendered component architecture.

## Routes

- `/en` — English
- `/uk` — Ukrainian
- `/` — redirects to English; legacy `/?lang=uk` redirects to Ukrainian

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site defaults to dark mode. A manually selected light theme is persisted in `localStorage`.

## Environment variables

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
RESEND_API_KEY=re_replace_me
CONTACT_FROM_EMAIL=Oleksandr Tolochko <contact@your-verified-domain.com>
CONTACT_TO_EMAIL=your-inbox@example.com
```

`CONTACT_FROM_EMAIL` must use a domain verified in Resend. The contact API validates payload length and format, checks a honeypot and minimum completion time, and uses a per-submission Resend idempotency key.

## Quality checks

```bash
npm run lint
npm run build
```

The production build generates localized metadata, canonical and alternate-language links, an Open Graph image, `robots.txt`, `sitemap.xml`, and the web manifest.
