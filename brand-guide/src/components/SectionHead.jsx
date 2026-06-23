/** Shared section header: numbered index, title, and lede. */
export default function SectionHead({ index, title, children }) {
  return (
    <div className="sec-head">
      <span className="sec-index mono">{index}</span>
      <h2 className="sec-title">{title}</h2>
      <p className="sec-lede">{children}</p>
    </div>
  );
}
