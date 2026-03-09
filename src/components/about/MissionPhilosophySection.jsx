import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Reveal({ children, delay = 0 }) {
  const ref = useScrollReveal({ threshold: 0.12, triggerOnce: true });
  return (
    <div ref={ref} className="scroll-reveal-init" style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

export default function MissionPhilosophySection() {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="text-[#22c55e] text-xs font-semibold uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#166534] mb-4 leading-tight">
              Weaving Filipino Values into Modern Communities
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal delay={80}>
            <div id="mission" className="bg-[#166534] rounded-2xl p-8 text-white scroll-mt-24 h-full">
              <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
              <p className="leading-relaxed text-gray-100 text-sm">
                To design and build sustainable communities that empower Filipino families to flourish with dignity, comfort, and pride — while preserving the environment for generations to come.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div id="philosophy" className="bg-[#22c55e] rounded-2xl p-8 text-white scroll-mt-24 h-full">
              <h4 className="text-2xl font-bold mb-4">Our Philosophy</h4>
              <p className="leading-relaxed text-white/90 text-sm">
                Homes are more than structures — they are where memories are made and futures are built. Every Vicmar home is designed with purpose, built with integrity, and priced to improve lives.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
