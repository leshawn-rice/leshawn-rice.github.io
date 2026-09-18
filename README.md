# leshawnrice.com

Personal site for Leshawn Rice — Platform Engineer.

Vite + React, no UI framework. The previous build was a jQuery/Bootstrap 3
template (Revolution Slider, cubePortfolio, owl-carousel, mo.js, LESS); this
version keeps the same look and drops all of it.

## Local development

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build into dist/
npm run preview  # serve the built dist/ locally
```

## Layout

```
index.html              page shell: title, meta, fonts
public/                 copied verbatim into the build
  CNAME                 custom domain for GitHub Pages
  docs/                 resume PDF
src/
  data/site.js          ALL page copy and content lives here
  components/           one component per section
  lib/                  small helpers (rich text, scroll spy)
  styles/               SCSS partials, one per section
  assets/               hero images, tool logos
```

Editing content — a job, a certification, a tool, contact details — means
editing `src/data/site.js` and nothing else. Copy supports `**bold**` markers.

## Logo

The wordmark is not an image file. `src/components/Logo.jsx` is an inline SVG
mark plus live Montserrat text, coloured through CSS custom properties
(`--logo-tile`, `--logo-ink`, `--logo-cursor`, `--logo-dot`). The nav
overrides them when it goes from the dark hero to the white sticky bar, so
there is no light/dark asset pair to keep in sync.

The favicons in `public/` are rendered from that same mark.

## Hero imagery

`src/assets/hero/hero-dashboard.jpg` is the original isometric illustration from
the previous build, recoloured from violet to green. A plain hue rotation washed
it out (HSV preserves value, not luma) and scattered the minority hues - cyan
landed on blue, orange on magenta - so the recolour folds every hue into a band
around 140 deg and rescales each pixel back to its original luma. The script
that did it is not checked in; it was a one-off.

`src/assets/hero/hero-fiber.jpg` is from Unsplash (`photo-1760344594784-60ff14035eb0`),
mirrored so the bright side sits clear of the headline. The Unsplash License
does not require attribution.

## Tool logos

Full-colour SVGs from [gilbarbara/logos](https://github.com/gilbarbara/logos).
Azure DevOps and PowerShell have no entry there, so those two stay as
transparent PNGs.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to the `gh-pages` branch. GitHub Pages serves that branch.

`gh-pages` is a build artefact — never commit to it by hand.
