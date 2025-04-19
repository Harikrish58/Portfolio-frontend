// Import necessary libraries and components
import { Menu, Moon, Sun, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

// Navbar component with responsive design, dark mode toggle, and scroll-based active link highlighting
const Navbar = () => {
  // Dark mode state, initialized based on localStorage
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // Menu toggle state for mobile view
  const [menuOpen, setMenuOpen] = useState(false);

  // Get the current URL hash (e.g., #about, #contact)
  const { hash } = useLocation();

  // Update theme on component mount and when isDarkMode changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Toggles the dark/light theme
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // Toggles the mobile navigation menu
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Closes the mobile menu
  const closeMenu = () => setMenuOpen(false);

  // Utility function to highlight the active section link
  const navLinkStyle = (target) =>
    `hover:text-blue-600 dark:hover:text-blue-400 ${
      hash === target ? "text-blue-600 dark:text-blue-400 font-semibold" : ""
    }`;

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      {/* Top Navbar Section */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4 text-gray-900 dark:text-white">
        {/* Logo with scroll-to-top on click */}
        <div
          onClick={() => {
            scroll.scrollToTop({ duration: 500, smooth: true });
            closeMenu();
          }}
          className="cursor-pointer flex items-center space-x-2 text-2xl font-bold h-8"
        >
          <img src={logo} alt="HK Logo" className="h-16 w-auto -mt-1" />
          <span>
            Hari{" "}
            <span className="text-blue-600 dark:text-blue-400">krishnan</span>
          </span>
        </div>

        {/* Desktop navigation links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a
              href="#about"
              onClick={closeMenu}
              className={navLinkStyle("#about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={closeMenu}
              className={navLinkStyle("#projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className={navLinkStyle("#contact")}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side: Social + Theme + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* GitHub icon with external link */}
          <a
            href="https://github.com/Harikrish58"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* LinkedIn icon with external link */}
          <a
            href="https://www.linkedin.com/in/hari-krishnan-283360138"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Dark mode toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Only visible when menuOpen is true */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6">
          <ul className="flex flex-col gap-4 font-medium">
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className={navLinkStyle("#about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className={navLinkStyle("#projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className={navLinkStyle("#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
