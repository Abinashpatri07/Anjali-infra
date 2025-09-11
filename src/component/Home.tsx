// import React, { useState, useEffect } from "react";
// import Founder from "./Founder";
// import OurPartner from "./OurPartner";
// import {img, img2, img3} from "../assets/Image"

// const Home: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPlaying] = useState(true);
//   const [activePopup, setActivePopup] = useState<number | null>(null);



//   const slides = [
//     { src: img  },
//     { src: img2 },
//     { src: img3 },
//   ];

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isPlaying, slides.length]);


//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   // Service data with detailed information
//   const services = [
//     {
//       id: 1,
//       title: "Telecom Tower",
//       subtitle: "ERECTION & INSTALLATION",
//       icon: (
//         <svg
//           className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
//           />
//         </svg>
//       ),
//       colorTheme: {
//         gradient: "from-blue-100 to-cyan-100",
//         hoverGradient: "group-hover:from-blue-200 group-hover:to-cyan-200",
//         textColor: "text-blue-600",
//         hoverTextColor: "group-hover:text-blue-700",
//         buttonGradient: "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
//         buttonBorder: "border-blue-300 hover:border-blue-400",
//         buttonText: "text-white",
//         popupGradient: "from-blue-500 to-cyan-500",
//         featureColor: "bg-blue-500",
//       },
//       about:
//         "Professional telecom tower erection services with precision engineering and safety compliance. We handle complete installation from foundation to commissioning, ensuring reliable communication infrastructure that meets industry standards and regulatory requirements.",
//       features: [
//         "Foundation Design & Installation",
//         "Tower Structure Assembly & Erection",
//         "Equipment Mounting & Configuration",
//         "Cable Management & Routing",
//         "Testing & Commissioning",
//         "Safety Compliance & Certification",
//         "Maintenance & Support Services",
//         "Emergency Repair Response",
//       ],
//     },
//     {
//       id: 2,
//       title: "33kV Substation",
//       subtitle: "MAINTENANCE & OPERATIONS",
//       icon: (
//         <svg
//           className="w-8 h-8 text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M13 10V3L4 14h7v7l9-11h-7z"
//           />
//         </svg>
//       ),
//       colorTheme: {
//         gradient: "from-yellow-100 to-orange-100",
//         hoverGradient: "group-hover:from-yellow-200 group-hover:to-orange-200",
//         textColor: "text-yellow-600",
//         hoverTextColor: "group-hover:text-yellow-700",
//         buttonGradient: "from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600",
//         buttonBorder: "border-yellow-300 hover:border-yellow-400",
//         buttonText: "text-white",
//         popupGradient: "from-yellow-500 to-orange-500",
//         featureColor: "bg-yellow-500",
//       },
//       about:
//         "Comprehensive electrical substation maintenance and operational services ensuring reliable power distribution with maximum uptime and safety standards. Our expert team provides 24/7 monitoring, preventive maintenance, and emergency response services.",
//       features: [
//         "Preventive Maintenance Programs",
//         "Equipment Inspection & Testing",
//         "Emergency Repair Services",
//         "System Upgrades & Modernization",
//         "Protection System Calibration",
//         "Oil Analysis & Transformer Care",
//         "Switchgear Maintenance",
//         "SCADA System Integration",
//       ],
//     },
//     {
//       id: 3,
//       title: "Road Construction",
//       subtitle: "DEVELOPMENT & INFRASTRUCTURE",
//       icon: (
//         <svg
//           className="w-8 h-8 text-green-600 group-hover:text-green-700 transition-colors duration-300"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//           />
//         </svg>
//       ),
//       colorTheme: {
//         gradient: "from-green-100 to-emerald-100",
//         hoverGradient: "group-hover:from-green-200 group-hover:to-emerald-200",
//         textColor: "text-green-600",
//         hoverTextColor: "group-hover:text-green-700",
//         buttonGradient: "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
//         buttonBorder: "border-green-300 hover:border-green-400",
//         buttonText: "text-white",
//         popupGradient: "from-green-500 to-emerald-500",
//         featureColor: "bg-green-500",
//       },
//       about:
//         "Complete road construction and infrastructure development services from planning to execution, delivering durable and sustainable transportation networks. We specialize in highways, urban roads, and complete infrastructure solutions.",
//       features: [
//         "Highway Construction & Development",
//         "Urban Road Infrastructure",
//         "Drainage & Water Management Systems",
//         "Pavement Design & Construction",
//         "Traffic Management Solutions",
//         "Quality Assurance & Testing",
//         "Environmental Impact Management",
//         "Project Management & Supervision",
//       ],
//     },
//   ];

