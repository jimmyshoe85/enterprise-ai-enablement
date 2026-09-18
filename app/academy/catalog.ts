export type AcademyAudience = "Employees" | "Managers" | "Leaders";

export type AcademyCourse = {
  id: string;
  audience: AcademyAudience;
  framework?: string;
  title: string;
  subtitle: string;
  for: string;
  format: string;
  description: string;
  outcomes: string[];
  leaveBehind: string;
  agenda: { heading: string; rows: { title: string; description: string }[] }[];
  leaveWith: { title: string; description: string }[];
};

export const audienceGuidance: Record<AcademyAudience, { label: string; title: string; description: string }> = {
  Employees: {
    label: "DO THE WORK DIFFERENTLY",
    title: "Learn, build, and apply",
    description: "Start with an update session, build something real in IGNITE, and connect an agent to approved systems when you are ready. No polished idea, business case, or prior coding experience is required.",
  },
  Managers: {
    label: "OWN THE WORK AND THE PEOPLE DOING IT",
    title: "Help the team move",
    description: "Support responsible experimentation, avoid a pilot graveyard, and redesign work without losing judgment, expertise, or accountability.",
  },
  Leaders: {
    label: "SET THE CONDITIONS",
    title: "See it, fund it, support it",
    description: "See where AI is helping and where it is not, decide what gets funded, and match support to the scope. The six leadership modules are also bookable individually.",
  },
};

