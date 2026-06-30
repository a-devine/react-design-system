import { useRef, useState } from 'react';
import Mark from '../components/Mark.jsx';
import { WORDMARK } from '../assets.js';
import { useCtaEntrance, submitCta, ArrowGlyph, CheckGlyph } from './ctaShared.jsx';
import './CtaSeal.css';

function play(root, anime) {
  const q = (s) => root.querySelector(s);
  anime.set(q('[data-seal]'),  { opacity: 0, scale: 2.4, rotate: -22 });
  anime.set(q('[data-word]'),  { opacity: 0, translateY: 8 });
  anime.set(q('[data-tag]'),   { opacity: 0, translateY: 8 });
  anime.set(q('[data-rule]'),  { opacity: 0, scaleX: 0 });
  anime.set(q('[data-lede]'),  { opacity: 0 });
  anime.set(q('[data-sub]'),   { opacity: 0 });
  anime.set(root.querySelectorAll('[data-field]'), { opacity: 0, translateY: 10 });
  anime.set(q('[data-trust]'), { opacity: 0 });

  anime.timeline()
    .add({ targets: q('[data-seal]'), opacity: [0, 1], scale: [2.4, 1], rotate: [-22, 0], easing: 'easeOutExpo', duration: 700, delay: 200 })
    .add({ targets: q('[data-word]'), opacity: [0, 1], translateY: [8, 0], easing: 'easeOutCubic', duration: 460, offset: '-=260' })
    .add({ targets: q('[data-tag]'),  opacity: [0, 1], translateY: [8, 0], easing: 'easeOutCubic', duration: 360, offset: '-=300' })
    .add({ targets: q('[data-rule]'), opacity: [0, 1], scaleX: [0, 1], easing: 'easeOutCubic', duration: 460, offset: '-=180' })
    .add({ targets: q('[data-lede]'), opacity: [0, 1], easing: 'easeOutCubic', duration: 360, offset: '-=300' })
    .add({ targets: q('[data-sub]'),  opacity: [0, 1], easing: 'easeOutCubic', duration: 320, offset: '-=240' })
    .add({ targets: root.querySelectorAll('[data-field]'), opacity: [0, 1], translateY: [10, 0], easing: 'easeOutCubic', duration: 460, delay: anime.stagger(90), offset: '-=200' })
    .add({ targets: q('[data-trust]'), opacity: [0, 1], easing: 'easeOutCubic', duration: 360, offset: '-=200' });
}

export default function CtaSeal() {
  const rootRef = useRef(null);
  const [done, setDone] = useState(false);
  useCtaEntrance(rootRef, play);

  return (
    <section
      ref={rootRef}
      className={`cta-seal${done ? ' done' : ''}`}
      aria-labelledby="cta-seal-heading"
      data-cta="v2-seal"
      data-cta-context="audit-landing"
    >
      <div className="seal" data-seal aria-hidden="true">
        <Mark />
      </div>

      <div className="word-wrap" data-word>
        <img src={WORDMARK} alt="Devine Edge" />
      </div>

      <div className="tag" data-tag>the edge that compounds.</div>

      <div className="rule" data-rule />

      <h1 id="cta-seal-heading" className="lede" data-lede>Claim your <span className="serif">free AI visibility audit.</span></h1>
      <p className="sub" data-sub>A 12-page diagnostic across AI search, Google, your site, and your follow-up loop — delivered in 48 hours.</p>

      <form
        autoComplete="on"
        noValidate
        onSubmit={(e) => submitCta(e, { variant: 'v2-seal', context: 'audit-landing', onDone: () => setDone(true) })}
      >
        <div className="field" data-field>
          <label htmlFor="cta-seal-biz">Business</label>
          <input id="cta-seal-biz" name="business" type="text" placeholder="e.g. Northgate Med Spa" autoComplete="organization" required />
        </div>
        <div className="field" data-field>
          <label htmlFor="cta-seal-email">Email</label>
          <input id="cta-seal-email" name="email" type="email" placeholder="you@business.com" autoComplete="email" required />
        </div>

        <div className="footer-row" data-field>
          <span className="fine">We reply in 48 hours.</span>
          <button type="submit">
            Get my audit
            <ArrowGlyph />
          </button>
        </div>
      </form>

      <div className="trust" data-trust>
        <span>No call required</span>
        <span className="dot" aria-hidden="true" />
        <span>12-page report</span>
        <span className="dot" aria-hidden="true" />
        <span>Free</span>
      </div>

      <div className="success" role="status" aria-live="polite">
        <div className="success-mark"><CheckGlyph /></div>
        <h3>Audit requested.</h3>
        <p>Your 12-page diagnostic will land in your inbox within 48 hours.</p>
      </div>
    </section>
  );
}
