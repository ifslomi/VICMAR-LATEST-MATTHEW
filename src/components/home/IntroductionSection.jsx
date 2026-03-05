import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

export default function IntroductionSection() {
  return (
    <section className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[#166534] text-sm font-semibold uppercase tracking-wider mb-4">
            Introduction to Vicmar Homes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Heading and Button */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#166534] mb-8 leading-tight">
                Crafting Philippine Communities with Heart and Heritage
              </h3>
              <Link
                to={createPageUrl("AboutUs")}
                className="inline-block bg-[#166534] hover:bg-[#145a34] text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm"
              >
                LEARN MORE ABOUT US
              </Link>
            </div>

            {/* Right Column - Description */}
            <div className="text-gray-700 space-y-4">
              <p>
                Vicmar Homes, the trusted residential arm of the Vicmar Group, brings over decades of expertise as a purpose-driven real estate developer in the Philippines. Rooted in the spirit of bayanihan and proudly Filipino hospitality, we design and build well-crafted, sustainable homes within thriving communities—where Vicmar values take root and families flourish with dignity, comfort, and pride.
              </p>
              <p>
                In every home built, Vicmar Homes weaves tradition, connection, and purpose into each neighborhood—nurturing generations, empowering lives, and unlocking the full potential of Filipino communities today and for years to come.
              </p>
            </div>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large image - top left, spans 2 rows */}
          <div className="md:row-span-2">
            <img
              src="/src/images/properties/Interior/compound_img1.png"
              alt="Family enjoying community"
              className="w-full h-full object-cover rounded-lg"
              style={{ minHeight: "300px" }}
            />
          </div>

          {/* Top right images */}
          <img
            src="/src/images/properties/Interior/duplex_img1.png"
            alt="Vicmar building exterior"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/src/images/properties/Interior/compound_img2.png"
            alt="Vicmar lifestyle"
            className="w-full h-[200px] object-cover rounded-lg"
          />

          {/* Bottom images */}
          <img
            src="/src/images/properties/Interior/socialized_img1.png"
            alt="Community view"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/src/images/properties/Interior/duplex_img2.png"
            alt="Architectural design"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
