import Mark from '../components/Mark.jsx';
import { WORDMARK } from '../assets.js';
import LocalVisibilityIllustration from '../diagrams/LocalVisibilityIllustration.jsx';
import VisibilityDiagram from '../diagrams/VisibilityDiagram.jsx';
import SnapshotPreview from '../diagrams/SnapshotPreview.jsx';
import ServiceArtifacts from '../diagrams/ServiceArtifacts.jsx';
import EvidenceModule from '../diagrams/EvidenceModule.jsx';
import LocalPhoto from '../diagrams/LocalPhoto.jsx';
import './DiagramsPage.css';

/** Route "/diagrams" — the homepage explanation visuals, shown in context. */
export default function DiagramsPage() {
  return (
    <div className="diagrams-page">
      <header className="dp-head">
        <div className="dp-brand">
          <Mark className="dp-mark" />
          <img src={WORDMARK} alt="Devine Edge" />
        </div>
        <span className="eyebrow">Diagrams · Homepage visuals</span>
        <h1>Explain the path, <span className="serif">not the plumbing.</span></h1>
        <p>
          Inline SVG for illustration and connectors, React components for cards and controls, CSS for
          layout and light motion. No diagramming library or 3D engine — every piece is art-directed.
        </p>
      </header>

      <main>
        <section className="dp-block" aria-labelledby="dp-hero">
          <div className="dp-label"><span>01</span><h2 id="dp-hero">Hero illustration</h2><code>LocalVisibilityIllustration</code></div>
          <div className="dp-hero">
            <div className="dp-hero-copy">
              <span className="eyebrow">Local visibility</span>
              <h3>Be the business they find, <span className="serif">trust,</span> and contact.</h3>
              <p>One coordinated SVG: an isometric map plane, a raised business marker, and the
                four surfaces a customer touches on the way to getting in touch.</p>
            </div>
            <LocalVisibilityIllustration className="dp-hero-art" />
          </div>
        </section>

        <section className="dp-block" aria-labelledby="dp-flow">
          <div className="dp-label"><span>02</span><h2 id="dp-flow">Find → trust → contact</h2><code>VisibilityDiagram</code></div>
          <VisibilityDiagram />
        </section>

        <section className="dp-block" aria-labelledby="dp-snap">
          <div className="dp-label"><span>03</span><h2 id="dp-snap">Annotated Snapshot preview</h2><code>SnapshotPreview</code></div>
          <SnapshotPreview />
        </section>

        <section className="dp-block" aria-labelledby="dp-svc">
          <div className="dp-label"><span>04</span><h2 id="dp-svc">Services as artifacts</h2><code>ServiceArtifacts</code></div>
          <ServiceArtifacts />
        </section>

        <section className="dp-block" aria-labelledby="dp-ev">
          <div className="dp-label"><span>05</span><h2 id="dp-ev">Evidence slot</h2><code>EvidenceModule · EvidenceSlot</code></div>
          <EvidenceModule />
        </section>

        <section className="dp-block" aria-labelledby="dp-photo">
          <div className="dp-label"><span>06</span><h2 id="dp-photo">Local photograph</h2><code>LocalPhoto</code></div>
          <div className="dp-photo">
            <LocalPhoto brief="A quiet Rock River detail — water, bridge, or riverbank. Original, not stock." caption="Rock River, Dixon." />
          </div>
        </section>
      </main>
    </div>
  );
}
