import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaCode, FaLaptopCode } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center pt-20 lg:pt-0 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#1E40AF]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
        ></motion.div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left flex-1 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 text-blue-300 mb-4"
          >
            <FaCode className="text-2xl" />
            <span className="text-sm font-semibold tracking-wider">FRONTEND DEVELOPER</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 animate-gradient">
              Aoun Qureshi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed"
          >
            A passionate Frontend Developer crafting sleek, responsive, and modern web
            experiences using <span className="text-blue-300 font-semibold">React</span> and{" "}
            <span className="text-blue-300 font-semibold">Tailwind CSS</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] hover:from-[#2563EB] hover:to-[#3B82F6] rounded-full text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
            >
              View My Work
              <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 rounded-full text-blue-300 hover:text-blue-200 font-semibold text-lg transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social/Stats Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-6 mt-8 text-blue-300"
          >
            <div className="flex items-center gap-2">
              <FaLaptopCode className="text-xl" />
              <span className="text-sm">6 Months Experience</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          <div className="relative">
            {/* Glowing effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-3xl transform scale-150 animate-pulse"></div>
            
            {/* Image container with hover effect */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <img
                src="/aoun-2.png"
                alt="Aoun Qureshi - Frontend Developer"
                className="w-[300px] h-[350px] sm:w-[350px] sm:h-[400px] lg:w-[400px] lg:h-[450px] object-cover rounded-[100px] shadow-[0_0_40px_10px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_15px_rgba(59,130,246,0.6)] transition-all duration-500 border-4 border-blue-500/30"
              />
              
              {/* Floating code icons around image */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30"
              >
                <FaCode className="text-blue-300 text-xl" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30"
              >
                <FaLaptopCode className="text-blue-300 text-xl" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-blue-300 cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <FaArrowDown className="text-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
