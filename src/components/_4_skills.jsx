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
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.6 
          }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-4"
        >
          My Skills
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8 
          }}
          viewport={{ once: true }}
          className="text-blue-200 mb-12 text-lg"
        >
          Technologies and tools I work with
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { 
                  opacity: 0, 
                  scale: 0.5, 
                  y: 50,
                  rotate: -10,
                },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                    duration: 0.6,
                  },
                },
              }}
              whileHover={{ 
                scale: 1.2,
                y: -10,
                rotate: [0, -5, 5, -5, 0],
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  rotate: {
                    duration: 0.5,
                  },
                },
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-5 sm:px-6 py-3 bg-gradient-to-br from-[#1E3A8A]/60 to-[#1E40AF]/40 backdrop-blur-sm text-blue-100 
                         rounded-full cursor-pointer border border-blue-700/50 relative overflow-hidden group"
            >
              {/* Animated background gradient on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
              />
              
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                style={{
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.2)",
                }}
              />

              <motion.span
                className="text-xl sm:text-2xl relative z-10"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.4,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                    rotate: {
                      duration: 0.6,
                    },
                  },
                }}
              >
                {skill.icon}
              </motion.span>
              <motion.span 
                className="font-medium text-sm sm:text-base relative z-10"
                whileHover={{ 
                  scale: 1.1,
                  x: 2,
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
