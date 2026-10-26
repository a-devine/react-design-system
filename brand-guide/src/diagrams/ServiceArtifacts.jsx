import './ServiceArtifacts.css';

/*
 * Services shown through the thing each one delivers. Prices and tier names
 * follow the locked rate card (vault: Business Plan — FINAL, reaffirmed in the
 * Sep 2026 Launch Review Pack). Every preview is a simplified drawing of a real
 * or explicitly proposed deliverable — no dashboards that don't exist.
 * The previews are aria-hidden; the visible caption carries their meaning.
 */

/* ── Mini artifacts ─────────────────────────────────── */

function SnapshotArt() {
  return (
    <div className="sa-doc sa-doc--narrow">
      <span className="sa-doc__title">Snapshot</span>
      {['Service area', 'Details differ', 'Contact path'].map((t, i) => (
        <span className="sa-obs" key={t}><b>{`0${i + 1}`}</b>{t}</span>
      ))}
    </div>
  );
}

function AuditArt() {
  return (
    <div className="sa-spread">
      <div className="sa-doc">
        <span className="sa-doc__title">Audit report</span>
        <span className="sa-line sa-line--dark" /><span className="sa-line" /><span className="sa-line sa-line--short" />
        <span className="sa-shot" />
      </div>
      <div className="sa-doc">
        <span className="sa-doc__title">90-day roadmap</span>
        {['Days 1–30', 'Days 31–60', 'Days 61–90'].map((t, i) => (
          <span className="sa-phase" key={t}><i style={{ width: `${88 - i * 22}%` }} />{t}</span>
        ))}
      </div>
    </div>
  );
}

function PrioritySheetArt() {
  return (
    <div className="sa-doc">
      <span className="sa-doc__title">This month’s priorities</span>
      {['Update service-area copy', 'Answer new reviews', 'Add winter hours'].map((t, i) => (
        <span className="sa-row" key={t}><b>{i + 1}</b>{t}</span>
      ))}
      <span className="sa-comment">Review note: start with #1 — it affects every page.</span>
    </div>
  );
}

function WorkLogArt() {
  const cols = [
    ['Completed', ['Profile photos', 'Review replies']],
    ['In progress', ['Service page']],
    ['Next', ['Hours check', 'Monthly post']],
  ];
  return (
    <div className="sa-log">
      {cols.map(([head, items]) => (
        <div className="sa-log__col" key={head}>
          <span className="sa-log__head">{head}</span>
          {items.map((t) => <span className="sa-log__item" key={t}>{t}</span>)}
        </div>
      ))}
    </div>
  );
}

function CoverageArt() {
  const towns = ['Dixon', 'Sterling', 'Rock Falls', 'Amboy', 'Oregon', 'Polo'];
  const services = ['A', 'B', 'C'];
  // Fixed, illustrative pattern: which service × town pages are in scope.
  const scoped = ['11', '12', '13', '21', '22', '31', '32', '33', '41', '51'];
  return (
    <div className="sa-coverage">
      <span className="sa-coverage__h sa-coverage__h--left">Town</span>
      {services.map((s) => <span className="sa-coverage__h" key={s}>{s}</span>)}
      {towns.map((t, r) => [
        <span className="sa-coverage__town" key={t}>{t}</span>,
        ...services.map((s, c) => (
          <span key={t + s} className={`sa-coverage__cell${scoped.includes(`${r + 1}${c + 1}`) ? ' is-in' : ''}`} />
        )),
      ])}
    </div>
  );
}

function WebsiteArt() {
  return (
    <div className="sa-web">
      <div className="sa-web__desk">
        <span className="sa-web__bar" />
        <span className="sa-line sa-line--dark" /><span className="sa-line" />
        <span className="sa-web__btn" />
      </div>
      <div className="sa-web__phone">
        <span className="sa-line sa-line--dark" /><span className="sa-line" /><span className="sa-web__btn" />
      </div>
      <div className="sa-check">
        <span className="sa-doc__title">Profile checklist</span>
        {['Categories', 'Hours', 'Services', 'Photos'].map((t) => (
          <span className="sa-check__item" key={t}><i />{t}</span>
        ))}
      </div>
    </div>
  );
}

function CareArt() {
  return (
    <div className="sa-doc">
      <span className="sa-doc__title">Care checklist</span>
      {['Updates & backups', 'Form test', 'Small edits'].map((t) => (
        <span className="sa-check__item" key={t}><i />{t}</span>
      ))}
      <span className="sa-edit"><del>Mon–Fri 8–5</del><ins>Mon–Fri 8–6</ins></span>
    </div>
  );
}

/* ── Offer data ─────────────────────────────────────── */

const GROUPS = [
  {
    id: 'start',
    title: 'Start here',
    note: 'One-time',
    offers: [
      { id: 'snapshot', name: 'Free Snapshot', price: 'Free', Art: SnapshotArt,
        caption: 'A compact report with three numbered, prioritized observations.' },
      { id: 'audit', name: 'AI Search Ready Audit', price: '$750', Art: AuditArt,
        caption: 'A full report spread plus a prioritized 90-day roadmap.' },
    ],
  },
  {
    id: 'monthly',
    title: 'Monthly support',
    note: 'Month-to-month',
    offers: [
      { id: 'guided', name: 'Guided Growth', price: '$500', per: '/mo', Art: PrioritySheetArt,
        caption: 'A monthly priority sheet with review comments — for owners who do the work in-house.' },
      { id: 'dwy', name: 'Done With You', price: '$1,200', per: '/mo', Art: WorkLogArt,
        caption: 'A shared work log: what’s completed, in progress, and next.' },
      { id: 'dfy', name: 'Done For You', price: '$2,500', per: '/mo', Art: CoverageArt,
        caption: 'A service-area and content coverage plan with clearly defined scope.' },
    ],
  },
  {
    id: 'website',
    title: 'Website',
    note: 'Build + care',
    offers: [
      { id: 'site', name: 'Website + Google Business Profile', price: '$1,500', Art: WebsiteArt,
        caption: 'A responsive website alongside a business-profile checklist.' },
      { id: 'care', name: 'Website Care', price: '$300', per: '/mo', Art: CareArt,
        caption: 'A maintenance checklist and routine edits, like an hours change.' },
    ],
  },
];

export default function ServiceArtifacts() {
  return (
    <section className="services-art" aria-labelledby="services-art-heading">
      <header className="services-art__head">
        <span className="eyebrow">Services</span>
        <h2 id="services-art-heading">See what you <span className="serif">receive.</span></h2>
        <p>Every offer is shown as the thing it delivers. Prices are listed plainly.</p>
      </header>

      {GROUPS.map((g) => (
        <div className={`services-art__group services-art__group--${g.id}`} key={g.id}>
          <div className="services-art__group-head">
            <h3>{g.title}</h3><span>{g.note}</span>
          </div>
          <div className="services-art__offers">
            {g.offers.map(({ id, name, price, per, caption, Art }) => (
              <article className="sa-offer" key={id}>
                <div className="sa-offer__art" aria-hidden="true"><Art /></div>
                <div className="sa-offer__body">
                  <h4>{name}</h4>
                  <p className="sa-offer__price">{price}{per && <span>{per}</span>}</p>
                  <p className="sa-offer__caption">{caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}

      <p className="services-art__foot">
        Previews are simplified drawings of each deliverable’s format, not client work.
      </p>
    </section>
  );
}
