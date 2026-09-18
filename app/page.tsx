import Link from "next/link";
import SiteHeader from "./site-header";
import { FRONT_DOOR } from "./site";

const roles = [
  {
    n: "01",
    role: "EMPLOYEE",
    headline: "Learn, build, and apply",
    body: "Get access to approved tools, build something real in IGNITE — our two-day hands-on workshop — and take it further when you are ready.",
    href: "#academy-employees",
  },
  {
    n: "02",
    role: "MANAGER",
    headline: "Help the team move",
    body: "Support responsible experimentation, avoid a pilot graveyard, and redesign work without losing judgment.",
    href: "#academy-managers",
  },
  {
    n: "03",
    role: "LEADER",
    headline: "Set the conditions",
    body: "See where AI is helping and where it is not, decide what gets funded, and match support to the scope.",
    href: "#academy-leaders",
  },
];

const commitments = [
  { n: "01", name: "Build Workforce Capability", question: "Can people apply AI to real work and judge what comes back?" },
  { n: "02", name: "Keep Ownership Close to the Work", question: "Can the business solve problems where they are best understood?" },
  { n: "03", name: "Make Responsible Action Easier", question: "Can someone get help without navigating the organization alone?" },
  { n: "04", name: "Learn From the Business", question: "What are people across the organization actually trying to improve?" },
  { n: "05", name: "Grow Shared Value", question: "Where can shared support create value beyond one team?" },
];

const priorities = [
  { name: "Organic Growth", outcome: "Better prepared customer conversations and faster concept development." },
  { name: "80/20 Front-to-Back", outcome: "Faster decisions about where to focus." },
  { name: "Customer-Back Innovation", outcome: "Clearer customer needs, validated sooner." },
  { name: "Operational Excellence", outcome: "Less manual work slowing teams down." },
];

const operatingMoves = [
  { n: "01", verb: "LEARN", title: "Build confidence and know the ecosystem", description: "Use the Academy to understand the tools, policy, responsibilities, and support available. People should know how to begin without guessing.", output: "Employees ready to use AI effectively and responsibly." },
  { n: "02", verb: "BUILD", title: "Solve work where you see value", description: "Individuals, teams, and business units build at the level that fits the need. Not every useful solution must become an enterprise project.", output: "Useful local solutions with clear ownership." },
  { n: "03", verb: "SUPPORT", title: "Bring in help as consequence grows", description: "AI Enablement helps navigate tools, IT, Legal, policy, and approved platforms. Enterprise applications, sensitive information, and consequential actions receive greater scrutiny.", output: "A responsible way forward—not a reflexive no." },
  { n: "04", verb: "SHARE", title: "Grow what can help others", description: "When the same need appears across teams or business units, treat it as a signal. Provide shared support or broader investment when the value justifies it.", output: "Shared value without centralizing ownership." },
];

const lanes = [
  { id: "LANE 01", name: "Personal productivity", body: "One person uses an approved tool on work they already own, and reviews the output before it is used." },
  { id: "LANE 02", name: "Shared team use", body: "A team reuses the same skill, template or workflow. A named owner keeps it current, and the team still runs the process." },
  { id: "LANE 03", name: "Connected workflow", body: "The work reaches approved systems and updates existing records, never creating or deleting. Permissions, testing and a named owner come with it." },
  { id: "LANE 04", name: "Enterprise system", body: "Multiple teams depend on it, so architecture, security, data, operating ownership and funded support are explicit." },
];

