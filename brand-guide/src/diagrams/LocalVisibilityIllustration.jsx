import { useId } from 'react';
import './LocalVisibilityIllustration.css';

/*
 * Hero illustration — one coordinated SVG with fixed, art-directed coordinates.
 * Depth comes from geometry: an isometric map plane with raised blocks, and
 * front-facing cards with an offset side face and a soft ground shadow.
 *
 * Map space: (a, b) ∈ [0, 1]² on the plane, h = height above it in px.
 * Left corner (40, 290) · top (320, 150) · bottom (320, 430) · right (600, 290).
 */
const iso = (a, b, h = 0) => [40 + 280 * (a + b), 290 + 140 * (b - a) - h];
const pts = (...ps) => ps.map((p) => p.join(',')).join(' ');

const STREETS = [
  [[0.35, 0], [0.35, 1]],
  [[0.7, 0], [0.7, 1]],
  [[0, 0.4], [1, 0.4]],
  [[0, 0.75], [1, 0.75]],
];

// [a0, a1, b0, b1, height] — ordered back to front for painter's-algorithm overlap.
const BLOCKS = [
  [0.75, 0.95, 0.08, 0.34, 24],
  [0.40, 0.64, 0.06, 0.34, 10],
  [0.75, 0.95, 0.45, 0.70, 14],
  [0.06, 0.30, 0.06, 0.34, 18],
  [0.75, 0.95, 0.80, 0.95, 10],
  [0.06, 0.30, 0.45, 0.70, 12],
  [0.40, 0.64, 0.80, 0.95, 16],
  [0.06, 0.30, 0.80, 0.95, 8],
];

const LOT = [0.40, 0.65, 0.45, 0.70]; // the business's own lot, drawn flat
const [BX, BY] = iso(0.525, 0.575);   // business location on the plane

function Block({ a0, a1, b0, b1, h }) {
  return (
    <g>
      <polygon className="lvi__face-left" points={pts(iso(a0, b0), iso(a0, b1), iso(a0, b1, h), iso(a0, b0, h))} />
      <polygon className="lvi__face-right" points={pts(iso(a0, b1), iso(a1, b1), iso(a1, b1, h), iso(a0, b1, h))} />
      <polygon className="lvi__face-top" points={pts(iso(a0, b0, h), iso(a1, b0, h), iso(a1, b1, h), iso(a0, b1, h))} />
    </g>
  );
}

/** A front-facing raised card: ground shadow, offset side face, then the top face. */
function RaisedCard({ x, y, w, h, className, shadowId, children }) {
  return (
    <g className={`lvi__card ${className}`}>
      <ellipse className="lvi__ground-shadow" cx={x + w / 2 + 8} cy={y + h + 22} rx={w * 0.42} ry="9" filter={`url(#${shadowId})`} />
      <rect className="lvi__card-side" x={x + 6} y={y + 7} width={w} height={h} rx="12" />
      <rect className="lvi__card-top" x={x} y={y} width={w} height={h} rx="12" />
      {children}
    </g>
  );
}

