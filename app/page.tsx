"use client";

import { FormEvent, useMemo, useState } from "react";
import { documents } from "./data";
import { academySummaries } from "./academy/catalog";

const pillars = [
  {
    n: "01",
    name: "Build Workforce Capability",
    question: "Can people use AI effectively and responsibly?",
    summary: "Give employees practical learning, approved tools, clear policy, and the confidence to build. Capability is the foundation of the strategy—not the final change-management step.",
    output: "A workforce that can learn, build, and exercise judgment.",
  },
  {
    n: "02",
    name: "Keep Ownership Close to the Work",
    question: "Can the business solve problems where they are best understood?",
    summary: "Individuals and business units own their work, ideas, and solutions. Enterprise AI Enablement provides the ecosystem and support without taking ownership away from the people accountable for the result.",
    output: "Useful solutions owned by the people closest to the value.",
  },
  {
    n: "03",
    name: "Make Responsible Action Easier",
    question: "Can someone get help without navigating the organization alone?",
    summary: "Create one clear front door for tools, policy, IT, Legal, and build support. Begin with how an idea can move responsibly; increase review when reach, data, systems, or consequence increase.",
    output: "A responsible path forward instead of a reflexive no.",
  },
  {
    n: "04",
    name: "Learn From the Business",
    question: "What are people across the organization trying to improve?",
    summary: "Employee experiments, business-unit priorities, executive initiatives, and outside ideas all create signals. Listening across the business reveals repeated needs and opportunities no central plan could see on its own.",
    output: "A bottom-up view of emerging needs and enterprise opportunity.",
  },
  {
    n: "05",
    name: "Grow Shared Value",
    question: "Where can shared support create broader value?",
    summary: "A useful solution can stay personal, help a team, or remain inside a business unit. When the same need appears across the organization, provide shared support and invest selectively using 80/20 discipline.",
    output: "The right support at the right level—without forcing every idea to scale.",
  },
];
const academy = academySummaries;

const terms = [
  ["Golden Stake", "A four-part legitimacy test: baseline, claim, boundary, and the condition that makes a project not worth continuing."],
  ["QUEST", "Five questions for finding value in the work, systems, queues, edges, and human agency around the technology."],
  ["Think · Build · Check", "Think writes the test. Build does the work. Check runs the test—keeping speed connected to intent and evidence."],
  ["Intelligence Layer", "The capability connecting intent, context, source authority, user authority, output format, and the next handoff."],
  ["Autonomy Ladder", "A progression from answer-only to bounded autonomous action. Higher authority requires stronger approval, audit, and escalation."],
  ["The Craft Current", "The people-and-work thread beneath every stage: understand what expertise holds the operation together before changing it."],
];

const operatingMoves = [
  { n: "01", verb: "LEARN", title: "Build confidence and know the ecosystem", description: "Use the Academy to understand the tools, policy, responsibilities, and support available. People should know how to begin without guessing.", output: "Employees ready to use AI effectively and responsibly." },
  { n: "02", verb: "BUILD", title: "Solve work where you see value", description: "Individuals, teams, and business units build at the level that fits the need. Not every useful solution must become an enterprise project.", output: "Useful local solutions with clear ownership." },
  { n: "03", verb: "SUPPORT", title: "Bring in help as consequence grows", description: "AI Enablement helps navigate tools, IT, Legal, policy, and approved platforms. Enterprise applications, sensitive information, and consequential actions receive greater scrutiny.", output: "A responsible way forward—not a reflexive no." },
  { n: "04", verb: "SHARE", title: "Grow what can help others", description: "When the same need appears across teams or business units, treat it as a signal. Provide shared support or broader investment when the value justifies it.", output: "Shared value without centralizing ownership." },
];

