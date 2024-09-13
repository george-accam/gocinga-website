import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Team1 from "../assets/team1.png";
import Team2 from "../assets/team2.png";
import Team3 from "../assets/team3.png";
import Team4 from "../assets/team4.png";


const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      offset: 100,
    });
  }, []);

  return (
    <div className="p-1">
        <h2
          className="text-4xl mt-7 text-center font-bold"
          data-aos="fade-right"
        >
          To uplift underserved communities by providing sustainable initiatives
        </h2>
      <div className="sm:mx-16 p-5">
        <p className="mt-4 text-left font-semibold text-xl" data-aos="fade-left">
          GOCI empowers individuals through education, promotes sustainable
          development, and fosters community collaboration for lasting positive
          impact.
        </p>

        <p className="mt-4 text-right  text-xl" data-aos="fade-right">
          GOCI NGA was founded to address disparities in education, healthcare,
          and economic opportunities faced by marginalized communities.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-center" data-aos="fade-left">
          Meet Our Team
        </h3>
        <p className="mt-4 text-center text-lg font-semibold" data-aos="fade-right">
          The world's largest social fundraising platform, optimizedforyour
          charity in a more easy way
        </p>

        <div className="flex flex-wrap gap-6 my-8 justify-center items-center">
          {/* Member 1 */}
          <div
            className="bg-[rgba(83,86,93,0.22)] p-4 rounded-lg shadow-md"
            data-aos="fade-up"
          >
            <img src={Team1} alt="Member 1" className="w-72 h-64 rounded-lg" />
            <h4 className="mt-2 font-semibold">Courtney Henry</h4>
            <p>Founder of Gocinga</p>
          </div>
          {/* Member 2 */}
          <div
            className="bg-[rgba(83,86,93,0.22)] p-4 rounded-lg shadow-md"
            data-aos="fade-down"
          >
            <img src={Team2} alt="Member 2" className="w-72 h-64 rounded-lg" />
            <h4 className="mt-2 font-semibold">Brooklyn Simmons</h4>
            <p>Lead Manager</p>
          </div>
          {/* Member 3 */}
          <div
            className="bg-[rgba(83,86,93,0.22)] p-4 rounded-lg shadow-md"
            data-aos="fade-up"
          >
            <img src={Team3} alt="Member 3" className="w-72 h-64 rounded-lg" />
            <h4 className="mt-2 font-semibold">Jerome Bell</h4>
            <p>Lead Manager</p>
          </div>
          {/* Member 4 */}
          <div
            className="bg-[rgba(83,86,93,0.22)] p-4 rounded-lg shadow-md"
            data-aos="fade-down"
          >
            <img src={Team4} alt="Member 4" className="w-72 h-64 rounded-lg" />
            <h4 className="mt-2 font-semibold">Cameron Williamson</h4>
            <p>Marketing Coordinator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