//   const openPopup = (serviceId: number) => {
//     setActivePopup(serviceId);
//   };

//   const closePopup = () => {
//     setActivePopup(null);
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section
//         id="home"
//         className="relative flex flex-col bg-gray-50 mt-3"
//       >
//         {/* Left Side - Full Screen Width Image Carousel */}
//         <div className="w-full mt-10">
//           <div className="relative bg-white shadow-xl p-6 border border-gray-200">
//             <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg group">
//               {/* Slider Container */}
//               <div className="relative w-full h-full">
//                 {slides.map((slide, index) => (
//                   <div
//                     key={index}
//                     className={`absolute inset-0 transition-opacity duration-1000 ${
//                       index === currentSlide ? "opacity-100" : "opacity-0"
//                     }`}
//                   >
//                     <img
//                       src={slide.src}
//                       // alt={slide.alt}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* Navigation Arrows */}
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               >
//                 &#8249;
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               >
//                 &#8250;
//               </button>

//               {/* Image overlay with project info */}
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                 <p className="text-white text-sm font-medium">
//                   {/* {slides[currentSlide].alt} */}
//                 </p>
//               </div>
//             </div>

//             {/* Dots indicators */}
//             {/* <div className="flex justify-center space-x-2 mt-4">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentSlide
//                       ? "bg-blue-500 scale-110"
//                       : "bg-gray-300 hover:bg-gray-400"
//                   }`}
//                 />
//               ))}
//             </div> */}
//           </div>
//         </div>

//         {/* Right Side - Company Information (Now Below) */}
//         <div className=" mx-auto px-5 py-20 max-w-7xl">
//           <div className="text-gray-800">
//             <div className="space-y-6">
//               {/* Main Heading */}
//               <div className="text-center">
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
//                     ANJALI <span className="text-gray-800">INFRA</span>
//                   </span>
//                   <br />
                 
//                 </h1>
//                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
//               </div>

//               {/* About Section */}
//               <div className="space-y-4">
//                 <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
//                   Anjali Infra stands as a beacon of excellence in the
//                   construction and infrastructure development industry. With
//                   years of experience and unwavering commitment to quality, we
//                   transform visions into reality through innovative
//                   engineering solutions and sustainable construction
//                   practices.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Service Detail Popups */}
//         {activePopup && (
//           <div
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             onClick={closePopup}
//           >
//             <div
//               className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {services.map((service) =>
//                 service.id === activePopup ? (
//                   <div key={service.id} className="p-8">
//                     {/* Popup Header */}
//                     <div className="flex items-center justify-between mb-6">
//                       <div className="flex items-center space-x-4">
//                         <div
//                           className={`w-12 h-12 bg-gradient-to-br ${service.colorTheme.gradient} rounded-xl flex items-center justify-center`}
//                         >
//                           {service.icon}
//                         </div>
//                         <div>
//                           <h3 className="text-2xl font-bold text-gray-800">
//                             {service.title}
//                           </h3>
//                           <p
//                             className={`${service.colorTheme.textColor} text-sm font-semibold uppercase tracking-wider`}
//                           >
//                             {service.subtitle}
//                           </p>
//                         </div>
//                       </div>
//                       <button
//                         onClick={closePopup}
//                         className="text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors duration-200"
//                       >
//                         ×
//                       </button>
//                     </div>

