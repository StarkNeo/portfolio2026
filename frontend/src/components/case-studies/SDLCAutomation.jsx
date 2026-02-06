import styles from "./SDLCAutomation.module.css";


export default function SDLCAutomation() {
  return (
    <section className={styles.caseStudy}>
      <div className={styles.header}>
        <h1 className={styles.title}>AI‑Driven SDLC Automation Platform</h1>
        <p className={styles.subtitle}>
          A modular system that automates code reviews, documentation, testing,
          and deployment using AI agents. Reduced engineering cycle time by 42%.
        </p>
      </div>

      {/* Overview */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <p className={styles.text}>
          I designed and implemented a full AI‑powered automation platform that
          integrates into the software development lifecycle. The system uses
          specialized AI agents to automate repetitive engineering tasks,
          improving consistency, reducing errors, and accelerating delivery.
        </p>
      </div>

      {/* Problem */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>The Problem</h2>
        <p className={styles.text}>
          The engineering team struggled with slow review cycles, inconsistent
          documentation, and manual QA processes. These bottlenecks increased
          delivery time and created quality issues across multiple projects.
        </p>
      </div>

      {/* Solution */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>The Solution</h2>
        <p className={styles.text}>
          I architected a modular automation system powered by AI agents. Each
          agent specializes in a specific SDLC task—code review, documentation,
          testing, and deployment. The platform integrates seamlessly with Git,
          CI/CD pipelines, and internal APIs.
        </p>
      </div>

      {/* Architecture */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Architecture</h2>
        <ul className={styles.list}>
          <li>Event‑driven backend using Node.js and modular services</li>
          <li>AI agents orchestrated through a central controller</li>
          <li>Secure authentication with JWT + role‑based access</li>
          <li>Integration with GitHub/GitLab webhooks</li>
          <li>Automated pipelines for testing and deployment</li>
        </ul>
      </div>

      {/* Impact */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Impact</h2>
        <ul className={styles.list}>
          <li>42% reduction in engineering cycle time</li>
          <li>Consistent documentation across all repositories</li>
          <li>Automated testing reduced manual QA by 60%</li>
          <li>Improved code quality and fewer regressions</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        <div className={styles.tags}>
          {[
            "Node.js",
            "React",
            "AI Agents",
            "OpenAI",
            "Express",
            "CI/CD",
            "GitHub Webhooks",
          ].map((tag, i) => (
            <span key={i} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}