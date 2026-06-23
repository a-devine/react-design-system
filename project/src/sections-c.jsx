/* GEO + Website Systems + Automation + Credibility + Who + Offer Stack + Final CTA */

/* ============================== GEO / AI SEARCH ============================== */
function GeoSection() {
  const journey = [
    {
      h: '1 · Customer asks an AI',
      icon: L.MessageSquare,
      sample: '“Best dental implant clinic near me with weekend availability?”',
      note: 'ChatGPT · Google AI Overviews · Perplexity · Gemini',
    },
    {
      h: '2 · The AI reads signals',
      icon: L.SearchCheck,
      sample: 'Reviews · authority · maps · GBP completeness · structured data · site speed',
      note: 'Trust + relevance scored in real time',
    },
    {
      h: '3 · You appear in the answer',
      icon: L.Award,
      sample: '“[Your Practice] — 4.9 stars, accepts weekend appointments, in-house implants.”',
      note: 'Recommendation, not a 10-blue-links result',
    },
  ];

  return (
    <section className="relative pt-28 md:pt-36">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="mb-12 md:mb-14">
          <SectionLabel
            kicker="GEO · Generative Engine Optimization"
            title={<>The new local search lives <span className="serif text-bronze">inside the answer.</span></>}
            sub="GEO is how you become the business an AI recommends — not just the one that ranks. Here's what that journey actually looks like."
          />
        </div>

        <div className="reveal grid grid-cols-1 lg:grid-cols-3 gap-5 relative">
          {journey.map((s, i) => {
            const Icon = s.icon;
            const last = i === journey.length - 1;
            return (
              <div key={i} className="relative">
                <article className="bg-card border border-line rounded-[20px] p-7 shadow-soft h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-paper border border-line flex items-center justify-center">
                      <Icon className="w-5 h-5 text-ink" strokeWidth={1.6} />
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-mute2 num">
                      Step 0{i + 1}
                    </div>
                  </div>
                  <h3 className="mt-5 text-[20px] font-medium text-ink tracking-[-0.02em]">{s.h}</h3>
                  <div className="mt-4 rounded-xl bg-paper2 border border-line px-4 py-3.5">
                    <div className="text-[14.5px] text-ink leading-[1.5]">{s.sample}</div>
                  </div>
                  <div className="mt-4 text-[13px] text-mute leading-[1.5]">{s.note}</div>
                </article>

                {/* Connector arrow */}
                {!last && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 w-7 h-7 rounded-full bg-paper border border-line items-center justify-center z-10">
                    <L.ArrowRight className="w-3.5 h-3.5 text-bronze" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================== WEBSITE SYSTEMS ============================== */
function WebsiteSystems() {
  // The "site as revenue infrastructure" stacked diagram
  const layers = [
    { l: 'Analytics & attribution', d: 'Know which dollar drove which booking.', i: L.LineChart, w: 88 },
    { l: 'Booking & lead capture',  d: 'Forms, calls, chat, all routed in seconds.', i: L.CalendarCheck, w: 92 },
    { l: 'GEO · AI search ready',   d: 'Structured for assistants and overviews.',  i: L.Sparkles,      w: 80 },
    { l: 'SEO foundations',          d: 'Schema, sitemap, intent-mapped pages.',     i: L.Search,        w: 96 },
    { l: 'Conversion copy',          d: 'Objection-led messaging that reads true.',  i: L.MessageCircle, w: 84 },
    { l: 'Speed & technical core',   d: 'Sub-2s LCP. Built to be felt, not seen.',   i: L.Gauge,         w: 100 },
    { l: 'Trust layer',              d: 'Reviews, proof, certifications, faces.',    i: L.Award,         w: 90 },
  ];

  return (
    <section className="relative pt-28 md:pt-36">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.2fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel
              kicker="Website Systems"
              title={<>Your site isn’t a brochure. <span className="serif text-bronze">It’s revenue infrastructure.</span></>}
              sub="A modern local business site has seven jobs to do — and most do two of them, badly. We rebuild each layer with measurable outcomes."
            />

            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              <KpiTile k="LCP" v="< 2.0s" />
              <KpiTile k="Conv. uplift" v="+34%" tone="bronze" />
              <KpiTile k="A11y score" v="98" />
              <KpiTile k="GEO surfaces" v="6" tone="teal" />
            </div>
          </div>

          <div className="reveal relative bg-card border border-line rounded-[24px] p-6 md:p-8 shadow-card">
            <div className="flex items-center justify-between mb-5">
              <div className="text-[11px] uppercase tracking-[0.16em] text-mute2">Revenue stack</div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-mute2">Coverage</div>
            </div>
            <div className="space-y-2.5">
              {layers.map((row, i) => {
                const Icon = row.i;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-paper border border-line flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-ink" strokeWidth={1.6} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="text-[14px] font-medium text-ink">{row.l}</div>
                        <div className="text-[12px] text-mute num">{row.w}%</div>
                      </div>
                      <div className="text-[12.5px] text-mute mb-2 leading-[1.45]">{row.d}</div>
                      <div className="h-1.5 rounded-full bg-paper2 border border-line overflow-hidden">
                        <div
                          className={'h-full rounded-full ' + (row.w === 100 ? 'bg-bronze' : 'bg-ink/85')}
                          style={{ width: row.w + '%' }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KpiTile({ k, v, tone = 'ink' }) {
  const tones = {
    ink:    'border-line bg-card',
    bronze: 'border-bronze100 bg-bronze50/60',
    teal:   'border-teal/15 bg-teal50/70',
  };
  return (
    <div className={'rounded-xl border p-4 ' + tones[tone]}>
      <div className="text-[11px] uppercase tracking-[0.16em] text-mute2">{k}</div>
      <div className="mt-1 text-[22px] font-medium text-ink h-display num">{v}</div>
    </div>
  );
}

/* ============================== AUTOMATION BEFORE / AFTER ============================== */
function AutomationCompare() {
  const before = [
    { i: L.PhoneOff,    l: 'Missed calls', d: 'Lead leaves a message. Never hears back.' },
    { i: L.AlarmClock,  l: 'Slow follow-up', d: 'Email reply 3 days later. Lead has already booked elsewhere.' },
    { i: L.Trash2,      l: 'Forgotten leads', d: 'Lost in inbox threads and sticky notes.' },
    { i: L.UserX,       l: 'No review nudge', d: 'Happy customers leave silently.' },
  ];
  const after = [
    { i: L.MessagesSquare, l: 'Missed call → SMS in 60s', d: '“Hi, we just missed you — what time works to talk?”' },
    { i: L.Zap,            l: 'CRM workflows on autopilot', d: 'Every lead routed, scored, and nurtured to a booking.' },
    { i: L.BellRing,       l: 'Booking reminders', d: 'SMS + email at the moments that prevent no-shows.' },
    { i: L.Star,           l: 'Review requests, perfectly timed', d: 'Sent at peak-satisfaction moments. 3× the conversion.' },
  ];

  return (
    <section className="relative pt-28 md:pt-36">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="mb-12 md:mb-14">
          <SectionLabel
            kicker="Automation"
            title={<>The cost of missed follow-up <span className="serif text-bronze">is your biggest leak.</span></>}
            sub="Most local businesses lose 30–50% of their leads to slow or forgotten follow-up. Our automation closes that gap without sounding like a robot."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <CompareCol title="Before" badge="Today, for most local businesses" tone="before" items={before} />
          <CompareCol title="After"  badge="With Devine Edge"                 tone="after"  items={after} />
        </div>
      </div>
    </section>
  );
}

function CompareCol({ title, badge, tone, items }) {
  const before = tone === 'before';
  return (
    <div className={'reveal rounded-[22px] p-7 md:p-8 border ' + (before ? 'bg-paper2 border-line' : 'bg-card border-line2 shadow-card')}>
      <div className="flex items-center justify-between mb-6">
        <div className="text-[22px] font-medium tracking-[-0.02em] text-ink">{title}</div>
        <span className={
          'text-[11px] font-medium px-2 py-1 rounded-full ' +
          (before
            ? 'bg-paper border border-line text-mute'
            : 'bg-bronze50 border border-bronze100 text-bronze')
        }>
          {badge}
        </span>
      </div>

      <ul className="space-y-4">
        {items.map((it, i) => {
          const Icon = it.i;
          return (
            <li key={i} className="flex gap-4">
              <div className={
                'w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center border ' +
                (before ? 'bg-paper border-line' : 'bg-paper border-line')
              }>
                <Icon className={'w-5 h-5 ' + (before ? 'text-mute2' : 'text-ink')} strokeWidth={1.6} />
              </div>
              <div>
                <div className={'text-[15.5px] font-medium ' + (before ? 'text-mute' : 'text-ink')}>{it.l}</div>
                <div className={'text-[13.5px] mt-1 leading-[1.5] ' + (before ? 'text-mute2' : 'text-mute')}>{it.d}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ============================== CREDIBILITY ============================== */
function Credibility() {
  return (
    <section className="relative pt-28 md:pt-36">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          <div>
            <Eyebrow tone="teal">Who runs it</Eyebrow>
            <h2 className="h-section mt-5 text-[36px] md:text-[44px] text-ink">
              Operators first. <span className="serif text-bronze">Marketers second.</span>
            </h2>
            <p className="mt-5 text-[16.5px] text-mute leading-[1.6] max-w-lg">
              Devine Edge is run by people who have actually built local businesses — taking calls,
              closing jobs, and reading P&Ls — before they ever ran a campaign. That bias toward
              outcomes shows up in everything we ship.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-4 max-w-md">
              <Stat label="Local clients" value="120+" />
              <Stat label="Industries"    value="9"    />
              <Stat label="Avg tenure"    value="2.4y" />
            </div>

            <div className="mt-8">
              <GhostBtn>
                <L.User className="w-4 h-4" />
                Meet the team
              </GhostBtn>
            </div>
          </div>

          <div className="relative bg-card border border-line rounded-[24px] p-7 md:p-9 shadow-card">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-paper border border-line flex items-center justify-center text-[20px] font-medium text-ink">
                DE
              </div>
              <div>
                <div className="text-[15px] font-medium text-ink">Devine Edge · Founding team</div>
                <div className="text-[13px] text-mute2">Operators · marketers · engineers</div>
              </div>
            </div>

            <blockquote className="mt-7">
              <L.Quote className="w-5 h-5 text-bronze mb-3" />
              <p className="text-[18px] md:text-[20px] leading-[1.5] text-ink tracking-[-0.01em]">
                We don't sell campaigns. We build a system that makes your business easier to find,
                easier to trust, and easier to choose — and we hold ourselves to a number you care
                about.
              </p>
            </blockquote>

            <div className="mt-7 pt-6 border-t border-line grid grid-cols-3 gap-4">
              <PrincipleTile i={L.Compass}    l="Strategy" d="Always tied to revenue" />
              <PrincipleTile i={L.ShieldCheck} l="Trust"    d="No hype, no fluff"     />
              <PrincipleTile i={L.Activity}    l="Outcome"  d="Reported weekly"        />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrincipleTile({ i: Icon, l, d }) {
  return (
    <div>
      <div className="w-8 h-8 rounded-lg bg-paper border border-line flex items-center justify-center mb-2">
        <Icon className="w-4 h-4 text-ink" strokeWidth={1.6} />
      </div>
      <div className="text-[13.5px] font-medium text-ink">{l}</div>
      <div className="text-[12px] text-mute leading-[1.45]">{d}</div>
    </div>
  );
}

/* ============================== WHO THIS IS FOR ============================== */
function WhoForSection() {
  const items = [
    { l: 'Medical spas',            i: L.Sparkles, n: '12+ live' },
    { l: 'Home services',           i: L.Home,     n: '24+ live' },
    { l: 'Contractors',             i: L.HardHat,  n: '18+ live' },
    { l: 'Dental & health',         i: L.Stethoscope, n: '14+ live' },
    { l: 'Legal & professional',    i: L.Scale,    n: '9+ live'  },
    { l: 'High-ticket local services', i: L.Diamond, n: '21+ live' },
  ];

  return (
    <section id="who" className="relative pt-28 md:pt-36">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="mb-12 md:mb-14">
          <SectionLabel
            kicker="Who this is for"
            title={<>Built for serious local operators.</>}
            sub="If you sell a real service to a real local market, and your bookings or jobs drive real revenue — you'll feel at home here."
          />
        </div>

        <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((it, i) => {
            const Icon = it.i;
            return (
              <div
                key={i}
                className="group relative bg-card border border-line rounded-2xl p-5 md:p-6 hover:border-line2 hover:shadow-soft transition-all overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl bg-paper border border-line flex items-center justify-center group-hover:bg-bronze50 group-hover:border-bronze100 transition-colors">
                    <Icon className="w-5 h-5 text-ink" strokeWidth={1.6} />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-mute2 num">{it.n}</span>
                </div>
                <div className="mt-6 text-[18px] md:text-[20px] font-medium text-ink tracking-[-0.02em]">
                  {it.l}
                </div>
                <div className="mt-1 text-[13px] text-mute">Ask about your specific market →</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================== OFFER STACK ============================== */
function OfferStack() {
  const tiers = [
    {
      name: 'Free AI Visibility Audit',
      price: 'Free',
      label: 'Best starting point',
      blurb: 'A real deliverable that maps where you stand and the highest-leverage moves to make next.',
      bullets: [
        'AI search + Google visibility scan',
        'Lead-leak diagnostic',
        'Three highest-leverage moves',
        '30-minute walkthrough call',
      ],
      cta: 'Request my audit',
      featured: false,
    },
    {
      name: 'Growth Infrastructure',
      price: 'Project',
      label: 'Best for growth-ready businesses',
      blurb: 'We rebuild your site, GEO, and conversion infrastructure — then hand it back as an asset you own.',
      bullets: [
        'Website + GEO foundation',
        'Conversion copy + offers',
        'Google profile & maps system',
        'Lead capture + missed-call recovery',
        '60-day optimization sprint',
      ],
      cta: 'Scope a project',
      featured: true,
    },
    {
      name: 'AI Growth Operating System',
      price: 'Retainer',
      label: 'Complete system',
      blurb: 'The full Devine Edge stack, run by us, reported weekly, accountable to revenue.',
      bullets: [
        'All four systems, live & monitored',
        'Weekly optimization & ad creative loop',
        'Competitor intelligence engine',
        'Automation & follow-up at scale',
        'Direct line to a senior operator',
      ],
      cta: 'Talk to a strategist',
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="relative pt-28 md:pt-36">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="mb-12 md:mb-14">
          <SectionLabel
            kicker="The path forward"
            title={<>Three ways to start.</>}
            sub="Most clients begin with the free audit. From there, we recommend a path that matches the size of your opportunity — never the other way around."
          />
        </div>

        <div className="reveal grid grid-cols-1 lg:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <OfferTier key={i} tier={t} />
          ))}
        </div>

        <div className="mt-8 text-center text-[13.5px] text-mute2">
          Not sure which path fits? Start with the free audit — it tells us, together.
        </div>
      </div>
    </section>
  );
}

function OfferTier({ tier }) {
  const { name, price, label, blurb, bullets, cta, featured } = tier;
  return (
    <article
      className={
        'relative rounded-[22px] p-7 md:p-8 border transition-all ' +
        (featured
          ? 'bg-ink text-paper2 border-ink shadow-rise -translate-y-0 lg:-translate-y-2'
          : 'bg-card border-line shadow-soft hover:shadow-card')
      }
    >
      <div className="flex items-center justify-between mb-5">
        <span className={
          'text-[10.5px] uppercase tracking-[0.18em] font-medium px-2 py-1 rounded-full ' +
          (featured
            ? 'bg-bronze text-paper2'
            : 'bg-paper border border-line text-mute')
        }>
          {label}
        </span>
        <span className={'text-[11px] uppercase tracking-[0.16em] ' + (featured ? 'text-bronze' : 'text-mute2')}>
          {price}
        </span>
      </div>

      <h3 className={'h-section text-[26px] md:text-[28px] tracking-[-0.02em] ' + (featured ? 'text-paper2' : 'text-ink')}>
        {name}
      </h3>
      <p className={'mt-3 text-[14.5px] leading-[1.55] ' + (featured ? 'text-paper2/75' : 'text-mute')}>
        {blurb}
      </p>

      <ul className="mt-6 space-y-2.5">
        {bullets.map((b, i) => (
          <li key={i} className={'flex gap-3 text-[14px] ' + (featured ? 'text-paper2/90' : 'text-ink/85')}>
            <L.Check className={'w-4 h-4 mt-0.5 flex-shrink-0 ' + (featured ? 'text-bronze' : 'text-bronze')} strokeWidth={2.4} />
            <span className="leading-[1.45]">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 pt-5 border-t border-line/40 flex">
        {featured ? (
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-bronze text-paper2 font-medium px-5 py-3 text-[15px] hover:bg-bronze/90 active:scale-[0.98] transition-all">
            {cta} <L.ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink text-paper2 font-medium px-5 py-3 text-[15px] hover:bg-ink2 active:scale-[0.98] transition-all">
            {cta} <L.ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </article>
  );
}

/* ============================== FINAL CTA ============================== */
function FinalCta() {
  return (
    <section id="contact" className="relative pt-28 md:pt-36">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="reveal relative overflow-hidden rounded-[28px] bg-ink text-paper2 px-8 py-14 md:px-16 md:py-20 shadow-rise">
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-[0.08]"
               style={{
                 backgroundImage:
                   'linear-gradient(to right, #FBF8F1 1px, transparent 1px),' +
                   'linear-gradient(to bottom, #FBF8F1 1px, transparent 1px)',
                 backgroundSize: '32px 32px',
               }} />
          {/* Bronze glow */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full opacity-30"
               style={{ background: 'radial-gradient(closest-side, rgba(168,107,58,0.7), transparent 70%)' }} />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end">
            <div>
              <Eyebrow tone="bronze">Start here</Eyebrow>
              <h2 className="h-display mt-5 text-[40px] md:text-[60px] text-paper2">
                Find out exactly where
                <br />
                your business stands.
              </h2>
              <p className="mt-5 text-[16.5px] md:text-[18px] text-paper2/70 leading-[1.55] max-w-lg">
                The free AI Visibility Audit takes about 5 business days. You'll walk away with a
                clear picture, three concrete moves, and zero pressure.
              </p>
            </div>

            <div className="lg:justify-self-end w-full lg:max-w-sm">
              <div className="bg-paper2/5 border border-paper2/10 rounded-2xl p-5 backdrop-blur">
                <div className="text-[12px] uppercase tracking-[0.16em] text-paper2/60">Free audit · no pitch</div>
                <div className="mt-2 text-[20px] font-medium text-paper2 tracking-[-0.01em]">
                  Get a Free AI Visibility Audit
                </div>
                <div className="mt-1 text-[13.5px] text-paper2/65 leading-[1.5]">
                  We need 6 minutes from you. We do the rest.
                </div>
                <div className="mt-5 flex flex-col gap-2.5">
                  <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-bronze text-paper2 font-medium px-5 py-3.5 text-[15px] hover:bg-bronze/90 active:scale-[0.98] transition-all">
                    Request my audit <L.ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-paper2/25 text-paper2 font-medium px-5 py-3.5 text-[15px] hover:bg-paper2/5 active:scale-[0.98] transition-all">
                    <L.PhoneCall className="w-4 h-4" />
                    Book a strategy call
                  </button>
                </div>
                <div className="mt-4 text-[12px] text-paper2/55 leading-[1.5] text-center">
                  No pressure. Just a clear look at where your business stands.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  GeoSection, WebsiteSystems, AutomationCompare, Credibility, WhoForSection,
  OfferStack, FinalCta,
});
