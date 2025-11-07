import { useState } from "react";
import { Building2, Zap, Radio } from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      company: "RELIANCE JIO",
      icon: <Radio className="w-8 h-8" />,
      mainService: "Telecommunications Infrastructure",
      services: ["Tower Erection and civil structures"],
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100/50",
    },
    {
      id: 2,
      company: "APEPDCL",
      icon: <Zap className="w-8 h-8" />,
      mainService: "Power Distribution & Infrastructure",
      services: [
        "Construction and maintenance of civil structures",
        "Erection and maintenance of 11 kv & 33 kv lines and network Equipment",
      ],
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100/50",
    },
    {
      id: 3,
      company: "IRP INFRA - AP (BSNL)",
      icon: <Building2 className="w-8 h-8" />,
      mainService: "BSNL USOF 4G Infrastructure",
      services: ["Electrical and Fencing work for BSNL USOF 4G"],
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100/50",
    },
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
        shadow: "shadow-xl shadow-blue-200/50 hover:shadow-blue-400/60",
      },
      emerald: {
        border: "border-emerald-500",
        text: "text-emerald-600",
        bg: "bg-emerald-500",
        shadow: "shadow-xl shadow-emerald-200/50 hover:shadow-emerald-400/60",
      },
      purple: {
        border: "border-purple-500",
        text: "text-purple-600",
        bg: "bg-purple-500",
        shadow: "shadow-xl shadow-purple-200/50 hover:shadow-purple-400/60",
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO */}
      <div className="relative py-12 px-4 sm:px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-8">
            <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-black text-gray-100 leading-none tracking-tighter select-none">
              PROJECTS
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-[0.2em] sm:tracking-[0.3em] px-4">
                OUR PROJECTS
              </h2>
            </div>
          </div>

          <div className="space-y-3 px-4">
            <p className="text-base sm:text-xl md:text-2xl text-gray-600 font-light tracking-wider">
              INFRASTRUCTURE EXCELLENCE ACROSS
            </p>
            <p className="text-lg sm:text-2xl md:text-3xl text-gray-900 font-medium tracking-wide">
              Telecommunications • Power • Civil Engineering
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="flex space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            </div>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* PROJECT CARDS */}
      <div className="px-4 sm:px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-10">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.id;
            const colorClasses = getColorClasses(project.color);

            return (
              <div
                key={project.id}
                className={`
                  relative overflow-visible bg-white border-2 ${colorClasses.border} rounded-2xl 
                  ${colorClasses.shadow} transition-all duration-500 hover:scale-[1.02] group 
                  opacity-0 animate-slideInLeft
                `}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* BG Pattern */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-30 rounded-2xl`}
                ></div>

                <div className="relative p-4 sm:p-6">
                  {/* HEADER */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center space-x-3 sm:space-x-6 flex-1 min-w-0">
                      <div
                        className={`p-3 sm:p-4 bg-gradient-to-br ${project.gradient} text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                      >
                        {project.icon}
                      </div>

                      <div className="text-left min-w-0 flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-wide mb-1 break-words">
                          {project.company}
                        </h3>
                        <p
                          className={`${colorClasses.text} text-sm sm:text-lg md:text-xl font-medium tracking-wider break-words`}
                        >
                          {project.mainService}
                        </p>
                      </div>
                    </div>

                    {/* TOGGLE BUTTON */}
                    <button
                      onClick={() => toggleProject(project.id)}
                      className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center 
                        bg-gradient-to-br ${project.gradient} text-white shadow-lg transition-all duration-500
                        hover:scale-110 active:scale-95 z-20
                        ${isExpanded ? "rotate-180" : "rotate-0"}`}
                      aria-label={isExpanded ? "Collapse details" : "Expand details"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* PROJECT NUMBER */}
                  <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-0 pointer-events-none">
                    <div
                      className={`text-6xl sm:text-7xl md:text-[5rem] font-extrabold text-gray-900/10 
                        group-hover:text-gray-900/20 transition-all duration-500 select-none`}
                    >
                      0{project.id}
                    </div>
                  </div>

                  {/* EXPANDED CONTENT */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isExpanded ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 tracking-wide">
                        PROJECT SCOPE & SERVICES
                      </h4>

                      <div className="space-y-3">
                        {project.services.map((service, serviceIndex) => (
                          <div
                            key={serviceIndex}
                            className="flex items-start space-x-3 group/item"
                          >
                            <div
                              className={`w-2 h-2 ${colorClasses.bg} rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}
                            ></div>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed tracking-wide group-hover/item:text-gray-900 transition-colors duration-200">
                              {service}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-3 h-3 ${colorClasses.bg} rounded-full animate-pulse`}
                            ></div>
                            <p className="text-xs sm:text-sm font-medium text-gray-600 tracking-wider uppercase">
                              Active Project
                            </p>
                          </div>
                          <div
                            className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${project.gradient} text-white text-xs sm:text-sm font-medium rounded-full shadow-lg`}
                          >
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

      {/* FOOTER STATS */}
      <div className="py-12 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 tracking-wider mb-6">
            PROVEN EXCELLENCE
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-10">
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl font-bold text-blue-600">3</div>
              <p className="text-base sm:text-lg text-gray-600 tracking-wider">MAJOR CLIENTS</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600">∞</div>
              <p className="text-base sm:text-lg text-gray-600 tracking-wider">STRUCTURES BUILT</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl font-bold text-purple-600">100%</div>
              <p className="text-base sm:text-lg text-gray-600 tracking-wider">SUCCESS RATE</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Projects;