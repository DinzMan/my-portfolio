import React from "react";
import { FaGithub, FaDiscord, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-blue-200 pt-16 pb-6 border-t border-blue-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center md:text-left pb-14">

        {/* Brand + Description */}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3">Dinzino</h2>
          <p className="text-blue-300 mb-5 text-sm sm:text-base">
            A passionate Front-End Developer focused on crafting engaging,
            user-friendly web experiences using modern technologies.
          </p>


          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a
              href="https://github.com/DinzMan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform hover:scale-110"
            >
              <FaDiscord />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform hover:scale-110"
            >
              <FaXTwitter />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm sm:text-base">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Get in Touch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-blue-300 text-sm sm:text-base">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:thedinzman107@gmail.com"
                className="hover:text-blue-400 transition-colors duration-300 break-all"
              >
               thedinzman107@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+923107883092"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                +92 3107883 092
              </a>
            </li>
            <li>
              <strong>Address:</strong> Lahore, Pakistan
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="text-center border-t border-blue-800 pt-6 text-blue-400 text-sm">
        © {new Date().getFullYear()} Aoun Quraeshi . All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
