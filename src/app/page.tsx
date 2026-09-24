import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";
import {
  ABOUT_ME,
  CAPABILITIES,
  DELIVERY_STEPS,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  SKILL_GROUPS,
  SOCIAL_LINKS,
} from "./constants/data";
import { generateSlug } from "@/lib/utils";
import { ScrollToTop } from "./scroll-to-top";
import { ThemeToggle } from "./theme-toggle";

const GUIDE_URL =
  "https://www.linkedin.com/feed/update/urn:li:activity:7488556613524439041/";

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Krishna Varshith, back to top"
        >
          <span className="brand-mark">KV</span>
          <span>
            Krishna Varshith<span className="brand-period">.</span>
          </span>
        </a>
        <div className="header-actions">
          <ThemeToggle />
          <a className="header-cta" href="#contact">
            Let&apos;s connect <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </header>

      <section
        id="main-content"
        className="hero"
        aria-labelledby="hero-title"
        tabIndex={-1}
      >
        <div className="hero-topline">
          <span className="status-dot" />
          REGULATORY TECHNOLOGY + WORKFLOW AUTOMATION
          <span className="hero-index">PORTFOLIO / 2026</span>
        </div>
        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-kicker">
              Business analysis · Digital product delivery · Responsible AI
            </p>
            <h1 id="hero-title">
              I turn regulatory friction into{" "}
              <span className="accent-phrase">trusted workflows.</span>
            </h1>
            <p className="hero-summary">
              I map the rules, handoffs, and controls—then help teams build the
              right workflow.
            </p>
            <div className="hero-actions">
              <a className="action-primary" href="#work">
                View case studies <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                className="action-secondary"
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} aria-hidden="true" /> LinkedIn profile{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <aside className="hero-aside" aria-label="About Krishna">
            <div className="identity-row">
              <div className="portrait-crop">
                <Image
                  src="/krishna-varshith-portrait.png"
                  alt="Krishna Varshith R"
                  fill
                  priority
                  sizes="(max-width: 700px) 96px, (max-width: 1050px) 106px, 126px"
                  className="portrait-crop-image"
                />
              </div>
              <div>
                <span className="eyebrow">KRISHNA VARSHITH R</span>
                <p>Hyderabad, India</p>
              </div>
            </div>
            <div className="aside-rule" />
            <h2>Regulatory context. Builder&apos;s mindset.</h2>
            <p>From discovery and UAT through release and adoption.</p>
            <div className="friction-list">
              <span>Document QC</span>
              <span>Request lifecycles</span>
              <span>Regulatory data</span>
              <span>Human-reviewed AI</span>
            </div>
          </aside>
        </div>
        <div className="hero-grid" aria-hidden="true">
          <span>DISCOVER</span>
          <span>DEFINE</span>
          <span>DELIVER</span>
          <span>ADOPT</span>
        </div>
      </section>

      <section className="impact" aria-label="Selected impact">
        <div>
          <strong>Review</strong>
          <span>Structured checks support consistent document quality.</span>
        </div>
        <div>
          <strong>Route</strong>
          <span>Requests carry ownership, status, and next actions.</span>
        </div>
        <div>
          <strong>Govern</strong>
          <span>Assistance keeps evidence and decisions with reviewers.</span>
        </div>
      </section>

      <section id="capabilities" className="section-block capability-section">
        <div className="section-heading">
          <h2>What I help teams solve.</h2>
          <p>
            Capabilities shaped by work across regulatory operations, quality,
            business analysis, and digital delivery.
          </p>
        </div>
        <div className="capability-grid">
          {CAPABILITIES.map((capability) => (
            <article className="capability-card" key={capability.number}>
              <span className="capability-number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <small>{capability.evidence}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-block skills-section">
        <div className="section-heading">
          <h2>Four disciplines. One delivery mindset.</h2>
          <p>
            Business analysis, regulatory depth, hands-on automation, and
            responsible AI reinforce one another.
          </p>
        </div>
        <div className="skill-grid">
          {SKILL_GROUPS.map((group) => (
            <article
              className={"skill-card skill-" + group.tone}
              key={group.number}
            >
              <div className="skill-card-top">
                <span>{group.number}</span>
                <span className="skill-signal" aria-hidden="true" />
              </div>
              <h3>{group.title}</h3>
              <p>{group.summary}</p>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <small>{group.proof}</small>
            </article>
          ))}
        </div>
        <div className="platform-strip">
          <div>
            <span className="eyebrow">TOOLS IN PRACTICE</span>
            <p>
              Selected platforms and environments used across these disciplines.
            </p>
          </div>
          <div className="tags">
            {SKILLS.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-block work-section">
        <div className="section-heading">
          <div>
            <p className="portfolio-index">11 case studies · selected work</p>
            <h2>Evidence in the workflow.</h2>
          </div>
          <p>
            Eleven case studies across regulated systems, content, operations,
            and automation.
          </p>
        </div>
        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <Link
              className="project-card"
              href={"/projects/" + generateSlug(project.name)}
              key={project.name}
            >
              <div className="project-card-top">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight size={22} aria-hidden="true" />
              </div>
              <div
                className={"project-art art-" + (index % 8)}
                aria-hidden="true"
              >
                <span>
                  {project.artLabel ??
                    project.name
                      .split(" ")
                      .map((word) => word[0])
                      .slice(0, 3)
                      .join("")}
                </span>
                <small>{project.category}</small>
              </div>
              <div className="project-copy">
                <h3>{project.name}</h3>
                <p>{project.tagline}</p>
                <div className="tags">
                  {project.tech.slice(0, 2).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="project-link">
                  View case study <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="approach" className="section-block approach-section">
        <div className="section-heading">
          <h2>From ambiguity to adoption.</h2>
          <p>
            A delivery path drawn from my current regulatory technology and
            business analysis work.
          </p>
        </div>
        <div className="approach-steps">
          {DELIVERY_STEPS.map((step) => (
            <div className="approach-step" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </div>
          ))}
        </div>
        <a
          className="guide-link"
          href={GUIDE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <strong>Thinking about automation or AI?</strong>
            <small>Read my five-question decision guide on LinkedIn.</small>
          </span>
          <ArrowUpRight size={21} aria-hidden="true" />
        </a>
      </section>

      <section id="experience" className="section-block experience-section">
        <div className="section-heading">
          <h2>Experience in depth.</h2>
          <p>
            Seven-plus years across regulatory systems, document quality,
            pharmacovigilance, product support, and delivery.
          </p>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((role, index) => (
            <article
              className={
                "timeline-row" + (index === 0 ? " timeline-current" : "")
              }
              key={role.company}
            >
              <span className="timeline-period">{role.period}</span>
              <div className="timeline-main">
                <div className="role-heading">
                  {role.logo && (
                    <span className="company-logo">
                      <Image
                        src={role.logo}
                        alt=""
                        width={58}
                        height={58}
                        className="company-logo-image"
                      />
                    </span>
                  )}
                  <div>
                    <h3>{role.role}</h3>
                    <p className="role-company">
                      {role.company}{" "}
                      <span className="location">/ {role.location}</span>
                    </p>
                  </div>
                </div>
                <p className="timeline-description">{role.description}</p>
                <ul className="role-highlights">
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="role-skills">
                  {role.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
              <span className="timeline-dot" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-block about-section">
        <div className="about-label">
          <h2>Regulatory context meets a builder&apos;s mindset.</h2>
        </div>
        <div className="about-copy">
          {ABOUT_ME.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a
            className="publication-card"
            href="https://notionpress.com/in/read/pharmacovigilance-made-easy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="publication-cover">
              <Image
                src="/pharmacovigilance-made-easy-cover.webp"
                alt="Cover of Pharmacovigilance Made Easy"
                width={78}
                height={117}
              />
            </span>
            <span className="publication-copy">
              <span className="eyebrow">PUBLISHED WORK</span>
              <strong>Pharmacovigilance Made Easy</strong>
              <span>
                A practical introduction to drug safety concepts and workflows.
                View the publisher listing.
              </span>
            </span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <p className="education-note">
            Bachelor of Pharmacy · Ratnam Institute of Pharmacy · 8.73 CGPA
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>
          Building a better regulatory workflow?{" "}
          <span className="accent-phrase">Let&apos;s talk.</span>
        </h2>
        <p>
          For regulatory technology, workflow automation, business analysis, and
          responsible AI delivery roles or collaborations.
        </p>
        <div className="contact-links">
          <a href={SOCIAL_LINKS.email}>
            <Mail size={18} aria-hidden="true" /> Email Krishna{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={18} aria-hidden="true" /> LinkedIn{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
      <footer className="letter-footer">
        <p className="footer-signoff">
          For clearer systems and work people can trust.
          <strong>— {ABOUT_ME.name}</strong>
        </p>
        <div className="footer-meta">
          <span>Hyderabad · {new Date().getFullYear()}</span>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
      <ScrollToTop />
    </main>
  );
}
