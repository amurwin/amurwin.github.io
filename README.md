# Andrew Murwin – Personal Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Live Website

[andrewmurwin.com](https://andrewmurwin.com)

## Features

- Dark/light mode toggle
- Runtime color theming (Red, Green, Blue, Purple)
- Sections for Hero, Experience, Skills, and Education
- Animated transitions powered by Framer Motion
- Infinite scrolling career history marquee
- Downloadable resume
- Academic paper carousel with PDF previews
- Fully responsive layout

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- [Embla Carousel](https://www.embla-carousel.com/)
- [Lucide Icons](https://lucide.dev/) + [Tabler Icons](https://tabler-icons.io/)

## Project Structure

- `src/app/` – Next.js app directory (pages, layout, global styles)
- `src/components/major/` – Page sections (Hero, Experience, Skills, Education, Navbar)
- `src/components/minor/` – Small shared components (Footer, Section Heading)
- `src/components/ui/` – Base UI primitives (Carousel, Badge, Card, etc.)
- `src/components/next/` – Next.js-specific components (ModeToggle, ThemeColorToggle)
- `public/skills/` – Skill icon assets
- `public/papers/` – Academic paper PDFs and cover screenshots
- `public/` – Profile photo, resume PDF, and GitHub SVG icons

## Getting Started

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

## Deployment

Pushing to `main` automatically builds and publishes the site to GitHub Pages via a git pre-push hook.

After cloning, run this once to activate it:

```sh
git config core.hooksPath .githooks
```

The hook (`.githooks/pre-push`) runs `npm run build && npm run deploy` before the push completes. If the build fails, the push is aborted.

## Contact

[LinkedIn](https://www.linkedin.com/in/andrew-murwin/) · [GitHub](https://github.com/amurwin/)
