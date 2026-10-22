# TrailBrake modernization plan

Audit date: October 22, 2026, America/New_York. Public storefront: [trailbrake.com](https://trailbrake.com/).

**Recommendation: retain BigCommerce and modernize the Stencil storefront.** Start with product accuracy, mobile buying paths, and unnecessary script loading. TrailBrake’s differentiator is expert system planning for racers; the current store presents a large parts inventory more clearly than it presents that expertise. A new platform is not needed to correct the problems found here.

The strongest immediate opportunities are correcting MyChron/MXS model information, bringing products above the mobile category list, replacing the image-only carousel with a useful headline and shopping routes, and reducing embedded social/video work. Build a reviewed compatibility dataset before deploying a public AI compatibility assistant.

Evidence labels used below:

- **Verified:** observed in saved HTML, browser DOM, screenshots, network responses, or audit output.
- **Assessment:** UX/engineering interpretation of that evidence, not a measured conversion loss.
- **Proposed:** implementation or target; requires store-owner verification where indicated.
- **Unknown:** unavailable account data, untested behavior, or insufficient public evidence.

## 1. Current state

### Scope and method

Inspected the homepage, Dashes & Loggers category, MyChron 6 product, empty cart, MXS search results, and Data Analysis Tips at **375 × 900, 768 × 900, and 1440 × 900 CSS pixels**. Saved 18 full-page screenshots and 18 JSON evidence files. Browser tests used headless Google Chrome via Playwright, fresh browser contexts, device scale factor 1, desktop user agent, network-idle navigation plus a 2.5-second wait. These are responsive-width tests, not physical iPhone/iPad tests. Cookie choices were left untouched to capture first-visit conditions.

Ran axe-core 4.14 rules tagged WCAG 2 A/AA, 2.1 A/AA, and 2.2 AA. Ran Lighthouse 13.5.0 three times with mobile simulated throttling and once with its explicit desktop configuration. Retrieved original homepage/product HTML, response headers, robots.txt, sitemap index, category sitemap, and selected additional URLs. The source includes platform and theme markers; the workspace has no Stencil theme source, package manifest, or deployable storefront files.

**Limitations:** no analytics, Search Console, Merchant Center, inventory backend, customer-group pricing, order history, or theme administration access. Cart inspection covers the empty state; populated cart, option-to-cart behavior, checkout, payment, account login, human screen-reader testing, and real-device interaction are not certified. This is a sample audit, not a full-site crawl. No purchase was placed and no live setting was changed.

The PageSpeed field-data request returned HTTP 429/quota exhaustion. Consequently, **real-user LCP, INP, and CLS are unavailable**. Lighthouse LCP/CLS below are lab results; TBT is not INP. No field Core Web Vitals pass/fail is claimed. [Google’s field-metric explanation](https://web.dev/articles/defining-core-web-vitals-thresholds).

### Verification of the supplied observations

| Observation | Finding |
|---|---|
| AiM dealer/support shop in Manchester | **Verified as the store’s own claim:** About Us says authorized AiM dealer and describes Matt Romanowski’s sales, support, and system-planning experience. Address is 500 Harvey Road, Unit 103, Manchester NH 03103; phone 603-232-9096. Manufacturer-side authorization was not independently checked. |
| MyChron, Solo, dashes, cameras, PDM, sensors, CAN and TrailBrake products | **Verified** in navigation and product listings, including TPMS Unlimited and the TrailBrake brand. |
| BigCommerce Stencil | **Verified:** `meta name="platform" content="bigcommerce.stencil"`, BigCommerce CDN assets, Stencil theme bundles. `emthemesModez` classes identify a theme customization family, not a verified commercial theme version. |
| Category tree repeated three times | **Qualified:** full header/mobile-menu and sidebar trees appear in source; the footer repeats top-level categories rather than the full nested tree. They are not all simultaneously expanded visually. The desktop sidebar still consumes valuable space, including on cart/content pages. |
| Mixed URL patterns | **Verified**, including `/store/`, `/shop/`, root product slugs, `/brands/MyLaps.html`, and `/mychron-accessories-1/`. This alone does **not** establish duplicate content or broken redirects. Tested examples return 200 with self-referencing canonicals. |
| Generic homepage metadata and keyword typo | **Verified:** title is `TrailBrake.Com`; description is a generic support claim; keyword tag contains `Aquisition` and repeated PDM32. Product/category titles are more specific. |
| Empty MSRP/Was labels on cards | **Present in source, not visibly reproduced on sampled cards.** The source wraps unused values in `display: none` containers. Text-only extraction exposes them. Treat as markup/robustness cleanup, not a proven visible pricing failure. |
| Raw URL hero captions | **Not reproduced.** The five-slide carousel has linked images and no useful visible headline/caption in the sampled source or screenshots. URLs are link destinations, not observed visible captions. |
| Stock hype, clipped descriptions, model drift | **Verified.** Product copy uses `IN STOCK!!!`; card summaries are truncated. The `/mxs/` title says MXS 1.3 while its description and metadata say MXS 1.2. Truncating card excerpts is not inherently defective; inaccurate source copy is. |
| Underused expertise | Tips, YouTube handle `@TrailBrakeData`, telephone support, and detailed About Us are **verified**. Their underuse is a UX assessment: the main buying route lacks prominent expert guidance. |

Additional high-priority discovery: **the MyChron 6 meta description describes the MyChron 5**, and its primary product photograph visibly carries a **MYCHRON6 2T** label. Verify whether the image represents the sold variant. The MXS “more info” link contains an entire encoded prose paragraph in its destination instead of a meaningful manual/product URL; the malformed href is verified, but its destination was not separately tested.

### Page-by-page findings

| Page | Verified current state | Assessment / practical implication |
|---|---|---|
| [Home](https://trailbrake.com/) | Blue branded header, search, desktop category sidebar, five auto-advancing hero images, Featured/New product presentation, brands, newsletter, repeated footer categories. Homepage H1 has no visible text in the DOM extraction. Large blank region appears in the desktop full-page snapshot. Phone/address visible on desktop; mobile uses compact header. | A new karter or track-day driver must infer where to start. Lead with “AiM data systems, configured for your car or kart,” two clear shopping routes, and expert support. Inspect theme section heights/hidden widgets before attributing the blank region to a specific cause. |
| [Dashes & Loggers](https://trailbrake.com/store/dashes-and-loggers/) | Specific title and H1; meta description incorrectly discusses PDM systems. Four dash cards appear in the captured listing, alongside model subcategories. At 375 and 768, a long expanded subcategory list precedes product cards. Breadcrumb schema and self-canonical exist. | Shopping by acronym requires prior expertise. Add short use-case comparisons and compact model filtering; collapse the category list on mobile so buyers can see products earlier. The snapshot is not a claim that the entire category has only four products. |
| [MyChron 6](https://trailbrake.com/mychron-6/) | Gallery, MPN XM6CHT140, $609–$659 range, required sensor options, quantity, “Ships in 1–3 days when in stock,” and an empty “Current stock” label in extracted text. Copy explains 1.4m versus .4m CHT connections. Video, related products, and a “frequently bought together” section already exist. No consolidated specification table or local downloads section was found in the sampled description. | Preserve useful connector explanation and existing cross-sells, but move compatibility beside sensor selection. Replace generic/contradictory availability wording with variant-specific status. Confirm actual stock in the backend. On mobile, the tall gallery pushes title, price, and selection down; first-visit consent further covers the lower viewport. |
| [Cart](https://trailbrake.com/cart.php) | Empty-cart title/message; full sidebar/brand/social/newsletter scaffolding. No prominent shopping-recovery CTA in captured main content. Robots disallows this route. | Add “Continue shopping” and “Build a system” paths. Remove merchandising clutter from cart layout. Populated-cart totals, shipping estimates, edits, and checkout remain an explicit release-test requirement. |
| [Search: MXS](https://trailbrake.com/search.php?search_query=MXS) | Redirects to a URL with `section=product`; 22 results, category suggestions, product/content tabs, pagination. First results include MXSl and MXK10 ahead of MXS 1.3. Content tab has 0 results for this query. Title is generic; canonical is `/search.php`. | This single query suggests exact-model ranking needs attention; it does not prove search is universally poor. Benchmark model names, abbreviations, spelling errors, connector searches, and natural-language intent before buying a search app. Keep utility search out of organic landing-page strategy. |
| [Data Analysis Tips](https://trailbrake.com/data-analysis-tips/) | Paginated article index with sensor/driver-data topics and authors/dates. Newest visible item is February 2, 2025; older SmartyCam 3 content remains. Breadcrumb schema present. Sidebar and newsletter surround the articles. | Useful expertise is already available. Add topic/model filters, “reviewed on” dates, current-product links, transcripts, and archive notices where hardware generations have changed. Article excerpts are intentionally clipped; review full articles before rewriting them. |

Trust assets include a real address, clickable phone number, named expert, dealer claim, shipping/return policy, payment logos, and technical articles. About Us describes a Solo 2 trial program; confirm it is still offered before featuring it. The return page says most new unopened items may be returned within 30 days and identifies a 3pm UPS cutoff without a timezone. Clarify applicable conditions and timezone. No ratings/review block was found in the sampled MyChron text/schema; this is not proof that the store has no reviews elsewhere. [About Us](https://trailbrake.com/about-us/), [Shipping & Returns](https://trailbrake.com/shipping-returns/).

### Screenshots

All original captures are in [the screenshots folder](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots). A compact overview shows the initial viewport of each page at all three widths:

![Six pages at three viewport widths](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/contact-sheet.jpg)

| Page | 375px | 768px | 1440px |
|---|---|---|---|
| Home | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/home-375.png) | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/home-768.png) | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/home-1440.png) |
| Category | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/category-375.png) | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/category-768.png) | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/category-1440.png) |
| Product | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/product-375.png) | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/product-768.png) | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/product-1440.png) |
| Cart | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/cart-375.png) | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/cart-768.png) | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/cart-1440.png) |
| Search | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/search-375.png) | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/search-768.png) | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/search-1440.png) |
| Tips | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/tips-375.png) | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/tips-768.png) | [Capture](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/screenshots/tips-1440.png) |

