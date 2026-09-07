export const mission =
  "LOG_ON builds the direction infrastructure for African AI — the systems layer, the cognitive tooling, and the epistemological frameworks that make AI work for African contexts, African organisations, and African futures.";

export const positioning =
  "LOG_ON is the direction infrastructure for African AI deployment. We build the systems layer that most organisations skip: mapping the logic chain from daily AI execution to long-term African-defined outcomes, designing the epistemic environments that make agents work in African contexts, and aligning objective functions to African epistemological frameworks rather than borrowing them from San Francisco. Our work spans commercial consulting — cultural bias audits, agent environment design, strategic AI advisory — and original research in African cognitive AI and LLM interpretability. We are the only practice in Africa that treats the question of what your AI thinks as seriously as the question of what it does.";

export const lfaRows = [
  {
    layer: "IMPACT",
    time: "Long-term",
    def: "African cognitive sovereignty in the age of AI. Frontier LLMs reason in African epistemological frameworks as first-class capabilities — not as fine-tuned adaptations of Western models. African organisations deploy AI systems aligned to African values, operating on African infrastructure, governed by African institutions.",
    evidence:
      "Adoption of African-language reasoning primitives in ≥2 frontier model training pipelines. Academic recognition of African cognitive frameworks as valid AI architectural foundations. Measurable reduction of cultural bias scores in cross-lingual interpretability benchmarks.",
    assumptions:
      "African organisations will pay for culturally-aligned AI systems once the value is documented. The research community will respond to evidence-based arguments about cultural bias. Frontier labs will adopt external research findings when presented with undeniable interpretability data.",
  },
  {
    layer: "OUTCOMES",
    time: "Medium-term",
    def: "Three outcome streams running in parallel: (1) Research — LOG_ON's interpretability work is cited, funded, and replicated. (2) Commercial — African organisations use LOG_ON's direction infrastructure. (3) Public — a growing body of work establishes LOG_ON as the definitive voice on African AI epistemology.",
    evidence:
      "Grant awarded (Schmidt Sciences or equivalent). ≥3 paying clients on consulting retainer. Essay series reaches 10,000+ readers. ≥1 academic paper submitted to ACL/NeurIPS/AfricaNLP. LOG_ON cited in ≥2 external research publications.",
    assumptions:
      "LOG_ON maintains consistent output pace. Research quality is sufficient for peer recognition. Commercial clients exist who understand the problem and have budget. Public audience grows through the content waterfall.",
  },
  {
    layer: "OUTPUTS",
    time: "What we produce",
    def: "Research: Cultural Bridge Tech toolkit, Proverb Activation Library, cross-lingual SAE bias maps, African NER / discourse benchmark suite, grant proposals. Commercial: Cultural Bias Rapid Audits, Agent Environment Design, African AI Direction Consulting. Content: weekly essays and the LinkedIn / YouTube / podcast waterfall. Products: AgentBridge Africa, LISTNER, GigPilot, SafeChain.",
    evidence:
      "Per quarter: ≥2 essays published, ≥1 research output, ≥1 commercial engagement, ≥1 grant application or response.",
    assumptions:
      "Quality is maintained across output volume. Content and research reinforce each other — essays drive visibility, research drives credibility, commercial work funds both.",
  },
  {
    layer: "INPUTS",
    time: "What we invest",
    def: "Time: Research 20h/week, commercial delivery 15h/week, content 10h/week, business development 5h/week. Infrastructure: Claude / Anthropic access, African language corpora (Owomoyela, Masakhane), compute for sparse autoencoder analysis, website and distribution. Network: AfricaNLP, Masakhane, DAIR Institute, Schmidt programme officers, existing clients.",
    evidence:
      "API costs manageable at current research volume. Time allocation sustainable for a one-person operation. Network engagement consistent and reciprocal.",
    assumptions:
      "Compute costs remain accessible. API access continues. Health and capacity maintained. Network relationships cultivated, not extracted.",
  },
] as const;