export const academyCourses: AcademyCourse[] = [
  {
    id: "tools-updates",
    audience: "Employees",
    title: "AI Tools and Updates",
    subtitle: "What is new, what works, and what you asked for.",
    for: "Every employee",
    format: "90 minutes · At meetings and conferences",
    description: "A plain-English session that travels to the meetings and conferences people already attend. Cover what the approved tools now do, what changed since the last session, where judgment must remain human, and how to use them without putting protected information at risk. This is a starting point, not a test and not a prerequisite for bringing an idea forward.",
    outcomes: [
      "Explain what AI does well, poorly, and unpredictably",
      "Use approved tools without putting protected information at risk",
      "Recognize where AI can support work and where judgment must remain human",
      "Describe how 80/20, Customer-Back Innovation, and decentralization shape our approach",
      "Know where to go when a question or idea needs help",
    ],
    leaveBehind: "An ITW-aligned readiness map and a clear next step",
    agenda: [
      {
        heading: "The session",
        rows: [
          { title: "What changed since last time", description: "New capability in the approved tools, what it is good for, and what it still gets wrong." },
          { title: "What AI can and cannot do", description: "Strengths, limitations, common myths, and why confident use still requires judgment." },
          { title: "AI and the ITW Business Model", description: "Customer-Back Innovation begins with real customer and operating needs; decentralization keeps ownership close to the work; 80/20 focuses shared investment where it can create the most value." },
          { title: "Safe and responsible use", description: "What information stays out, when output requires review, and when to ask for help." },
          { title: "What you asked for", description: "Answers to the questions people actually sent in, drawn from work happening across the business." },
          { title: "Choosing the right next step", description: "Decide whether to attend IGNITE, explore an agent build, or bring an idea to AI Enablement." },
        ],
      },
    ],
    leaveWith: [
      { title: "A clear mental model", description: "Enough understanding to use AI without treating it as magic or dismissing what it can do." },
      { title: "An ITW-aligned posture", description: "A practical understanding of how the Business Model and values guide responsible experimentation and ownership." },
      { title: "A path forward", description: "The next Academy experience or support route that fits what you want to do." },
    ],
  },
  {
    id: "ignite",
    audience: "Employees",
    framework: "IGNITE",
    title: "IGNITE",
    subtitle: "Build for your own work, then turn it into something your team reuses.",
    for: "Any employee who wants hands-on experience",
    format: "Two days · Hands-on · No idea required",
    description: "Two open, hands-on days for learning by doing. Day one builds for the work you already own. Day two turns one of those builds into something a teammate can pick up and run, with a named owner and a place to keep it. You do not need an idea, a business problem, or prior coding experience. The goal is confidence and capability, not a pitch or a competition.",
    outcomes: [
      "Build useful automations and reports through guided experimentation",
      "Create reusable tools that support your own work or a team",
      "Hand a build to a teammate with instructions they can follow",
      "Connect approved sources and services to complete a workflow",
      "Recognize when a build has moved from lane 1 to lane 2",
    ],
    leaveBehind: "Codex or Anthropic Enterprise access and a starter build portfolio",
    agenda: [
      {
        heading: "Day one · Build for your own work",
        rows: [
          { title: "Enter the ecosystem", description: "Meet the tools, policies, and people that make responsible experimentation possible." },
          { title: "Build a simple automation", description: "Turn a repeated task into a working flow with step-by-step support." },
          { title: "Create a useful report", description: "Bring information together and shape it into an output someone can act on." },
          { title: "Review your own output", description: "Practice checking what comes back before it is used, which is what lane 1 actually requires." },
        ],
      },
      {
        heading: "Day two · Make it reusable",
        rows: [
          { title: "Create something reusable", description: "Package instructions or a workflow so you or a teammate can use it again." },
          { title: "Connect outside information", description: "Learn how approved connections can bring useful tools and information into the work." },
          { title: "Hand it to the team", description: "Name an owner, write down how it is kept current, and test it with someone who did not build it." },
          { title: "Choose what to explore next", description: "Leave with a personal continuation plan and a clear route for support." },
        ],
      },
    ],
    leaveWith: [
      { title: "Enterprise AI access", description: "A Codex or Anthropic Enterprise subscription so the learning can continue after the workshop." },
      { title: "Hands-on confidence", description: "Several completed builds that make the tools practical rather than theoretical." },
      { title: "One thing a team can reuse", description: "A skill, template, or workflow with a named owner and instructions a teammate can follow." },
    ],
  },
  {
    id: "agents",
    audience: "Employees",
    title: "Building AI Agents",
    subtitle: "Connect an agent to approved systems without losing control of what it can do.",
    for: "Employees who have already built something in IGNITE",
    format: "One day · In person · Agent Basics online pre-work required",
    description: "A build day for people whose work has outgrown a single prompt. Complete Agent Basics online first, then spend the day connecting an agent to approved systems: what it may read, what it may update, who owns it, and how it is tested. Work that reaches real systems and updates existing records is lane 3, so permissions, testing, and a named owner come with it.",
    outcomes: [
      "Scope what an agent may read, may update, and may never do",
      "Connect an agent to approved systems using the permissions you already hold",
      "Test an agent against real cases before anyone relies on it",
      "Name an owner and describe how the agent stays current",
      "Recognize when a build has crossed from lane 2 into lane 3 or lane 4",
    ],
    leaveBehind: "A working agent, its boundary written down, and a named owner",
    agenda: [
      {
        heading: "Before the day · Agent Basics online",
        rows: [
          { title: "What an agent actually is", description: "The difference between a prompt, a reusable skill, and something that takes action on your behalf." },
          { title: "Tools, context, and memory", description: "How an agent gets what it needs, and what happens when it does not have it." },
          { title: "Come with a candidate", description: "Bring one piece of your own work that repeats often enough to be worth automating." },
        ],
      },
      {
        heading: "The build day",
        rows: [
          { title: "Set the boundary first", description: "Decide what the agent may read, what it may update, and what stays a human decision." },
          { title: "Connect approved systems", description: "Use the access you already have. Updating existing records is in scope; creating and deleting is not." },
          { title: "Build and iterate", description: "Get a working version in front of real cases as quickly as possible." },
          { title: "Test like it matters", description: "Run the hard cases, the empty cases, and the ones where the agent should refuse." },
          { title: "Name the owner and the next step", description: "Decide who keeps it current, and whether the scope now needs IT, Legal, or funded support." },
        ],
      },
    ],
    leaveWith: [
      { title: "A working agent", description: "Something connected to real systems and tested against real cases, not a demo." },
      { title: "A written boundary", description: "Action authority, data access, and escalation stated plainly enough for someone else to review." },
      { title: "A responsible next step", description: "A clear read on which lane the work now sits in and what support that scope requires." },
    ],
  },
  {
    id: "manager-adoption",
    audience: "Managers",
    title: "Leading AI Adoption",
    subtitle: "Help your team move confidently without creating a pilot graveyard.",
    for: "People managers",
    format: "90 minutes · Virtual",
    description: "Managers do not need to become AI experts. They need to understand the ecosystem, know what their employees can do, help useful ideas move, and recognize when a build needs more support than the team can provide on its own.",
    outcomes: [
      "Explain the tools, access model, policy, and support available to the team",
      "Respond to ideas with a responsible path forward instead of a reflexive no",
      "Distinguish healthy local experimentation from a growing pilot graveyard",
      "Recognize when AI changes a role, workflow, or management responsibility",
    ],
    leaveBehind: "A one-page manager brief for the team",
    agenda: [
      {
        heading: "The session",
        rows: [
          { title: "What the team can do", description: "A plain view of learning, access, approved tools, and responsible experimentation." },
          { title: "How to respond to an idea", description: "Ask what support is needed and where the work belongs before deciding whether it should grow." },
          { title: "Avoid the pilot graveyard", description: "Keep ownership, purpose, and continuation visible without centrally controlling every build." },
          { title: "When the job begins to change", description: "Notice shifts in judgment, handoffs, accountability, and workload, not just time saved." },
          { title: "Complete the manager brief", description: "Leave with team-specific answers rather than homework." },
        ],
      },
    ],
    leaveWith: [
      { title: "A clear posture", description: "Begin with how the team can move responsibly, not whether every idea should be stopped." },
      { title: "A team brief", description: "What employees can do, what managers should watch for, and where everyone can get help." },
      { title: "An adoption lens", description: "A way to see when experimentation is creating learning and when it is creating clutter." },
    ],
  },
  {
    id: "manager-redesign",
    audience: "Managers",
    title: "Redesigning Work with AI",
    subtitle: "Change the workflow without losing judgment, expertise, or accountability.",
    for: "Managers and process owners",
    format: "One day · Bring a workflow",
    description: "Bring a workflow your team actually runs. Spend the morning learning to see it as people perform it rather than as the process map describes it, and the afternoon deciding what AI should automate, support, protect, or leave alone. You leave with a redesign plan grounded in the real work and built with the people doing it.",
    outcomes: [
      "Study work with employees instead of redesigning it around them",
      "Surface hidden judgment, exceptions, and operational knowledge",
      "Separate repeatable activity from judgment, trust, and craft",
      "Identify how responsibilities and handoffs change when AI enters the workflow",
      "Lead an automate, support, protect, or leave-alone decision",
    ],
    leaveBehind: "A manager-led redesign plan grounded in the real work",
    agenda: [
      {
        heading: "Morning · See the work",
        rows: [
          { title: "The process-map problem", description: "Understand why formal workflows leave out the judgment and relationships that make work succeed." },
          { title: "Observe operational reality", description: "Follow work from trigger to outcome and separate visible action from hidden judgment." },
          { title: "Listen without leading", description: "Learn from employees as the people closest to the work." },
          { title: "Map systems and handoffs", description: "See where information, authority, and accountability move, or fail to move." },
        ],
      },
      {
        heading: "Afternoon · Decide what changes",
        rows: [
          { title: "Map the role impact", description: "Identify what changes for decisions, accountability, development, and team design." },
          { title: "Choose the right treatment", description: "Automate, support, protect, or leave alone based on the evidence." },
          { title: "Plan the transition", description: "Set ownership, review, learning, and feedback into the redesigned workflow." },
          { title: "Lead adoption", description: "Help the team understand the purpose of the change and what good work looks like afterward." },
        ],
      },
    ],
    leaveWith: [
      { title: "A role-impact map", description: "A clear view of what changes for the employee, the manager, and the workflow." },
      { title: "A responsible redesign plan", description: "Decisions backed by observation and made with the people doing the work." },
      { title: "The instinct to protect craft", description: "A discipline for keeping expertise, judgment, and accountability visible through change." },
    ],
  },
  {
    id: "enterprise-update",
    audience: "Leaders",
    title: "The Enterprise AI Update",
    subtitle: "Wins, losses, cost, what is coming, and what regulation now requires.",
    for: "The senior leadership team",
    format: "Annual leadership meeting",
    description: "The once-a-year account of where enterprise AI actually stands: what worked, what did not, what it cost to run, what is coming that changes the calculus, and what regulation now requires of us. Delivered as a briefing rather than a pitch, with the losses reported as plainly as the wins.",
    outcomes: [
      "See where AI is creating value and where cost is quietly accumulating",
      "Understand what was stopped, and why that is a healthy signal",
      "Know what capability is arriving that changes next year's decisions",
      "Understand the regulatory obligations that now apply to the business",
    ],
    leaveBehind: "The annual enterprise AI position, in writing",
    agenda: [
      {
        heading: "The briefing",
        rows: [
          { title: "What worked", description: "The builds that survived contact with real work, and what made them survive." },
          { title: "What did not", description: "What was stopped or contained, what it taught us, and what it cost to learn." },
          { title: "What it costs to run", description: "Investment, operating cost, and adoption across the portfolio rather than one pilot at a time." },
          { title: "What is coming", description: "The capability arriving in the next year that changes what is worth funding." },
          { title: "What regulation now requires", description: "The obligations that apply to us, what changed this year, and what that means operationally." },
        ],
      },
    ],
    leaveWith: [
      { title: "A portfolio view", description: "Where value is emerging, where cost is accumulating, and what should be funded next." },
      { title: "An honest scoreboard", description: "Losses reported as plainly as wins, so next year's decisions start from the truth." },
      { title: "A compliance position", description: "A clear statement of what regulation requires and how the business is meeting it." },
    ],
  },
  {
    id: "ai-driven-leadership",
    audience: "Leaders",
    framework: "ACCELERATING THE ITW BUSINESS MODEL",
    title: "AI-Driven Leadership",
    subtitle: "Operational strategy, economics, and capital allocation in three modules.",
    for: "Business and functional leaders",
    format: "Half day · Three modules",
    description: "A half day built around the ITW Business Model rather than around the technology. Module one is operational strategy: see the work before automating it, and find value in the systems and judgment around the model. Module two is economics: know where return appears, when, and whether the information underneath can carry the ambition. Module three is capital allocation: a fair test for when an idea asks for broader time, money, or reach. Each of the six sessions is also bookable on its own.",
    outcomes: [
      "Begin with operational reality rather than the process diagram or the product demo",
      "Explain Enterprise AI Enablement as an application of the ITW Business Model and values",
      "Distinguish a useful solution from an investment that should grow",
      "Judge whether people can find, trust, and maintain the required information",
      "Make a fair continuation decision based on what the work actually showed",
    ],
    leaveBehind: "A leadership decision set: value lens, economics check, and a four-part investment test",
    agenda: [
      {
        heading: "Module one · Operational strategy",
        rows: [
          { title: "See the work before you automate", description: "The people and workarounds quietly absorbing the gaps in the system, and how removing a task can remove judgment with it." },
          { title: "Find enterprise value", description: "Look in the queue, the operational reality, the edges where judgment decides, the systems around the tool, and the capability of the people." },
          { title: "Set strategy the ITW way", description: "Extend how ITW already operates instead of importing a centralized technology model. Share support, not ownership." },
        ],
      },
      {
        heading: "Module two · Economics",
        rows: [
          { title: "Useful is not the same as scalable", description: "Why a good local solution may already be at the right level, and how a tool people like can still cost more to operate than it returns." },
          { title: "What to expect and when", description: "Write down a return that can be evaluated later without rewriting the story." },
          { title: "Build on ready information", description: "Can people find it, trust it, and keep it current? Choose what to fix, work around, or leave alone." },
        ],
      },
      {
        heading: "Module three · Capital allocation",
        rows: [
          { title: "When the test applies", description: "Use it for broader consequence and investment, not as a toll booth for experimentation." },
          { title: "Starting point and expected result", description: "Make the current condition visible before claiming improvement, then state the change in terms the business can recognize." },
          { title: "Boundary and continuation", description: "Clarify what the solution may affect, and agree on the evidence that supports moving, changing course, or stopping." },
        ],
      },
    ],
    leaveWith: [
      { title: "A value lens", description: "Five durable questions that work across tools, models, and vendors." },
      { title: "The money question", description: "What do we expect back, when, and how will we know?" },
      { title: "A proportional test", description: "A framework used when consequence grows, not a prerequisite for every idea." },
    ],
  },
];