No document-level horizontal overflow was detected in these 18 states. This does not verify menus, selected options, zoom, validation errors, or checkout. At 375px, the consent panel spans approximately y=696–900 in the 900px viewport; the language control overlaps its lower-right region. Keep consent controls accessible while reducing obstruction. Screenshot creation and dynamic widgets can affect lazy-loaded content, so card counts and third-party states vary between captures.

### Measured performance

Lighthouse homepage measurements, not field data:

| Profile | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT | Transferred bytes | Requests |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Mobile run 1 | 55 | 94 | 58 | 100 | 21.348s | 0.000 | 25ms | 2,751,986 | 135 |
| Mobile run 2 | 55 | 94 | 58 | 100 | 21.089s | 0.000 | 22ms | 2,750,474 | 135 |
| Mobile run 3 | 55 | 94 | 58 | 100 | 18.790s | 0.041 | 19ms | 2,732,654 | 128 |
| Desktop | 92 | 94 | 58 | 100 | 1.562s | 0.020 | 0ms | 2,723,779 | 134 |

Mobile median: **55 performance, 21.089s simulated LCP, 0 CLS, 22ms TBT**. Mobile uses Lighthouse’s 412 × 823 emulation, 150ms RTT/1,638.4Kbps simulation and 4× CPU slowdown; desktop uses 1350 × 940 and the desktop preset. These differ from screenshot dimensions. One initial attempt to select desktop through a flag retained mobile settings and was excluded; the saved desktop result explicitly reports `formFactor: desktop`.

The mobile score is repeatable in this environment, but the simulated LCP is not an assertion that every shopper waits 21 seconds. The first trace’s observed LCP breakdown is much shorter than its simulated result, and the moving carousel complicates attribution. Verify changes with repeated controlled runs and real-user measurement. Lighthouse identifies the SmartyCam hero image as LCP and flags missing `fetchpriority="high"`; the image is already discoverable in initial HTML and is not lazy loaded. It also flags render-blocking work, including Weglot and font/theme resources. Do not “fix” this by simply lazy-loading the hero.

The SEO score of 100 only passes Lighthouse’s limited checks; it does not detect the wrong MyChron model in the description or guarantee rankings. Best-practices failures include deprecated APIs, third-party cookies and browser inspector issues; 58 is not a standalone security rating.

