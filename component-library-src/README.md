# Maple Component Library

Astro source for Maple components, page structures, and AP News prototypes. The app builds static files into the repository's `component-library/` directory for deployment with the rest of the static site.

## Requirements

- Node.js 20.19 or newer supported release
- npm 10 or newer

## Commands

```sh
npm ci
npm run dev
npm run check
npm run build
```

Run `npm run validate` before committing. It checks Astro and TypeScript, then regenerates the static output.

## Source And Output

- Edit files in `component-library-src/src/`.
- Treat `component-library/` as generated deployment output.
- Commit source and generated output together so Netlify can continue publishing the repository root without a separate build configuration.
- The repository-wide font remains at `/fonts/APVarW05-Regular.woff2`; the Astro stylesheet resolves its project copy through the build pipeline so development and deployed pages use the same font.

## Article Prototypes

- Small reusable interface contracts live in `src/components/base/`.
- Reusable content slots live in `src/components/slot/`.
- Larger composed modules live in `src/components/module/`.
- Reusable article pieces live in `src/components/article/`.
- Complete page composition lives in `src/layouts/ArticleTemplate.astro`.
- Shared prototype content lives in `src/data/article-fixtures.ts`.
- Stable template routes live under `src/pages/article-redesign/`.
- Use the comparison page at `/component-library/article-redesign/compare/` to review each template at canonical page widths.

Keep fixture content independent from layout decisions. Add a new template by registering its ID in `article-fixtures.ts` and handling its presentation in `ArticleTemplate.astro` rather than duplicating the complete page.
