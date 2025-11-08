import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Calculator App",
    desc: "A simple calculator built with React and Tailwind CSS.",
    path: "/calculator",
  },
  {
    name: "Todo List",
    desc: "A simple todo list built with React and Tailwind CSS.",
    path: "/todo-list",
  },
  {
    name: "Weather App",
    desc: "A simple weather app built with React and Tailwind CSS.",
    path: "/weather-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-[#0F172A] text-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-4"
        >
          My Work
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-blue-200 mb-12 text-lg"
        >
          Check out some of my recent projects
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-[#1E3A8A]/50 to-[#1E40AF]/30 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 border border-blue-700/50 hover:border-blue-400/50"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-300">
                {project.name}
              </h3>
              <p className="text-blue-100 mb-6 text-sm sm:text-base leading-relaxed">
                {project.desc}
              </p>

              <Link
                to={project.path}
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] hover:from-[#2563EB] hover:to-[#3B82F6] rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-blue-500/50"
              >
                View Project
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
