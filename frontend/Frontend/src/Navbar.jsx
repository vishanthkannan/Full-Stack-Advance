import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="font-bold text-2xl text-indigo-600">Brand.</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium">Services</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium">Contact</a>
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-600 focus:outline-none transition-colors duration-300"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg bg-white/95 backdrop-blur-md">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Home
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              About
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Services
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Contact
            </a>
            <div className="pt-4">
              <button className="w-full bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
