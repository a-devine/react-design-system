import SectionHead from '../SectionHead.jsx';
import { CheckIcon, CrossIcon } from '../icons.jsx';

const PILLARS = [
  { lead: 'Specific', serif: 'over clever', body: 'Name the number, the page, the timeframe. "A 12-page audit in 48 hours" beats "actionable insights."' },
  { lead: 'Plain', serif: 'over jargon', body: 'If a phrase needs a glossary, cut it. We translate the technical into the obvious.' },
  { lead: 'Forward', serif: 'over passive', body: 'Every sentence points to the next step. Active verbs, short clauses, clear asks.' },
];

const PAIRS = [
  {
    say: true,
    line: (<>Become the Business <span className="serif" style={{ color: 'var(--blue)' }}>AI recommends.</span></>),
  },
  { say: false, line: 'Leverage next-gen AI synergies to maximize your digital footprint.' },
  { say: true, line: 'Drop your email. We send the audit — no call required.' },
  { say: false, line: 'Sign up today and a representative will reach out to discuss your needs!' },
];

export default function VoiceSection() {
  return (
    <section className="block" id="voice">
      <SectionHead index="05 — Voice & Tone" title="Talk like the sharpest operator in the room.">
        Confident, concrete, and generous with the truth. We sound like someone who has done this a
        hundred times and wants you to win — not a marketer working a funnel.
      </SectionHead>

      <div className="grid g3">
        {PILLARS.map((p) => (
          <div className="card voice-pillar" key={p.lead}>
            <h4>{p.lead} <span className="serif">{p.serif}</span></h4>
            <p>{p.body}</p>
          </div>
        ))}
      </div>

      <div className="grid g2" style={{ marginTop: 18 }}>
        {PAIRS.map((p, i) => (
          <div className={`card copy-pair ${p.say ? 'say' : 'dont'}`} key={i}>
            <div className="lab">
              <span className="tick">{p.say ? <CheckIcon size={11} /> : <CrossIcon size={11} />}</span>
              <span className="mono">{p.say ? 'We say' : 'Not'}</span>
            </div>
            <div className="line">{p.line}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
