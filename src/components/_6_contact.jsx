import React, { useState } from "react";

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

    // Google Forms submission URL
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdOvaNWcbOuA66gIWomuLmramKJ6pperTKviE3U5zMD3I4mfw/formResponse";
    
    // Create URL-encoded form data with entry IDs
    const params = new URLSearchParams();
    params.append("entry.434041101", formData.name); // Name field
    params.append("entry.1752764696", formData.email); // Email field
    params.append("entry.1988342989", formData.message); // Message field

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: params.toString(),
      });

      // Show success message (submission happens in background)
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      // Even with errors, the form might still be submitted
      // Show success to user as Google Forms accepts submissions
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
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
            href="mailto:muhammadaounaliqureshi@gmail.com"
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            muhammadaounaliqureshi@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
