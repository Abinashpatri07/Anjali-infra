import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OurPartner = () => {
  // Sample partner data - replace with your actual partner logos
  const partners = [
    {
      id: 1,
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png"
    },
    {
      id: 2,
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png"
    },
    {
      id: 3,
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png"
    },
    {
      id: 4,
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/512px-Apple_logo_black.svg.png"
    },
    {
      id: 5,
      name: "Reliance",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Industries_Logo.svg/512px-Reliance_Industries_Logo.svg.png"
    },
    {
      id: 6,
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png"
    },
    {
      id: 7,
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/512px-Tesla_T_symbol.svg.png"
    },
    {
      id: 8,
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.svg/512px-Adobe_Corporate_Logo.svg.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= partners.length - itemsPerView ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length, itemsPerView]);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= partners.length - itemsPerView ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? partners.length - itemsPerView : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Helper function to determine if a card is in the center position(s)
  const isInCenter = (partnerIndex: number) => {
    const visibleStart = currentIndex;
    const visibleEnd = currentIndex + itemsPerView - 1;
    
    if (partnerIndex >= visibleStart && partnerIndex <= visibleEnd) {
      const positionInView = partnerIndex - visibleStart;
      // For odd number of items, center is Math.floor(itemsPerView/2)
      // For even number of items, we consider both middle positions as center
      if (itemsPerView % 2 === 1) {
        return positionInView === Math.floor(itemsPerView / 2);
      } else {
        const leftCenter = Math.floor(itemsPerView / 2) - 1;
        const rightCenter = Math.floor(itemsPerView / 2);
        return positionInView === leftCenter || positionInView === rightCenter;
      }
    }
    return false;
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver exceptional solutions and drive innovation together
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full shadow-lg"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg shadow-blue-200/40 rounded-full p-3 hover:bg-blue-50 hover:shadow-blue-300/60 transition-all duration-200 hover:scale-110"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg shadow-blue-200/40 rounded-full p-3 hover:bg-blue-50 hover:shadow-blue-300/60 transition-all duration-200 hover:scale-110"
            aria-label="Next partners"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`
              }}
            >
              {partners.map((partner, index) => (
                <div
                  key={partner.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-500 p-8 h-32 flex items-center justify-center group border border-blue-100 hover:border-blue-300 hover:bg-blue-50/50 ${
                    isInCenter(index) 
                      ? 'scale-110 shadow-2xl shadow-blue-400/40 bg-white border-blue-300 ring-2 ring-blue-200/50' 
                      : 'shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/60 hover:scale-105'
                  }`}>
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className={`max-w-full object-contain transition-all duration-500 ${
                        isInCenter(index)
                          ? 'max-h-20 filter-none drop-shadow-lg'
                          : 'max-h-16 filter grayscale group-hover:grayscale-0'
                      }`}
                      onError={(e) => {
                        const event = e.target as HTMLImageElement;
                        event.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="120" height="60" xmlns="http://www.w3.org/2000/svg">
                            <rect width="120" height="60" fill="#f3f4f6" stroke="#d1d5db" stroke-width="1"/>
                            <text x="60" y="35" font-family="Arial" font-size="12" text-anchor="middle" fill="#6b7280">${partner.name}</text>
                          </svg>
                        `)}`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.max(1, partners.length - itemsPerView + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurPartner;