import SectionHead from '../SectionHead.jsx';

const blue = { color: 'var(--blue)' };

export default function TypeSection() {
  return (
    <section className="block" id="type">
      <SectionHead index="04 — Typography" title="Geist for clarity, a serif for the human note.">
        Three families do all the work. Geist carries every interface and headline; Instrument Serif
        italic adds a warm, editorial accent on key phrases; Geist Mono labels, tags, and data.
      </SectionHead>

      <div className="grid g3">
        <div className="card font-card">
          <p className="specimen">Ag</p>
          <div className="fname">Geist</div>
          <div className="fmeta">SANS · 300 400 500 600 700</div>
          <p className="charset">The quick brown fox jumps. 0123456789</p>
        </div>
        <div className="card font-card">
          <p className="specimen serif" style={{ fontSize: 64 }}>Ag</p>
          <div className="fname">
            Instrument Serif <span className="serif" style={blue}>Italic</span>
          </div>
          <div className="fmeta">ACCENT · italic, 400</div>
          <p className="charset serif" style={{ fontSize: 16 }}>Become the business AI recommends.</p>
        </div>
        <div className="card font-card">
          <p className="specimen mono" style={{ fontSize: 48 }}>Ag</p>
          <div className="fname mono" style={{ fontWeight: 500 }}>Geist Mono</div>
          <div className="fmeta">LABELS · 400 500</div>
          <p className="charset mono" style={{ fontSize: 12 }}>FREE · 90-SECOND SIGN-UP</p>
        </div>
      </div>

      <div className="card scale" style={{ marginTop: 18, padding: '14px 30px' }}>
        <div className="scale-row">
          <div className="scale-spec">Display<br />56 / 600<br />-0.035em</div>
          <div className="scale-sample" style={{ fontSize: 52, fontWeight: 600 }}>Win the recommendation</div>
        </div>
        <div className="scale-row">
          <div className="scale-spec">H1<br />40 / 600<br />-0.03em</div>
          <div className="scale-sample" style={{ fontSize: 40, fontWeight: 600 }}>Become the Business AI recommends</div>
        </div>
        <div className="scale-row">
          <div className="scale-spec">H2<br />30 / 600<br />-0.025em</div>
          <div className="scale-sample" style={{ fontSize: 30, fontWeight: 600 }}>
            Get your audit <span className="serif" style={blue}>in 48 hours</span>
          </div>
        </div>
        <div className="scale-row">
          <div className="scale-spec">Lede<br />19 / 400<br />-0.01em</div>
          <div className="scale-sample" style={{ fontSize: 19, color: 'var(--mute)' }}>A 12-page diagnostic of your visibility signals.</div>
        </div>
        <div className="scale-row">
          <div className="scale-spec">Body<br />15 / 400</div>
          <div className="scale-sample" style={{ fontSize: 15, color: 'var(--ink2)' }}>Plain-spoken, specific, and never padded. We say the useful thing.</div>
        </div>
        <div className="scale-row">
          <div className="scale-spec">Eyebrow<br />11 / mono<br />0.22em caps</div>
          <div className="scale-sample mono" style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--blue)' }}>Free AI Visibility Audit</div>
        </div>
      </div>

      <div className="grid g2" style={{ marginTop: 18 }}>
        <div className="card" style={{ padding: '26px 28px' }}>
          <h3 className="sub">The serif accent</h3>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--mute)', lineHeight: 1.6 }}>
            Use Instrument Serif italic — in <span className="serif" style={blue}>electric blue</span> —
            for at most one phrase per headline. It marks the emotional or human turn in a line. Never
            set body copy, UI, or whole headlines in it.
          </p>
        </div>
        <div className="card" style={{ padding: '26px 28px' }}>
          <h3 className="sub">Setting rules</h3>
          <ul className="rules">
            <li>Headlines: tight tracking (<strong>-0.02 to -0.035em</strong>), line-height ~1.05.</li>
            <li>Body: <strong>Mute</strong> on Paper, 1.5–1.6 line-height, ~62ch measure.</li>
            <li>Labels &amp; tags: <strong>Geist Mono</strong>, uppercase, 0.14–0.22em tracking.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
