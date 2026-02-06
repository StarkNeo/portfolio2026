// src/pages/ProjectDetail.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/projects/${id}`)
      .then(res => res.json())
      .then(data => setProject(data))
      .catch(console.error);
  }, [id]);

  if (!project) {
    return <p className="text-slate-400">Loading project…</p>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        to="/projects"
        className="text-cyan-400 text-sm hover:underline mb-6 inline-block"
      >
        ← Back to projects
      </Link>

      <h1 className="text-3xl font-semibold mb-2">{project.title}</h1>
      <p className="text-slate-400 text-sm mb-6">{project.role}</p>

      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2">Overview</h2>
        <p className="text-slate-300">{project.summary}</p>
      </section>

      {project.problem && (
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-2">Problem</h2>
          <p className="text-slate-300">{project.problem}</p>
        </section>
      )}

      {project.solution && (
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-2">Solution</h2>
          <p className="text-slate-300">{project.solution}</p>
        </section>
      )}

      {project.architecture && (
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-2">Architecture</h2>
          <p className="text-slate-300 whitespace-pre-line">
            {project.architecture}
          </p>
        </section>
      )}

      {project.stack && (
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-slate-300">
            {project.stack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </section>
      )}

      {project.impact && (
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-2">Impact</h2>
          <p className="text-slate-300">{project.impact}</p>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;