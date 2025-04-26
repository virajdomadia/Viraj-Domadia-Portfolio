import React from "react";
import { motion } from "framer-motion"; // optional, for slight animations

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background subtle shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>

      {/* Left Text Content */}
      <div className="z-10 flex flex-col gap-6 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white"
        >
          Hey, I’m Viraj Domadia 👋
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold"
        >
          Full Stack Developer & MCA Student
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
        >
          I build modern web applications with a passion for clean code,
          creative UI, and great user experience. Currently learning and growing
          every day! 🚀
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-6 mt-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition shadow-md"
          >
            Hire Me
          </a>
        </motion.div>
      </div>

      {/* Right Image Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="z-10 mt-12 md:mt-0"
      >
        <img
          src="/avatar.svg" // your illustration image here
          alt="Viraj Domadia Avatar"
          className="w-[300px] md:w-[400px] object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Home;
