import SectionHead from '../SectionHead.jsx';
import { SearchIcon, ShieldCheckIcon, ArrowRightIcon } from '../icons.jsx';

const PILLARS = [
  {
    Icon: SearchIcon,
    title: 'Visibility, made measurable',
    body: 'We turn vague "online presence" into a concrete, audited signal across AI search, Google, and lead capture.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Plain-spoken authority',
    body: "No jargon, no hype. We explain what's happening and what to do — like a trusted operator, not a vendor.",
  },
  {
    Icon: ArrowRightIcon,
    title: 'Always forward',
    body: 'Every touchpoint moves the customer one clear step ahead. The arrow in our mark is the brand in one shape.',
  },
];

export default function BrandSection() {
  return (
    <section className="block" id="brand">
      <SectionHead index="01 — Brand" title="An operating system for modern local growth.">
        Devine Edge helps local businesses become the one that gets recommended — by customers, by
        Google, and increasingly by AI. The brand is confident, plain-spoken, and quietly technical.
        It earns trust by being specific.
      </SectionHead>

      <div className="statement">
        <span className="eyebrow">The line</span>
        <q>
          Become the Business <span className="serif">AI recommends.</span>
        </q>
      </div>

      <div className="grid g3 pillars">
        {PILLARS.map(({ Icon, title, body }) => (
          <div className="pillar card" key={title}>
            <Icon className="pico" size={26} />
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
