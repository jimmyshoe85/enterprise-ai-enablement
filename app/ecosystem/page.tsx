import Link from "next/link";
import "./ecosystem.css";

const ownership = {
  business: ["The problem to solve", "The workflow and people affected", "The outcome and value created", "Adoption inside the business"],
  enablement: ["Learning and approved tools", "One clear place to get help", "Coordination across policy, IT, and Legal", "Shared support when the need becomes broader"],
};

const supportLevels = [
  { n: "01", title: "Keep it close", description: "Personal and team solutions can remain local when that is where the value lives and no shared infrastructure is required." },
  { n: "02", title: "Bring in support", description: "Support increases when the same need appears across groups, the work touches enterprise systems or data, or the consequence of action grows." },
  { n: "03", title: "Invest selectively", description: "Broader investment follows a repeated need, clear ownership, and evidence that a shared capability can create value across the organization." },
];

const evidence = [
  { label: "PERSONAL OR LOCAL", title: "Learning is enough", description: "A useful local solution does not need an enterprise business case. The owner remains responsible for using it appropriately." },
  { label: "BUSINESS-UNIT SOLUTION", title: "Name the outcome", description: "The business unit owns the problem, the expected improvement, the workflow, and the decision to adopt the solution." },
  { label: "SHARED INVESTMENT", title: "Evidence grows with investment", description: "Enterprise funding and support require a clear owner, a defined need, observable value, and confidence that the capability can operate responsibly." },
];

export default function EcosystemPage() {
  return (
    <div className="ecosystem-page">
      <header className="topbar ecosystem-topbar">
        <Link className="brand" href="/" aria-label="Enterprise AI Enablement home">
          <span className="brand-copy"><img className="brand-logo" src="/miller-logo-white.png" alt="Miller" /><small>ENTERPRISE AI ENABLEMENT</small></span>
        </Link>
        <nav className="topnav" aria-label="Ecosystem navigation">
          <Link href="/">Overview</Link>
          <Link href="/#strategy">Strategy</Link>
          <Link className="current" href="/ecosystem">How it works</Link>
          <Link href="/academy">AI Academy</Link>
          <Link href="/#library">Resources</Link>
        </nav>
        <div className="edition">INTERNAL WORKING VIEW<br /><strong>NOT FOR DISTRIBUTION</strong></div>
      </header>

      <main>
        <section className="ecosystem-hero">
          <div className="ecosystem-hero-copy">
            <p className="eyebrow">HOW THE ECOSYSTEM WORKS</p>
            <h1>THE BUSINESS OWNS THE WORK.<br /><span>THE ECOSYSTEM HELPS IT MOVE.</span></h1>
            <p>This is the operating model behind Enterprise AI Enablement: decentralized ownership, one front door for support, and additional review when reach, systems, or consequence grow.</p>
            <a href="#ownership">SEE THE OPERATING MODEL <span>→</span></a>
          </div>
          <div className="ecosystem-hero-angle" aria-hidden="true"><span /></div>
        </section>

        <section className="ecosystem-section ownership-section" id="ownership">
          <div className="ecosystem-heading">
            <div><p className="section-kicker">01 / OWNERSHIP</p><h2>OWNERSHIP STAYS CLOSE TO THE WORK</h2></div>
            <p>Enterprise AI Enablement creates the conditions for responsible action. It does not become the owner of every idea, workflow, or result.</p>
          </div>
          <div className="ownership-model">
            <article>
              <span>THE BUSINESS OWNS</span>
              <ul>{ownership.business.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className="enablement-side">
              <span>AI ENABLEMENT PROVIDES</span>
              <ul>{ownership.enablement.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
          <div className="ecosystem-principle"><strong>The ecosystem enables the work. It does not take the work away.</strong></div>
        </section>

        <section className="ecosystem-section support-section">
          <div className="ecosystem-heading">
            <div><p className="section-kicker">02 / CONSEQUENCE-BASED SUPPORT</p><h2>SUPPORT GROWS WITH THE NEED</h2></div>
            <p>These are not gates every idea must pass. They describe how the level of support changes as the work reaches farther into the organization.</p>
          </div>
          <div className="support-levels">
            {supportLevels.map((level) => <article key={level.n}><span>{level.n}</span><h3>{level.title}</h3><p>{level.description}</p></article>)}
          </div>
          <div className="consequence-line"><strong>START WITH HOW IT CAN WORK RESPONSIBLY.</strong><span>Additional review follows consequence—not curiosity.</span></div>
        </section>

        <section className="ecosystem-section front-door-section">
          <div className="ecosystem-heading">
            <div><p className="section-kicker">03 / ONE FRONT DOOR</p><h2>THE EMPLOYEE ASKS ONCE</h2></div>
            <p>Employees and business units should not have to navigate the organization to understand what is possible or how to proceed.</p>
          </div>
          <div className="front-door-flow">
            <article><span>01</span><strong>BRING THE QUESTION</strong><p>“How can we make this work?”</p></article>
            <b>→</b>
            <article className="front-door-center"><span>02</span><strong>AI ENABLEMENT COORDINATES</strong><p>Tools, policy, IT, Legal, and approved platforms.</p></article>
            <b>→</b>
            <article><span>03</span><strong>GET A PATH FORWARD</strong><p>The right support, ownership, and review for the need.</p></article>
          </div>
        </section>

        <section className="ecosystem-section shared-section">
          <div className="ecosystem-heading">
            <div><p className="section-kicker">04 / SHARED CAPABILITY</p><h2>REPEATED NEEDS CHANGE THE ENTERPRISE RESPONSE</h2></div>
            <p>A repeated need is a signal for shared support—not a reason to centralize the business-unit projects that revealed it.</p>
          </div>
          <div className="shared-example">
            <div className="shared-needs">
              <article><span>EDUCATION GROUP</span><strong>Grant outreach and school engagement</strong></article>
              <article><span>SALES TEAM</span><strong>Easier CRM updates while traveling</strong></article>
            </div>
            <div className="shared-signal"><small>THE SHARED NEED</small><h3>RESPONSIBLE ACCESS TO THE CRM</h3><p>The enterprise can provide an approved, reusable connection and common support. Each business unit keeps ownership of its own use case and outcome.</p></div>
          </div>
        </section>

        <section className="ecosystem-section evidence-expectations">
          <div className="ecosystem-heading">
            <div><p className="section-kicker">05 / EVIDENCE EXPECTATIONS</p><h2>EVIDENCE GROWS WITH INVESTMENT</h2></div>
            <p>Experimentation should be easy to begin. Larger commitments require clearer ownership and stronger evidence that the investment can create responsible value.</p>
          </div>
          <div className="evidence-levels">
            {evidence.map((item, index) => <article key={item.label}><span>{String(index + 1).padStart(2, "0")} / {item.label}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
        </section>

        <section className="ecosystem-close">
          <p className="section-kicker">THE LEADERSHIP RESPONSIBILITY</p>
          <h2>CREATE THE CONDITIONS FOR PEOPLE TO MOVE.</h2>
          <p>Build capability, keep ownership clear, make support easy to navigate, and invest when repeated needs reveal broader value.</p>
          <div><Link href="/">RETURN TO THE STRATEGY →</Link><Link href="/academy">EXPLORE THE AI ACADEMY →</Link></div>
        </section>
      </main>

      <footer className="ecosystem-footer"><div><strong>ENTERPRISE AI ENABLEMENT</strong><p>Build capability. Keep ownership close to the work. Make responsible action easier.</p></div><Link href="/">RETURN TO OVERVIEW →</Link></footer>
    </div>
  );
}