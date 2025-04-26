import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("Send Message");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus("Sending...");

    const scriptURL = "https://script.google.com/macros/s/your-script-id/exec"; // Replace with your script URL
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("message", formData.message);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formDataObj,
      });
      setFormStatus("Message Sent!");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      setFormStatus("Error Sending Message");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-24 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-6 p-8 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
            Let's Talk
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-white dark:text-gray-900"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-white dark:text-gray-900"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-white dark:text-gray-900"
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
            >
              {formStatus}
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-6 p-8 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Contact Information
          </h3>

          {/* Email */}
          <div className="flex items-center gap-4 text-lg text-gray-800 dark:text-white">
            <FaEnvelope className="text-xl text-blue-500" />
            <a
              href="mailto:your-email@example.com"
              className="hover:text-blue-600 transition duration-300"
            >
              your-email@example.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 text-lg text-gray-800 dark:text-white">
            <FaPhoneAlt className="text-xl text-blue-500" />
            <span className="hover:text-blue-600 transition duration-300">
              +123 456 7890
            </span>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4 text-lg text-gray-800 dark:text-white">
            <FaMapMarkerAlt className="text-xl text-blue-500" />
            <span className="hover:text-blue-600 transition duration-300">
              123 Street Name, City, Country
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-8 mt-6">
            <a
              href="mailto:your-email@example.com"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-black transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-700 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Download Resume */}
          <div className="mt-6">
            <a
              href="/resume.pdf" // Replace with the actual resume URL
              download
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
