export interface Project {
  name: string;
  category: string;
  tagline: string;
  overview: string;
  description: string;
  problem: string;
  contribution: string;
  tech: string[];
  github: string;
  link?: string;
  images?: {
    hero?: string;
    gallery?: { src: string; alt: string; caption?: string }[];
  };
  features: string[];
  technicalDetails?: { title: string; description: string; code?: string }[];
  challenges?: { problem: string; solution: string }[];
  metrics?: Record<string, string>;
  metricVisuals?: {
    label: string;
    value: string;
    detail: string;
    progress?: number;
  }[];
  artLabel?: string;
  video?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Document Quality Automation",
    category: "Regulatory quality",
    tagline: "More consistent review, with decisions kept in human hands.",
    overview:
      "Internal automation for repeatable document checks and reviewer-ready findings.",
    problem:
      "Repeated manual checks can slow document review and make exceptions harder to follow.",
    contribution:
      "Defined checks and findings that help reviewers focus on evidence and decisions.",
    description:
      "Built internal document quality automation that surfaces repeatable issues in a structured way. Reviewers retain responsibility for interpreting findings and making final decisions.",
    tech: [
      "Document QC",
      "Rules-based checks",
      "Structured findings",
      "Human review",
    ],
    github: "",
    features: [
      "Repeatable document checks",
      "Findings with context",
      "Reviewer decision path",
    ],
    artLabel: "QC",
  },
  {
    name: "Regulatory Request Workflow",
    category: "Workflow automation",
    tagline: "A clearer path from intake to resolution.",
    overview:
      "An internal workflow for managing regulatory requests and handoffs.",
    problem:
      "Requests become difficult to manage when status, ownership, and next actions are spread across channels.",
    contribution:
      "Translated stakeholder needs into a controlled request journey and testable acceptance criteria.",
    description:
      "Led development of an internal regulatory request workflow that makes intake, ownership, status, and handoffs easier to understand. Supported validation with stakeholders and user acceptance testing.",
    tech: ["Business analysis", "Request intake", "UAT", "Workflow design"],
    github: "",
    features: [
      "Controlled intake",
      "Clear ownership and status",
      "User acceptance testing",
    ],
    artLabel: "REQ",
  },
  {
    name: "Quality Operations Tracking",
    category: "Operations design",
    tagline: "Make quality requests easier to see and coordinate.",
    overview:
      "Internal tracking capabilities for quality requests across their lifecycle.",
    problem:
      "Teams need a shared view of what has been requested, who is handling it, and what happens next.",
    contribution:
      "Connected lifecycle visibility, reviewer access, and communication in one workflow.",
    description:
      "Built internal tracking capabilities that support request intake, status visibility, assignment, and appropriate reviewer and requestor access. The design helps teams coordinate work and handle exceptions.",
    tech: [
      "Lifecycle design",
      "Status tracking",
      "Access patterns",
      "Coordination",
    ],
    github: "",
    features: [
      "Lifecycle visibility",
      "Role-appropriate access",
      "Notifications and exceptions",
    ],
    artLabel: "FLOW",
  },
  {
    name: "Document Consistency Review",
    category: "Quality automation",
    tagline: "Turn repeated consistency checks into clear findings.",
    overview:
      "An internal approach to reviewing document structure and consistency.",
    problem:
      "Small document inconsistencies are easy to miss when checks depend entirely on repeated manual comparison.",
    contribution:
      "Built a repeatable way to compare expected and observed content and summarize findings.",
    description:
      "Developed internal consistency checks for regulated documents and a reviewer-ready findings summary. The tool supports, rather than replaces, human quality review.",
    tech: [
      "Document consistency",
      "Rule design",
      "Findings reports",
      "Human review",
    ],
    github: "",
    features: [
      "Consistency checks",
      "Expected-versus-observed findings",
      "Reviewer-ready summary",
    ],
    artLabel: "DOC",
  },
  {
    name: "Regulatory Lifecycle Data Quality",
    category: "Regulatory data",
    tagline: "Cleaner product records for lifecycle decisions.",
    overview:
      "Regulatory information management work across application, product, packaging, and submission data.",
    problem:
      "Lifecycle records lose value when product, application, event, and submission data are incomplete or inconsistent across systems.",
    contribution:
      "Maintained and quality-checked regulatory records, remediated gaps with stakeholders, and supported release-readiness activities.",
    description:
      "Managed controlled regulatory data across medicinal products and devices, including application records, events, objectives, submissions, product details, packaging, manufacturing, storage, and shelf-life information.",
    tech: ["RIMS", "Lifecycle data", "Data remediation", "Release readiness"],
    github: "",
    features: [
      "Product and application data quality",
      "Submission and event records",
      "Stakeholder remediation",
      "Archive testing support",
    ],
    artLabel: "RIMS",
  },
  {
    name: "Safety Case Quality Operations",
    category: "Pharmacovigilance",
    tagline: "Quality-focused case handling across safety sources.",
    overview:
      "Safety intake, triage, data entry, coding, narrative writing, and quality control across case workflows.",
    problem:
      "Safety operations require accurate intake, consistent coding, timely follow-up, and clear quality checks across different report sources.",
    contribution:
      "Handled case processing and quality review while supporting deviation, CAPA, root-cause analysis, and process enablement.",
    description:
      "Supported pharmacovigilance operations across spontaneous, clinical-trial, literature, regulatory-authority, product-quality, and SUSAR case sources, with emphasis on quality, compliance, and reviewer-ready documentation.",
    tech: ["Case processing", "MedDRA", "WHO Drug", "CAPA"],
    github: "",
    features: [
      "Triage and book-in",
      "Medical coding",
      "Narrative writing",
      "Quality review and follow-up",
    ],
    artLabel: "PV",
  },
  {
    name: "Pharmacovigilance Training Enablement",
    category: "Knowledge enablement",
    tagline: "Make complex safety workflows easier to learn.",
    overview: "Training and protocol enablement for pharmacovigilance teams.",
    problem:
      "New associates need practical guidance that translates protocols, coding expectations, and case workflows into repeatable execution.",
    contribution:
      "Became a subject matter expert, supported process training, and helped associates understand safety workflow expectations.",
    description:
      "Created training value through protocol explanation, coding support, and day-to-day operational guidance for safety workflows.",
    tech: [
      "Training",
      "Protocol guidance",
      "Medical coding",
      "Safety operations",
    ],
    github: "",
    features: [
      "Associate enablement",
      "Coding support",
      "Protocol interpretation",
      "Operational Q&A",
    ],
    metrics: { associatesTrained: "200+", recognitions: "2" },
    metricVisuals: [
      {
        label: "Associates trained",
        value: "200+",
        detail: "Training and process enablement for safety associates.",
      },
      {
        label: "Star recognitions",
        value: "2",
        detail: "Performance recognition during safety operations work.",
      },
    ],
    artLabel: "200+",
  },
  {
    name: "Medical Content Knowledge Base",
    category: "Medical content",
    tagline: "Translate complex healthcare topics into clear content.",
    overview:
      "Medical and healthcare content creation for professional and public audiences.",
    problem:
      "Healthcare audiences need scientific content that is accurate, discoverable, and easy to understand.",
    contribution:
      "Authored and edited medical content, simplified scientific ideas, and improved discoverability through content analytics and SEO thinking.",
    description:
      "Built a large body of medical and healthcare writing for public and professional readers, balancing clarity, scientific context, and discoverability.",
    tech: ["Medical writing", "Editing", "SEO", "Content analytics"],
    github: "",
    features: [
      "Scientific simplification",
      "Article development",
      "Editorial review",
      "Discoverability improvements",
    ],
    metrics: { articlesAuthored: "230+" },
    metricVisuals: [
      {
        label: "Articles authored",
        value: "230+",
        detail: "Medical and healthcare articles for varied audiences.",
      },
    ],
    artLabel: "230+",
  },
  {
    name: "Product Support Documentation Automation",
    category: "Product operations",
    tagline: "Reduce manual support documentation effort.",
    overview:
      "Product support improvement work using usage analysis and documentation automation.",
    problem:
      "Manual documentation can consume support time that should be spent resolving user issues and improving product understanding.",
    contribution:
      "Analyzed product usage patterns and automated repetitive documentation steps to make support work faster and more consistent.",
    description:
      "Supported healthcare product users, analyzed product behavior across multiple parameters, and improved support documentation through automation.",
    tech: [
      "Product support",
      "Usage analysis",
      "Documentation automation",
      "Process improvement",
    ],
    github: "",
    features: [
      "Technical issue resolution",
      "Usage-behavior analysis",
      "Automated documentation steps",
      "Product feedback loops",
    ],
    metrics: { effortReduction: "Approx. 99%", analysisParameters: "15+" },
    metricVisuals: [
      {
        label: "Documentation effort reduced",
        value: "99%",
        detail: "Approximate reduction in manual case-documentation effort.",
        progress: 99,
      },
      {
        label: "Usage parameters analyzed",
        value: "15+",
        detail: "Signals used to understand product behavior and adoption.",
      },
    ],
    artLabel: "99%",
  },
  {
    name: "Scientific Event Operations Automation",
    category: "Operations automation",
    tagline: "Automate repetitive administration in scientific programs.",
    overview:
      "Workflow improvement for academic and public-health event operations.",
    problem:
      "High-volume event administration can create repetitive certificate, publishing, and tracking work for small teams.",
    contribution:
      "Coordinated cross-functional planning and automated repetitive administration tasks for event delivery.",
    description:
      "Supported webinar and podcast planning, scientific content, stakeholder outreach, execution tracking, and event administration automation.",
    tech: ["Event operations", "Planning", "Automation", "Scientific content"],
    github: "",
    features: [
      "Cross-functional planning",
      "Execution tracking",
      "Certificate automation",
      "Publishing support",
    ],
    artLabel: "OPS",
  },
  {
    name: "Professional Narrative Service Design",
    category: "Service design",
    tagline: "Turn complex experience into a clearer career story.",
    overview:
      "A short-term independent service for helping professionals communicate their experience.",
    problem:
      "Professionals often have strong experience but struggle to convert it into concise, targeted narratives.",
    contribution:
      "Used client discovery, content structure, feedback loops, and digital delivery to shape a focused service.",
    description:
      "Designed and iterated a freelance service that translated complex professional backgrounds into clear career narratives and communication assets.",
    tech: [
      "User discovery",
      "Content design",
      "Service design",
      "Digital delivery",
    ],
    github: "",
    features: [
      "Client discovery",
      "Narrative structure",
      "Feedback iteration",
      "Value proposition design",
    ],
    artLabel: "STORY",
  },
];
