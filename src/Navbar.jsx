import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { FaSun, FaMoon } from 'react-icons/fa'; // Icons for light and dark mode

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State to manage theme
  const [bgColor, setBgColor] = useState('bg-black'); // Default to black
  const [textColor, setTextColor] = useState('text-slate-100'); // Default to white text
  const location = useLocation(); // Hook to get the current location

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBgColor(isDarkMode ? 'bg-red-900' : 'bg-yellow'); // Update for dark mode
      setTextColor(isDarkMode ? 'text-brown' : 'text-green');
    } else {
      setBgColor(isDarkMode ? 'bg-black' : 'bg-white');
      setTextColor(isDarkMode ? 'text-slate-100' : 'text-black');
    }
  };

  // Toggle theme function
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      setBgColor('bg-white');
      setTextColor('text-black');
    } else {
      setBgColor('bg-black');
      setTextColor('text-slate-100');
    }
  };

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDarkMode]);

  return (
    <nav className={`${bgColor} ${textColor} shadow-md fixed w-full top-0 z-50 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">M/S Jatoi & Con</Link>
          </div>

          {/* Menu Items for Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-green-500' : ''
              } hover:text-green-500 hover:bg-gray-100 cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition duration-200`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-green-500' : ''
              } hover:text-green-500 hover:bg-gray-100 cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition duration-200`}
            >
              About Us
            </Link>
            <Link
              to="/vision"
              className={`${
                isActive('/vision') ? 'text-green-500' : ''
              } hover:text-green-500 hover:bg-gray-100 cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition duration-200`}
            >
              Vision
            </Link>
            <Link
              to="/services"
              className={`${
                isActive('/services') ? 'text-green-500' : ''
              } hover:text-green-500 hover:bg-gray-100 cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition duration-200`}
            >
              Services
            </Link>
            <Link
              to="/team"
              className={`${
                isActive('/team') ? 'text-green-500' : ''
              } hover:text-green-500 hover:bg-gray-100 cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition duration-200`}
            >
              Team
            </Link>
            <Link
              to="/projects"
              className={`${
                isActive('/projects') ? 'text-green-500' : ''
              } hover:text-green-500 hover:bg-gray-100 cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition duration-200`}
            >
              Successful Projects
            </Link>
            <a
              href="https://wa.me/923325408289"
              className="px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium hover:bg-green-400 cursor-pointer transition duration-200"
            >
              Contact Us
            </a>
            {/* Theme Toggle Button */}
            <button
              onClick={handleThemeToggle}
              className="text-2xl focus:outline-none hover:text-green-500 transition duration-300"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`fixed top-0 right-0 w-1/2 h-full ${bgColor} md:hidden flex flex-col items-center justify-center z-40 transition-transform transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-black hover:bg-green-100 hover:text-black cursor-pointer transition duration-200 w-h/2 text-center"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-black hover:bg-green-100 hover:text-black cursor-pointer transition duration-200 w-h/2 text-center"
            >
              About Us
            </Link>
            <Link
              to="/vision"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-black hover:bg-green-100 hover:text-black cursor-pointer transition duration-200 w-h/2 text-center"
            >
              Vision
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-black hover:bg-green-100 hover:text-black cursor-pointer transition duration-200 w-h/2 text-center"
            >
              Services
            </Link>
            <Link
              to="/team"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-black hover:bg-green-100 hover:text-black cursor-pointer transition duration-200 w-h/2 text-center"
            >
              Team
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-black hover:bg-green-100 hover:text-black cursor-pointer transition duration-200 w-h/2 text-center"
            >
              Successful Projects
            </Link>
            <a
              href="https://wa.me/923325408289"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium hover:bg-green-400 cursor-pointer transition duration-200 w-h/2 text-center"
            >
              Contact Us
            </a>
            {/* Theme Toggle Button for Mobile */}
            <button
              onClick={handleThemeToggle}
              className="text-2xl mt-4 focus:outline-none hover:text-green-500 transition duration-300"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
