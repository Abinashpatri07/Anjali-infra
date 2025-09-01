import { useState } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import {gallery1, gallery2, gallery3} from "../assets/Image";

interface ImageType {
  src: string;
  title: string;
  index?: number;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  // Sample images - replace with your actual work images
  const images = [
    {
      src: gallery1,
      title: "Modern Architecture"
    },
    {
      src: gallery2,
      title: "Urban Design"
    },
    {
      src: gallery3,
      title: "Creative Space"
    },
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=900&fit=crop",
      title: "Digital Art"
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      title: "Visual Experience"
    },
    {
      src: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop",
      title: "Brand Design"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      title: "Tech Innovation"
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=1100&fit=crop",
      title: "Code Craft"
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=900&fit=crop",
      title: "Interface Design"
    }
  ];

  const openModal = (image: ImageType, index: number) => {
    setSelectedImage({ ...image, index });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: string) => {
    if (!selectedImage || selectedImage.index === undefined) return;
    
    const currentIndex = selectedImage.index;
    let newIndex: number;
    
    if (direction === 'next') {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage({ ...images[newIndex], index: newIndex });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
  {/* Main Title */}
  <div className="relative mb-2"> {/* reduced mb-5 → mb-2 */}
    <h1 className="text-7xl md:text-[10rem] lg:text-[12rem] font-black text-gray-100 leading-none tracking-tighter select-none">
      WORK
    </h1>
    <div className="absolute inset-0 flex items-center justify-center">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-[0.2em]">
        SERVICE
      </h2>
    </div>
  </div>

  {/* Subtitle */}
  <div className="space-y-2"> {/* reduced space-y-4 → space-y-2 */}
    <p className="text-lg md:text-xl text-gray-600 font-light tracking-wider">
      A CURATED COLLECTION OF
    </p>
    <p className="text-xl md:text-2xl text-gray-900 font-medium tracking-wide">
      Creative Excellence
    </p>
  </div>

  {/* Decorative elements */}
  <div className="mt-6 flex items-center justify-center space-x-6"> {/* reduced mt-12 → mt-6, space-x-8 → space-x-6 */}
    <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300"></div>
    <div className="w-2 h-2 bg-gray-900 transform rotate-45"></div>
    <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300"></div>
  </div>
</div>

      </div>

      {/* Gallery Grid */}
      <div className="px-6 py-16 -mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className={`group cursor-pointer relative`}
                onClick={() => openModal(image, index)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInScale 0.8s ease-out forwards',
                  opacity: 0
                }}
              >
                <div className="relative aspect-square overflow-hidden bg-gray-50 shadow-lg shadow-blue-200/50 group-hover:shadow-2xl group-hover:shadow-blue-400/60 transition-all duration-500">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                      <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                        <p className="text-gray-900 font-medium tracking-wide text-sm">
                          VIEW PROJECT
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-gray-900 text-lg font-semibold tracking-wide mb-1">
                      {image.title}
                    </h3>
                    <div className="w-8 h-px bg-gray-900"></div>
                  </div>

                  {/* Border effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 transition-all duration-500"></div>
                </div>

                {/* Number indicator */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 shadow-lg shadow-blue-500/50">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-20 px-6 text-center border-t border-gray-200 -mt-5">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wider mb-4">
            CRAFTED WITH PASSION
          </h3>
          <p className="text-lg text-gray-600 tracking-wide">
            Every piece tells a story of dedication and creative vision
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-8 right-8 z-10 p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:rotate-90"
          >
            <X size={20} />
          </button>

          {/* Navigation */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-8 z-10 p-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110"
          >
            <ArrowLeft size={24} />
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-8 z-10 p-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110"
          >
            <ArrowRight size={24} />
          </button>

          {/* Image container */}
          <div className="relative max-w-[85vw] max-h-[85vh] mx-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-900 text-2xl font-semibold tracking-wide mb-1">
                    {selectedImage.title}
                  </h3>
                  <div className="w-12 h-px bg-gray-900"></div>
                </div>
                <p className="text-gray-600 font-medium tracking-wider">
                  {String((selectedImage.index || 0) + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;