---
name: run-amurwin-github-io
description: Run, start, screenshot, or verify the amurwin.github.io Next.js portfolio site. Use this skill whenever asked to run the app, take a screenshot, check a UI change, or confirm a feature works in the browser.
---

Andrew Murwin's personal portfolio site — Next.js 15, React 19, Tailwind CSS v4, static export to GitHub Pages. Driven headlessly with Playwright via `.claude/skills/run-amurwin-github-io/driver.mjs`. The dev server runs on port 3000.

## Prerequisites

Playwright Chromium must be installed (one-time, ~115 MB):

```bash
npx playwright install chromium
```

Chromium ends up at:
`~/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome`

The driver hardcodes this path. If the version number changes after a `playwright` package upgrade, update the `CHROME` constant in `driver.mjs`.

`playwright` is already a dev dependency (`npm install` covers it).

## Build

```bash
npm install
npm run build   # produces out/
```

## Run (agent path)

Start the dev server in the background, then use the driver to screenshot any page:

```bash
# Start dev server
npm run dev > /tmp/nextdev.log 2>&1 &

# Wait for it to be ready
until curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q 200; do sleep 1; done

# Screenshot a page
node .claude/skills/run-amurwin-github-io/driver.mjs http://localhost:3000 /tmp/home.png
node .claude/skills/run-amurwin-github-io/driver.mjs http://localhost:3000/blog /tmp/blog.png
node .claude/skills/run-amurwin-github-io/driver.mjs http://localhost:3000/blog/webpack-v4-to-v5-migration /tmp/article.png
```

Arguments: `[url]` (default: `http://localhost:3000`) and `[output-path]` (default: `/tmp/screenshot.png`).

To stop the dev server:

```bash
pkill -f "next dev"
```

## Run (human path)

```bash
npm run dev
# open http://localhost:3000 in a browser
```

## Deploy

Pushing to `main` triggers the pre-push hook, which builds and deploys automatically:

```bash
git push origin main
```

The hook runs `npm run build && npm run deploy` before the push transfers.

## Test

```bash
npx tsc --noEmit   # type-check only; no test suite currently
npm run lint
```

## Gotchas

- **`chromium-cli` is not installed** in this environment. `playwright` (dev dep) + `npx playwright install chromium` is the correct path. The raw Chrome `--screenshot` flag exists but doesn't wait for JS hydration — Next.js pages render blank with it.
- **`networkidle` required** — the app uses Framer Motion animations and client-side hydration. `DOMContentLoaded` or `load` leaves content missing. Always use `waitUntil: 'networkidle'`.
- **Navbar scroll links only appear on `/`** — on `/blog` and article pages, the navbar only shows "Writing" (the page link). Home/Experience/Education/Skills are scroll anchors that only make sense on the home page. This is intentional.
- **Articles are `.md` files in `src/content/articles/`** — frontmatter fields `title`, `date`, `description`, `tags` are required. The slug is the filename without `.md`. No code changes needed to publish a new article.
- **`output: "export"` in next.config.ts** — `next start` does not work (static export only). Use `npm run dev` for local and `npm run deploy` for production.
