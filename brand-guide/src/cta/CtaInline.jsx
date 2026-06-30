import { useRef, useState } from 'react';
import Mark from '../components/Mark.jsx';
import { WORDMARK } from '../assets.js';
import { useCtaEntrance, submitCta, ArrowGlyph, CheckGlyph } from './ctaShared.jsx';
import './CtaInline.css';

function play(root, anime) {
  const q = (s) => root.querySelector(s);
  anime.set(q('[data-toprow]'),  { opacity: 0 });
  anime.set(q('[data-mark]'),    { opacity: 0, translateY: -30 });
  anime.set(q('[data-eyebrow]'), { opacity: 0 });
  anime.set(q('[data-word]'),    { clipPath: 'inset(0 50% 0 50%)' });
  anime.set(q('[data-h1]'),      { opacity: 0, translateY: 8 });
  anime.set(q('[data-sub]'),     { opacity: 0 });
  anime.set(q('[data-form]'),    { opacity: 0, translateY: 14 });
  anime.set(q('[data-fine]'),    { opacity: 0 });

  anime.timeline()
    .add({ targets: q('[data-word]'), clipPath: ['inset(0 50% 0 50%)', 'inset(0 0% 0 0%)'], easing: 'easeOutCubic', duration: 760, delay: 200 })
    .add({ targets: q('[data-toprow]'), opacity: [0, 1], easing: 'linear', duration: 20, offset: '-=360' })
    .add({ targets: q('[data-mark]'), opacity: [0, 1], translateY: [-30, 0], easing: 'easeOutBack', duration: 520, offset: '-=20' })
    .add({ targets: q('[data-eyebrow]'), opacity: [0, 1], easing: 'easeOutCubic', duration: 360, offset: '-=300' })
    .add({ targets: q('[data-h1]'), opacity: [0, 1], translateY: [8, 0], easing: 'easeOutCubic', duration: 500, offset: '-=200' })
    .add({ targets: q('[data-sub]'), opacity: [0, 1], easing: 'easeOutCubic', duration: 460, offset: '-=280' })
    .add({ targets: q('[data-form]'), opacity: [0, 1], translateY: [14, 0], easing: 'easeOutBack', duration: 620, offset: '-=240' })
    .add({ targets: q('[data-fine]'), opacity: [0, 1], easing: 'easeOutCubic', duration: 360, offset: '-=200' });
}

export default function CtaInline() {
  const rootRef = useRef(null);
  const [done, setDone] = useState(false);
  useCtaEntrance(rootRef, play);

  return (
    <section
      ref={rootRef}
      className={`cta-inline${done ? ' done' : ''}`}
      aria-labelledby="cta-inline-heading"
      data-cta="v4-inline"
      data-cta-context="footer-or-inline"
    >
      <div className="top-row" data-toprow>
        <div className="mark" data-mark aria-hidden="true">
          <Mark />
        </div>
        <span className="eyebrow" data-eyebrow>Free AI Visibility Audit</span>
      </div>

      <div className="wordmark-wrap" data-word>
        <img src={WORDMARK} alt="Devine Edge" />
      </div>

      <h1 id="cta-inline-heading" data-h1>Become the business <span className="serif">an AI recommends.</span></h1>
      <p className="sub" data-sub>Drop your email. We send a 12-page audit of your AI search, Google, and lead-leak signals — no call required.</p>

      <form
        className="inline-form"
        data-form
        autoComplete="on"
        noValidate
        onSubmit={(e) => submitCta(e, { variant: 'v4-inline', context: 'footer-or-inline', onDone: () => setDone(true) })}
      >
        <label htmlFor="cta-inline-email">Email</label>
        <input id="cta-inline-email" name="email" type="email" placeholder="you@business.com" autoComplete="email" required />
        <button type="submit">
          Get my audit
          <ArrowGlyph />
        </button>
      </form>

      <div className="success" role="status" aria-live="polite">
        <span className="success-dot"><CheckGlyph /></span>
        You're on the list. Audit lands in your inbox within 48 hours.
      </div>

      <span className="fine" data-fine>We reply in 48 hours.</span>
    </section>
  );
}
