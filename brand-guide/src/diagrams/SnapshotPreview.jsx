import { useId, useState } from 'react';
import './SnapshotPreview.css';

/**
 * Illustrative sample data only. Swap for verified findings before this
 * component is labeled as anything other than a sample.
 */
const SAMPLE_BUSINESS = {
  name: 'Riverbend Home Services',
  category: 'Plumbing & HVAC',
  url: 'riverbend-example.com',
};

const SAMPLE_OBSERVATIONS = [
  {
    id: 'service-area',
    label: 'Service area needs clarification',
    observed: 'The homepage never names the towns this business serves.',
    why: 'People searching nearby can’t tell whether this business covers their address, so they keep looking.',
    next: 'Add a plain service-area statement near the contact section and on each service page.',
  },
  {
    id: 'details',
    label: 'Profile and website details differ',
    observed: 'Hours on the website don’t match the hours on the business profile.',
    why: 'Conflicting details make it harder for customers — and search systems — to trust either one.',
    next: 'Choose one set of hours and use it everywhere the business is listed.',
  },
  {
    id: 'contact',
    label: 'Contact path needs attention',
    observed: 'The phone number appears only in the footer, below the fold on a phone.',
    why: 'Someone ready to call has to scroll past everything else to find out how.',
    next: 'Put a tap-to-call number in the header and beside each service.',
  },
];

function ReportHeader() {
  return (
    <div className="snapshot__report-head">
      <span className="snapshot__report-title">Visibility Snapshot</span>
      <span className="snapshot__badge">Illustrative sample</span>
    </div>
  );
}

function BusinessSummary({ business }) {
  return (
    <dl className="snapshot__summary">
      <div><dt>Business</dt><dd>{business.name}</dd></div>
      <div><dt>Category</dt><dd>{business.category}</dd></div>
      <div><dt>Reviewed</dt><dd>Homepage · Business profile</dd></div>
    </dl>
  );
}

/** Marker on the page mock. Mouse convenience only — the list below is the keyboard path. */
function Pin({ n, active, onSelect }) {
  return (
    <span className={`snapshot__pin${active ? ' is-active' : ''}`} aria-hidden="true" onClick={onSelect}>
      {String(n).padStart(2, '0')}
    </span>
  );
}

/** Simplified homepage of the sample business, with numbered annotation pins. */
function PageMock({ business, active, onSelect }) {
  return (
    <div className="snapshot__page" aria-hidden="true">
      <div className="snapshot__chrome"><i /><i /><i /><span>{business.url}</span></div>
      <div className="snapshot__site">
        <div className="snapshot__site-nav">
          <b>{business.name}</b>
          <span>Services</span><span>About</span>
          <Pin n={3} active={active === 2} onSelect={() => onSelect(2)} />
        </div>
        <div className="snapshot__site-hero">
          <span className="snapshot__bar snapshot__bar--lg" />
          <span className="snapshot__bar snapshot__bar--md" />
          <span className="snapshot__bar snapshot__bar--sm" />
          <Pin n={1} active={active === 0} onSelect={() => onSelect(0)} />
        </div>
        <div className="snapshot__site-tiles"><span /><span /><span /></div>
        <div className="snapshot__site-foot">
          <span>Mon–Fri 8–5</span><span>(555) 010-0100</span>
          <Pin n={2} active={active === 1} onSelect={() => onSelect(1)} />
        </div>
      </div>
    </div>
  );
}

function ObservationButton({ n, item, active, detailId, onSelect }) {
  return (
    <button
      type="button"
      className="snapshot__obs"
      aria-pressed={active}
      aria-controls={detailId}
      onClick={onSelect}
    >
      <span className="snapshot__obs-n">{String(n).padStart(2, '0')}</span>
      <span>{item.label}</span>
    </button>
  );
}

function ObservationDetail({ id, n, item }) {
  return (
    <div id={id} className="snapshot__detail" role="status" aria-atomic="true">
      <span className="snapshot__detail-label">
        {String(n).padStart(2, '0')} — {item.label}
      </span>
      <dl className="snapshot__detail-rows">
        <div><dt>What we observed</dt><dd>{item.observed}</dd></div>
        <div><dt>Why it matters</dt><dd>{item.why}</dd></div>
        <div><dt>Recommended next step</dt><dd>{item.next}</dd></div>
      </dl>
    </div>
  );
}

/** Annotated Snapshot report preview — real text, real buttons, one shared data source. */
export default function SnapshotPreview({ business = SAMPLE_BUSINESS, observations = SAMPLE_OBSERVATIONS }) {
  const uid = useId();
  const [active, setActive] = useState(0);
  const detailId = `${uid}-detail`;

  return (
    <section className="snapshot" aria-label="Illustrative Visibility Snapshot preview">
      <div className="snapshot__report">
        <ReportHeader />
        <BusinessSummary business={business} />
        <div className="snapshot__body">
          <PageMock business={business} active={active} onSelect={setActive} />
          <div className="snapshot__panel">
            <div className="snapshot__obs-list" role="group" aria-label="Sample observations">
              {observations.map((item, i) => (
                <ObservationButton
                  key={item.id}
                  n={i + 1}
                  item={item}
                  active={active === i}
                  detailId={detailId}
                  onSelect={() => setActive(i)}
                />
              ))}
            </div>
            <ObservationDetail id={detailId} n={active + 1} item={observations[active]} />
          </div>
        </div>
      </div>
      <p className="snapshot__caption">
        Illustrative sample. The business, page, and observations are fictional and show the report format only.
      </p>
    </section>
  );
}
