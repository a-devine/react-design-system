import Mark from '../components/Mark.jsx';
import { WORDMARK } from '../assets.js';
import LocalVisibilityIllustration from '../diagrams/LocalVisibilityIllustration.jsx';
import VisibilityDiagram from '../diagrams/VisibilityDiagram.jsx';
import SnapshotPreview from '../diagrams/SnapshotPreview.jsx';
import ServiceArtifacts from '../diagrams/ServiceArtifacts.jsx';
import EvidenceModule from '../diagrams/EvidenceModule.jsx';
import LocalPhoto from '../diagrams/LocalPhoto.jsx';
import './HomepageConceptPage.css';

/*
 * Route "/homepage" — the editorial "field guide to local visibility"
 * direction, composed in the recommended order: signature hero, one system
 * diagram, the Snapshot made tangible, services as artifacts, an honest
 * evidence slot, and one original local photograph.
 * Copy follows the locked set (hero tagline, "we" voice, Sauk Valley area line).
 */
export default function HomepageConceptPage() {
  return (
    <div className="home-concept">
      <header className="hc-bar">
        <a className="hc-brand" href="#top" aria-label="Devine Edge home">
          <Mark className="hc-mark" />
          <img src={WORDMARK} alt="" />
        </a>
        <nav aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#snapshot">Snapshot</a>
          <a href="#services">Services</a>
          <a href="#evidence">Evidence</a>
        </nav>
        <a className="hc-btn hc-btn--small" href="#snapshot">Get a free Snapshot</a>
      </header>

      <main id="top">
        <section className="hc-hero">
          <div className="hc-hero__copy">
            <span className="eyebrow">Local visibility · Sauk Valley</span>
            <h1>Become the business AI <span className="serif">recommends.</span></h1>
            <p className="hc-hero__lede">
              We look closely at how your business shows up — website, Google profile, search, and AI
              answers — and fix what keeps customers from calling.
            </p>
            <div className="hc-hero__actions">
              <a className="hc-btn" href="#snapshot">Get a free Snapshot</a>
              <a className="hc-link" href="#services">See services &amp; pricing</a>
            </div>
            <p className="hc-hero__fine">No call required.</p>
          </div>
          <LocalVisibilityIllustration className="hc-hero__art" />
        </section>

        <section className="hc-section" id="how">
          <VisibilityDiagram />
        </section>

        <section className="hc-section hc-section--paper" id="snapshot" aria-labelledby="hc-snapshot-heading">
          <div className="hc-split">
            <div className="hc-split__copy">
              <span className="eyebrow">Free Snapshot</span>
              <h2 id="hc-snapshot-heading">Three things worth fixing <span className="serif">first.</span></h2>
              <p>
                The Snapshot is a short report with three prioritized observations. Each one says what we
                saw, why it matters, and the next step. Select a number to read one.
              </p>
              <a className="hc-btn" href="#top">Request your Snapshot</a>
            </div>
            <SnapshotPreview />
          </div>
        </section>

        <section className="hc-section" id="services">
          <ServiceArtifacts />
        </section>

        <section className="hc-section hc-section--paper" id="evidence">
          <EvidenceModule />
        </section>

        <section className="hc-section" aria-labelledby="hc-local-heading">
          <div className="hc-local">
            <LocalPhoto
              brief="A recognizable Dixon streetscape in morning light — real, local, and quiet. No people without permission."
              caption="Dixon, Illinois."
            />
            <div className="hc-local__copy">
              <span className="eyebrow">Based in Dixon</span>
              <h2 id="hc-local-heading">Serving the <span className="serif">Sauk Valley.</span></h2>
              <p>
                Dixon, Sterling, Rock Falls, and the towns around them — and delivering remotely across
                the United States.
              </p>
              <p className="hc-local__meta">Mon–Fri 9am–5pm CT · connect@devineedge.com</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