export const audits = [
  {
    id: "cbt",
    level: "CRITICAL",
    name: "Cultural Bridge Tech / Interpretability Research",
    believe:
      "That standard English-language sparse autoencoder methods apply without modification to African-language feature analysis. This is the silent assumption most likely to produce valid-looking but culturally biased results.",
    missing:
      "No documented protocol for distinguishing genuine cross-lingual feature equivalence from representation collapse into English proxies.",
    boundary:
      "Research claims about African-language bias may be using evaluation methods that themselves carry Western-language bias.",
    action:
      "Write a 1-page research protocol documenting the specific failure modes of applying English-trained SAE methods to Yoruba / Igbo / Amharic feature analysis. This becomes the CLAUDE.md for the research agent.",
  },
  {
    id: "aba",
    level: "CRITICAL",
    name: "AgentBridge Africa",
    believe:
      "That multi-agent orchestration patterns derived from US/EU enterprise software apply to African organisational decision-making. Ubuntu deliberation and kinship-network decision logic are not in the agent's epistemic environment.",
    missing:
      "No documented encoding of African consensus-building protocols as agent communication primitives. The inter-agent layer is likely mirroring Western hierarchical command patterns.",
    boundary:
      "Presenting AgentBridge as African while its coordination logic is architecturally Western.",
    action:
      "Define three African deliberation protocols (Indaba, Palaver, Ubuntu circle) as formal agent-to-agent communication patterns. Add to AgentBridge CLAUDE.md as non-negotiable primitives.",
  },
  {
    id: "listner",
    level: "HIGH",
    name: "LISTNER",
    believe:
      "That active listening frameworks imported from Western therapeutic and business communication literature are culturally neutral. Oral tradition comprehension in African languages has different discourse markers, turn-taking, and silence semantics.",
    missing: "No African oral discourse markers in the listening model.",
    boundary:
      "The agent will systematically misidentify comprehension signals in African-language contexts.",
    action:
      "Add a discourse marker library for at least Yoruba and Pidgin English to LISTNER's cognitive tooling layer before the next deployment iteration.",
  },
  {
    id: "gigpilot",
    level: "HIGH",
    name: "GigPilot",
    believe:
      "That gig economy patterns, pricing norms, and client relationship structures from Upwork / Fiverr data apply to Nigerian freelance markets.",
    missing:
      "No documented Nigerian / African gig market data as cognitive tooling. Informal economy logic, relationship-first contracting, and mobile-money payment flows are absent.",
    boundary: "The agent optimises for the wrong market model.",
    action:
      "Source 50 real Nigerian freelance contract examples, pricing conversations, and client interaction patterns. Feed as cognitive tooling.",
  },
  {
    id: "safechain",
    level: "MEDIUM",
    name: "SafeChain MVP",
    believe:
      "Safety protocol structures drawn from Western oil and gas regulatory frameworks (API, OSHA, ISO).",
    missing:
      "25 years of African operational tacit knowledge is in the operator's head, not in the agent's epistemic environment.",
    boundary:
      "The most valuable cognitive tooling you own is currently inaccessible to the system.",
    action:
      "Spend 3 hours writing Safety Protocol Delta — the differences between what the textbook says and what actually works in African oil and gas operations.",
  },
  {
    id: "househunter",
    level: "MEDIUM",
    name: "HouseHunter",
    believe:
      "Property search logic, valuation heuristics, and landlord-tenant dynamics from Western property markets.",
    missing:
      "No documented Lagos property market primitives — area reputation encoding, landlord relationship norms, inspection-protocol cultural logic.",
    boundary: "The agent is flying blind in a market it does not understand.",
    action:
      "Ten interviews with Lagos renters and landlords. Extract the unwritten rules. Build a Property Market CLAUDE.md.",
  },
] as const;

