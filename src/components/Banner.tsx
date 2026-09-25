import heroImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 pb-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-6 flex flex-col justify-center h-full">
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Development
            </span>{" "}
            <span className="text-purple-700">Stack</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          {/* Button Start */}
          <div className="flex items-center gap-6 pt-4">
            {/* Explore Technologies Button */}
            <button className="relative group overflow-hidden px-8 py-4 rounded-full border border-gray-300 text-gray-700 font-medium text-lg bg-transparent cursor-pointer active:scale-95 shadow-xs hover:shadow-lg hover:border-transparent transition-all duration-300">
              {/* Smooth Gradient Layer */}
              <span className="absolute inset-0 bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* Button Text */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Explore Technologies
              </span>
            </button>

            {/* Learn More Button */}
            <button className="relative group overflow-hidden px-8 py-4 rounded-full border border-gray-300 text-gray-700 font-medium text-lg bg-transparent cursor-pointer active:scale-95 shadow-xs hover:shadow-lg hover:border-transparent transition-all duration-300">
              {/* Smooth Gradient Layer */}
              <span className="absolute inset-0 bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* Button Text */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Learn More
              </span>
            </button>
          </div>
          {/* Button End */}
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end items-stretch h-full">
          <img
            src={heroImg}
            alt="3D Futuristic Development Stack Visualization"
            className="w-full max-w-lg md:max-w-none h-full object-contain object-right drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
