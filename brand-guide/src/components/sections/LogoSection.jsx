import SectionHead from '../SectionHead.jsx';
import Mark from '../Mark.jsx';
import { CheckIcon, CrossIcon } from '../icons.jsx';
import { WORDMARK } from '../../assets.js';

const MIN_SIZES = [
  ['Wordmark', ' — never below 96 px wide on screen, 22 mm in print.'],
  ['Mark', ' — never below 20 px / 6 mm; favicon is the only exception.'],
  ['Pairing', ' — wordmark leads in all primary contexts; the standalone mark is for avatars, favicons, and app icons.'],
  ['Color', ' — ink on paper by default; reverse to paper on ink. Electric blue is reserved for the accent system, never the logo fill.'],
];

const DONTS = [
  { style: { color: 'var(--blue)', transform: 'rotate(-12deg)' }, note: "Don't rotate, recolor with the accent, or skew the mark." },
  { style: { transform: 'scaleX(1.7)' }, note: "Don't stretch, condense, or alter the proportions." },
  { style: { color: 'var(--teal)' }, visBg: 'var(--blue)', note: "Don't place on low-contrast or clashing color fields." },
];

export default function LogoSection() {
  return (
    <section className="block" id="logo">
      <SectionHead index="02 — Logo & Mark" title="One arrow, always moving forward.">
        The mark is a geometric "E" cut into a forward arrow — edge and motion in a single glyph.
        Pair it with the wordmark for primary use; the mark stands alone only where the brand is
        already established.
      </SectionHead>

      <div className="logo-showcase">
        <div className="logo-tile card paper-bg">
          <img className="wm" src={WORDMARK} alt="Devine Edge wordmark" />
          <span className="cap">Primary lockup · on paper</span>
        </div>
        <div className="logo-tile card">
          <Mark className="mark-lg" />
          <span className="cap">The mark · on card</span>
        </div>
        <div className="logo-tile card dark">
          <img className="wm white" src={WORDMARK} alt="Devine Edge wordmark, reversed" />
          <span className="cap">Reversed · on ink</span>
        </div>
        <div className="logo-tile card dark">
          <Mark className="mark-lg" />
          <span className="cap">Mark reversed</span>
        </div>
      </div>

      <div className="grid g2" style={{ marginTop: 18 }}>
        <div className="card clearspace">
          <div className="cs-frame">
            <span className="guide" />
            <span className="dim top">x</span>
            <span className="dim left">x</span>
            <div className="inner">
              <Mark className="mark-lg" />
            </div>
          </div>
          <div className="cs-note">
            <h3 className="sub">Clear space</h3>
            <p>
              Keep a margin of <span className="x">x</span> on all sides, where <em>x</em> equals the
              width of the arrow notch. Nothing — type, edges, or other marks — enters this zone.
            </p>
          </div>
        </div>
        <div className="card" style={{ padding: 30 }}>
          <h3 className="sub">Minimum sizes</h3>
          <ul className="rules">
            {MIN_SIZES.map(([strong, rest]) => (
              <li key={strong}>
                <strong>{strong}</strong>
                {rest}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="sub" style={{ marginTop: 48 }}>Do &amp; don't</h3>
      <div className="grid g4">
        <div className="card dd good">
          <div className="dd-vis">
            <Mark className="mark-lg" />
          </div>
          <div className="dd-foot">
            <span className="dd-badge">
              <CheckIcon size={12} />
            </span>
            <p>Use approved ink or reversed marks at full opacity.</p>
          </div>
        </div>
        {DONTS.map((d, i) => (
          <div className="card dd bad" key={i}>
            <div className="dd-vis" style={d.visBg ? { background: d.visBg } : undefined}>
              <Mark className="mark-lg" style={d.style} />
            </div>
            <div className="dd-foot">
              <span className="dd-badge">
                <CrossIcon size={12} />
              </span>
              <p>{d.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
