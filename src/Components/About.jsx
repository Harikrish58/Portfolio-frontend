// Import necessary libraries and hooks
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// List of technical skills and tools used in the Skills section
const skills = [
  // Core Stack
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Mongoose",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },

  // Frontend & UI
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "TailwindCSS",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Material UI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Flowbite UI",
    logo: "https://logowik.com/content/uploads/images/flowbite8731.logowik.com.webp",
  },

  // Tools & Platforms
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
];

// Reusable animation wrapper to trigger fade-in when an element scrolls into view
const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
    >
      {children}
    </motion.div>
  );
};

// Work experience data shown under the Professional Experience section
const experienceData = [
  {
    role: "Production Manager — Injection Molding",
    company: "Ace Rico Poland Sp.z o.o, Poland",
    duration: "Feb 2020 – Present",
    details: [
      "Led strategic planning and execution to streamline operations, enhance efficiency, and improve profitability.",
      "Managed manpower, equipment, and materials to meet production targets and customer deadlines effectively.",
      "Oversaw procurement and material planning based on in-depth production analysis.",
      "Implemented strict quality control measures to ensure product consistency and regulatory compliance.",
      "Supervised and developed a team of 60+ staff through onboarding, training, and performance reviews.",
      "Coordinated with cross-functional teams to ensure smooth workflow and integration across departments.",
      "Analyzed production reports and provided actionable insights for continuous improvement to senior leadership.",
    ],
    skills: [
      "Team Leadership",
      "Process Optimization (Manufacturing)",
      "Quality Assurance",
      "Project Management",
      "Time Management",
      "Strategic Planning",
      "Inventory Management",
      "Lean Manufacturing",
      "Cross-Functional Collaboration",
      "Root Cause Analysis",
      "Workforce Management",
    ],
  },
  {
    role: "Assistant Manager — Injection Molding",
    company: "Ace Rico Poland Sp.z o.o, Poland",
    duration: "Dec 2019 – Jan 2020",
    details: [
      "Assisted in planning and daily execution of molding operations.",
      "Monitored raw material usage and managed supplier communication.",
      "Helped with downtime tracking and performance reporting.",
    ],
    skills: [
      "Problem Solving",
      "Data Analysis",
      "Team Leadership",
      "Time Management",
      "Inventory Management",
      "Root Cause Analysis",
    ],
  },
  {
    role: "Construction Engineer",
    company: "JK Construction, India",
    duration: "May 2018 – Oct 2019",
    details: [
      "Supervised residential building projects from foundation to handover.",
      "Prepared estimates, managed labor teams, and ensured site safety compliance.",
      "Worked with architects and clients for design implementations.",
    ],
    skills: [
      "Project Management",
      "Quality Assurance",
      "Time Management",
      "Problem Solving",
      "Team Leadership",
    ],
  },
];

// About component showing bio, skills, and professional experience
const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-20 py-16 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section heading */}
        <FadeInWhenVisible>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        </FadeInWhenVisible>

        {/* Introduction paragraph */}
        <FadeInWhenVisible delay={0.1}>
          <p className="text-lg leading-relaxed mb-6">
            I’m Hari Krishnan Nagarajan, an aspiring full-stack developer with
            hands-on experience building responsive web applications using the
            MERN stack. I bring 5+ years of experience in production management
            and team leadership — now channeling that discipline into building
            web applications.
          </p>
        </FadeInWhenVisible>

        {/* Second paragraph */}
        <FadeInWhenVisible delay={0.2}>
          <p className="text-lg leading-relaxed mb-10">
            I’m passionate about creating responsive UIs and scalable backends.
            My current focus is building real-world projects and expanding my
            skillset in full-stack web development. I’m currently learning
            TypeScript and AWS, focusing on using TypeScript in frontend
            components and exploring AWS services like S3 and EC2.
          </p>
        </FadeInWhenVisible>

        {/* Skills section heading */}
        <FadeInWhenVisible delay={0.3}>
          <h3 className="text-2xl font-semibold mb-10 mt-10 text-center">
            Skills & Tools
          </h3>
        </FadeInWhenVisible>

        {/* Grid of skills */}
        <FadeInWhenVisible delay={0.4}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center"
              >
                <div className="bg-white p-4 rounded-full h-20 w-20 flex items-center justify-center">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <p className="text-sm mt-2">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* Experience section heading */}
        <FadeInWhenVisible delay={0.5}>
          <h3 className="text-2xl font-semibold mb-10 mt-16 text-center">
            Professional Experience
          </h3>
        </FadeInWhenVisible>

        {/* Cards for each work experience */}
        <div className="space-y-16 text-left">
          {experienceData.map((exp, idx) => (
            <FadeInWhenVisible key={idx} delay={0.2 + idx * 0.1}>
              <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition hover:shadow-xl">
                {/* Left side: company and duration */}
                <div className="md:w-1/3 border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {exp.duration}
                  </p>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                    {exp.company}
                  </h4>
                </div>

                {/* Right side: role description and skill tags */}
                <div className="md:w-2/3">
                  <h5 className="text-xl font-semibold mb-2 text-blue-600">
                    {exp.role}
                  </h5>
                  <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                    {exp.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {/* Skills used in this role */}
                  <div className="flex flex-wrap gap-2">
                    {(exp.skills || []).map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