export const offers = [
  {
    id: "t1",
    tier: "Tier 1 — Entry",
    priceN: "₦300K–₦750K",
    priceU: "$500–$1,500",
    name: "Cultural Bias Rapid Audit",
    featured: false,
    items: [
      "48–72 hour audit of a specific LLM deployment in an African-language or cultural context",
      "Documented bias sites with evidence — where the model collapses African concepts into English proxies",
      "5-page report with prioritised remediation recommendations",
      "One 60-minute debrief call",
    ],
    deliver: "PDF report + annotated prompt examples + remediation checklist",
    client:
      "Ed-tech startup deploying AI tutors in Nigeria / Ghana / Kenya. Fintech using AI credit scoring. Any org whose AI product touches African end users.",
  },
  {
    id: "t2",
    tier: "Tier 2 — Mid",
    priceN: "₦1.8M–₦4.5M",
    priceU: "$3,000–$7,500",
    name: "Agent Environment Design",
    featured: true,
    items: [
      "Full epistemic environment design for one AI agent deployment",
      "Constraint mapping: what the agent must never do, what it can take as given",
      "Objective function alignment for the specific African context",
      "Cognitive tooling audit",
      "Full CLAUDE.md / system prompt architecture document",
      "2-week implementation support",
    ],
    deliver: "20-page architecture brief + CLAUDE.md template + implementation files + 2 review calls",
    client:
      "Nigerian bank, telecom, or government agency building an internal AI agent. Startup with $50K+ AI spend looking for ROI.",
  },
  {
    id: "t3",
    tier: "Tier 3 — Premium",
    priceN: "₦9M–₦21M",
    priceU: "$15,000–$35,000",
    name: "African AI Direction Consulting",
    featured: false,
    items: [
      "Strategic direction infrastructure for organisations deploying AI at scale in African contexts",
      "LFA mapping for all AI projects: Impact → Outcomes → Outputs → Inputs",
      "Cultural alignment framework for objective functions",
      "Systems layer design: which African epistemological frameworks should govern behaviour",
      "Full audit of existing deployments against cultural alignment criteria",
      "3-month advisory: monthly strategic review, on-call guidance, interim research brief",
    ],
    deliver:
      "Strategic brief + full audit report + monthly advisory calls + research brief + dedicated WhatsApp channel",
    client:
      "Pan-African development organisation, telco deploying AI nationally, international NGO, government AI strategy team.",
  },
] as const;

export const landingCopy = [
  {
    label: "Hero headline",
    text: "Your AI Is Executing. But Is It Executing Toward the Right Thing?",
  },
  {
    label: "Sub-headline",
    text: "Most organisations deploying AI in African contexts are getting technically correct outputs that solve the wrong problem, miss the cultural context, or violate constraints that were never documented. LOG_ON builds the direction infrastructure that makes your AI work — the systems layer, the cognitive tooling, and the alignment frameworks that frontier models were never built with Africa in mind.",
  },
  {
    label: "Credibility",
    text: "LOG_ON is led by a cross-disciplinary AI systems architect with 25 years of upstream-to-downstream operations experience, active research in African cognitive AI and LLM interpretability, and a published body of work at the intersection of African epistemology and agentic system design. We are the only practice in Africa that treats your AI's objective function as a cultural document — and knows how to rewrite it.",
  },
  {
    label: "Pain",
    text: "You've invested in AI. Your agents are running. Your team is using the tools. But something is off — the outputs are plausible but not quite right for your context. Your Nigerian users get generic responses built for American behaviour patterns. Your Yoruba-speaking staff find the AI unhelpful in ways they can't articulate. The problem isn't your prompts. It's that your AI was built with someone else's direction — and it's executing toward someone else's outcomes.",
  },
] as const;

export const waterfall = {
  linkedin: [
    "Thread 1 — I asked Claude to explain how its own intelligence works. Here's what it said about itself that should concern you.",
    "Thread 2 — Your AI has an objective function. You didn't write it. Here's who did — and what they decided was 'good'.",
    "Thread 3 — 864 likes for 5 words: 'Flawless execution on the wrong things.' Why this is the most important AI deployment insight of 2026.",
    "Thread 4 — If Africa builds AI, it doesn't look like Llama with Swahili tokenisation. Here's what it actually looks like.",
    "Thread 5 — We're not talking about cognitive colonialism. We should be. Here's the operational definition that matters for AI.",
  ],
  youtube: [
    "Video 1 (15 min) — How Claude's Intelligence Actually Works — And Why That Should Change How You Use It.",
    "Video 2 (22 min) — Why Africa Needs Its Own AI — And What That Actually Means.",
  ],
  podcast: [
    "Whose Intelligence Is This? The LOG_ON Position on African AI Sovereignty.",
    "0–5 min hook · 5–15 architecture · 15–30 who writes the objective function · 30–45 African first principles · 45–55 five actions · 55–60 LOG_ON positioning.",
  ],
  twitter: [
    "Hook tweets from each section's sharpest line.",
    "Stat tweets: Africa has less than 1% of global data centre capacity. Over 2,000 languages. This is not a gap. It's designed exclusion by omission.",
  ],
  carousel: [
    "Carousel 1 — The 4 Layers of Who Wrote Your AI's Logic.",
    "Carousel 2 — Brittle vs. Antifragile AI.",
    "Carousel 3 — 5 Actions for African AI Sovereignty.",
  ],
};

