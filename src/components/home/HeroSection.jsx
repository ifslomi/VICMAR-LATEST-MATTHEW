import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import heroImage from "@/images/hero-properties.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-end justify-start overflow-hidden">
      <img
        src={heroImage}
        alt="Vicmar Homes community"
        className="hero-img absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f3320]/95 via-[#166534]/55 to-transparent" style={{ zIndex: 1 }} />

      <div className="relative z-10 w-full px-8 md:px-20 pb-16 md:pb-24 flex flex-col items-start">
        <p className="hero-label text-[#86efac] text-xs font-semibold uppercase tracking-widest mb-5">
          Trusted Real Estate Developer in the Philippines
        </p>
        <h1 className="hero-title text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
          Building Better Communities
          <span className="block text-[#86efac]">for Filipinos</span>
        </h1>
        <p className="hero-sub text-white/80 text-base md:text-lg max-w-xl mb-9 leading-relaxed">
          Find your dream home with Vicmar Homes — where tradition meets modern Filipino living.
        </p>
        <div className="hero-btn flex items-center gap-4 flex-wrap">
          <Link
            to={createPageUrl("Listings")}
            className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            View Properties
          </Link>
          <Link
            to={createPageUrl("AboutUs")}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-sm border border-white/30 backdrop-blur-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}