import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
      <div className="container mx-auto px-6">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 text-center md:text-left">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4 flex flex-col items-center md:items-start">
            <a href="#" className="inline-block">
              <img
                src={logo}
                alt="Dev Stack Logo"
                className="h-8 object-contain"
              />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-6 pt-2 text-sm font-medium text-gray-700">
              <a
                href="#"
                className="py-1 transition-colors duration-150 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 select-none cursor-pointer"
              >
                GitHub
              </a>
              <a
                href="#"
                className="py-1 transition-colors duration-150 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 select-none cursor-pointer"
              >
                Twitter
              </a>
              <a
                href="#"
                className="py-1 transition-colors duration-150 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 select-none cursor-pointer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-xs font-bold tracking-wider text-gray-900 uppercase">
              Product
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li>
                <a
                  href="#"
                  className="block py-0.5 transition-colors duration-150 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 select-none cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-0.5 transition-colors duration-150 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 select-none cursor-pointer"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-0.5 transition-colors duration-150 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 select-none cursor-pointer"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-xs font-bold tracking-wider text-gray-900 uppercase">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li>
                <a
                  href="#"
                  className="block py-0.5 transition-colors duration-150 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 select-none cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-0.5 transition-colors duration-150 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 select-none cursor-pointer"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-0.5 transition-colors duration-150 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 select-none cursor-pointer"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-xs font-bold tracking-wider text-gray-900 uppercase">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li>
                <a
                  href="#"
                  className="block py-0.5 transition-colors duration-150 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 select-none cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-0.5 transition-colors duration-150 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 select-none cursor-pointer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="#"
              className="py-1 transition-colors duration-150 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 select-none cursor-pointer"
            >
              Privacy
            </a>
            <a
              href="#"
              className="py-1 transition-colors duration-150 hover:text-pink-600 active:text-pink-600 focus:text-pink-600 select-none cursor-pointer"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
