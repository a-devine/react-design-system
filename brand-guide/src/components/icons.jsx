/**
 * Thin, geometric line icons — ~1.6px stroke, rounded joins — echoing the
 * angles of the mark. Each accepts a size and forwards remaining props.
 */
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function SearchIcon({ size = 24, strokeWidth = 1.6, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base} {...rest}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </svg>
  );
}

export function ShieldCheckIcon({ size = 24, strokeWidth = 1.6, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base} {...rest}>
      <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function ShieldIcon({ size = 24, strokeWidth = 1.6, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base} {...rest}>
      <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 24, strokeWidth = 1.6, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base} {...rest}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function PulseIcon({ size = 24, strokeWidth = 1.6, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base} {...rest}>
      <path d="M3 12h4l3 8 4-16 3 8h4" />
    </svg>
  );
}

export function CheckIcon({ size = 12, strokeWidth = 3, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base} {...rest}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function CrossIcon({ size = 12, strokeWidth = 3, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base} {...rest}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
