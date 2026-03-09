import React, { useEffect } from "react";
import { Award, Users, Building, Leaf, CheckCircle, Droplets, Zap } from "lucide-react";
import MissionPhilosophySection from "@/components/about/MissionPhilosophySection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "500+", label: "Happy Families",     icon: Users },
  { value: "10+",  label: "Years Experience",   icon: Award },
  { value: "15+",  label: "Projects Completed", icon: Building },
  { value: "100%", label: "Sustainable Design", icon: Leaf },
];

const communityPillars = [
  {
    icon: Leaf,
    title: "Greenways & Food Gardens",
    body: "Parks become productive 'greenways' irrigated by gray water. Vermicompost bins turn organic waste into fertiliser for backyard herb and vegetable gardens.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    body: "Rainwater tanks irrigate gardens while porous sidewalks replenish the local water table — reducing runoff and preserving natural resources.",
  },
  {
    icon: Zap,
    title: "Energy-Efficient Design",
    body: "Natural cross-ventilation and high windows keep homes comfortable with minimal electricity — no expensive cooling systems needed.",
  },
];

const sustainableFeatures = [
  "Home garden space for food & herb production",
  "Gray water irrigation for shared greenways",
  "Rainwater tanks for garden irrigation",
  "Porous sidewalks for groundwater replenishment",
  "Natural ventilation with high windows",
  "Vertical gardens, aquaponics & more",
];

const gardenOptions = [
  { label: "Vertical Herbal Gardens", desc: "Space-saving herb production" },
  { label: "Aquaponics Tanks",        desc: "Fish & vegetable cultivation" },
  { label: "Chicken or Rabbit Cages", desc: "Backyard livestock options" },
  { label: "Vegetable Patches",       desc: "Traditional garden plots" },
];

function RevealSection({ children, className = "", delay = 0 }) {
  const ref = useScrollReveal({ threshold: 0.12, triggerOnce: true });
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

export default function AboutUs() {
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
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .scroll-reveal-init.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .stat-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(22,101,52,0.13);
        }
        .pillar-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .pillar-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(22,101,52,0.10);
        }
        .garden-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .garden-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(22,101,52,0.10);
        }
        .feature-pill {
          transition: background 0.2s ease;
        }
        .feature-pill:hover {
          background: rgba(255,255,255,0.18);
        }
      `}</style>

      {/* Hero */}
      <div
        className="relative py-28 px-4"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#166534]/85" />
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-[#86efac] text-xs font-semibold uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Vicmar Homes</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Building sustainable, affordable communities rooted in Filipino values — in Batangas City.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-16 relative z-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="stat-card bg-white rounded-xl p-6 text-center shadow-lg">
                <Icon className="w-8 h-8 text-[#22c55e] mx-auto mb-3" />
                <p className="text-3xl font-bold text-[#166534]">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission & Philosophy */}
      <MissionPhilosophySection />

      {/* Core Values */}
      <CoreValuesSection />

      {/* Our Vision */}
      <section id="vision" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <p className="text-[#22c55e] text-xs font-semibold uppercase tracking-widest mb-3">How We Design</p>
                <h2 className="text-3xl font-bold text-[#166534] mb-6">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  Each home is designed with dedicated garden space, a shared-wall duplex layout for affordability, and a reduced concrete footprint that lets rainwater replenish the groundwater. Parks are placed as productive green 'greenways' behind homes — spaces for food, community, and everyday life.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "photo-1600607687939-ce8a6c25118c",
                  "photo-1600566753086-00f18fb6b3ea",
                ].map((id, i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/${id}?w=500&q=80`}
                    alt={`Vision ${i + 1}`}
                    className="rounded-xl h-56 object-cover w-full"
                  />
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Sustainable Community */}
      <section id="sustainable-community" className="scroll-mt-24 bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <p className="text-[#22c55e] text-xs font-semibold uppercase tracking-widest mb-3 text-center">Living Green</p>
            <h2 className="text-3xl font-bold text-[#166534] mb-10 text-center">Our Sustainable Community</h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <RevealSection key={idx} delay={idx * 120}>
                  <div className="pillar-card bg-gray-50 rounded-2xl p-8 h-full border border-gray-100">
                    <div className="w-14 h-14 bg-[#166534] rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#166534] mb-3">{pillar.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{pillar.body}</p>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainable Living Features */}
      <section id="sustainable-living" className="scroll-mt-24 bg-[#166534] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <p className="text-[#86efac] text-xs font-semibold uppercase tracking-widest mb-3 text-center">What's Included</p>
            <h2 className="text-3xl font-bold text-white mb-14 text-center">Sustainable Living Features</h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sustainableFeatures.map((item, idx) => (
              <RevealSection key={idx} delay={idx * 55}>
                <div className="feature-pill flex items-start gap-3 bg-white/10 rounded-xl px-5 py-4">
                  <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                  <p className="text-white text-sm leading-snug">{item}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Home Garden Options */}
      <section id="home-gardens" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <p className="text-[#22c55e] text-xs font-semibold uppercase tracking-widest mb-3 text-center">Your Choice</p>
            <h2 className="text-3xl font-bold text-[#166534] mb-10 text-center">Customisable Home Gardens</h2>
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gardenOptions.map((item, idx) => (
              <RevealSection key={idx} delay={idx * 100}>
                <div className="garden-card bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-6 h-6 text-[#22c55e]" />
                  </div>
                  <h4 className="font-semibold text-[#166534] mb-2 text-sm">{item.label}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
