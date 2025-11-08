import { founder1, founder2 } from "../assets/Image";

const Founder = () => {
  return (
    <section className="relative bg-gray-50 py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* 🌈 Background Decorative Blurs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* 🏷️ Section Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Meet Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Founders
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
      </div>

      {/* 🔹 Layout */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Section — Founders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full lg:w-1/2 place-items-center relative z-20">
          {[
            {
              name: "Niranjan Mishra",
              title: "Founder",
              image: founder1,
              color: "from-blue-500 to-cyan-500",
            },
            {
              name: "Soumya Ranjan Mishra",
              title: "Co-Founder",
              image: founder2,
              color: "from-indigo-500 to-purple-500",
            },
          ].map((founder, i) => (
            <div
              key={i}
              className="relative group flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1"
            >
              {/* Hexagon Image Wrapper */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 hex-shape overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-105 bg-white flex items-center justify-center p-3">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="object-contain w-full h-full"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${founder.color} opacity-0 group-hover:opacity-25 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Name + Title */}
              <h3 className="mt-4 text-lg font-bold text-slate-800">
                {founder.name}
              </h3>
              <p className="text-sm font-semibold text-blue-600 mb-2">
                {founder.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right Section — Curved Blue Background */}
        <div className="relative w-full lg:w-1/2 text-center lg:text-left overflow-visible">
          {/* Curved Shape (Moved behind images with z-index fix) */}
          <div className="absolute top-0 right-0 w-[130%] h-full bg-gradient-to-br from-[#1e3a8a] to-[#06b6d4] rounded-l-[6rem] shadow-xl z-0"></div>

          {/* Text Content */}
          <div className="relative z-10 text-white px-6 sm:px-8 md:px-12 py-10 lg:py-20">
            {/* <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              ABOUT
            </h2> */}
            <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-6">
              At Anjali Infra, creativity meets precision. Our founders bring
              innovation, experience, and leadership that shape every vision
              into architectural reality. Together, they drive excellence
              through collaboration, innovation, and a commitment to quality.
            </p>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed">
              With a team that values trust, transparency, and technology, we
              continue building infrastructure that inspires, empowers, and
              endures.
            </p>
          </div>
        </div>
      </div>

      {/* 🧩 Custom CSS for Hexagon */}
      <style>{`
        .hex-shape {
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
        }
      `}</style>
    </section>
  );
};

export default Founder;
