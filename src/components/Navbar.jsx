import React, { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"; // icons!

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full px-6 md:px-24 py-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-md border-b border-gray-200 dark:border-gray-700 transition-all">
      {/* Logo */}
      <div className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
        <span className="text-blue-500">Viraj</span> Domadia
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-10 text-gray-600 dark:text-gray-300 font-medium text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="relative group transition-colors duration-300 hover:text-blue-500"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Right Side: Resume, Dark Mode, Mobile Menu */}
      <div className="flex items-center gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          Resume
        </a>

        {/* Dark Mode Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700 dark:text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-6 left-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg flex flex-col items-center gap-6 py-8 animate-fade-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
