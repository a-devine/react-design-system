import { useRef, useState } from 'react';
import Mark from '../components/Mark.jsx';
import { WORDMARK } from '../assets.js';
import { useCtaEntrance, submitCta, ArrowGlyph, CheckGlyph } from './ctaShared.jsx';
import './CtaSplit.css';

function play(root, anime) {
  const q = (s) => root.querySelector(s);
  anime.set(q('[data-plate]'),               { opacity: 0, scale: 0, translateX: '50%' });
  anime.set(q('[data-form]'),                { opacity: 0, scale: 0 });
  anime.set(q('[data-plate-mark]'),          { opacity: 0, translateY: -240 });
  anime.set(q('[data-plate-wordmark-wrap]'), { clipPath: 'inset(0 100% 0 0)' });
  anime.set(q('[data-plate-tagline]'),       { opacity: 0, translateY: 8 });

  anime.timeline()
    .add({ targets: q('[data-plate]'), translateX: '50%', scale: [0, 1.06], opacity: [0, 1], delay: 200, duration: 520, easing: 'easeOutBack' })
    .add({ targets: q('[data-plate]'), translateX: '0%', scale: [1.06, 1], easing: 'easeOutSine', duration: 360 })
    .add({ targets: q('[data-form]'), scale: [0, 1], opacity: [0, 1], easing: 'easeOutBack', duration: 620, offset: '-=560' })
    .add({ targets: q('[data-plate-mark]'), opacity: [0, 1], translateY: [-240, 0], easing: 'easeOutQuad', duration: 560, offset: '-=300' })
    .add({ targets: q('[data-plate-wordmark-wrap]'), clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'], easing: 'easeOutCubic', duration: 700, offset: '-=440' })
    .add({ targets: q('[data-plate-tagline]'), opacity: [0, 1], translateY: [8, 0], easing: 'easeOutCubic', duration: 520, offset: '-=300' });
}

export default function CtaSplit() {
  const rootRef = useRef(null);
  const [done, setDone] = useState(false);
  useCtaEntrance(rootRef, play);

  return (
    <section
      ref={rootRef}
      className="cta-split"
      aria-labelledby="cta-split-heading"
      data-cta="v1-split"
      data-cta-context="homepage-hero"
    >
      <div className="stage">

        {/* LOGO PLATE */}
        <div className="plate" data-plate>
          <div className="plate-top"><span className="pulse" aria-hidden="true" />Devine Edge</div>

          <div className="plate-mark" data-plate-mark aria-hidden="true">
            <Mark />
          </div>

          <div>
            <div className="plate-wordmark-wrap" data-plate-wordmark-wrap>
              <img src={WORDMARK} alt="Devine Edge" className="plate-wordmark" />
            </div>
            <div className="plate-tagline" data-plate-tagline>the edge that compounds.</div>
          </div>

          <div className="plate-foot">
            <strong>Free AI Visibility Audit</strong>
            See where you appear in ChatGPT, Gemini, Perplexity &amp; Google AI Overviews — and where you don't.
          </div>
        </div>

        {/* FORM CARD */}
        <div className={`form-card${done ? ' done' : ''}`} data-form>
          <span className="eyebrow">Free · 90-second sign-up</span>
          <h2 id="cta-split-heading">Get your audit <span className="serif">in 48 hours.</span></h2>
          <p className="sub">No call required. We send a 12-page diagnostic of your AI search, Google, and lead-leak signals.</p>

          <form
            autoComplete="on"
            noValidate
            onSubmit={(e) => submitCta(e, { variant: 'v1-split', context: 'homepage-hero', onDone: () => setDone(true) })}
          >
            <div className="field">
              <label htmlFor="cta-split-biz">Business name</label>
              <input id="cta-split-biz" name="business" type="text" placeholder="e.g. Northgate Med Spa" autoComplete="organization" required />
            </div>
            <div className="field">
              <label htmlFor="cta-split-site">Website</label>
              <input id="cta-split-site" name="website" type="url" placeholder="https://" autoComplete="url" required />
            </div>
            <div className="field">
              <label htmlFor="cta-split-email">Email</label>
              <input id="cta-split-email" name="email" type="email" placeholder="you@business.com" autoComplete="email" required />
            </div>

            <div className="submit">
              <span className="fine">We never share or sell your data.</span>
              <button type="submit">
                Get my audit
                <ArrowGlyph />
              </button>
            </div>
          </form>

          <div className="success" role="status" aria-live="polite">
            <div className="success-mark"><CheckGlyph /></div>
            <h3>You're on the list.</h3>
            <p>Your audit will land in your inbox within 48 hours. No call required.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
