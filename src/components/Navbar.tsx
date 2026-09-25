import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className=" bg-white">
      <div className="container mx-auto h-20 flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="DS Dev Stack Logo" className="h-10" />
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

        {/* Buttons Start */}
        <div className="flex items-center gap-4 text-base">
          {/* Sign In Button */}
          <button className="relative group overflow-hidden px-6 py-2.5 rounded-full border border-gray-300 text-gray-700 font-medium bg-transparent cursor-pointer active:scale-95 shadow-xs hover:shadow-md hover:border-transparent transition-all duration-300">
            {/* Smooth Gradient Layer */}
            <span className="absolute inset-0 bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

            {/* Button Text */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Sign In
            </span>
          </button>

          {/* Sign Up Button */}
          <button className="relative group overflow-hidden px-6 py-2.5 rounded-full border border-gray-300 text-gray-700 font-medium bg-transparent cursor-pointer active:scale-95 shadow-xs hover:shadow-md hover:border-transparent transition-all duration-300">
            {/* Smooth Gradient Layer */}
            <span className="absolute inset-0 bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

            {/* Button Text */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Sign Up
            </span>
          </button>
        </div>
        {/* Buttons End) */}
      </div>
    </nav>
  );
};

export default Navbar;
