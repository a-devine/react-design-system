import { WORDMARK } from '../assets.js';

export default function Footer() {
  return (
    <footer className="colophon">
      <span className="l">
        <img src={WORDMARK} alt="Devine Edge" />
        <span className="meta">Brand Guide · v1.0</span>
      </span>
      <span className="meta">Become the Business AI recommends. · May 2026</span>
    </footer>
  );
}
