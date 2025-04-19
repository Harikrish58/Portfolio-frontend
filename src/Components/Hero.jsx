// Import React, profile image, and framer-motion for animations
import React from "react";
import profileImg from "../assets/profile.jpg";
import { motion } from "framer-motion";

// Hero section displays the user's intro, summary, and call-to-action buttons
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Left side: Text block with entrance animation from the left */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
        animate={{ x: 0, opacity: 1 }} // Animate to visible position
        transition={{ duration: 0.8, delay: 0.2 }} // Animation timing
      >
        {/* Headline with highlighted name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hey, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Hari Krishnan
          </span>
        </h1>

        {/* Subheading for role */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Full Stack Developer | MERN Stack Enthusiast
        </h2>

        {/* Professional summary */}
        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Aspiring Full-Stack Developer with hands-on experience building
          responsive web applications using the MERN stack (MongoDB, Express.js,
          React, Node.js). Strong foundation in both frontend and backend
          development, RESTful APIs, and responsive UI design. Transitioning
          into tech with 5+ years of experience in production management,
          strategic planning, and cross-functional team leadership. Passionate
          about developing practical, user-focused software and continually
          expanding my skills in modern web technologies.
        </p>

        {/* CTA buttons for Projects and Contact */}
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right side: Profile image with animation from the right */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
        animate={{ x: 0, opacity: 1 }} // Animate to center
        transition={{ duration: 0.8, delay: 0.4 }} // Animation timing
      >
        <img
          src={profileImg}
          alt="Profile photo of Hari Krishnan, Full Stack Developer"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-600 shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