export default function LocalVisibilityIllustration({ className = '' }) {
  const uid = useId();
  const titleId = `${uid}-title`;
  const descId = `${uid}-desc`;
  const shadowId = `${uid}-shadow`;

  return (
    <svg
      viewBox="0 0 640 520"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      className={`lvi ${className}`}
    >
      <title id={titleId}>A connected local business presence</title>
      <desc id={descId}>
        Conceptual illustration: a business marked on a local map, connected to a search,
        its website, and its Google profile, leading to a customer contact request.
      </desc>

      <defs>
        <filter id={shadowId} x="-30%" y="-200%" width="160%" height="500%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* 1 · Base map plane */}
      <g className="lvi__map">
        <polygon className="lvi__plane-side-l" points={pts(iso(0, 0), iso(0, 1), iso(0, 1, -14), iso(0, 0, -14))} />
        <polygon className="lvi__plane-side-r" points={pts(iso(0, 1), iso(1, 1), iso(1, 1, -14), iso(0, 1, -14))} />
        <polygon className="lvi__plane" points={pts(iso(0, 0), iso(1, 0), iso(1, 1), iso(0, 1))} />
        {STREETS.map(([p, q], i) => (
          <g key={i}>
            <line className="lvi__street" x1={iso(...p)[0]} y1={iso(...p)[1]} x2={iso(...q)[0]} y2={iso(...q)[1]} />
            <line className="lvi__street-mid" x1={iso(...p)[0]} y1={iso(...p)[1]} x2={iso(...q)[0]} y2={iso(...q)[1]} />
          </g>
        ))}
        <polygon className="lvi__lot" points={pts(iso(LOT[0], LOT[2]), iso(LOT[1], LOT[2]), iso(LOT[1], LOT[3]), iso(LOT[0], LOT[3]))} />
        {BLOCKS.map(([a0, a1, b0, b1, h], i) => <Block key={i} a0={a0} a1={a1} b0={b0} b1={b1} h={h} />)}
      </g>

      {/* 2 · Connections — drawn under the cards, over the map */}
      <g className="lvi__connections">
        <path className="lvi__link" d={`M196 392 C 250 360, 290 330, ${BX - 10} ${BY + 2}`} />
        <path className="lvi__link" d={`M226 150 C 270 180, 300 190, ${BX - 18} ${BY - 78}`} />
        <path className="lvi__link" d={`M452 168 C 420 190, 395 200, ${BX + 18} ${BY - 78}`} />
        <path className="lvi__link lvi__link--teal" d={`M${BX + 10} ${BY + 4} C 400 330, 450 360, 470 398`} />
        <circle className="lvi__node" cx="196" cy="392" r="3.5" />
        <circle className="lvi__node" cx="226" cy="150" r="3.5" />
        <circle className="lvi__node" cx="452" cy="168" r="3.5" />
        <circle className="lvi__node lvi__node--teal" cx="470" cy="398" r="3.5" />
      </g>

      {/* 3 · Business marker */}
      <g className="lvi__business">
        <ellipse className="lvi__pulse" cx={BX} cy={BY} rx="34" ry="17" />
        <ellipse className="lvi__pin-shadow" cx={BX + 4} cy={BY + 2} rx="16" ry="6" />
        <path className="lvi__pin" d={`M${BX} ${BY} L${BX - 15} ${BY - 50} A28 28 0 1 1 ${BX + 15} ${BY - 50} Z`} />
        <circle className="lvi__pin-face" cx={BX} cy={BY - 74} r="20" />
        <g transform={`translate(${BX - 10.6} ${BY - 85.3}) scale(0.18)`}>
          <polygon className="lvi__mark-e" points="0,0 115,0 73,23 26,23 26,101 77,102 115,125 0,125" />
          <polygon className="lvi__mark-arrow" points="54,63 116,37 116,88" />
        </g>
      </g>

      {/* 4 · Search */}
      <RaisedCard x={28} y={392} w={196} h={64} className="lvi__search" shadowId={shadowId}>
        <circle className="lvi__icon-stroke" cx="54" cy="422" r="7" />
        <line className="lvi__icon-stroke" x1="59" y1="427" x2="64" y2="432" />
        <text className="lvi__mono" x="76" y="418">Search</text>
        <text className="lvi__text" x="76" y="436">plumber near me</text>
      </RaisedCard>

      {/* 5 · Website */}
      <RaisedCard x={36} y={38} w={196} h={112} className="lvi__website" shadowId={shadowId}>
        <line className="lvi__divider" x1="36" y1="62" x2="232" y2="62" />
        <circle className="lvi__dot" cx="52" cy="50" r="3" />
        <circle className="lvi__dot" cx="62" cy="50" r="3" />
        <circle className="lvi__dot" cx="72" cy="50" r="3" />
        <text className="lvi__mono" x="88" y="53">Website</text>
        <rect className="lvi__bar-dark" x="52" y="76" width="118" height="10" rx="5" />
        <rect className="lvi__bar" x="52" y="94" width="150" height="7" rx="3.5" />
        <rect className="lvi__bar" x="52" y="107" width="104" height="7" rx="3.5" />
        <rect className="lvi__bar-blue" x="52" y="124" width="62" height="16" rx="8" />
      </RaisedCard>

      {/* 6 · Google profile */}
      <RaisedCard x={404} y={30} w={204} h={128} className="lvi__profile" shadowId={shadowId}>
        <text className="lvi__mono" x="422" y="54">Business profile</text>
        <text className="lvi__title" x="422" y="78">Your business</text>
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            className="lvi__star"
            transform={`translate(${426 + i * 14} 92)`}
            d="M0 -5 L1.5 -1.6 L5 -1.5 L2.3 0.8 L3.1 4.5 L0 2.5 L-3.1 4.5 L-2.3 0.8 L-5 -1.5 L-1.5 -1.6 Z"
          />
        ))}
        <text className="lvi__text lvi__text--teal" x="422" y="116">Open · Closes 5 PM</text>
        <rect className="lvi__chip" x="422" y="128" width="52" height="18" rx="9" />
        <text className="lvi__chip-text" x="448" y="140">Call</text>
        <rect className="lvi__chip" x="480" y="128" width="78" height="18" rx="9" />
        <text className="lvi__chip-text" x="519" y="140">Directions</text>
      </RaisedCard>

      {/* 7 · Customer next step */}
      <RaisedCard x={430} y={398} w={190} h={78} className="lvi__contact" shadowId={shadowId}>
        <circle className="lvi__check-bg" cx="458" cy="437" r="13" />
        <path className="lvi__check" d="M452 437 L456.5 441.5 L464.5 432.5" />
        <text className="lvi__mono" x="482" y="428">Next step</text>
        <text className="lvi__title" x="482" y="448">Estimate requested</text>
      </RaisedCard>
    </svg>
  );
}
