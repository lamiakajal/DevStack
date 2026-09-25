import { useState } from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [activeBtn, setActiveBtn] = useState<string>("signup");
  return (
    <nav className=" bg-white">
      <div className="container mx-auto h-20 flex justify-between items-center">
        <div>
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul className="flex justify-center items-center gap-8 text-base font-medium">
          <li>
            <a
              href="#"
              className="text-gray-700 transition-colors duration-200 hover:text-pink-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 transition-colors duration-200 hover:text-pink-600"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 transition-colors duration-200 hover:text-pink-600"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 transition-colors duration-200 hover:text-pink-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 transition-colors duration-200 hover:text-pink-600"
            >
              Contact
            </a>
          </li>
        </ul>
        {/* button */}
        <div className="flex items-center gap-4 text-base font-medium">
          {/* Sign In Button */}
          <button
            onClick={() => setActiveBtn("signin")}
            className={`px-5 py-2 rounded-full transition-all duration-200 cursor-pointer bg-transparent ${
              activeBtn === "signin"
                ? "bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-md"
                : "text-gray-700 hover:bg-linear-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white"
            }`}
          >
            Sign In
          </button>

          {/* Sign Up Button */}
          <button
            onClick={() => setActiveBtn("signup")}
            className={`px-5 py-2 rounded-full transition-all duration-200 cursor-pointer bg-transparent ${
              activeBtn === "signin"
                ? "bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-md"
                : "text-gray-700 hover:bg-linear-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white"
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
