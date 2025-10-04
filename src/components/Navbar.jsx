import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Search } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll untuk efek navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Collections", to: "collections" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F2EFE5]/95 backdrop-blur-md shadow-lg"
            : "bg-[#F2EFE5] shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20 relative">
            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center text-lg space-x-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  activeClass="bg-[#48BEFF] text-white"
                  className="px-6 py-2 rounded-xl font-freckle text-gray-700 hover:bg-[#48BEFF] hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden absolute right-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl hover:bg-[#48BEFF] hover:text-white transition-all duration-300"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="px-4 pt-2 pb-4 space-y-2 bg-[#F2EFE5]/95 backdrop-blur-md">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                spy={true}
                smooth={true}
                duration={600}
                offset={-80}
                activeClass="bg-[#48BEFF] text-white"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 rounded-xl font-freckle text-gray-700 hover:bg-[#48BEFF] hover:text-white transition-all duration-300 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}

            {/* Search for Mobile */}
            <button
              className="w-full px-6 py-3 rounded-xl font-freckle text-gray-700 hover:bg-[#A1D6B2] hover:text-white transition-all duration-300 flex items-center gap-2"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Spacer untuk kompensasi fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
