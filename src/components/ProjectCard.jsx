import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const ProjectCard = ({ project }) => {
  useEffect(() => { 
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      delay: 0,
    });
  }, []);

  return (
    <div
      className="bg-slate-950 shadow-lg text-slate-100 rounded-lg overflow-hidden h-96 sm:w-72 w-80 z-0"
      data-aos="fade-up"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full opacity-35 hover:opacity-45"
      />
      <div className="absolute ml-2 -mt-96 bottom-0 z-10">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="my-2">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
