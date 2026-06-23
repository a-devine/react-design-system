/* Hero + Audit Card + Trust Bar + Market Shift */

/* ============================== HERO ============================== */
function Hero() {
  return (
    <section id="top" className="relative pt-10 md:pt-16 pb-8 md:pb-14">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="reveal">
            <Eyebrow tone="bronze">Built for local operators</Eyebrow>

            <h1 className="h-display mt-6 text-[44px] sm:text-[56px] md:text-[68px] lg:text-[80px] text-ink">
              Become the easiest
              <br />
              local business
              <br />
              <span className="text-mute">to find,</span>{' '}
              <span className="serif text-bronze">trust,</span>{' '}
              <span className="text-mute">and choose.</span>
            </h1>

            <p className="mt-7 text-[18px] md:text-[19px] leading-[1.55] text-mute max-w-[560px]">
              Devine Edge is the operating system for modern local business growth — combining
              AI search visibility, conversion infrastructure, and follow-up automation into one
              clear, accountable system.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <PrimaryBtn size="lg">
                Get a Free AI Visibility Audit
                <L.ArrowRight className="w-4 h-4" />
              </PrimaryBtn>
              <GhostBtn size="lg">
                <L.PhoneCall className="w-4 h-4" />
                Book a strategy call
              </GhostBtn>
            </div>

            <p className="mt-5 text-[13.5px] text-mute2 max-w-[480px] leading-[1.6]">
              No pressure. Just a clear look at where your business stands and where the
              biggest opportunities are.
            </p>

            <div className="mt-10 flex items-center gap-6 text-[13px] text-mute">
              <div className="flex items-center gap-2">
                <L.ShieldCheck className="w-4 h-4 text-teal" strokeWidth={1.6} />
                Privacy-first
              </div>
              <div className="flex items-center gap-2">
                <L.Activity className="w-4 h-4 text-bronze" strokeWidth={1.6} />
                Outcome-tracked
              </div>
              <div className="flex items-center gap-2">
                <L.Sparkles className="w-4 h-4 text-ink" strokeWidth={1.6} />
                AI-native
              </div>
            </div>
          </div>

          {/* Right — System visual */}
          <HeroSystemVisual />
        </div>
      </div>
    </section>
  );
}

