import { useState } from 'react';
import data from './data';

const IG = 'https://www.instagram.com/karachi_football_league/';
const IG_POST = (id) => `${IG}p/${id}/`;
const FOURLEAGUE = 'https://web.4league.app/competition/663691bad783e111e798696b/matches';
const YOUTUBE = 'https://www.youtube.com/@KarachiFootballLeague';

const team = Object.fromEntries(data.teams.map((t) => [t.slug, t]));
const champion = data.teams[0];
const allMatches = data.matchdays.flatMap((d) => d.matches.map((m) => ({ ...m, md: d.md })));
const margin = (m) => Math.abs(m.score[0] - m.score[1]);
const biggestWin = allMatches.reduce((a, b) => (margin(b) > margin(a) ? b : a));
const goalFest = allMatches.reduce((a, b) => (b.score[0] + b.score[1] > a.score[0] + a.score[1] ? b : a));
const bestDefence = data.teams.reduce((a, b) => (b.ga < a.ga ? b : a));
const mostCards = data.teams.reduce((a, b) => (b.yc > a.yc ? b : a));
const finalDay = data.matchdays.at(-1).matches;

const fmtDate = (iso, opts = { weekday: 'short', day: 'numeric', month: 'short' }) =>
  new Date(iso).toLocaleDateString('en-GB', opts);
const fmtTime = (iso) => iso.slice(11, 16);
const ordinal = (n) => n + (['st', 'nd', 'rd'][n - 1] || 'th');
const fixture = (m) => `${team[m.home].name} ${m.score.join('–')} ${team[m.away].name}`;

const NAV = [
  ['Standings', '#standings'],
  ['Results', '#results'],
  ['Stats', '#stats'],
  ['Awards', '#awards'],
  ['Teams', '#teams'],
  ['Gallery', '#gallery'],
  ['Join', '#join'],
];

const ext = { target: '_blank', rel: 'noreferrer' };

function Crest({ slug, size = 'size-8' }) {
  const t = team[slug];
  return <img src={t.logo} alt={`${t.name} crest`} loading="lazy" width="80" height="80" className={`${size} shrink-0 rounded-full bg-white object-cover ring-1 ring-white/10`} />;
}

