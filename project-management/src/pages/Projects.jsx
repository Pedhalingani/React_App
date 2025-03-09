import React, { useState } from "react";
import "../styles/Projects.css"; // Ensure CSS is linked

export default function Projects() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Website Redesign", status: "In Progress" },
    { id: 2, name: "Marketing Campaign", status: "Completed" },
    { id: 3, name: "New Mobile App", status: "Pending" },
  ]);

  const addProject = () => {
    const newProject = { id: projects.length + 1, name: "New Project", status: "Pending" };
    setProjects([...projects, newProject]);
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>

      <button className="add-project-btn" onClick={addProject}>
        + Add Project
      </button>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>Status: <span className={`status ${project.status.toLowerCase()}`}>{project.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}
