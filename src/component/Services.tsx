// import React, { type JSX } from "react";

// interface ServiceType {
//   id: number;
//   title: string;
//   subtitle: string;
//   icon: JSX.Element;
//   colorTheme: {
//     gradient: string;
//     hoverGradient: string;
//     textColor: string;
//     featureColor: string;
//   };
//   about: string;
//   features: string[];
// }

// interface ServicesProps {
//   services: ServiceType[];
//   openPopup: (id: number) => void;
// }

// const Services: React.FC<ServicesProps> = ({ services, openPopup }) => {
//   return (
//     <section
//       id="services"
//       className="py-8 md:py-20 bg-gray-50 border-t border-gray-200 w-full overflow-hidden"
//     >
//       <div className="max-w-[95rem] mx-auto px-2 sm:px-4 md:px-6 relative z-10 pb-8 md:pb-12">
//         {/* Section Heading */}
//         <div className="text-center mb-8 md:mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
//             Our{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
//               Services
//             </span>
//           </h2>
//           <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4 md:mb-6"></div>
//           <p className="text-slate-700 md:text-slate-800 text-base md:text-lg lg:text-xl font-medium max-w-4xl mx-auto leading-relaxed tracking-wide px-2 drop-shadow-sm">
//             We specialize in delivering comprehensive infrastructure solutions
//             across multiple domains, ensuring excellence in every project we
//             undertake.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 xl:gap-14">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="group bg-white rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-[1.03]"
//             >
//               <div
//                 className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.colorTheme.gradient} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-5 transition-all duration-300 group-hover:scale-110`}
//               >
//                 {service.icon}
//               </div>

//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 break-words">
//                 {service.title}
//               </h3>

//               <p
//                 className={`${service.colorTheme.textColor} text-xs md:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4`}
//               >
//                 {service.subtitle}
//               </p>

//               <button
//                 onClick={() => openPopup(service.id)}
//                 className="w-full mt-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base active:scale-95"
//               >
//                 Learn More →
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React, { type JSX } from "react";

interface ServiceType {
  id: number;
  title: string;
  subtitle: string;
  icon: JSX.Element;
  colorTheme: {
    gradient: string;
    hoverGradient: string;
    textColor: string;
    featureColor: string;
  };
  about: string;
  features: string[];
}

interface ServicesProps {
  services: ServiceType[];
  openPopup: (id: number) => void;
}

const Services: React.FC<ServicesProps> = ({ services, openPopup }) => {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-white py-10 md:py-16"
    >
      {/* Curved Blue Background */}
      <div className="absolute inset-0 -top-10 md:-top-20 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#gradient)"
            d="M0,160L80,165.3C160,171,320,181,480,197.3C640,213,800,235,960,240C1120,245,1280,235,1360,229.3L1440,224V0H0Z"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start lg:items-center justify-between w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        {/* Left Side (Curved Blue Area Content) */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-white drop-shadow-[0_3px_5px_rgba(0,0,0,0.3)]">OUR</span> <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 drop-shadow-sm">SERVICES</span>
          </h1>
          <p className="text-slate-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Discover our range of services crafted to shape infrastructure excellence
            and innovation.
          </p>
        </div>

        {/* Right Side (Service Info) */}
        <div className="md:w-1/2 text-slate-900">
          <p className="text-base lg:text-lg font-medium leading-relaxed max-w-lg mb-6 text-white md:text-slate-900 lg:-translate-y-4">
            Our dedicated team specializes in delivering modern, high-quality
            infrastructure and digital design solutions. From planning to
            execution, we ensure seamless results tailored to your goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-5 lg:p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 group ${
                  service.id === 3 ? "sm:translate-x-[calc(50%+0.5rem)] lg:translate-x-[calc(50%+0.75rem)]" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-gradient-to-br ${service.colorTheme.gradient} text-white rounded-xl mb-3 lg:mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed mb-3">
                  {service.about}
                </p>
                <button
                  onClick={() => openPopup(service.id)}
                  className="text-xs lg:text-sm font-medium text-blue-600 hover:text-cyan-600 transition-all duration-300"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


