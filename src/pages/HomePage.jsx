import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/HeroSection";
import Img1 from "../assets/img1.jpg";
import Img3 from "../assets/img3.jpg";
import Img6 from "../assets/img6.jpg";
import Img7 from "../assets/img7.jpg";
import Img10 from "../assets/img10.jpg";
import Img11 from "../assets/img11.jpeg";

const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      offset: 100,
    });
  }, []);
  return (
    <div>
      <HeroSection />
      <div className="h-auto mb-20 mt-10">
        <div className="p-4">
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {/* image one */}
            <div
              className="h-96 w-80 md:w-64 bg-transparent rounded-3xl"
              data-aos="fade-up"
            >
              <div className="w-80 md:w-64">
                <div className="flex flex-col rounded-3xl bg-green-700 p-3">
                  <p className="text-slate-100 font-semibold text-3xl">65%</p>
                  <p className="text-slate-100 mt-4 mb-24">
                    17 Thousand People Died, Thousand Injured, Houses and
                    Buildings Destroyed. Turkey-Syria Grieves
                  </p>
                  <div className="h-14 w-62 bg-[rgba(83,86,93,0.55)] shadow-xl rounded-3xl">
                    <h2 className="p-3 text-xl text-slate-950">Donate now</h2>
                  </div>
                </div>
              </div>
              <div className="h-16 w-80 md:w-64 mt-5 bg-slate-800 shadow-xl rounded-3xl">
                <h2 className="text-center text-xl text-slate-50 pt-5">
                  Let them be heard
                </h2>
              </div>
            </div>
            {/* image two */}
            <div
              className="h-96 w-80 md:w-64 shadow-xl rounded-3xl bg-slate-950 mt-4 z-0"
              data-aos="fade-down"
            >
              <div className="absolute m-3 z-10">
                <p className="text-slate-50 font-semibold text-3xl">Health</p>
                <p className="text-slate-50 mt-64">
                  Life skills for 2,587 Children in <br></br> South Africa
                </p>
              </div>
              <img
                src={Img1}
                alt="education"
                className="w-full h-full rounded-3xl opacity-40"
              />
            </div>
            {/* image three */}
            <div className="mt-36">
              <div
                className="h-60 w-80 md:w-64 bg-slate-400 shadow-xl rounded-3xl"
                data-aos="fade-up"
              >
                <h2 className="text-center font-bold text-2xl text-slate-950 pt-20">
                  join 5000+ People Donate
                </h2>
                <p className="p-4 m-3 bg-slate-300 text-center text-xl text-slate-800 rounded-3xl">
                  join community{" "}
                  <span className="bg-slate-800 px-1.5 text-slate-200 rounded-full">
                    +
                  </span>
                </p>
              </div>
            </div>
            {/* image four */}
            <div
              className="h-96 w-80 md:w-64 shadow-xl rounded-3xl bg-slate-950 z-0"
              data-aos="fade-up"
            >
              <div className="absolute m-3 z-10">
                <p className="text-slate-50 font-semibold text-3xl">
                  Education
                </p>
                <p className="text-slate-50 mt-64">
                  Sponsor food, education to <br></br> orphans India
                </p>
              </div>
              <img
                src={Img3}
                alt="education"
                className="w-full h-full rounded-3xl opacity-40"
              />
            </div>
            {/* image five */}
            <div
              className="h-80 w-80 md:w-64 shadow-xl rounded-3xl bg-slate-950 relative"
              data-aos="fade-down"
            >
              <img
                src={Img11}
                alt="education"
                className="absolute w-full h-full rounded-3xl opacity-65 object-cover z-0"
              />
              <div className="mt-64 ml-3 mr-3 relative z-10">
                <div className="h-14 w-62 bg-[rgba(83,86,93,0.55)] shadow-xl rounded-3xl">
                  <h2 className="p-3 text-xl text-slate-950">Explore now</h2>
                </div>
              </div>

              <div className="h-16 w-64 mt-5 bg-slate-800 shadow-xl rounded-3xl z-10">
                <h2 className="text-center text-xl text-slate-50 pt-5">
                  Your home for help
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom notice */}
      <div className="bg-lime-500 pb-10">
        <h1
          className="font-bold text-center text-3xl p-4"
          data-aos="fade-right"
        >
          Fundraising on Gocinga takes just a few minutes
        </h1>
        <div className="flex flex-wrap sm:justify-between md:justify-evenly justify-center">
          {/* image 1 */}
          <div className="m-5" data-aos="fade-up">
            <div className="flex justify-center">
              <img src={Img6} alt="" className="size-32 rounded-full" />
            </div>
            <h2 className="font-semibold text-lg text-center">
              Give Happiness
            </h2>
            <p className="text-center max-w-xs mx-auto">
              Giving happiness to others in one of the most fulfilling things
              you can do in life.
            </p>
          </div>
          {/* image 2 */}
          <div className="m-5" data-aos="fade-down">
            <div className="flex justify-center">
              <img src={Img7} alt="" className="size-32 rounded-full" />
            </div>
            <h2 className="font-semibold text-lg text-center">Share Love</h2>
            <p className="text-center max-w-xs mx-auto">
              When you share love with those around you, you create a ripple
              effects of kindness.
            </p>
          </div>
          {/* image 3 */}
          <div className="m-5" data-aos="fade-up">
            <div className="flex justify-center">
              <img src={Img10} alt="" className="size-32 rounded-full" />
            </div>
            <h2 className="font-semibold text-lg text-center">
              Build Socially
            </h2>
            <p className="text-center max-w-xs mx-auto">
              Building socially requires not just connecting with others, but
              also actively contributing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
