import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          {/* <a href="/" title="Ruchi Makeover">
            <img
              src="https://www.lookssalon.in/public/images/Big_Logo.svg"
              alt="Ruchi Makeover Logo"
              width="140"
              height="55"
              className="object-contain"
            />
          </a> */}
          <h1 className="text-1xl sm:text-2xl font-bold text-white tracking-wide">RUCHI MISHRA<span className="text-1xl sm:text-2xl text-red-500  font-semibold"> MAKEOVER</span> </h1>
        </div>

        {/* Right Section - Desktop */}
        <div className="hidden lg:flex flex-col items-end space-y-3">
          {/* Top Right Buttons and Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href="#book-appointment"
              className="bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition"
            >
              Book Appointment
            </a>
            <a
              href="#salon-finder"
              className="border border-red-600 text-red-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-50 transition flex items-center"
            >
              Salon Finder <i className="fa fa-map-marker ml-1"></i>
            </a>

            {/* Social Links */}
            <div className="flex items-center space-x-2 ml-2">
              <a
                href="https://www.facebook.com/Looksunisexsalon/"
                target="_blank"
                className="text-gray-700 hover:text-red-600"
              >
                <i className="fa fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://twitter.com/looksindia"
                target="_blank"
                className="text-gray-700 hover:text-red-600"
              >
                <i className="fa fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/looksunisexsalon/"
                target="_blank"
                className="text-gray-700 hover:text-red-600"
              >
                <i className="fa fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex space-x-6 text-[15px] font-medium uppercase">
            <a href="#home" className=" text-white hover:text-red-600">
              Home
            </a>
            <a href="#about" className="text-white hover:text-red-600">
              About Us
            </a>

            {/* Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-white hover:text-red-600">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-3 bg-white shadow-lg rounded-md w-56 border border-gray-100 z-50">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-red-50 transition">
                      <a
                        href="#ladies-services"
                        className="flex items-center justify-between text-gray-700 hover:text-red-600"
                      >
                        Ladies
                        <img
                          src="https://www.lookssalon.in/public/images/menuLadies.webp"
                          alt="Ladies"
                          className="w-12 h-12 object-cover rounded-md ml-2"
                        />
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-red-50 transition">
                      <a
                        href="#gents-services"
                        className="flex items-center justify-between text-gray-700 hover:text-red-600"
                      >
                        Gents
                        <img
                          src="https://www.lookssalon.in/public/images/menuGents.webp"
                          alt="Gents"
                          className="w-12 h-12 object-cover rounded-md ml-2"
                        />
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-red-50 transition">
                      <a
                        href="#loyalty-card"
                        className="flex items-center justify-between text-gray-700 hover:text-red-600"
                      >
                        Loyalty Card
                        <img
                          src="https://www.lookssalon.in/public/images/loyaltycard.png"
                          alt="Loyalty Card"
                          className="w-12 h-12 object-cover rounded-md ml-2"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {["e-Shop", "Franchise", "Academy", "Offers", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-red-600"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white py-4 px-5 space-y-3">
          <nav className="flex flex-col space-y-3 text-gray-800 font-medium">
            <a href="#home" className="hover:text-red-600">
              Home
            </a>
            <a href="#about" className="hover:text-red-600">
              About Us
            </a>

            {/* Services */}
            <div>
              <span className="font-semibold">Services</span>
              <div className="pl-3 mt-2 flex flex-col space-y-1">
                <a href="#ladies-services" className="hover:text-red-600">
                  Ladies
                </a>
                <a href="#gents-services" className="hover:text-red-600">
                  Gents
                </a>
                <a href="#loyalty-card" className="hover:text-red-600">
                  Loyalty Card
                </a>
              </div>
            </div>

            {["e-Shop", "Franchise", "Academy", "Offers", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-red-600"
                >
                  {item}
                </a>
              )
            )}

            {/* Buttons */}
            <div className="flex flex-col gap-2 pt-3">
              <button className="bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
                Book Appointment
              </button>
              <button className="border border-red-600 text-red-600 py-2 rounded-md hover:bg-red-50">
                Salon Finder
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-start space-x-4 pt-4">
              <a
                href="https://www.facebook.com/Looksunisexsalon/"
                target="_blank"
                className="text-gray-700 hover:text-red-600"
              >
                <i className="fa fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://twitter.com/looksindia"
                target="_blank"
                className="text-gray-700 hover:text-red-600"
              >
                <i className="fa fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/looksunisexsalon/"
                target="_blank"
                className="text-gray-700 hover:text-red-600"
              >
                <i className="fa fa-instagram fa-lg"></i>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
