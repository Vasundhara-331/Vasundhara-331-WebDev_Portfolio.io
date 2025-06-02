import React from 'react';
import { Code, Palette, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 text-xl text-gray-600">
            Hi, I am Vasundhara S R, a Computer Science and Engineering student at Mar Baselios College of Engineering and Technology, Trivandrum.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Code className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Frontend Development</h3>
              <p className="mt-2 text-gray-600 text-center">
                Crafting responsive and intuitive user interfaces using modern frameworks
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Terminal className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Backend Development</h3>
              <p className="mt-2 text-gray-600 text-center">
                Building scalable and efficient server-side applications
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Palette className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Content Writing</h3>
              <p className="mt-2 text-gray-600 text-center">
                Creating engaging write-ups and social media content
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;