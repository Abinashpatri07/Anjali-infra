import React, { useState, useEffect } from "react";
import Founder from "./Founder";
import OurPartner from "./OurPartner";
import Services from "./Services";
import { triel1, triel2, triel3 } from "../assets/Image";

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePopup, setActivePopup] = useState<number | null>(null);

  const slides = [triel1, triel2, triel3];

  // 🎠 Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // 📋 Service Data
  const services = [
    {
      id: 1,
      title: "Telecom Tower",
      subtitle: "ERECTION & INSTALLATION",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
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
        featureColor: "bg-blue-500",
      },
      about:
        "Professional telecom tower erection services with precision engineering and safety compliance.",
      features: ["Foundation Design", "Tower Assembly", "Commissioning"],
    },
    {
      id: 2,
      title: "33kV Substation",
      subtitle: "MAINTENANCE & OPERATIONS",
      icon: (
        <svg
          className="w-8 h-8 text-yellow-600"
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
        featureColor: "bg-yellow-500",
      },
      about:
        "Comprehensive substation maintenance ensuring reliable power distribution.",
      features: ["Maintenance", "Inspection", "Emergency Response"],
    },
    {
      id: 3,
      title: "Road Construction",
      subtitle: "DEVELOPMENT & INFRASTRUCTURE",
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
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
        featureColor: "bg-green-500",
      },
      about:
        "Complete road construction and infrastructure development services.",
      features: ["Highway Development", "Urban Roads", "Quality Testing"],
    },
  ];

  const openPopup = (id: number) => setActivePopup(id);
  const closePopup = () => setActivePopup(null);

  return (
    <div className="overflow-x-hidden w-full">
      {/* 🌅 HERO SECTION */}
      <section
        id="home"
        className="
    relative flex flex-col overflow-hidden w-full 
    h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen
  "
      >
        {/* Image Slider */}
        <div className="absolute inset-0 w-full overflow-hidden">
          {slides.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={`
          w-full 
          h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen 
          transition-transform duration-[6000ms] ease-out
          ${
            currentSlide === index
              ? "md:scale-110 scale-100" // ✅ Zoom only from md screen upward
              : "scale-100"
          } 
          object-contain sm:object-cover
        `}
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>

        {/* Text (Different for each slide) */}
        <div className="absolute left-4 right-4 bottom-20 sm:bottom-28 md:bottom-36 lg:bottom-44 z-20">
          {[
            {
              title: "Building Dreams, Shaping Skylines",
              desc: "Excellence in every foundation we lay.",
            },
            {
              title: "Engineering the Future",
              desc: "Where precision meets innovation and trust.",
            },
            {
              title: "Constructing with Integrity",
              desc: "Delivering sustainable infrastructure with passion.",
            },
          ].map((text, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out ${
                currentSlide === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20 pointer-events-none"
              } absolute`}
            >
              <h2 className="text-white text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-2xl mb-2 leading-snug max-w-3xl text-left">
                {text.title}
              </h2>
              <p className="text-gray-100 text-xs sm:text-sm md:text-base lg:text-lg max-w-xl leading-relaxed drop-shadow-lg text-left font-light">
                {text.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 ${
                currentSlide === i
                  ? "w-6 sm:w-8 h-2.5 sm:h-3 bg-white rounded-full"
                  : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50 hover:bg-white/80 rounded-full"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* 🏗 Company Info */}
      {/* <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-24 text-center bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              ANJALI <span className="text-gray-800">INFRA</span>
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
       <p className="text-slate-800 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl mx-auto tracking-wide px-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
  Anjali Infra stands as a beacon of excellence in the construction
  and infrastructure development industry. With years of experience
  and unwavering commitment to quality, we transform visions into
  reality through innovative engineering solutions and sustainable
  construction practices.
</p>


        </div>
      </div> */}
      <div className="relative w-full bg-white py-14 md:py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Decorative Gradient Backgrounds */}
        <div className="absolute top-10 left-0 w-64 h-64 bg-gradient-to-br from-blue-100 via-cyan-100 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-cyan-200 via-blue-100 to-transparent rounded-full blur-3xl opacity-60"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          {/* Left Side – Text Section */}
          <div className="text-left md:w-1/2 lg:pl-8 animate-slideInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                ANJALI <span className="text-gray-800">INFRA</span>
              </span>
            </h1>

            <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 rounded-full"></div>

            <p className="text-slate-800 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-xl tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              Anjali Infra stands as a beacon of excellence in the construction
              and infrastructure development industry. With years of experience
              and unwavering commitment to quality, we transform visions into
              reality through innovative engineering solutions and sustainable
              construction practices.
            </p>
          </div>

          {/* Right Side – Animated Infrastructure Icon */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <div className="animate-floatSlow animate-slideInRight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-48 h-48 md:w-64 md:h-64 text-cyan-600 drop-shadow-[0_5px_10px_rgba(0,0,0,0.15)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M12 52h40M16 52V20l16-8 16 8v32M24 52V28h16v24" />
                <rect x="28" y="32" width="8" height="8" />
                <path d="M32 12v4M20 24h4M40 24h4" />
              </svg>
            </div>

            {/* Soft Glow Behind Icon */}
            <div className="absolute right-6 top-1/2 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* ✨ Animations */}
        <style>{`
    @keyframes slideInLeft {
      0% { opacity: 0; transform: translateX(-80px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    .animate-slideInLeft {
      animation: slideInLeft 1s ease-out forwards;
    }

    @keyframes slideInRight {
      0% { opacity: 0; transform: translateX(80px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    .animate-slideInRight {
      animation: slideInRight 1.2s ease-out forwards;
    }

    @keyframes floatSlow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-floatSlow {
      animation: floatSlow 5s ease-in-out infinite;
    }
  `}</style>
      </div>

      {/* 🧱 Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <Services services={services} openPopup={openPopup} />
      </div>

      {/* 📌 Popup Modal */}
      {activePopup && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <div
            className="bg-white rounded-2xl max-w-lg sm:max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {services.map(
              (service) =>
                service.id === activePopup && (
                  <div key={service.id} className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.colorTheme.gradient} rounded-xl flex items-center justify-center shadow-md`}
                        >
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                            {service.title}
                          </h3>
                          <p
                            className={`${service.colorTheme.textColor} text-xs sm:text-sm font-semibold uppercase tracking-wider`}
                          >
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={closePopup}
                        className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-2xl font-bold transition-all duration-200"
                        aria-label="Close popup"
                      >
                        ×
                      </button>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                      {service.about}
                    </p>

                    <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                        >
                          <span
                            className={`w-2 h-2 ${service.colorTheme.featureColor} rounded-full flex-shrink-0`}
                          ></span>
                          <span className="text-gray-700 text-xs sm:text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      )}

      {/* 🌟 Extras */}
      <Founder />
      <OurPartner />
    </div>
  );
};

export default Home;
