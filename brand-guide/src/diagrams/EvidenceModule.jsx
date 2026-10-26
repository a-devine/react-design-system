import './EvidenceModule.css';

/*
 * Proof as a small annotated story: heading, one figure, date range, a short
 * explanation, and a limitation. Three kinds stay visually distinct so method
 * never reads as social proof:
 *   demonstration — how the method works (illustrative)
 *   own           — Devine Edge's own recorded data
 *   client        — verified outcomes from client work
 * Pass `media` only with real, dated, checked material; without it the slot
 * renders an explicit "awaiting" state instead of a stand-in chart.
 */
const KINDS = {
  demonstration: { tag: 'Demonstration', blurb: 'How the method works' },
  own: { tag: 'Our own site', blurb: 'What happened on Devine Edge' },
  client: { tag: 'Client result', blurb: 'Verified outcome from client work' },
};

export function EvidenceSlot({ kind, heading, dateRange, explanation, limitation, media, awaiting }) {
  const k = KINDS[kind];
  const ready = Boolean(media);
  return (
    <figure className={`evidence evidence--${kind}${ready ? '' : ' is-awaiting'}`}>
      <div className="evidence__tagrow">
        <span className="evidence__tag">{k.tag}</span>
        <span className="evidence__blurb">{k.blurb}</span>
      </div>
      <h3 className="evidence__heading">{heading}</h3>
      <div className="evidence__media">
        {ready ? media : (
          <div className="evidence__empty">
            <span>Awaiting verified data</span>
            <p>{awaiting}</p>
          </div>
        )}
      </div>
      <figcaption>
        <dl>
          <div><dt>Date range</dt><dd>{dateRange || '—'}</dd></div>
          <div><dt>What it shows</dt><dd>{explanation}</dd></div>
          {limitation && <div><dt>Limitation</dt><dd>{limitation}</dd></div>}
        </dl>
      </figcaption>
    </figure>
  );
}

export default function EvidenceModule() {
  return (
    <section className="evidence-module" aria-labelledby="evidence-heading">
      <header className="evidence-module__head">
        <span className="eyebrow">Evidence</span>
        <h2 id="evidence-heading">What we can show, <span className="serif">and when.</span></h2>
        <p>Each piece is dated and labeled for what it is. Method, our own results, and client results stay separate.</p>
      </header>
      <div className="evidence-module__grid">
        <EvidenceSlot
          kind="own"
          heading="What we’re seeing on our own site"
          explanation="A dated view of Devine Edge’s recorded search performance, with the relevant metric highlighted."
          limitation="One site, one market. It shows our own trend, not a forecast for yours."
          awaiting="A Search Console screenshot or chart with its date range, once the property has enough history."
        />
        <EvidenceSlot
          kind="client"
          heading="Client results"
          explanation="Verified outcomes from client work, published with the client’s permission."
          awaiting="Nothing is published here until a result is measured, checked, and approved by the client."
        />
      </div>
    </section>
  );
}
