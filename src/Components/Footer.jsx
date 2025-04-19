// Import required dependencies and icons
import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaFileAlt,
} from "react-icons/fa";

// Footer component displaying contact info, quick links, and social media
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-6 md:px-20 py-10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Developer name and contact details */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-lg font-semibold">Hari Krishnan Nagarajan</p>

          {/* Email address */}
          <p className="text-sm flex items-center gap-2 justify-center md:justify-start">
            <FaEnvelope className="text-blue-600 dark:text-blue-400 w-4 h-4" />
            <a
              href="mailto:harikrish61@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-2"
            >
              harikrish61@gmail.com
            </a>
          </p>

          {/* Phone number */}
          <p className="text-sm flex items-center gap-2 justify-center md:justify-start">
            <FaPhoneAlt className="text-blue-600 dark:text-blue-400 w-4 h-4" />
            <a
              href="tel:+48 739 686 095"
              className="hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-2"
            >
              +48 739 686 095
            </a>
          </p>

          {/* Copyright note */}
          <p className="text-sm text-center mt-6 text-gray-500 dark:text-gray-400">
            Designed & built by Hari Krishnan Nagarajan ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>

        {/* In-page navigation links */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Social media and resource links */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Harikrish58"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hari-krishnan-283360138"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:harikrish61@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="/HARI KRISHNAN NAGARAJAN CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="Resume"
          >
            <FaFileAlt />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
