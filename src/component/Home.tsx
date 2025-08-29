import React, { useState, useEffect } from 'react';
import { img } from '../assets/Image';

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of images for the carousel (replace with your actual image paths)
  const carouselImages = [
    '/my-app/src/assets/12307.jpg',
    '/my-app/src/assets/51099.jpg',
    '/my-app/src/assets/5202.jpg',
    '/my-app/src/assets/2210.i518.041.S.m005.c13.communication towers illustration.jpg'
  ];

  // Auto-scroll functionality for images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("back1")'
      }}
    >
      <div className="container mx-auto px-5 py-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image Carousel Frame */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                {carouselImages.map((_image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Image overlay with project info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">
                    Project {currentImageIndex + 1}
                  </p>
                </div>
              </div>
              
              {/* Carousel indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-blue-400 scale-110' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Company Information */}
          <div className="order-1 lg:order-2 text-white">
            <div className="space-y-6">
              
              {/* Main Heading */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    ANJALI
                  </span>
                  <br />
                  <span className="text-white">
                    INFRA
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mt-4"></div>
              </div>

              {/* About Section */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400">
                  About Anjali Infra
                </h2>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-xl">
                  Anjali Infra stands as a beacon of excellence in the construction and infrastructure development industry. With years of experience and unwavering commitment to quality, we transform visions into reality through innovative engineering solutions and sustainable construction practices.
                </p>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-xl">
                  Our expertise spans across residential, commercial, and industrial projects, delivering world-class infrastructure that meets the highest standards of safety, durability, and aesthetic appeal.
                </p>
              </div>

              {/* Owner Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  Leadership
                </h3>
                <p className="text-white text-lg font-medium">
                  <span className="text-cyan-300">Abinash Patri</span>
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Founder & Owner
                </p>
                <p className="text-gray-200 text-sm mt-3 leading-relaxed">
                  Leading with vision and expertise, driving innovation in every project we undertake.
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
    </section>
  );
};

export default Home;