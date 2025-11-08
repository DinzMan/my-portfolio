import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // EmailJS configuration
    // You need to set these up in your EmailJS account:
    // 1. Go to https://www.emailjs.com/
    // 2. Create an account and add your email service (Gmail recommended)
    // 3. Create a service, template, and get your Public Key
    // 4. Replace the values below with your actual EmailJS credentials

    const serviceID = "YOUR_SERVICE_ID"; // Replace with your EmailJS Service ID
    const templateID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS Template ID
    const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS Public Key

    // Template parameters - these will be sent to your email
    const templateParams = {
      to_email: "thedinzman107@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0F172A] to-[#1E3A8A]/40 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4 animate-fadeIn">
          Let's Connect
        </h2>
        <p className="text-blue-200 mb-10 text-lg">
          Have a project or collaboration in mind? I'd love to hear from you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-[#0F172A]/90 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-2xl border border-blue-700/50 hover:border-blue-500/50 transition-all duration-300"
        >
          <div className="mb-6 text-left">
            <label className="block text-blue-300 mb-2 font-medium">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-[#1E3A8A]/30 text-white border border-blue-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 placeholder-blue-400/50"
            />
          </div>

          <div className="mb-6 text-left">
            <label className="block text-blue-300 mb-2 font-medium">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-lg bg-[#1E3A8A]/30 text-white border border-blue-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 placeholder-blue-400/50"
            />
          </div>

          <div className="mb-8 text-left">
            <label className="block text-blue-300 mb-2 font-medium">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell me about your project or just say hello..."
              className="w-full px-4 py-3 rounded-lg bg-[#1E3A8A]/30 text-white border border-blue-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 resize-none placeholder-blue-400/50"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-4 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] hover:from-[#2563EB] hover:to-[#3B82F6] rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status === "sending" ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>

          {status === "success" && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
              <p className="text-green-400 font-medium">
                ✅ Message sent successfully! I'll get back to you soon.
              </p>
            </div>
          )}
          {status === "error" && (
            <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-400 font-medium">
                ❌ Something went wrong. Please try again or email me directly
                at thedinzman107@gmail.com
              </p>
            </div>
          )}
        </form>

        <div className="mt-8 text-blue-300 text-sm">
          <p>Or reach me directly at:</p>
          <a
            href="mailto:thedinzman107@gmail.com"
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            thedinzman107@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
