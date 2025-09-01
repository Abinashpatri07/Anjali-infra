import { useState } from 'react';
import { ChevronDown, ChevronUp, Building2, Zap, Radio } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      company: "RELIANCE JIO",
      icon: <Radio className="w-8 h-8" />,
      mainService: "Telecommunications Infrastructure",
      services: [
        "Tower Erection and civil structures"
      ],
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100/50"
    },
    {
      id: 2,
      company: "APEPDCL",
      icon: <Zap className="w-8 h-8" />,
      mainService: "Power Distribution & Infrastructure",
      services: [
        "Construction and maintenance of civil structures",
        "Erection and maintenance of 11 kv & 33 kv lines and network Equipment"
      ],
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100/50"
    },
    {
      id: 3,
      company: "IRP INFRA - AP (BSNL)",
      icon: <Building2 className="w-8 h-8" />,
      mainService: "BSNL USOF 4G Infrastructure",
      services: [
        "Electrical and Fencing work for BSNL USOF 4G"
      ],
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100/50"
    }
  ];

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        border: "border-blue-500",
        text: "text-blue-600",
        bg: "bg-blue-500",
        shadow: "shadow-blue-200/50 hover:shadow-blue-400/60"
      },
      emerald: {
        border: "border-emerald-500",
        text: "text-emerald-600",
        bg: "bg-emerald-500",
        shadow: "shadow-emerald-200/50 hover:shadow-emerald-400/60"
      },
      purple: {
        border: "border-purple-500",
        text: "text-purple-600",
        bg: "bg-purple-500",
        shadow: "shadow-purple-200/50 hover:shadow-purple-400/60"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-12 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="relative mb-8">
            <h1 className="text-7xl md:text-[10rem] lg:text-[12rem] font-black text-gray-100 leading-none tracking-tighter select-none">
              PROJECTS
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-[0.3em]">
                OUR PROJECTS
              </h2>
            </div>
          </div>

          {/* Subtitle */}
          <div className="space-y-3">
            <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wider">
              INFRASTRUCTURE EXCELLENCE ACROSS
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium tracking-wide">
              Telecommunications • Power • Civil Engineering
            </p>
          </div>

          {/* Decorative elements */}
          <div className="mt-8 flex items-center justify-center space-x-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="flex space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.id;
            const colorClasses = getColorClasses(project.color);
            
            return (
              <div
                key={project.id}
                className={`relative overflow-hidden bg-white border-2 ${colorClasses.border} rounded-2xl shadow-xl ${colorClasses.shadow} transition-all duration-500 hover:scale-[1.02] group`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'slideInLeft 0.8s ease-out forwards',
                  opacity: 0
                }}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-30`}></div>
                
                <div className="relative p-6">
                  {/* Project Header */}
                  <div 
                    className="cursor-pointer flex items-center justify-between"
                    onClick={() => toggleProject(project.id)}
                  >
                    <div className="flex items-center space-x-6">
                      {/* Icon */}
                      <div className={`p-4 bg-gradient-to-br ${project.gradient} text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {project.icon}
                      </div>
                      
                      {/* Company Info */}
                      <div className="text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide mb-1">
                          {project.company}
                        </h3>
                        <p className={`text-lg md:text-xl ${colorClasses.text} font-medium tracking-wider`}>
                          {project.mainService}
                        </p>
                      </div>
                    </div>

                    {/* Expand Button */}
                    <div className={`p-3 ${colorClasses.bg} text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg`}>
                      {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </div>

                  {/* Project Number */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <span className="text-6xl font-black text-gray-900 select-none">
                      0{project.id}
                    </span>
                  </div>

                  {/* Expanded Content */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 tracking-wide">
                        PROJECT SCOPE & SERVICES
                      </h4>
                      
                      <div className="space-y-3">
                        {project.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-start space-x-3 group/item">
                            <div className={`w-2 h-2 ${colorClasses.bg} rounded-full mt-3 group-hover/item:scale-125 transition-transform duration-200`}></div>
                            <div className="flex-1">
                              <p className="text-lg text-gray-700 leading-relaxed tracking-wide group-hover/item:text-gray-900 transition-colors duration-200">
                                {service}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Additional Info */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-3 h-3 ${colorClasses.bg} rounded-full animate-pulse`}></div>
                            <p className="text-sm font-medium text-gray-600 tracking-wider uppercase">
                              Active Project
                            </p>
                          </div>
                          <div className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-full shadow-lg`}>
                            Infrastructure Specialist
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wider mb-6">
            PROVEN EXCELLENCE
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl font-bold text-blue-600">3</div>
              <p className="text-lg text-gray-600 tracking-wider">MAJOR CLIENTS</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600">∞</div>
              <p className="text-lg text-gray-600 tracking-wider">STRUCTURES BUILT</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl font-bold text-purple-600">100%</div>
              <p className="text-lg text-gray-600 tracking-wider">SUCCESS RATE</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;