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
    label: "LEARN, BUILD, AND APPLY",
    title: "Start with curiosity and keep building",
    description: "Begin with readiness or IGNITE, then continue into applied building and work redesign when you are ready. No polished idea, business case, or prior coding experience is required.",
  },
  Managers: {
    label: "LEAD THE CHANGE",
    title: "Help the team move",
    description: "Understand the ecosystem, support responsible experimentation, prevent pilot graveyards, and redesign work when roles begin to change.",
  },
  Leaders: {
    label: "SET THE CONDITIONS",
    title: "Recognize and support value",
    description: "Build the language to see real work, learn from the business, make better investments, and provide the support responsible growth requires.",
  },
};

export const academyCourses: AcademyCourse[] = [
  {
    id: "readiness",
    audience: "Employees",
    title: "Build AI Readiness",
    subtitle: "Understand the tools, the policy, and where human judgment stays in control.",
    for: "Employees who want a practical foundation",
    format: "One day · In person · No experience needed",
    description: "A plain-English introduction to working with AI at Miller. Learn what AI does well, where it gets things wrong, how the ITW Business Model and values shape our approach, how to use approved tools responsibly, and how to recognize a useful place to begin. This is a starting point, not a test and not a prerequisite for bringing an idea forward.",
    outcomes: [
      "Explain what AI does well, poorly, and unpredictably",
      "Describe how 80/20, Customer-Back Innovation, decentralization, and ITW's values shape our approach to AI",
      "Use approved tools without putting protected information at risk",
      "Recognize where AI can support work and where judgment must remain human",
      "Know where to go when a question or idea needs help",
    ],
    leaveBehind: "An ITW-aligned readiness map and a clear next step",
    agenda: [
      {
        heading: "A practical foundation",
        rows: [
          { title: "What AI can and cannot do", description: "Strengths, limitations, common myths, and why confident use still requires judgment." },
          { title: "AI and the ITW Business Model", description: "Customer-Back Innovation begins with real customer and operating needs; decentralization keeps ownership close to the work; 80/20 focuses shared investment where it can create the most value." },
          { title: "ITW's values in practice", description: "Integrity, Simplicity, Trust, Respect, and Shared Risk shape how we experiment, make decisions, support one another, and remain accountable." },
          { title: "The Miller AI ecosystem", description: "The approved tools, the policy, and the support available within a flexibility-within-the-framework culture." },
          { title: "Safe and responsible use", description: "What information stays out, when output requires review, and when to ask for help." },
          { title: "Guided practice", description: "Use AI to summarize, draft, organize, and improve familiar work in low-risk exercises." },
          { title: "Choosing the right next step", description: "Decide whether to keep learning, attend IGNITE, or explore an idea with AI Enablement." },
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
    title: "Experiment and Build with AI",
    subtitle: "Take a day to experiment, build, and learn.",
    for: "Any employee who wants hands-on experience",
    format: "One-day immersive workshop · No idea required",
    description: "IGNITE is an open, hands-on day for learning by doing. You do not need an idea, a business problem, or prior coding experience. Build automations, reports, reusable tools, and connected workflows through guided experimentation. The goal is confidence and capability—not a pitch, competition, or enterprise project.",
    outcomes: [
      "Build useful automations and reports through guided experimentation",
      "Create reusable tools that can support your own work or a team",
      "Connect approved sources and services to complete a workflow",
      "Continue building and collaborating with enterprise AI tools",
    ],
    leaveBehind: "Codex or Anthropic Enterprise access and a starter build portfolio",
    agenda: [
      {
        heading: "Morning · Learn by building",
        rows: [
          { title: "Enter the ecosystem", description: "Meet the tools, policies, and people that make responsible experimentation possible." },
          { title: "Build a simple automation", description: "Turn a repeated task into a working flow with step-by-step support." },
          { title: "Create a useful report", description: "Bring information together and shape it into an output someone can act on." },
        ],
      },
      {
        heading: "Afternoon · Connect and continue",
        rows: [
          { title: "Create something reusable", description: "Package instructions or a workflow so you or a teammate can use it again." },
          { title: "Connect outside information", description: "Learn how approved connections can bring useful tools and information into the work." },
          { title: "Choose what to explore next", description: "Leave with a personal continuation plan and a clear route for support." },
        ],
      },
    ],
    leaveWith: [
      { title: "Enterprise AI access", description: "A Codex or Anthropic Enterprise subscription so the learning can continue after the workshop." },
      { title: "Hands-on confidence", description: "Several completed builds that make the tools practical rather than theoretical." },
      { title: "A support path", description: "One place to ask questions, understand what is available, and get help moving responsibly." },
    ],
  },
  {
    id: "opportunity",
    audience: "Employees",
    framework: "THE GOLDEN STAKE",
    title: "Shape an AI Opportunity",
    subtitle: "Explore real work, build a bounded proof, and decide the right home for it.",
    for: "Employees and teams ready for deeper applied work",
    format: "Two days · Cohort-based · Hands-on",
    description: "A deeper workshop for exploring how AI could improve real work. Arrive with an idea or discover one with the cohort. Build a small proof, learn what responsible support it requires, and decide whether it should remain personal, help a team, belong to a business unit, or receive broader investment.",
    outcomes: [
      "Find useful opportunities without assuming every idea must become an enterprise project",
      "Build a small proof with clear ownership and boundaries",
      "Recognize when a solution can remain local and when it needs more support",
      "Describe value, risk, and the next responsible step in plain language",
    ],
    leaveBehind: "A working proof and a clear recommendation for where it should live",
    agenda: [
      {
        heading: "Day 1 · Explore and build",
        rows: [
          { title: "Where AI can live", description: "Personal tools, team practices, business-unit solutions, and enterprise capabilities all have a place." },
          { title: "Understand the work", description: "Look beneath the process map for the friction, judgment, and workarounds that matter." },
          { title: "Build a first proof", description: "Create something small enough to learn from without pretending it is ready for production." },
          { title: "Learn from the result", description: "Study what worked, what failed, and what the build revealed about the work." },
        ],
      },
      {
        heading: "Day 2 · Shape the next move",
        rows: [
          { title: "Define the value", description: "Name what improves, how it can be observed, and who owns the result." },
          { title: "Set the boundaries", description: "Clarify what the solution may do, what remains human, and when more review is required." },
          { title: "Review with support partners", description: "Use IT, Legal, policy, and AI Enablement to find a responsible path forward." },
          { title: "Choose the right home", description: "Keep it personal, share it with a team, support it in the business, or prepare it for broader investment." },
        ],
      },
    ],
    leaveWith: [
      { title: "A working proof", description: "Something concrete enough to learn from and discuss with the people who own the work." },
      { title: "A responsible next step", description: "A clear decision about where the solution belongs and what support it requires." },
      { title: "A shared language", description: "A practical way to discuss value, boundaries, ownership, and continuation without a pitch contest." },
    ],
  },
  {
    id: "employee-redesign",
    audience: "Employees",
    title: "Redesign Work Responsibly",
    subtitle: "Improve the work without breaking what makes it good.",
    for: "Practitioners, process owners, and enablement leads",
    format: "Two-day intensive · Toolkit and practice",
    description: "Learn to understand work as people actually perform it—not only as the process map describes it. Surface the judgment, exceptions, relationships, and workarounds that hold the workflow together, then decide what AI should automate, support, or leave human.",
    outcomes: [
      "Observe a role and workflow without reducing the work to a list of tasks",
      "Surface hidden judgment, exceptions, and operational knowledge",
      "Decide what to automate, support, or protect",
      "Turn field evidence into a recommendation people can trust",
    ],
    leaveBehind: "A field-tested work-redesign map and practical toolkit",
    agenda: [
      {
        heading: "Day 1 · See the work",
        rows: [
          { title: "The process-map problem", description: "Understand why formal workflows leave out the judgment and relationships that make work succeed." },
          { title: "Observe operational reality", description: "Follow work from trigger to outcome and separate visible action from hidden judgment." },
          { title: "Interview for hidden work", description: "Ask questions that surface exceptions, workarounds, and knowledge the system does not contain." },
        ],
      },
      {
        heading: "Day 2 · Redesign responsibly",
        rows: [
          { title: "Map systems and handoffs", description: "See where information, authority, and accountability move—or fail to move." },
          { title: "Choose the right treatment", description: "Automate, support, protect, or leave alone based on the evidence." },
          { title: "Make the recommendation", description: "Present a practical redesign that protects expertise and clarifies what changes." },
        ],
      },
    ],
    leaveWith: [
      { title: "The diagnostic toolkit", description: "A repeatable way to study work before changing it." },
      { title: "A redesign map", description: "A clear view of what AI should automate, support, protect, or leave alone." },
      { title: "The instinct to protect craft", description: "A discipline for keeping expertise, judgment, and accountability visible through change." },
    ],
  },
  {
    id: "manager-adoption",
    audience: "Managers",
    title: "Lead AI Adoption",
    subtitle: "Help your team move confidently without creating a pilot graveyard.",
    for: "People managers",
    format: "90 minutes · Virtual",
    description: "Managers do not need to become AI experts. They need to understand the ecosystem, know what their employees can do, help useful ideas move, and recognize when a build needs more support. This session makes the manager a guide instead of a bottleneck.",
    outcomes: [
      "Explain the tools, access model, policy, and support available to the team",
      "Respond to ideas with a responsible path forward instead of a reflexive no",
      "Distinguish healthy local experimentation from a growing pilot graveyard",
      "Recognize when AI changes a role, workflow, or management responsibility",
    ],
    leaveBehind: "A one-page manager brief for the team",
    agenda: [
      {
        heading: "The manager's role",
        rows: [
          { title: "What the team can do", description: "A plain view of learning, access, approved tools, and responsible experimentation." },
          { title: "How to respond to an idea", description: "Ask what support is needed and where the work belongs before deciding whether it should grow." },
          { title: "Avoid the pilot graveyard", description: "Keep ownership, purpose, and continuation visible without centrally controlling every build." },
          { title: "When the job begins to change", description: "Notice shifts in judgment, handoffs, accountability, and workload—not just time saved." },
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
    title: "Guide Work Redesign",
    subtitle: "Change the workflow without losing judgment, expertise, or accountability.",
    for: "Managers and process owners",
    format: "Two-day intensive · Field practice",
    description: "A manager-focused practice for understanding how work actually happens and leading responsible redesign with employees. Learn to see where AI changes tasks, decisions, roles, and handoffs—and how to involve the people whose knowledge makes the work succeed.",
    outcomes: [
      "Study work with employees instead of redesigning it around them",
      "Separate repeatable activity from judgment, trust, and craft",
      "Identify how responsibilities and handoffs change when AI enters the workflow",
      "Lead an automate, support, protect, or leave-alone decision",
    ],
    leaveBehind: "A manager-led redesign plan grounded in the real work",
    agenda: [
      {
        heading: "Day 1 · Understand before changing",
        rows: [
          { title: "See beyond the process map", description: "Find the workarounds, exceptions, and human judgment the formal process misses." },
          { title: "Listen without leading", description: "Learn from employees as the people closest to the work." },
          { title: "Map the role impact", description: "Identify what changes for decisions, accountability, development, and team design." },
        ],
      },
      {
        heading: "Day 2 · Lead the redesign",
        rows: [
          { title: "Choose what changes", description: "Decide which work AI automates, supports, or should not touch." },
          { title: "Plan the transition", description: "Set ownership, review, learning, and feedback into the redesigned workflow." },
          { title: "Lead adoption", description: "Help the team understand the purpose of the change and what good work looks like afterward." },
        ],
      },
    ],
    leaveWith: [
      { title: "A role-impact map", description: "A clear view of what changes for the employee, the manager, and the workflow." },
      { title: "A responsible redesign plan", description: "Decisions backed by observation and made with the people doing the work." },
      { title: "An adoption approach", description: "A practical way to lead the team through the change without losing trust or expertise." },
    ],
  },
  {
    id: "see-work",
    audience: "Leaders",
    framework: "HEROES & DUCT TAPE",
    title: "See the Work Before You Automate",
    subtitle: "Reveal the invisible work holding the operation together.",
    for: "Enterprise and functional leaders",
    format: "45 minutes + Q&A · Keynote",
    description: "AI efforts fail when leaders automate the fictional process instead of the work people actually perform. This keynote helps leaders see the judgment, exceptions, relationships, and workarounds that keep an operation moving before deciding what technology should change.",
    outcomes: [
      "Recognize invisible labor and operational knowledge",
      "Ask better questions before approving automation",
      "Protect the expertise and relationships the process depends on",
      "See why work redesign must begin with observation",
    ],
    leaveBehind: "An operational-reality lens for leadership decisions",
    agenda: [
      {
        heading: "The talk",
        rows: [
          { title: "The fictional process", description: "Why the clean version on paper is not the work employees actually perform." },
          { title: "Heroes and duct tape", description: "The people and workarounds quietly absorbing the system's gaps." },
          { title: "What automation can erase", description: "How removing a task can also remove judgment, trust, and knowledge." },
          { title: "The leadership questions", description: "What to ask before choosing a tool or approving a redesign." },
        ],
      },
    ],
    leaveWith: [
      { title: "A better starting point", description: "Begin with operational reality, not the process diagram or product demo." },
      { title: "Observation questions", description: "A concise set of questions for revealing hidden work and critical expertise." },
      { title: "A protection principle", description: "Change the work without discarding the knowledge that makes it successful." },
    ],
  },
  {
    id: "quest",
    audience: "Leaders",
    framework: "QUEST",
    title: "Find Enterprise AI Value",
    subtitle: "Five questions for finding where AI belongs.",
    for: "Leadership teams",
    format: "45 minutes + Q&A · Keynote",
    description: "A plain-language leadership lens for finding value beyond the model itself: in unfinished work, operational reality, the hard cases that still need judgment, the systems around the tool, and the agency employees need to build real capability.",
    outcomes: [
      "Look for value in unfinished and underserved work, not only labor reduction",
      "Understand how the work actually happens before choosing technology",
      "Recognize where judgment, taste, and trust remain differentiating",
      "Treat systems and workforce capability as part of the AI strategy",
    ],
    leaveBehind: "The five-question QUEST leadership card",
    agenda: [
      {
        heading: "The five questions",
        rows: [
          { title: "Queue", description: "What valuable work never gets done because time and attention are already consumed?" },
          { title: "Understand the work", description: "What happens in practice that the process map does not show?" },
          { title: "Edges", description: "Where do judgment, trust, and hard cases still determine the outcome?" },
          { title: "Systems", description: "What must exist around the tool for the result to be reliable?" },
          { title: "Talent and agency", description: "How do employees gain the capability and room to participate?" },
        ],
      },
    ],
    leaveWith: [
      { title: "A value lens", description: "Five durable questions that work across tools, models, and vendors." },
      { title: "A stronger opportunity conversation", description: "A way to connect technology to work, systems, and people." },
      { title: "A strategy warning", description: "If the strategy ends with a vendor name, it is a subscription—not an operating model." },
    ],
  },
  {
    id: "economics",
    audience: "Leaders",
    framework: "DOES THE MATH WORK?",
    title: "Prove the Economics",
    subtitle: "Know where the return appears, when, and how it will be recognized.",
    for: "Business sponsors and leadership teams",
    format: "45 minutes + Q&A · Keynote",
    description: "A useful tool can still be a poor investment. This keynote gives leaders a plain way to understand value, running cost, adoption, and return across AI efforts—without pretending every personal or team solution needs an enterprise business case.",
    outcomes: [
      "Distinguish a useful solution from an investment that should grow",
      "Understand how running cost changes as use expands",
      "Set a return expectation that can be checked later",
      "View AI investment across the portfolio rather than one pilot at a time",
    ],
    leaveBehind: "A practical value-and-running-cost check",
    agenda: [
      {
        heading: "The talk",
        rows: [
          { title: "Useful is not the same as scalable", description: "Why a good local solution may already be at the right level." },
          { title: "The good-product trap", description: "How a tool people like can still cost more to operate than it returns." },
          { title: "The whole view", description: "See investment, operating cost, adoption, and value across the set of AI efforts." },
          { title: "What to expect and when", description: "Write down a return that can be evaluated without rewriting the story later." },
        ],
      },
    ],
    leaveWith: [
      { title: "The money question", description: "What do we expect back, when, and how will we know?" },
      { title: "A portfolio view", description: "A way to see where value is emerging and where cost is quietly accumulating." },
      { title: "A proportionate test", description: "Apply enterprise economics when broader investment is being considered—not to every useful local build." },
    ],
  },
  {
    id: "itw-way",
    audience: "Leaders",
    framework: "CBI · 80/20 · DECENTRALIZATION · VALUES",
    title: "Set AI Strategy the ITW Way",
    subtitle: "Apply the ITW Business Model and values to AI without fighting the shape of the organization.",
    for: "Business and platform leaders",
    format: "45 minutes + Q&A · Keynote",
    description: "Enterprise AI Enablement is not a competing operating model. It applies the ITW Business Model to AI: start customer-back, keep decisions and ownership close to the work, create flexibility within a responsible framework, and use 80/20 discipline when repeated needs justify shared investment. Integrity, Simplicity, Trust, Respect, and Shared Risk define how people move inside that framework.",
    outcomes: [
      "Explain Enterprise AI Enablement as an application of the ITW Business Model and values",
      "Connect Customer-Back Innovation to real customer, operating, and employee signals",
      "Preserve decentralized ownership through flexibility within the framework",
      "Apply 80/20 at the shared-investment layer without restricting broad learning",
      "Use ITW's values to shape responsible access, support, accountability, and work redesign",
    ],
    leaveBehind: "An ITW Business Model and values lens for enterprise AI strategy",
    agenda: [
      {
        heading: "The talk",
        rows: [
          { title: "Do not fight the operating model", description: "Build an AI strategy that extends how ITW already operates instead of importing a centralized technology model." },
          { title: "Innovate customer-back", description: "Begin with real customer and operating needs, then learn from the employees and business units closest to them." },
          { title: "Use flexibility within the framework", description: "Give local owners room to learn and customize while making responsible tools, policy, and support easy to navigate." },
          { title: "Apply 80/20 at the right layer", description: "Keep learning broad, reduce duplicated complexity, and focus shared investment on the repeated needs with broader value." },
          { title: "Let the values set the posture", description: "Use Integrity, Simplicity, Trust, Respect, and Shared Risk to guide experimentation, accountability, collaboration, and work redesign." },
          { title: "Share support, not ownership", description: "The enterprise provides the ecosystem and common capabilities while business units remain accountable for their work and outcomes." },
        ],
      },
    ],
    leaveWith: [
      { title: "An alignment narrative", description: "A clear explanation that the AI strategy applies the existing ITW Business Model rather than competing with it." },
      { title: "A business-model lens", description: "A practical way to use Customer-Back Innovation, decentralization, and 80/20 when deciding how an AI opportunity should move." },
      { title: "A values-based posture", description: "A leadership language for enabling people responsibly through Integrity, Simplicity, Trust, Respect, and Shared Risk." },
    ],
  },
  {
    id: "investment",
    audience: "Leaders",
    framework: "THE GOLDEN STAKE",
    title: "Choose AI Investments",
    subtitle: "Use a fair test when an idea asks for broader time, money, or reach.",
    for: "Sponsors, Finance, IT, Legal, and business leaders",
    format: "45 minutes + Q&A · Keynote",
    description: "Not every personal tool or team practice needs an investment review. When an idea asks for enterprise applications, consequential actions, broader deployment, or meaningful funding, the Golden Stake provides a plain test: where we are starting, what should improve, where the boundaries sit, and what evidence would change the decision.",
    outcomes: [
      "Know when a local build becomes an investment decision",
      "Define a starting point and a result that can be evaluated",
      "Set boundaries and responsible conditions before reach increases",
      "Make a fair continuation decision based on evidence",
    ],
    leaveBehind: "A four-part investment and continuation test",
    agenda: [
      {
        heading: "The talk",
        rows: [
          { title: "When the test applies", description: "Use it for broader consequence and investment—not as a toll booth for experimentation." },
          { title: "Starting point", description: "Make the current condition visible before claiming improvement." },
          { title: "Expected result", description: "State what should change in terms the business can recognize." },
          { title: "Boundary", description: "Clarify authority, data, systems, people, and actions the solution may affect." },
          { title: "Continuation decision", description: "Agree on the evidence that supports moving, changing course, or stopping." },
        ],
      },
    ],
    leaveWith: [
      { title: "A proportional test", description: "A framework used when consequence grows, not a prerequisite for every idea." },
      { title: "A clearer investment decision", description: "Value, ownership, boundaries, and evidence stated in plain language." },
      { title: "A fair verdict", description: "Continue, change, contain, or stop based on what the work actually showed." },
    ],
  },
  {
    id: "information",
    audience: "Leaders",
    framework: "GOOD DATA IN",
    title: "Build on Ready Information",
    subtitle: "Make sure the information can carry what the ambition asks of it.",
    for: "Business, data, and platform leaders",
    format: "45 minutes + Q&A · Keynote",
    description: "Strong ideas still fail when the information underneath them is difficult to find, unreliable, or out of date. This is a business-readiness conversation: understand what can be trusted, what should be fixed, what can be worked around, and what should wait.",
    outcomes: [
      "Recognize when information—not the AI—is the real constraint",
      "Judge whether people can find, trust, and maintain the required information",
      "Choose which gaps to fix, work around, or leave alone",
      "Make readiness visible before commitment grows",
    ],
    leaveBehind: "A plain-language information-readiness check",
    agenda: [
      {
        heading: "The talk",
        rows: [
          { title: "Why good ideas sink", description: "See how missing, scattered, or unreliable information undermines otherwise promising work." },
          { title: "Can people find it?", description: "Determine whether the required information is accessible in the flow of work." },
          { title: "Can they trust it?", description: "Understand ownership, authority, quality, and conflicting sources." },
          { title: "Is it current?", description: "See whether the information can remain useful after the first build." },
          { title: "Fix, work around, or wait", description: "Choose the response that fits the value and the condition of the information." },
        ],
      },
    ],
    leaveWith: [
      { title: "The readiness question", description: "Can the information carry what we are asking AI to do?" },
      { title: "A three-part check", description: "Can people find it, trust it, and keep it current?" },
      { title: "A practical response", description: "A clear choice about what to fix now, work around, or leave alone." },
    ],
  },
];

export type AcademySummary = {
  id: string;
  title: string;
  subtitle: string;
  for: string;
  format: string;
  description: string;
  outcomes: string[];
  leaveBehind: string;
};

export const academySummaries: Record<string, AcademySummary[]> = {
  Employees: academyCourses.filter((course) => course.audience === "Employees"),
  Managers: academyCourses.filter((course) => course.audience === "Managers"),
  Leaders: academyCourses.filter((course) => course.audience === "Leaders"),
};
