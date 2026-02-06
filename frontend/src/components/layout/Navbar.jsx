import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import './navbar.css';

export default function Navbar() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <header className="navbar">
      <div className="logo">JESUS.dev</div>

      <nav className="navLinks">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/projects" className="link">Projects</NavLink>
        <NavLink to="/about" className="link">About</NavLink>
        <NavLink to="/contact" className="linkPrimary">Work with me</NavLink>
        <button onClick={toggleTheme} className="themeToggle">{theme === "dark" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}