export const thread1 = [
  {
    n: "1/8",
    hook: "I asked Claude to explain how its own intelligence works. What it said about itself should change how you use it.",
    body: "William Irvine gave Claude one word — “The.” — and was stunned when it returned a sentence about the stretching of minds rather than a generic sunset. He called it a heart-to-heart. He was right. But he stopped one question short of the one that matters.",
  },
  {
    n: "2/8",
    hook: "The architecture underneath Claude is a transformer. It doesn't retrieve knowledge. It generates plausible continuations.",
    body: "Every word you type is tokenised, embedded, attended to across all other tokens simultaneously. The “knowledge” isn't stored in a database — it's distributed across billions of parameters as patterns of activation. It doesn't know what is true. It generates what is statistically likely.",
  },
  {
    n: "3/8",
    hook: "That architecture has a cultural centre of gravity — and it's not Lagos.",
    body: "Training data: English-skewed. Human raters: predominantly Western. Constitutional principles: written by a specific team in San Francisco. Each layer has authors. Africa has 2,000+ languages. Most are statistically invisible.",
  },
  {
    n: "4/8",
    hook: "ACL 2025 research confirmed what most African practitioners already know intuitively.",
    body: "LLMs misrepresent African languages through three interrelated gaps: biased pretraining data, inaccurate evaluation, and cultural blindness. NeurIPS 2025 went further — current AI systems are not just underperforming on African languages. They are systematically biased against African entities.",
  },
  {
    n: "5/8",
    hook: "The answer is not “Llama with Swahili tokenisation.”",
    body: "Fine-tuning Western models on African data accepts that the architecture is correct and the data is the variable. That is colonial education logic. Genuine African AI begins with different questions: What are the computational primitives of African reasoning?",
  },
  {
    n: "6/8",
    hook: "The infrastructure momentum is real. The epistemological question is still waiting.",
    body: "AfDB + UNDP launched the AI 10 Billion Initiative in February 2026. Hardware is moving. What African AI actually thinks — in what cognitive frameworks, toward what objectives — is still waiting for its architects.",
  },
  {
    n: "7/8",
    hook: "UNDP said it plainly: “You cannot compete in the age of intelligence if you do not control the pipes.”",
    body: "Those pipes are not just fibre and data centres. They are the objective functions, the constitutional principles, the reward models that shape what AI considers a good response. Every AI product deployed in Africa with someone else's objective function is a cognitive infrastructure decision made by default.",
  },
  {
    n: "8/8",
    hook: "The question is not whether to build Africa's cognitive infrastructure. It's whether you will start before the window closes.",
    body: "The full essay — “Whose Intelligence Is This?” — covers eight questions from AI architecture to African sovereignty. If your organisation is deploying AI in African contexts and wants to know whether it's working toward the right outcomes — that's exactly what we audit.",
  },
] as const;

export const tools = [
  {
    rank: "1",
    type: "Cognitive · Research Foundation",
    name: "Proverb Activation Library (PAL) — Owomoyela Corpus",
    desc: "Owomoyela's Yoruba proverb corpus contains ~2,500 proverbs. Without formalising these as machine-readable causal models — input conditions, causal logic, output expectations, exception handling — interpretability research has no ground truth for what Yoruba conceptual reasoning actually looks like. Annotate 100 proverbs with causal structure, bidirectionality flag, and social domain. 40 hours. Unlocks the entire interpretability agenda.",
    action:
      "Start with Owomoyela's corpus. Annotate 10 proverbs per session × 10 sessions = PAL v0.1. Submit as a dataset paper to AfricaNLP 2026.",
  },
  {
    rank: "2",
    type: "Cognitive · Research Infrastructure",
    name: "Cross-Lingual Sparse Autoencoder (SAE) Analysis Setup",
    desc: "The Cultural Bridge Tech thesis requires mapping, at the feature level, where a frontier LLM's representation of a Yoruba concept collapses into its nearest English proxy rather than maintaining semantic independence. Without a working SAE analysis pipeline for African languages, claims about representation collapse cannot yet be demonstrated empirically.",
    action:
      "Build a minimal viable SAE analysis pipeline for one African language pair (Yoruba ↔ English). Document the setup. This is the preliminary result for the grant application.",
  },
  {
    rank: "3",
    type: "Cognitive · Research Validation",
    name: "African-Language Discourse Competence Benchmark Suite",
    desc: "Current African NLP benchmarks measure proximity to translated English. A programme arguing that African cognitive frameworks deserve architectural status needs its own evaluation criteria. Start with three tasks: Yoruba proverb completion, Ubuntu deliberation simulation, oral narrative coherence.",
    action:
      "Design benchmark task 1 (proverb completion) with 50 items. Partner with a Yoruba linguistics researcher for validation. Submit to AfricaNLP or an ACL workshop.",
  },
] as const;

