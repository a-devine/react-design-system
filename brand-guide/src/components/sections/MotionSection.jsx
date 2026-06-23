import SectionHead from '../SectionHead.jsx';

export default function MotionSection() {
  return (
    <section className="block" id="motion">
      <SectionHead index="07 — Motion" title="Entrances that settle, never bounce around.">
        Motion is purposeful and brief. Elements arrive once, ease into place, and stay still. The
        forward arrow is our cue — things move ahead, then rest.
      </SectionHead>

      <div className="grid g3">
        <div className="card motion-card">
          <div className="big">120–620<span className="mono"> ms</span></div>
          <h4>Duration</h4>
          <p>Quick, layered entrances. Stagger related elements 60–120ms apart for rhythm.</p>
        </div>
        <div className="card motion-card">
          <div className="big" style={{ fontSize: 30 }}>
            easeOut<span className="serif" style={{ color: 'var(--blue)', fontSize: 30 }}>Back</span>
          </div>
          <h4>Easing</h4>
          <p>Decelerating curves with a faint overshoot on hero elements. Calm, not springy.</p>
        </div>
        <div className="card motion-card">
          <div className="big">Once</div>
          <h4>On view</h4>
          <p>Entrances fire a single time after fonts load — never on every scroll. No loops.</p>
        </div>
      </div>

      <div className="card" style={{ marginTop: 18, padding: '24px 28px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
        <span className="badge teal dot" style={{ flex: 'none', marginTop: 2 }}>Accessibility</span>
        <p style={{ margin: 0, fontSize: 14, color: 'var(--mute)', lineHeight: 1.6, maxWidth: '70ch' }}>
          Always honor <span className="mono" style={{ fontSize: 12.5, color: 'var(--ink2)' }}>prefers-reduced-motion</span>.
          Users with the OS setting on see the final, settled state instantly — no entrance, no
          parallax, no delay on content.
        </p>
      </div>
    </section>
  );
}
