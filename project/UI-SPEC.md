# Devine Edge — `/contact` Page UI Spec

> Implementation-ready spec for the Contact page. Grounds every value in the existing
> brand system (`Devine Edge - Brand Guide.html`) and the form pattern already shipped in
> `cta-form.html`. Copy is lifted verbatim from *Devine Edge Website Copy V1* (Contact Page section).
>
> **Defaults assumed** (questions timed out): dual-path layout — Free Audit is the primary
> conversion, plain "Send a message" form is the secondary path; two-column split; reuse brand
> tokens + the existing form component; full field list with required/optional marked; the
> "what are you looking for help with?" field is a `<select>`; inline success state that reveals
> the "what happens next" steps; mobile-first. Anything marked **⚠ NEEDS INPUT** is a real
> gap — no contact details (email/phone/location/hours) exist in the source material.

---

## 1. Purpose & priority

The contact page is the **3rd build priority** (after Homepage and Free Audit page) per the copy
doc. Its job, in the doc's words: *"gives people a simple way to reach out."*

Two visitor intents land here, and the page serves both without forcing a choice:

| Intent | Path | Treatment |
|---|---|---|
| "I want the free audit" (primary conversion) | Audit CTA → Free Audit page | **Primary** — visually dominant, top-left |
| "I just have a question / want to talk fit" | Inline message form | **Secondary** — the form on this page |

Do **not** rebuild the full audit form here. This page's form is the lightweight "Send a message"
form. The audit lives on its own page; this page points to it.

---

## 2. Design tokens (from the Brand Guide — use these exact values)

```css
/* Color */
--ink:    #1A1A1A;   /* primary text, primary button bg */
--ink2:   #2A2520;   /* sub-labels */
--mute:   #6B635A;   /* body / secondary text */
--mute2:  #8F8579;   /* field labels, fine print, placeholders */
--paper:  #F8F4EC;   /* page background (warm) */
--paper2: #FBF8F1;   /* input rest background, dark-plate text */
--card:   #FFFFFF;   /* form card surface */
--line:   #E8E0CF;   /* default borders */
--line2:  #D8CDB4;   /* stronger borders */
--blue:   #1F8FFF;   /* accent — links, focus, serif highlight, primary-action btn */
--blue50: #E3EFFF;   /* accent tint — badges, focus halo base */
--blue100:#B9D7FB;   /* accent line / eyebrow rule */
--teal:   #25564F;   /* success text */
--teal50: #E0EAE7;   /* success background */
--maxw:   1080px;    /* content column max width */
```

```css
/* Type */
--font-sans: 'Geist', ui-sans-serif, system-ui, sans-serif;   /* body + UI */
--font-mono: 'Geist Mono', ui-monospace, monospace;            /* eyebrows, labels */
--font-serif:'Instrument Serif', serif;                        /* italic accent only */
```
Google Fonts link (already used project-wide):
`https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap`

```
/* Shape & elevation */
Field radius:    10px
Card radius:     14–20px (use 20px for the hero split card; 14px for sub-cards)
Button radius:   999px (pill)
Card shadow:     0 1px 0 rgba(26,26,26,0.04), 0 18px 40px -28px rgba(26,26,26,0.18)
Texture:         fixed radial dot-grid overlay, rgba(26,26,26,0.025) 1px dots / 3px grid,
                 opacity .6, mix-blend-mode: multiply  (copy body::before from Brand Guide)
```

---

## 3. Page structure (top → bottom)

```
┌─ Header (sticky, shared site nav) ───────────────────────────────┐
│  Logo: Devine Edge          Home · What We Build · Free Audit ·   │
│                             How It Works · Who It's For · FAQ     │
│                                              [ Get Free Audit ]   │
├─ 1. Contact Hero ────────────────────────────────────────────────┤
│  eyebrow · headline · subheadline                                 │
├─ 2. Dual-path body (two-column split) ───────────────────────────┤
│  LEFT  — Primary: "Start with a Free Audit" panel (dark plate)    │
│  RIGHT — Secondary: "Send a message" form card                    │
├─ 3. Success state (replaces form on submit) ─────────────────────┤
│  "What happens next" — 4 steps, inline                            │
├─ 4. Footer (shared site footer) ─────────────────────────────────┤
└──────────────────────────────────────────────────────────────────┘
```

On mobile the two columns stack: **Audit panel first, form second.**

---

## 4. Section specs

### 4.1 Header (shared component)
Reuse the site's sticky header. Tokens already defined in the Brand Guide (`header.bar`):
`background: rgba(248,244,236,0.86)`, `backdrop-filter: blur(12px)`, `border-bottom: 1px solid var(--line)`.
Nav items per copy doc. Mark **Contact** as `aria-current="page"`. Header primary button
`Get Free Audit` uses the `.ll-btn` style (see §5.3). Nav collapses (`display:none`) below 880px —
provide a hamburger if a mobile nav doesn't already exist site-wide.

