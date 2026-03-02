# Next.js Starter Template

A minimal Next.js starter template designed for AI-assisted development.

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS 4**
- **Bun** as package manager

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Commands

| Command | Purpose |
|---------|---------|
| `bun install` | Install dependencies |
| `bun dev` | Start dev server |
| `bun build` | Production build |
| `bun lint` | Run ESLint |
| `bun typecheck` | TypeScript type checking |

## Project Structure

```
src/
└── app/
    ├── layout.tsx    # Root layout
    ├── page.tsx      # Home page
    └── globals.css   # Global styles
```

## Recipes

Common feature additions are available in `.kilocode/recipes/`:

- **Add Database** — Drizzle ORM + SQLite
