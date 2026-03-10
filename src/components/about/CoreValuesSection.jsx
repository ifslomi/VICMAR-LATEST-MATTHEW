import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const coreValues = [
  {
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80",
    title: "INTEGRITY",
    subtitle: '"Do What Is Right"',
  },
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80",
    title: "LOVE FOR COUNTRY",
    subtitle: '"Protect And Defend Filipino Families And Our Environment"',
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80",
    title: "PROFESSIONALISM",
    subtitle: '"Listen And Respect To Create Better Ideas"',
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80",
    title: "COMPETENCE",
    subtitle: '"Be Better And Be a Productive Member of our Organization and Society"',
  },
];

function Reveal({ children, delay = 0 }) {
  const ref = useScrollReveal({ threshold: 0.12, triggerOnce: true });
  return (
    <div
      ref={ref}
      className="scroll-reveal-init"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export default function CoreValuesSection() {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8" id="core-values">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-3"
            style={{ color: "#16a34a" }}
          >
            OUR CORE VALUES
          </h2>
          <p className="text-center text-gray-600 text-sm mb-12 max-w-2xl mx-auto">
            At Vicmar Homes, our values aren't just words—they guide how we work,
            how we serve, and how we care for the communities we build every single
            day.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="h-52 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 text-center flex-1 flex flex-col justify-center">
                  <h4 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider mb-2">
                    {value.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{value.subtitle}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
