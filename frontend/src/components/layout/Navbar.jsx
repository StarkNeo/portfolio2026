import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import './navbar.css';
import { LanguageContext } from "../../context/LanguageContext";

export default function Navbar() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const {language, changeLanguage, translations} = useContext(LanguageContext);
  

  return (
    <header className="navbar">
      <div className="logo">JESUS.dev</div>

      <nav className="navLinks">
        <NavLink to="/" className="link">{translations("nav.home")}</NavLink>
        <NavLink to="/projects" className="link">{translations("nav.projects")}</NavLink>
        <NavLink to="/about" className="link">{translations("nav.about")}</NavLink>
        <NavLink to="/contact" className="linkPrimary">{translations("nav.cta")}</NavLink>
        <button onClick={toggleTheme} className="themeToggle">{theme === "dark" ? "🌙" : "☀️"}
        </button>
        <select className="languageSelector" value={language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
       

      </nav>
    </header>
  );
}