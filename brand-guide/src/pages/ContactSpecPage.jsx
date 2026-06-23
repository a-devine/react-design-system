import './ContactSpecPage.css';
import useScrollSpy from '../hooks/useScrollSpy.js';

const SECTION_IDS = [
  's1',
  's2',
  's3',
  's4',
  's4-1',
  's4-2',
  's4-3',
  's5',
  's5-1',
  's5-2',
  's5-3',
  's5-4',
  's5-5',
  's6',
  's7',
  's8',
  's9',
  's10',
  's11',
  's12',
];

const TOC = [
  { id: 's1', label: '1. Purpose & priority' },
  { id: 's2', label: '2. Design tokens' },
  { id: 's3', label: '3. Page structure' },
  { id: 's4', label: '4. Section specs' },
  { id: 's4-1', label: '4.1 Header', sub: true },
  { id: 's4-2', label: '4.2 Hero', sub: true },
  { id: 's4-3', label: '4.3 Dual-path body', sub: true },
  { id: 's5', label: '5. The form' },
  { id: 's5-1', label: '5.1 Fields', sub: true },
  { id: 's5-2', label: '5.2 Field styling', sub: true },
  { id: 's5-3', label: '5.3 Submit button', sub: true },
  { id: 's5-4', label: '5.4 Field states', sub: true },
  { id: 's5-5', label: '5.5 Validation', sub: true },
  { id: 's6', label: '6. Success state' },
  { id: 's7', label: '7. Compliance' },
  { id: 's8', label: '8. Responsive' },
  { id: 's9', label: '9. Accessibility' },
  { id: 's10', label: '10. Data & integrations' },
  { id: 's11', label: '11. Open questions' },
  { id: 's12', label: '12. Build notes' },
];

