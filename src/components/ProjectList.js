

import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const oneProject = projects.map((project) => {
    return (
    // <div>
    //   <h3 key = {project.id}>{project.name}</h3>
    //   <p key = {project.id}>{project.about}</p>
    //   <li key = {project.id}>{project.technologies}</li>
    // </div>
    <ProjectItem key={project.id} name = {project.name} about = {project.about} technologies = {project.technologies}/>
    )
  })
  console.log (oneProject)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {oneProject}
      </div>
    </div>
  );
}

export default ProjectList;
