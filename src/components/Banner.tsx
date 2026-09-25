import heroImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white overflow-hidden pb-0">
      <div className="container mx-auto px-4 sm:px-6 pt-10 md:pt-14 pb-8 md:pb-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-6 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          {/* Responsive Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Development
            </span>{" "}
            <span className="text-purple-700">Stack</span>
          </h1>

          {/* Responsive Paragraph */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-2 w-full sm:w-auto">
            {/* Explore Technologies Button */}
            <button className="relative group overflow-hidden w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full border border-gray-300 text-gray-700 font-medium text-base sm:text-lg bg-transparent cursor-pointer active:scale-95 shadow-xs hover:shadow-lg hover:border-transparent active:border-transparent focus:border-transparent transition-all duration-300">
              <span className="absolute inset-0 bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white group-active:text-white group-focus:text-white">
                Explore Technologies
              </span>
            </button>

            {/* Learn More Button */}
            <button className="relative group overflow-hidden w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full border border-gray-300 text-gray-700 font-medium text-base sm:text-lg bg-transparent cursor-pointer active:scale-95 shadow-xs hover:shadow-lg hover:border-transparent active:border-transparent focus:border-transparent transition-all duration-300">
              <span className="absolute inset-0 bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white group-active:text-white group-focus:text-white">
                Learn More
              </span>
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end items-center w-full">
          <img
            src={heroImg}
            alt="3D Futuristic Development Stack Visualization"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