Additional per-page measurements from Playwright:

| Page | Decoded response-body MB: 375 / 768 / 1440 | Top-document script elements: 375 / 768 / 1440 | External scripts at 375 |
|---|---|---|---:|
| Home | 11.49 / 10.61 / 10.60 | 42 / 42 / 43 | 26 |
| Category | 6.05 / 6.04 / 6.05 | 43 / 43 / 44 | 26 |
| Product | 14.41 / 14.55 / 10.10 | 57 / 57 / 56 | 37 |
| Empty cart | 5.88 / 5.88 / 5.88 | 45 / 44 / 43 | 28 |
| Search | 4.35 / 4.42 / 4.61 | 44 / 44 / 43 | 27 |
| Tips | 5.90 / 5.98 / 5.98 | 43 / 43 / 44 | 26 |

MB means decimal megabytes. These totals sum accessible decoded response bodies through the screenshot/axe measurement interval, include iframe resources and repeated responses, and exclude failed/unreadable bodies. **They are not compressed network transfer sizes** and must not be compared directly to Lighthouse bytes. Script counts include inline elements but exclude scripts inside iframe documents. Per-page field vitals and non-homepage Lighthouse scores were not measured.

Observed script families: BigCommerce theme, checkout loader, consent manager and BODL analytics; GA4; Microsoft Clarity; Klaviyo; Weglot; Facebook SDK/widget; YouTube embeds; jQuery 3.4.1; an infinite-products-scrolling microapp; and a `.webmcp/bridge.js` module. Presence does not establish usefulness, duplicated event firing, or a vulnerability. Audit owners and actual execution before removal.

The desktop homepage capture downloaded **27 WebP, 6 JPEG, 2 PNG, 1 GIF and 1 SVG image responses**. Some `.jpg` URLs already deliver `image/webp`, so extension-only audits would be misleading. Examples from mobile capture:

| Asset | Actual response format | Response-body size | Display/source detail |
|---|---|---:|---|
| MyChron primary gallery image, `640w/...1489/...jpg` | WebP | 18,444 bytes | Rendered approximately 337 × 190px on product page; CDN rendition URL is 640w. |
| Product gallery alternate, `640w/...1490/...jpg` | WebP | 38,234 bytes | Existing responsive CDN delivery. |
| Homepage product image, `640w/products/377/461/...jpg` | JPEG | 81,476 bytes | Candidate for format/size review. |
| Homepage SmartyCam product image, `640w/products/846/1754/...jpg` | JPEG | 72,922 bytes | Candidate for format/size review. |
| Shared icon sprite | SVG | 108,431 bytes | Review actual icon usage before replacing. |

Mobile homepage YouTube `base.js` alone accounts for 1,865,256 decoded bytes in the Playwright run. Main theme JS is 448,424 decoded bytes; theme CSS is 494,665 bytes per observed response. Google Fonts requests Barlow 400/600 with `display=block`; Font Awesome WOFF2 transfer is approximately 78KB in Lighthouse. Video/social facades and script scheduling deserve priority alongside image work.

### Accessibility findings

Axe results are distinct rule types / summed failing node instances within each page state. These are not unique site-wide issues and not a conformance certificate.

| Page | 375px | 768px | 1440px |
|---|---:|---:|---:|
| Home | 7 / 9 | 6 / 7 | 6 / 8 |
| Category | 1 / 2 | 1 / 2 | 2 / 4 |
| Product | 6 / 7 | 6 / 7 | 2 / 4 |
| Cart | 1 / 2 | 1 / 2 | 2 / 4 |
| Search | 1 / 2 | 1 / 2 | 1 / 5 |
| Tips | 1 / 2 | 1 / 2 | 2 / 4 |

Specific findings:

- Product mobile video thumbnail `.video-figure > .lazyload[data-sizes="auto"]` lacks alternative text.
- Search category suggestions include 18px-high targets with insufficient spacing; desktop account links include 20px-high targets with insufficient separation.
- Homepage embedded video lacks an accessible frame title. YouTube internals produce prohibited/unsupported ARIA and unnamed-button findings; mobile also has hidden-focus/contrast findings in that state.
- Facebook iframe links produce unnamed-link findings across several pages. These are third-party iframe issues, not all native theme defects.
- Counts change with viewport and embedded-player state. The lower desktop product count does not demonstrate that the mobile failures are fixed.

Reduce always-on embeds, fix theme-owned names/alt/targets, and test third-party content after activation. Complete keyboard navigation, focus return, menu Escape behavior, carousel pause, 200% text resize, 320px reflow/400% zoom, form errors, live cart announcements, and screen-reader checks before claiming WCAG 2.2 AA. [W3C WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/).

### SEO, schema, URLs and headers

- Home has a self-canonical and no JSON-LD or microdata found in the captured DOM/source. Category, product and Tips have self-canonicals. Cart lacks a canonical in the captured DOM, which is not by itself a critical defect for an excluded utility page.
- MyChron source **already contains Product with nested Offer, seller Organization, and BreadcrumbList**. Offer price is USD 609 and availability is InStock. Visible range is $609–$659 with required sensor options. Audit the base/default offer against actual purchasable variants; a starting price is not automatically erroneous. Inventory truth cannot be established from public markup.
- Existing Offer includes US shipping handling/transit ranges and a 30-day return policy. Verify the structured claims against operational policy; shipping cost and detailed return-fee terms were not present in the sampled Offer. Do not invent them to satisfy a validator.
- A standalone business identity/address entity and LocalBusiness markup were not found on home. FAQ markup was not found in the six pages. Breadcrumbs exist; do not add duplicate copies. Missing Product schema on cart, search or an article index is not a defect.
- `/shop/sensors/pressure/`, `/mychron-accessories-1/`, and `/brands/MyLaps.html` return 200 with self-canonicals. Mixed patterns are a maintenance concern, not sufficient evidence for a mass URL migration. `/mychron/mychron-6/` is a category and `/mychron-6/` a product; do not merge them merely because names resemble each other.
- `/sitemap.xml` returns 404, but robots correctly advertises the working `/xmlsitemap.php`, which returns an index with pages, products, categories, brands and news sitemaps. A sitemap does not have to be named sitemap.xml.
- Robots excludes cart, checkout, accounts, internal search and certain faceted query patterns for the generic agent. A separate named-agent group includes OAI-SearchBot, ChatGPT-User, PerplexityBot and others, with crawl delay 10 and a **narrower** exclusion list. Public catalog crawling is not blanket-blocked. Review group parity: named bots may not inherit generic restrictions such as search/login exclusions. Bot support for crawl-delay varies.
- HTTPS response is HTTP 200 through Cloudflare, with `x-content-type-options: nosniff`. Main HTML uses `no-store, no-cache, must-revalidate`; do not override personalized/cart caching to chase a score. `strict-transport-security: max-age=0` was observed: discuss supported HSTS configuration with BigCommerce after verifying all relevant hosts support HTTPS. This is not a finding that checkout is insecure.

