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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 text-left">
          {/* Personal Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#1E3A8A]/40 to-[#1E40AF]/30 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-[0_0_25px_rgba(45,110,200,0.3)] transition-all border border-blue-700/30 hover:border-blue-500/50"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <FaUserGraduate className="text-blue-300" /> Personal Information
            </h3>
            <ul className="space-y-3 text-blue-200 text-sm sm:text-base">
              <li><strong>Age:</strong> 20 years</li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" /> <strong>Location:</strong> Lahore, Pakistan
              </li>
              <li><strong>Degree:</strong> BS Software Engineering</li>
              <li className="flex items-center gap-2">
                <FaClock className="text-blue-400 flex-shrink-0" /> <strong>Experience:</strong> 6 months
              </li>
            </ul>
          </motion.div>

          {/* Education & Expertise Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#1E3A8A]/40 to-[#1E40AF]/30 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-[0_0_25px_rgba(45,110,200,0.3)] transition-all border border-blue-700/30 hover:border-blue-500/50"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <FaCode className="text-blue-300" /> Education & Expertise
            </h3>
            <ul className="space-y-3 text-blue-200 text-sm sm:text-base">
              <li>
                <strong>University:</strong> Virtual University of Pakistan
              </li>
              <li>
                <strong>Degree:</strong> BS Software Engineering (2025 – 2029)
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-base sm:text-lg font-semibold text-blue-300 mb-2">
                Frontend Tech Expertise:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-blue-200 text-sm sm:text-base">
                <li>Web Development (HTML, CSS, JavaScript, React)</li>
                <li>Responsive & Modern UI/UX Design</li>
                <li>Tailwind CSS & Component Libraries</li>
                <li>API Integration & Frontend Optimization</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
