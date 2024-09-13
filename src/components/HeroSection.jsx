import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DonateForm from "./DonateForm";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      offset: 100,
    });
  }, []);
  return (
    <div className="bg-gray-700 text-white h-auto">
      <div className="p-2 inset-0 flex flex-col justify-center items-center text-center">
        <div className="lg:typewriter mt-7 " data-aos="fade-right">
          <h1 className="text-4xl font-bold ">
            To uplift underserved communities by providing sustainable
            initiatives
          </h1>
        </div>
        <p className="mt-7" data-aos="fade-left">
          Creating sustainable and impactful programs that empower individuals
          and communities to drive their own progress
        </p>
        <a
          className="mt-6 mb-3 bg-yellow-500 cursor-pointer text-black px-4 py-2 rounded"
          data-aos="fade-right"
          onClick={() => handleIsOpen()}
        >
          Donate Now
        </a>
      </div>

      {isOpen ? <DonateForm isOpen={isOpen} handleIsOpen={handleIsOpen} /> : null}
    </div>
  );
};

export default HeroSection;
