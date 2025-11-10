import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaCode, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-[#0F172A] text-blue-100">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-4"
        >
          About Me
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg leading-relaxed mb-12 text-blue-200 max-w-3xl mx-auto px-4"
        >
          I'm a passionate front-end developer focused on building clean,
          modern, and user-friendly interfaces. I enjoy turning complex problems
          into simple, beautiful, and intuitive designs.
        </motion.p>

        {/* Cards Container */}
        <motion.div 
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {/* Personal Info Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50, y: 30 },
              visible: { 
                opacity: 1, 
                x: 0, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 0.6,
                },
              },
            }}
            whileHover={{ 
              scale: 1.05,
              y: -8,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-br from-[#1E3A8A]/40 to-[#1E40AF]/30 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-[0_0_25px_rgba(45,110,200,0.3)] border border-blue-700/30 cursor-pointer relative overflow-hidden group"
          >
            {/* Animated background gradient on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
            />
            
            {/* Glow effect on hover */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
              style={{
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(59, 130, 246, 0.3)",
              }}
            />

            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.h3 
                className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <FaUserGraduate className="text-blue-300" />
                </motion.div>
                Personal Information
              </motion.h3>
              <motion.ul 
                className="space-y-3 text-blue-200 text-sm sm:text-base"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ x: 5, color: "#93C5FD" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <strong>Age:</strong> 20 years
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ x: 5, color: "#93C5FD" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" /> <strong>Location:</strong> Lahore, Pakistan
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ x: 5, color: "#93C5FD" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <strong>Degree:</strong> BS Software Engineering
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ x: 5, color: "#93C5FD" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                <FaClock className="text-blue-400 flex-shrink-0" /> <strong>Experience:</strong> 6 months
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Education & Expertise Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50, y: 30 },
              visible: { 
                opacity: 1, 
                x: 0, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 0.6,
                },
              },
            }}
            whileHover={{ 
              scale: 1.05,
              y: -8,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-br from-[#1E3A8A]/40 to-[#1E40AF]/30 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-[0_0_25px_rgba(45,110,200,0.3)] border border-blue-700/30 cursor-pointer relative overflow-hidden group"
          >
            {/* Animated background gradient on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
            />
            
            {/* Glow effect on hover */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
              style={{
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(59, 130, 246, 0.3)",
              }}
            />

            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.h3 
                className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <FaCode className="text-blue-300" />
                </motion.div>
                Education & Expertise
              </motion.h3>
              <motion.ul 
                className="space-y-3 text-blue-200 text-sm sm:text-base"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3,
                    },
                  },
                }}
              >
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ x: 5, color: "#93C5FD" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                <strong>University:</strong> Virtual University of Pakistan
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ x: 5, color: "#93C5FD" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                <strong>Degree:</strong> BS Software Engineering (2025 – 2029)
                </motion.li>
              </motion.ul>
              <motion.div 
                className="mt-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <motion.h4 
                  className="text-base sm:text-lg font-semibold text-blue-300 mb-2"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                Frontend Tech Expertise:
                </motion.h4>
                <motion.ul 
                  className="list-disc list-inside space-y-1 text-blue-200 text-sm sm:text-base"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                >
                  {[
                    "Web Development (HTML, CSS, JavaScript, React)",
                    "Responsive & Modern UI/UX Design",
                    "Tailwind CSS & Component Libraries",
                    "API Integration & Frontend Optimization",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: -15 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      whileHover={{ x: 5, color: "#93C5FD", scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
