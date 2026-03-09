import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Button } from "@/components/ui/button";
import {
  Trees, Dumbbell, ShieldCheck, Waves,
  Users, Church,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const amenities = [
  { icon: ShieldCheck, title: "24/7 Security",    description: "Guards and CCTV monitoring around the clock." },
  { icon: Trees,       title: "Parks & Greenery", description: "Landscaped open spaces for relaxation." },
  { icon: Dumbbell,    title: "Fitness Area",     description: "Outdoor stations for an active lifestyle." },
  { icon: Waves,       title: "Swimming Pool",    description: "Community pool for leisure and exercise." },
  { icon: Users,       title: "Clubhouse",        description: "Venue for community events and gatherings." },
  { icon: Church,      title: "Chapel",           description: "Community chapel for spiritual gatherings." },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&q=80",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&q=80",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=500&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80",
];

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

export default function Amenities() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <style>{`
        .scroll-reveal-init {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .scroll-reveal-init.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .amenity-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .amenity-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(22,101,52,0.10);
        }
      `}</style>

      {/* Hero */}
      <div
        id="community-amenities"
        className="relative py-28 px-4 scroll-mt-24"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#166534]/85" />
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-[#86efac] text-xs font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Community Amenities</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Everything you need for a comfortable, safe, and connected community life.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {amenities.map((amenity, idx) => {
            const Icon = amenity.icon;
            return (
              <Reveal key={idx} delay={idx * 60}>
                <div className="amenity-card bg-white rounded-xl p-5 shadow-sm border border-gray-100 group h-full text-center">
                  <div className="w-10 h-10 bg-[#22c55e]/10 group-hover:bg-[#22c55e]/20 rounded-lg flex items-center justify-center mx-auto mb-3 transition-colors">
                    <Icon className="w-5 h-5 text-[#22c55e]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#166534] mb-1">{amenity.title}</h3>
                  <p className="text-gray-500 text-xs leading-snug">{amenity.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Live the Vicmar Lifestyle */}
        <div id="vicmar-lifestyle" className="mt-20 scroll-mt-24">
          <Reveal>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div
                  className="h-64 lg:h-auto min-h-[280px]"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-[#22c55e] text-xs font-semibold uppercase tracking-widest mb-3">Our Community</p>
                  <h2 className="text-2xl font-bold text-[#166534] mb-6">Live the Vicmar Lifestyle</h2>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      "Family-oriented community",
                      "Safe and secure environment",
                      "Well-maintained facilities",
                      "Active homeowner association",
                    ].map((item, i) => (
                      <span key={i} className="bg-[#22c55e]/10 text-[#166534] text-xs font-medium px-3 py-1.5 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link to={createPageUrl("Listings")}>
                    <Button className="bg-[#22c55e] hover:bg-[#16a34a] w-fit rounded-full px-6">
                      Explore Our Properties
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Community Gallery */}
        <div id="community-gallery" className="mt-20 scroll-mt-24">
          <Reveal>
            <h2 className="text-2xl font-bold text-[#166534] mb-8 text-center">Community Gallery</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <Reveal key={idx} delay={idx * 70}>
                <div className="relative h-48 rounded-xl overflow-hidden group cursor-pointer">
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
