import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './hero.css';
import { Link } from "react-router-dom";

export default function Hero() {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="hero">
      <div className="content">
        <h1 className="title">{translations("hero.title")}
        </h1>

        <p className="subtitle">
          {translations("hero.subtitle")}
          
        </p>

        <div className="actions">
          <Link to="/contact" className="primaryBtn">
          {translations("hero.cta.primary")}

           
          </Link>

          <Link to="/projects" className="secondaryBtn">
          {translations("hero.cta.secondary")}
            
          </Link>
        </div>
      </div>

      <div className="glow"></div>
    </section>
  );
}