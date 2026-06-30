import SectionHead from '../SectionHead.jsx';
import { ArrowRightIcon } from '../icons.jsx';

export default function ComponentsSection() {
  return (
    <section className="block" id="components">
      <SectionHead index="06 — UI Components" title="Soft surfaces, pill actions, hairline structure.">
        White cards on warm paper, generous radii, and fine borders. Buttons are fully rounded; the
        dark primary leads, blue is reserved for the single most important action.
      </SectionHead>

      <div className="grid g2">
        <div className="card comp-card">
          <span className="comp-label">Buttons</span>
          <div className="demo">
            <button className="ll-btn">
              Get my audit <ArrowRightIcon size={16} strokeWidth={2} />
            </button>
            <button className="ll-btn blue">Primary action</button>
            <button className="ll-btn sec">Secondary</button>
          </div>
        </div>
        <div className="card comp-card">
          <span className="comp-label">Badges &amp; tags</span>
          <div className="demo">
            <span className="badge blue dot">Live audit</span>
            <span className="badge teal dot">Verified</span>
            <span className="badge" style={{ background: 'var(--paper)', color: 'var(--mute)', border: '1px solid var(--line2)' }}>v1.0</span>
          </div>
        </div>
        <div className="card comp-card">
          <span className="comp-label">Inline email capture</span>
          <div className="inline-form">
            <input type="email" placeholder="you@business.com" aria-label="Email address" />
            <button className="ll-btn">Get my audit</button>
          </div>
        </div>
        <div className="card comp-card">
          <span className="comp-label">Eyebrow + heading</span>
          <div>
            <span className="eyebrow">Free · 90-second sign-up</span>
            <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 12 }}>
              Get your audit <span className="serif" style={{ color: 'var(--blue)' }}>in 48 hours.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid g3" style={{ marginTop: 18 }}>
        <div className="card" style={{ padding: 22 }}>
          <span className="comp-label">Radius</span>
          <p style={{ margin: '10px 0 0', fontSize: 13.5, color: 'var(--mute)', lineHeight: 1.5 }}>
            Cards <strong style={{ color: 'var(--ink)' }}>14px</strong> · wells 9px · buttons &amp;
            fields fully rounded (<strong style={{ color: 'var(--ink)' }}>999px</strong>).
          </p>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <span className="comp-label">Elevation</span>
          <p style={{ margin: '10px 0 0', fontSize: 13.5, color: 'var(--mute)', lineHeight: 1.5 }}>
            Soft, warm shadows only — a 1px tint line plus a long, low-opacity drop. Never hard or gray.
          </p>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <span className="comp-label">Texture</span>
          <p style={{ margin: '10px 0 0', fontSize: 13.5, color: 'var(--mute)', lineHeight: 1.5 }}>
            A faint dot grid sits behind paper surfaces at low opacity to add warmth without noise.
          </p>
        </div>
      </div>
    </section>
  );
}