export type LeaderSession = {
  id: string;
  module: string;
  framework?: string;
  title: string;
  subtitle: string;
  format: string;
};

export const leaderSessions: LeaderSession[] = [
  { id: "see-work", module: "Module one", framework: "THE CRAFT CURRENT", title: "See the Work Before You Automate", subtitle: "Reveal the invisible work holding the operation together.", format: "45 minutes + Q&A" },
  { id: "quest", module: "Module one", framework: "QUEST", title: "Find Enterprise AI Value", subtitle: "Five questions for finding where AI belongs.", format: "45 minutes + Q&A" },
  { id: "itw-way", module: "Module one", title: "Set AI Strategy the ITW Way", subtitle: "Apply the ITW Business Model and values without fighting the shape of the organization.", format: "45 minutes + Q&A" },
  { id: "economics", module: "Module two", title: "Prove the Economics", subtitle: "Know where the return appears, when, and how it will be recognized.", format: "45 minutes + Q&A" },
  { id: "information", module: "Module two", title: "Build on Ready Information", subtitle: "Make sure the information can carry what the ambition asks of it.", format: "45 minutes + Q&A" },
  { id: "investment", module: "Module three", framework: "THE GOLDEN STAKE", title: "Choose AI Investments", subtitle: "Use a fair test when an idea asks for broader time, money, or reach.", format: "45 minutes + Q&A" },
];
