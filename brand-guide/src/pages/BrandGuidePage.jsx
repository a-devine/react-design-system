import TopBar from '../components/TopBar.jsx';
import Cover from '../components/Cover.jsx';
import Footer from '../components/Footer.jsx';
import BrandSection from '../components/sections/BrandSection.jsx';
import LogoSection from '../components/sections/LogoSection.jsx';
import ColorSection from '../components/sections/ColorSection.jsx';
import TypeSection from '../components/sections/TypeSection.jsx';
import VoiceSection from '../components/sections/VoiceSection.jsx';
import ComponentsSection from '../components/sections/ComponentsSection.jsx';
import MotionSection from '../components/sections/MotionSection.jsx';
import ImagerySection from '../components/sections/ImagerySection.jsx';

export default function BrandGuidePage() {
  return (
    <>
      <TopBar />
      <main>
        <Cover />
        <BrandSection />
        <LogoSection />
        <ColorSection />
        <TypeSection />
        <VoiceSection />
        <ComponentsSection />
        <MotionSection />
        <ImagerySection />
      </main>
      <Footer />
    </>
  );
}