//                     {/* About Section */}
//                     <div className="mb-8">
//                       <h4
//                         className={`text-lg font-semibold ${service.colorTheme.textColor} mb-4`}
//                       >
//                         About This Service
//                       </h4>
//                       <p className="text-gray-700 leading-relaxed text-base">
//                         {service.about}
//                       </p>
//                     </div>

//                     {/* Features Section */}
//                     <div className="mb-8">
//                       <h4
//                         className={`text-lg font-semibold ${service.colorTheme.textColor} mb-4`}
//                       >
//                         Key Features & Services
//                       </h4>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                         {service.features.map((feature, index) => (
//                           <div
//                             key={index}
//                             className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
//                           >
//                             <span
//                               className={`w-2 h-2 ${service.colorTheme.featureColor} rounded-full flex-shrink-0`}
//                             ></span>
//                             <span className="text-gray-700 text-sm">
//                               {feature}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : null
//               )}
//             </div>
//           </div>
//         )}
//       </section>

//       {/* Services Section - Separate Section */}
//       <section
//         id="services"
//         className="py-20 bg-gray-50 relative overflow-hidden"
//       >

//         <div className=" mx-auto px-5 max-w-7xl relative z-10 pb-12 -mt-14">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//               Our{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
//                 Services
//               </span>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
//             <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
//               We specialize in delivering comprehensive infrastructure solutions
//               across multiple domains, ensuring excellence in every project we
//               undertake.
//             </p>
//           </div>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
//             {/* Service 1 - Telecom Tower */}
//             <div className="group">
//               <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-105">
//                 {/* Service Icon */}
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
//                   <svg
//                     className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
//                     />
//                   </svg>
//                 </div>

//                 {/* Service Content */}
//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
//                       Telecom Tower
//                     </h3>
//                     <p className="text-cyan-600 text-sm font-semibold uppercase tracking-wider">
//                       ERECTION & INSTALLATION
//                     </p>
//                   </div>

//                   <button
//                     onClick={() => openPopup(1)}
//                     className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg"
//                   >
//                     Learn More →
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Service 2 - 33kv Substation */}
//             <div className="group">
//               <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-105">
//                 {/* Service Icon */}
//                 <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-yellow-200 group-hover:to-orange-200 transition-all duration-300">
//                   <svg
//                     className="w-8 h-8 text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 10V3L4 14h7v7l9-11h-7z"
//                     />
//                   </svg>
//                 </div>

//                 {/* Service Content */}
//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-800 group-hover:text-yellow-700 transition-colors duration-300">
//                       33kV Substation
//                     </h3>
//                     <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider">
//                       MAINTENANCE & OPERATIONS
//                     </p>
//                   </div>

//                   <button
//                     onClick={() => openPopup(2)}
//                     className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg"
//                   >
//                     Learn More →
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Service 3 - Road Construction */}
//             <div className="group">
//               <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-105">
//                 {/* Service Icon */}
//                 <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
//                   <svg
//                     className="w-8 h-8 text-green-600 group-hover:text-green-700 transition-colors duration-300"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//                     />
//                   </svg>
//                 </div>

//                 {/* Service Content */}
//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
//                       Road Construction
//                     </h3>
//                     <p className="text-green-600 text-sm font-semibold uppercase tracking-wider">
//                       DEVELOPMENT & INFRASTRUCTURE
//                     </p>
//                   </div>

