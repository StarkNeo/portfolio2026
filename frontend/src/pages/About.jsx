import './about.css';

export default function About() {
  return (
    <section className="about">
      <h2 className="about-heading">About Me</h2>

      <p className="intro">
        I'm JESUS — a Technical Architect and AI Systems Engineer focused on
        building modular, scalable, and production‑grade solutions that automate
        and optimize the entire software development lifecycle.
      </p>

      <div className="grid">
        <div className="card">
          <h3 className="cardTitle">My Approach</h3>
          <p className="cardText">
            I combine backend architecture, AI automation, and clean UX to build
            systems that are reliable, maintainable, and future‑proof. My work
            blends engineering excellence with business impact.
          </p>
        </div>

        <div className="card">
          <h3 className="cardTitle">What Drives Me</h3>
          <p className="cardText">
            I love solving complex problems with elegant, modular solutions.
            Whether it's designing authentication flows, automating engineering
            processes, or crafting dashboards, I focus on clarity and impact.
          </p>
        </div>

        <div className="card">
          <h3 className="cardTitle">How I Work</h3>
          <p className="cardText">
            I collaborate closely with teams, communicate clearly, and design
            architectures that scale. My goal is always the same: deliver
            systems that make engineering faster, smarter, and more enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
}