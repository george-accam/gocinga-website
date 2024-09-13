import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ngologo.jpeg";

const Header = () => {
  const [isIndicate, setIsIndicate] = useState(null);

  return (
    <nav className="bg-gray-800 p-4 fixed z-10 w-full">
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/" className="text-white text-xl">
            <img
              src={Logo}
              alt="Hero"
              className="w-8 h-8 rounded-full object-cover"
            />
          </Link>
        </li>
        <li className="sm:space-x-6">
          <Link
            to="/"
            className={
              isIndicate === "home"
                ? "bg-slate-500 p-2 rounded-lg text-slate-100"
                : "text-slate-100 p-2"
            }
            onClick={() => setIsIndicate("home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={
              isIndicate === "about"
                ? "bg-slate-500 p-2 rounded-lg text-slate-100"
                : "text-slate-100 p-2"
            }
            onClick={() => setIsIndicate("about")}
          >
            About Us
          </Link>
          <Link
            to="/projects"
            className={
              isIndicate === "projects"
                ? "bg-slate-500 p-2 rounded-lg text-slate-100"
                : "text-slate-100 p-2"
            }
            onClick={() => setIsIndicate("projects")}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={
              isIndicate === "contact"
                ? "bg-slate-500 p-2 rounded-lg text-slate-100"
                : "text-slate-100 p-2"
            }
            onClick={() => setIsIndicate("contact")}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
