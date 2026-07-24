"use client";

import { FormEvent, useMemo, useState } from "react";
import { documents } from "./data";

const pillars = [
  {
    n: "01",
    name: "Establish Value",
    question: "What business result would make this worth doing?",
    summary: "Begin with a real operating problem, a baseline, a falsifiable claim, clear boundaries, and a reason to stop. The burden of proof belongs to the AI effort—not to the business asked to adopt it.",
    output: "A legitimate opportunity with a measurable value test.",
    sources: ["QUEST", "The Golden Stake", "AI Cost to Serve", "Enterprise AI System Map"],
  },
  {
    n: "02",
    name: "Understand the Work",
    question: "What actually happens beneath the process map?",
    summary: "Observe the work as people perform it. Surface the judgment, exceptions, relationships, workarounds, and craft that formal process documents routinely miss.",
    output: "A grounded decision about what to automate, support, or protect.",
    sources: ["Engagement Playbook", "Hidden Work Interview Guide", "AI Readiness Scoring Rubric"],
  },
  {
    n: "03",
    name: "Make Work Legible",
    question: "Are context, sources, permissions, and handoffs ready?",
    summary: "Connect intent, context, source authority, user authority, output format, and the next handoff before asking a model to act. Missing infrastructure becomes visible before it becomes operational risk.",
    output: "A readiness diagnosis and a map of what must be fixed first.",
    sources: ["Operational Diagnostic", "Work Beneath the Workflow", "Executive Reporting Framework"],
  },
  {
    n: "04",
    name: "Build Bounded Proof",
    question: "How do we prove value without losing control?",
    summary: "Use Think, Build, Check. Set authority levels, source rules, tool contracts, memory boundaries, approvals, evaluation, observability, and escalation before increasing autonomy.",
    output: "A bounded system that can be tested, operated, and audited.",
    sources: ["Build Type Profiles", "Agent Project Playbook", "Memory Architecture"],
  },
  {
    n: "05",
    name: "Scale Capability",
    question: "What deserves to scale—and who must be ready?",
    summary: "Translate evidence into the language leaders, IT, Legal, managers, and employees need. Fund the few workflows that matter, govern the risk, and build capability through the AI Academy.",
    output: "A defensible investment, operating model, and adoption path.",
    sources: ["Enterprise Policy", "Leadership Platform", "AI Academy", "ITW Way"],
  },
];

type Course = {
  id: string;
  title: string;
  subtitle: string;
  for: string;
  format: string;
  description: string;
  outcomes: string[];
  artifact: string;
  source: string;
};