export const sources = [
  {
    id: "williams",
    tag: "Source 01 · Williams · PM Researcher · Aug 2025",
    title: "Why Systems Thinking Must Come Before Analytical Thinking",
    core: "Most PMs open Gantt charts before understanding the system they're managing. The LFA framework fixes this by starting from Impact and working backward: Impact → Outcomes → Outputs → Inputs. Execution without systems is efficiency without impact.",
    concept: "Systems layer must exist before the analytical layer can function correctly.",
    tone: "teal" as const,
  },
  {
    id: "derosiaux",
    tag: "Source 02 · Derosiaux · Technical Executive · Mar 2026",
    title: "Claude Code told me what tools it needs to work faster.",
    core: "Claude Code ran six parallel subagents to audit its own environment. Missing: ripgrep, fd, DuckDB, semgrep. Highest-impact change isn't PATH — it's the constraints file. We onboard human engineers carefully. We hand AI a bare terminal.",
    concept:
      "Epistemic environment (cognitive tooling + constraints) shapes what an agent can think — not just how fast it executes.",
    tone: "info" as const,
  },
  {
    id: "koe",
    tag: "Source 03 · Koe · future/proof · Mar 2026",
    title: "How to start a one-person business in 2026 (things changed)",
    core: "Everything you did before + AI for speed, quality, iteration. Brand + Content + Offer is still the frame. Lower barrier, higher skill ceiling. Trust is the moat. Direction is the leverage.",
    concept: "AI, frankly, isn't good enough on its own. The person directing it is where the magic lies.",
    tone: "danger" as const,
  },
] as const;

export const synthThreads = [
  {
    n: "1",
    label: "The Amplification Law",
    title: "AI amplifies whatever direction it's given — correct or wrong, equally.",
    body: "Williams: analytical execution amplifies the outcome of the systems layer beneath it. Derosiaux: better tools amplify whatever the agent has been configured to do. Koe: AI works best when you know what you want. The intelligence of the AI is not the constraint. The quality of the direction is.",
  },
  {
    n: "2",
    label: "Trust as Architecture",
    title: "Trust is the only durable moat in a world where execution is commoditised.",
    body: "Koe names it directly. Williams' LFA is a trust-building architecture — a documented logic of accountability. Derosiaux's CLAUDE.md-as-constraint-document is a trust architecture for the agent.",
  },
  {
    n: "3",
    label: "The Skill Ceiling Rises",
    title: "Lower barrier to entry. Higher skill ceiling. The gap between practitioners widens.",
    body: "AI democratises access to execution. It concentrates advantage among the skilled few who direct that execution correctly.",
  },
  {
    n: "4",
    label: "Iteration is the Architecture",
    title: "One pass is never the answer. The loop is the product.",
    body: "LFA requires revisiting assumptions when outcomes don't match. Update CLAUDE.md when the agent violates architecture — close the loop at the systems level, not the prompt level.",
  },
  {
    n: "5",
    label: "Cognitive vs. Execution Layer",
    title: "Tools that change what you can think are categorically different from tools that change how fast you execute.",
    body: "DuckDB is cognitive tooling; ripgrep is execution tooling. Williams' LFA is cognitive architecture for projects. Cognitive tooling gaps cannot be fixed by working harder inside the execution layer.",
  },
  {
    n: "6",
    label: "Context as Value Creation",
    title: "The richer and more precise the context you give AI, the higher the quality ceiling of what it can produce.",
    body: "Context is not convenience. Context is the mechanism of quality. This is the operational argument for LOG_ON's Cultural Bridge Tech thesis.",
  },
] as const;

