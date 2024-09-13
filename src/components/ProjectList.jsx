import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { fetchProjects } from "../utils/api";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects().then((data) => {
      setProjects(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="m-4">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="spinner"></div>
          </div>
        ) : null}

        <div className="flex flex-wrap gap-8 justify-center items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
