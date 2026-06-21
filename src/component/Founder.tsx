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
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 py-8">
        
        {/* Curved Blue Background (Stretches to viewport edges to remove empty space) */}
        {/* Desktop swoop spans from 35% of the container all the way past the right edge */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-[35%] right-[-50vw] bg-gradient-to-br from-[#1e3a8a] to-[#06b6d4] rounded-l-[6rem] shadow-2xl z-0"></div>
        {/* Mobile swoop spans the entire width of the screen */}
        <div className="block lg:hidden absolute top-[35%] bottom-0 left-[-50vw] right-[-50vw] bg-gradient-to-br from-[#1e3a8a] to-[#06b6d4] rounded-t-[4rem] shadow-2xl z-0"></div>

        {/* Left Section — Founders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full lg:w-1/2 place-items-center relative z-10">
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
              className="relative group flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2"
            >
              {/* Circle Drop Shadow */}
              <div className="absolute top-0 w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-black/15 blur-xl translate-y-3 -z-10 group-hover:translate-y-5 transition-transform duration-500"></div>

              {/* Circle Image Wrapper */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-white flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-105 border-4 border-white/50 shadow-lg">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="object-cover object-top w-full h-full"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${founder.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Name + Title (Wrapped in a card for readability over the blue swoop) */}
              <div className="mt-5 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-xl shadow-sm border border-white/50 transition-all duration-500 group-hover:shadow-md">
                <h3 className="text-lg font-bold text-slate-800">
                  {founder.name}
                </h3>
                <p className="text-sm font-semibold text-blue-600">
                  {founder.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section — Text Content */}
        <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left px-8 sm:px-12 md:px-16 py-16 lg:py-20 lg:pl-12 lg:pr-0">
          <p className="text-white text-base md:text-lg leading-relaxed mb-6 font-medium tracking-wide">
            At Anjali Infra, creativity meets precision. Our founders bring
            innovation, experience, and leadership that shape every vision
            into architectural reality. Together, they drive excellence
            through collaboration, innovation, and a commitment to quality.
          </p>
          <p className="text-blue-100 text-base md:text-lg leading-relaxed font-medium tracking-wide">
            With a team that values trust, transparency, and technology, we
            continue building infrastructure that inspires, empowers, and
            endures.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Founder;
