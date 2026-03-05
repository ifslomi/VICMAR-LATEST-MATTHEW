import React from "react";

export default function MissionPhilosophySection() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <div className="mb-8">
          <h2 className="text-[#166534] text-sm font-semibold uppercase tracking-wider mb-3">
            ABOUT US
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#166534] mb-4 leading-tight">
            Weaving Filipino Values into Modern Communities
          </h3>
          <p className="text-gray-600 max-w-3xl text-base leading-relaxed">
            Vicmar Homes is committed to building sustainable communities where tradition meets modern living. We design and construct homes that reflect Filipino values of family, community, and environmental stewardship.
          </p>
        </div>

        {/* Mission and Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mission Section */}
          <div id="mission" className="bg-[#166534] rounded-lg p-6 md:p-8 text-white scroll-mt-24">
            <h4 className="text-2xl font-bold mb-4">OUR MISSION</h4>
            <p className="leading-relaxed text-gray-100 text-sm md:text-base">
              To design and build sustainable communities that empower families to flourish with dignity, comfort, and pride. We create homes and neighborhoods where Filipino values of bayanihan and community spirit thrive, while preserving environmental resources for generations to come.
            </p>
          </div>

          {/* Philosophy Section */}
          <div id="philosophy" className="bg-[#22c55e] rounded-lg p-6 md:p-8 text-white scroll-mt-24">
            <h4 className="text-2xl font-bold mb-4">OUR PHILOSOPHY</h4>
            <p className="leading-relaxed text-gray-50 text-sm md:text-base">
              We believe that homes are more than structures—they are spaces where memories are made and futures are built. Our philosophy centers on sustainable living, affordable quality, and fostering communities that strengthen the Filipino family. Every Vicmar home is designed with purpose, built with integrity, and meant to improve lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
