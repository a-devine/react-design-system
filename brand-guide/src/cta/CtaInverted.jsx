import { useRef, useState } from 'react';
import Mark from '../components/Mark.jsx';
import { WORDMARK } from '../assets.js';
import { useCtaEntrance, submitCta, ArrowGlyph, CheckGlyph } from './ctaShared.jsx';
import './CtaInverted.css';

function play(root, anime) {
  const q = (s) => root.querySelector(s);
  anime.set(q('[data-plate]'),               { opacity: 0, translateX: -40 });
  anime.set(q('[data-form]'),                { opacity: 0, translateX: 40 });
  anime.set(q('[data-plate-mark]'),          { opacity: 0, rotate: -180, scale: 0.4 });
  anime.set(q('[data-plate-wordmark-wrap]'), { opacity: 0, scale: 0.9 });
  anime.set(q('[data-plate-tagline]'),       { opacity: 0, translateY: 8 });
  anime.set(q('[data-plate-foot]'),          { opacity: 0 });

  anime.timeline()
    .add({ targets: [q('[data-plate]'), q('[data-form]')], opacity: [0, 1], translateX: 0, easing: 'easeOutCubic', duration: 700, delay: anime.stagger(60, { start: 200 }) })
    .add({ targets: q('[data-plate-mark]'), opacity: [0, 1], rotate: [-180, 0], scale: [0.4, 1], easing: 'easeOutBack', duration: 760, offset: '-=420' })
    .add({ targets: q('[data-plate-wordmark-wrap]'), opacity: [0, 1], scale: [0.9, 1], easing: 'easeOutCubic', duration: 560, offset: '-=480' })
    .add({ targets: q('[data-plate-tagline]'), opacity: [0, 1], translateY: [8, 0], easing: 'easeOutCubic', duration: 460, offset: '-=320' })
    .add({ targets: q('[data-plate-foot]'), opacity: [0, 1], easing: 'easeOutCubic', duration: 460, offset: '-=300' });
}

export default function CtaInverted() {
  const rootRef = useRef(null);
  const [done, setDone] = useState(false);
  useCtaEntrance(rootRef, play);

  return (
    <section
      ref={rootRef}
      className="cta-inverted"
      aria-labelledby="cta-inverted-heading"
      data-cta="v3-inverted"
      data-cta-context="mid-page-service"
    >
      <div className="stage">

        <div className="plate" data-plate>
          <div className="plate-top"><span className="pulse" aria-hidden="true" />Devine Edge · Operator-led</div>

          <div className="plate-center">
            <div className="plate-mark" data-plate-mark aria-hidden="true">
              <Mark />
            </div>
            <div className="plate-wordmark-wrap" data-plate-wordmark-wrap>
              <img src={WORDMARK} alt="Devine Edge" className="plate-wordmark" />
            </div>
            <div className="plate-tagline" data-plate-tagline>the operating system for modern local business growth.</div>
          </div>

          <p className="plate-foot" data-plate-foot>
            We build the layer that makes you findable, trustable, and chooseable — and we report on a number you care about.
          </p>
        </div>

        <div className={`form-card${done ? ' done' : ''}`} data-form>
          <span className="eyebrow">Start here · Free</span>
          <h2 id="cta-inverted-heading">See exactly where <span className="serif">you're invisible.</span></h2>
          <p className="sub">A 12-page diagnostic across AI search, Google, your site, and your follow-up loop. We start with the leak, not the pitch.</p>

          <form
            autoComplete="on"
            noValidate
            onSubmit={(e) => submitCta(e, { variant: 'v3-inverted', context: 'mid-page-service', onDone: () => setDone(true) })}
          >
            <div className="field">
              <label htmlFor="cta-inverted-biz">Business</label>
              <input id="cta-inverted-biz" name="business" type="text" placeholder="e.g. Northgate Med Spa" autoComplete="organization" required />
            </div>
            <div className="field">
              <label htmlFor="cta-inverted-email">Email</label>
              <input id="cta-inverted-email" name="email" type="email" placeholder="you@business.com" autoComplete="email" required />
            </div>

            <div className="submit">
              <span className="fine">No call required.</span>
              <button type="submit">
                Send my audit
                <ArrowGlyph />
              </button>
            </div>
          </form>

          <div className="success" role="status" aria-live="polite">
            <div className="success-mark"><CheckGlyph /></div>
            <h3>On its way.</h3>
            <p>Your 12-page diagnostic will land in your inbox within 48 hours.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
