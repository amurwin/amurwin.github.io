#!/usr/bin/env node
/**
 * Playwright driver for amurwin.github.io
 *
 * Usage:
 *   node .claude/skills/run-amurwin-github-io/driver.mjs [url] [output.png]
 *
 * Defaults: url=http://localhost:3000  output=/tmp/screenshot.png
 *
 * The dev server must already be running (`npm run dev`).
 */

import { chromium } from "playwright";
import { resolve } from "path";

const CHROME = "/home/drewrocker/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome";

const url = process.argv[2] ?? "http://localhost:3000";
const out = resolve(process.argv[3] ?? "/tmp/screenshot.png");

const browser = await chromium.launch({ executablePath: CHROME });
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });

await page.goto(url, { waitUntil: "networkidle" });
await page.screenshot({ path: out, fullPage: false });
console.log(`Screenshot saved: ${out}`);

await browser.close();