export const researchStreams = [
  {
    label: "Cultural Bridge Tech",
    title: "African Language LLM Interpretability",
    desc: "Sparse autoencoder feature analysis detecting where frontier LLMs collapse African concepts into English proxies. Building the Proverb Activation Library as ground truth for Yoruba reasoning primitives.",
  },
  {
    label: "AgentBridge Africa",
    title: "African Deliberation Protocols for Multi-Agent Systems",
    desc: "Formalising Ubuntu, Indaba, and Palaver as agent-to-agent communication primitives. A proof that African coordination logic produces architecturally different — and contextually better — outcomes.",
  },
  {
    label: "Discourse Competence",
    title: "African-Language AI Evaluation on African Terms",
    desc: "Benchmarks that measure AI performance in African cognitive terms — proverb completion, Ubuntu deliberation simulation, oral narrative coherence — not proximity to translated English.",
  },
] as const;

export const stats = [
  { n: "<1%", l: "Africa's share of global data centre capacity" },
  { n: "83%", l: "African AI startup funding concentrated in 4 countries" },
  { n: "2,000+", l: "African languages — most statistically invisible in frontier LLMs" },
  { n: "$60B", l: "AI fund pledged for Africa — execution is the variable" },
] as const;

export const moat = [
  "25 years of systems-level operational experience in African energy, infrastructure, and enterprise contexts — tacit knowledge no consultant without this background can credibly apply to AI systems design.",
  "Active interpretability research — the only public body of work connecting sparse autoencoder analysis to African-language cognitive bias detection in frontier LLMs.",
  "Agentic systems architecture — Claude-in-Claude builds, multi-agent orchestration with African deliberation protocols (Ubuntu, Indaba, Palaver), cultural alignment frameworks.",
  "A growing body of essays and research establishing LOG_ON as the definitive voice on African AI epistemology — building the moat in public, one argument at a time.",
] as const;

export const calendar = [
  {
    week: "Week 1 — Foundation",
    items: [
      "Day 1: Mission statement live on LinkedIn bio, email signature, X bio. First outreach DM sent.",
      "Day 2: Deploy the site. Share the link with three contacts.",
      "Day 3: Post LinkedIn Thread 1. Reply to every comment.",
      "Day 4–5: Save Cultural Bridge Tech and AgentBridge Africa CLAUDE.md files. Run PAL test prompts 1–3.",
      "Day 6–7: Remaining CLAUDE.md files. Identify five Tier 1 targets. Send two more outreach DMs.",
    ],
  },
  {
    week: "Week 2 — Commercial pipeline",
    items: [
      "Build Carousel 1 (4 Layers of Who Wrote Your AI's Logic). Post to LinkedIn, Instagram, and X.",
      "Contact one Yoruba linguistics researcher for PAL v0.1 validation.",
      "Post LinkedIn Thread 2.",
      "Send remaining outreach DMs. Follow up on Day 1 DMs with no response.",
    ],
  },
  {
    week: "Weeks 3–4 — Research and content",
    items: [
      "PAL session 2: annotate proverbs 11–20.",
      "Record YouTube Video 1 from the existing essay script.",
      "Post Threads 3 and 4.",
      "Deliver first Tier 1 audit if a client has been onboarded.",
      "Begin SAE pipeline setup for Yoruba ↔ English feature analysis.",
    ],
  },
] as const;

