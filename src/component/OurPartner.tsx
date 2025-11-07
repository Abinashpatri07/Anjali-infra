// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// const OurPartner = () => {
//   // Partner data with actual logo image links

//   const [partners, setPartners] = useState<Array<FileItem>>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(3);


// useEffect(() => {
//     const fetchUploadedImages = async () => {
//       try {
//         const response = await fetch('https://anjaliinfraservice.onrender.com/api/admin/company-images');
//         if (response.ok) {
//           const result = await response.json();
//           if (result.data && result.data.files) {
//             setPartners(result.data.files);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching uploaded images:', error);
//       }
//     };
  
//     fetchUploadedImages();
//     }, []);



//   // Auto-scroll functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex >= partners.length - itemsPerView ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [partners.length, itemsPerView]);

//   // Responsive items per view
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setItemsPerView(1);
//       } else if (window.innerWidth < 768) {
//         setItemsPerView(2);
//       } else {
//         setItemsPerView(3); // only 3 logos available
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex >= partners.length - itemsPerView ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex <= 0 ? partners.length - itemsPerView : prevIndex - 1
//     );
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   // Helper function to highlight the center item
//   const isInCenter = (partnerIndex: number) => {
//     const visibleStart = currentIndex;
//     const visibleEnd = currentIndex + itemsPerView - 1;
//     if (partnerIndex >= visibleStart && partnerIndex <= visibleEnd) {
//       const positionInView = partnerIndex - visibleStart;
//       if (itemsPerView % 2 === 1) {
//         return positionInView === Math.floor(itemsPerView / 2);
//       } else {
//         const leftCenter = Math.floor(itemsPerView / 2) - 1;
//         const rightCenter = Math.floor(itemsPerView / 2);
//         return positionInView === leftCenter || positionInView === rightCenter;
//       }
//     }
//     return false;
//   };

//   return (
//     <section className="py-16 bg-gray-50 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"></div>
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Our Trusted Partners
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We collaborate with industry leaders to deliver exceptional
//             solutions and drive innovation together
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full shadow-lg"></div>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
//                        bg-white/90 backdrop-blur-sm shadow-lg shadow-blue-200/40 
//                        rounded-full p-3 hover:bg-blue-50 hover:shadow-blue-300/60 
//                        transition-all duration-200 hover:scale-110"
//             aria-label="Previous partners"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-600" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
//                        bg-white/90 backdrop-blur-sm shadow-lg shadow-blue-200/40 
//                        rounded-full p-3 hover:bg-blue-50 hover:shadow-blue-300/60 
//                        transition-all duration-200 hover:scale-110"
//             aria-label="Next partners"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-600" />
//           </button>

//           {/* Carousel Track */}
//           <div className="overflow-hidden mx-12">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
//               }}
//             >
//               {partners.map((partner, index) => (
//                 <div
//                   key={partner.id}
//                   className="flex-shrink-0 px-4"
//                   style={{ width: `${100 / itemsPerView}%` }}
//                 >
//                   <div
//                     className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg 
//                                 transition-all duration-500 p-8 h-32 flex items-center 
//                                 justify-center group border border-blue-100 
//                                 hover:border-blue-300 hover:bg-blue-50/50 ${
//                                   isInCenter(index)
//                                     ? "scale-110 shadow-2xl shadow-blue-400/40 bg-white border-blue-300 ring-2 ring-blue-200/50"
//                                     : "shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/60 hover:scale-105"
//                                 }`}
//                   >
//                     <img
//                       src={partner.url}
//                       alt={`${partner.filename} logo`}
//                       className={`max-w-full object-contain transition-all duration-500 ${
//                       isInCenter(index)
//                         ? "max-h-20 drop-shadow-lg"
//                         : "max-h-16"
//                     }`}

//                       onError={(e) => {
//                         const event = e.target as HTMLImageElement;
//                         event.src = `data:image/svg+xml;base64,${btoa(`
//                           <svg width="120" height="60" xmlns="http://www.w3.org/2000/svg">
//                             <rect width="120" height="60" fill="#f3f4f6" stroke="#d1d5db" stroke-width="1"/>
//                             <text x="60" y="35" font-family="Arial" font-size="12" text-anchor="middle" fill="#6b7280">${partner.filename}</text>
//                           </svg>
//                         `)}`;
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Dots Indicator */}
//           <div className="flex justify-center mt-8 space-x-2">
//             {Array.from({
//               length: Math.max(1, partners.length - itemsPerView + 1),
//             }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-200 ${
//                   index === currentIndex
//                     ? "bg-blue-600 scale-125"
//                     : "bg-gray-300 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurPartner;

import { useState, useEffect } from "react";

const OurPartner = () => {
  const [partners, setPartners] = useState<Array<FileItem>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Fetch uploaded company logos
  useEffect(() => {
    const fetchUploadedImages = async () => {
      try {
        const response = await fetch(
          "https://anjaliinfraservice.onrender.com/api/admin/company-images"
        );
        if (response.ok) {
          const result = await response.json();
          if (result.data && result.data.files) {
            setPartners(result.data.files);
          }
        }
      } catch (error) {
        console.error("Error fetching uploaded images:", error);
      }
    };
    fetchUploadedImages();
  }, []);

  // Auto-scroll every 3s
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
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isInCenter = (index: number) => {
    const visibleStart = currentIndex;
    const visibleEnd = currentIndex + itemsPerView - 1;
    if (index >= visibleStart && index <= visibleEnd) {
      const mid = visibleStart + Math.floor(itemsPerView / 2);
      return index === mid;
    }
    return false;
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* ✨ Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-50px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-blue-400/30 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-50px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-purple-400/30 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🏷️ Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Trusted Partners
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Collaborating with industry leaders to achieve innovation, growth,
            and excellence together.
          </p>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 🌟 Carousel */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-[1200ms] ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
            }}
          >
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                style={{ width: `${100 / itemsPerView}%` }}
                className="flex-shrink-0 px-6"
              >
                <div
                  className={`group relative flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur-md shadow-md border border-gray-200 transition-all duration-700 hover:shadow-xl hover:scale-[1.04] ${
                    isInCenter(index)
                      ? "scale-110 shadow-2xl border-blue-300 ring-2 ring-blue-200/50"
                      : ""
                  }`}
                  style={{
                    height: "140px",
                  }}
                >
                  {/* Partner Logo */}
                  <img
                    src={partner.url}
                    alt={partner.filename}
                    className={`object-contain max-h-20 transition-all duration-700 ${
                      isInCenter(index)
                        ? "opacity-100 drop-shadow-xl scale-105"
                        : "opacity-80 scale-95"
                    }`}
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="120" height="60" xmlns="http://www.w3.org/2000/svg">
                          <rect width="120" height="60" fill="#f3f4f6" stroke="#d1d5db" stroke-width="1"/>
                          <text x="60" y="35" font-family="Arial" font-size="12" text-anchor="middle" fill="#6b7280">${partner.filename}</text>
                        </svg>
                      `)}`;
                    }}
                  />

                  {/* Glow Effect */}
                  {isInCenter(index) && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-2xl"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none"></div>
        </div>

        {/* 🔵 Dots Indicator */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({
            length: Math.max(1, partners.length - itemsPerView + 1),
          }).map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartner;

