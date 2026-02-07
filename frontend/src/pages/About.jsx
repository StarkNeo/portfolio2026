import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import './about.css';

export default function About() {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="about">
      <h2 className="about-heading">{translations("about.heading")}</h2>

      <p className="intro">
        {translations("about.text")}
        
      </p>

      <div className="grid">
        <div className="card">
          <h3 className="cardTitle">{translations("about.approach")}</h3>
          <p className="cardText">
            {translations("about.approachText")}
          </p>
        </div>

        <div className="card">
          <h3 className="cardTitle">{translations("about.drives")}</h3>
          <p className="cardText">
            {translations("about.drivesText")}
          </p>
        </div>

        <div className="card">
          <h3 className="cardTitle">{translations("about.howIWork")}</h3>
          <p className="cardText">
            {translations("about.howIWorkText")}
          </p>
        </div>
      </div>
    </section>
  );
}