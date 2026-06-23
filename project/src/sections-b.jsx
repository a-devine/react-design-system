/* Edge System bento + Core Growth Services + Competitor Intel diagram + Ad System */

/* ============================== EDGE SYSTEM (BENTO) ============================== */
function EdgeSystem() {
  return (
    <section id="system" className="relative pt-28 md:pt-40">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-end mb-10 lg:mb-14">
          <SectionLabel
            kicker="The Devine Edge System"
            title={<>Four systems. <span className="serif text-bronze">One operating model.</span></>}
          />
          <p className="reveal text-[16.5px] md:text-lg text-mute leading-[1.6] max-w-xl lg:justify-self-end">
            Growth is not a single channel — it's a connected stack. We run each layer with the
            same discipline, and we hold ourselves accountable to revenue, not vanity metrics.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-5">
          <BentoCard
            className="md:col-span-4"
            num="01"
            title="Intelligence"
            blurb="See what your competitors are running, what AI search is recommending, and where the demand actually is — before you spend a dollar."
            stat={{ k: 'Live signals', v: '24' }}
            Icon={L.Radar}
            visual={<IntelMiniGraph />}
            tone="ink"
            featured
          />
          <BentoCard
            className="md:col-span-2"
            num="02"
            title="Conversion"
            blurb="Pages, copy, and offers tuned to the specific objections of your market. Every lead has a clean path to a booking."
            stat={{ k: 'Avg lift', v: '+42%' }}
            Icon={L.MousePointerClick}
            tone="bronze"
          />
          <BentoCard
            className="md:col-span-2"
            num="03"
            title="Automation"
            blurb="Missed-call recovery, follow-up sequences, review requests, and routing — running quietly in the background, 24/7."
            stat={{ k: 'Hours saved /wk', v: '18' }}
            Icon={L.Cog}
            tone="teal"
          />
          <BentoCard
            className="md:col-span-4"
            num="04"
            title="Optimization"
            blurb="Weekly reviews tied to revenue outcomes. We retire what isn't working and double down on what is — with receipts."
            stat={{ k: 'Reviews / quarter', v: '13' }}
            Icon={L.SlidersHorizontal}
            visual={<OptimizationMini />}
            tone="ink"
            featured
          />
        </div>
      </div>
    </section>
  );
}

