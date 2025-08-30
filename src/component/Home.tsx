import React, { useState, useEffect } from "react";
import Founder from "./Founder";
import OurPartner from "./OurPartner";
import {back1,img} from "../assets/Image"

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activePopup, setActivePopup] = useState<number | null>(null);



  const slides = [
    { src: img, alt: "Slide 1" },
    { src: img, alt: "Slide 2" },
    { src: img, alt: "Slide 3" },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
          className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
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
        gradient: "from-blue-500/20 to-cyan-500/20",
        hoverGradient:
          "group-hover:from-blue-500/30 group-hover:to-cyan-500/30",
        textColor: "text-blue-400",
        hoverTextColor: "group-hover:text-blue-300",
        buttonGradient:
          "from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30",
        buttonBorder: "border-blue-400/30 hover:border-blue-400/50",
        buttonText: "text-blue-300 hover:text-blue-200",
        popupGradient: "from-blue-500 to-cyan-500",
        featureColor: "bg-blue-400",
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
          className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"
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
        gradient: "from-yellow-500/20 to-orange-500/20",
        hoverGradient:
          "group-hover:from-yellow-500/30 group-hover:to-orange-500/30",
        textColor: "text-yellow-400",
        hoverTextColor: "group-hover:text-yellow-300",
        buttonGradient:
          "from-yellow-600/20 to-orange-600/20 hover:from-yellow-600/30 hover:to-orange-600/30",
        buttonBorder: "border-yellow-400/30 hover:border-yellow-400/50",
        buttonText: "text-yellow-300 hover:text-yellow-200",
        popupGradient: "from-yellow-500 to-orange-500",
        featureColor: "bg-yellow-400",
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
          className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors duration-300"
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
        gradient: "from-green-500/20 to-emerald-500/20",
        hoverGradient:
          "group-hover:from-green-500/30 group-hover:to-emerald-500/30",
        textColor: "text-green-400",
        hoverTextColor: "group-hover:text-green-300",
        buttonGradient:
          "from-green-600/20 to-emerald-600/20 hover:from-green-600/30 hover:to-emerald-600/30",
        buttonBorder: "border-green-400/30 hover:border-green-400/50",
        buttonText: "text-green-300 hover:text-green-200",
        popupGradient: "from-green-500 to-emerald-500",
        featureColor: "bg-green-400",
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
        className="min-h-screen relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${back1})`,
        }}
      >
        <div className="container mx-auto px-5 py-20 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image Carousel Frame */}
            <div className="order-1 lg:order-1">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg group">
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
                          alt={slide.alt}
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
                      {slides[currentSlide].alt}
                    </p>
                  </div>
                </div>

                {/* Dots indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-blue-400 scale-110"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>

                {/* Play/Pause button */}
                <div className="flex justify-center mt-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                  >
                    {isPlaying ? "⏸️" : "▶️"} {isPlaying ? "Pause" : "Play"}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Company Information */}
            <div className="order-2 lg:order-2 text-white">
              <div className="space-y-6">
                {/* Main Heading */}
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                      ANJALI
                    </span>
                    <br />
                    <span className="text-white">INFRA</span>
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mt-4"></div>
                </div>

                {/* About Section */}
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-semibold text-blue-400">
                    About Anjali Infra
                  </h2>
                  <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-xl">
                    Anjali Infra stands as a beacon of excellence in the
                    construction and infrastructure development industry. With
                    years of experience and unwavering commitment to quality, we
                    transform visions into reality through innovative
                    engineering solutions and sustainable construction
                    practices.
                  </p>
                  {/* <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-xl">
                    Our expertise spans across residential, commercial, and industrial projects, delivering world-class infrastructure that meets the highest standards of safety, durability, and aesthetic appeal.
                  </p> */}
                </div>

                {/* Owner Information */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">
                    Leadership
                  </h3>
                  <p className="text-white text-lg font-medium">
                    <span className="text-cyan-300">Abinash Patri</span>
                  </p>
                  <p className="text-gray-300 text-sm mt-1">Founder & Owner</p>
                  <p className="text-gray-200 text-sm mt-3 leading-relaxed">
                    Leading with vision and expertise, driving innovation in
                    every project we undertake.
                  </p>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    View Our Projects
                  </button>
                  <button className="border-2 border-white/30 hover:border-blue-400 text-white hover:text-blue-400 px-8 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Service Detail Popups */}
        {activePopup && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closePopup}
          >
            <div
              className="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl"
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
                          <h3 className="text-2xl font-bold text-white">
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
                        className="text-gray-400 hover:text-white text-2xl font-bold transition-colors duration-200"
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
                      <p className="text-gray-300 leading-relaxed text-base">
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
                            className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10"
                          >
                            <span
                              className={`w-2 h-2 ${service.colorTheme.featureColor} rounded-full flex-shrink-0`}
                            ></span>
                            <span className="text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        className={`flex-1 bg-gradient-to-r ${service.colorTheme.popupGradient} hover:shadow-lg text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105`}
                      >
                        Request Quote
                      </button>
                      <button className="flex-1 border border-white/30 hover:border-white/50 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                        Contact Us
                      </button>
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
        className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-5 max-w-7xl relative z-10 pb-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Services
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              We specialize in delivering comprehensive infrastructure solutions
              across multiple domains, ensuring excellence in every project we
              undertake.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Service 1 - Telecom Tower */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl">
                {/* Service Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
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
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      Telecom Tower
                    </h3>
                    <p className="text-cyan-300 text-sm font-semibold uppercase tracking-wider">
                      ERECTION & INSTALLATION
                    </p>
                  </div>

                  <button
                    onClick={() => openPopup(1)}
                    className="w-full mt-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 border border-blue-400/30 hover:border-blue-400/50 text-blue-300 hover:text-blue-200 px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            {/* Service 2 - 33kv Substation */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl">
                {/* Service Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"
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
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                      33kV Substation
                    </h3>
                    <p className="text-yellow-300 text-sm font-semibold uppercase tracking-wider">
                      MAINTENANCE & OPERATIONS
                    </p>
                  </div>

                  <button
                    onClick={() => openPopup(2)}
                    className="w-full mt-6 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 hover:from-yellow-600/30 hover:to-orange-600/30 border border-yellow-400/30 hover:border-yellow-400/50 text-yellow-300 hover:text-yellow-200 px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            {/* Service 3 - Road Construction */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl">
                {/* Service Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors duration-300"
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
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">
                      Road Construction
                    </h3>
                    <p className="text-green-300 text-sm font-semibold uppercase tracking-wider">
                      DEVELOPMENT & INFRASTRUCTURE
                    </p>
                  </div>

                  <button
                    onClick={() => openPopup(3)}
                    className="w-full mt-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 hover:from-green-600/30 hover:to-emerald-600/30 border border-green-400/30 hover:border-green-400/50 text-green-300 hover:text-green-200 px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Founder />
        <OurPartner />
      </section>
    </>
  );
};

export default Home;
