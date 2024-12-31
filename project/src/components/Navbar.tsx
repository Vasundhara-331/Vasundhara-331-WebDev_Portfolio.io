import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-800">Portfolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
              <a href="#resume" className="text-gray-700 hover:text-gray-900">Resume</a>
              <div className="flex space-x-4">
                <a href="https://github.com/Vasundhara-331" className="text-gray-500 hover:text-gray-700">
                  <Github className="w-5 h-5" />
                </a>
                <a href="www.linkedin.com/in/vasundhara-s-r" className="text-gray-500 hover:text-gray-700">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:your.email@example.com" className="text-gray-500 hover:text-gray-700">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Projects</a>
            <a href="#resume" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Resume</a>
            <div className="flex space-x-4 px-3 py-2">
              <a href = "https://github.com/Vasundhara-331" className="text-gray-500 hover:text-gray-700">
                <Github className="w-5 h-5" />
              </a>
              <a href="www.linkedin.com/in/vasundhara-s-r" className="text-gray-500 hover:text-gray-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-500 hover:text-gray-700">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;