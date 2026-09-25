import { useState } from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto h-20 flex justify-between items-center px-4 md:px-6">
        {/* Left Section: Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700 hover:text-pink-600 focus:outline-hidden cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Brand Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <a href="#">
            <img
              src={logo}
              alt="DS Dev Stack Logo"
              className="h-8 md:h-10 object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex justify-center items-center gap-8 text-base font-medium">
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

        {/* Right Section: Sign In & Sign Up Buttons */}
        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-base">
          <button className="relative group overflow-hidden px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full border border-gray-300 text-gray-700 font-medium bg-transparent cursor-pointer active:scale-95 shadow-xs hover:shadow-md hover:border-transparent active:border-transparent focus:border-transparent transition-all duration-300">
            <span className="absolute inset-0 bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white group-active:text-white group-focus:text-white">
              Sign In
            </span>
          </button>

          <button className="relative group overflow-hidden px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full border border-gray-300 text-gray-700 font-medium bg-transparent cursor-pointer active:scale-95 shadow-xs hover:shadow-md hover:border-transparent active:border-transparent focus:border-transparent transition-all duration-300">
            <span className="absolute inset-0 bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white group-active:text-white group-focus:text-white">
              Sign Up
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg absolute top-20 left-0 w-full z-50">
          <ul className="flex flex-col gap-4 text-base font-medium">
            <li>
              <a
                href="#"
                className="block text-gray-700 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 transition-colors duration-150 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-700 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 transition-colors duration-150 cursor-pointer"
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-700 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 transition-colors duration-150 cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-700 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 transition-colors duration-150 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-700 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 transition-colors duration-150 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
