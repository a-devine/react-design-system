import { Navigate, useParams, Link } from 'react-router-dom';
import CtaSplit from '../cta/CtaSplit.jsx';
import CtaSeal from '../cta/CtaSeal.jsx';
import CtaInverted from '../cta/CtaInverted.jsx';
import CtaInline from '../cta/CtaInline.jsx';
import './CtaStandalonePage.css';

const VARIANTS = {
  split: CtaSplit,
  seal: CtaSeal,
  inverted: CtaInverted,
  inline: CtaInline,
};

export default function CtaStandalonePage() {
  const { variant } = useParams();
  const Component = VARIANTS[variant];
  if (!Component) return <Navigate to="/cta" replace />;

  return (
    <div className="cta-standalone">
      <Link className="back" to="/cta">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        CTA Library
      </Link>
      <Component />
    </div>
  );
}
