---
title: "Migrating a Large React App from Webpack 4 to Webpack 5"
date: "2024-11-12"
description: "How we achieved a 38% bundle size reduction by migrating our enterprise React application from Webpack 4 to Webpack 5 at Starbucks."
tags: ["webpack", "react", "performance", "frontend"]
---

At Starbucks, our main customer-facing web application had been running on Webpack 4 since its initial build. As the app grew — more features, more dependencies, more engineers — so did our bundle sizes and build times. This post covers the migration we did to Webpack 5 and the lessons we learned along the way.

## Why Migrate?

Webpack 5 introduced several features that mattered directly to us:

- **Persistent caching** — build artifacts written to disk, dramatically reducing rebuild times
- **Module Federation** — first-class support for sharing code across micro-frontends
- **Improved tree-shaking** — better dead code elimination via inner-module relationships
- **Asset modules** — replacing `file-loader`, `url-loader`, and `raw-loader` with built-in handling

Our primary goal was bundle size reduction and faster CI builds. We were also looking ahead to potentially splitting the app into micro-frontends using Module Federation.

## The Migration Path

### 1. Audit your loaders and plugins

The most common blockers in a v4→v5 migration are outdated loaders and plugins. Run:

```bash
npx webpack-bundle-analyzer --help
```

We created a spreadsheet tracking every loader and plugin with its current version, v5 compatibility status, and replacement (if any). Some were dropped-in replacements; others required config changes.

### 2. Replace deprecated loaders

Webpack 5 deprecated several common loaders in favor of built-in asset modules:

```js
// Before (Webpack 4)
{
  test: /\.(png|jpg|gif)$/,
  use: [{ loader: 'file-loader', options: { name: '[hash].[ext]' } }]
}

// After (Webpack 5)
{
  test: /\.(png|jpg|gif)$/,
  type: 'asset/resource',
  generator: {
    filename: '[hash][ext]'
  }
}
```

This alone removed three packages from our dependency tree.

### 3. Enable persistent caching

This was the biggest win for developer experience:

```js
module.exports = {
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
};
```

Cold builds stayed the same, but subsequent builds dropped from ~90s to ~12s for most incremental changes.

### 4. Shake out the size

The real bundle size wins came from improved tree-shaking and removing polyfills that Webpack 5 no longer injects automatically. In v4, Webpack automatically bundled Node.js polyfills for modules like `crypto`, `buffer`, and `path`. In v5, you opt in:

```js
resolve: {
  fallback: {
    crypto: false, // not needed in browser
    buffer: require.resolve('buffer/'),
  }
}
```

This caught several libraries that were pulling in massive Node polyfills unnecessarily.

## Results

After a two-week migration effort across two engineers:

- **Bundle size**: down 38% (main chunk: 2.1MB → 1.3MB gzipped)
- **CI build time**: down ~40%
- **Local rebuild time**: down ~85% after initial warm cache

## What Would We Do Differently

The migration itself wasn't hard — but the audit phase took longer than expected because we had undocumented `webpack.config.js` modifications spread across multiple environment files. If I were doing it again, I'd consolidate the config first, then migrate.

Also worth noting: if you're on Create React App, you'll need to eject or use a tool like `craco` to access the Webpack config directly. We were not on CRA, which made this significantly cleaner.
