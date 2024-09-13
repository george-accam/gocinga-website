import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Facebook from "../footersvg/Facebook.svg";
import Instagram from "../footersvg/Instagram.svg";
import Twitter from "../footersvg/Twitterx.svg";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      delay: 0,
    });
  }, []);

  return (
    <footer className="bg-gray-800 text-white p-4 bottom-0">
      <div className="container mx-auto flex flex-col">
        <div className="flex space-x-9 lg:flex justify-between sm:mx-10">
          <a href="#" className="text-white">
            <img src={Facebook} className="size-9" />
          </a>
          <a href="#" className="text-white">
            <img src={Twitter} className="size-8" />
          </a>
          <a href="#" className="text-white">
            <img src={Instagram} className="size-8" />
          </a>
        </div>
        <div className="flex justify-center sm:justify-start">
          <form className="flex space-x-2 mt-4">
            <input
              type="email"
              placeholder="Subscribe"
              required
              className="text-slate-900 outline-none p-2 rounded"
            />
            <button
              type="submit"
              className="bg-yellow-500 outline-none text-black px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="text-center   my-1">
        © 2024 Gocinga NGO. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