### 4.2 Contact Hero
Copy (verbatim):

- **Eyebrow:** `Contact Devine Edge`
- **Headline:** `Want to see where your business is losing visibility, trust, or leads?`
- **Subheadline:** `Start with a Free AI Visibility Audit or reach out to discuss whether Devine Edge is a fit for your business.`

Specs:
- Eyebrow: `--font-mono`, 11px, `letter-spacing: 0.22em`, uppercase, `color: var(--blue)`, with the
  22px × 1px `--blue100` rule before it (`.eyebrow` pattern).
- Headline: `--font-sans`, weight 600, `clamp(30px, 4.4vw, 46px)`, `letter-spacing: -0.025em`,
  `line-height: 1.04`, `max-width: 18ch`. Optionally set "visibility, trust, or leads" — or a single
  word — in the italic serif accent (`--font-serif`, `color: var(--blue)`) for brand rhythm; keep it
  to **one** accent phrase max.
- Subheadline: 17px, `color: var(--mute)`, `max-width: 60ch`, `line-height: 1.55`.
- Spacing: hero block `padding: 84px 32px` (matches `section.block`), headline `margin-top: 16px`,
  subheadline `margin-top: 18px`.

### 4.3 Dual-path body

Two-column split inside the `--maxw` (1080px) container. Suggested grid:
`grid-template-columns: minmax(320px, 0.85fr) minmax(380px, 1.15fr); gap: 0;` with the two cards
sharing an edge to read as one composition (mirror `cta-form.html`: dark plate left, paper card
right, radii `20px 0 0 20px` / `0 20px 20px 0`). Below **880px**: single column, `gap: 0`, plate on
top (`border-radius: 20px 20px 0 0`), form below (`0 0 20px 20px`).

#### LEFT — Primary: Free Audit panel (`--ink` dark plate)
Reuse the `.logo-plate` treatment from `cta-form.html` (dark `--ink` bg, faint white grid overlay,
blue radial glow bottom-right, `--paper2` text). Content:

- **Top tag:** pulse dot (`--blue`, 6px, with `0 0 0 4px rgba(31,143,255,0.18)` ring) + `Devine Edge`,
  mono 11px uppercase, `rgba(251,248,241,0.6)`.
- **Heading:** `Start with a Free AI Visibility Audit` — sans 28–32px, weight 500,
  `letter-spacing: -0.02em`, `color: var(--paper2)`. Accent "Free AI Visibility Audit" or "48 hours"
  phrasing in serif/blue is optional.
- **Body (from doc Final CTA / hero microcopy):** `See where you stand, where competitors are
  winning, and what to fix first.` — 13–14px, `rgba(251,248,241,0.65)`, `max-width: 230px`.
- **Bullets (from "What You'll See", trim to 3–4):**
  `Local & Google visibility` · `AI-search readiness` · `Competitor comparison` · `Top growth opportunities`
- **Primary CTA button:** `Get a Free AI Visibility Audit` → links to `/free-audit`. Use `.ll-btn`
  **inverse** variant (on dark bg use `--paper2` fill / `--ink` text, OR `.ll-btn.blue`). Pill, with
  the arrow icon (see §5.3). This is the single most prominent action on the page.
- **Microcopy under CTA (doc Global options):** `No pressure. Just clarity.`

#### RIGHT — Secondary: "Send a message" form card (`--card` paper)
Reuse the `.form-card` treatment from `cta-form.html`. Content:

- **Eyebrow:** `Or send a message` — mono 11px, uppercase, `--blue`, with the blue rule.
- **Headline:** `Send a message` (verbatim) — sans 30px, weight 500, `letter-spacing: -0.028em`.
- **Intro copy (verbatim):** `Share a few details about your business and we'll review your current
  visibility, online presence, and growth opportunities.` — 14.5px, `--mute`, `line-height: 1.55`.
- **Form** — see §5.
- **Submit microcopy (verbatim):** `We will review your message and respond if there is a clear fit.`

---

## 5. The "Send a message" form

### 5.1 Fields (copy doc list, with types & required state)

| # | Label | Control | Type | Required | Placeholder / options | Autocomplete |
|---|---|---|---|---|---|---|
| 1 | Name | input | text | **✓** | `Jane Devine` | `name` |
| 2 | Business name | input | text | **✓** | `e.g. Northgate Med Spa` | `organization` |
| 3 | Website | input | url | — | `https://` | `url` |
| 4 | Email | input | email | **✓** | `you@business.com` | `email` |
| 5 | Phone | input | tel | — | `(555) 000-0000` | `tel` |
| 6 | What are you looking for help with? | **select** | — | **✓** | see options below | — |
| 7 | Message | textarea | — | — | `Tell us a bit about your business and what you're trying to improve.` | — |

