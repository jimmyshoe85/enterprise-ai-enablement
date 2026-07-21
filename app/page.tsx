"use client";

import { FormEvent, useMemo, useState } from "react";
import { documents } from "./data";

const pillars = [
  {
    n: "01",
    name: "Foundation",
    question: "Why does this deserve to exist?",
    summary: "Start with business value, shared language, cost, and the burden of proof. AI enablement earns trust by making a falsifiable claim—not by asking the business to believe a demo.",
    output: "A common language and a clear value test.",
    sources: ["System Map", "The Burden Belongs to Us", "QUEST", "AI Cost to Serve"],
  },
  {
    n: "02",
    name: "Intelligence Layer",
    question: "Is the organization ready to build on?",
    summary: "Make fragmented work legible. Connect intent, context, source authority, user authority, output format, and the next handoff before asking a model to act.",
    output: "A diagnostic view of readiness and missing infrastructure.",
    sources: ["Operational Diagnostic", "Work Beneath the Workflow", "Executive Reporting Framework"],
  },
  {
    n: "03",
    name: "Workflow Redesign",
    question: "What is the real work beneath the process map?",
    summary: "Observe how work actually happens. Surface the judgment, exceptions, workarounds, relationships, and craft that formal process documents routinely miss.",
    output: "A decision about what to automate, support, or protect.",
    sources: ["Engagement Playbook", "Hidden Work Interview Guide", "AI Readiness Rubric"],
  },
  {
    n: "04",
    name: "Responsible Agent Systems",
    question: "How do we build proof without losing control?",
    summary: "Use Think, Build, Check. Set authority levels, source-of-truth rules, tool contracts, memory boundaries, approvals, observability, evaluation, and escalation before autonomy.",
    output: "A bounded system that can be operated and audited.",
    sources: ["Build Type Profiles", "Agent Project Playbook", "Memory Architecture"],
  },
  {
    n: "05",
    name: "Scale & Governance",
    question: "What deserves to scale—and who must understand it?",
    summary: "Translate evidence into the language leaders, IT, Legal, managers, and employees need. Fund the few workflows that matter, govern the risk, and build capability through the Academy.",
    output: "A defensible investment and an adoption path.",
    sources: ["Golden Stake", "Enterprise Policy", "Leadership Platform", "AI Academy"],
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

const categories = ["All", "Foundation", "Intelligence Layer", "Workflow Redesign", "Agent Build", "Agent Orchestration", "Memory Architecture", "AI Academy", "Leadership", "Research & Signals", "Build Methods", "Archive"];

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
  const [visible, setVisible] = useState(18);

  const courses = academy[audience];
  const course = courses.find((item) => item.id === courseId) || courses[0];
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return documents.filter((doc) => {
      const categoryMatch = category === "All" || doc.category === category;
      const textMatch = !needle || [doc.title, doc.category, doc.audience, doc.brief, doc.useWhen].join(" ").toLowerCase().includes(needle);
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
          <a href="#overview">Overview</a><a href="#strategy">Strategy</a><a href="#academy">AI Academy</a><a href="#library">Document Library</a>
        </nav>
        <form className="header-search" onSubmit={submitSearch}>
          <label className="sr-only" htmlFor="header-search">Search the field manual</label>
          <input id="header-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the field manual…" />
          <button type="submit" aria-label="Search">⌕</button>
        </form>
        <div className="edition">FIELD MANUAL<br /><strong>LIVE INDEX</strong></div>
      </header>

      <section className="hero" id="overview">
        <div className="hero-copy">
          <p className="eyebrow">A PRACTICAL GUIDE TO OUR ENTERPRISE DIRECTION</p>
          <h1>ENTERPRISE AI<br />ENABLEMENT</h1>
          <p className="hero-promise">Understand the strategy. <strong>Find the right asset.</strong> Build capability.</p>
        </div>
        <div className="hero-orientation">
          <div><span className="white-rule" /><h2>NEW TO THE<br />MATERIAL?</h2><p>Start with the five-part strategy, then use the Academy path to build the skills to put it into practice.</p><a className="button button-light" href="#orientation">TAKE THE 5-MINUTE ORIENTATION →</a></div>
        </div>
      </section>

      <section className="orientation" id="orientation">
        <div className="orientation-title"><strong>START HERE</strong><span>A three-stop orientation</span></div>
        <a href="#strategy"><b>01</b><span><strong>SEE THE DIRECTION</strong>Understand the five strategy pillars</span></a>
        <a href="#academy"><b>02</b><span><strong>BUILD CAPABILITY</strong>Choose your place in the Academy path</span></a>
        <a href="#library"><b>03</b><span><strong>USE THE EVIDENCE</strong>Find the document for your next decision</span></a>
      </section>

      <div className="manual-shell">
        <aside className="field-index">
          <h2>FIELD INDEX</h2>
          <nav aria-label="Field manual sections">
            <a href="#strategy"><span>01</span>Enterprise strategy</a><a href="#academy"><span>02</span>AI Academy path</a><a href="#library"><span>03</span>Document library</a><a href="#terms"><span>04</span>Key terms & models</a><a href="#next"><span>05</span>Where to start</a>
          </nav>
          <div className="index-stat"><strong>{documents.length}</strong><span>unique source documents</span></div>
          <div className="index-stat"><strong>05</strong><span>strategy pillars</span></div>
          <div className="index-stat"><strong>04</strong><span>Academy audiences</span></div>
        </aside>

        <div className="manual-content">
          <section className="manual-section" id="strategy">
            <div className="section-heading"><div><p className="section-kicker">01 / ENTERPRISE STRATEGY</p><h2>THE SYSTEM, IN FIVE PARTS</h2></div><p>Each pillar solves a different part of the same problem: turning fragmented AI activity into repeatable enterprise capability.</p></div>
            <div className="pillar-grid">
              {pillars.map((item, index) => <button key={item.n} className={pillar === index ? "pillar active" : "pillar"} onClick={() => setPillar(index)} aria-pressed={pillar === index}><span className="pillar-number">{item.n}</span><strong>{item.name}</strong><small>{item.question}</small></button>)}
            </div>
            <div className="pillar-detail" aria-live="polite">
              <div><p className="detail-label">{pillars[pillar].n} / WHY IT MATTERS</p><h3>{pillars[pillar].question}</h3><p>{pillars[pillar].summary}</p></div>
              <div className="detail-outcome"><span>THE OUTPUT</span><strong>{pillars[pillar].output}</strong><ul>{pillars[pillar].sources.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
            <div className="craft-current"><span>THE CURRENT BENEATH EVERY STAGE</span><strong>Understand the work. Protect the craft. Build what survives.</strong><p>The human impact is not another box. It runs beneath the entire system—from proving value to setting agent authority and communicating change.</p></div>
          </section>

          <section className="manual-section academy-section" id="academy">
            <div className="section-heading"><div><p className="section-kicker">02 / MILLER AI ACADEMY</p><h2>TURN THE STRATEGY INTO CAPABILITY</h2></div><p>The Academy is the delivery engine for the strategy. Choose an audience to see the right path, outcomes, and leave-behinds.</p></div>
            <div className="audience-tabs" role="tablist" aria-label="Academy audiences">
              {Object.keys(academy).map((name) => <button key={name} className={audience === name ? "active" : ""} onClick={() => chooseAudience(name)} role="tab" aria-selected={audience === name}>{name}</button>)}
            </div>
            <div className="academy-path">
              {courses.map((item, index) => <button key={item.id} className={course.id === item.id ? "course-step active" : "course-step"} onClick={() => setCourseId(item.id)}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><small>{item.format}</small></button>)}
            </div>
            <article className="course-detail" aria-live="polite">
              <div className="course-main"><p className="detail-label">{course.for} / {course.format}</p><h3>{course.title}</h3><h4>{course.subtitle}</h4><p>{course.description}</p><a className="text-link" href={sourceUrl(course.source)} target="_blank" rel="noreferrer">OPEN THE SOURCE DOCUMENT →</a></div>
              <div className="course-outcomes"><span>WHAT YOU LEAVE ABLE TO DO</span><ul>{course.outcomes.map((item) => <li key={item}>{item}</li>)}</ul><div className="leave-behind"><small>LEAVE-BEHIND</small><strong>{course.artifact}</strong></div></div>
            </article>
          </section>

          <section className="manual-section library-section" id="library">
            <div className="section-heading"><div><p className="section-kicker">03 / DOCUMENT LIBRARY</p><h2>FIND THE RIGHT SOURCE, FAST</h2></div><p>Every card answers three questions: what is this, why does it matter, and when should I use it?</p></div>
            <div className="library-tools">
              <div className="library-search"><label htmlFor="library-search">SEARCH ALL {documents.length} DOCUMENTS</label><input id="library-search" value={query} onChange={(event) => { setQuery(event.target.value); setVisible(18); }} placeholder="Try “governance,” “memory,” “manager,” or “workflow”…" /></div>
              <div className="result-count"><strong>{results.length}</strong><span>matching documents</span></div>
            </div>
            <div className="category-filters" aria-label="Document categories">
              {categories.map((name) => <button key={name} className={category === name ? "active" : ""} onClick={() => { setCategory(name); setVisible(18); }}>{name}</button>)}
            </div>
            <div className="document-grid">
              {results.slice(0, visible).map((doc) => (
                <article className="document-card" key={doc.id}>
                  <div className="document-meta"><span>{doc.category}</span><b className={"status status-" + doc.status.toLowerCase()}>{doc.status}</b></div>
                  <h3>{doc.title}</h3><p>{doc.brief}</p>
                  <div className="document-facts"><span><small>FOR</small>{doc.audience}</span><span><small>FORMAT</small>{doc.format} · {doc.duration}</span></div>
                  <details><summary>WHEN TO USE THIS</summary><p>{doc.useWhen}</p>{doc.sourceFiles > 1 && <p className="duplicate-note">{doc.sourceFiles} source copies were grouped into this brief.</p>}</details>
                  <a href={doc.url} target="_blank" rel="noreferrer">OPEN SOURCE →</a>
                </article>
              ))}
            </div>
            {results.length === 0 && <div className="empty-state"><strong>NO EXACT MATCH</strong><p>Try a broader term or return to “All” categories.</p></div>}
            {visible < results.length && <button className="load-more" onClick={() => setVisible((count) => count + 18)}>SHOW 18 MORE DOCUMENTS</button>}
          </section>

          <section className="manual-section" id="terms">
            <div className="section-heading"><div><p className="section-kicker">04 / KEY TERMS & MODELS</p><h2>THE LANGUAGE THAT HOLDS IT TOGETHER</h2></div><p>These recurring ideas connect strategy, diagnosis, build discipline, governance, and learning.</p></div>
            <div className="term-grid">{terms.map(([name, definition], index) => <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{definition}</p></article>)}</div>
          </section>

          <section className="manual-section next-section" id="next">
            <div className="section-heading"><div><p className="section-kicker">05 / WHERE TO START</p><h2>CHOOSE THE NEXT USEFUL MOVE</h2></div><p>You do not need to read the folder in order. Start with the decision you are responsible for.</p></div>
            <div className="journey-grid">
              <a href="#academy" onClick={() => chooseAudience("Employees")}><span>EMPLOYEE</span><strong>Build a safe foundation</strong><p>Start with AI Readiness, then choose IGNITE or the Two-Day Workshop.</p></a>
              <a href="#academy" onClick={() => chooseAudience("Managers")}><span>MANAGER</span><strong>Guide adoption without guessing</strong><p>Take Manager Orientation, then use Work Redesign for a real workflow.</p></a>
              <a href="#academy" onClick={() => chooseAudience("Leaders")}><span>LEADER</span><strong>Fund and govern what matters</strong><p>Use QUEST, the Golden Stake, and the ITW Way to shape the portfolio.</p></a>
              <a href="#academy" onClick={() => chooseAudience("Builders")}><span>BUILDER</span><strong>Build proof with boundaries</strong><p>Start with the System Map, Build Type Profiles, orchestration, and memory readiness.</p></a>
            </div>
            <div className="source-folder"><div><p className="detail-label">SOURCE OF TRUTH</p><h3>The dashboard explains the system. The Drive folder preserves the working evidence.</h3></div><a className="button button-blue" href="https://drive.google.com/drive/folders/1BHQfGMPw2C-AcBLaSQJleia8UGD4hhO9" target="_blank" rel="noreferrer">OPEN THE SOURCE FOLDER →</a></div>
          </section>
        </div>
      </div>

      <footer><div className="brand footer-brand"><span className="brand-copy"><img className="brand-logo" src="/miller-logo-white.png" alt="Miller" /><small>ENTERPRISE AI ENABLEMENT</small></span></div><p>Understand the work. Protect the craft. Build what survives.</p><a href="#overview">BACK TO TOP ↑</a></footer>
    </main>
  );
}