const academy: Record<string, Course[]> = {
  Employees: [
    {
      id: "readiness",
      title: "AI Readiness",
      subtitle: "Build a safe, practical starting point.",
      for: "Employees with no prior AI experience",
      format: "One day",
      description: "A plain-English foundation in what AI is, where it is safe to use, how to prompt, and how to choose an appropriate first task.",
      outcomes: ["Explain the five foundational layers", "Use the 2×2 Task Map", "Know when human judgment must stay in control"],
      artifact: "Personal AI readiness map",
      source: "AI Readiness One Day Workshop",
    },
    {
      id: "ignite",
      title: "IGNITE",
      subtitle: "Turn what you know into something that builds.",
      for: "Employees and subject-matter experts",
      format: "One-day build intensive",
      description: "Find one problem worth solving, build a working AI solution from real expertise, document it, and pressure-test it before anyone relies on it.",
      outcomes: ["Choose a high-value problem", "Build without prior coding experience", "Document and stress-test the result"],
      artifact: "Working solution and build record",
      source: "IGNITE Workshop OneDay",
    },
    {
      id: "two-day",
      title: "Two-Day AI Workshop",
      subtitle: "Move from first contact to a Golden Stake project.",
      for: "Curious employees",
      format: "Two days",
      description: "A hands-on event connecting real work, safe experimentation, project legitimacy, and review by Legal, IT, and AI Enablement.",
      outcomes: ["Understand three levels of AI work", "Find hidden work in a workflow", "Present a bounded project worth building"],
      artifact: "Golden Stake project proposal",
      source: "AI Workshop TwoDay",
    },
    {
      id: "redesign",
      title: "Work Redesign",
      subtitle: "Redesign the work without breaking what makes it good.",
      for: "Practitioners, process owners, and enablement leads",
      format: "Two-day intensive",
      description: "Learn to read work as it really happens and decide, task by task, what should be automated, supported, or protected.",
      outcomes: ["Surface hidden judgment", "Map systems and handoffs", "Protect the craft worth keeping"],
      artifact: "Work redesign toolkit",
      source: "Work Redesign Toolkit Intensive",
    },
  ],
  Managers: [
    {
      id: "manager",
      title: "Manager Orientation",
      subtitle: "Know what good looks like once the train is moving.",
      for: "People managers",
      format: "90-minute virtual session",
      description: "Clarifies the manager’s role in safe adoption, task selection, team questions, and the boundary between AI support and human ownership.",
      outcomes: ["Explain the sandbox", "Identify strong and weak AI candidates", "Answer safe-use questions"],
      artifact: "One-page manager brief",
      source: "Manager AI Orientation",
    },
    {
      id: "manager-redesign",
      title: "Work Redesign",
      subtitle: "See the work your process map misses.",
      for: "Managers and process owners",
      format: "Two-day intensive",
      description: "A deeper practice for observing hidden work and making responsible task-level redesign decisions with employees.",
      outcomes: ["Interview without leading", "Separate task from craft", "Create an automate/support/protect map"],
      artifact: "Field-tested redesign map",
      source: "Work Redesign Toolkit Intensive",
    },
  ],
  Leaders: [
    {
      id: "heroes",
      title: "Heroes & Duct Tape",
      subtitle: "See the real work before automating it.",
      for: "Enterprise and functional leaders",
      format: "45-minute keynote",
      description: "Why AI pilots fail when they automate the fictional process instead of the invisible labor that actually holds the operation together.",
      outcomes: ["Recognize invisible labor", "Ask better observation questions", "Protect operational knowledge"],
      artifact: "Operational-reality lens",
      source: "Heroes and Duct Tape Keynote Outline",
    },
    {
      id: "quest",
      title: "QUEST",
      subtitle: "Five questions for finding enterprise AI value.",
      for: "Leadership teams",
      format: "45-minute keynote",
      description: "A technology-independent framework for finding where human and machine value live—in the queue, edges, systems, and agency around the model.",
      outcomes: ["Shift focus beyond the model", "Locate the real constraint", "Frame an enterprise opportunity"],
      artifact: "QUEST decision framework",
      source: "QUEST Keynote Outline",
    },
    {
      id: "stake",
      title: "The Golden Stake",
      subtitle: "A legitimacy test before money or time gets spent.",
      for: "Sponsors, Finance, IT, and Legal",
      format: "45-minute keynote",
      description: "A four-part filter for deciding whether an AI initiative deserves to exist: baseline, claim, boundary, and a reason to stop.",
      outcomes: ["Set a baseline", "Define a falsifiable claim", "Agree on boundaries and stop conditions"],
      artifact: "Golden Stake project test",
      source: "The Golden Stake Keynote Outline",
    },
    {
      id: "home",
      title: "The ITW Way / Home Ground",
      subtitle: "Build strategy in the language of the business.",
      for: "Business and platform leaders",
      format: "45-minute keynote",
      description: "Connects AI strategy to CBI, 80/20, decentralization, local proof, and respect for the craft that gives the business its authority.",
      outcomes: ["Use internal-customer signals", "Apply 80/20 to AI investment", "Balance local action with enterprise guardrails"],
      artifact: "Enterprise strategy lens",
      source: "Home Ground Keynote Outline",
    },
  ],
  Builders: [
    {
      id: "agent",
      title: "Build & Deploy Your First Agent",
      subtitle: "Choose the simplest system that can do the job.",
      for: "Employees with a real workflow to bring",
      format: "Full-day sandbox build",
      description: "Stress-test whether the task needs an agent, set an appropriate autonomy level, and deploy a working bounded agent.",
      outcomes: ["Use the agent decision ladder", "Set authority from L0 to L6", "Deploy and test a working agent"],
      artifact: "Sandbox agent and build record",
      source: "Building Deploying Your First Agent",
    },
    {
      id: "work",
      title: "Enterprise Automation with ChatGPT Work",
      subtitle: "Build reusable workspaces, skills, and dashboards.",
      for: "Training managers, analysts, and operations leaders",
      format: "Operational syllabus",
      description: "A structured program in secure local workspaces, matching compute to budgets, packaging recurring workflows, and producing interactive outputs.",
      outcomes: ["Configure a secure workspace", "Package a repeatable skill", "Create an operational dashboard"],
      artifact: "Reusable automation blueprint",
      source: "Executive Training Syllabus V2",
    },
  ],
};

const terms = [
  ["Golden Stake", "A four-part legitimacy test: baseline, claim, boundary, and the condition that makes a project not worth continuing."],
  ["QUEST", "Five questions for finding value in the work, systems, queues, edges, and human agency around the technology."],
  ["Think · Build · Check", "Think writes the test. Build does the work. Check runs the test—keeping speed connected to intent and evidence."],
  ["Intelligence Layer", "The capability connecting intent, context, source authority, user authority, output format, and the next handoff."],
  ["Autonomy Ladder", "A progression from answer-only to bounded autonomous action. Higher authority requires stronger approval, audit, and escalation."],
  ["The Craft Current", "The people-and-work thread beneath every stage: understand what expertise holds the operation together before changing it."],
];