const ACADEMY = [
  {
    tier: "Employees",
    tagline: "Do the work differently",
    courses: [
      { name: "AI Tools and Updates", meta: "90 minutes", line: "What's new, what works, and what you asked for. At meetings and conferences." },
      { name: "IGNITE", meta: "Two days · hands-on", line: "Build for your own work, then turn it into something your team reuses." },
      { name: "Building AI Agents", meta: "One day · online pre-work", line: "Connect an agent to approved systems. Agent Basics online comes first." },
    ],
  },
  {
    tier: "Managers",
    tagline: "Own the work and the people doing it",
    courses: [
      { name: "Leading AI Adoption", meta: "90 minutes", line: "Help your team move confidently without creating a pilot graveyard." },
      { name: "Redesigning Work with AI", meta: "One day · bring a workflow", line: "Change the workflow without losing judgment, expertise or accountability." },
    ],
  },
  {
    tier: "Leaders",
    tagline: "Set the conditions",
    courses: [
      { name: "The Enterprise AI Update", meta: "Annual leadership meeting", line: "Wins, losses, cost, what's coming, and what regulation now requires." },
      { name: "AI-Driven Leadership", meta: "Half day · three modules", line: "Accelerating the ITW Business Model: operational strategy, economics, capital allocation." },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="overview">
        <div className="hero-copy">
          <p className="eyebrow">A WORKING ENTERPRISE STRATEGY FOR MILLER</p>
          <h1>ENTERPRISE AI<br />ENABLEMENT</h1>
          <p className="hero-thesis">Enterprise AI Enablement gives people the skills, tools, and support to use AI responsibly, improve their work, and move good ideas forward.</p>
          <p className="hero-promise">Build capability. <strong>Keep ownership close to the work.</strong> Make responsible action easier.</p>
          <a className="hero-cta" href="#start">FIND WHERE YOU FIT <span>→</span></a>
        </div>
        <div className="hero-angle" aria-hidden="true"><span /><span /></div>
      </section>

      <section className="manual-section next-section" id="start">
        <div className="section-heading">
          <div><p className="section-kicker">START HERE</p><h2>WHERE YOU FIT</h2></div>
          <p>Choose the responsibility closest to your role.</p>
        </div>
        <div className="journey-grid">
          {roles.map((item) => (
            <a key={item.n} href={item.href}>
              <span>{item.n} / {item.role}</span>
              <strong>{item.headline}</strong>
              <p>{item.body}</p>
              <em>SEE THE PATH →</em>
            </a>
          ))}
        </div>
      </section>

      <section className="manual-section strategy-section" id="direction">
        <div className="section-heading">
          <div><p className="section-kicker">THE DIRECTION</p><h2>FIVE COMMITMENTS FOR ENTERPRISE AI ENABLEMENT</h2></div>
          <p>These commitments work together; they are not gates people must pass. Governance helps people act with confidence. Additional review follows consequence, not curiosity.</p>
        </div>
        <div className="pillar-grid">
          {commitments.map((item) => (
            <article className="pillar" key={item.n}>
              <span className="pillar-number">{item.n}</span>
              <strong>{item.name}</strong>
              <small>{item.question}</small>
            </article>
          ))}
        </div>
        <div className="priorities">
          <div className="priorities-head">
            <p className="section-kicker">WHERE AI HELPS US</p>
            <p>An idea deserves attention when it connects to a priority that already drives the business.</p>
          </div>
          <div className="priority-list">
            {priorities.map((item) => <div className="priority" key={item.name}><strong>{item.name}</strong><p>{item.outcome}</p></div>)}
          </div>
        </div>
        <Link className="strategy-depth-link" href="/ecosystem">SEE HOW OWNERSHIP, SUPPORT, AND EVIDENCE WORK TOGETHER →</Link>
      </section>

      <section className="manual-section operating-section" id="operating">
        <div className="section-heading">
          <div><p className="section-kicker">HOW THE WORK MOVES</p><h2>FROM LEARNING TO SHARED VALUE</h2></div>
          <p>People can enter from different places. This is a simple way to understand how learning, local action, support, and shared value connect.</p>
        </div>
        <div className="operating-grid">
          {operatingMoves.map((move) => (
            <article className="operating-move" key={move.n}>
              <div className="move-head"><span>{move.n}</span><b>{move.verb}</b></div>
              <h3>{move.title}</h3>
              <p>{move.description}</p>
              <p className="move-output">{move.output}</p>
            </article>
          ))}
        </div>
        <div className="next-decision"><div><p className="detail-label">THE ENABLEMENT POSTURE</p><h3>Make it easier for people to learn, build, and get responsible help.</h3></div><p>Useful work can remain personal, support a team, or stay inside a business unit. When the same need appears across the organization, that is a signal for shared support.</p></div>
      </section>

      <section className="manual-section lanes-section" id="lanes">
        <div className="section-heading">
          <div><p className="section-kicker">HOW WE DECIDE</p><h2>FOUR OPERATING LANES</h2></div>
          <p>Three things set the lane: what data the work touches, what it is allowed to do on its own, and how many people depend on it. Lanes are operating choices, not maturity levels. Work can stay in any lane.</p>
        </div>
        <div className="lanes">
          {lanes.map((lane) => (
            <div className="lane" key={lane.id}>
              <span className="id">{lane.id}</span>
              <h3>{lane.name}</h3>
              <p>{lane.body}</p>
            </div>
          ))}
        </div>
        <p className="lane-note">Builders and IT: lane 4 splits into <strong>4A low-code</strong> and <strong>4B pro-code</strong>. They differ in what the build may do on its own, whose credentials it runs under, and what it depends on. The full build view is in progress.</p>
      </section>

      <section className="manual-section academy-section" id="academy">
        <div className="section-heading">
          <div><p className="section-kicker">THE AI ACADEMY</p><h2>TURN THE STRATEGY INTO CAPABILITY</h2></div>
          <p>Mostly in-person sessions built on ITW&rsquo;s own work. No polished idea, business case or prior coding experience is required to start.</p>
        </div>
        <div className="academy-tiers">
          {ACADEMY.map((tier) => (
            <div className="academy-tier" key={tier.tier} id={`academy-${tier.tier.toLowerCase()}`}>
              <div className="tier-label"><strong>{tier.tier}</strong><span>{tier.tagline}</span></div>
              <div className="tier-courses">
                {tier.courses.map((course) => (
                  <article className="tier-course" key={course.name}>
                    <small>{course.meta}</small>
                    <h3>{course.name}</h3>
                    <p>{course.line}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link className="academy-full-link" href="/academy">EXPLORE ALL ACADEMY EXPERIENCES, AGENDAS, AND OUTCOMES →</Link>
      </section>

      <section className="manual-section closing-section" id="bring-work-forward">
        <p className="section-kicker">BRING WORK FORWARD</p>
        <h2>START WITH THE WORK, NOT THE TOOL</h2>
        <p>Have a problem worth solving, or a build that has outgrown your laptop? We will help you find the right lane, the right owner, and the support the scope requires.</p>
        <a className="button button-blue" href={FRONT_DOOR}>BRING IT FORWARD →</a>
      </section>

      <footer><div className="brand footer-brand"><span className="brand-copy"><img className="brand-logo" src="/miller-logo-white.png" alt="Miller" /><small>ENTERPRISE AI ENABLEMENT</small></span></div><p>Understand the work. Protect the craft. Build what survives.</p><a href="#overview">BACK TO TOP ↑</a></footer>
    </main>
  );
}