function Section({ id, title, aside, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="border-t border-line pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <h2 className="font-display text-4xl font-semibold leading-none tracking-[-0.02em] text-balance md:text-6xl">{title}</h2>
          {aside && <div className="text-sm text-muted">{aside}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}

const Icon = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className="size-4" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" />
    </svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className="size-3.5" aria-hidden="true">
      <path d="M7 5l12 7-12 7z" />
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="size-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  ),
};

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img src="/kfl-logo.png" alt="" width="40" height="40" className="size-10 rounded-full bg-white" />
          <span className="whitespace-nowrap font-display text-lg font-semibold leading-none">
            KFL<span className="hidden text-muted xl:inline"> · Karachi Football League</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-paper">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={IG} {...ext} className="hidden items-center gap-2 rounded-full bg-crimson px-4 py-2 text-sm font-medium transition-colors hover:bg-[#c81f36] sm:flex">
            {Icon.instagram} Instagram
          </a>
          <a href={YOUTUBE} {...ext} className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition-colors hover:border-white/50 sm:flex">
            {Icon.youtube} YouTube
          </a>
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-white/15 px-4 py-2 text-sm">Menu</summary>
            <nav className="absolute right-0 mt-2 flex w-48 flex-col rounded-xl border border-line bg-panel p-2 shadow-[0_16px_40px_-8px_#000]">
              {NAV.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => e.currentTarget.closest('details').removeAttribute('open')}
                  className="rounded-lg px-3 py-2.5 text-sm hover:bg-white/5"
                >
                  {label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

// Halfway line and centre circle, drawn to scale of a real pitch (circle r = 9.15m on a 68m-wide pitch).
function PitchLines() {
  return (
    <svg viewBox="0 0 1000 680" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 size-full text-white/[0.05]" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="500" y1="-10" x2="500" y2="690" />
        <circle cx="500" cy="340" r="137" />
        <circle cx="500" cy="340" r="3" fill="currentColor" />
      </g>
    </svg>
  );
}

function Ticker() {
  // rendered twice so the loop is seamless; the copy is hidden from assistive tech
  const items = (copy) => finalDay.map((m) => (
    <li key={copy + m.date + m.home} aria-hidden={copy ? 'true' : undefined} className="flex shrink-0 items-center gap-3 px-6">
      <Crest slug={m.home} size="size-5" />
      <span className="text-muted">{team[m.home].name}</span>
      <span className="num font-display font-semibold">{m.score.join(' – ')}</span>
      <span className="text-muted">{team[m.away].name}</span>
      <Crest slug={m.away} size="size-5" />
    </li>
  ));
  return (
    <div className="relative flex items-stretch border-t border-line bg-ink text-sm">
      <p className="z-10 flex shrink-0 items-center gap-2 border-r border-line bg-ink px-4 font-medium sm:px-6">
        <span className="size-1.5 rounded-full bg-crimson" aria-hidden="true" />
        Final day
      </p>
      <div className="ticker flex-1 overflow-hidden py-3.5">
        <ul className="ticker-track flex w-max">
          {items(0)}
          {items(1)}
        </ul>
      </div>
    </div>
  );
}

function Hero() {
  const t = data.totals;
  return (
    <section id="top" className="relative overflow-hidden bg-[#110a0b]">
      <PitchLines />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.03em] sm:text-7xl xl:text-8xl">
            Karachi’s first
            <br />
            football <span className="text-crimson">league.</span>
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-muted">
            Season 1 brought {t.teams} of the city’s sides to {data.venue}: {t.matches} matches and {t.goals} goals over nine weekends, from June to August 2024.
            Season 2 is next.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#standings" className="rounded-full bg-paper px-6 py-3 font-medium text-ink transition-colors hover:bg-white">
              See the final table
            </a>
            <a href="#join" className="rounded-full border border-white/20 px-6 py-3 font-medium transition-colors hover:border-white/50">
              Enter your team
            </a>
          </div>
        </div>

        <a href={IG_POST('C-iuE8iuawr')} {...ext} className="group relative block overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_#000]">
          <img src="/ig/1.jpg" alt="IoBM FC squad celebrating as Season 1 champions" width="640" height="640" className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/85 to-transparent p-6 pt-24">
            <div className="flex items-center gap-3">
              <Crest slug={champion.slug} size="size-11" />
              <div>
                <p className="text-sm font-medium text-amber">Season 1 champions</p>
                <p className="font-display text-3xl font-semibold leading-tight">{champion.name}</p>
              </div>
            </div>
            <p className="num mt-3 text-sm text-paper/70">
              {champion.pts} points, unbeaten in {champion.p}. {champion.gf} scored, {champion.ga} conceded.
            </p>
          </div>
        </a>
      </div>
      <Ticker />
    </section>
  );
}

const FORM_COLOR = { W: 'bg-emerald-600', D: 'bg-zinc-600', L: 'bg-crimson' };

function Standings() {
  return (
    <Section id="standings" title="Final table" aside="3 points for a win, 1 for a draw">
      <div className="overflow-hidden rounded-2xl border border-line bg-panel">
        <table className="num w-full text-sm">
          <thead className="text-left text-xs text-muted">
            <tr className="border-b border-line">
              <th className="py-4 pl-5 font-medium">
                <span className="sr-only">Position</span>
              </th>
              <th className="py-4 font-medium">Club</th>
              {['P', 'W', 'D', 'L', 'GF', 'GA', 'GD'].map((h) => (
                <th key={h} className={`px-2 py-4 text-center font-medium ${'WDLGFGA'.includes(h) ? 'hidden sm:table-cell' : ''}`}>{h}</th>
              ))}
              <th className="px-2 py-4 text-center font-medium text-paper">Pts</th>
              <th className="hidden py-4 pr-5 font-medium md:table-cell">Last 5</th>
            </tr>
          </thead>
          <tbody>
            {data.teams.map((t) => {
              const gd = t.gf - t.ga;
              return (
                <tr key={t.slug} className={`border-b border-line last:border-0 ${t.pos === 1 ? 'bg-amber/[0.06]' : 'transition-colors hover:bg-white/[0.025]'}`}>
                  <td className="w-12 py-3.5 pl-5">
                    <span className={`num text-sm font-semibold ${t.pos === 1 ? 'text-amber' : 'text-muted'}`}>{t.pos}</span>
                  </td>
                  <td className="py-3.5">
                    <div className="flex items-center gap-3">
                      <Crest slug={t.slug} />
                      <span className="font-medium">{t.name}</span>
                      {t.pos === 1 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className="size-4 text-amber" role="img" aria-label="Champions">
                          <path d="M8 4h8v5a4 4 0 01-8 0zM8 6H5a3 3 0 003 4M16 6h3a3 3 0 01-3 4M12 13v4M8 20h8M9 17h6" />
                        </svg>
                      )}
                    </div>
                  </td>
                  {[t.p, t.w, t.d, t.l, t.gf, t.ga].map((v, i) => (
                    <td key={i} className={`px-2 py-3.5 text-center text-muted ${i ? 'hidden sm:table-cell' : ''}`}>{v}</td>
                  ))}
                  <td className={`px-2 py-3.5 text-center ${gd > 0 ? 'text-emerald-400' : gd < 0 ? 'text-[#ff5a6e]' : 'text-muted'}`}>
                    {gd > 0 ? `+${gd}` : gd}
                  </td>
                  <td className="px-2 py-3.5 text-center font-display text-base font-semibold">{t.pts}</td>
                  <td className="hidden py-3.5 pr-5 md:table-cell">
                    <div className="flex gap-1" aria-label={`Last five: ${t.form.join(' ')}`}>
                      {t.form.map((r, i) => (
                        <span key={i} aria-hidden="true" className={`grid size-5 place-items-center rounded-[4px] text-[10px] font-bold text-white ${FORM_COLOR[r]}`}>{r}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function MatchCard({ m }) {
  const [h, a] = m.score;
  const side = (slug, goals, won) => (
    <div className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <Crest slug={slug} />
        <span className={`truncate ${won ? 'font-semibold' : 'text-muted'}`}>{team[slug].name}</span>
      </div>
      <span className={`num font-display text-xl font-semibold ${won ? '' : 'text-muted'}`}>{goals}</span>
    </div>
  );
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-line bg-panel p-5">
      <p className="text-xs text-muted">
        {fmtDate(m.date)} · {fmtTime(m.date)}
      </p>
      {side(m.home, h, h >= a)}
      {side(m.away, a, a >= h)}
      {m.video && (
        <a href={m.video} {...ext} className="mt-1 inline-flex w-fit items-center gap-1.5 text-xs font-medium text-amber hover:underline">
          {Icon.play} Watch the full match
        </a>
      )}
    </article>
  );
}

function Results() {
  const [md, setMd] = useState(data.matchdays.length);
  const day = data.matchdays[md - 1];
  return (
    <Section
      id="results"
      title="Results"
      aside={`${fmtDate(data.start, { day: 'numeric', month: 'long' })} – ${fmtDate(data.end, { day: 'numeric', month: 'long', year: 'numeric' })}`}
    >
      <div role="tablist" aria-label="Matchday" className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        {data.matchdays.map((d) => (
          <button
            key={d.md}
            role="tab"
            aria-selected={d.md === md}
            onClick={() => setMd(d.md)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${d.md === md ? 'bg-paper font-medium text-ink' : 'border border-white/15 text-muted hover:border-white/40 hover:text-paper'}`}
          >
            Matchday {d.md}
          </button>
        ))}
      </div>
      <div role="tabpanel" aria-label={`Matchday ${md}`} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {day.matches.map((m) => (
          <MatchCard key={m.date + m.home} m={m} />
        ))}
      </div>
      <p className="mt-6 text-sm text-muted">
        Lineups, scorers and cards for every match are on{' '}
        <a href={FOURLEAGUE} {...ext} className="text-paper underline">4League</a>.
      </p>
    </Section>
  );
}

function Leaderboard({ title, rows, stat, unit }) {
  const max = rows[0][stat];
  return (
    <div className="rounded-2xl border border-line bg-panel p-6">
      <h3 className="mb-5 font-display text-2xl font-semibold">{title}</h3>
      <ol className="space-y-3">
        {rows.map((p, i) => (
          <li key={p.name} className="grid grid-cols-[1.5rem_1fr_auto] items-center gap-3">
            <span className="num text-sm text-muted">{i + 1}</span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <Crest slug={p.team} size="size-5" />
                <span className="truncate font-medium">{p.name}</span>
                <span className="hidden truncate text-xs text-muted sm:inline">{team[p.team].name}</span>
              </div>
              <div className="mt-1.5 h-1 rounded-full bg-white/5">
                <div className={`h-full rounded-full ${i === 0 ? 'bg-amber' : 'bg-crimson/60'}`} style={{ width: `${(p[stat] / max) * 100}%` }} />
              </div>
            </div>
            <span className="num w-7 text-right font-display text-xl font-semibold" aria-label={`${p[stat]} ${unit}`}>{p[stat]}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Stats() {
  const records = [
    ['Best defence', bestDefence.name, `${bestDefence.ga} conceded in ${bestDefence.p} games`],
    ['Biggest win', fixture(biggestWin), `Matchday ${biggestWin.md}`],
    ['Most goals in a game', fixture(goalFest), `Matchday ${goalFest.md}`],
    ['Discipline', `${data.totals.yellow} yellow cards, ${data.totals.red} red`, `${mostCards.name} booked most often (${mostCards.yc})`],
  ];
  return (
    <Section id="stats" title="Stat leaders" aside="Players with 5+ goals or 3+ assists">
      <div className="grid gap-4 lg:grid-cols-2">
        <Leaderboard title="Goals" rows={data.scorers} stat="goals" unit="goals" />
        <Leaderboard title="Assists" rows={data.assists} stat="assists" unit="assists" />
      </div>
      <h3 className="mt-16 mb-2 font-display text-2xl font-semibold">Season records</h3>
      <dl className="divide-y divide-line border-y border-line">
        {records.map(([label, value, note]) => (
          <div key={label} className="grid gap-1 py-5 md:grid-cols-[14rem_1fr_auto] md:items-baseline md:gap-8">
            <dt className="text-sm text-muted">{label}</dt>
            <dd className="font-display text-xl font-semibold">{value}</dd>
            <dd className="text-sm text-muted">{note}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

const AWARDS = [
  { award: 'Golden Boot', name: 'Shaheryar Khan', team: 'iobm-fc', note: '12 goals, more than anyone', img: '/ig/6.jpg', post: 'C-snRtAIbWl' },
  { award: 'Most Valuable Player', name: 'Syed Uzair Zaidi', team: 'iobm-fc', note: '7 assists and 4 goals for the champions', img: '/ig/5.jpg', post: 'C-sulEsowC0' },
  { award: 'Golden Glove', name: 'Mutasim Khan', team: null, note: '4 clean sheets', img: '/ig/7.jpg', post: 'C-sY4DyoDrF' },
];

function Awards() {
  return (
    <Section id="awards" title="Season 1 awards">
      <div className="grid gap-x-4 gap-y-10 md:grid-cols-3">
        {AWARDS.map((a) => (
          <a key={a.award} href={IG_POST(a.post)} {...ext} className="group">
            <div className="overflow-hidden rounded-2xl">
              <img src={a.img} alt={`${a.name}, ${a.award}`} loading="lazy" width="640" height="640" className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
            </div>
            <p className="mt-5 text-sm font-medium text-amber">{a.award}</p>
            <p className="mt-1 font-display text-2xl font-semibold">{a.name}</p>
            <p className="mt-1 text-sm text-muted">
              {a.note}
              {a.team && ` · ${team[a.team].name}`}
            </p>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Teams() {
  return (
    <Section id="teams" title="The ten clubs">
      <ul className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {data.teams.map((t) => (
          <li key={t.slug} className="flex flex-col items-center text-center">
            <Crest slug={t.slug} size="size-24" />
            <p className="mt-4 font-display text-lg font-semibold leading-tight">{t.name}</p>
            <p className="num mt-1 text-sm text-muted">
              {t.pos === 1 ? <span className="text-amber">Champions</span> : ordinal(t.pos)} · {t.pts} pts
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

// [instagram post id, image in /public/ig, alt]
const GALLERY = [
  ['C-iuE8iuawr', 1, 'IoBM FC, Season 1 champions'],
  ['C-kjR92IB_j', 9, 'Titans FC, runners-up'],
  ['C-zi_o4tiKC', 2, 'Season 1 top assists'],
  ['C-xbUZeou6K', 3, 'Season 1 top scorers'],
  ['C-k9B7jIkZN', 8, 'Final KFL league table'],
  ['C-igQp-oRPD', 10, 'Matchday 9: FC Spartans 1–2 IoBM'],
  ['C-hur6jokUS', 11, 'Matchday 9: FAST NUCES 0–3 FC Rizvia'],
  ['C-hunQzorM_', 12, 'Matchday 9: FC Folio3 2–2 Berzerk FC'],
];

function Gallery() {
  return (
    <Section
      id="gallery"
      title="On Instagram"
      aside={
        <a href={IG} {...ext} className="inline-flex items-center gap-1.5 text-paper hover:underline">
          @karachi_football_league {Icon.arrow}
        </a>
      }
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {GALLERY.map(([id, file, alt]) => (
          <a key={id} href={IG_POST(id)} {...ext} className="group overflow-hidden rounded-xl">
            <img src={`/ig/${file}.jpg`} alt={alt} loading="lazy" width="640" height="640" className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
          </a>
        ))}
      </div>
    </Section>
  );
}

const STEPS = [
  ['Message us', 'Send your team name, manager details and a contact number by Instagram DM.'],
  ['Submit your squad', 'Share player names and positions. Every player must meet the league’s eligibility criteria.'],
  ['Get verified', 'Send player IDs and a team photo so we can approve the squad.'],
  ['Kick off', 'Confirmed teams get the fixture list on 4League, with scores and stats live every matchday.'],
];

const FAQS = [
  ['How do I register my team?', 'Message @karachi_football_league on Instagram. We’ll send the registration form and take you through the steps.'],
  ['What are the eligibility requirements?', 'Players must meet the age and residency requirements set by the league and provide valid identification.'],
  ['Is there a registration fee?', 'Yes, a nominal fee per team. We share the details during registration.'],
  ['Where can I follow fixtures and live scores?', 'Every match, score, scorer and card is tracked on the 4League app. Follow “Karachi Football League Official”.'],
  ['Where are matches played?', `Season 1 was played at ${data.venue}, Karachi, with evening kick-offs on Fridays, Saturdays and Sundays.`],
];

function Join() {
  return (
    <Section id="join" title="Enter a team for Season 2">
      <ol className="grid border-t border-line md:grid-cols-4">
        {STEPS.map(([title, body], i) => (
          <li key={title} className="border-b border-line py-6 md:border-b-0 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0">
            <p className="num text-sm text-crimson">Step {i + 1}</p>
            <h3 className="mt-2 font-display text-xl font-semibold">{title}</h3>
            <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-muted">{body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col justify-between rounded-2xl bg-crimson p-8">
          <div>
            <h3 className="font-display text-3xl font-semibold leading-tight">Registration is by DM</h3>
            <p className="mt-3 max-w-[40ch] text-white/85">Send us your team name and we’ll reply with the form and the fee for Season 2.</p>
          </div>
          <a href="https://ig.me/m/karachi_football_league" {...ext} className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-ink transition-colors hover:bg-paper">
            {Icon.instagram} Message KFL
          </a>
        </div>
        <div className="divide-y divide-line rounded-2xl border border-line bg-panel px-6">
          {FAQS.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {q}
                {Icon.plus}
              </summary>
              <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img src="/kfl-logo.png" alt="" width="56" height="56" className="size-14 rounded-full bg-white" />
          <div>
            <p className="font-display text-xl font-semibold">Karachi Football League</p>
            <p className="text-sm text-muted">Where the top football teams from all over Karachi come to compete.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-paper">{label}</a>
          ))}
          <a href={IG} {...ext} className="hover:text-paper">Instagram</a>
          <a href={YOUTUBE} {...ext} className="hover:text-paper">YouTube</a>
          <a href={FOURLEAGUE} {...ext} className="hover:text-paper">4League</a>
        </div>
      </div>
      <p className="border-t border-line py-6 text-center text-xs text-muted">© {new Date().getFullYear()} Karachi Football League</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a href="#standings" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-paper focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Standings />
        <Results />
        <Stats />
        <Awards />
        <Teams />
        <Gallery />
        <Join />
      </main>
      <Footer />
    </>
  );
}