function HeroSystemVisual() {
  // Layered card showing the infrastructure stack
  const layers = [
    { name: 'Revenue & attribution', icon: L.LineChart, value: '+38%', tone: 'teal' },
    { name: 'Booking & follow-up',   icon: L.CalendarCheck, value: '94 booked', tone: 'bronze' },
    { name: 'Website + landing copy',icon: L.Globe, value: '2.1s LCP', tone: 'ink' },
    { name: 'Ads & creative loop',   icon: L.Megaphone, value: '6 angles live', tone: 'ink' },
    { name: 'AI Search visibility',  icon: L.Search, value: '4 mentions', tone: 'bronze' },
    { name: 'Google profile & maps', icon: L.MapPin, value: 'Top 3', tone: 'teal' },
  ];
  return (
    <div className="reveal relative">
      {/* Card */}
      <div className="relative bg-card border border-line rounded-[22px] shadow-rise overflow-hidden">
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-line flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
            <span className="text-[12.5px] text-mute">Devine Edge — Live system</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[11px] uppercase tracking-[0.16em] text-mute2">Live</span>
            <L.Activity className="w-3.5 h-3.5 text-bronze" />
          </div>
        </div>

        {/* Body */}
        <div className="p-5 grid gap-2.5">
          {layers.map((l, i) => {
            const Icon = l.icon;
            const tones = {
              ink:    'text-ink bg-paper',
              bronze: 'text-bronze bg-bronze50',
              teal:   'text-teal bg-teal50',
            };
            return (
              <div
                key={i}
                className="group flex items-center gap-3 px-3.5 py-3 rounded-xl border border-line hover:border-line2 bg-paper2 transition-colors"
              >
                <div className={'w-9 h-9 rounded-lg flex items-center justify-center ' + tones[l.tone]}>
                  <Icon className="w-4.5 h-4.5" strokeWidth={1.6} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[14px] font-medium text-ink">{l.name}</div>
                  <div className="text-[12px] text-mute2">Connected · monitored hourly</div>
                </div>
                <div className="text-[13px] font-medium text-ink num">{l.value}</div>
                <L.ChevronRight className="w-4 h-4 text-mute2 group-hover:text-ink transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Footer outcome */}
        <div className="px-5 py-4 border-t border-line bg-paper2 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-mute2">This month</div>
            <div className="text-[15px] text-ink font-medium">
              <span className="num">312</span> qualified leads
              <span className="text-mute"> · </span>
              <span className="num">68</span> bookings
            </div>
          </div>
          <div className="text-right">
            <div className="text-[11px] uppercase tracking-[0.16em] text-mute2">Vs prior</div>
            <div className="text-[15px] text-teal font-medium num">+38.2%</div>
          </div>
        </div>
      </div>

      {/* Floating annotation */}
      <div className="hidden md:flex absolute -left-6 top-16 -translate-x-full items-center gap-2 bg-ink text-paper2 px-3 py-2 rounded-full text-[12.5px] shadow-card">
        <span className="w-1.5 h-1.5 rounded-full bg-bronze pulse-dot" />
        4 systems just synced
      </div>
      <div className="hidden md:flex absolute -right-4 bottom-20 translate-x-1/2 items-center gap-2 bg-card border border-line text-ink px-3 py-2 rounded-xl text-[12.5px] shadow-card">
        <L.TrendingUp className="w-3.5 h-3.5 text-bronze" />
        ROI ↑ Q2
      </div>

      {/* Decorative ambient */}
      <div className="absolute -z-10 -inset-8 rounded-[40px]"
           style={{ background: 'radial-gradient(60% 60% at 60% 40%, rgba(168,107,58,0.10), transparent 70%)' }} />
    </div>
  );
}

/* ============================== AUDIT CARD ============================== */
function AuditCard() {
  const items = [
    { t: 'AI Search visibility',   d: 'Where you appear in ChatGPT, Gemini, Perplexity, and Google AI Overviews — and where you do not.' },
    { t: 'Google profile & maps',  d: 'Local pack rank, photo coverage, review velocity, category accuracy, and missed queries.' },
    { t: 'Website conversion read',d: 'Speed, trust signals, copy clarity, and the three friction points costing you most leads.' },
    { t: 'Reputation snapshot',    d: 'Review sentiment, response cadence, and competitor delta across the last 90 days.' },
    { t: 'Lead-leak diagnostic',   d: 'Missed calls, slow follow-up, and forms that disappear before booking.' },
    { t: 'Competitor angle scan',  d: 'Three ads, three hooks, and three positioning gaps your competitors are exploiting.' },
  ];

  return (
    <section id="audit" className="relative pt-8 md:pt-14">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="reveal relative bg-card border border-line rounded-[28px] overflow-hidden shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
            {/* Left */}
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-line">
              <Eyebrow tone="bronze">Primary CTA · Free</Eyebrow>
              <h3 className="h-section mt-5 text-[34px] md:text-[44px] text-ink max-w-md">
                The Free AI Visibility Audit
              </h3>
              <p className="mt-4 text-[16px] md:text-[17px] text-mute leading-[1.55] max-w-md">
                A real deliverable — not a sales pitch. We map exactly where your business is
                appearing (and disappearing), and show you the three highest-leverage moves to
                make in the next 30 days.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <PrimaryBtn size="lg">
                  Request my audit
                  <L.ArrowRight className="w-4 h-4" />
                </PrimaryBtn>
                <GhostBtn size="lg">
                  See a sample report
                </GhostBtn>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                <Stat label="Pages reviewed"     value="40+" />
                <Stat label="Sources scanned"    value="12"  />
                <Stat label="Delivered in"       value="5d"  />
              </div>
            </div>

            {/* Right — checklist */}
            <div className="p-8 md:p-12 bg-paper2/60">
              <div className="text-[11px] uppercase tracking-[0.18em] text-mute2 mb-5">
                What's inside
              </div>
              <ul className="space-y-3.5">
                {items.map((it, i) => (
                  <li key={i} className="flex gap-3 group">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-bronze50 border border-bronze100 flex items-center justify-center flex-shrink-0">
                      <L.Check className="w-3 h-3 text-bronze" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[15px] font-medium text-ink">{it.t}</div>
                      <div className="text-[13.5px] text-mute leading-[1.5] mt-0.5">{it.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-[24px] font-medium text-ink h-display num">{value}</div>
      <div className="text-[12px] text-mute2 mt-1">{label}</div>
    </div>
  );
}

/* ============================== TRUST BAR ============================== */
function TrustBar() {
  const pills = [
    'Google AI Overviews',
    'ChatGPT search',
    'Perplexity citations',
    'Local pack ranking',
    'Maps optimization',
    'Review velocity',
    'Conversion copy',
    'Landing systems',
    'Ad creative loop',
    'CRM automation',
    'Missed-call recovery',
    'Attribution',
  ];
  // duplicate for marquee
  const track = [...pills, ...pills];
  return (
    <section className="relative pt-16 md:pt-24">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="reveal flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="md:max-w-[230px] flex-shrink-0">
            <div className="text-[12px] uppercase tracking-[0.18em] text-mute2 mb-2">
              Capability surface
            </div>
            <div className="text-[15px] text-ink leading-[1.45]">
              One vendor. One accountable system across every layer of local growth.
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden"
               style={{
                 maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                 WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
               }}>
            <div className="flex gap-2 marquee-track w-max">
              {track.map((p, i) => (
                <span
                  key={i}
                  className="text-[13px] text-ink/85 bg-card border border-line rounded-full px-3.5 py-1.5 whitespace-nowrap"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== MARKET SHIFT ============================== */
function MarketShift() {
  const oldWay = [
    { i: L.Globe,     t: 'A basic website',            d: 'Brochure pages with no conversion system.' },
    { i: L.Facebook,  t: 'A Facebook page',            d: 'Posts no one sees. No attribution.' },
    { i: L.Search,    t: 'Some keyword SEO',           d: 'Ranking for terms no one searches in 2026.' },
    { i: L.Mail,      t: 'Manual follow-up',           d: 'If you remember. If the lead doesn’t ghost.' },
  ];
  const newWay = [
    { i: L.Sparkles,    t: 'Google AI Overviews & ChatGPT',  d: 'You appear inside the answer, not below it.' },
    { i: L.MapPin,      t: 'Maps, reviews & local pack',     d: 'Modeled, monitored, and improved weekly.' },
    { i: L.MessageSquare,t: 'Voice search & assistants',     d: 'Optimized for how people actually ask now.' },
    { i: L.Workflow,    t: 'Conversion + automation',        d: 'Every lead captured, routed, and nurtured.' },
  ];

  return (
    <section className="relative pt-24 md:pt-36">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="mb-12 md:mb-16">
          <SectionLabel
            kicker="The shift"
            title={<>The playbook that worked in 2018 <span className="serif text-bronze">quietly stopped working.</span></>}
            sub="Local discovery moved into AI answers, maps panels, and review-aware assistants. Most local businesses haven't updated their growth stack to match."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          <ShiftCard tone="old" label="What used to be enough" items={oldWay} />
          <ShiftCard tone="new" label="What’s required now"    items={newWay} />
        </div>
      </div>
    </section>
  );
}

function ShiftCard({ tone, label, items }) {
  const isOld = tone === 'old';
  return (
    <div
      className={
        'reveal rounded-[22px] p-7 md:p-9 border ' +
        (isOld
          ? 'border-line bg-paper2 text-mute relative overflow-hidden'
          : 'border-line2 bg-card shadow-card')
      }
    >
      {isOld && (
        <div className="absolute inset-0 pointer-events-none opacity-30"
             style={{
               backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 14px, rgba(26,26,26,0.04) 14px 15px)',
             }} />
      )}

      <div className="relative flex items-center justify-between mb-7">
        <div className="text-[11px] uppercase tracking-[0.18em] text-mute2">{label}</div>
        <span
          className={
            'text-[11px] font-medium px-2 py-1 rounded-full ' +
            (isOld
              ? 'bg-paper border border-line text-mute'
              : 'bg-bronze50 border border-bronze100 text-bronze')
          }
        >
          {isOld ? 'Then · 2018' : 'Now · 2026'}
        </span>
      </div>

      <ul className="relative grid gap-4">
        {items.map((it, i) => {
          const Icon = it.i;
          return (
            <li key={i} className="flex gap-3.5">
              <div
                className={
                  'w-9 h-9 flex-shrink-0 rounded-lg flex items-center justify-center ' +
                  (isOld ? 'bg-paper border border-line' : 'bg-paper border border-line')
                }
              >
                <Icon className={'w-4 h-4 ' + (isOld ? 'text-mute2' : 'text-ink')} strokeWidth={1.6} />
              </div>
              <div className="flex-1">
                <div
                  className={
                    'text-[15.5px] font-medium ' +
                    (isOld ? 'text-mute line-through decoration-mute2/40' : 'text-ink')
                  }
                >
                  {it.t}
                </div>
                <div className={'text-[13.5px] mt-0.5 leading-[1.5] ' + (isOld ? 'text-mute2' : 'text-mute')}>
                  {it.d}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Object.assign(window, { Hero, AuditCard, TrustBar, MarketShift });
