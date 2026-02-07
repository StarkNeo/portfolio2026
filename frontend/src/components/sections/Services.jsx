import { useContext, useState, useEffect, use } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './services.css';

export default function Services() {
  const [services, setServices] = useState([]);
  const { translations } = useContext(LanguageContext);
  
  useEffect(() => {
    const items = translations("services.items");
    if (items && Array.isArray(items)) {
      setServices(items);
    }
  }, [services, translations]);



  return (
    <section className="services">
      <h2 className="heading">{translations("services.heading")}</h2>
      <p className="servicesSubheading">
        {translations("services.subheading")}
      </p>

      <div className="grid">
        {services.map((service, index) => (
          <div key={index} className="card">
            <h3 className="servicesCardTitle">{service.title}</h3>
            <p className="servicesCardDescription">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}