//                   <button
//                     onClick={() => openPopup(3)}
//                     className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg"
//                   >
//                     Learn More →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Placeholder sections for Founder and Partners */}
//          <Founder />
//          <OurPartner />
//       </section>
//     </>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import Founder from "./Founder";
import OurPartner from "./OurPartner";
import {img, img2, img3} from "../assets/Image"

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying] = useState(true);
  const [activePopup, setActivePopup] = useState<number | null>(null);



  const slides = [
    { src: img  },
    { src: img2 },
    { src: img3 },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Service data with detailed information
  const services = [
    {
      id: 1,
      title: "Telecom Tower",
      subtitle: "ERECTION & INSTALLATION",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      ),
      colorTheme: {
        gradient: "from-blue-100 to-cyan-100",
        hoverGradient: "group-hover:from-blue-200 group-hover:to-cyan-200",
        textColor: "text-blue-600",
        hoverTextColor: "group-hover:text-blue-700",
        buttonGradient: "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
        buttonBorder: "border-blue-300 hover:border-blue-400",
        buttonText: "text-white",
        popupGradient: "from-blue-500 to-cyan-500",
        featureColor: "bg-blue-500",
      },
      about:
        "Professional telecom tower erection services with precision engineering and safety compliance. We handle complete installation from foundation to commissioning, ensuring reliable communication infrastructure that meets industry standards and regulatory requirements.",
      features: [
        "Foundation Design & Installation",
        "Tower Structure Assembly & Erection",
        "Equipment Mounting & Configuration",
        "Cable Management & Routing",
        "Testing & Commissioning",
        "Safety Compliance & Certification",
        "Maintenance & Support Services",
        "Emergency Repair Response",
      ],
    },
    {
      id: 2,
      title: "33kV Substation",
      subtitle: "MAINTENANCE & OPERATIONS",
      icon: (
        <svg
          className="w-8 h-8 text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      colorTheme: {
        gradient: "from-yellow-100 to-orange-100",
        hoverGradient: "group-hover:from-yellow-200 group-hover:to-orange-200",
        textColor: "text-yellow-600",
        hoverTextColor: "group-hover:text-yellow-700",
        buttonGradient: "from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600",
        buttonBorder: "border-yellow-300 hover:border-yellow-400",
        buttonText: "text-white",
        popupGradient: "from-yellow-500 to-orange-500",
        featureColor: "bg-yellow-500",
      },
      about:
        "Comprehensive electrical substation maintenance and operational services ensuring reliable power distribution with maximum uptime and safety standards. Our expert team provides 24/7 monitoring, preventive maintenance, and emergency response services.",
      features: [
        "Preventive Maintenance Programs",
        "Equipment Inspection & Testing",
        "Emergency Repair Services",
        "System Upgrades & Modernization",
        "Protection System Calibration",
        "Oil Analysis & Transformer Care",
        "Switchgear Maintenance",
        "SCADA System Integration",
      ],
    },
    {
      id: 3,
      title: "Road Construction",
      subtitle: "DEVELOPMENT & INFRASTRUCTURE",
      icon: (
        <svg
          className="w-8 h-8 text-green-600 group-hover:text-green-700 transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      colorTheme: {
        gradient: "from-green-100 to-emerald-100",
        hoverGradient: "group-hover:from-green-200 group-hover:to-emerald-200",
        textColor: "text-green-600",
        hoverTextColor: "group-hover:text-green-700",
        buttonGradient: "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
        buttonBorder: "border-green-300 hover:border-green-400",
        buttonText: "text-white",
        popupGradient: "from-green-500 to-emerald-500",
        featureColor: "bg-green-500",
      },
      about:
        "Complete road construction and infrastructure development services from planning to execution, delivering durable and sustainable transportation networks. We specialize in highways, urban roads, and complete infrastructure solutions.",
      features: [
        "Highway Construction & Development",
        "Urban Road Infrastructure",
        "Drainage & Water Management Systems",
        "Pavement Design & Construction",
        "Traffic Management Solutions",
        "Quality Assurance & Testing",
        "Environmental Impact Management",
        "Project Management & Supervision",
      ],
    },
  ];

  const openPopup = (serviceId: number) => {
    setActivePopup(serviceId);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col bg-gray-50 mt-3"
      >
        {/* Left Side - Full Screen Width Image Carousel */}
        <div className="w-full mt-10">
          <div className="relative bg-white shadow-xl p-3 md:p-6 border border-gray-200">
            <div className="relative h-60 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg group">
              {/* Slider Container */}
              <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={slide.src}
                      // alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                &#8249;
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                &#8250;
              </button>

              {/* Image overlay with project info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">
                  {/* {slides[currentSlide].alt} */}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="mx-auto px-5 py-10 md:py-20 max-w-7xl">
          <div className="text-gray-800">
            <div className="space-y-4 md:space-y-6">
              {/* Main Heading */}
              <div className="text-center ">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    ANJALI <span className="text-gray-800">INFRA</span>
                  </span>
                  <br />
                 
                </h1>
               <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4 md:mb-6"></div>
              </div>

              {/* About Section */}
              <div className="space-y-4">
                <p className="text-gray-700 text-sm md:text-lg leading-relaxed max-w-xl mx-auto">
                  Anjali Infra stands as a beacon of excellence in the
                  construction and infrastructure development industry. With
                  years of experience and unwavering commitment to quality, we
                  transform visions into reality through innovative
                  engineering solutions and sustainable construction
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Detail Popups */}
        {activePopup && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closePopup}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {services.map((service) =>
                service.id === activePopup ? (
                  <div key={service.id} className="p-8">
                    {/* Popup Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${service.colorTheme.gradient} rounded-xl flex items-center justify-center`}
                        >
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">
                            {service.title}
                          </h3>
                          <p
                            className={`${service.colorTheme.textColor} text-sm font-semibold uppercase tracking-wider`}
                          >
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={closePopup}
                        className="text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors duration-200"
                      >
                        ×
                      </button>
                    </div>

                    {/* About Section */}
                    <div className="mb-8">
                      <h4
                        className={`text-lg font-semibold ${service.colorTheme.textColor} mb-4`}
                      >
                        About This Service
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-base">
                        {service.about}
                      </p>
                    </div>

                    {/* Features Section */}
                    <div className="mb-8">
                      <h4
                        className={`text-lg font-semibold ${service.colorTheme.textColor} mb-4`}
                      >
                        Key Features & Services
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                          >
                            <span
                              className={`w-2 h-2 ${service.colorTheme.featureColor} rounded-full flex-shrink-0`}
                            ></span>
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}
      </section>

      {/* Services Section - Separate Section */}
      <section
        id="services"
        className="py-10 md:py-20 bg-gray-50 relative overflow-hidden"
      >

        <div className="mx-auto px-3 md:px-5 max-w-7xl relative z-10 pb-12 -mt-12">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Services
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
              We specialize in delivering comprehensive infrastructure solutions
              across multiple domains, ensuring excellence in every project we
              undertake.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
            {/* Service 1 - Telecom Tower */}
            <div className="group">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-105">
                {/* Service Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    />
                  </svg>
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                      Telecom Tower
                    </h3>
                    <p className="text-cyan-600 text-xs md:text-sm font-semibold uppercase tracking-wider">
                      ERECTION & INSTALLATION
                    </p>
                  </div>

                  <button
                    onClick={() => openPopup(1)}
                    className="w-full mt-4 md:mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            {/* Service 2 - 33kv Substation */}
            <div className="group">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-105">
                {/* Service Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:from-yellow-200 group-hover:to-orange-200 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-yellow-700 transition-colors duration-300">
                      33kV Substation
                    </h3>
                    <p className="text-yellow-600 text-xs md:text-sm font-semibold uppercase tracking-wider">
                      MAINTENANCE & OPERATIONS
                    </p>
                  </div>

                  <button
                    onClick={() => openPopup(2)}
                    className="w-full mt-4 md:mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            {/* Service 3 - Road Construction */}
            <div className="group">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-105">
                {/* Service Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-green-600 group-hover:text-green-700 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                      Road Construction
                    </h3>
                    <p className="text-green-600 text-xs md:text-sm font-semibold uppercase tracking-wider">
                      DEVELOPMENT & INFRASTRUCTURE
                    </p>
                  </div>

                  <button
                    onClick={() => openPopup(3)}
                    className="w-full mt-4 md:mt-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder sections for Founder and Partners */}
         <Founder />
         <OurPartner />
      </section>
    </>
  );
};

export default Home;