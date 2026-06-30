import { WORDMARK } from '../assets.js';

const META = [
  { k: 'Document', v: 'Brand & Design Guide' },
  { k: 'Version', v: '1.0', mono: true },
  { k: 'Updated', v: 'May 2026' },
  { k: 'Owner', v: 'Devine Edge — Brand' },
];

export default function Cover() {
  return (
    <div className="cover">
      <img className="wm" src={WORDMARK} alt="Devine Edge" style={{ objectFit: 'fill' }} />
      <h1>
        The brand that helps you <span className="serif">win the recommendation.</span>
      </h1>
      <div className="meta">
        {META.map((m) => (
          <div key={m.k}>
            <span className="k">{m.k}</span>
            <span className={m.mono ? 'v num' : 'v'}>{m.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
