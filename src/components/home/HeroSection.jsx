import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import heroImage from "@/images/hero-properties.jpg";
import { Navigation, MapPin, ExternalLink } from "lucide-react";

const TOLLWAY_URL =
  "https://www.google.com/maps/dir/STAR+Tollway,+Batangas/Randy's+store,+P5PH%2B532,+Batangas+City,+Batangas/@13.842405,121.128617,75691m/data=!3m1!1e3!4m14!4m13!1m5!1m1!1s0x33bd6c47c81960ad:0xb202f8fcae4d8cc4!2m2!1d121.1421878!2d13.9497285!1m5!1m1!1s0x33bd197c66633f33:0xf3269378daf86148!2m2!1d121.177656!2d13.7353748!3e0?hl=en&entry=ttu";
const SM_URL =
  "https://www.google.com/maps?ll=13.750405,121.122659&z=12&t=h&hl=en&gl=PH&saddr=SM+City+Batangas,+Brgy,+M.Pastor+Ave,+Pallocan+Kanluran,+Village,+Batangas+City,+Batangas&daddr=Randy%27s+store,+P5PH%2B532,+Batangas+City,+Batangas&dirflg=d";
const TOLLWAY_EMBED =
  "https://maps.google.com/maps?saddr=STAR+Tollway,+Batangas&daddr=Randy%27s+store,+P5PH%2B532,+Batangas+City,+Batangas&dirflg=d&output=embed";
const SM_EMBED =
  "https://maps.google.com/maps?saddr=SM+City+Batangas,+Batangas+City,+Batangas&daddr=Randy%27s+store,+P5PH%2B532,+Batangas+City,+Batangas&dirflg=d&output=embed";

const routes = {
  tollway: { label: "STAR Tollway", time: "~43 min", distance: "~37.7 km", embed: TOLLWAY_EMBED, url: TOLLWAY_URL },
  sm:      { label: "SM City Batangas", time: "~25 min", distance: "~15 km",   embed: SM_EMBED,      url: SM_URL },
};

export default function HeroSection() {
  const [activeRoute, setActiveRoute] = useState("tollway");
  const route = routes[activeRoute];

  return (
    <section className="relative flex flex-col overflow-hidden" style={{ minHeight: 'calc(100vh - 134px)' }}>
      {/* Background image */}
      <img
        src={heroImage}
        alt="Vicmar Homes community"
        className="hero-img absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
      {/* Gradient: transparent top → solid green at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#15803d] via-[#15803d]/70 to-transparent" style={{ zIndex: 1 }} />

      {/* Push content to bottom */}
      <div className="flex-1" />

      {/* RIGHT: map card — absolutely pinned inside the section */}
      <div className="absolute bottom-8 right-12 z-10 hidden lg:flex flex-col flex-shrink-0 w-[380px] rounded-xl overflow-hidden shadow-2xl border border-white/20">
          {/* Card header + tabs */}
          <div className="bg-[#15803d]/90 backdrop-blur-md px-4 py-2.5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#86efac]" />
              <span className="text-white font-semibold text-xs uppercase tracking-wide">How to Get Here</span>
            </div>
            <div className="flex bg-white/10 rounded-full p-0.5">
              {Object.entries(routes).map(([key, r]) => (
                <button
                  key={key}
                  onClick={() => setActiveRoute(key)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeRoute === key
                      ? "bg-white text-[#16a34a] shadow"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
          {/* Map iframe */}
          <div className="h-[180px] overflow-hidden">
            <iframe
              key={activeRoute}
              src={route.embed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Directions from ${route.label}`}
            />
          </div>
          {/* Card footer */}
          <div className="bg-[#15803d]/90 backdrop-blur-md px-4 py-2.5 flex items-center justify-between border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Navigation className="w-3 h-3 text-[#86efac]" />
                <span className="text-white/80 text-xs font-medium">{route.time}</span>
              </div>
              <span className="text-white/30">·</span>
              <span className="text-white/60 text-xs">{route.distance}</span>
            </div>
            <a
              href={route.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#86efac] hover:text-white text-xs font-semibold transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Open in Maps
            </a>
          </div>
        </div>

      {/* Bottom content strip */}
      <div className="relative z-10 w-full px-8 md:px-16 pt-10 pb-10 flex flex-col lg:flex-row items-end gap-6">

        {/* LEFT: hero text */}
        <div className="flex-1 flex flex-col items-start min-w-0">
          <p className="hero-label text-[#86efac] text-xs font-semibold uppercase tracking-widest mb-3">
            Trusted Real Estate Developer in the Philippines
          </p>
          <h1 className="hero-title text-4xl md:text-5xl font-bold text-white leading-tight mb-1">
            Building Better Communities
          </h1>
          {/* "for Filipinos" + inline CTA button */}
          <div className="flex items-center gap-4 flex-wrap mb-3">
            <span className="text-4xl md:text-5xl font-bold text-[#86efac] leading-tight">for Filipinos</span>
            <Link
              to={createPageUrl("Listings")}
              className="hero-btn inline-flex items-center bg-white text-[#16a34a] font-bold px-6 py-2.5 rounded-sm text-sm tracking-wide uppercase shadow-md hover:bg-[#f0fdf4] transition-colors duration-200"
            >
              Inquire Now
            </Link>
          </div>
          <p className="hero-sub text-white/70 text-sm max-w-lg leading-relaxed">
            Find your dream home with Vicmar Homes — where tradition meets modern Filipino living.
          </p>
        </div>
      </div>
    </section>
  );
}