## 2. Recommendations

Effort: **S = up to 1 developer day; M = 2–5 days; L = 6–15 days**, unless an explicit larger range is given. Impact is expected, not measured revenue lift. Theme paths below are conventional Stencil/Cornerstone targets to locate in the downloaded theme; the live theme may use vendor-specific equivalents. Confirm its partial structure before editing. BigCommerce supports custom templates for page, category, product and brand pages. [Stencil custom templates](https://docs.bigcommerce.com/developer/docs/storefront/stencil/themes/templates/custom-templates).

### Information architecture and guided buying

| ID / priority | What is there now | Specific change and implementation target | Why / evidence | Effort / impact |
|---|---|---|---|---|
| R1 / P1 | Acronym-heavy tree in navigation/sidebar; top-level footer repetition | In `components/common/navigation-menu.html`, header and footer equivalents, use Shop, Build Your System, Learn, Support. Shop opens product-type groups plus Karting, Track Day, Club Racing and Team Systems landing links. Mobile uses accordion disclosure buttons. Preserve every category through landing pages; remove full-tree sidebar from home/product/cart/content, retain contextual category filters. | Mobile category list delays products; expert and novice buyers need different entry routes. | L / High |
| R2 / P1 | Mixed but functioning, self-canonical URLs | Export catalog/page URLs, sitemap, Search Console landing pages and backlink targets. Build `old_url,new_url,reason,status` map. Preserve established product URLs; normalize new category URLs. Use BigCommerce URL redirect settings/API for **confirmed** replacements only; update internal links/canonicals/sitemap and test single-hop 301→200. | Protect existing organic value; no duplication was proven by the sample. Do not redirect all old paths to home. | M / Med |
| R3 / P1 | Categories offer parts, not a system decision flow | Add a Stencil custom Page template for a deterministic “Build your system” MVP: usage → existing hardware/ECU → dash/logger → sensors → harness/patch cables → reviewed bill of materials. Start with one kart kit and one track-day kit. Use catalog product/variant IDs and existing cart endpoints. | The MyChron sensor options already demonstrate why connector/length selection needs guidance. | L, 8–12 days / High |
| R4 / P1 | Compatibility buried in prose; related/frequently-bought sections already exist | Create reviewed compatibility records keyed by SKU/variant and hardware revision: connector family, pin count, gender/keying, supply voltage, signal/protocol, channel, firmware, adapter/cable SKU, source page/revision, reviewer/date, compatible/incompatible/unknown. Expose concise custom fields in a new `components/products/compatibility.html`; keep complex relations server-side. | A 719 Binder label or “CAN” does not prove electrical/protocol compatibility. Prevent wrong cable/sensor purchases. | L, 6–10 days for first 20 priority products / High |

**Proposed menu content:** Product type groups should be Dashes & Loggers; Lap Timers; Karting; Cameras; Sensors & TPMS; PDM, CAN & Wiring. Place lesser-used brands and merchandise behind “All products/brands.” User-type landing pages should explain jobs: a karter selecting temperature inputs; a track-day driver wanting lap timing and video; a club racer monitoring oil pressure and tires; a pro team planning channels, logging, power and support. “Shop by vehicle” is a use-case route until model/ECU compatibility data is verified; do not imply vehicle fitment from broad category membership.

The builder must ask for **exact existing model/revision and connection**, not merely “MXS.” Example: present the existing MyChron CHT 1.4m/.4m distinction alongside the option, show whether a patch cable is included, and block a complete-kit claim if that cable’s SKU is unverified. For a dash kit, list each required item, quantities, included-in-box items, missing items, optional upgrades and total live price. Validate every required option and stock immediately before cart submission. Partial add failures must identify the item; no silent substitutions. Offer “Send this list to a data expert” for unknown combinations.

### Product pages, content and visual design

| ID / priority | What is there now | Specific change and implementation target | Why / evidence | Effort / impact |
|---|---|---|---|---|
| R5 / P0 | Wrong MyChron metadata; MXS 1.2/1.3 drift; malformed MXS info link; possible 2T image mismatch | Correct catalog SEO fields, descriptions and image assignments for MyChron 6 and MXS first. Check each against current manufacturer documentation and sold SKU. Replace malformed link with reviewed manufacturer/manual destination. Extend review to top 20 products. | Verified incorrect model information undermines purchases, search snippets and any future AI retrieval. | S for first two, M for 20 / High |
| R6 / P1 | Narrative descriptions, variant radio buttons, video and related items; no consolidated specs/download block in sample | Refactor `components/products/product-view.html` and description/custom-field partials: short benefits; specs table; included/not included; compatibility next to options; wiring diagram/manual links with revision/date; video facade/transcript; curated accessories. Keep deep technical detail in accessible accordions. | Racers need to verify channels, connector and kit contents without guessing. Existing assets should be improved, not rebuilt wholesale. | M–L / High |
| R7 / P0–P1 | Stock hype, blank Current stock label, hidden empty MSRP/Was markup | In catalog availability settings and `components/products/price.html` / option-update JS equivalents, show validated variant availability and ship estimate. Suppress empty stock labels; render comparison prices only when numeric and meaningful. Keep option-driven price containers compatible with theme JS. | “In stock” and “ships when in stock” are different promises. Empty price-label source is lower priority than stock/variant accuracy. | S–M / High for stock, Low for hidden labels |
| R8 / P1 | Image-only auto-carousel, small product text, oversized mobile gallery, long footer | Replace carousel with one static headline, product/system image, “Shop by system” and “Talk to a data expert.” In `pages/home.html`, carousel partial and theme SCSS, use 16px body text, 24/32/40px heading scale, 4/8/16/24/32/48 spacing, white cards on light neutral background, dark navy text and restrained red CTAs. Reduce mobile gallery height and put name/price/options earlier. | Current first viewport lacks a value proposition; mobile product choice is pushed down. Palette must pass contrast testing before release. | M–L / High |
| R9 / P1 | Phone in desktop chrome/footer, expertise mainly in About Us | Add “Talk to a data expert · 603-232-9096” beside compatibility/CTA and on mobile product pages; show confirmed support hours and response expectations. Link dealer credentials, accurate shipping/returns and expert biography. Request genuine post-purchase reviews via the existing commerce/email workflow; never fabricate ratings. | Higher-value systems benefit from reassurance and assisted conversion, not just fewer support calls. | S–M / High |
| R10 / P1 | Tips index mixes dated announcements with evergreen education | Keep existing article URLs; build a Learning Center index through `pages/blog.html`/custom Page and blog-post partials. Filter by goal, product family and experience. Add reviewed dates, author, transcript, diagrams, relevant products, and “what to buy next” only when justified. Label legacy model articles. | Existing sensor education can answer buying questions and attract qualified organic traffic. | M for index + 1–2h/article review / Med–High |
| R11 / P1 | Empty-cart dead end; search exact model not first | Add cart recovery CTAs in `pages/cart.html`/cart partials. Tune native synonyms/ranking where supported, remove irrelevant featured distractions on search, make category targets larger. Evaluate 30 real queries before choosing an app. | Empty-cart recovery and exact-SKU discovery are achievable without an AI project. | M / Med |

### Performance, accessibility and SEO

| ID / priority | What is there now | Specific change and implementation target | Why / evidence | Effort / impact |
|---|---|---|---|---|
| R12 / P1 | YouTube/Facebook embeds, many app scripts, heavy cart/content pages | Inventory Script Manager and theme injections with owner/purpose/page scope. Replace Facebook feed with a link and YouTube embeds with accessible poster/play-button facades. Load video on request. Measure Weglot usage and scope/defer it where supported; verify Klaviyo, Clarity and GA4 consent/event behavior. Test infinite scrolling and `.webmcp` module purpose before retaining/removing. | Mobile LCP poor; social/video payloads large; embeds account for many axe failures. Do not remove BigCommerce checkout/consent dependencies blindly. | M / High |
| R13 / P1 | Some WebP/responsive delivery already present; hero lacks priority hint; Barlow uses display=block | Keep CDN responsive images and verify actual Content-Type. Prioritize only the first hero/LCP image, supply explicit sizes/dimensions, lazy-load offscreen images, use modern formats where supported and compare quality. Change font display to swap through supported theme/font configuration, limit weights, consider SVG icons for used subset. Inspect render-blocking CSS/JS before splitting bundles. | Targets measured delivery issues without duplicating existing optimization. Avoid preloading every carousel slide or hiding essential text until fonts load. | M / High |
| R14 / P1 | Measured target-size, iframe-name, alt and third-party ARIA failures | Fix video thumbnail alt and iframe titles; enlarge search/account targets; implement visible focus, semantic disclosure buttons, menu focus return/Escape and live cart/error feedback. Replace autoplay carousel or provide pause/reduced-motion behavior. Review consent/language overlap. Run manual keyboard/VoiceOver tests and axe on open menus, selected variants, errors and populated cart. | Automated failures plus untested interactions prevent any AA claim. Use 44px design targets while meeting WCAG minimum/spacing rules. | M–L / High |
| R15 / P0 | Generic home metadata; incorrect product/category descriptions | Edit BigCommerce homepage SEO, category SEO and product SEO fields. Home title proposal: `AiM Data Loggers, Kart Dashes & Expert Support | TrailBrake`. Description proposal: `Shop AiM MyChron, Solo, dash loggers, sensors and TrailBrake TPMS. Get help choosing a compatible system from our Manchester, NH data experts.` Add meaningful visible homepage H1. Remove obsolete keywords where theme/settings allow. | Improves relevance and accuracy; metadata presence alone earned Lighthouse 100. No ranking gain is guaranteed. | S–M / High |
| R16 / P1 | Existing Product/Offer/Breadcrumb; no home business entity | Modify existing schema partials, not parallel competing blocks. Keep one business identity `@id`, model TrailBrake as an appropriate LocalBusiness/Organization entity with verified address/phone/logo/URL, and reference it from seller. Validate variant prices/stock, shipping/return terms, breadcrumbs and escaping. Add FAQPage only for real visible reviewed Q&A if useful to consumers of that data. | Product schema already exists. Google discontinued FAQ rich results in May 2026; FAQ markup is not a rich-result growth project. | M / Med |
| R17 / P1 | Public feed/account setup unknown; robots groups differ | Inspect Merchant Center diagnostics and existing BigCommerce feed integration before adding a second feed. Match SKU/variant IDs, title/model, images, price, currency, stock, shipping/returns and landing URLs. Normalize robots exclusions across intended groups after review. Check canonicals and index coverage using Search Console. | Reduces contradictory machine-readable claims and supports product discovery. Existing feed status cannot be inferred from public HTML. | M / High |
| R18 / P1 | No real-user vitals or conversion baseline available | Add consent-aware measurement of view-item, selected variant, add-to-cart, begin-checkout and purchase, plus expert-contact clicks and builder completion. Deduplicate existing GA4 integrations. Collect LCP/INP/CLS by template with privacy-conscious RUM, or use Search Console/CrUX where available. | Separates speed improvements and useful support from vanity scores; supports a small-store investment decision. | M / High |

Schema/feed guidance: Google recommends accurate Product data and Merchant Center feeds as complementary inputs; neither guarantees display. Keep server-rendered JSON-LD tied to actual catalog values. [Product documentation](https://developers.google.com/search/docs/appearance/structured-data/product), [merchant listing requirements](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing). FAQ rich-result retirement and the lack of a Google ranking benefit from `llms.txt` are documented in [Google’s June 2026 updates](https://developers.google.com/search/updates).

**Performance acceptance budgets, proposed:** mobile Lighthouse median ≥85 initially and ≥90 after stabilization; desktop ≥95; critical templates ≤1.5MB initial transferred bytes where achievable; no video-player payload until play; reduce nonessential third-party requests by at least 30%. Real-user targets at the 75th percentile: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. Use the same device/profile/consent state for comparisons. Scores are acceptance targets, not predicted outcomes.

**Stencil versus headless:** budget roughly 100–180 engineering hours for a focused Stencil modernization, plus merchant product review. At an illustrative $100–$150/hour, that is $10k–$27k spread across phases, excluding existing platform fees. A Catalyst/headless rebuild would provisionally require 300–600+ hours ($30k–$90k+) plus hosting, integration QA and ongoing engineering. These are planning estimates, not vendor quotes. Headless is worth reconsidering only if documented requirements cannot be met in Stencil, multi-store/content integration becomes a core need, or a measured revenue benefit exceeds ongoing cost. The audit found no such justification today. A standalone builder/search service can coexist with Stencil.

## 3. AI integration

### Ranking and budget assumptions

Prioritize trustworthy data and modest operational tools. Do not launch all features together. Costs below are **rough planning allowances**, not current provider price quotes: illustrative engineering rate $100–$150/hour, small catalog, about 1,000 assistance sessions/month, text-first responses, capped retrieval/context, and no model training. Monthly budgets include approximate model/search/hosting usage but exclude tax, existing store fees and ongoing staff review. Obtain live vendor quotes at implementation.

| Rank | Feature | Value / BigCommerce feasibility | Setup allowance | Monthly allowance |
|---|---|---|---:|---:|
| 1 | Reviewed content/spec operations | High / High | 16–32h; $1.6k–$4.8k | $20–$100 + review labor |
| 2 | Machine-readable catalog and answer-ready content | High / High; mostly ordinary SEO | 16–32h; $1.6k–$4.8k, overlaps R15–17 | $0–$100 incremental |
| 3 | Hybrid semantic search | Med–High / High after catalog cleanup | 32–64h; $3.2k–$9.6k | $50–$300; app quotes may differ |
| 4 | Product/compatibility assistant with reviewed cart | High potential / Medium; data quality is the constraint | 80–160h; $8k–$24k after compatibility dataset | $100–$500 + 2–4h/week review |
| 5 | Bring-your-data coaching pilot | Unproven / Medium technically, Low for unrestricted autonomous coaching | 120–240h; $12k–$36k | $100–$600 for a limited pilot + expert review |

The catalog/SEO work overlaps the core roadmap; do not add its budget twice. Provider options can include a hosted model API from Anthropic or Google, or an appropriately evaluated self-hosted model. Choose using a TrailBrake-specific evaluation set and current privacy/retention terms, not model branding. Search options include a BigCommerce-compatible search app after feature/price verification, or a small hybrid keyword/vector service. None requires replacing checkout or exposing management API secrets in browser JavaScript.

### 1. Content operations

**What it does / benefit:** drafts consistent spec tables and product descriptions from approved source records; turns owned video transcripts into edited how-to articles; proposes FAQs from repeated support questions. Corrects field consistency faster while preserving the expert’s voice.

**Implementation:** export catalog data through server-side BigCommerce Catalog APIs, ingest approved AiM manuals and TrailBrake-owned transcripts, and generate structured draft changes with SKU, field, old value, proposed value and source citation. A review screen or spreadsheet is sufficient initially. Use a small hosted text model; retrieval is restricted to approved documents. Human approval precedes catalog write-back. Keep an audit trail and rollback export.

**Accuracy and risks:** never “repair” a missing technical spec from model memory. Distinguish MyChron 5/6 and MXS hardware revisions; protect part numbers, units and connector names from paraphrase. Flag conflicts for Matt rather than choosing one. Verify transcript rights and machine-transcription errors. Measure review time per SKU and post-publication factual correction rate, not raw content volume.

### 2. Visibility in AI search engines

**What it does / benefit:** makes the same accurate product identity, fitment constraints, expert authorship and buying guidance easy for crawlers and assistants to interpret.

**Implementation:** server-rendered product/variant facts, existing schema improvements, clean feeds, canonical URLs, manuals, dated expert articles and concise question/answer sections. Make answers explicit: supported model/revision, required cable/adapter, and known exclusions. Maintain intended crawler access in robots. Use Google Search Console and Merchant Center where available; monitor referral traffic and a small repeatable set of brand/product questions.

**Model/provider:** no LLM required; a drafting model from the previous workflow may assist editorial work. **Retrieval sources:** public catalog, reviewed compatibility records, owned articles and cited manuals. **Risks:** inaccurate information spreads further when consistently syndicated; correct the source once and propagate updates. Structured data, feeds, FAQ markup and `llms.txt` do not guarantee AI citation. Do not spend on unsupported “AI ranking” promises. Public robot rules currently allow catalog access for several named AI/search agents; align utility-page exclusions deliberately.

### 3. Natural-language and semantic search

**What it does / benefit:** maps “oil pressure sender for my dash,” “kart exhaust temperature probe,” or “video with lap data” to relevant product groups while preserving exact-SKU matching for returning buyers.

**Implementation:** first fix aliases and exact-match ranking. Then index titles, SKUs/MPNs, categories, reviewed specs, connector fields, availability and short knowledge articles. Sync via catalog webhooks plus daily reconciliation. Blend lexical search with embeddings and filters; exact part numbers win over fuzzy similarity. Render results through the Stencil search template or a progressively enhanced panel, with native search fallback.

**Provider options:** a vetted search app, managed hybrid search service, or a small hosted keyword/vector index plus an embedding model; a generative model is optional for query interpretation. **Risks/accuracy:** similar connector descriptions are not compatibility proof. Label results as suggestions, never “fits your MXS” unless a reviewed rule supports it. Fetch live price/stock for displayed purchases. Benchmark at least 30 queries, including `MXS 1.3`, `719 4 pin`, `Solo 2 DL`, `MyChron 6 CHT`, misspellings, and no-result cases. Track top-three relevance, zero-result rate and search-assisted conversion.

### 4. Product and compatibility assistant

**What it does / benefit:** answers “Will this sensor work with my MXS?”, explains the required connection path, proposes a complete bill of materials, and hands uncertainty to a human. It should support the shop’s advice, not impersonate a wiring authority.

**Implementation approach:** lazy-loaded Stencil chat/guided-search UI → server-side assistant service → approved retrieval index and deterministic compatibility rules → live catalog/variant lookup → user-reviewed cart action. Use BigCommerce Catalog APIs server-side and Storefront APIs for shopper-context carts. Never ship management credentials to the browser. BigCommerce’s REST Storefront API supports cart operations from Stencil. [Storefront cart documentation](https://docs.bigcommerce.com/developer/docs/admin/checkout-and-cart/custom-checkouts/rest-storefront).

**Retrieval data:** current catalog and variant IDs; versioned AiM manuals; verified connector/pinout tables; TrailBrake compatibility records; reviewed Tips articles and owned video transcripts. Store document revision, source URL/page, supported hardware generation and reviewer. PDF extraction must preserve pin tables and units; manually review critical connector diagrams. A vector similarity score is never a fitment verdict.

**Answer contract:** ask for exact MXS version, sensor SKU, harness/available port and relevant firmware. Cite the source and date for each technical assertion. Return one of compatible / compatible with specified adapter / incompatible / unknown. The language model explains the rule result; it cannot override it. Conflicting or missing evidence means “I can’t verify this combination,” with the missing detail stated.

**Cart workflow:** show items, variant options, quantities, required versus optional parts and live price before “Add this system.” Revalidate stock/options and compatibility when clicked. Do not autonomously checkout. Preserve a text bill of materials if the cart API fails. Use idempotency/retry handling to prevent duplicate additions.

**Human handoff:** with the shopper’s consent, create a support request containing the conversation, cited sources, hardware answers, unresolved questions and proposed items. Show phone support immediately for urgent trackside problems. Share only the details the customer agrees to send.

**Risks and controls:** manual revisions can conflict; products can change; retrieved text may contain malicious instructions. Treat documents as data, restrict tools/actions, sanitize retrieval, rate-limit access and separate chats between shoppers. Keep redacted logs for review with a defined retention policy. Never infer electrical compatibility from connector shape or generic CAN support. Start internally with 50–100 expert-authored cases, including deliberately incompatible and unknown cases. Public release requires no unsupported positive compatibility claims in the test set and reliable abstention/handoff; this is a release criterion, not a guarantee of zero future error.

### 5. Bring-your-data coaching

**What it does / benefit:** a customer uploads a supported Race Studio CSV export and receives a plain-language summary of observed consistency, channel quality and potential next analysis steps. Sensor recommendations should address a demonstrated measurement gap, not turn every upload into an upsell.

**Implementation:** separate secured upload service linked from the storefront. Start with one documented CSV format, size/row/time limits, explicit column mapping, units, timestamp validation and missing-channel checks. Parse and compute deterministically in an isolated worker; derive lap segmentation, repeatability and basic trends only where data supports them. Provide charts and calculated facts to a hosted reasoning model for explanation. Retrieve from reviewed TrailBrake training material and the verified sensor catalog. Do not let the model invent lap times or execute uploaded instructions.

**Accuracy:** compare like-for-like laps/conditions; flag missing distance/GPS, inconsistent sample rates, unit errors and sensor dropouts. Without brake-pressure data, do not claim to diagnose brake application from a guessed signal. Suggest a sensor only when its measurement would resolve a specific unknown, then apply normal compatibility rules. Avoid autonomous driving-limit, setup or safety-critical advice; offer expert review for consequential interpretations.

**Privacy:** logs can reveal venue/location, driver identity, vehicle behavior and proprietary team data. Explain purpose, access and deletion before upload; use private storage, short-lived links, encryption, tenant separation, a proposed default seven-day deletion window, and an immediate delete option. Verify provider terms for training/retention and obtain explicit permission for any longer-lived review dataset. Never expose uploads in public retrieval or other customers’ conversations. Pilot with about ten consenting customers and expert review before selling an automated service.

**Shared AI guardrails:** never guess compatibility; show sources; refresh price/stock live; flag stale/conflicting documents; log redacted answers for review; make human escalation easy; prohibit autonomous purchase; publish no technical claims without approval in content workflows. Budget staff time to review incidents and revise the knowledge base.

## 4. Roadmap

Hours are estimates including implementation and focused QA. Catalog verification needs a TrailBrake subject-matter expert. Prioritize work by measured customer pain; Phase 2 features are optional investments, not prerequisites for improving the store.

### Quick wins — under one week

A realistic one-week slice is about **20–32 engineering hours plus 4–6 owner hours**, not every recommendation at once.

| Work | Estimate / owner | Success metric / completion check |
|---|---|---|
| Fix MyChron/MXS metadata, model descriptions, image assignment and malformed link; correct category PDM description (R5, R15) | 4–6h editor + expert | No model-name contradiction in these pages, source metadata and live product offer; links resolve to reviewed destinations. |
| Replace stock hype/blank labels where backend facts are known; add expert-call link beside options (R7, R9) | 3–5h developer + owner | No unsupported availability statements; phone click event works; selected variants show meaningful status. |
| Replace Facebook feed with link and homepage video with accessible facade; record script owners (R12) | 4–6h developer | No player payload before click; lower transfer/request count; no functionality loss. |
| Fix video alt/frame title and search/account target spacing (R14) | 3–5h developer | Corresponding first-party axe findings cleared in three widths; keyboard checks pass. |
| Correct homepage title/H1 and introduce a simple value proposition (R8, R15) | 2–4h developer/editor | Clear product/support routes visible on mobile; metadata published accurately. |
| Establish analytics and performance baseline, verify existing tracking before adding anything (R18) | 4–6h developer | Deduplicated funnel events; baseline dashboard with source/device segmentation and test-traffic exclusion. |

Do not bundle URL migrations into this week. Changes should first run in a theme preview/local Stencil environment, then be reviewed and deployed through the store’s normal release process.

### Phase 1 — one to two months

Choose a capped initial scope of approximately **80–140 additional engineering hours** plus **15–25 owner/content hours**. Estimates below overlap; sum the actual agreed work, not both task and phase estimates.

| Work | Estimate | Success metric / acceptance target |
|---|---:|---|
| New navigation, mobile category layout, compact footer, homepage/product visual system (R1, R8) | 20–32h | In five moderated buyer tasks, ≥4/5 find the correct product family unaided; mobile products visible without traversing the full model list. |
| Product spec/compatibility/download blocks for first 20 products (R4, R6) | 20–32h engineering + 10–16h expert | 100% of pilot products have reviewed model/connector/source fields; fewer compatibility-related returns per 100 orders. |
| Script/font/image work and dynamic-state accessibility testing (R12–14) | 16–24h | Mobile Lighthouse median ≥85 under same profile; no critical/serious first-party axe failures in agreed states; manual keyboard and zoom checks pass. |
| Canonical/redirect inventory, existing schema corrections, feed diagnostics (R2, R16–17) | 12–20h | No loops/chains in changed URLs; no critical product-data errors on pilot URLs; Merchant Center price/stock mismatch count reduced to zero for pilot items. |
| Deterministic builder prototype for one kart and one track-day system (R3) | 24–40h after data work | Complete validated cart contents in every pilot scenario; record completion and handoff rates. Expand only if used. |
| Learning Center index + three reviewed articles; cart/search refinements (R10–11) | 12–20h + editorial review | Article-to-product clicks measurable; exact-model query appears in top three for ≥90% of benchmark set; cart recovery CTA tracked. |

Success targets for commercial outcomes should be set after a 28-day baseline. Initial hypotheses: **10% relative improvement** in mobile product-to-cart rate and **20% reduction** in routine compatibility questions per 100 orders, without reducing qualified sales consultations. Compare equivalent traffic sources and racing-season periods over 6–8 weeks; low order volume may not support a statistically reliable A/B test. Use task tests and support tags as complementary evidence.

### Phase 2 — three to six months

| Work | Estimate | Gate and success metric |
|---|---:|---|
| Content/spec drafting workflow | 16–32h | Start after source governance; ≥30% reduction in review time per SKU with no increase in factual corrections. |
| Semantic search pilot | 32–64h | Only if native tuning still fails; ≥90% top-three relevance on approved query set, fewer zero-result sessions, no reduction in exact-SKU relevance. |
| Internal compatibility assistant, then limited public pilot | 80–160h plus ongoing expert review | Depends on reviewed compatibility records; zero unsupported positive compatibility claims in release evaluation; monitor answer accuracy, abstention, handoffs and assisted conversion. |
| Expand builder, bundles and education by observed demand | 24–48h per meaningful expansion | Track complete-system cart rate, bundle margin, missing-item support cases and return rate; do not maximize AOV at the expense of suitability. |
| Coaching feasibility pilot | 120–240h only with separate business case | Ten consenting users, deterministic calculations cross-checked by expert, no cross-user data exposure, deletion verified, explicit willingness-to-pay evidence. Defer if support burden exceeds benefit. |

Measure organic non-brand clicks to product/category/learning pages, organic purchase revenue, mobile conversion, error rates, support question categories, and returns. A lower raw support-call count is not inherently success for an expert dealer; distinguish avoidable “which cable?” confusion from valuable system-planning calls.

Release QA must include a populated cart with required options, quantities, removal, coupon behavior, shipping estimates, out-of-stock transitions, mobile menus, consent choices, and checkout handoff using a safe test environment. Keep a theme backup and rollback plan. After deployment, inspect errors and funnel metrics; do not change multiple major systems at once if attribution matters.

## 5. Optional code and implementation handoff

**No Stencil theme repository was available.** The workspace contained only Git metadata before this audit. No deployable theme patches, branch, production push, or store-setting edits were made. The files created are the report, evidence and local audit scripts. Do not paste speculative template code into the live vendor theme.

When the theme source is supplied, create a separate `codex/trailbrake-modernization` branch and implement a small first PR:

| Component | Expected location to verify | Acceptance test |
|---|---|---|
| Accessible mega-menu | `templates/components/common/navigation-menu.html`, header equivalent, theme JS/SCSS | Keyboard Tab/Enter/Escape, focus return, no hover-only navigation, mobile accordion, every retained category reachable. |
| Compatibility block | New `templates/components/products/compatibility.html`, included from product view | Correct variant/revision, source/date visible; unknown compatibility never rendered as supported; no fabricated pinout. |
| Structured data | Existing `templates/components/products/schema.html` or equivalent; shared business partial through base layout | One coherent Product/Offer and business entity; safely serialized strings; correct currency/options/stock; parsed JSON and rich-result validation on representative products. |
| Price labels | `templates/components/products/price.html` and option-update JS | Regular price, sale, MSRP-only, price range, tax modes, unavailable variant and dynamically selected option all render correctly. Do not remove nodes required by live price updates. |

Use BigCommerce’s documented Stencil object schemas to map available product/custom-field data rather than guessing field names. [Stencil data context](https://docs.bigcommerce.com/developer/docs/storefront/stencil/themes/context/object-reference/schemas).

### Evidence and reproducibility

- [Browser measurement summary](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/evidence/summary.json)
- [Evidence directory](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/evidence): per-page/width JSON with response types/sizes, scripts, metadata, schema and axe selectors; desktop rendered HTML; raw home/product/MXS HTML; robots/sitemaps; URL checks; sanitized response headers.
- [Mobile Lighthouse run 1](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/evidence/lighthouse-mobile.json), [run 2](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/evidence/lighthouse-mobile-2.json), [run 3](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/evidence/lighthouse-mobile-3.json), [desktop](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/evidence/lighthouse-desktop.json).
- [Field-data request failure](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/evidence/pagespeed-field-attempt.json): HTTP 429 response, not evidence of absent CrUX coverage.
- [Playwright audit script](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/run.cjs), [desktop Lighthouse script](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/lighthouse.cjs), [mobile repeat script](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/lighthouse-repeat.cjs), [URL check script](/Users/harryadalian/Documents/ChatGPT/Trailbrake/audit/check-urls.cjs). These use local machine paths and temporary audit dependencies; adapt paths to rerun elsewhere.

The URL check script also tested a guessed `/mxs-1-3/` URL, which returns 404. The actual linked product is `/mxs/`; the guessed-path result is **not counted as a broken storefront link**. This distinction, the hidden price labels, existing schema, and working alternate sitemap are important corrections to the original assumptions.