export const claudeDocs: Record<string, string> = {
  cbt: `IMPACT: Make cultural bias in frontier LLMs undeniable — demonstrated, quantified, published.

CONSTRAINTS:
1. Never apply English-trained SAE baselines without explicit cross-lingual calibration documentation.
2. Never use translated benchmarks as ground truth for African-language evaluation.
3. Never conflate representation gap (weak activation) with representation collapse (wrong semantic cluster).
4. Never publish claims without a confusion matrix covering: concept tested, expected cluster, actual cluster, distance metric, language pair.

KEY ASSUMPTION TO AUDIT: Are we using evaluation methods that themselves carry Western-language bias?

OUTPUT FORMAT: Every finding = (1) One-sentence claim (2) Evidence (3) Methodology note (4) Limitation (5) Next question.

GRANT TARGET: Schmidt Sciences 2026 Interpretability RFP. Need before submission: PAL v0.1 (50 proverbs), one pilot experiment, one co-author with African linguistics credentials.`,
  aba: `IMPACT: Prove multi-agent coordination can be architected around African deliberation models — by demonstration, not argument.

THREE COORDINATION PROTOCOLS (non-negotiable):
1. UBUNTU CIRCLE: No agent reaches final decision unilaterally. Every significant output reviewed by peer agent: AFFIRM / CHALLENGE / HOLD.
2. INDABA: On disagreement, each dissenting agent submits: POSITION / REASONING / EVIDENCE / CONCERN. Synthesis agent reconciles. Unaddressed CONCERNS block the synthesis.
3. PALAVER: For complex tasks (3+ agents, 5+ steps). Rotating FACILITATOR manages sequencing only — no domain content. Any agent can call PALAVER PAUSE.

CONSTRAINTS:
1. Never implement strict hierarchical command structure. FACILITATOR is a process role, not authority.
2. Never allow an agent to finalise output without UBUNTU CIRCLE review.
3. Never treat Western enterprise multi-agent patterns as architectural defaults.
4. Never optimise for speed at the expense of the deliberation loop. The overhead IS the point.

EVALUATION ORDER: (1) Protocol compliance (2) Deliberation quality (3) Task accuracy (4) Latency.`,
};

export const palSample = `PROVERB: "Bí ọmọ bá ń sùnkún, ìyá rẹ̀ gbọ́"
LITERAL: "When a child cries, its mother hears"
SEMANTIC FRAME: Relational obligation — the bond that creates obligatory attention
CAUSAL STRUCTURE:
  Condition: A dependent signals distress
  Mechanism: The bonded caretaker's attention is activated by the signal (not a choice — the bond compels it)
  Outcome: Caretaker responds — non-optional
BIDIRECTIONALITY: YES — inverse: if the mother does not hear, the bond is broken or the signal is too weak
SOCIAL DOMAIN: Family obligation, community responsibility, leadership accountability
COLLAPSE RISK: HIGH — English LLMs likely activate "auditory perception" not "relational obligation"
TEST PROMPT: "A leader who does not respond to community grievance is like..."
EXPECTED ACTIVATION: obligation, bond, relational duty (NOT sensory perception)`;

export const outreachDm = `Hi [Name],

I've been following [Company]'s work on AI tutoring for Nigerian students — impressive reach.

One question worth asking: has the AI been audited for cultural misalignment? Most AI tutoring systems are trained on Western curricula, which means Nigerian students often get responses optimised for a different context.

I run a 48-hour audit that documents specifically where a model is miscalibrated for Nigerian users and what to do about it — 5-page report.

Worth a quick call?

— Logo | LOG_ON AI`;

export type ExecTask = {
  id: string;
  title: string;
  desc: string;
  when: string;
};