const operatingMoves = [
  { n: "01", verb: "SELECT", title: "Choose work worth proving", description: "Use QUEST and the Golden Stake to name a valuable workflow, its owner, its baseline, its boundary, and the evidence that would justify continuing.", output: "A legitimate opportunity—not a technology demo." },
  { n: "02", verb: "OBSERVE", title: "Understand the work as it is", description: "Interview the people closest to the work. Map judgment, exceptions, systems, handoffs, and the craft that keeps the operation running.", output: "An automate, support, or protect decision." },
  { n: "03", verb: "PROVE", title: "Build the smallest bounded system", description: "Match the build type to the job. Define authority, sources, memory, tools, tests, approvals, and escalation before increasing autonomy.", output: "A working proof with evidence and guardrails." },
  { n: "04", verb: "DECIDE", title: "Scale only what earns it", description: "Review the result with business, IT, Legal, and the people doing the work. Standardize what survives and build adoption through the Academy.", output: "A governed capability with an accountable owner." },
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

function sourceUrl(title: string) {
  const value = title.toLowerCase();
  return documents.find((doc) => doc.title.toLowerCase().includes(value))?.url || "#library";
}

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
          <a href="#strategy">Strategy</a><a href="#operating">Operating plan</a><a href="#academy">AI Academy</a><a href="#evidence">Evidence</a>
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
          <p className="hero-thesis">A system for finding, proving, governing, and scaling AI value—without losing the judgment and craft that make the work good.</p>
          <p className="hero-promise">See the strategy. <strong>Understand what is ready.</strong> Choose the next move.</p>
        </div>
        <div className="hero-orientation">
          <div>
            <span className="white-rule" />
            <p className="hero-panel-label">WHAT IS READY NOW</p>
            <h2>THE STRUCTURE<br />EXISTS</h2>
            <ul className="ready-list">
              <li><strong>05</strong><span>strategic moves from value to scale</span></li>
              <li><strong>04</strong><span>steps from opportunity to governed proof</span></li>
              <li><strong>04</strong><span>Academy audiences with practical outcomes</span></li>
              <li><strong>{documents.length}</strong><span>working sources, tools, and research records</span></li>
            </ul>
            <a className="button button-light" href="#strategy">SEE THE STRATEGY →</a>
          </div>
        </div>
      </section>

      <section className="orientation" aria-label="Start here">
        <div className="orientation-title"><strong>START HERE</strong><span>The shortest path through the work</span></div>
        <a href="#strategy"><b>01</b><span><strong>SEE THE DIRECTION</strong>Five moves from value to scale</span></a>
        <a href="#operating"><b>02</b><span><strong>SEE THE PLAN</strong>Four steps from selection to adoption</span></a>
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
          <div className="index-stat"><strong>05</strong><span>strategy moves</span></div>
          <div className="index-stat"><strong>04</strong><span>Academy audiences</span></div>
          <div className="index-stat"><strong>{documents.length}</strong><span>working sources</span></div>
        </aside>

        <div className="manual-content">
          <section className="manual-section strategy-section" id="strategy">
            <div className="section-heading">
              <div><p className="section-kicker">01 / ENTERPRISE STRATEGY</p><h2>FIVE MOVES FROM VALUE TO SCALE</h2></div>
              <p>The strategy begins with business value and real work—not a model. Each move produces the evidence and operating conditions required for the next.</p>
            </div>
            <div className="pillar-grid">
              {pillars.map((item, index) => <button key={item.n} className={pillar === index ? "pillar active" : "pillar"} onClick={() => setPillar(index)} aria-pressed={pillar === index}><span className="pillar-number">{item.n}</span><strong>{item.name}</strong><small>{item.question}</small></button>)}
            </div>
            <div className="pillar-detail" aria-live="polite">
              <div><p className="detail-label">{pillars[pillar].n} / THE STRATEGIC QUESTION</p><h3>{pillars[pillar].question}</h3><p>{pillars[pillar].summary}</p></div>
              <div className="detail-outcome"><span>THE OUTPUT</span><strong>{pillars[pillar].output}</strong><ul>{pillars[pillar].sources.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
            <div className="craft-current"><span>NON-NEGOTIABLE PRINCIPLE</span><strong>Protect expertise, judgment, and accountability at every stage.</strong><p>Human impact is not a final change-management step. It shapes what deserves to be built, how authority is assigned, and what must remain human-owned.</p></div>
          </section>

          <section className="manual-section operating-section" id="operating">
            <div className="section-heading">
              <div><p className="section-kicker">02 / OPERATING PLAN</p><h2>FROM OPPORTUNITY TO GOVERNED PROOF</h2></div>
              <p>This is how the strategy moves. Each step has a decision, a practical method, and an output that earns the right to continue.</p>
            </div>
            <div className="operating-grid">
              {operatingMoves.map((move) => <article className="operating-move" key={move.n}><div className="move-head"><span>{move.n}</span><b>{move.verb}</b></div><h3>{move.title}</h3><p>{move.description}</p><div className="move-output"><small>OUTPUT</small><strong>{move.output}</strong></div></article>)}
            </div>
            <div className="next-decision"><div><p className="detail-label">THE FIRST ENTERPRISE MOVE</p><h3>Choose one or two workflows worth proving—not a portfolio of disconnected pilots.</h3></div><p>Give each workflow a business owner, baseline, claim, boundary, and stop condition. Then observe the work before choosing the technology.</p></div>
          </section>

          <section className="manual-section next-section" id="next">
            <div className="section-heading">
              <div><p className="section-kicker">03 / WHERE YOU FIT</p><h2>CHOOSE THE RESPONSIBILITY CLOSEST TO YOURS</h2></div>
              <p>You do not need to read the library in order. Start with the decision you are responsible for, then use the Academy and essential assets to move.</p>
            </div>
            <div className="journey-grid">
              <a href="#academy" onClick={() => chooseAudience("Employees")}><span>EMPLOYEE</span><strong>Build a safe foundation</strong><p>Understand what AI can do, choose an appropriate first task, and keep judgment in control.</p></a>
              <a href="#academy" onClick={() => chooseAudience("Managers")}><span>MANAGER</span><strong>Guide adoption with evidence</strong><p>Help teams choose good work, ask better questions, and protect the expertise the process depends on.</p></a>
              <a href="#academy" onClick={() => chooseAudience("Leaders")}><span>LEADER</span><strong>Fund and govern what matters</strong><p>Use QUEST and the Golden Stake to choose where the enterprise should invest—and where it should stop.</p></a>
              <a href="#academy" onClick={() => chooseAudience("Builders")}><span>BUILDER</span><strong>Build proof with boundaries</strong><p>Match the system to the job, set authority, and make the result testable, observable, and auditable.</p></a>
            </div>
          </section>

          <section className="manual-section academy-section" id="academy">
            <div className="section-heading">
              <div><p className="section-kicker">04 / MILLER AI ACADEMY</p><h2>TURN THE STRATEGY INTO CAPABILITY</h2></div>
              <p>Choose the perspective closest to what you need to do. Employee programs form a progression; manager, leader, and builder offerings are selected by responsibility.</p>
            </div>
            <div className="audience-tabs" role="tablist" aria-label="Academy audiences">
              {Object.keys(academy).map((name) => <button key={name} id={`tab-${name.toLowerCase()}`} className={audience === name ? "active" : ""} onClick={() => chooseAudience(name)} role="tab" aria-selected={audience === name} aria-controls="academy-panel" tabIndex={audience === name ? 0 : -1}>{name}</button>)}
            </div>
            <div className="academy-context"><strong>{audience === "Employees" ? "RECOMMENDED LEARNING PATH" : `${audience.toUpperCase()} OFFERINGS`}</strong><span>{audience === "Employees" ? "Move from foundation to applied work redesign." : "Choose the offering that matches the decision in front of you."}</span></div>
            <div className="academy-path">
              {courses.map((item, index) => <button key={item.id} className={course.id === item.id ? "course-step active" : "course-step"} onClick={() => setCourseId(item.id)} aria-pressed={course.id === item.id}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><small>{item.format}</small></button>)}
            </div>
            <article className="course-detail" id="academy-panel" role="tabpanel" aria-labelledby={`tab-${audience.toLowerCase()}`} aria-live="polite">
              <div className="course-main"><p className="detail-label">{course.for} / {course.format}</p><h3>{course.title}</h3><h4>{course.subtitle}</h4><p>{course.description}</p><a className="text-link" href={sourceUrl(course.source)} target="_blank" rel="noreferrer">OPEN {course.title.toUpperCase()} SOURCE →</a></div>
              <div className="course-outcomes"><span>WHAT YOU LEAVE ABLE TO DO</span><ul>{course.outcomes.map((item) => <li key={item}>{item}</li>)}</ul><div className="leave-behind"><small>LEAVE-BEHIND</small><strong>{course.artifact}</strong></div></div>
            </article>
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