export default function ContactSpecPage() {
  const active = useScrollSpy(SECTION_IDS);

  return (
    <div className="contact-spec">
      <div className="page-wrap">
        {/* ── Sidebar ── */}
        <aside className="sidebar">
          <div className="sidebar-brand">
            <div className="sidebar-brand-dot"></div>
            <span className="sidebar-brand-name">Devine Edge</span>
          </div>
          <div className="toc-label">Contents</div>
          <ul className="toc-list">
            {TOC.map((item) => (
              <li key={item.id} className={item.sub ? 'toc-sub' : undefined}>
                <a href={`#${item.id}`} className={active === item.id ? 'active' : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* ── Main ── */}
        <main className="main">
          {/* Doc header */}
          <div className="doc-header">
            <div className="doc-eyebrow">
              <div className="doc-eyebrow-rule"></div>
              <span className="doc-eyebrow-text">UI Specification</span>
            </div>
            <h1 className="doc-title">
              Devine Edge <span className="route">/contact</span>
            </h1>
            <div className="doc-meta">
              <span className="doc-meta-chip blue">Implementation-ready</span>
              <span className="doc-meta-chip">v1.0 · June 2026</span>
              <span className="doc-meta-chip">Copy: Website Copy V1</span>
            </div>
          </div>

          <div className="callout">
            <strong>Defaults assumed</strong> (questions timed out): dual-path layout — Free Audit is the
            primary conversion, plain "Send a message" form is the secondary path; two-column split; reuse
            brand tokens + existing form component; full field list with required/optional marked; the "what
            are you looking for help with?" field is a <code>&lt;select&gt;</code>; inline success state that
            reveals "what happens next"; mobile-first. Anything marked <strong>⚠ NEEDS INPUT</strong> is a
            real gap.
          </div>

          {/* ── 1. Purpose ── */}
          <section className="spec-section" id="s1">
            <div className="section-header">
              <span className="section-num">01</span>
              <h2>Purpose &amp; priority</h2>
            </div>
            <p>
              The contact page is the <strong>3rd build priority</strong> (after Homepage and Free Audit
              page). Its job: <em>"gives people a simple way to reach out."</em>
            </p>
            <p>Two visitor intents land here, and the page serves both without forcing a choice:</p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Intent</th>
                    <th>Path</th>
                    <th>Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      "I want the free audit" <strong>(primary)</strong>
                    </td>
                    <td>Audit CTA → Free Audit page</td>
                    <td>
                      <strong>Primary</strong> — visually dominant, top-left
                    </td>
                  </tr>
                  <tr>
                    <td>"I just have a question / want to talk fit"</td>
                    <td>Inline message form</td>
                    <td>
                      <strong>Secondary</strong> — the form on this page
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Do <strong>not</strong> rebuild the full audit form here. The audit lives on its own page; this
              page points to it.
            </p>
          </section>

          <div className="divider"></div>

          {/* ── 2. Tokens ── */}
          <section className="spec-section" id="s2">
            <div className="section-header">
              <span className="section-num">02</span>
              <h2>Design tokens</h2>
            </div>
            <p>
              Lifted verbatim from <code>Devine Edge - Brand Guide.html</code>. Use these exact values — do
              not invent new colors.
            </p>

            <h3>Color</h3>
            <div className="token-grid">
              <div className="token-card">
                <div className="token-swatch" style={{ background: '#1A1A1A' }}></div>
                <div className="token-info">
                  <div className="token-name">--ink</div>
                  <div className="token-value">#1A1A1A</div>
                  <div className="token-desc">Primary text, btn bg</div>
                </div>
              </div>
              <div className="token-card">
                <div className="token-swatch" style={{ background: '#6B635A' }}></div>
                <div className="token-info">
                  <div className="token-name">--mute</div>
                  <div className="token-value">#6B635A</div>
                  <div className="token-desc">Body / secondary text</div>
                </div>
              </div>
              <div className="token-card">
                <div className="token-swatch" style={{ background: '#8F8579' }}></div>
                <div className="token-info">
                  <div className="token-name">--mute2</div>
                  <div className="token-value">#8F8579</div>
                  <div className="token-desc">Labels, placeholders</div>
                </div>
              </div>
              <div className="token-card">
                <div className="token-swatch" style={{ background: '#F8F4EC', border: '1px solid #E8E0CF' }}></div>
                <div className="token-info">
                  <div className="token-name">--paper</div>
                  <div className="token-value">#F8F4EC</div>
                  <div className="token-desc">Page background (warm)</div>
                </div>
              </div>
              <div className="token-card">
                <div className="token-swatch" style={{ background: '#FBF8F1', border: '1px solid #E8E0CF' }}></div>
                <div className="token-info">
                  <div className="token-name">--paper2</div>
                  <div className="token-value">#FBF8F1</div>
                  <div className="token-desc">Input bg, dark-plate text</div>
                </div>
              </div>
              <div className="token-card">
                <div className="token-swatch" style={{ background: '#FFFFFF', border: '1px solid #E8E0CF' }}></div>
                <div className="token-info">
                  <div className="token-name">--card</div>
                  <div className="token-value">#FFFFFF</div>
                  <div className="token-desc">Form card surface</div>
                </div>
              </div>
              <div className="token-card">
                <div className="token-swatch" style={{ background: '#E8E0CF' }}></div>
                <div className="token-info">
                  <div className="token-name">--line</div>
                  <div className="token-value">#E8E0CF</div>
                  <div className="token-desc">Default borders</div>
                </div>
              </div>
              <div className="token-card">
                <div className="token-swatch" style={{ background: '#1F8FFF' }}></div>
                <div className="token-info">
                  <div className="token-name">--blue</div>
                  <div className="token-value">#1F8FFF</div>
                  <div className="token-desc">Accent, focus, links</div>
                </div>
              </div>
              <div className="token-card">
                <div className="token-swatch" style={{ background: '#E3EFFF' }}></div>
                <div className="token-info">
                  <div className="token-name">--blue50</div>
                  <div className="token-value">#E3EFFF</div>
                  <div className="token-desc">Badge tints, focus halo</div>
                </div>
              </div>
              <div className="token-card">
                <div className="token-swatch" style={{ background: '#B9D7FB' }}></div>
                <div className="token-info">
                  <div className="token-name">--blue100</div>
                  <div className="token-value">#B9D7FB</div>
                  <div className="token-desc">Eyebrow rule</div>
                </div>
              </div>
              <div className="token-card">
                <div className="token-swatch" style={{ background: '#25564F' }}></div>
                <div className="token-info">
                  <div className="token-name">--teal</div>
                  <div className="token-value">#25564F</div>
                  <div className="token-desc">Success text</div>
                </div>
              </div>
              <div className="token-card">
                <div className="token-swatch" style={{ background: '#E0EAE7' }}></div>
                <div className="token-info">
                  <div className="token-name">--teal50</div>
                  <div className="token-value">#E0EAE7</div>
                  <div className="token-desc">Success background</div>
                </div>
              </div>
            </div>

            <h3>Typography</h3>
            <pre>
              <code>{`--font-sans:  'Geist', ui-sans-serif, system-ui, sans-serif;   /* body + UI */
--font-mono:  'Geist Mono', ui-monospace, monospace;            /* eyebrows, labels */
--font-serif: 'Instrument Serif', serif;                        /* italic accent only */`}</code>
            </pre>
            <p>Google Fonts import (project-wide):</p>
            <pre>
              <code>{`https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700
  &family=Geist+Mono:wght@400;500
  &family=Instrument+Serif:ital@0;1
  &display=swap`}</code>
            </pre>

            <h3>Shape &amp; elevation</h3>
            <pre>
              <code>{`Field radius:   10px
Card radius:    14–20px  (20px hero split card; 14px sub-cards)
Button radius:  999px  (pill)
Card shadow:    0 1px 0 rgba(26,26,26,0.04),
                0 18px 40px -28px rgba(26,26,26,0.18)
Texture:        fixed radial dot-grid overlay
                  rgba(26,26,26,0.025) 1px dots / 3px grid
                  opacity .6, mix-blend-mode: multiply
                  (copy body::before from Brand Guide)`}</code>
            </pre>
          </section>

          <div className="divider"></div>

          {/* ── 3. Page structure ── */}
          <section className="spec-section" id="s3">
            <div className="section-header">
              <span className="section-num">03</span>
              <h2>Page structure</h2>
            </div>
            <div className="page-diagram">
              <span className="dim">┌─</span> <span className="hi">Header</span> (sticky, shared site nav){' '}
              <span className="dim">─────────────────────────────────────┐</span>
              {'\n'}
              <span className="dim">│</span>  Logo: Devine Edge          Home · What We Build · Free Audit ·{'  '}
              <span className="dim">│</span>
              {'\n'}
              <span className="dim">│</span>                             How It Works · Who It's For · FAQ{'    '}
              <span className="dim">│</span>
              {'\n'}
              <span className="dim">│</span>                                             [ Get Free Audit ]{'   '}
              <span className="dim">│</span>
              {'\n'}
              <span className="dim">├─</span> <span className="hi">1. Contact Hero</span>{' '}
              <span className="dim">──────────────────────────────────────────────┤</span>
              {'\n'}
              <span className="dim">│</span>  eyebrow · headline · subheadline{'                                '}
              <span className="dim">│</span>
              {'\n'}
              <span className="dim">├─</span> <span className="hi">2. Dual-path body</span> (two-column split){' '}
              <span className="dim">────────────────────────┤</span>
              {'\n'}
              <span className="dim">│</span>  <span className="hi">LEFT</span>  — Primary: "Start with a Free Audit" panel (dark plate){'   '}
              <span className="dim">│</span>
              {'\n'}
              <span className="dim">│</span>  <span className="hi">RIGHT</span> — Secondary: "Send a message" form card{'                   '}
              <span className="dim">│</span>
              {'\n'}
              <span className="dim">├─</span> <span className="hi">3. Success state</span> (replaces form on submit){' '}
              <span className="dim">─────────────────┤</span>
              {'\n'}
              <span className="dim">│</span>  "What happens next" — 4 steps, inline{'                           '}
              <span className="dim">│</span>
              {'\n'}
              <span className="dim">├─</span> <span className="hi">4. Footer</span> (shared site footer){' '}
              <span className="dim">──────────────────────────────┤</span>
              {'\n'}
              <span className="dim">└──────────────────────────────────────────────────────────────────┘</span>
            </div>
            <p>
              On mobile the two columns stack: <strong>Audit panel first, form second.</strong>
            </p>
          </section>

          <div className="divider"></div>

          {/* ── 4. Section specs ── */}
          <section className="spec-section" id="s4">
            <div className="section-header">
              <span className="section-num">04</span>
              <h2>Section specs</h2>
            </div>

            <h3 id="s4-1">4.1 Header (shared component)</h3>
            <p>
              Reuse the site's sticky header. Tokens from Brand Guide <code>header.bar</code>:{' '}
              <code>background: rgba(248,244,236,0.86)</code>, <code>backdrop-filter: blur(12px)</code>,{' '}
              <code>border-bottom: 1px solid var(--line)</code>. Nav items per copy doc. Mark{' '}
              <strong>Contact</strong> as <code>aria-current="page"</code>. Header primary button{' '}
              <code>Get Free Audit</code> uses the <code>.ll-btn</code> style (see §5.3). Nav collapses below{' '}
              <strong>880px</strong>.
            </p>

            <h3 id="s4-2">4.2 Contact Hero</h3>
            <p>
              <strong>Copy (verbatim):</strong>
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Copy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Eyebrow</td>
                    <td>Contact Devine Edge</td>
                  </tr>
                  <tr>
                    <td>Headline</td>
                    <td>Want to see where your business is losing visibility, trust, or leads?</td>
                  </tr>
                  <tr>
                    <td>Subheadline</td>
                    <td>
                      Start with a Free AI Visibility Audit or reach out to discuss whether Devine Edge is a
                      fit for your business.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Specs:</strong>
            </p>
            <ul>
              <li>
                <strong>Eyebrow:</strong> <code>--font-mono</code>, 11px,{' '}
                <code>letter-spacing: 0.22em</code>, uppercase, <code>color: var(--blue)</code>, with the 22px
                × 1px <code>--blue100</code> rule before it.
              </li>
              <li>
                <strong>Headline:</strong> <code>--font-sans</code>, weight 600,{' '}
                <code>clamp(30px, 4.4vw, 46px)</code>, <code>letter-spacing: -0.025em</code>,{' '}
                <code>line-height: 1.04</code>, <code>max-width: 18ch</code>. Optionally one serif/blue accent
                phrase max.
              </li>
              <li>
                <strong>Subheadline:</strong> 17px, <code>color: var(--mute)</code>,{' '}
                <code>max-width: 60ch</code>, <code>line-height: 1.55</code>.
              </li>
              <li>
                <strong>Spacing:</strong> hero block <code>padding: 84px 32px</code>, headline{' '}
                <code>margin-top: 16px</code>, subheadline <code>margin-top: 18px</code>.
              </li>
            </ul>

            <h3 id="s4-3">4.3 Dual-path body</h3>
            <p>
              Two-column split inside the <code>--maxw</code> (1080px) container:
            </p>
            <pre>
              <code>{`grid-template-columns: minmax(320px, 0.85fr) minmax(380px, 1.15fr);
gap: 0;  /* cards share an edge — mirror cta-form.html split */
radii:  left card  → 20px 0 0 20px
        right card → 0 20px 20px 0
mobile: left → 20px 20px 0 0  /  right → 0 0 20px 20px`}</code>
            </pre>

            <h4>LEFT — Free Audit panel (dark plate)</h4>
            <p>
              Reuse <code>.logo-plate</code> from <code>cta-form.html</code> (dark <code>--ink</code> bg,
              faint white grid overlay, blue radial glow bottom-right).
            </p>
            <ul>
              <li>
                <strong>Top tag:</strong> pulse dot (6px, <code>--blue</code>,{' '}
                <code>0 0 0 4px rgba(31,143,255,0.18)</code> ring) + "Devine Edge", mono 11px uppercase,{' '}
                <code>rgba(251,248,241,0.6)</code>
              </li>
              <li>
                <strong>Heading:</strong> "Start with a Free AI Visibility Audit" — sans 28–32px, weight 500,{' '}
                <code>letter-spacing: -0.02em</code>, <code>color: var(--paper2)</code>
              </li>
              <li>
                <strong>Body:</strong> "See where you stand, where competitors are winning, and what to fix
                first." — 13–14px, <code>rgba(251,248,241,0.65)</code>, <code>max-width: 230px</code>
              </li>
              <li>
                <strong>Bullets (trim to 3–4):</strong> Local &amp; Google visibility · AI-search readiness ·
                Competitor comparison · Top growth opportunities
              </li>
              <li>
                <strong>Primary CTA:</strong> "Get a Free AI Visibility Audit" → <code>/free-audit</code>.{' '}
                <code>.ll-btn</code> inverse variant. Pill + arrow icon. Single most prominent action on the
                page.
              </li>
              <li>
                <strong>Microcopy:</strong> "No pressure. Just clarity."
              </li>
            </ul>

            <h4>RIGHT — "Send a message" form card</h4>
            <p>
              Reuse <code>.form-card</code> from <code>cta-form.html</code>.
            </p>
            <ul>
              <li>
                <strong>Eyebrow:</strong> "Or send a message" — mono 11px, uppercase, <code>--blue</code>
              </li>
              <li>
                <strong>Headline:</strong> "Send a message" — sans 30px, weight 500,{' '}
                <code>letter-spacing: -0.028em</code>
              </li>
              <li>
                <strong>Intro copy:</strong> "Share a few details about your business and we'll review your
                current visibility, online presence, and growth opportunities." — 14.5px, <code>--mute</code>
              </li>
              <li>
                <strong>Submit microcopy:</strong> "We will review your message and respond if there is a
                clear fit."
              </li>
            </ul>
          </section>

          <div className="divider"></div>

          {/* ── 5. Form ── */}
          <section className="spec-section" id="s5">
            <div className="section-header">
              <span className="section-num">05</span>
              <h2>The "Send a message" form</h2>
            </div>

            <h3 id="s5-1">5.1 Fields</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Label</th>
                    <th>Control</th>
                    <th>Type</th>
                    <th>Req.</th>
                    <th>Placeholder / options</th>
                    <th>Autocomplete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Name</td>
                    <td>
                      <code>input</code>
                    </td>
                    <td>text</td>
                    <td>
                      <span className="req">✓</span>
                    </td>
                    <td>
                      <code>Jane Devine</code>
                    </td>
                    <td>
                      <code>name</code>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Business name</td>
                    <td>
                      <code>input</code>
                    </td>
                    <td>text</td>
                    <td>
                      <span className="req">✓</span>
                    </td>
                    <td>
                      <code>e.g. Northgate Med Spa</code>
                    </td>
                    <td>
                      <code>organization</code>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Website</td>
                    <td>
                      <code>input</code>
                    </td>
                    <td>url</td>
                    <td>
                      <span className="opt">—</span>
                    </td>
                    <td>
                      <code>https://</code>
                    </td>
                    <td>
                      <code>url</code>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Email</td>
                    <td>
                      <code>input</code>
                    </td>
                    <td>email</td>
                    <td>
                      <span className="req">✓</span>
                    </td>
                    <td>
                      <code>you@business.com</code>
                    </td>
                    <td>
                      <code>email</code>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Phone</td>
                    <td>
                      <code>input</code>
                    </td>
                    <td>tel</td>
                    <td>
                      <span className="opt">—</span>
                    </td>
                    <td>
                      <code>(555) 000-0000</code>
                    </td>
                    <td>
                      <code>tel</code>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>What are you looking for help with?</td>
                    <td>
                      <strong>
                        <code>select</code>
                      </strong>
                    </td>
                    <td>—</td>
                    <td>
                      <span className="req">✓</span>
                    </td>
                    <td>See options below</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Message</td>
                    <td>
                      <code>textarea</code>
                    </td>
                    <td>—</td>
                    <td>
                      <span className="opt">—</span>
                    </td>
                    <td>
                      <code>Tell us a bit about your business and what you're trying to improve.</code>
                    </td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Field 6 select options:</strong> "Select one…" (disabled placeholder) · More calls &amp;
              leads · Website that converts · Local / Google visibility · AI search visibility (GEO) ·
              Competitor intelligence · Reviews &amp; reputation · Follow-up &amp; automation · Not sure —
              need direction · Other
            </p>
            <p>
              <strong>Two-up layout:</strong> Name + Business name on one row at ≥520px card width (
              <code>grid-template-columns: 1fr 1fr; gap: 14px</code>); Email + Phone likewise. Website, select,
              Message are full-width. Single column below that.
            </p>

            <h3 id="s5-2">5.2 Field styling</h3>
            <pre>
              <code>{`/* Group */
display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px;

/* Label */
font-family: var(--font-mono); font-size: 11px;
letter-spacing: 0.14em; text-transform: uppercase;
color: var(--mute2);

/* Input / select / textarea */
appearance: none;
background: var(--paper2); border: 1px solid var(--line);
border-radius: 10px; padding: 12px 14px;
font: inherit; font-size: 15px; color: var(--ink);

/* Textarea */
min-height: 120px; resize: vertical; line-height: 1.5;

/* Select — add custom chevron; render placeholder in --mute2 */`}</code>
            </pre>

            <h3 id="s5-3">5.3 Submit button</h3>
            <pre>
              <code>{`background: var(--ink); color: var(--paper2);
border: none; font-weight: 500; font-size: 14.5px;
padding: 13px 22px; border-radius: 999px;
display: inline-flex; align-items: center; gap: 10px;
transition: transform .12s ease, background .2s ease;

:hover  → background: #000; transform: translateY(-1px);
:active → transform: scale(0.98);
arrow   → 16px stroke icon; :hover → translateX(3px);`}</code>
            </pre>
            <p>
              <strong>Label (verbatim):</strong> "Send Message". Place in a <code>.submit-row</code> with the
              microcopy (<code>justify-content: space-between</code>), or stack on narrow cards.
            </p>

            <h3 id="s5-4">5.4 Field states</h3>
            <div
              style={{
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '4px 16px',
                margin: '14px 0 20px',
              }}
            >
              <div className="state-row">
                <span className="state-badge rest">Rest</span>
                <span className="state-desc">
                  <code>background:var(--paper2); border:1px solid var(--line)</code>
                </span>
              </div>
              <div className="state-row">
                <span className="state-badge">Hover</span>
                <span className="state-desc">
                  <code>border-color:var(--line2)</code>
                </span>
              </div>
              <div className="state-row">
                <span className="state-badge focus">Focus</span>
                <span className="state-desc">
                  <code>
                    outline:none; background:#fff; border-color:var(--blue); box-shadow:0 0 0 4px
                    rgba(31,143,255,0.12)
                  </code>
                </span>
              </div>
              <div className="state-row">
                <span className="state-badge">Filled</span>
                <span className="state-desc">
                  Same as rest; text <code>--ink</code>
                </span>
              </div>
              <div className="state-row">
                <span className="state-badge error">Error</span>
                <span className="state-desc">
                  <code>border-color:#B23A26; box-shadow:0 0 0 4px rgba(178,58,38,0.10)</code> — helper text
                  below in <code>#B23A26</code>, 12.5px
                </span>
              </div>
              <div className="state-row">
                <span className="state-badge">Disabled</span>
                <span className="state-desc">
                  <code>opacity:.55; cursor:not-allowed</code>
                </span>
              </div>
              <div className="state-row">
                <span className="state-badge sub">Submitting</span>
                <span className="state-desc">
                  Button shows inline spinner; label → "Sending…"; button <code>disabled</code>,{' '}
                  <code>opacity:.7</code>
                </span>
              </div>
            </div>

            <h3 id="s5-5">5.5 Validation</h3>
            <ul>
              <li>
                Validate on <strong>blur</strong> per field; validate <strong>all</strong> on submit.
              </li>
              <li>Email: standard email pattern → "Enter a valid email"</li>
              <li>Required fields: Name, Business name, Email, field 6 → "This field is required"</li>
              <li>
                Website: optional; normalize to <code>https://</code> on submit if filled.
              </li>
              <li>Phone: optional; accept free-form; do not over-validate.</li>
              <li>
                Always pair error colour with visible text + <code>aria-invalid="true"</code> +{' '}
                <code>aria-describedby</code> pointing at the error node.
              </li>
            </ul>
          </section>

          <div className="divider"></div>

          {/* ── 6. Success state ── */}
          <section className="spec-section" id="s6">
            <div className="section-header">
              <span className="section-num">06</span>
              <h2>Success state</h2>
            </div>
            <p>
              On successful submit, <strong>replace the form card's contents</strong> (keep the card) with a
              confirmation and the "What happens next" steps. Move keyboard focus to the heading.
            </p>
            <ul>
              <li>
                <strong>Heading:</strong> "Message sent." — sans 30px, weight 500, small teal check badge (
                <code>background:var(--teal50); color:var(--teal); border-radius:5px</code>)
              </li>
              <li>
                <strong>Confirmation line:</strong> "We will review your message and respond if there is a
                clear fit."
              </li>
              <li>
                <strong>Focus management:</strong> <code>tabindex="-1"</code>, <code>role="status"</code> /{' '}
                <code>aria-live="polite"</code> on the heading
              </li>
              <li>
                <strong>Secondary actions:</strong> "← Send another message" (resets form) + persistent audit
                CTA "Get a Free Audit"
              </li>
            </ul>
            <h4>What happens next — 4 steps</h4>
            <div className="step-list">
              <div className="step-item">
                <span className="step-num">01</span>
                <div className="step-content">
                  <div className="step-title">We review your business</div>
                  <div className="step-desc">
                    Site, local presence, Google profile, competitor position, obvious conversion gaps.
                  </div>
                </div>
              </div>
              <div className="step-item">
                <span className="step-num">02</span>
                <div className="step-content">
                  <div className="step-title">We identify the biggest opportunities</div>
                  <div className="step-desc">
                    The changes most likely to improve visibility, trust, lead capture, and follow-up.
                  </div>
                </div>
              </div>
              <div className="step-item">
                <span className="step-num">03</span>
                <div className="step-content">
                  <div className="step-title">You receive the findings</div>
                  <div className="step-desc">
                    A clear summary of where you stand and what we'd fix first.
                  </div>
                </div>
              </div>
              <div className="step-item">
                <span className="step-num">04</span>
                <div className="step-content">
                  <div className="step-title">If it makes sense, we talk next steps</div>
                  <div className="step-desc">A Growth Infrastructure Package or ongoing support.</div>
                </div>
              </div>
            </div>
            <p>
              Step numbers in <code>--font-mono</code>, <code>--blue</code>. Titles weight 600. Descriptions{' '}
              <code>--mute</code>, 14px.
            </p>
          </section>

          <div className="divider"></div>

          {/* ── 7. Compliance ── */}
          <section className="spec-section" id="s7">
            <div className="section-header">
              <span className="section-num">07</span>
              <h2>Compliance &amp; anti-spam</h2>
            </div>
            <ul>
              <li>
                <strong>Honeypot field:</strong> visually hidden (
                <code>position:absolute; left:-9999px</code>), <code>tabindex="-1"</code>,{' '}
                <code>autocomplete="off"</code>, <code>aria-hidden="true"</code>. Reject if filled.
              </li>
              <li>
                <strong>Consent line</strong> (non-blocking, below submit): 12px, <code>--mute2</code> — "By
                submitting, you agree to be contacted about your inquiry. We never share or sell your data."
              </li>
            </ul>
            <div className="callout warn">
              <strong>⚠ NEEDS INPUT:</strong> If a marketing opt-in or hard privacy-policy checkbox is legally
              required, add a checkbox + link to <code>/privacy</code>. No privacy policy URL exists in the
              source material.
            </div>
          </section>

          <div className="divider"></div>

          {/* ── 8. Responsive ── */}
          <section className="spec-section" id="s8">
            <div className="section-header">
              <span className="section-num">08</span>
              <h2>Responsive behavior (mobile-first)</h2>
            </div>
            <div className="bp-grid">
              <div className="bp-card">
                <div className="bp-label">&lt; 560px</div>
                <div className="bp-desc">
                  Single column. Hero padding 56px 20px. Audit plate + form stacked full-width. All form
                  fields single-column. Submit button full-width; microcopy above it.
                </div>
              </div>
              <div className="bp-card">
                <div className="bp-label">560–880px</div>
                <div className="bp-desc">
                  Single column still, but Name/Business and Email/Phone may pair into 2-up rows inside the
                  form. Hero padding 72px 28px.
                </div>
              </div>
              <div className="bp-card">
                <div className="bp-label">≥ 880px</div>
                <div className="bp-desc">
                  Two-column split (audit plate + form share an edge). Header nav visible. Hero padding 84px
                  32px.
                </div>
              </div>
              <div className="bp-card">
                <div className="bp-label">≥ 1080px</div>
                <div className="bp-desc">
                  Container caps at <code>--maxw</code> (1080px); centered with auto margins.
                </div>
              </div>
            </div>
            <ul>
              <li>
                Tap targets ≥ <strong>44px</strong> (inputs at 12px padding + 15px text ≈ 45px; pill button ≥
                45px — OK)
              </li>
              <li>
                Bump input <code>font-size</code> to 16px below 560px to prevent iOS zoom-on-focus
              </li>
            </ul>
          </section>

          <div className="divider"></div>

          {/* ── 9. Accessibility ── */}
          <section className="spec-section" id="s9">
            <div className="section-header">
              <span className="section-num">09</span>
              <h2>Accessibility</h2>
            </div>
            <ul>
              <li>
                Every field has a real <code>&lt;label for&gt;</code>; placeholders are <strong>not</strong> a
                substitute for labels.
              </li>
              <li>Logical DOM/focus order: hero → audit CTA → form fields top-to-bottom → submit.</li>
              <li>
                Visible focus ring on all interactive elements (4px blue halo doubles as the focus indicator —
                also on buttons and links, not just inputs).
              </li>
              <li>
                <strong>Color contrast:</strong> <code>--ink</code> on <code>--paper</code> passes AA;{' '}
                <code>--mute</code> (#6B635A) on paper passes AA for body text. <code>--blue</code> (#1F8FFF)
                on white is ~3:1 — acceptable for large text / UI accents, <strong>not</strong> for small body
                copy.
              </li>
              <li>
                Errors announced via <code>aria-live</code>; success state focus-managed (§6).
              </li>
              <li>
                Honeypot hidden with <code>position:absolute; left:-9999px</code> (not <code>display:none</code>
                ) + <code>aria-hidden="true"</code>.
              </li>
            </ul>
          </section>

          <div className="divider"></div>

          {/* ── 10. Data ── */}
          <section className="spec-section" id="s10">
            <div className="section-header">
              <span className="section-num">10</span>
              <h2>Data handling &amp; integrations</h2>
            </div>
            <div className="callout warn">
              <strong>⚠ NEEDS INPUT:</strong> The source material specifies no backend. All items below are
              open decisions.
            </div>
            <ul>
              <li>
                <strong>Submission target:</strong> CRM/form endpoint? Recommend a single POST that routes to
                the owner's inbox + CRM.
              </li>
              <li>
                <strong>Fields → CRM mapping:</strong> field 6 (select) and Message are the qualifying
                signals; pass as structured fields, not just a blob.
              </li>
              <li>
                <strong>Spam:</strong> honeypot is specced; add server-side rate limiting / optional CAPTCHA
                if abuse appears.
              </li>
              <li>
                <strong>Notifications:</strong> owner email on every submit. Consider an autoresponder echoing
                the "What happens next" steps.
              </li>
            </ul>
          </section>

          <div className="divider"></div>

          {/* ── 11. Open questions ── */}
          <section className="spec-section" id="s11">
            <div className="section-header">
              <span className="section-num">11</span>
              <h2>Open questions / gaps to resolve</h2>
            </div>
            <div className="gap-list">
              <div className="gap-item">
                <span className="gap-num">01</span>
                <div className="gap-text">
                  <strong>No direct contact details exist</strong> — no email, phone, address, service area,
                  hours, or social links anywhere in the copy doc. If any are real, add a compact "Other ways
                  to reach us" block. Until then, the form + audit CTA are the only channels.
                </div>
              </div>
              <div className="gap-item">
                <span className="gap-num">02</span>
                <div className="gap-text">
                  <strong>Response-time promise</strong> — the brand leans on "speed wins the lead." A
                  concrete SLA (e.g. "We reply within 1 business day") would strengthen the page but isn't in
                  the source. Confirm before stating a number.
                </div>
              </div>
              <div className="gap-item">
                <span className="gap-num">03</span>
                <div className="gap-text">
                  <strong>Privacy policy URL</strong> — needed for the consent line / any required checkbox.
                </div>
              </div>
              <div className="gap-item">
                <span className="gap-num">04</span>
                <div className="gap-text">
                  <strong>Button hover convention</strong> — <code>cta-form.html</code> hovers to{' '}
                  <code>--blue</code>; the Brand Guide hovers to <code>#000</code>. Pick one site-wide.
                  Recommend: solid buttons → <code>#000</code>, accent buttons → <code>#0E7CEB</code>.
                </div>
              </div>
              <div className="gap-item">
                <span className="gap-num">05</span>
                <div className="gap-text">
                  <strong>Hero accent phrase</strong> — confirm whether to set a serif/blue accent in the
                  headline (brand rhythm) or keep it all-sans.
                </div>
              </div>
            </div>
          </section>

          <div className="divider"></div>

          {/* ── 12. Build notes ── */}
          <section className="spec-section" id="s12">
            <div className="section-header">
              <span className="section-num">12</span>
              <h2>Build notes</h2>
            </div>
            <ul>
              <li>
                Reuse, don't reinvent: lift <code>body::before</code> grain, <code>.eyebrow</code>,{' '}
                <code>.logo-plate</code>, <code>.form-card</code>, <code>.field</code>, and{' '}
                <code>.ll-btn</code> from <code>cta-form.html</code> / Brand Guide.
              </li>
              <li>
                Keep the page to <strong>one</strong> primary action (audit CTA) and one secondary (message
                form). No competing CTAs, no filler sections.
              </li>
              <li>
                Footer: shared site footer — Company / Offers / Best For columns + "© Devine Edge. All rights
                reserved."
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