const essentialAssets = [
  { source: "RampStack System Map", title: "Enterprise AI System Map", stage: "STRATEGY", decision: "See how value, readiness, build discipline, governance, and capability connect." },
  { source: "QUEST White Paper", title: "QUEST", stage: "VALUE", decision: "Find enterprise value in the work, queues, edges, systems, and human agency around the model." },
  { source: "The Golden Stake Field Guide", title: "The Golden Stake", stage: "LEGITIMACY", decision: "Test the baseline, claim, boundary, and stop condition before committing time or money." },
  { source: "04 Intelligence Layer Engagement Playbook", title: "Work Engagement Playbook", stage: "DISCOVERY", decision: "Observe real work and surface the judgment and exceptions a process map misses." },
  { source: "10 AI Readiness Scoring Rubric", title: "AI Readiness Scoring Rubric", stage: "READINESS", decision: "Score whether a workflow has the context, authority, evidence, and operating conditions to proceed." },
  { source: "Agent Project Playbook", title: "Agent Project Playbook", stage: "BOUNDED BUILD", decision: "Specify authority, tools, memory, evaluation, approvals, and escalation before deployment." },
  { source: "AI Readiness One Day Workshop", title: "AI Readiness", stage: "CAPABILITY", decision: "Give employees a safe, practical foundation and a personal starting point." },
  { source: "Executive Training Syllabus V2", title: "Enterprise Automation Syllabus", stage: "OPERATIONS", decision: "Turn repeatable work into secure workspaces, reusable skills, and operational dashboards." },
];

const collectionFor = (category: string) => {
  if (["Foundation", "Leadership"].includes(category)) return "Strategy & Value";
  if (["Workflow Redesign", "Intelligence Layer"].includes(category)) return "Work & Readiness";
  if (["Agent Build", "Agent Orchestration", "Memory Architecture", "Build Methods"].includes(category)) return "Build & Operate";
  if (category === "AI Academy") return "Academy & Adoption";
  return "Research & Archive";
};

const displayTitle = (title: string) => title
  .replace(/^RampStack\s+/i, "")
  .replace(/^\d+\s+/, "")
  .replace(/\s+\(\d+\)$/, "");

const displayStatus = (status: string) => status === "Current" ? "Working" : status;
const categories = ["All", "Strategy & Value", "Work & Readiness", "Build & Operate", "Academy & Adoption", "Research & Archive"];