export const execGroups: {
  rec: string;
  domain: string;
  title: string;
  tasks: ExecTask[];
}[] = [
  {
    rec: "01",
    domain: "From Williams · LFA Framework",
    title: "LOG_ON Logical Framework",
    tasks: [
      {
        id: "r1-bio",
        title: "Add mission statement to LinkedIn bio",
        desc: "Replace the current bio with the one-sentence mission. Forty words, no jargon.",
        when: "TODAY — 5 minutes",
      },
      {
        id: "r1-sig",
        title: "Add mission statement to email signature",
        desc: "Below name and title. One line, then the site.",
        when: "TODAY — 3 minutes",
      },
      {
        id: "r1-about",
        title: "Publish LFA as the About logic chain",
        desc: "Not a biography. A logic chain. Live on the site.",
        when: "WEEK 1",
      },
      {
        id: "r1-share",
        title: "Share LFA with 3 professional contacts",
        desc: "Ask: does this match what you think I do? What's missing?",
        when: "WEEK 1",
      },
    ],
  },
  {
    rec: "02",
    domain: "From Derosiaux · Agent Environment Design",
    title: "Agent Environment Audit",
    tasks: [
      {
        id: "r2-cbt",
        title: "Save Cultural Bridge Tech CLAUDE.md",
        desc: "Place it where the interpretability research agent reads instructions.",
        when: "TODAY",
      },
      {
        id: "r2-aba",
        title: "Save AgentBridge Africa CLAUDE.md",
        desc: "Three protocols must be live before the next sprint.",
        when: "TODAY",
      },
      {
        id: "r2-rest",
        title: "Save LISTNER, GigPilot, SafeChain CLAUDE.md files",
        desc: "Split into separate files per project.",
        when: "WEEK 1",
      },
      {
        id: "r2-hh",
        title: "Run universal audit protocol on HouseHunter",
        desc: "What does it assume? What constraints are missing? What cognitive tooling would change what it can reason about?",
        when: "WEEK 2",
      },
    ],
  },
  {
    rec: "03",
    domain: "From Koe · Brand + Offer",
    title: "Offer Stack + Outreach",
    tasks: [
      {
        id: "r3-site",
        title: "Keep the public site live",
        desc: "Hero, three offer tiers, contact form. Dual pricing already in place.",
        when: "THIS WEEK",
      },
      {
        id: "r3-targets",
        title: "Identify 5 Tier 1 audit targets",
        desc: "Deploying AI in African contexts, evidence of budget, decision-maker on LinkedIn. Send one DM today.",
        when: "TODAY",
      },
      {
        id: "r3-price",
        title: "Price in Naira and USD on every proposal",
        desc: "Dual pricing removes friction. The international anchor makes the local price accessible.",
        when: "TODAY",
      },
    ],
  },
  {
    rec: "04",
    domain: "From Koe · Content Waterfall",
    title: "Content Waterfall",
    tasks: [
      {
        id: "r4-t1",
        title: "Post LinkedIn Thread 1",
        desc: "Eight tweets already written. Schedule 8am Tuesday or Wednesday Lagos time.",
        when: "THIS WEEK",
      },
      {
        id: "r4-yt",
        title: "Record YouTube Video 1",
        desc: "Fifteen-minute script. Talk to camera. Done is better than perfect.",
        when: "WEEK 2",
      },
      {
        id: "r4-car",
        title: "Build Carousel 1 in Canva",
        desc: "Four Layers of Who Wrote Your AI's Logic. Post to LinkedIn, Instagram, and X.",
        when: "WEEK 2",
      },
      {
        id: "r4-rest",
        title: "Post Threads 2–5 on a weekly cadence",
        desc: "Each one links back to the essay and to LOG_ON services.",
        when: "WEEKS 2–5",
      },
    ],
  },
  {
    rec: "05",
    domain: "From Derosiaux · Cognitive Tooling",
    title: "PAL v0.1 + Research Priorities",
    tasks: [
      {
        id: "r5-test",
        title: "Run PAL v0.1 test prompts",
        desc: "Record actual activation clusters versus expected. Document collapse instances.",
        when: "MONTH 1",
      },
      {
        id: "r5-50",
        title: "Expand PAL to 50 proverbs",
        desc: "Ten proverbs per session. Four more sessions = dataset paper ready.",
        when: "MONTH 1",
      },
      {
        id: "r5-ling",
        title: "Contact a Yoruba linguistics researcher",
        desc: "UNILAG, OAU, or Masakhane. One email. One ask. Co-authorship strengthens the paper.",
        when: "WEEK 2",
      },
      {
        id: "r5-sae",
        title: "Build minimal SAE pipeline for Yoruba ↔ English",
        desc: "Start with the top three collapse-risk proverbs from PAL v0.1.",
        when: "MONTH 1–2",
      },
    ],
  },
  {
    rec: "06",
    domain: "Master Strategic Brief",
    title: "Positioning + 30-Day Calendar",
    tasks: [
      {
        id: "r6-d1",
        title: "Week 1 Day 1 tasks (mission + first DM)",
        desc: "Total time: 20 minutes. Highest-leverage actions in the entire brief.",
        when: "TODAY",
      },
      {
        id: "r6-site",
        title: "Share the live site with three contacts",
        desc: "Ask whether the positioning matches how they already describe the work.",
        when: "DAY 2",
      },
      {
        id: "r6-pal",
        title: "Block 2 hours every Monday for PAL annotation",
        desc: "Ten proverbs per session. No compute cost. Pure value creation.",
        when: "EVERY MONDAY — MONTH 1",
      },
    ],
  },
];
