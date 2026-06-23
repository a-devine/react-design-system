# Devine Edge — CTA Library

Four production-ready CTA variations for the Devine Edge website. Each is a self-contained HTML file you can iframe, link to, or copy-paste into any page.

Open **`cta/index.html`** for a live preview gallery with copy-paste embed snippets.

---

## Files

```
cta/
├── index.html      # Preview gallery + embed snippets + usage docs
├── split.html      # V1 SPLIT     — homepage hero
├── seal.html       # V2 SEAL      — dedicated /audit landing page
├── inverted.html   # V3 INVERTED  — mid-page service / pricing CTA
└── inline.html     # V4 INLINE    — footer / blog post inline

assets/             # Shared (referenced by all four)
├── wordmark.svg
├── icon.svg
└── favicon.svg
```

Deploy `cta/` alongside `assets/` and you're done.

---

## The four variations

| # | Name      | Context                          | Form fields            |
|---|-----------|----------------------------------|------------------------|
| 1 | Split     | Homepage hero                    | Business · Site · Email |
| 2 | Seal      | /audit landing page              | Business · Email        |
| 3 | Inverted  | Mid-page service / pricing CTA   | Business · Email        |
| 4 | Inline    | Footer / blog inline             | Email                   |

All four share the same brand tokens, motion language, form-submission contract, and analytics hooks.

---

## Two ways to embed

### 1. Iframe (recommended)

Isolates styles from the host page. Add `?embed=1` for transparent background. The CTA posts its content height back to the parent, so you can auto-resize the iframe:

```html
<iframe
  src="/cta/split.html?embed=1"
  title="Free AI Visibility Audit"
  style="width:100%; border:0; background:transparent;"
  height="540"
  loading="lazy"></iframe>

<script>
  window.addEventListener('message', (e) => {
    if (e.data?.type === 'cta:resize' && e.data?.variant === 'v1-split') {
      document.querySelector('iframe[src*="split.html"]').height = e.data.height;
    }
  });
</script>
```

Swap `split.html` / `v1-split` for the variation you want. The index page has ready-to-copy snippets per variation.

### 2. Copy-paste HTML

Every file's CSS is scoped under a single class (`.cta-split`, `.cta-seal`, `.cta-inverted`, `.cta-inline`), so you can drop the `<section>` + `<style>` + `<script>` blocks into a host page directly. Keep the Google Fonts link in `<head>` and the anime.js `<script>` in `<head>` or above the component.

---

## Form submission

Each form prevents default submission, validates, and fires two events:

```js
// 1. CustomEvent on window (same-page listener)
window.addEventListener('cta:submit', (e) => {
  console.log(e.detail);
  // { variant: 'v1-split', context: 'homepage-hero', data: { business, website, email } }
});

// 2. postMessage to parent (iframe-embed listener)
window.addEventListener('message', (e) => {
  if (e.data?.type === 'cta:submit') {
    console.log(e.data);
    // { type, variant, context, data }
  }
});
```

The visible UI flips to a success state automatically. To wire to a real endpoint, add a listener that `fetch`es the data:

```js
window.addEventListener('cta:submit', async (e) => {
  await fetch('/api/audit-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(e.detail)
  });
});
```

---

## Analytics

Every CTA root carries identifying data attributes:

```html
<section class="cta-split" data-cta="v1-split" data-cta-context="homepage-hero">
```

Listen for `cta:submit` and forward to your analytics:

```js
window.addEventListener('cta:submit', (e) => {
  analytics.track('audit_request', e.detail);
});
```

---

## Brand tokens

All four files define the same scoped CSS custom properties on the root element. Override on the section to re-theme:

```css
.cta-split {
  --ink:     #1A1A1A;
  --paper:   #F8F4EC;
  --paper2:  #FBF8F1;
  --card:    #FFFFFF;
  --line:    #E8E0CF;
  --blue:    #1F8FFF;   /* electric blue accent */
  --blue50:  #E3EFFF;
  --blue100: #B9D7FB;
  --mute:    #6B635A;
  --mute2:   #8F8579;
}
```

## Typography

- **Geist** — sans, 300/400/500/600/700
- **Instrument Serif** — italic accent

Both loaded from Google Fonts. Replace the `<link href="https://fonts.googleapis.com/css2?...">` line in each file if you self-host.

## Motion

- **anime.js v3.2.1** — loaded from jsDelivr CDN
- All entrances run once on load (after `document.fonts.ready` for layout stability)
- All entrances respect `prefers-reduced-motion: reduce` — users with the OS setting on see the final state instantly

## Accessibility

- Real `<label>` elements, properly associated
- `autocomplete` attributes on every input
- `aria-labelledby` on each section heading
- Success message uses `role="status"` + `aria-live="polite"`
- Mark/decorative SVGs are `aria-hidden="true"`

---

## Browser support

Modern evergreen browsers. Requires:
- CSS `clip-path` (V1, V4 wordmark reveal)
- CSS custom properties
- `ResizeObserver` (iframe auto-resize)

For older browsers the layout still renders correctly; the entrance animation just doesn't play (the elements remain in their final visible state via the reduced-motion fallback path).

---

## Versioning

**v1.0** — May 2026. Initial release.
