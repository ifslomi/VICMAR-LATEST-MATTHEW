import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useScrollReveal({ threshold: 0.1, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`scroll-reveal-init ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export default function IntroductionSection() {
  return (
    <section className="bg-[#f0fdf4] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <Reveal>
            <p className="text-[#16a34a] text-xs font-semibold uppercase tracking-widest mb-3">
              Introduction to Vicmar Homes
            </p>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <Reveal delay={100}>
              <h3 className="text-3xl md:text-4xl font-bold text-[#16a34a] mb-8 leading-tight">
                Crafting Philippine Communities with Heart and Heritage
              </h3>
              <Link
                to={createPageUrl("AboutUs")}
                className="inline-block bg-[#16a34a] hover:bg-[#22c55e] text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm"
              >
                Learn More About Us
              </Link>
            </Reveal>
            <Reveal delay={200}>
              <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
                <p>
                  Vicmar Homes, the trusted residential arm of the Vicmar Group, brings over decades of expertise as a purpose-driven real estate developer in the Philippines. Rooted in the spirit of bayanihan and proudly Filipino hospitality, we design and build sustainable homes within thriving communities.
                </p>
                <p>
                  In every home built, Vicmar Homes weaves tradition, connection, and purpose into each neighborhood — nurturing generations and empowering Filipino families today and for years to come.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Reveal className="md:row-span-2" delay={80}>
            <img
              src="/src/images/properties/Interior/compound_img1.png"
              alt="Family enjoying community"
              className="intro-img w-full h-full object-cover rounded-xl"
              style={{ minHeight: "300px" }}
            />
          </Reveal>
          <Reveal delay={130}>
            <img src="/src/images/properties/Interior/duplex_img1.png" alt="Vicmar building exterior" className="intro-img w-full h-[200px] object-cover rounded-xl" />
          </Reveal>
          <Reveal delay={180}>
            <img src="/src/images/properties/Interior/compound_img2.png" alt="Vicmar lifestyle" className="intro-img w-full h-[200px] object-cover rounded-xl" />
          </Reveal>
          <Reveal delay={230}>
            <img src="/src/images/properties/Interior/socialized_img1.png" alt="Community view" className="intro-img w-full h-[200px] object-cover rounded-xl" />
          </Reveal>
          <Reveal delay={280}>
            <img src="/src/images/properties/Interior/duplex_img2.png" alt="Architectural design" className="intro-img w-full h-[200px] object-cover rounded-xl" />
          </Reveal>
        </div>
      </div>

      <style>{`
        .intro-img { transition: transform 0.45s ease, opacity 0.45s ease; }
        .intro-img:hover { transform: scale(1.03); }
      `}</style>
    </section>
  );
}
