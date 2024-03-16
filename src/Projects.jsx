import React from "react";
import { useFetchProjects } from "./fetchProjects";
const Projects = () => {
  const { project, loading } = useFetchProjects();
  console.log(loading);
  if(loading)
  return <section className="projects"></section>
  return <div>Projects</div>;
};

export default Projects;
