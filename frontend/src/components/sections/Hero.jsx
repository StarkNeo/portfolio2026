import './hero.css';
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="content">
        <h1 className="title">
          Technical Architect & AI Systems Engineer
        </h1>

        <p className="subtitle">
          I design modular, scalable, and production‑grade systems that automate
          and optimize the entire SDLC. From backend architecture to AI‑powered
          engineering workflows, I help companies ship faster and smarter.
        </p>

        <div className="actions">
          <Link to="/contact" className="primaryBtn">
            Work with me
          </Link>

          <Link to="/projects" className="secondaryBtn">
            View projects
          </Link>
        </div>
      </div>

      <div className="glow"></div>
    </section>
  );
}