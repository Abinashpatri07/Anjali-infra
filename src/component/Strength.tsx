import React from "react";
import { Users, HardHat, Settings, Calculator, Building } from "lucide-react";

const Strength: React.FC = () => {
  const managementTeam = [
    {
      names: ["N. Mishra", "S.R Mishra", "Rashmita Mishra"],
      role: "Founders & Partners",
      icon: Users,
      color: "from-blue-600 to-purple-600",
      description: "Leading the vision and strategic direction"
    },
    {
      names: ["V Veerababu"],
      role: "Head of Engineering",
      icon: Settings,
      color: "from-emerald-600 to-teal-600",
      description: "Overseeing all engineering operations"
    },
    {
      names: ["Sai Prasad", "K Ramesh Babu", "P Anil Kumar"],
      role: "Project Engineers",
      icon: HardHat,
      color: "from-orange-600 to-red-600",
      description: "Managing and executing complex projects"
    },
    {
      names: ["Ganesh"],
      role: "Civil Engineer",
      icon: Building,
      color: "from-indigo-600 to-blue-600",
      description: "Structural design and civil engineering expertise"
    },
    {
      names: ["D. Chandu"],
      role: "Accountant",
      icon: Calculator,
      color: "from-green-600 to-emerald-600",
      description: "Financial management and accounting"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              OUR MANAGEMENT TEAM
            </h1>
            <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
          </div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Meet the dedicated professionals who drive our success through expertise, innovation, and leadership excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementTeam.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-slate-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${member.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <IconComponent className="text-2xl text-white" />
                  </div>

                  {/* Role */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {member.role}
                  </h3>

                  {/* Names */}
                  <div className="space-y-2 mb-4">
                    {member.names.map((name, nameIndex) => (
                      <div
                        key={nameIndex}
                        className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-slate-700 font-medium group-hover:text-slate-800">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                    {member.description}
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`h-1 bg-gradient-to-r ${member.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "8+", label: "Team Members", color: "text-blue-600" },
            { number: "5+", label: "Specializations", color: "text-purple-600" },
            { number: "100%", label: "Dedication", color: "text-emerald-600" },
            { number: "24/7", label: "Support", color: "text-orange-600" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Strength;