export default function Home() {
  const [pillar, setPillar] = useState(0);
  const [audience, setAudience] = useState("Employees");
  const [courseId, setCourseId] = useState("readiness");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(12);

  const courses = academy[audience];
  const course = courses.find((item) => item.id === courseId) || courses[0];
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return documents.filter((doc) => {
      const categoryMatch = category === "All" || collectionFor(doc.category) === category;
      const textMatch = !needle || [doc.title, doc.category, collectionFor(doc.category), doc.audience, doc.brief].join(" ").toLowerCase().includes(needle);
      return categoryMatch && textMatch;
    });
  }, [category, query]);

  function chooseAudience(name: string) {
    setAudience(name);
    setCourseId(academy[name][0].id);
  }

  function submitSearch(event: FormEvent) {
    event.preventDefault();
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#overview" aria-label="Enterprise AI Enablement home">
          <span className="brand-copy"><img className="brand-logo" src="/miller-logo-white.png" alt="Miller" /><small>ENTERPRISE AI ENABLEMENT</small></span>
        </a>
        <nav className="topnav" aria-label="Primary navigation">
          <a href="#strategy">Strategy</a><a href="#operating">Operating plan</a><a href="/academy">AI Academy</a><a href="#evidence">Evidence</a>
        </nav>
        <form className="header-search" onSubmit={submitSearch}>
          <label className="sr-only" htmlFor="header-search">Search 117 working sources</label>
          <input id="header-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${documents.length} working sources…`} />
          <button type="submit" aria-label="Go to matching sources">GO</button>
        </form>
        <div className="edition">INTERNAL WORKING VIEW<br /><strong>NOT FOR DISTRIBUTION</strong></div>
      </header>

      <section className="hero" id="overview">
        <div className="hero-copy">
          <p className="eyebrow">A WORKING ENTERPRISE STRATEGY FOR MILLER</p>
          <h1>ENTERPRISE AI<br />ENABLEMENT</h1>
          <p className="hero-thesis">Enterprise AI Enablement gives people the skills, tools, and support to use AI responsibly, improve their work, and move good ideas forward.</p>
          <p className="hero-promise">Build capability. <strong>Keep ownership close to the work.</strong> Make responsible action easier.</p>
        </div>
        <div className="hero-orientation">
          <div>
            <span className="white-rule" />
            <p className="hero-panel-label">WHAT IS READY NOW</p>
            <h2>THE STRUCTURE<br />EXISTS</h2>
            <ul className="ready-list">
              <li><strong>05</strong><span>commitments for enterprise enablement</span></li>
              <li><strong>04</strong><span>ways people move from learning to shared value</span></li>
              <li><strong>03</strong><span>Academy audiences with practical outcomes</span></li>
              <li><strong>{documents.length}</strong><span>working sources, tools, and research records</span></li>
            </ul>
            <a className="button button-light" href="#strategy">SEE THE STRATEGY →</a>
          </div>
        </div>
      </section>

      <section className="orientation" aria-label="Start here">
        <div className="orientation-title"><strong>START HERE</strong><span>The shortest path through the work</span></div>
        <a href="#strategy"><b>01</b><span><strong>SEE THE DIRECTION</strong>Five commitments for enterprise enablement</span></a>
        <a href="#operating"><b>02</b><span><strong>SEE THE PLAN</strong>Learn, build, get support, share what works</span></a>
        <a href="#next"><b>03</b><span><strong>FIND YOUR ENTRY</strong>Choose the responsibility closest to yours</span></a>
      </section>

      <div className="manual-shell">
        <aside className="field-index">
          <h2>WORKING INDEX</h2>
          <nav aria-label="Dashboard sections">
            <a href="#strategy"><span>01</span>Enterprise strategy</a>
            <a href="#operating"><span>02</span>Operating plan</a>
            <a href="#next"><span>03</span>Where you fit</a>
            <a href="#academy"><span>04</span>AI Academy</a>
            <a href="#evidence"><span>05</span>Essential assets</a>
            <a href="#library"><span>06</span>Full evidence index</a>
            <a href="#terms"><span>07</span>Working language</a>
          </nav>
          <div className="index-stat"><strong>05</strong><span>strategy commitments</span></div>
          <div className="index-stat"><strong>03</strong><span>Academy audiences</span></div>
          <div className="index-stat"><strong>{documents.length}</strong><span>working sources</span></div>
        </aside>

        <div className="manual-content">
          <section className="manual-section strategy-section" id="strategy">
            <div className="section-heading">
              <div><p className="section-kicker">01 / ENTERPRISE STRATEGY</p><h2>FIVE COMMITMENTS FOR ENTERPRISE AI ENABLEMENT</h2></div>
              <p>Build capability across the workforce, keep ownership close to the work, and make it easier for good ideas to move responsibly. These commitments work together; they are not gates people must pass.</p>
            </div>
            <div className="pillar-grid">
              {pillars.map((item, index) => <button key={item.n} className={pillar === index ? "pillar active" : "pillar"} onClick={() => setPillar(index)} aria-pressed={pillar === index}><span className="pillar-number">{item.n}</span><strong>{item.name}</strong><small>{item.question}</small></button>)}
            </div>
            <div className="pillar-detail" aria-live="polite">
              <div><p className="detail-label">{pillars[pillar].n} / THE STRATEGIC QUESTION</p><h3>{pillars[pillar].question}</h3><p>{pillars[pillar].summary}</p></div>
              <div className="detail-outcome"><span>WHAT THIS CREATES</span><strong>{pillars[pillar].output}</strong></div>
            </div>
            <div className="craft-current"><span>NON-NEGOTIABLE PRINCIPLE</span><strong>Start with how it can work responsibly.</strong><p>Governance helps people act with confidence. Additional review follows consequence—not curiosity.</p></div>
          </section>

          <section className="manual-section operating-section" id="operating">
            <div className="section-heading">
              <div><p className="section-kicker">02 / OPERATING PLAN</p><h2>FROM LEARNING TO SHARED VALUE</h2></div>
              <p>People can enter from different places. This is a simple way to understand how learning, local action, support, and shared value connect—not a sequence of gates.</p>
            </div>
            <div className="operating-grid">
              {operatingMoves.map((move) => <article className="operating-move" key={move.n}><div className="move-head"><span>{move.n}</span><b>{move.verb}</b></div><h3>{move.title}</h3><p>{move.description}</p><div className="move-output"><small>OUTPUT</small><strong>{move.output}</strong></div></article>)}
            </div>
            <div className="next-decision"><div><p className="detail-label">THE ENABLEMENT POSTURE</p><h3>Make it easier for people to learn, build, and get responsible help.</h3></div><p>Useful work can remain personal, support a team, or stay inside a business unit. When the same need appears across the organization, that is a signal for shared support.</p></div>
          </section>

          <section className="manual-section next-section" id="next">
            <div className="section-heading">
              <div><p className="section-kicker">03 / WHERE YOU FIT</p><h2>CHOOSE THE RESPONSIBILITY CLOSEST TO YOURS</h2></div>
              <p>You do not need to read the library in order. Start with the decision you are responsible for, then use the Academy and essential assets to move.</p>
            </div>
            <div className="journey-grid">
              <a href="#academy" onClick={() => chooseAudience("Employees")}><span>EMPLOYEE</span><strong>Learn by experimenting</strong><p>Start without an idea or prior experience. Build practical things, explore safely, and learn what becomes possible.</p></a>
              <a href="#academy" onClick={() => chooseAudience("Managers")}><span>MANAGER</span><strong>Help the team move</strong><p>Support responsible experimentation, prevent pilot graveyards, and lead adoption and work redesign.</p></a>
              <a href="#academy" onClick={() => chooseAudience("Leaders")}><span>LEADER</span><strong>Recognize patterns and invest</strong><p>Learn from needs across the business and provide shared support where broader value appears.</p></a>
              <a href="/academy"><span>BUILDER</span><strong>Build responsible solutions</strong><p>Use the ecosystem, keep ownership clear, and bring in support as reach or consequence grows.</p></a>
            </div>
          </section>

          <section className="manual-section academy-section" id="academy">
            <div className="section-heading">
              <div><p className="section-kicker">04 / MILLER AI ACADEMY</p><h2>TURN THE STRATEGY INTO CAPABILITY</h2></div>
              <p>Choose the perspective closest to what you need to do. Employee offerings are open learning experiences; manager and leader offerings build the capability their responsibilities require.</p>
            </div>
            <div className="audience-tabs" role="tablist" aria-label="Academy audiences">
              {Object.keys(academy).map((name) => <button key={name} id={`tab-${name.toLowerCase()}`} className={audience === name ? "active" : ""} onClick={() => chooseAudience(name)} role="tab" aria-selected={audience === name} aria-controls="academy-panel" tabIndex={audience === name ? 0 : -1}>{name}</button>)}
            </div>
            <div className="academy-context"><strong>{audience === "Employees" ? "OPEN LEARNING EXPERIENCES" : `${audience.toUpperCase()} OFFERINGS`}</strong><span>{audience === "Employees" ? "Start with curiosity. No polished idea, business case, or prior coding experience is required." : "Choose the offering that matches the decision in front of you."}</span></div>
            <div className="academy-path">
              {courses.map((item, index) => <button key={item.id} className={course.id === item.id ? "course-step active" : "course-step"} onClick={() => setCourseId(item.id)} aria-pressed={course.id === item.id}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><small>{item.format}</small></button>)}
            </div>
            <article className="course-detail" id="academy-panel" role="tabpanel" aria-labelledby={`tab-${audience.toLowerCase()}`} aria-live="polite">
              <div className="course-main"><p className="detail-label">{course.for} / {course.format}</p><h3>{course.title}</h3><h4>{course.subtitle}</h4><p>{course.description}</p><a className="text-link" href="/academy">EXPLORE THE FULL ACADEMY →</a></div>
              <div className="course-outcomes"><span>WHAT YOU LEAVE ABLE TO DO</span><ul>{course.outcomes.map((item) => <li key={item}>{item}</li>)}</ul><div className="leave-behind"><small>LEAVE-BEHIND</small><strong>{course.leaveBehind}</strong></div></div>
            </article>
            <a className="academy-full-link" href="/academy">EXPLORE ALL ACADEMY EXPERIENCES, AGENDAS, AND OUTCOMES →</a>
          </section>

          <section className="manual-section evidence-section" id="evidence">
            <div className="section-heading">
              <div><p className="section-kicker">05 / ESSENTIAL OPERATING KIT</p><h2>START WITH THE ASSETS THAT MOVE A DECISION</h2></div>
              <p>These are the shortest path through the evidence. Each asset supports a specific stage of the strategy and a decision someone must make.</p>
            </div>
            <div className="essential-grid">
              {essentialAssets.map((asset, index) => {
                const doc = documents.find((item) => item.title === asset.source);
                if (!doc) return null;
                return <article className="essential-card" key={asset.source}><div className="essential-head"><span>{String(index + 1).padStart(2, "0")}</span><b>{asset.stage}</b></div><h3>{asset.title}</h3><p>{asset.decision}</p><div className="essential-meta"><span><small>FOR</small>{doc.audience}</span><span><small>FORMAT</small>{doc.format}</span></div><a href={doc.url} target="_blank" rel="noreferrer" aria-label={`Open ${asset.title} source`}>OPEN SOURCE →</a></article>;
              })}
            </div>
          </section>

          <section className="manual-section library-section" id="library">
            <div className="section-heading">
              <div><p className="section-kicker">06 / FULL EVIDENCE INDEX</p><h2>GO DEEPER ONLY WHEN THE DECISION REQUIRES IT</h2></div>
              <p>Use the complete index for supporting detail. The collections follow the strategy instead of the original folder structure.</p>
            </div>
            <div className="library-tools">
              <div className="library-search"><label htmlFor="library-search">SEARCH {documents.length} WORKING SOURCES</label><input id="library-search" value={query} onChange={(event) => { setQuery(event.target.value); setVisible(12); }} placeholder="Search a decision, audience, method, or topic…" /></div>
              <div className="result-count" aria-live="polite"><strong>{results.length}</strong><span>matching sources</span></div>
            </div>
            <div className="category-filters" aria-label="Evidence collections">
              {categories.map((name) => <button key={name} className={category === name ? "active" : ""} aria-pressed={category === name} onClick={() => { setCategory(name); setVisible(12); }}>{name}</button>)}
            </div>
            <div className="document-grid">
              {results.slice(0, visible).map((doc) => (
                <article className="document-card" key={doc.id}>
                  <div className="document-meta"><span>{collectionFor(doc.category)} / {doc.category}</span><b className={`status status-${displayStatus(doc.status).toLowerCase()}`}>{displayStatus(doc.status)}</b></div>
                  <h3>{displayTitle(doc.title)}</h3><p>{doc.brief}</p>
                  <div className="document-facts"><span><small>FOR</small>{doc.audience}</span><span><small>FORMAT</small>{doc.format} · {doc.duration}</span></div>
                  <a href={doc.url} target="_blank" rel="noreferrer" aria-label={`Open ${displayTitle(doc.title)} source`}>OPEN SOURCE →</a>
                </article>
              ))}
            </div>
            {results.length === 0 && <div className="empty-state"><strong>NO EXACT MATCH</strong><p>Try a broader term or return to All collections.</p><button onClick={() => { setQuery(""); setCategory("All"); }}>CLEAR SEARCH AND FILTERS</button></div>}
            {visible < results.length && <button className="load-more" onClick={() => setVisible((count) => count + 12)}>SHOW 12 MORE SOURCES</button>}
          </section>

          <section className="manual-section terms-section" id="terms">
            <div className="section-heading">
              <div><p className="section-kicker">07 / WORKING LANGUAGE</p><h2>SIX TERMS USED THROUGHOUT THE STRATEGY</h2></div>
              <p>Memorable names only help when they make an operating decision easier. These definitions are the plain-language meaning used in this work.</p>
            </div>
            <div className="term-grid">{terms.map(([name, definition], index) => <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{definition}</p></article>)}</div>
            <div className="source-folder"><div><p className="detail-label">WORKING EVIDENCE BASE</p><h3>The dashboard is the curated guide. The Drive folder preserves the source material, prior versions, and working evidence.</h3></div><a className="button button-blue" href="https://drive.google.com/drive/folders/1BHQfGMPw2C-AcBLaSQJleia8UGD4hhO9" target="_blank" rel="noreferrer">OPEN THE SOURCE FOLDER →</a></div>
          </section>
        </div>
      </div>

      <footer><div className="brand footer-brand"><span className="brand-copy"><img className="brand-logo" src="/miller-logo-white.png" alt="Miller" /><small>ENTERPRISE AI ENABLEMENT</small></span></div><p>Understand the work. Protect the craft. Build what survives.</p><a href="#overview">BACK TO TOP ↑</a></footer>
    </main>
  );
}
