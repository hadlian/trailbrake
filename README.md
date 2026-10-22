# TrailBrake storefront prototype

A responsive, local-only storefront concept based on a public-site UX audit. It is a separate static application: it does not modify, call commerce APIs on, or deploy to trailbrake.com.

## Run the preview

Requires Node.js 18 or newer. No dependency installation is needed to serve the site.

```sh
npm run dev
```

Open **http://127.0.0.1:4173**. The server binds only to loopback. To change the port, run `PORT=4174 npm run dev`.

## What works

- Homepage with use-case shopping paths and local product photography.
- Six-product demo catalog with category/use filters, price sorting and keyword search.
- Product detail pages with required configuration selection, quantity and compatibility notes.
- Browser-local cart with quantity controls, removal, persistence and text parts-list download.
- Three-step system planner with explicit unresolved compatibility questions and a downloadable checklist.
- Learning center with three introductory demo articles and links to original reference resources.
- Expert-support page and responsive navigation with keyboard/Escape behavior.

There is **no checkout, payment, inventory reservation, account login, API key, analytics integration or automatic message sending**. Stock and compatibility are not verified. Prices are illustrative snapshots, not current offers. The planner suggests a foundation rather than claiming to generate a complete compatible system. Cart state stays in the current browser's localStorage under `trailbrake-demo-cart`.

All automatic asset requests are local. External reference links and the phone link only activate when clicked. No production deployment workflow is configured. The preview server accepts only GET/HEAD requests and sends noindex headers and a Content Security Policy that blocks network connections.

## Project structure

```text
prototype/
  index.html          Shared shell, navigation and footer
  style.css           Responsive design system and component styles
  app.js              Demo catalog, hash routes and interactions
  assets/             Local product images, favicon and source attribution
scripts/
  serve.cjs           Read-only, loopback-only static preview server
  qa.cjs              Playwright + axe functional/accessibility checks
MODERNIZATION_PLAN.md  Original audit and proposed production roadmap
```

The app deliberately uses plain HTML/CSS/JavaScript without a build step. A future production implementation should port the approved components into the actual BigCommerce Stencil theme and connect verified catalog data there; do not deploy these demo data structures as a live store.

## Checks

```sh
npm run check
npm install
npx playwright install chromium
# Keep npm run dev running in another terminal.
npm run test:ui
```

Alternatively use an existing Chrome installation:

```sh
CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" npm run test:ui
```

UI checks cover seven page types at 375, 768 and 1440 pixels, axe WCAG-tagged rules, overflow, external request detection, search, filtering, configuration selection, cart totals/quantity/persistence/removal, downloads, the planner and mobile menu Escape handling. Results/screenshots go into ignored `prototype-qa/`. Automated accessibility checks are not a WCAG conformance certification.

## Assets and editorial accuracy

Product photographs are copied from the publicly observed TrailBrake catalog for this design prototype. Source URLs are recorded in `prototype/assets/sources.json`; applicable rights remain with their owners. Do not treat image filenames or these snapshots as manufacturer confirmation of a hardware revision. Trail diagrams and telemetry illustrations are original interface graphics, not measured track data.

Learning-center text is introductory prototype editorial copy, not a claim to reproduce Matt Romanowski's original articles. Compatibility and model-specific installation details require expert review.

## Audit files

The original `MODERNIZATION_PLAN.md` accompanies the prototype. Its detailed raw evidence and screenshots remain local under `audit/` and are not needed to run this application. Some evidence links in that report therefore require the original audit workspace. Generated output, raw audit captures, local test artifacts, dependencies and secrets are excluded from commits.
