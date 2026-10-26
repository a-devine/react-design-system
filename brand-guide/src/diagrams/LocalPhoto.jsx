import './LocalPhoto.css';

/**
 * One original local photograph, editorially framed. Without `src` it renders
 * a labeled slot with the shot brief, so a stock image never fills the gap.
 */
export default function LocalPhoto({ src, alt, caption, credit, brief, className = '' }) {
  return (
    <figure className={`local-photo ${className}`}>
      <div className="local-photo__frame">
        {src ? (
          <img src={src} alt={alt} loading="lazy" />
        ) : (
          <div className="local-photo__slot">
            <span>Original photo to commission</span>
            <p>{brief}</p>
          </div>
        )}
      </div>
      {(caption || credit) && (
        <figcaption>
          {caption}
          {credit && <span className="local-photo__credit">{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}
