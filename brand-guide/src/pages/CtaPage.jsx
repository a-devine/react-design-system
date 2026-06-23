import { useState } from 'react';
import { Link } from 'react-router-dom';
import Mark from '../components/Mark.jsx';
import { WORDMARK } from '../assets.js';
import CtaSplit from '../cta/CtaSplit.jsx';
import CtaSeal from '../cta/CtaSeal.jsx';
import CtaInverted from '../cta/CtaInverted.jsx';
import CtaInline from '../cta/CtaInline.jsx';
import './CtaPage.css';

const VARIANTS = [
  {
    num: '01', name: 'Split', slug: 'split',
    tag: 'Spread & collapse', context: 'Homepage hero',
    Component: CtaSplit, file: 'cta/split.html', variantId: 'v1-split',
    blurb: 'Paste into any page. Auto-resizes to fit content via postMessage.',
    snippet: `<iframe
  src="/cta/split.html?embed=1"
  title="Free AI Visibility Audit"
  style="width:100%;border:0;background:transparent;"
  height="540"
  loading="lazy"></iframe>
<script>
  window.addEventListener('message', (e) => {
    if (e.data?.type === 'cta:resize' && e.data?.variant === 'v1-split') {
      document.querySelector('iframe[src*="split.html"]').height = e.data.height;
    }
    if (e.data?.type === 'cta:submit') {
      // analytics.track('cta_submit', e.data);
    }
  });
</script>`,
  },
  {
    num: '02', name: 'Seal', slug: 'seal',
    tag: 'Stamp & settle', context: '/audit landing page',
    Component: CtaSeal, file: 'cta/seal.html', variantId: 'v2-seal',
    blurb: 'Best paired with hero copy + proof above. Centered, single-column.',
    snippet: `<iframe
  src="/cta/seal.html?embed=1"
  title="Claim Your Free Audit"
  style="width:100%;border:0;background:transparent;max-width:520px;display:block;margin:0 auto;"
  height="620"
  loading="lazy"></iframe>
<script>
  window.addEventListener('message', (e) => {
    if (e.data?.type === 'cta:resize' && e.data?.variant === 'v2-seal') {
      document.querySelector('iframe[src*="seal.html"]').height = e.data.height;
    }
  });
</script>`,
  },
  {
    num: '03', name: 'Inverted', slug: 'inverted',
    tag: 'Paper & ink trade places', context: 'Mid-page service / pricing CTA',
    Component: CtaInverted, file: 'cta/inverted.html', variantId: 'v3-inverted',
    blurb: 'Drop into a section break on service or pricing pages. The dark form gives visual punctuation.',
    snippet: `<iframe
  src="/cta/inverted.html?embed=1"
  title="See where you're invisible"
  style="width:100%;border:0;background:transparent;"
  height="540"
  loading="lazy"></iframe>
<script>
  window.addEventListener('message', (e) => {
    if (e.data?.type === 'cta:resize' && e.data?.variant === 'v3-inverted') {
      document.querySelector('iframe[src*="inverted.html"]').height = e.data.height;
    }
  });
</script>`,
  },
  {
    num: '04', name: 'Inline', slug: 'inline',
    tag: 'Type-led, single field', context: 'Footer / blog inline',
    Component: CtaInline, file: 'cta/inline.html', variantId: 'v4-inline',
    blurb: 'Lightest possible footprint. Lives in footers, after blog posts, or between content sections.',
    snippet: `<iframe
  src="/cta/inline.html?embed=1"
  title="Become the business an AI recommends"
  style="width:100%;border:0;background:transparent;"
  height="420"
  loading="lazy"></iframe>
<script>
  window.addEventListener('message', (e) => {
    if (e.data?.type === 'cta:resize' && e.data?.variant === 'v4-inline') {
      document.querySelector('iframe[src*="inline.html"]').height = e.data.height;
    }
  });
</script>`,
  },
];

function OpenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      console.warn('Clipboard write failed', e);
    }
  };
  return (
    <button className={`copy${copied ? ' done' : ''}`} type="button" aria-label="Copy embed code" onClick={onCopy}>
      {copied ? (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

export default function CtaPage() {
  return (
    <div className="cta-library">
      <header className="page">
        <div>
          <div className="mark-row">
            <Mark />
            <img src={WORDMARK} alt="Devine Edge" />
          </div>
          <span className="kicker">CTA Library · Production-ready</span>
          <h1>Four CTAs, four contexts. <span className="serif">One brand voice.</span></h1>
          <p>Each variation is a self-contained component you can drop into any page on the Devine Edge site. All four share the same brand tokens, motion language, form-submission contract, and analytics hooks.</p>
        </div>
        <div className="meta">
          <span className="label">Version</span><br />
          v1.0 · Released May 2026<br /><br />
          <span className="label">Files</span><br />
          <code>cta/split.html</code><br />
          <code>cta/seal.html</code><br />
          <code>cta/inverted.html</code><br />
          <code>cta/inline.html</code>
        </div>
      </header>

      <main>
        {VARIANTS.map(({ num, name, slug, tag, context, Component, blurb, snippet, file }, i) => (
          <article className="variant" key={slug}>
            <div className="variant-head">
              <div className="left">
                <span className="num">{num}</span>
                <h2>{name}</h2>
                <span className="tag">{tag}</span>
                <span className="context">{context}</span>
              </div>
              <div className="actions">
                <Link className="pill-btn" to={`/cta/${slug}`}>
                  <OpenIcon />
                  Open
                </Link>
              </div>
            </div>
            <div className="variant-body">
              <div className="preview-pane">
                <Component />
              </div>
              <div className="embed-pane">
                <h3><span className="step">{num}</span>Iframe embed</h3>
                <p>{blurb}</p>
                <pre className="code-block">
                  <CopyButton code={snippet} />
                  {snippet}
                </pre>
                <div className="files">
                  Deploy: <code>{file}</code> + shared <code>assets/wordmark.svg</code>, <code>assets/favicon.svg</code>.
                </div>
              </div>
            </div>
          </article>
        ))}

        <section className="docs">
          <h2>Usage notes</h2>

          <div>
            <h3>1 · Two ways to embed</h3>
            <p><strong>Iframe</strong> (recommended) — isolated styles, won't conflict with the host page. Use <code>?embed=1</code> for transparent background. Code blocks above auto-resize the iframe to its content.</p>
            <p><strong>Copy-paste HTML</strong> — every file's <code>&lt;style&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;script&gt;</code> blocks are scoped under one class (<code>.cta-split</code>, etc.) so they're safe to drop into a host page directly. You'll need to keep the Google Fonts link and the anime.js script too.</p>

            <h3>2 · Brand tokens</h3>
            <p>All four define the same scoped CSS variables: <code>--ink</code>, <code>--paper</code>, <code>--paper2</code>, <code>--card</code>, <code>--line</code>, <code>--blue</code>, <code>--blue50</code>, <code>--blue100</code>, <code>--mute</code>, <code>--mute2</code>. Override on the root section to retheme.</p>

            <h3>3 · Reduced motion</h3>
            <p>Every entrance respects <code>prefers-reduced-motion</code>. Users with the OS setting on see the final state instantly, no movement.</p>
          </div>

          <div>
            <h3>4 · Form submission</h3>
            <p>Each form fires two events when validated and submitted:</p>
            <ul>
              <li><code>cta:submit</code> CustomEvent on <code>window</code>, with <code>{'{ variant, context, data }'}</code> in <code>event.detail</code></li>
              <li><code>postMessage</code> to the parent window (for iframe embeds) with the same payload</li>
            </ul>
            <p>The form prevents default and shows a success state. To wire to a real endpoint (HubSpot, Formspree, your API), add a listener that <code>fetch</code>es the data.</p>

            <h3>5 · Analytics hooks</h3>
            <p>Every CTA root carries <code>data-cta="vN-name"</code> and <code>data-cta-context="..."</code>. Listen for <code>cta:submit</code> and forward to your analytics:</p>
            <p><code>window.addEventListener('cta:submit', e =&gt; analytics.track('audit_request', e.detail));</code></p>

            <h3>6 · Assets &amp; dependencies</h3>
            <p>Each file expects <code>../assets/wordmark.svg</code> and <code>../assets/favicon.svg</code> from a shared assets folder. Loads Geist + Instrument Serif from Google Fonts, and anime.js v3.2.1. All cached aggressively.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
