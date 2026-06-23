import SectionHead from '../SectionHead.jsx';
import { SearchIcon, ArrowRightIcon, ShieldIcon, PulseIcon } from '../icons.jsx';

export default function ImagerySection() {
  return (
    <section className="block" id="imagery" style={{ borderBottom: 'none' }}>
      <SectionHead index="08 — Imagery & Iconography" title="Real signal, drawn simply.">
        Imagery shows the product and the people who use it — never generic stock abstraction. Icons
        are thin, geometric line work that echoes the angles of the mark.
      </SectionHead>

      <div className="grid g2">
        <div className="img-slot">
          <span className="ph">Product / dashboard shot<br />— audit report —</span>
        </div>
        <div className="img-slot">
          <span className="ph">Local business owner<br />— real, candid, warm —</span>
        </div>
      </div>

      <div className="grid g2" style={{ marginTop: 18 }}>
        <div className="card" style={{ padding: '28px 30px' }}>
          <h3 className="sub">Icon style</h3>
          <div style={{ display: 'flex', gap: 18, color: 'var(--ink)', margin: '4px 0 18px' }}>
            <SearchIcon size={26} />
            <ArrowRightIcon size={26} />
            <ShieldIcon size={26} />
            <PulseIcon size={26} />
          </div>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--mute)', lineHeight: 1.6 }}>
            Outlined, ~1.6px stroke, rounded joins. Match the optical weight of the surrounding text.
            No fills, no duotone, no emoji.
          </p>
        </div>
        <div className="card" style={{ padding: '28px 30px' }}>
          <h3 className="sub">Photography</h3>
          <ul className="rules">
            <li><strong>Warm &amp; natural</strong> light — never cold or clinical.</li>
            <li>Show <strong>the work and the win</strong>: real screens, real owners.</li>
            <li>Crop with intent; leave room for the dot-grid texture to breathe.</li>
            <li>Avoid stock clichés — handshakes, glowing AI brains, fake dashboards.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