function BentoCard({ num, title, blurb, stat, Icon, visual, tone, featured, className = '' }) {
  const tones = {
    ink:    { ico: 'text-ink',    bg: 'bg-paper',     bd: 'border-line' },
    bronze: { ico: 'text-bronze', bg: 'bg-bronze50',  bd: 'border-bronze100' },
    teal:   { ico: 'text-teal',   bg: 'bg-teal50',    bd: 'border-teal/15' },
  };
  const t = tones[tone] || tones.ink;
  return (
    <article
      className={
        'relative rounded-[22px] p-7 md:p-8 border bg-card ' +
        (featured ? 'shadow-card' : 'shadow-soft') + ' ' +
        'border-line transition-all hover:-translate-y-0.5 hover:shadow-card ' +
        className
      }
    >
      <div className="flex items-start justify-between">
        <div className={'w-10 h-10 rounded-xl flex items-center justify-center border ' + t.bg + ' ' + t.bd}>
          <Icon className={'w-5 h-5 ' + t.ico} strokeWidth={1.6} />
        </div>
        <span className="text-[11px] uppercase tracking-[0.16em] text-mute2 num">{num}</span>
      </div>

      <h3 className="mt-6 text-[26px] md:text-[28px] font-medium tracking-[-0.02em] text-ink">
        {title}
      </h3>
      <p className="mt-2 text-[15px] text-mute leading-[1.55] max-w-md">
        {blurb}
      </p>

      {visual && <div className="mt-6">{visual}</div>}

      <div className="mt-7 pt-4 border-t border-line flex items-center justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.16em] text-mute2">{stat.k}</div>
          <div className="text-[18px] font-medium text-ink num mt-0.5">{stat.v}</div>
        </div>
        <a href="#" className="text-[13px] text-ink hover:text-bronze inline-flex items-center gap-1.5">
          See how <L.ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}

function IntelMiniGraph() {
  // Animated mini "competitor signal" bars
  const bars = [42, 28, 64, 36, 52, 48, 71, 38, 56, 44, 62, 50, 75, 58];
  return (
    <div className="bg-paper2 border border-line rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] uppercase tracking-[0.16em] text-mute2">Competitor signal · 14d</span>
        <span className="inline-flex items-center gap-1 text-[11px] text-teal">
          <L.TrendingUp className="w-3 h-3" /> +12 angles detected
        </span>
      </div>
      <div className="flex items-end gap-1.5 h-16">
        {bars.map((h, i) => (
          <div
            key={i}
            className={'flex-1 rounded-sm ' + (i === bars.length - 2 ? 'bg-bronze' : 'bg-ink/85')}
            style={{ height: h + '%', opacity: 0.6 + (i / bars.length) * 0.4 }}
          />
        ))}
      </div>
    </div>
  );
}

function OptimizationMini() {
  // weekly cadence display
  const weeks = [
    { l: 'W1', val: '+8%',  pos: true },
    { l: 'W2', val: '+11%', pos: true },
    { l: 'W3', val: '-3%',  pos: false },
    { l: 'W4', val: '+17%', pos: true },
  ];
  return (
    <div className="bg-paper2 border border-line rounded-xl p-4 grid grid-cols-4 gap-2">
      {weeks.map((w, i) => (
        <div key={i} className="rounded-lg border border-line bg-card px-3 py-2.5">
          <div className="text-[11px] text-mute2">{w.l}</div>
          <div className={'text-[15px] font-medium num mt-0.5 ' + (w.pos ? 'text-teal' : 'text-bronze')}>
            {w.val}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============================== CORE GROWTH SYSTEMS ============================== */
function GrowthSystems() {
  const services = [
    {
      tag: 'Visibility',
      icon: L.Compass,
      title: 'AI Search & Local Visibility',
      blurb: 'Get found inside the answers — not just the rankings.',
      bullets: [
        'Google AI Overviews + ChatGPT / Perplexity surface',
        'Maps profile, photos, posts, category accuracy',
        'Review velocity + response system',
      ],
      outcome: 'You become the recommended choice, on every surface that matters.',
    },
    {
      tag: 'Conversion',
      icon: L.Target,
      title: 'Conversion Infrastructure',
      blurb: 'Sites and offers tuned to how locals actually decide.',
      bullets: [
        'Page architecture + objection-led copy',
        'Booking, quote, and call-capture flows',
        'Trust signals that match buying intent',
      ],
      outcome: 'More of your existing traffic turns into booked revenue.',
    },
    {
      tag: 'Acquisition',
      icon: L.Megaphone,
      title: 'AI-driven Ad System',
      blurb: 'Ad concepts built from evidence, not guesswork.',
      bullets: [
        'Competitor angle mining + offer testing',
        'Creative loop with weekly winners',
        'Channel-aware messaging (Meta, Google, YouTube)',
      ],
      outcome: 'A repeatable system that compounds, not one-off campaigns.',
    },
    {
      tag: 'Retention',
      icon: L.Repeat2,
      title: 'Automation & Follow-up',
      blurb: 'Every lead worked. Nothing forgotten.',
      bullets: [
        'Missed-call → text rescue, 60-second SLA',
        'Multi-channel nurture + booking reminders',
        'Review requests timed to peak moments',
      ],
      outcome: 'A bigger book of business from the same pipeline.',
    },
  ];

  return (
    <section id="services" className="relative pt-28 md:pt-36">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="mb-12 md:mb-14">
          <SectionLabel
            kicker="Core growth systems"
            title={<>Four systems we run end-to-end</>}
            sub="No fragmented vendors. No vague reporting. Each system has a clear owner, a clear input, and a clear revenue outcome."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={i}
                className="reveal group bg-card border border-line rounded-[22px] p-7 md:p-8 shadow-soft hover:shadow-card transition-all"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-bronze num">
                    {String(i + 1).padStart(2, '0')} · {s.tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-paper border border-line flex items-center justify-center group-hover:bg-bronze50 group-hover:border-bronze100 transition-colors">
                    <Icon className="w-5 h-5 text-ink" strokeWidth={1.6} />
                  </div>
                </div>

                <h3 className="mt-6 text-[24px] md:text-[26px] font-medium tracking-[-0.02em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] text-mute leading-[1.55]">{s.blurb}</p>

                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-[14.5px] text-ink/85">
                      <span className="mt-2 w-1 h-1 rounded-full bg-bronze flex-shrink-0" />
                      <span className="leading-[1.5]">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-line">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-mute2 mb-1.5">Outcome</div>
                  <div className="text-[15px] text-ink leading-[1.5]">{s.outcome}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================== COMPETITOR INTELLIGENCE ============================== */
function CompetitorIntel() {
  const inputs  = [
    { l: 'Active ads',     i: L.Megaphone },
    { l: 'Search rankings',i: L.Search    },
    { l: 'Reviews',        i: L.Star      },
    { l: 'Funnels',        i: L.Workflow  },
    { l: 'Offers',         i: L.Tag       },
    { l: 'Messaging',      i: L.MessageSquare },
  ];
  const outputs = [
    { l: 'Headline hooks',       i: L.Quote },
    { l: 'CTAs that convert',    i: L.MousePointerClick },
    { l: 'Positioning angles',   i: L.Compass },
    { l: 'Ad concepts',          i: L.Sparkles },
    { l: 'Growth opportunities', i: L.TrendingUp },
    { l: 'Counter-offers',       i: L.Shield },
  ];

  return (
    <section className="relative pt-28 md:pt-36">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="mb-12 md:mb-14">
          <SectionLabel
            kicker="Flagship system"
            title={<>Competitor Intelligence, <span className="serif text-bronze">turned into your edge.</span></>}
            sub="We continuously read what your top three competitors are doing — and convert their effort into clean, testable concepts you can deploy in days."
          />
        </div>

        <div className="reveal relative bg-card border border-line rounded-[28px] p-6 md:p-10 shadow-card overflow-hidden">
          {/* Hairline grid background */}
          <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.05fr_1fr] gap-6 lg:gap-10 items-stretch">
            {/* Inputs */}
            <DiagramColumn header="Inputs" sub="What we read · weekly" items={inputs} tone="ink" />

            {/* Engine */}
            <div className="flex flex-col items-center justify-center">
              <DiagramEngine />
            </div>

            {/* Outputs */}
            <DiagramColumn header="Outputs" sub="What you get · within 14d" items={outputs} tone="bronze" align="right" />
          </div>

          {/* Connection lines (decorative, desktop only) */}
          <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="flowA" x1="0" x2="1">
                <stop offset="0" stopColor="#1A1A1A" stopOpacity="0" />
                <stop offset="0.5" stopColor="#1F8FFF" stopOpacity="0.8" />
                <stop offset="1" stopColor="#1F8FFF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

function DiagramColumn({ header, sub, items, tone = 'ink', align = 'left' }) {
  const toneCls = {
    ink:    'border-line bg-paper2 text-ink',
    bronze: 'border-bronze100 bg-bronze50/40 text-ink',
  }[tone];
  return (
    <div>
      <div className={'mb-4 flex items-baseline justify-between ' + (align === 'right' ? 'lg:flex-row-reverse' : '')}>
        <div className={align === 'right' ? 'lg:text-right' : ''}>
          <div className="text-[11px] uppercase tracking-[0.18em] text-mute2">{header}</div>
          <div className="text-[14px] text-ink mt-1">{sub}</div>
        </div>
        <div className={'h-5 w-5 rounded-full flex items-center justify-center ' + (tone === 'bronze' ? 'bg-bronze' : 'bg-ink')}>
          {align === 'right'
            ? <L.ArrowLeft className="w-3 h-3 text-paper2" />
            : <L.ArrowRight className="w-3 h-3 text-paper2" />}
        </div>
      </div>
      <ul className="space-y-2">
        {items.map((it, i) => {
          const Icon = it.i;
          return (
            <li key={i} className={'flex items-center gap-3 px-4 py-3 rounded-xl border ' + toneCls + (align === 'right' ? ' flex-row-reverse text-right' : '')}>
              <div className="w-8 h-8 rounded-lg bg-card border border-line flex items-center justify-center">
                <Icon className="w-4 h-4 text-ink" strokeWidth={1.6} />
              </div>
              <div className="text-[14.5px] font-medium">{it.l}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function DiagramEngine() {
  const rings = [0, 1, 2];
  return (
    <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
      {rings.map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-bronze100"
          style={{
            inset: 20 + r * 24 + 'px',
            opacity: 0.4 + r * 0.2,
          }}
        />
      ))}
      <div className="relative w-32 h-32 rounded-full bg-ink text-paper2 flex flex-col items-center justify-center shadow-rise">
        <L.Cpu className="w-6 h-6 text-bronze mb-2" strokeWidth={1.6} />
        <div className="text-[13px] uppercase tracking-[0.18em]">Engine</div>
        <div className="text-[11px] text-mute2 mt-1">v3.2</div>
      </div>
      {/* corner labels */}
      <span className="absolute top-0 left-0 text-[10px] uppercase tracking-[0.16em] text-mute2">Read</span>
      <span className="absolute top-0 right-0 text-[10px] uppercase tracking-[0.16em] text-mute2">Classify</span>
      <span className="absolute bottom-0 left-0 text-[10px] uppercase tracking-[0.16em] text-mute2">Score</span>
      <span className="absolute bottom-0 right-0 text-[10px] uppercase tracking-[0.16em] text-mute2">Recommend</span>
    </div>
  );
}

/* ============================== AI AD SYSTEM ============================== */
function AdSystem() {
  const steps = [
    { l: 'Competitor data',     i: L.Radar },
    { l: 'Customer psychology', i: L.Brain },
    { l: 'Offer angles',        i: L.Tag },
    { l: 'Ad concepts',         i: L.Sparkles },
    { l: 'Landing copy',        i: L.FileText },
    { l: 'Testing & winners',   i: L.Trophy },
  ];

  return (
    <section className="relative pt-28 md:pt-36">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-end mb-12">
          <SectionLabel
            kicker="AI Ad System"
            title={<>Ads from evidence, <span className="serif text-bronze">not guesswork.</span></>}
          />
          <p className="reveal text-[16.5px] md:text-lg text-mute leading-[1.6] max-w-xl lg:justify-self-end">
            Every concept is rooted in something real — a competitor angle, a customer
            objection, a high-converting offer — so spend compounds instead of evaporating.
          </p>
        </div>

        {/* Flow */}
        <div className="reveal relative bg-card border border-line rounded-[24px] p-6 md:p-9 shadow-card overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {steps.map((s, i) => {
              const Icon = s.i;
              const last = i === steps.length - 1;
              return (
                <React.Fragment key={i}>
                  <div className="relative flex flex-col items-center text-center bg-paper2 border border-line rounded-xl px-3 py-5">
                    <div className="w-10 h-10 rounded-lg bg-card border border-line flex items-center justify-center">
                      <Icon className="w-5 h-5 text-ink" strokeWidth={1.6} />
                    </div>
                    <div className="mt-3 text-[13.5px] font-medium text-ink leading-tight">{s.l}</div>
                    <div className="mt-1 text-[11px] text-mute2 num">Step {String(i+1).padStart(2,'0')}</div>
                  </div>
                  {!last && (
                    <div className="hidden lg:flex absolute pointer-events-none" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Example sample ad concept */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { angle: 'Trust',     headline: 'The med spa with a 4.97 rating across 1,400 reviews', cta: 'See before & after' },
              { angle: 'Urgency',   headline: 'Limited spring openings · 6 spots this week',          cta: 'Reserve a free consult' },
              { angle: 'Authority', headline: 'Voted #1 in [City] for 3 years running',               cta: 'See the proof' },
            ].map((ad, i) => (
              <div key={i} className="rounded-xl border border-line bg-paper2 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-bronze">Sample · {ad.angle}</span>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-mute2">Example simulation</span>
                </div>
                <div className="text-[14px] font-medium text-ink leading-[1.4]">{ad.headline}</div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] text-ink bg-card border border-line rounded-full px-3 py-1.5">
                  {ad.cta} <L.ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { EdgeSystem, GrowthSystems, CompetitorIntel, AdSystem });
