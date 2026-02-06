//import styles from "./Footer.module.css";
import './footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="brand">
          <span className="logo">JESUS.dev</span>
          <p className="tagline">
            Technical Architect & AI Systems Engineer
          </p>
        </div>

        <div className="columns">
          <div className="column">
            <h4 className="columnTitle">Navigate</h4>
            <Link to="/" className="link">Home</Link>
            <Link to="/projects" className="link">Projects</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/contact" className="link">Contact</Link>
          </div>

          <div className="column">
            <h4 className="columnTitle">Connect</h4>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your-email@example.com"
              className="link"
            >
              Email
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