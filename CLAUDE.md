# CLAUDE.md - Project Guide for Claude Code

## Project Overview

Portfolio website for an Atlassian consultant featuring the "Daylight Terminal" design system - a light-themed terminal aesthetic with syntax-highlighting colors. Supports English and Ukrainian (i18n).

## Quick Commands

```bash
npm install      # Install dependencies
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
```

## Project Structure

```
app/
├── page.tsx                    # Main page (assembles section components)
├── layout.tsx                  # Root layout wrapper
├── globals.css                 # Terminal design system with CSS variables
├── i18n.ts                     # Translation strings (EN/UK)
├── api/
│   └── contact/route.ts        # Contact form API endpoint
└── components/
    ├── ContactFormClient.tsx   # Client-side contact form
    ├── sections/               # Page section components
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── Projects.tsx
    │   └── ...
    └── ui/                     # Reusable UI components
        ├── Button.tsx
        ├── TerminalWindow.tsx  # Terminal-style container with title bar
        ├── BlinkingCursor.tsx  # Animated cursor effect
        ├── TypewriterText.tsx  # Typewriter animation for text
        ├── CommandPrompt.tsx   # Terminal prompt styling ($ prefix)
        └── CodeBlock.tsx       # Syntax-highlighted code display

public/                         # Static assets (images, icons)
tailwind.config.ts              # Extended theme with terminal colors
```

## Design System: Daylight Terminal

### Typography
- **Monospace** (`font-mono`): JetBrains Mono - headings, code, terminal text
- **Sans-serif** (`font-sans`): IBM Plex Sans - body text, paragraphs

### Color Tokens
Syntax-highlighting inspired colors available as Tailwind classes:

| Token | Class | Usage |
|-------|-------|-------|
| Teal | `text-syntax-teal`, `bg-syntax-teal` | Links, accents |
| Orange | `text-syntax-orange`, `bg-syntax-orange` | Warnings, highlights |
| Purple | `text-syntax-purple`, `bg-syntax-purple` | Keywords, tags |
| Green | `text-syntax-green`, `bg-syntax-green` | Success, strings |
| Red | `text-syntax-red`, `bg-syntax-red` | Errors, important |
| Blue | `text-syntax-blue`, `bg-syntax-blue` | Info, variables |

### Key CSS Classes
- `font-mono` - JetBrains Mono
- `font-sans` - IBM Plex Sans
- `text-syntax-*` - Syntax highlighting colors
- `bg-syntax-*` - Background variants

## Key Files

- **globals.css**: Terminal design system with CSS variables and base styles
- **tailwind.config.ts**: Extended theme configuration with terminal colors and fonts
- **i18n.ts**: All text content for translations - edit this for content changes
- **Page sections**: Individual section components in `app/components/sections/`
- **API routes**: Backend endpoints in `app/api/`

## Development Notes

- Uses Next.js App Router (app directory structure)
- File-based routing - new pages = new files in `app/`
- Components are TypeScript (.tsx)
- Deployment target: Vercel
- Fonts include Cyrillic subset for Ukrainian support
