import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiNextdotjs,
  SiDocker,
} from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 md:px-24 bg-gray-50 dark:bg-gray-800 relative"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-10">
          About Me
        </h2>

        {/* Timeline */}
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-16">
          {/* Timeline Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-lg font-semibold text-gray-800 dark:text-white">
                NM College (BScIT – 2022)
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-lg font-semibold text-gray-800 dark:text-white">
                Accenture (Dec 2022 – July 2023)
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-lg font-semibold text-gray-800 dark:text-white">
                Venus Vacations (Jul 2024 – Present)
              </div>
            </div>
          </div>

          {/* Side Illustration / Badge */}
          <div className="hidden md:block">
            <img
              src="/your-illustration.svg" // replace with your own illustration
              alt="Illustration"
              className="w-72 md:w-80 h-auto object-cover mx-auto"
            />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            Tech Stack
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 justify-center">
            <div className="flex flex-col items-center text-blue-500">
              <FaHtml5 className="text-5xl hover:text-blue-600 transition duration-200" />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                HTML
              </span>
            </div>
            <div className="flex flex-col items-center text-blue-400">
              <FaCss3Alt className="text-5xl hover:text-blue-500 transition duration-200" />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                CSS
              </span>
            </div>
            <div className="flex flex-col items-center text-teal-500">
              <FaReact className="text-5xl hover:text-teal-600 transition duration-200" />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                React
              </span>
            </div>
            <div className="flex flex-col items-center text-green-500">
              <FaNodeJs className="text-5xl hover:text-green-600 transition duration-200" />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Node.js
              </span>
            </div>
            <div className="flex flex-col items-center text-purple-500">
              <SiTailwindcss className="text-5xl hover:text-purple-600 transition duration-200" />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                TailwindCSS
              </span>
            </div>
            <div className="flex flex-col items-center text-red-500">
              <SiMysql className="text-5xl hover:text-red-600 transition duration-200" />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                MySQL
              </span>
            </div>
            <div className="flex flex-col items-center text-green-600">
              <SiMongodb className="text-5xl hover:text-green-700 transition duration-200" />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                MongoDB
              </span>
            </div>
            <div className="flex flex-col items-center text-gray-700">
              <SiNextdotjs className="text-5xl hover:text-gray-800 transition duration-200" />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Next.js
              </span>
            </div>
            <div className="flex flex-col items-center text-blue-600">
              <FaGithub className="text-5xl hover:text-blue-700 transition duration-200" />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                GitHub
              </span>
            </div>
            <div className="flex flex-col items-center text-blue-400">
              <FaPython className="text-5xl hover:text-blue-500 transition duration-200" />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Python
              </span>
            </div>
            <div className="flex flex-col items-center text-blue-600">
              <SiDocker className="text-5xl hover:text-blue-700 transition duration-200" />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Docker
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
