import { useId, useState } from 'react';
import './VisibilityDiagram.css';

const STEPS = [
  {
    id: 'information',
    number: '01',
    label: 'Your information',
    title: 'Explain your business.',
    items: ['Website', 'Google profile', 'Services & reviews'],
    detail: 'We clarify what you do, where you work, and how customers can contact you.',
  },
  {
    id: 'discovery',
    number: '02',
    label: 'Discovery & evaluation',
    title: 'Help people find you.',
    items: ['Local search', 'Google Maps', 'AI answers'],
    detail: 'We review how your business appears across discovery surfaces and identify practical gaps.',
  },
  {
    id: 'contact',
    number: '03',
    label: 'The next step',
    title: 'Make contact easier.',
    items: ['Call', 'Send an inquiry', 'Request an estimate'],
    detail: 'We make the next customer action clear, relevant, and easy to take.',
  },
];

/**
 * Connector between two cards. Each one is its own small SVG with a uniform
 * viewBox, so the arrowhead never stretches with the card height. Decorative —
 * the same sequence is carried by the numbered HTML cards.
 */
function Connector() {
  return (
    <span className="visibility__connector" aria-hidden="true">
      <svg viewBox="0 0 40 12" focusable="false">
        <path className="visibility__connector-line" d="M2 6 H36" pathLength="1" />
        <path className="visibility__connector-head" d="M31 1.5 L37 6 L31 10.5" />
      </svg>
    </span>
  );
}

/** "Search to contact" — three selectable step cards, SVG connectors, and a live detail panel. */
export default function VisibilityDiagram() {
  const uid = useId();
  const [active, setActive] = useState(0);
  const headingId = `${uid}-heading`;
  const detailId = `${uid}-detail`;
  const step = STEPS[active];

  return (
    <section className="visibility" aria-labelledby={headingId}>
      <header className="visibility__header">
        <span className="eyebrow">How the pieces connect</span>
        <h2 id={headingId}>
          A clearer path from search to <span className="serif">contact.</span>
        </h2>
        <p>Clear business information supports discovery. A useful next step helps customers act.</p>
      </header>

      <div className="visibility__grid">
        {STEPS.map((s, i) => (
          <div className="visibility__cell" key={s.id}>
            {i > 0 && <Connector />}
            <button
              type="button"
              className="visibility__card"
              aria-pressed={active === i}
              aria-controls={detailId}
              onClick={() => setActive(i)}
            >
              <span className="visibility__number">{s.number} / {s.label}</span>
              <span className="visibility__title">{s.title}</span>
              <span className="visibility__items">
                {s.items.map((item) => <span key={item}>{item}</span>)}
              </span>
              <span className="visibility__action">
                {active === i ? 'Showing below' : 'Explore this step'}
                <span aria-hidden="true">↗</span>
              </span>
            </button>
          </div>
        ))}
      </div>

      <div id={detailId} className="visibility__detail" role="status" aria-atomic="true">
        <span className="visibility__detail-label">{step.number} / {step.label}</span>
        <p>{step.detail}</p>
      </div>

      <p className="visibility__caption">
        A conceptual customer journey — not a model of how search engines or AI systems select results.
      </p>
    </section>
  );
}
