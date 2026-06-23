# Devine Edge — Design Extraction Workflow

This workflow uses `designlang` from the `Manavarya09/design-extract` repo to extract design language from elite reference sites.

The purpose is not to copy these sites.

The purpose is to extract patterns, tokens, spacing systems, motion language, and design references so Claude Code can build with better taste discipline.

---

# Install Option 1 — Standalone CLI

```bash
npx designlang https://ramp.com
```

---

# Install Option 2 — Global Install

```bash
npm install -g designlang
```

---

# Install Option 3 — Claude Code Plugin

```bash
mkdir -p ~/.claude/plugins
git clone https://github.com/Manavarya09/design-extract ~/.claude/plugins/design-extract
cd ~/.claude/plugins/design-extract
npm install
npx playwright install chromium
```

Restart any open Claude Code session.

Then you should be able to run:

```txt
/extract-design https://linear.app
```

inside Claude Code.

---

# Reference Sites

Use these as the core design inspiration set:

```txt
https://ramp.com
https://linear.app
https://anthropic.com
https://stripe.com
https://vercel.com
https://notion.so
https://perplexity.ai
https://cursor.com
https://attio.com
https://www.functionhealth.com
```

---

# Recommended Extraction Command

From inside your project folder:

```bash
mkdir -p design-refs && cd design-refs

for url in \
  https://ramp.com \
  https://linear.app \
  https://anthropic.com \
  https://stripe.com \
  https://vercel.com \
  https://notion.so \
  https://perplexity.ai \
  https://cursor.com \
  https://attio.com \
  https://www.functionhealth.com; do
  npx designlang "$url" --dark --screenshots --depth 2 -o "./$(echo $url | sed 's#https://##' | sed 's#www.##' | cut -d/ -f1)"
done
```

---

# Optional Targeted Diffs

Run these after extraction:

```bash
designlang diff https://ramp.com https://linear.app
designlang diff https://anthropic.com https://cursor.com
designlang diff https://stripe.com https://vercel.com
designlang diff https://ramp.com https://www.functionhealth.com
```

---

# Design Layer Assignments

Use these as constraints:

## Ramp

Spacing scale, section rhythm, bento grid structure, business infrastructure feel.

## Linear

Type scale, weights, line height, letter spacing, quiet premium confidence.

## Anthropic

Color temperature, neutrals, trust, copy tone, AI restraint.

## Stripe

Section sequencing, educational flow, conversion-page architecture.

## Vercel

Gradient treatment, hover states, motion easing, frontend polish.

## Function Health

Warmth, human trust, premium consumer confidence.

---

# Explicit Rejects

Do not pull from:

- Cursor’s dark palette
- Vercel’s deeper rainbow gradients
- Linear’s product-shot density
- excessive glassmorphism
- motion-heavy agency sites
- cyberpunk AI visuals
- crypto-style aesthetics

---

# Important Note

The extraction tool can identify computed CSS, layout, tokens, and visible design language.

It cannot understand the strategic reason a section converts.

Keep these separate:

- design extraction = visual/tokens/motion/layout
- conversion strategy = `CONVERSION_SYSTEM.md`
- brand strategy = `BRAND.md`
- copy = `COPY.md`
