# Muchamad Fauzy Portfolio

Personal portfolio built with **Next.js 15 App Router**, **Tailwind CSS v4**, and **shadcn/ui**. The site highlights production work and showcases backend strengths while providing a polished front-of-house experience.

## Table of Contents

- [Live Demo](#live-demo)
- [Requirements](#requirements)
- [Highlights](#highlights)
- [Getting Started](#getting-started)
  - [Copy Environment Template](#copy-environment-template)
  - [Run Locally](#run-locally)

## Live Demo

Visit the live site at [https://mch-fauzy.vercel.app/](https://mch-fauzy.vercel.app/).

## Requirements

- Node.js **22.x**

## Highlights

- Server-first architecture using App Router route groups and Server Components by default.
- Reusable UI primitives (shadcn/ui) with a custom design system and responsive section layouts.
- Content centralised in `lib/portfolio-data.ts` for quick copy updates across Hero, Experience, Projects, and Skills sections.
- Dark/light theming via `next-themes`, including a floating back-to-top control that adapts to the active theme.
- Type-safe config in `configs/config.ts` to keep branding information and metadata in sync.

## Getting Started

### Copy Environment Template

```bash
cp .env.example .env
```

### Run Locally

```bash
npm install
npm run dev
```

Visit <http://localhost:3000> to view the portfolio.
