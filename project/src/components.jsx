/* Shared primitives, hooks, layout helpers, nav, footer */
const { useState, useEffect, useRef, useMemo } = React;

/* ---------- Lucide icon adapter (UMD `lucide` → React component, via Proxy) ---------- */
function _lucideRenderChildren(node) {
  // node forms across lucide versions:
  //   [ [tag, attrs], ... ]                                        (newer)
  //   [ [tag, attrs, [ [childTag, childAttrs], ... ] ], ... ]      (with children)
  //   { children: [...] }                                          (occasional)
  const arr = Array.isArray(node) ? node : (node && node.children) || [];
  return arr.map(([tag, attrs, kids], i) =>
    React.createElement(
      tag,
      { key: i, ...(attrs || {}) },
      kids ? _lucideRenderChildren(kids) : null,
    ),
  );
}

function _lucideLookup(name) {
  const lib = (typeof window !== 'undefined' && window.lucide) || {};
  if (lib[name]) return lib[name];
  // lib.icons keys are PascalCase in v0.453 (same as top-level)
  if (lib.icons && lib.icons[name]) return lib.icons[name];
  // fallbacks for renamed icons across lucide versions
  const fallbacks = {
    'MessagesSquare': 'MessageSquare',
    'SearchCheck':    'Search',
    'Repeat2':        'Repeat',
    'BellRing':       'Bell',
  };
  if (fallbacks[name] && lib[fallbacks[name]]) return lib[fallbacks[name]];
  return null;
}

function _LucideIcon({ _name, className = '', strokeWidth = 1.6, style, ...rest }) {
  const data = _lucideLookup(_name);
  const svgProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24, height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round',
    className, style, ...rest,
  };
  if (!data) {
    return React.createElement('svg', svgProps,
      React.createElement('circle', { cx: 12, cy: 12, r: 9 }));
  }
  // lucide v0.453 UMD: each icon is ['svg', svgAttrs, [ [tag, attrs], ... ]]
  let children = data;
  if (Array.isArray(data) && data.length === 3 && data[0] === 'svg' && Array.isArray(data[2])) {
    children = data[2];
  }
  return React.createElement('svg', svgProps, _lucideRenderChildren(children));
}

const L = new Proxy({}, {
  get(_, name) {
    if (name === '$$typeof' || typeof name === 'symbol') return undefined;
    const Cmp = (props) => React.createElement(_LucideIcon, { _name: name, ...props });
    Cmp.displayName = 'L.' + String(name);
    return Cmp;
  },
});

/* ---------- Reveal on scroll ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');

    // Anything already in (or near) the viewport on mount reveals immediately —
    // avoids a brief flash and guards against pages that don't scroll.
    const vh = window.innerHeight || 800;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.95) el.classList.add('in');
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));

    // Safety net: force-reveal anything still hidden after 2s.
    const failsafe = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => el.classList.add('in'));
    }, 2000);

    return () => { io.disconnect(); clearTimeout(failsafe); };
  }, []);
}

/* ---------- Reusable UI ---------- */
function PrimaryBtn({ children, className = '', size = 'md', ...props }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-[15px]',
    lg: 'px-6 py-3.5 text-base',
  };
  return (
    <button
      className={
        'inline-flex items-center justify-center gap-2 rounded-full bg-ink text-paper2 ' +
        'font-medium transition-all hover:bg-ink2 active:scale-[0.98] ' +
        sizes[size] + ' ' + className
      }
      {...props}
    >
      {children}
    </button>
  );
}

function GhostBtn({ children, className = '', size = 'md', ...props }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-[15px]',
    lg: 'px-6 py-3.5 text-base',
  };
  return (
    <button
      className={
        'inline-flex items-center justify-center gap-2 rounded-full ' +
        'border border-line2 bg-card text-ink font-medium transition-all ' +
        'hover:border-ink hover:shadow-soft active:scale-[0.98] ' +
        sizes[size] + ' ' + className
      }
      {...props}
    >
      {children}
    </button>
  );
}

