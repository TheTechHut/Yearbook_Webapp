import "./ProjectCardStyles.css";
import React, { useState, useEffect } from 'react';
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [projects, setProjects] = useState([]); // State to store projects
  const [loading, setLoading] = useState(true); // State to track loading

  // Fetch projects from the backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/Projects/")  // Update the URL if necessary
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);  // Empty dependency array to run only once when the component mounts

  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>

      {loading ? (
        <p>Loading projects...</p>  // Display loading message while fetching data
      ) : (
        <div className="project-container">
          {projects.length > 0 ? (
            projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  imgsrc={project.photo}  // Assuming project data contains an image URL or use a placeholder
                  title={project.title}
                  text={project.description}
                />
              );
            })
          ) : (
            <p>No projects found</p>  // Display if no projects are found
          )}
        </div>
      )}
    </div>
  );
};

export default Project;
