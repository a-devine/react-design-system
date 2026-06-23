/* App entry — composes the page */

function App() {
  useReveal();

  return (
    <div className="relative">
      <Nav />

      <main className="relative z-10">
        <Hero />
        <AuditCard />
        <TrustBar />
        <MarketShift />
        <EdgeSystem />
        <GrowthSystems />
        <CompetitorIntel />
        <AdSystem />
        <GeoSection />
        <WebsiteSystems />
        <AutomationCompare />
        <Credibility />
        <WhoForSection />
        <OfferStack />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
