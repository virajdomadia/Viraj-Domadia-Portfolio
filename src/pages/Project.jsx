import React from "react";

// Sample Project Data
const projects = [
  {
    name: "Task Manager",
    tech: "React, Node.js, MongoDB",
    description:
      "A full-stack task manager app with authentication and real-time task updates.",
    screenshot: "/task-manager.png", // Replace with actual project screenshots
    demoLink: "#", // Replace with actual demo link
    githubLink: "https://github.com/yourusername/task-manager", // Replace with actual GitHub link
  },
  {
    name: "Blog App",
    tech: "React, Node.js, Express, MongoDB",
    description:
      "A blogging platform where users can create and manage their blogs.",
    screenshot: "/blog-app.png", // Replace with actual project screenshots
    demoLink: "#", // Replace with actual demo link
    githubLink: "https://github.com/yourusername/blog-app", // Replace with actual GitHub link
  },
  {
    name: "Weather Dashboard",
    tech: "React, OpenWeather API",
    description:
      "A weather dashboard that shows current weather based on user location.",
    screenshot: "/weather-dashboard.png", // Replace with actual project screenshots
    demoLink: "#", // Replace with actual demo link
    githubLink: "https://github.com/yourusername/weather-dashboard", // Replace with actual GitHub link
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-24 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-12">
          My Projects
        </h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Project Screenshot */}
              <img
                src={project.screenshot}
                alt={project.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                {/* Project Name and Tech */}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                  {project.tech}
                </p>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
