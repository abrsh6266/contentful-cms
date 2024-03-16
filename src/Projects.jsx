import React from "react";
//import { useFetchProjects } from "./fetchProjects";
import { projects } from "./data";
const Projects = () => {
  //const { project, loading } = useFetchProjects();
  //   console.log(loading);
  //   if (loading)
  //     return (
  //       <section className="projects">
  //         <h2>Loading...</h2>
  //       </section>
  //     );
  //     else
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project, id) => {
          const { image, url, title } = project;
          return (
            <a 
            key={id} 
            href={url} 
            target="_blank" 
            rel="noreferrer" 
            className="project">
              <img src={image} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
  return <div>Projects</div>;
};

export default Projects;
