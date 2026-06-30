import { useEffect } from 'react';
import anime from 'animejs';

/**
 * Plays a CTA's entrance once on mount — after fonts are ready so wordmark
 * widths are stable, and never when the user prefers reduced motion (the
 * scoped CSS already pins those elements to their final, settled state).
 *
 * `build(root, anime)` receives the section root element and the anime
 * instance; it should be a stable module-level function.
 */
export function useCtaEntrance(rootRef, build) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cancelled = false;
    (async () => {
      try { await document.fonts.ready; } catch (e) { /* fonts API absent */ }
      if (!cancelled) build(root, anime);
    })();
    return () => { cancelled = true; };
  }, [rootRef, build]);
}

/**
 * The shared form-submission contract: validate, then fire the `cta:submit`
 * CustomEvent (same-page listeners) and post the same payload to a parent
 * window (iframe embeds) — exactly the analytics hook the CTA library documents.
 */
export function submitCta(e, { variant, context, onDone }) {
  e.preventDefault();
  const form = e.currentTarget;
  if (!form.checkValidity()) { form.reportValidity(); return; }

  const data = Object.fromEntries(new FormData(form).entries());
  const detail = { variant, context, data };
  window.dispatchEvent(new CustomEvent('cta:submit', { detail }));
  if (window.parent !== window) {
    try { window.parent.postMessage({ type: 'cta:submit', ...detail }, '*'); } catch (err) { /* cross-origin */ }
  }
  onDone();
}

/** The forward-arrow glyph used on every CTA submit button. */
export function ArrowGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/** The checkmark used in every CTA success state. */
export function CheckGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
