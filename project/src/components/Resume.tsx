import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Resume</h2>
          <p className="mt-4 text-xl text-gray-600">
            My professional journey and achievements
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          {/* Experience */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900">Experience</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-900">Chief Executive Officer at Catalyst, Mar Baselios IEDC</h4>
                <p className="text-gray-600">Professional Society • 2025 - Present</p>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  <li>Supervises the planning and execution of workshops, talks, fests, and competitions.</li>
                  <li>Delegates roles and ensures accountability.</li>
                  <li>Sets the vision and goals for the year.</li>
                </ul>
            </div>
          
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-900">Marketing Co-Lead at Catalyst, Mar Baselios IEDC</h4>
                <p className="text-gray-600">Professional Society • 2023 - 2025</p>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  <li>Helped deliver necessary content and write-ups for social media posts </li>
                  <li>Contributed to the team's flagship event, comprising of 100+ participants</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-900">Co-Lead of Creative Wing at CSI SB MBCET</h4>
                <p className="text-gray-600">Professional Society • 2024 - 2025</p>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  <li>Co-ordinated the team to create unique works for the societie's social media handles</li>
                  <li>Collaborated with the other sectors with the scoiety to successfully execute both online and offline events</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900">B.Tech in Computer Science and Engineering</h4>
              <p className="text-gray-600">Mar Baselios College of Engineering and Technology • 2023-27</p>
              <p className="mt-2 text-gray-600">
                Focused on software engineering and web development
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900">Skills</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
               <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Coding</h4>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>Python</li>
                    <li>Java</li>
                    <li>C and C++</li>
                  </ul>
                </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Frontend</h4>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Backend</h4>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>FastAPI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
