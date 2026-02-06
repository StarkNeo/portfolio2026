import './projects.css';
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "AI‑Driven SDLC Automation Platform",
      description:
        "A modular system that automates code reviews, documentation, testing, and deployment using AI agents. Reduced engineering cycle time by 42%.",
      tags: ["AI Agents", "Node.js", "React", "OpenAI", "Automation"],
      link: "/projects/sdlc-automation",
    },
    {
      title: "Secure Multi‑Step Authentication System",
      description:
        "Enterprise‑grade MFA flow with QR setup, token rotation, session hardening, and seamless UX across frontend and backend.",
      tags: ["Security", "MFA", "JWT", "React", "Node.js"],
      link: "/projects/mfa-system",
    },
    {
      title: "Financial Dashboard for Business Operations",
      description:
        "A modern, responsive dashboard for accounting and finance teams with real‑time data, role‑based access, and premium UI.",
      tags: ["Dashboard", "React", "UX", "APIs", "Design"],
      link: "/projects/finance-dashboard",
    },
  ];

  return (
    <section className="projects">
      <h2 className="projectsheading">Featured Projects</h2>
      <p className="subheading">
        Real systems I've designed to solve real business problems.
      </p>

      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} className="projectsCard">
            <h3 className="projectsCardTitle">{project.title}</h3>
            <p className="cardDescription">{project.description}</p>

            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <Link to={project.link} className="link">
              View case study →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}