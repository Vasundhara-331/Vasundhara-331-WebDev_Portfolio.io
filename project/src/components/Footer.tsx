import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:your.email@example.com" className="flex items-center hover:text-gray-300">
                  <Mail className="w-5 h-5 mr-2" />
                  abc@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com" className="flex items-center hover:text-gray-300">
                  <Github className="w-5 h-5 mr-2" />
                  Github
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="flex items-center hover:text-gray-300">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
              <li><a href="#resume" className="hover:text-gray-300">Resume</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-400">
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;