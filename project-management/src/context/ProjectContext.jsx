import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);

  // Fetch projects from API on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Add a new project
  const addProject = async (projectData) => {
    try {
      const response = await axios.post("http://localhost:5000/api/projects", projectData);
      setProjects([...projects, response.data]); // Update state
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  // Delete a project
  const deleteProject = async (projectId) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${projectId}`);
      setProjects(projects.filter((project) => project._id !== projectId));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <ProjectContext.Provider value={{ projects, setProjects, addProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
}
