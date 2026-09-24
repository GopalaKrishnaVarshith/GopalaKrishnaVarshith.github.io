/* eslint-disable @next/next/no-html-link-for-pages -- Static GitHub Pages navigation avoids loading the Next client router. */
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PROJECTS, ABOUT_ME } from "@/app/constants/data";
import { generateSlug } from "@/lib/utils";
import { ThemeToggle } from "@/app/theme-toggle";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: generateSlug(project.name) }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => generateSlug(item.name) === slug);
  const projectUrl = "/projects/" + slug + "/";
  return project
    ? {
        title: project.name,
        description: project.description,
        alternates: { canonical: projectUrl },
        openGraph: {
          type: "article",
          title: project.name,
          description: project.description,
          url: projectUrl,
        },
      }
    : { title: "Project not found" };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => generateSlug(item.name) === slug);
  if (!project) notFound();
  return (
    <main className="site-shell project-page">
      <header className="site-header">
        <a className="brand" href="/">
          <span className="brand-mark">KV</span>
          <span>
            Krishna Varshith<span className="brand-period">.</span>
          </span>
        </a>
        <div className="header-actions">
          <ThemeToggle />
          <a className="header-cta" href="/#work">
            <ArrowLeft size={16} /> All work
          </a>
        </div>
      </header>
      <div className="project-detail">
        <a className="back-link" href="/#work">
          <ArrowLeft size={17} /> Selected work
        </a>
        <span className="eyebrow">{project.category}</span>
        <h1>
          {project.name}
          <span className="accent-stop">.</span>
        </h1>
        <p className="project-lead">{project.tagline}</p>
        <div className="project-detail-art" aria-hidden="true">
          <span>
            {project.artLabel ??
              project.name
                .split(" ")
                .map((word) => word[0])
                .slice(0, 3)
                .join("")}
          </span>
        </div>
        <div className="detail-grid">
          <h2>What needed to change</h2>
          <p>{project.problem}</p>
        </div>
        <div className="detail-grid">
          <h2>How I helped</h2>
          <p>{project.contribution}</p>
        </div>
        <div className="detail-grid">
          <h2>What we built</h2>
          <p>{project.description}</p>
        </div>
        <div className="detail-grid">
          <h2>In the workflow</h2>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        {project.metricVisuals && (
          <div className="detail-grid">
            <h2>Signals from the work</h2>
            <div className="metric-visuals">
              {project.metricVisuals.map((metric) => (
                <div
                  className={
                    "metric-visual" +
                    (metric.progress ? " metric-visual-progress" : "")
                  }
                  key={metric.label}
                  style={
                    metric.progress
                      ? ({
                          "--metric-fill": `${metric.progress}%`,
                        } as CSSProperties)
                      : undefined
                  }
                >
                  <div>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                  {metric.progress && (
                    <div
                      className="metric-bar"
                      role="img"
                      aria-label={`${metric.progress}% ${metric.label}`}
                    >
                      <span />
                    </div>
                  )}
                  <p>{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {project.metrics && (
          <div className="detail-grid">
            <h2>Reported outcomes</h2>
            <div className="detail-metrics">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key}>
                  <strong>{value}</strong>
                  <span>{key.replace(/([A-Z])/g, " $1")}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="detail-grid">
          <h2>Capabilities involved</h2>
          <div className="tags">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
        <p className="case-study-note">
          Some work is described at a high level to respect confidential
          materials, internal systems, and source code.
        </p>
        <a href="/#contact" className="detail-contact">
          Discuss this work <ArrowUpRight size={18} />
        </a>
      </div>
      <footer className="letter-footer">
        <p className="footer-signoff">
          Selected evidence from regulated work.
          <strong>— {ABOUT_ME.name}</strong>
        </p>
        <div className="footer-meta">
          <a href="/#work">All projects ↑</a>
          <a href="/#contact">Start a conversation</a>
        </div>
      </footer>
    </main>
  );
}
