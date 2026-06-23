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
  cta/
    ctaShared.jsx          entrance hook + submit/analytics contract + glyphs
    CtaSplit.jsx  (+ .css) V1 Split    — homepage hero
    CtaSeal.jsx   (+ .css) V2 Seal     — /audit landing page
    CtaInverted.jsx (+.css) V3 Inverted — mid-page service / pricing
    CtaInline.jsx (+ .css) V4 Inline   — footer / blog inline
public/
  assets/                  wordmark.svg, icon.svg, favicon.svg (served at /assets)
```

### CTA components

Each CTA is a self-contained component with scoped CSS (`.cta-split`, `.cta-seal`, …), a
real form → success-state flow, and a once-on-load entrance animation (anime.js, gated on
`document.fonts.ready` and silenced under `prefers-reduced-motion`). On submit they fire the
documented `cta:submit` CustomEvent + `postMessage` analytics contract. The `Mark` component
and `WORDMARK` asset are reused rather than re-inlined.

> **Routing note:** uses `BrowserRouter`, so `vite dev`/`vite preview` serve the SPA fallback
> automatically. For static hosting, add a catch-all rewrite to `index.html`.

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
