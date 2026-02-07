import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
  const { translations } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <div className="inner">
        <div className="brand">
          <span className="logo">JESUS.dev</span>
          <p className="tagline">
            Software Engineer specializing in scalable systems and AI‑powered engineering.
          </p>
        </div>

        <div className="columns">
          <div className="column">
            <h4 className="columnTitle">Navigate</h4>
            <Link to="/" className="link">{translations("nav.home")}</Link>
            <Link to="/projects" className="link">{translations("nav.projects")}</Link>
            <Link to="/about" className="link">{translations("nav.about")}</Link>
            <Link to="/contact" className="link">{translations("nav.contact")}</Link>
          </div>

          <div className="column">
            <h4 className="columnTitle">Connect</h4>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {translations("footer.github") || "GitHub"}
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {translations("footer.linkedin") || "LinkedIn"}
            </a>
            <a
              href="mailto:your-email@example.com"
              className="link"
            >
              {translations("footer.email") || "Email"}
            </a>
          </div>
        </div>
      </div>

      <div className="bottom">
        <span>© {new Date().getFullYear()} JESUS. All rights reserved.</span>
      </div>
    </footer>
  );
}