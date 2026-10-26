# Devine Edge — Design System

A React + Vite implementation of the **Devine Edge** design handoff, recreated pixel-for-pixel
from the Claude Design bundle. It bundles all three sibling documents into one app, with a
floating switcher (bottom-center) to move between them:

| Route            | Document          | Source                                  |
| ---------------- | ----------------- | --------------------------------------- |
| `/`              | Brand & Design Guide | `project/Devine Edge - Brand Guide.html` |
| `/cta`           | CTA Library (gallery) | `project/cta/*.html`                  |
| `/cta/:variant`  | A single CTA, full-page | `split` · `seal` · `inverted` · `inline` |
| `/contact`       | `/contact` UI Spec | `project/UI-SPEC-contact.html`          |
| `/diagrams`      | Homepage diagrams  | `src/diagrams/*` (new, not from the handoff) |

The **Brand Guide** is a single scrolling reference covering eight sections — Brand, Logo &
Mark, Color, Typography, Voice & Tone, UI Components, Motion, and Imagery & Iconography — with
a sticky scrollspy nav.

The **CTA Library** showcases four production-ready CTA variations (live, interactive previews
with working form → success states and entrance animations), each with copy-paste embed
snippets and usage docs.

The **Contact UI Spec** is a 12-section spec document with a sticky sidebar TOC and scrollspy.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Structure

```
src/
  main.jsx                 entry — mounts <App> inside <BrowserRouter>
  App.jsx                  router: the four routes + the floating DocNav
  assets.js                shared brand-asset URLs
  hooks/
    useScrollSpy.js        IntersectionObserver scrollspy (shared by both TOCs)
  styles/
    tokens.css             centralized design tokens (color, layout)
    global.css             base + shared component classes
  components/
    DocNav.jsx             floating bottom-center document switcher
    TopBar.jsx             brand guide sticky bar + scrollspy nav
    Cover.jsx              brand guide cover / title block
    Footer.jsx             brand guide colophon
    SectionHead.jsx        shared numbered section header
    Mark.jsx               the arrow mark (inline SVG, currentColor-tinted)
    icons.jsx              thin geometric line icons
    sections/              the eight brand-guide sections (01–08)
  pages/
    BrandGuidePage.jsx     route "/"        — the brand guide
    CtaPage.jsx            route "/cta"     — CTA Library gallery
    CtaStandalonePage.jsx  route "/cta/:variant" — one CTA, full-page
    ContactSpecPage.jsx    route "/contact" — contact UI spec (+ .css)
  diagrams/                homepage explanation visuals (inline SVG + React + CSS, no deps)
    LocalVisibilityIllustration.jsx (+ .css)  hero isometric map, one coordinated SVG
    VisibilityDiagram.jsx (+ .css)            find → trust → contact cards + SVG connectors
    SnapshotPreview.jsx (+ .css)              annotated Snapshot report (illustrative sample data)
  cta/
    ctaShared.jsx          entrance hook + submit/analytics contract + glyphs
    CtaSplit.jsx  (+ .css) V1 Split    — homepage hero
    CtaSeal.jsx   (+ .css) V2 Seal     — /audit landing page
    CtaInverted.jsx (+.css) V3 Inverted — mid-page service / pricing
    CtaInline.jsx (+ .css) V4 Inline   — footer / blog inline
public/
  assets/                  wordmark.svg, icon.svg, favicon.svg (served at /assets)
```

### Diagram components

`/diagrams` shows three homepage visuals in context. They are built with inline SVG for the
illustration and connectors, ordinary React components for cards and controls, and CSS for layout
and light motion. No diagramming library or 3D engine is used.

- **LocalVisibilityIllustration**: fixed, art-directed coordinates on an isometric map plane
  (`iso(a, b, h)` helper). Depth comes from layered faces and blurred ground shadows.
  `role="img"` plus `<title>`/`<desc>`.
- **VisibilityDiagram**: three `aria-pressed` step buttons drive a `role="status"` detail panel.
  Each connector is its own small SVG with a uniform viewBox, so the arrowhead never stretches.
  On mobile the cards stack and the connectors point downward.
- **SnapshotPreview**: one observations array renders the numbered pins, the button list, and
  the detail panel. It is labeled *Illustrative sample* and should keep that label until it
  carries verified findings.

All three reference the global tokens and use their own CSS for motion. That motion is
switched off under `prefers-reduced-motion`.

### CTA components

Each CTA is a self-contained component with scoped CSS (`.cta-split`, `.cta-seal`, …), a
real form → success-state flow, and a once-on-load entrance animation (anime.js, gated on
`document.fonts.ready` and silenced under `prefers-reduced-motion`). On submit they fire the
documented `cta:submit` CustomEvent + `postMessage` analytics contract. The `Mark` component
and `WORDMARK` asset are reused rather than re-inlined.

## Deployment

The app uses `BrowserRouter` for clean URLs (`/cta`, `/contact`) — which keeps the in-page
`#section` anchors (brand-guide nav, contact-spec sidebar) working. The trade-off is that a
static host must serve `index.html` for every path so a reload or deep-link to `/contact`
doesn't 404. This "catch-all rewrite" is already configured for the common hosts:

- **Netlify / Cloudflare Pages** — `public/_redirects` (`/* → /index.html 200`), copied to `dist/`.
- **Vercel** — `vercel.json` rewrites all paths to `/index.html`.
- **`vite dev` / `vite preview`** — handle the SPA fallback automatically, no config needed.
- **Other hosts** (nginx, Apache, S3+CloudFront, …) — point the not-found/fallback handler at
  `/index.html`. For a subpath deploy (e.g. GitHub Pages project site), also set Vite's `base`
  and pass a matching `basename` to `<BrowserRouter>`.

## Design tokens

All brand values are centralized as CSS custom properties in `src/styles/tokens.css`
(e.g. `--ink`, `--paper`, `--blue`, `--teal`). Components reference them by name, so the
whole system retones from one place.

| Token        | Value     | Role                                   |
| ------------ | --------- | -------------------------------------- |
| `--ink`      | `#1A1A1A` | Primary text, logo, dark surfaces      |
| `--paper`    | `#F8F4EC` | Default warm canvas                    |
| `--blue`     | `#1F8FFF` | Single electric accent — action, focus |
| `--teal`     | `#25564F` | Quiet support — success, confirmations |

**Type:** Geist (interface + headlines) · Instrument Serif italic (one-phrase accents) ·
Geist Mono (labels, tags, data), loaded from Google Fonts in `index.html`.

## Notes on the handoff

The source HTML carried Claude Design authoring scaffolding that is **not** part of the
shipped brand — these were intentionally dropped per the implementation brief:

- the React/Babel **"Tweaks" panel** (`tweaks-panel.jsx`) and its host protocol,
- ~20 unused Google-Font `<link>` preloads left over from the panel's font picker, and
- the `__bundler_thumbnail` template.

The one lasting visual effect of that scaffolding — forcing the *"48 hours"* accent to render
in bold Geist — was an exploration, not the documented style. Here the serif accent renders in
its canonical **Instrument Serif italic, electric blue**, matching the guide's own typography
rules. `prefers-reduced-motion` is honored.
