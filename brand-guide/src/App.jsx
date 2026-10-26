import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import DocNav from './components/DocNav.jsx';
import BrandGuidePage from './pages/BrandGuidePage.jsx';
import CtaPage from './pages/CtaPage.jsx';
import CtaStandalonePage from './pages/CtaStandalonePage.jsx';
import ContactSpecPage from './pages/ContactSpecPage.jsx';
import DiagramsPage from './pages/DiagramsPage.jsx';
import HomepageConceptPage from './pages/HomepageConceptPage.jsx';

/** Scroll to top on route change (but preserve in-page #anchor jumps). */
function ScrollReset() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollReset />
      <Routes>
        <Route path="/" element={<BrandGuidePage />} />
        <Route path="/cta" element={<CtaPage />} />
        <Route path="/cta/:variant" element={<CtaStandalonePage />} />
        <Route path="/contact" element={<ContactSpecPage />} />
        <Route path="/diagrams" element={<DiagramsPage />} />
        <Route path="/homepage" element={<HomepageConceptPage />} />
      </Routes>
      <DocNav />
    </>
  );
}
