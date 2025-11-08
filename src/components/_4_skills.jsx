import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#1E3A8A]/30 to-[#0F172A] text-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-4"
        >
          My Skills
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-blue-200 mb-12 text-lg"
        >
          Technologies and tools I work with
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.15,
                rotate: 3,
                boxShadow: "0px 0px 20px rgba(59,130,246,0.5)",
              }}
              className="flex items-center gap-3 px-5 sm:px-6 py-3 bg-[#1E3A8A]/50 backdrop-blur-sm text-blue-100 
                         rounded-full cursor-pointer transition-all duration-300 border border-blue-700/50 hover:border-blue-400/50"
            >
              <motion.span
                whileHover={{ rotate: 360, scale: 1.3 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="text-xl sm:text-2xl"
              >
                {skill.icon}
              </motion.span>
              <span className="font-medium text-sm sm:text-base">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
