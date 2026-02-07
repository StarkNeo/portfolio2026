import { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import './projects.css';
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const { translations } = useContext(LanguageContext);
  
  
  useEffect(() => {
    const items = translations("projects.items");
    if (items && Array.isArray(items)) {
      setProjects(items);
    }
  }, [translations]);


  return (
    <section className="projects">
      <h2 className="projectsheading">{translations("projects.heading")}</h2>
      <p className="subheading">
        {translations("projects.subheading")}
        
      </p>

      <div className="grid">
        {projects.length>0? 
        
        (projects.map((project, index) => (
          <div key={index} className="projectsCard">
            <h3 className="projectsCardTitle">{project.title}</h3>
            <p className="cardDescription">{project.description}</p>

            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <Link to={project.link} className="link">
              {translations("projects.linkText")} →
            </Link>
          </div>
        )
        
        ))
        :
        <p className="noProjects">No projects available at the moment. Please check back later.</p> 
        
        }
      </div>
    </section>
  );
}