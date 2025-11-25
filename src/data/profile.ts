export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  period: string;
  bullets: string[];
};

export type ProjectItem = {
  name: string;
  tagline?: string;
  tech: string[];
  description: string;
  status?: string;
  company?: string;
  role?: string;
  year?: string;
  overview?: string;
  highlights?: string[];
  links?: SocialLink[];
};

export type CertificationItem = {
  name: string;
  issuer: string;
  issued?: string;
  credentialId?: string;
  href?: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  summary: string;
  links: {
    github: string;
    linkedin: string;
    portfolio?: string;
    huggingface?: string;
    wandb?: string;
    medium?: string;
    substack?: string;
    lablab?: string;
    x?: string;
  };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: {
    languages: string[];
    pythonMl: string[];
    frameworks: string[];
    webTools: string[];
    databases: string[];
    infra: string[];
    dataViz: string[];
    core: string[];
  };
  certifications: CertificationItem[];
  writing: SocialLink[];
};

export const profile: Profile = {
  name: "Somesh Fengade",
  title: "Machine Learning Engineer — GenAI, Agentic/RAG Systems",
  location: "Mumbai / Pune, India",
  email: "someshfengde@gmail.com",
  summary:
    "Results-driven Machine Learning Engineer with a proven track record in building and deploying cutting-edge GenAI and agentic systems. Expert in designing robust RAG pipelines, advanced LLM tooling, and scalable ML services using FastAPI and state-of-the-art vector databases. Adept at delivering production-ready solutions with strong observability (LangFuse), seamless containerization (Docker), and resilient data infrastructure (MongoDB, Postgres). Versatile across computer vision, NLP, and tabular data, I thrive on solving complex problems and driving innovation from research to real-world impact.",
  links: {
    github: "https://github.com/someshfengde",
    linkedin: "https://linkedin.com/in/somesh-9188",
    portfolio: "https://somesh.gitbook.io/somesh-fengade",
    huggingface: "https://huggingface.co/Someshfengde",
    wandb: "https://wandb.ai/som",
    medium: "https://someshfengde.medium.com/",
    substack: "https://someshfengde.substack.com/",
    lablab: "https://lablab.ai/u/%40somesh341",
    x: "https://twitter.com/Someshfengde",
  },
  experience: [
    {
      company: "Culinda Inc.",
      role: "Machine Learning Engineer",
      location: "Remote (India)",
      period: "Jun 2023 – Present",
      bullets: [
        "Developing and deploying advanced ML models to address complex business challenges and optimize data utilization.",
        "Driving R&D initiatives to explore and productionize the latest in AI/ML, keeping Culinda at the forefront.",
        "Building deep learning systems that enhance data-driven decision-making across products.",
        "Spearheading NLP projects to derive actionable insights from large volumes of unstructured data.",
        "Collaborating with a team of engineers to evolve and refine AI-driven solutions.",
        "Built a scalable RAG-enabled, agentic chatbot for dynamic Q&A across dashboard elements; integrated agentic frameworks and LLMs for cybersecurity decision support.",
        "Contributed to the CARM/Darkeye SaaS; shipped custom features and mentored interns; designed Dark Watch (threat remediation module).",
      ],
    },
    {
      company: "Culinda Inc.",
      role: "Data Science Intern",
      location: "India (Remote)",
      period: "Nov 2022 – Jun 2023",
      bullets: [
        "Supported ML/NLP prototyping and data preparation for production workflows.",
        "Worked across Python tooling with emphasis on analytical workflows (Excel), dashboards (Dash), and experimentation.",
      ],
    },
    {
      company: "Indio Networks",
      role: "Data Visualization Intern",
      location: "Pune, India",
      period: "Apr 2022 – Jul 2022",
      bullets: [
        "Built Plotly dashboards for monitoring connected devices; authored FastAPI services and integrated them with Dash.",
        "Maintained dashboards and predictive models.",
      ],
    },
  ],
  projects: [
    {
      name: "Night Hawk — Agentic Data Intelligence Platform",
      tagline: "Streaming agentic analytics for hospital threat hunting",
      tech: [
        "GPT-4o",
        "OpenAI Agents SDK",
        "FastAPI",
        "WebSockets",
        "MongoDB",
        "Plotly",
        "Langfuse",
      ],
      description:
        "Orchestrates sub-agents across MongoDB + SQL backends to return live dashboards for cybersecurity analysts.",
      status: "Active",
      company: "Culinda Inc.",
      role: "AI Engineering Manager",
      year: "2025",
      overview:
        "Led the build of Night Hawk, a guardrailed agentic platform that coordinates DB + visualization agents over FastAPI/WebSockets to stream incremental Plotly insights for hospital threat analysis.",
      highlights: ["Real-time threat analysis", "Schema-compliant guardrails", "Streaming query responses"],
    },
    {
      name: "Dark Watch — AI Remediation Assistant",
      tagline: "LLM co-pilot delivering SOC-grade fixes",
      tech: [
        "GPT-4o",
        "LlamaIndex",
        "Vector Search",
        "REST API",
        "Slack",
        "Jira",
      ],
      description:
        "Agent bridges SOC tooling, retrieving context and walking analysts through prescriptive remediation steps.",
      status: "Completed",
      company: "Culinda Inc.",
      role: "AI Engineering Manager",
      year: "2024",
      overview:
        "Architected Dark Watch, an LLM-first remediation assistant with contextual retrieval, web lookups, and CLI/REST surfaces embedded into Culinda SOC workflows.",
      highlights: ["Automated incident remediation", "Contextual threat analysis", "SOC workflow integration"],
    },
    {
      name: "Academic RAG Chatbot",
      tagline: "Real-time, voice + text academic assistant",
      tech: ["React", "FastAPI", "LlamaIndex", "Llama-3.2-70B", "Cohere"],
      description:
        "Precise retrieval over university Q&A content with a multi-modal UX.",
      status: "Beta",
      company: "Freelance",
      role: "LLM Engineer",
      year: "2024",
      overview:
        "Deployed a privacy-safe campus copilot that blends realtime speech capture, localized vector search, and structured answer plans for students and faculty.",
      highlights: [
        "Voice + text parity with <800 ms perceived latency",
        "Dynamic prompt graphs for citation-grounded replies",
        "Self-serve content ingestion for departments",
      ],
    },
    {
      name: "litescript",
      tagline: "Utilities for streamlined Python scripts",
      tech: ["Python"],
      description:
        "Utility package to speed up prototyping with sane defaults (logging, imports).",
      status: "Open Source",
      company: "Personal",
      role: "Creator",
      year: "2023",
      overview:
        "Built a minimal Python helper layer bundling logging, CLI parsing, tracing stubs, and experiment tracking hooks to bootstrap ML playgrounds under 30 seconds.",
      highlights: [
        "Cuts boilerplate in hackathon scripts by ~40%",
        "Configurable logging + tracing primitives out of the box",
      ],
      links: [{ label: "GitHub", href: "https://github.com/someshfengde" }],
    },
    {
      name: "GPT-compare",
      tagline: "Streamlit UI for comparing GPT models",
      tech: ["Python", "Streamlit"],
      description: "Interactive comparison across GPT model variants.",
      status: "Active",
      company: "Personal",
      role: "Creator",
      year: "2023",
      overview:
        "Shipped a Streamlit playground that benchmarks GPT variants across prompts, grading outputs with rubric scores and latency capture for product teams.",
      highlights: [
        "Side-by-side diff view with persona-aware scoring",
        "Pluggable evaluators (LLM-as-judge, regex, heuristics)",
      ],
      links: [{ label: "GitHub", href: "https://github.com/someshfengde" }],
    },
  ],
  skills: {
    languages: ["Python", "SQL"],
    core: ["Generative AI", "Deep Learning", "Machine Learning", "OS", "DBMS"],
    pythonMl: ["PyTorch", "NumPy", "Pandas"],
    frameworks: ["FastAPI", "Flask"],
    webTools: ["Streamlit", "Gradio", "GitHub", "GitLab", "Jira"],
    databases: ["MySQL", "MongoDB", "Supabase", "PostgreSQL"],
    infra: ["Docker", "LangFuse", "Weaviate", "Qdrant"],
    dataViz: ["Plotly", "Dash"],
  },
  certifications: [
    { name: "AWS Machine Learning Specialty", issuer: "AWS" },
    { name: "AI Agents Fundamentals", issuer: "—" },
    { name: "Oxford ML Summer School", issuer: "Oxford MLSS" },
    { name: "AWS ML Nanodegree", issuer: "Udacity" },
    {
      name: "Intermediate Machine Learning",
      issuer: "Kaggle",
      issued: "Jul 2021",
    },
    {
      name: "Postman Student Expert",
      issuer: "Postman",
      issued: "Jul 2021",
    },
    {
      name: "Goldman Sachs Virtual Engineering Program",
      issuer: "Goldman Sachs",
      issued: "Jun 2021",
      credentialId: "gPqR7iFieuqoisGuk",
    },
    {
      name: "Intro to Machine Learning",
      issuer: "Kaggle",
      issued: "Mar 2021",
    },
  ],
  writing: [
    { label: "Medium", href: "https://someshfengde.medium.com/" },
    { label: "Substack", href: "https://someshfengde.substack.com/" },
    { label: "W&B Portfolio", href: "https://wandb.ai/som" },
  ],
};

export default profile;


