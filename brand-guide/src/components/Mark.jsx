/**
 * The Devine Edge mark — a geometric "E" cut into a forward arrow.
 * Single source of truth for the logo glyph; `color` is inherited via
 * `fill="currentColor"`, so callers tint it with CSS `color`.
 */
export default function Mark({ className, style, title }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 118 126"
      fill="currentColor"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <polygon points="0,0 115,0 73,23 26,23 26,101 77,102 115,125 0,125" />
      <polygon points="54,63 116,37 116,88" />
    </svg>
  );
}