function Eyebrow({ children, tone = 'bronze' }) {
  const tones = {
    bronze: 'text-bronze bg-bronze50 border-bronze100',
    teal:   'text-teal bg-teal50 border-teal/15',
    ink:    'text-ink2 bg-card border-line',
  };
  return (
    <span
      className={
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ' +
        'text-[11px] font-medium uppercase tracking-[0.14em] ' + tones[tone]
      }
    >
      <span className="w-1 h-1 rounded-full bg-current opacity-70" />
      {children}
    </span>
  );
}

function SectionLabel({ kicker, title, sub, align = 'left', kickerTone = 'bronze' }) {
  return (
    <div
      className={
        'reveal max-w-3xl ' + (align === 'center' ? 'mx-auto text-center' : '')
      }
    >
      {kicker && (
        <div className="mb-4">
          <Eyebrow tone={kickerTone}>{kicker}</Eyebrow>
        </div>
      )}
      <h2 className="h-section text-[40px] md:text-[56px] text-ink">{title}</h2>
      {sub && (
        <p className="mt-4 md:mt-5 text-[17px] md:text-lg text-mute leading-[1.55] max-w-2xl">
          {align === 'center' ? <span className="block mx-auto">{sub}</span> : sub}
        </p>
      )}
    </div>
  );
}

/* ---------- Logo ---------- */
function Logo({ size = 22 }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <svg viewBox="0 0 118 126" width={size} height={(size * 126) / 118} className="edge-mark">
        <polygon points="0,0 115,0 73,23 26,23 26,101 77,102 115,125 0,125" fill="#1A1A1A" />
        <polygon points="54,63 116,37 116,88" fill="#1F8FFF" />
      </svg>
      <span className="text-[17px] font-semibold tracking-[-0.01em] text-ink">
        Devine&nbsp;Edge
      </span>
    </a>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { label: 'System',      href: '#system' },
    { label: 'Services',    href: '#services' },
    { label: 'Audit',       href: '#audit' },
    { label: 'Pricing',     href: '#pricing' },
    { label: 'Who it’s for',href: '#who'   },
  ];

  return (
    <div
      className={
        'sticky top-0 z-40 transition-all ' +
        (scrolled
          ? 'backdrop-blur-md bg-paper/85 border-b border-line'
          : 'bg-transparent border-b border-transparent')
      }
    >
      <header className="max-w-[1240px] mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-7">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-[14px] text-mute hover:text-ink transition-colors"
            >
              {i.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline text-[14px] text-mute hover:text-ink">
            Sign in
          </a>
          <PrimaryBtn size="sm">
            Free AI Audit
            <L.ArrowRight className="w-3.5 h-3.5" />
          </PrimaryBtn>
        </div>
      </header>
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const col = (title, items) => (
    <div>
      <div className="text-[12px] uppercase tracking-[0.14em] text-mute2 mb-4">{title}</div>
      <ul className="space-y-2.5">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-[14px] text-ink/85 hover:text-bronze transition-colors">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <footer className="relative mt-24 border-t border-line bg-paper2">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-2">
            <Logo size={26} />
            <p className="mt-5 text-[15px] text-mute max-w-xs leading-[1.55]">
              The operating system for modern local business growth. Built for owners who
              want to be found, trusted, and chosen.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <PrimaryBtn size="sm">Get the free audit</PrimaryBtn>
              <GhostBtn size="sm">Book a call</GhostBtn>
            </div>
          </div>
          {col('Systems', ['Intelligence', 'Conversion', 'Automation', 'Optimization'])}
          {col('Company',  ['About', 'Method', 'Industries', 'Contact'])}
          {col('Resources',['Free audit', 'GEO guide', 'Case studies', 'Changelog'])}
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="text-[13px] text-mute2">
            © {new Date().getFullYear()} Devine Edge LLC. Built for local operators.
          </div>
          <div className="flex items-center gap-5 text-[13px] text-mute2">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">Security</a>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
              All systems normal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  React, useState, useEffect, useRef, useMemo, L,
  useReveal, PrimaryBtn, GhostBtn, Eyebrow, SectionLabel, Logo, Nav, Footer,
});
