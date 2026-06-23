import Mark from './Mark.jsx';
import useScrollSpy from '../hooks/useScrollSpy.js';
import { WORDMARK } from '../assets.js';

const SECTIONS = [
  { id: 'brand', label: 'Brand' },
  { id: 'logo', label: 'Logo' },
  { id: 'color', label: 'Color' },
  { id: 'type', label: 'Type' },
  { id: 'voice', label: 'Voice' },
  { id: 'components', label: 'UI' },
  { id: 'motion', label: 'Motion' },
  { id: 'imagery', label: 'Imagery' },
];

export default function TopBar() {
  const active = useScrollSpy(SECTIONS.map((s) => s.id));

  return (
    <header className="bar">
      <div className="bar-inner">
        <span className="bar-brand">
          <Mark className="bar-mark" />
          <img src={WORDMARK} alt="Devine Edge" />
          <span className="tag">Brand Guide</span>
        </span>
        <nav className="toc" aria-label="Sections">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : undefined}>
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
