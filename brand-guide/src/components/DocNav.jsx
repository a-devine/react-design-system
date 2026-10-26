import { NavLink } from 'react-router-dom';
import './DocNav.css';

const DOCS = [
  { to: '/', label: 'Brand Guide', end: true },
  { to: '/cta', label: 'CTA Library', end: false },
  { to: '/contact', label: 'Contact Spec', end: false },
  { to: '/diagrams', label: 'Diagrams', end: false },
  { to: '/homepage', label: 'Homepage', end: false },
];

/** Floating switcher between the Devine Edge design documents. */
export default function DocNav() {
  return (
    <nav className="doc-nav" aria-label="Documents">
      {DOCS.map((d) => (
        <NavLink key={d.to} to={d.to} end={d.end}>
          {d.label}
        </NavLink>
      ))}
    </nav>
  );
}
