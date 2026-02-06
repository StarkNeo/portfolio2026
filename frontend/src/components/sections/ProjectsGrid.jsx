import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

const ProjectsGrid = ({ limit }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/projects`)
      .then(res => res.json())
      .then(data => setProjects(limit ? data.slice(0, limit) : data))
      .catch(console.error);
  }, [limit]);

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Selected projects</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {projects.map(project => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="border border-slate-800 rounded-lg p-4 hover:border-cyan-500 transition bg-slate-900/40"
          >
            <h3 className="font-medium mb-1">{project.title}</h3>
            <p className="text-xs text-slate-400 mb-2">{project.role}</p>
            <p className="text-sm text-slate-300 line-clamp-3">
              {project.summary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;