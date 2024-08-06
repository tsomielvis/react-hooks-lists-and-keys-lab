import React from "react";

function ProjectItem({ name, about, technologies }) {

  const oneTechnology = technologies.map ((namedTechnology) => {
    return <span key = {namedTechnology}>{namedTechnology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <span>{technologies}</span>
      <div className="technologies">
        {oneTechnology}
      </div>
    </div>
  );
}

export default ProjectItem;