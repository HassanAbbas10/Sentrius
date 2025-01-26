import React, { useState } from 'react';
import { 
  Edit2, 
  MapPin, 
  MailIcon,
  GitBranchIcon
} from 'lucide-react';
import { IconBrandLinkedin } from '@tabler/icons-react';



export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview');

  const userProfile = {
    name: "Alex Rodriguez",
    email: "alex.rodriguez@tech.com",
    bio: "Innovative software engineer with a passion for solving complex problems through elegant code solutions.",
    location: "Seattle, WA",
    position: "Lead Software Architect",
    skills: ["React", "Python", "AI/ML", "Cloud Architecture", "DevOps"],
    projects: [
      { name: "Neural Network Optimizer", tech: "TensorFlow, Python" },
      { name: "Distributed Caching System", tech: "Go, Redis" }
    ]
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-4xl overflow-hidden">
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 h-40 flex items-center justify-between p-6">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img 
                src="/api/placeholder/200/200" 
                alt="Profile" 
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                <Edit2 className="text-white w-4 h-4" />
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-3xl font-bold">{userProfile.name}</h1>
              <p className="text-blue-100">{userProfile.position}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-200">
              <GitBranchIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-blue-200">
              <IconBrandLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="p-6">
          <div className="flex border-b mb-6">
            {['overview', 'skills', 'projects'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 capitalize ${
                  activeTab === tab 
                    ? 'border-b-2 border-blue-500 text-blue-600' 
                    : 'text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MailIcon className="text-gray-500 w-5 h-5" />
                <span>{userProfile.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-gray-500 w-5 h-5" />
                <span>{userProfile.location}</span>
              </div>
              <p className="text-gray-700">{userProfile.bio}</p>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid grid-cols-2 gap-4">
              {userProfile.skills.map(skill => (
                <div 
                  key={skill} 
                  className="bg-blue-50 rounded-lg px-4 py-2 text-blue-600 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-4">
              {userProfile.projects.map(project => (
                <div 
                  key={project.name} 
                  className="bg-gray-50 rounded-lg p-4 border"
                >
                  <h3 className="font-bold text-lg">{project.name}</h3>
                  <p className="text-gray-600">Technologies: {project.tech}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}