**Field 6 select options** (derived from the doc's service set — keep labels short):
`More calls & leads` · `Website that converts` · `Local / Google visibility` · `AI search visibility (GEO)` ·
`Competitor intelligence` · `Reviews & reputation` · `Follow-up & automation` · `Not sure — need direction` · `Other`
First `<option>` is a disabled placeholder: `Select one…`.

> **Layout:** Name + Business name may sit on one row at ≥520px card width
> (`grid-template-columns: 1fr 1fr; gap: 14px`); Email + Phone likewise. Website, the select, and
> Message are full-width. Single column below that.

### 5.2 Field styling (from `cta-form.html` `.field`)
```
Group:     display:flex; flex-direction:column; gap:6px; margin-bottom:14px
Label:     --font-sans? NO → labels are mono-style: 11px, letter-spacing:0.14em,
           text-transform:uppercase, color:var(--mute2)
Input/sel/textarea:
           appearance:none; background:var(--paper2); border:1px solid var(--line);
           border-radius:10px; padding:12px 14px; font:inherit; font-size:15px; color:var(--ink)
Placeholder: color:var(--mute2)
Textarea:  min-height:120px; resize:vertical; line-height:1.5
Select:    same box; add a custom chevron (no native appearance);
           when value is the placeholder, render text in var(--mute2)
```

### 5.3 Submit button (`.ll-btn` / `.btn` pattern)
```
background:var(--ink); color:var(--paper2); border:none; font-weight:500; font-size:14.5px;
padding:13px 22px; border-radius:999px; cursor:pointer;
display:inline-flex; align-items:center; gap:10px;
transition: transform .12s ease, background .2s ease
hover:  background:var(--blue)        (cta-form) — OR background:#000 + translateY(-1px) (brand guide).
        Pick one and use consistently; recommend hover→#000, focus/active→blue tint.
active: transform:scale(0.98)
arrow:  16px stroke icon; hover → translateX(3px)
```
- **Label (verbatim):** `Send Message`
- Place in a `.submit-row` with the microcopy to its left (`justify-content: space-between`),
  or stack on narrow cards.

### 5.4 Field states (define all)

| State | Treatment |
|---|---|
| **Rest** | `background:var(--paper2); border:1px solid var(--line)` |
| **Hover** | `border-color:var(--line2)` |
| **Focus** | `outline:none; background:#fff; border-color:var(--blue); box-shadow:0 0 0 4px rgba(31,143,255,0.12)` |
| **Filled** | same as rest; text `--ink` |
| **Error** | `border-color:#B23A26; box-shadow:0 0 0 4px rgba(178,58,38,0.10)`; helper text below in `#B23A26`, 12.5px. Error palette borrowed from Brand Guide "don't" tick (`#B23A26` / `#FBE6E2`). |
| **Disabled** | `opacity:.55; cursor:not-allowed` |
| **Submitting** | button shows inline spinner, label → `Sending…`, button `disabled`, `opacity:.7` |

### 5.5 Validation
- Validate on **blur** for individual fields; validate **all** on submit.
- Email: standard email pattern; show `Enter a valid email` on failure.
- Required fields: Name, Business name, Email, "looking for help with". Show
  `This field is required` beneath an empty required field on submit.
- Website: optional; if filled, accept with or without protocol (normalize to `https://` on submit).
- Phone: optional; accept free-form, do not over-validate.
- Inline error messages use the error palette above; never use only color — pair with the message text
  and `aria-invalid="true"` + `aria-describedby` pointing at the error node.

---

## 6. Success state (inline — reveals "What happens next")

On successful submit, replace the form card's contents (keep the card) with a confirmation, then
surface the doc's **"What happens next"** steps so the visitor knows the follow-through.

- **Success heading:** `Message sent.` — sans 30px, weight 500, with a small teal check badge
  (`background:var(--teal50); color:var(--teal); 18px; border-radius:5px`).
- **Confirmation line (verbatim microcopy):** `We will review your message and respond if there is a
  clear fit.`
- **"What happens next" — 4 steps** (verbatim from Audit page §6, condensed labels):
  1. **We review your business** — site, local presence, Google profile, competitor position, obvious conversion gaps.
  2. **We identify the biggest opportunities** — the changes most likely to improve visibility, trust, lead capture, and follow-up.
  3. **You receive the findings** — a clear summary of where you stand and what we'd fix first.
  4. **If it makes sense, we talk next steps** — a Growth Infrastructure Package or ongoing support.
- Render as a numbered vertical list; step numbers in `--font-mono`, `--blue`; titles weight 600;
  descriptions `--mute` 14px.
- Include a quiet secondary link: `← Send another message` (resets the form) and the persistent
  audit CTA `Get a Free Audit`.
- Move keyboard focus to the success heading (`tabindex="-1"`, `role="status"`/`aria-live="polite"`)
  so screen-reader users are notified.

---

## 7. Compliance & anti-spam (recommended defaults)

- **Honeypot field** — visually hidden, `tabindex="-1"`, `autocomplete="off"`; reject submissions that fill it.
- **Consent line** (not a blocking checkbox by default, to keep friction low): below the submit row,
  12px `--mute2`: `By submitting, you agree to be contacted about your inquiry. We never share or
  sell your data.` (the "never share or sell" line is already used in `cta-form.html`).
- ⚠ **NEEDS INPUT:** If a marketing opt-in or a hard privacy-policy checkbox is legally required,
  add a checkbox + link to `/privacy`. No privacy policy URL exists yet.

---

## 8. Responsive behavior (mobile-first)

| Breakpoint | Layout |
|---|---|
| **< 560px** | Single column. Hero padding `56px 20px`. Audit plate then form, both full-width, radii flatten to a single stacked card (`20px 20px 0 0` / `0 0 20px 20px`). All form fields single-column. Submit button full-width; microcopy above it. |
| **560–880px** | Single column still, but Name/Business and Email/Phone may pair into 2-up rows inside the form. Hero padding `72px 28px`. |
| **≥ 880px** | Two-column split (audit plate + form share an edge). Header nav visible. Hero padding `84px 32px`. |
| **≥ 1080px** | Container caps at `--maxw`; centered with auto margins. |

- Tap targets ≥ **44px** (inputs at 12px padding + 15px text ≈ 45px; pill button ≥ 45px — OK).
- Inputs use 16px font on mobile if iOS zoom-on-focus is a concern (bump field `font-size` to 16px < 560px).

---

## 9. Accessibility

- Every field has a real `<label for>`; placeholders are **not** a substitute for labels.
- Logical DOM/focus order: hero → audit CTA → form fields top-to-bottom → submit.
- Visible focus ring on all interactive elements (the 4px blue halo doubles as the focus indicator;
  ensure it also appears on the buttons and links, not just inputs).
- Color contrast: `--ink` on `--paper` and `--paper2` passes AA; `--mute` (#6B635A) on paper passes AA
  for body text; do **not** drop label/help text below `--mute2` size 11px on busy backgrounds — keep
  `--mute2` text ≥ 11px and never as the sole carrier of meaning.
- `--blue` (#1F8FFF) on white is ~3:1 — acceptable for large text / UI accents and focus rings, **not**
  for small body copy. Keep small text in `--ink`/`--mute`.
- Errors announced via `aria-live`; success state focus-managed (§6).
- Honeypot hidden with `position:absolute; left:-9999px` (not `display:none`, so bots still see it),
  and `aria-hidden="true"`.

---

## 10. Data handling & integrations  ⚠ NEEDS INPUT

The source material specifies no backend. Decisions still open:

- **Submission target** — CRM/form endpoint? (The doc's brand story mentions "CRM systems" but names
  no tool.) Recommend a single POST to a form handler that routes to the owner's inbox + CRM.
- **Fields → CRM mapping** — the select (field 6) and Message are the qualifying signals; pass them as
  structured fields, not just a blob.
- **Spam** — honeypot is specced; add server-side rate limiting / optional CAPTCHA if abuse appears.
- **Notifications** — owner email on every submit (ties to the brand's "speed wins the lead" belief);
  consider an autoresponder echoing the "What happens next" steps.

---

## 11. Open questions / gaps to resolve

1. **⚠ No direct contact details exist** — no email, phone, address, service area, hours, or social
   links anywhere in the copy doc. If any are real, add a compact "Other ways to reach us" block under
   the form (or in the dark plate). Until then, the form + audit CTA are the only channels.
2. **Response-time promise** — the brand leans on "speed wins the lead." A concrete SLA
   (e.g. "We reply within 1 business day") would strengthen the page but isn't in the source. Confirm
   before stating a number.
3. **Privacy policy URL** — needed for the consent line / any required checkbox.
4. **Button hover convention** — `cta-form.html` hovers to `--blue`; the Brand Guide hovers to `#000`.
   Pick one site-wide (recommend: solid buttons → `#000`, accent/`.blue` buttons → `#0E7CEB`).
5. **Hero accent phrase** — confirm whether to set a serif/blue accent in the headline (brand rhythm)
   or keep it all-sans.

---

## 12. Build notes

- Reuse, don't reinvent: lift `body::before` grain, `.eyebrow`, `.logo-plate`, `.form-card`, `.field`,
  and `.ll-btn` straight from `cta-form.html` / `Devine Edge - Brand Guide.html`.
- Keep the page to **one** primary action (the audit CTA) and one secondary (the message form). No
  competing CTAs, no filler sections.
- Footer is the shared site footer (Company / Offers / Best For columns + `© Devine Edge. All rights
  reserved.`) per the copy doc.
