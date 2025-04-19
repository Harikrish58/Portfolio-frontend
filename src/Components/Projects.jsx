// Import React, motion from framer-motion, and icons
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import blog from "../assets/Blog.png";
import portfolio from "../assets/portfolio.png";
import fetchapi from "../assets/FetchAPI.png";

// Array of projects with metadata (title, description, tech stack, links, image)
const projects = [
  {
    title: "Blog Application",
    description:
      "DevHub is a responsive, full-stack blog application built with React and Tailwind, offering user authentication via Firebase Auth and Google OAuth, image uploads, post creation, and a dark mode feature..",
    techStack: ["React", "TailwindCSS", "Firebase", "Express", "MongoDB"],
    liveDemo: "https://devhub-blogapp.netlify.app/",
    github: "https://github.com/Harikrish58/Blog-App_Frontend",
  image: blog,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio with contact form and admin dashboard integration.",
    techStack: ["React", "TailwindCSS", "Express", "MongoDB"],
    liveDemo: "https://your-portfolio-link.com",
    github: "https://github.com/Harikrish58/portfolio",
    image: portfolio,
  },
  {
    title: "Countries Weather Forecast App",
    description:
      "A JavaScript app that fetches country data and displays weather info using OpenWeatherMap.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST API"],
    liveDemo: "https://fetchapirestcountries.netlify.app",
    github: "https://github.com/Harikrish58/Fetch-API-restcountries",
    image: fetchapi,
  },
];

// Projects component to showcase portfolio projects
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section heading */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Projects
        </h2>

        {/* Responsive project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }} // Slight zoom on hover
              initial={{ opacity: 0, y: 40 }} // Start faded & pushed down
              whileInView={{ opacity: 1, y: 0 }} // Animate into view
              viewport={{ once: true }} // Animate only once
              transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger animations
            >
              {/* Project image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project content */}
              <div className="p-5 space-y-3">
                {/* Project title */}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 text-xs font-medium text-blue-600 dark:text-blue-400">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links to live demo and GitHub */}
                <div className="flex items-center justify-between mt-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline dark:text-blue-400 flex items-center gap-1"
                  >
                    Live Demo <FaExternalLinkAlt size={12} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white flex items-center gap-1"
                  >
                    Code <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
