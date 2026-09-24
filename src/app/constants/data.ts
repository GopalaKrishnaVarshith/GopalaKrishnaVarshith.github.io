export const IS_PUBLIC_SITE = Boolean(process.env.NEXT_PUBLIC_SITE_URL);
export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3000";
export const ABOUT_ME = {
  name: "Krishna Varshith R",
  title:
    "Regulatory Technology Business Analyst | Workflow Automation & Responsible AI",
  location: "Hyderabad, India",
  email: "varshithgopalakrishna@gmail.com",
  description: [
    "I work where regulatory operations, business analysis, and digital product delivery meet. I make the process, data, rules, handoffs, and controls visible before recommending a tool.",
    "My work spans RIMS and regulatory data, pharmacovigilance, document quality, request workflows, and responsible AI. At Amgen, I help turn manual regulatory work into traceable tools that people can review, use, and maintain.",
    "I stay close to the full delivery path: discovery, requirements, prototyping, UAT, release readiness, adoption, and continuous improvement. I also wrote Pharmacovigilance Made Easy to make a complex field easier to learn.",
  ],
  profileImage: "/krishna-varshith-portrait.png",
  profileGif: "/krishna-varshith-portrait.png",
};
export const USER_NAMES = {
  githubUsername: "",
  linkedinUsername: "varshithrgk",
  twitterUsername: "",
  peerlistUsername: "",
  instagramUsername: "",
  calUsername: "",
};
export const SOCIAL_LINKS = {
  github: "",
  linkedin: "https://www.linkedin.com/in/varshithrgk/",
  peerlist: "",
  twitter: "",
  instagram: "",
  resume: "",
  email:
    "mailto:varshithgopalakrishna@gmail.com?subject=Regulatory%20technology%20opportunity",
};
export const CONTACT_FORM_ENDPOINT = "";
export { PROJECTS } from "./projects";
export const CAPABILITIES = [
  {
    number: "01",
    title: "Regulatory workflow discovery",
    description:
      "Turn ambiguous requests into mapped processes, explicit business rules, clear ownership, and testable acceptance criteria.",
    evidence: "Amgen discovery, stakeholder alignment, UAT",
  },
  {
    number: "02",
    title: "Workflow automation & product delivery",
    description:
      "Design intake, assignment, status, permissions, exceptions, and notifications as one usable journey from request to resolution.",
    evidence: "Internal regulatory request and quality workflows",
  },
  {
    number: "03",
    title: "Document & data quality",
    description:
      "Build traceable QC around terminology, references, metadata, naming, document structure, and regulatory records.",
    evidence: "Internal document QC and regulatory data work",
  },
  {
    number: "04",
    title: "Responsible AI implementation",
    description:
      "Choose AI only where it improves the workflow, with human review, clear failure paths, privacy, and measurable value.",
    evidence: "AI-assisted delivery in regulated workflows",
  },
];
export const DELIVERY_STEPS = [
  {
    number: "01",
    title: "Find the friction",
    detail: "Listen to users and map the current process.",
  },
  {
    number: "02",
    title: "Make rules explicit",
    detail: "Define data, decisions, ownership, risks, and exceptions.",
  },
  {
    number: "03",
    title: "Choose the response",
    detail:
      "Use process redesign, rules, an application, analytics, or AI as the problem warrants.",
  },
  {
    number: "04",
    title: "Validate with users",
    detail:
      "Translate requirements into acceptance criteria, UAT, and review evidence.",
  },
  {
    number: "05",
    title: "Support adoption",
    detail: "Stay involved through release, feedback, and improvement.",
  },
];
export const SKILLS = [
  "Power Apps",
  "Power Automate",
  "SharePoint",
  "React",
  "TypeScript",
  "AWS serverless",
  "CI/CD",
  "RIMS",
  "Veeva Vault",
  "Word/VBA",
];
export const SKILL_GROUPS = [
  {
    number: "01",
    tone: "lime",
    title: "Workflow analysis & product delivery",
    summary: "Turn an ambiguous request into a workable, testable service.",
    skills: [
      "Stakeholder discovery",
      "Current-state mapping",
      "Business rules",
      "Requirements analysis",
      "Acceptance criteria",
      "UAT",
      "Release readiness",
      "Adoption",
    ],
    proof: "Applied across internal request and quality workflows",
  },
  {
    number: "02",
    tone: "sky",
    title: "Regulatory quality & data",
    summary:
      "Protect context, consistency, and traceability in controlled work.",
    skills: [
      "Regulatory document QC",
      "Metadata & naming controls",
      "References & terminology",
      "RIMS lifecycle data",
      "Submission tracking",
      "Data integrity",
      "Pharmacovigilance",
      "Safety case quality",
    ],
    proof: "Applied at Amgen, Pfizer, ICON, and IQVIA",
  },
  {
    number: "03",
    tone: "coral",
    title: "Automation & engineering",
    summary:
      "Build practical tools that fit the workflow and can be maintained.",
    skills: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "React & TypeScript",
      "AWS serverless",
      "CI/CD",
      "Word/VBA",
      "Workflow analytics",
    ],
    proof: "Applied in internal document and workflow tools",
  },
  {
    number: "04",
    tone: "violet",
    title: "Responsible AI delivery",
    summary: "Use AI where it earns its place, with review and controls.",
    skills: [
      "AI opportunity assessment",
      "Human-in-the-loop review",
      "Prompt & workflow design",
      "AI-assisted development",
      "Privacy & security controls",
      "Failure-path thinking",
      "Evaluation evidence",
      "Governed adoption",
    ],
    proof: "Applied in regulated AI-assisted delivery and enablement",
  },
];
export const EXPERIENCE = [
  {
    company: "Amgen",
    companyLink: "https://www.amgen.com/",
    logo: "/companies/amgen.jpg",
    role: "Regulatory Data & Systems Associate",
    period: "Sep 2025 – Present",
    location: "Hyderabad, India",
    description:
      "Regulatory technology business analysis, document quality automation, digital product delivery, and responsible AI implementation.",
    highlights: [
      "Built internal document quality tools that reduced repetitive review effort and made findings easier to evaluate.",
      "Led an internal regulatory request workflow that clarified intake, ownership, status, and handoffs.",
      "Developed quality-operations tracking capabilities that improved request visibility and reviewer coordination.",
      "Translated stakeholder needs into process flows, business rules, acceptance criteria, UAT scenarios, validation evidence, and release-ready solutions.",
      "Used AI-assisted development with human review, traceability, privacy, security, and governance controls.",
    ],
    skills: [
      "Regulatory workflow analysis",
      "Document QC",
      "Power Platform",
      "React",
      "AWS",
      "Responsible AI",
    ],
  },
  {
    company: "Pfizer",
    companyLink: "https://www.pfizer.com/",
    logo: "/companies/pfizer.jpg",
    role: "RDCM Data Manager, Senior Associate I",
    period: "Nov 2022 – Aug 2025",
    location: "Chennai, India",
    description:
      "Regulatory information management, application data quality, and controlled records across the product lifecycle.",
    highlights: [
      "Maintained registration and lifecycle data in RIMS for medicinal products and devices, including product, packaging, manufacturing, storage, and shelf-life information.",
      "Created and quality-checked NDA, IND, CTA, and BLA application records, regulatory events, objectives, and submissions.",
      "Remediated data gaps with stakeholders to improve completeness, consistency, archival quality, and downstream usability.",
      "Served as an archive subject matter expert during system testing, issue resolution, and release readiness.",
    ],
    skills: [
      "RIMS",
      "Regulatory submissions",
      "Data quality",
      "Archive workflows",
    ],
  },
  {
    company: "ICON Clinical Research",
    companyLink: "https://www.iconplc.com/",
    logo: "/companies/icon.jpg",
    role: "Drug Safety Associate",
    period: "Sep 2021 – Oct 2022",
    location: "Chennai, India",
    description:
      "Pharmacovigilance case processing and quality control across clinical and post-marketing sources.",
    highlights: [
      "Handled triage, book-in, data entry, and quality review for spontaneous, clinical-trial, literature, regulatory-authority, product-quality, and SUSAR cases.",
      "Supported deviation, CAPA, root-cause analysis, compliance oversight, and new-starter enablement.",
      "Developed an end-of-day productivity tracker to improve team reporting and workload visibility.",
    ],
    skills: [
      "Safety operations",
      "Case quality",
      "CAPA",
      "Process improvement",
    ],
  },
  {
    company: "CraftMyStory.com",
    companyLink: "",
    logo: "",
    role: "Founder (freelance)",
    period: "May 2021 – Dec 2021",
    location: "India",
    description:
      "A short-term independent service helping professionals communicate their experience more clearly.",
    highlights: [
      "Used client discovery to identify career goals and translate complex experience into concise professional narratives.",
      "Iterated the service across content structure, digital delivery, feedback, and value proposition design.",
    ],
    skills: ["User discovery", "Content design", "Service design"],
  },
  {
    company: "Wissen Infotech / IQVIA",
    companyLink: "https://www.iqvia.com/",
    logo: "/companies/iqvia.jpg",
    role: "Research Associate",
    period: "Feb 2021 – Sep 2021",
    location: "Hyderabad, India",
    description:
      "Safety case intake, medical terminology coding, and time-sensitive quality workflows.",
    highlights: [
      "Handled adverse-event intake, triage, data entry, medical coding, narrative writing, and reporter follow-up.",
      "Became a subject matter expert within three months and trained more than 200 associates on protocols and processes.",
      "Served as a point of contact for MedDRA, WHO Drug Dictionary, and product dictionary coding; received two Star Performer recognitions.",
    ],
    skills: ["Pharmacovigilance", "MedDRA", "Medical coding", "Training"],
  },
  {
    company: "CliMed Research Solutions LLP",
    companyLink: "https://www.linkedin.com/company/82531505/",
    logo: "/companies/climed.jpg",
    role: "Head of Strategic Planning (internship)",
    period: "Nov 2020 – May 2021",
    location: "Gurugram, India",
    description:
      "Cross-functional planning, scientific content, outreach, and workflow improvement during a short-term internship.",
    highlights: [
      "Coordinated planning across intern teams and supported delivery of academic and public-health events.",
      "Helped shape webinar and podcast concepts, scientific content, stakeholder outreach, and execution tracking.",
      "Automated repetitive certificate-generation and publishing tasks for high-volume event administration.",
    ],
    skills: ["Planning", "Scientific content", "Workflow automation"],
  },
  {
    company: "Baycuro Technologies",
    companyLink: "",
    logo: "",
    role: "Medical Content Developer & Editor (part-time)",
    period: "Jun 2020 – Feb 2021",
    location: "Hyderabad, India",
    description: "Medical communication and accessible scientific content.",
    highlights: [
      "Authored more than 230 medical and healthcare articles for professional and public audiences.",
      "Translated complex scientific information into clear content and improved discoverability through SEO and analytics.",
    ],
    skills: ["Medical writing", "Editing", "Content analytics"],
  },
  {
    company: "Practo Technologies",
    companyLink: "https://www.practo.com/",
    logo: "/companies/practo.jpg",
    role: "Product Specialist",
    period: "Aug 2019 – Apr 2020",
    location: "Bengaluru, India",
    description:
      "Product support, user insight, and documentation process improvement.",
    highlights: [
      "Resolved technical and product-functionality issues across healthcare professional and consumer products.",
      "Analyzed usage behavior across more than 15 parameters and shared product feedback to improve adoption.",
      "Automated manual documentation work, reducing case-documentation effort by approximately 99%.",
    ],
    skills: ["Product support", "User analytics", "Automation"],
  },
];
export const EDUCATION = [
  {
    degree: "Bachelor of Pharmacy",
    institution: "Ratnam Institute of Pharmacy",
    institutionLink: "",
    period: "",
    score: "8.73 CGPA",
  },
];
export const TESTIMONIALS: { name: string; role: string; content: string }[] =
  [];
