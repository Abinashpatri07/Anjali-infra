// import React from "react";
// import { Users, HardHat, Settings, Calculator, Building } from "lucide-react";

// const Strength: React.FC = () => {
//   const managementTeam = [
//     {
//       names: ["N. Mishra", "S.R Mishra", "Rashmita Mishra"],
//       role: "Founders & Partners",
//       icon: Users,
//       color: "from-blue-600 to-purple-600",
//       description: "Leading the vision and strategic direction"
//     },
//     {
//       names: ["V Veerababu"],
//       role: "Head of Engineering",
//       icon: Settings,
//       color: "from-emerald-600 to-teal-600",
//       description: "Overseeing all engineering operations"
//     },
//     {
//       names: ["Sai Prasad", "K Ramesh Babu", "P Anil Kumar"],
//       role: "Project Engineers",
//       icon: HardHat,
//       color: "from-orange-600 to-red-600",
//       description: "Managing and executing complex projects"
//     },
//     {
//       names: ["Ganesh"],
//       role: "Civil Engineer",
//       icon: Building,
//       color: "from-indigo-600 to-blue-600",
//       description: "Structural design and civil engineering expertise"
//     },
//     {
//       names: ["D. Chandu"],
//       role: "Accountant",
//       icon: Calculator,
//       color: "from-green-600 to-emerald-600",
//       description: "Financial management and accounting"
//     }
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-block">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//               OUR MANAGEMENT TEAM
//             </h1>
//             <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
//           </div>
//           <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
//             Meet the dedicated professionals who drive our success through expertise, innovation, and leadership excellence.
//           </p>
//         </div>

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {managementTeam.map((member, index) => {
//             const IconComponent = member.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-slate-100"
//                 style={{ animationDelay: `${index * 150}ms` }}
//               >
//                 {/* Gradient Background */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
//                 {/* Card Content */}
//                 <div className="relative p-8">
//                   {/* Icon */}
//                   <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${member.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
//                     <IconComponent className="text-2xl text-white" />
//                   </div>

//                   {/* Role */}
//                   <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
//                     {member.role}
//                   </h3>

//                   {/* Names */}
//                   <div className="space-y-2 mb-4">
//                     {member.names.map((name, nameIndex) => (
//                       <div
//                         key={nameIndex}
//                         className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-all duration-300"
//                       >
//                         <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
//                         <span className="text-slate-700 font-medium group-hover:text-slate-800">
//                           {name}
//                         </span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Description */}
//                   <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
//                     {member.description}
//                   </p>

//                   {/* Decorative Corner */}
//                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 </div>

//                 {/* Bottom Accent Line */}
//                 <div className={`h-1 bg-gradient-to-r ${member.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Statistics Section */}
//         <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
//           {[
//             { number: "25+", label: "Team Members", color: "text-blue-600" },
//             { number: "5+", label: "Specializations", color: "text-purple-600" },
//             { number: "100%", label: "Dedication", color: "text-emerald-600" },
//             { number: "24/7", label: "Support", color: "text-orange-600" }
//           ].map((stat, index) => (
//             <div 
//               key={index}
//               className="text-center group cursor-pointer"
//               style={{ animationDelay: `${index * 200}ms` }}
//             >
//               <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-100">
//                 <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
//                   {stat.number}
//                 </div>
//                 <div className="text-slate-600 font-medium text-sm uppercase tracking-wider">
//                   {stat.label}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>
//       </div>
//     </section>
//   );
// };

// export default Strength;

import React from "react";
import { Users, HardHat, Settings, Calculator, Building, Award, FileText, Zap } from "lucide-react";

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

  const registrations = [
    {
      type: "GST Registration",
      number: "37ACEFA1252A1Z3",
      icon: FileText,
      color: "from-green-600 to-emerald-600"
    },
    {
      type: "ELECTRICAL 33kv License",
      number: "A/14348 /2-4555",
      icon: Zap,
      color: "from-yellow-600 to-orange-600"
    },
    {
      type: "MSME Registration",
      number: "AP-10-00091170",
      icon: Award,
      color: "from-blue-600 to-indigo-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Anjali Infra Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              ABOUT ANJALI INFRA
            </h1>
            <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100 mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                Anjali Infra stands as a pioneering force in the infrastructure development sector, committed to delivering excellence through innovative engineering solutions and sustainable construction practices.
              </p>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                Our company specializes in comprehensive infrastructure projects, ranging from electrical installations and civil engineering to complex industrial constructions, ensuring quality and reliability in every endeavor.
              </p>
              {/* <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                With a strong foundation built on expertise, integrity, and customer satisfaction, we have established ourselves as a trusted partner for businesses and organizations seeking robust infrastructure solutions.
              </p> */}
              {/* <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                Our team combines years of industry experience with cutting-edge technology to deliver projects that meet the highest standards of safety, efficiency, and environmental responsibility.
              </p> */}
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                At Anjali Infra, we believe in building not just structures, but lasting relationships with our clients, ensuring continued success and mutual growth in all our partnerships.
              </p>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                Our commitment to innovation, quality craftsmanship, and timely project delivery makes us the preferred choice for infrastructure development across diverse sectors and regions.
              </p>
            </div>
          </div>
        </div>

        {/* Management Team Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              OUR MANAGEMENT TEAM
            </h2>
            <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
          </div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Meet the dedicated professionals who drive our success through expertise, innovation, and leadership excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

        {/* Registration Information Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              THIS FIRM IS REGISTERED UNDER
            </h3>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {registrations.map((reg, index) => {
              const IconComponent = reg.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 border border-slate-100 overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${reg.color} rounded-2xl shadow-lg mb-4`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-3">
                      {reg.type}
                    </h4>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <span className="text-slate-700 font-mono text-sm font-semibold">
                        {reg.number}
                      </span>
                    </div>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${reg.color}`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "25+", label: "Team Members", color: "text-blue-600" },
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