import SectionHead from '../SectionHead.jsx';

const FOUNDATION = [
  { name: 'Ink', hex: '#1A1A1A', role: 'Primary text, the logo, dark surfaces.' },
  { name: 'Ink 2', hex: '#2A2520', role: 'Headings on light, subtle warm depth.' },
  { name: 'Paper', hex: '#F8F4EC', role: 'The default canvas. Calm and warm.' },
  { name: 'Paper 2', hex: '#FBF8F1', role: 'Raised wells and inset fields.' },
];

const ACCENT = [
  { name: 'Electric Blue', hex: '#1F8FFF', role: 'Primary accent — links, focus, key CTAs.' },
  { name: 'Blue 50', hex: '#E3EFFF', role: 'Accent wash for badges and highlights.' },
  { name: 'Teal', hex: '#25564F', role: 'Support — success, confirmations.' },
  { name: 'Teal 50', hex: '#E0EAE7', role: 'Quiet success and secondary tags.' },
];

const NEUTRALS = [
  { name: 'Mute', hex: '#6B635A', role: 'Body copy on paper, captions.' },
  { name: 'Mute 2', hex: '#8F8579', role: 'Placeholders, metadata, labels.' },
  { name: 'Line', hex: '#E8E0CF', role: 'Default hairline borders, dividers.' },
  { name: 'Line 2', hex: '#D8CDB4', role: 'Stronger borders, input outlines.' },
];

function Swatches({ items }) {
  return (
    <div className="grid g4">
      {items.map((s) => (
        <div className="card swatch" key={s.name}>
          <div className="chip" style={{ background: s.hex }} />
          <div className="body">
            <div className="name">{s.name}</div>
            <div className="hex">{s.hex}</div>
            <div className="role">{s.role}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ColorSection() {
  return (
    <section className="block" id="color">
      <SectionHead index="03 — Color" title="Warm paper, deep ink, one electric edge.">
        The palette is built on a warm off-white and a near-black — calm, editorial, trustworthy.
        Electric blue is the single accent that signals action and focus. Teal is a quiet support
        color for confirmations and secondary tags.
      </SectionHead>

      <h3 className="sub">Foundation</h3>
      <Swatches items={FOUNDATION} />

      <h3 className="sub" style={{ marginTop: 34 }}>Accent &amp; support</h3>
      <Swatches items={ACCENT} />

      <h3 className="sub" style={{ marginTop: 34 }}>Neutrals &amp; lines</h3>
      <Swatches items={NEUTRALS} />

      <div className="card ratio" style={{ marginTop: 34 }}>
        <h3 className="sub">Usage ratio</h3>
        <div className="ratio-bar">
          <span style={{ background: '#F8F4EC', flex: 70 }} />
          <span style={{ background: '#1A1A1A', flex: 22 }} />
          <span style={{ background: '#1F8FFF', flex: 6 }} />
          <span style={{ background: '#25564F', flex: 2 }} />
        </div>
        <div className="ratio-legend">
          <span className="it"><span className="dot" style={{ background: '#F8F4EC' }} />~70% Paper</span>
          <span className="it"><span className="dot" style={{ background: '#1A1A1A' }} />~22% Ink</span>
          <span className="it"><span className="dot" style={{ background: '#1F8FFF' }} />~6% Blue accent</span>
          <span className="it"><span className="dot" style={{ background: '#25564F' }} />~2% Teal</span>
        </div>
        <p style={{ margin: '16px 0 0', fontSize: 13.5, color: 'var(--mute)', maxWidth: '62ch', lineHeight: 1.55 }}>
          Accent restraint is the rule. Blue earns attention precisely because it's rare — reserve it
          for the single most important action on a view. Ink on Paper clears{' '}
          <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>WCAG AAA</strong>; blue on paper is
          for accents and large text, not body copy.
        </p>
      </div>
    </section>
  );
}
