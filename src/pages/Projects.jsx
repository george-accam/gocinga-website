import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import ProjectList from "../components/ProjectList";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import Img8 from "../assets/img8.jpg";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      delay: 0,
    });
  }, []);

  return (
    <div className="m-4">
      <h2 className="text-3xl font-bold my-5 pl-3">
        Funderaisers In Extreme Need
      </h2>
      <ProjectList />

      <div className="flex sm:justify-between md:justify-evenly justify-center items-center">
        <div className="my-5 flex">
          <div className="m-4 hidden sm:block" data-aos="fade-up">
            <img src={Img3} alt="img 3" className="size-28 rounded-lg" />
            <img src={Img4} alt="img 4" className="size-28 mt-16 rounded-lg" />
          </div>
          <div className="flex flex-col">
            <p className="text-3xl font-bold text-center" data-aos="fade-left">
              Join our community for donating and be a part of a positive change
              in the world. With over
            </p>
            <h1
              className="text-center text-3xl font-semibold my-3"
              data-aos="fade-down"
            >
              120,859+
            </h1>
            <p className="text-center text-xl my-4" data-aos="fade-right">
              people already joining
            </p>
            <div
              className=" flex justify-center items-center"
              data-aos="fade-left"
            >
              <p className="bg-slate-900 w-80 p-2 text-center rounded-3xl font-semibold text-slate-200">
                Yes, I want to join the community
              </p>
            </div>
          </div>
          <div className="m-4 hidden sm:block" data-aos="fade-up">
            <img src={Img5} alt="img 5" className="size-28 rounded-lg" />
            <img src={Img8} alt="img 8" className="size-28 mt-16 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
