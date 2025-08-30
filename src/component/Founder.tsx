const Founder = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet Our Founders
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The visionaries behind our company
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Founder Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            {/* Image Section */}
            <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">JS</span>
                </div>
              </div>
            </div>
            
            {/* Name Section */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                John Smith
              </h3>
              <p className="text-gray-600 mb-4">Co-Founder & CEO</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Passionate about innovation and building products that make a difference in people's lives.
              </p>
            </div>
          </div>

          {/* Founder Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            {/* Image Section */}
            <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">AD</span>
                </div>
              </div>
            </div>
            
            {/* Name Section */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Alice Davis
              </h3>
              <p className="text-gray-600 mb-4">Co-Founder & CTO</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Technology enthusiast with a vision for creating scalable solutions and exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
