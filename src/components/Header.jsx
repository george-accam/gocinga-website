import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ngologo.jpeg";
import Menu from "../footersvg/menu.svg";

const Header = () => {
  const [isIndicate, setIsIndicate] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 p-4 z-10 w-full fixed shadow-slate-700 shadow-md">
        <ul className="flex justify-between items-center">
          <li>
            <Link to="/" className="text-white text-xl">
              <img
                src={Logo}
                alt="Hero"
                className="size-9 rounded-full object-cover"
              />
            </Link>
          </li>

          <div
            className="sm:block lg:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={Menu} className="size-9" alt="Menu" />
          </div>

          <div
            className={`lg:block absolute lg:relative top-full left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? "opacity-100 max-h-screen pb-3"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <li className="flex flex-col lg:flex-row sm:space-x-6">
              <Link
                to="/"
                className={
                  isIndicate === "home"
                    ? "bg-slate-500 mx-2 p-2 rounded-lg text-slate-100"
                    : "text-slate-100 p-2"
                }
                onClick={() => {
                  setIsIndicate("home");
                  setIsMenuOpen(false);
                }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={
                  isIndicate === "about"
                    ? "bg-slate-500 mx-2 p-2 rounded-lg text-slate-100"
                    : "text-slate-100 p-2"
                }
                onClick={() => {
                  setIsIndicate("about");
                  setIsMenuOpen(false);
                }}
              >
                About Us
              </Link>
              <Link
                to="/projects"
                className={
                  isIndicate === "projects"
                    ? "bg-slate-500 mx-2 p-2 rounded-lg text-slate-100"
                    : "text-slate-100 p-2"
                }
                onClick={() => {
                  setIsIndicate("projects");
                  setIsMenuOpen(false);
                }}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={
                  isIndicate === "contact"
                    ? "bg-slate-500 mx-2 p-2 rounded-lg text-slate-100"
                    : "text-slate-100 p-2"
                }
                onClick={() => {
                  setIsIndicate("contact");
                  setIsMenuOpen(false);
                }}
              >
                Contact Us
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Header;
