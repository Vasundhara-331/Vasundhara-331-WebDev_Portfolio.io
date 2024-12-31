import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Rehabilitation Centre Management System",
      description: "A project done using FastAPI and MongoDB",
      image: "https://cbx-prod.b-cdn.net/COLOURBOX41690815.jpg?width=800&height=800&quality=70",
      github: "https://github.com/Vasundhara-331/FastAPI_Project.git",
      demo: "https://demo.com"
    },
    {
      title: "Event Management App",
      description: "An app that can effectively manage events. Done using Java, SQL for database connectivity, hosted in NetBeans",
      image: "https://funds2orgs.com/wp-content/uploads/2022/03/Volunteer-event-management.jpg",
      github: "https://github.com/Vasundhara-331/Event_Registration_System.git",
      demo: "https://demo.com"
    },
    {
      title: "Complex Calculator",
      description: "A calculator app that is capable of complex functions. Made using Python and hosted in Jupyter Notebook",
image:"https://img.utdstc.com/screen/103/6d2/1036d2dc4fa4de332ad9e56d1af39dc0effec7992f8e5216eeee2d8ea6cb5eca:600",
      github: "https://github.com/Vasundhara-331/Scientific_Calculator.git",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Projects</h2>
          <p className="mt-4 text-xl text-gray-600">
            Here are some of my recent projects
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
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

export default Projects;