import React from "react";
import { Heart, Users, Shield, Target } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const coreValues = [
  {
    icon: Heart,
    title: "Integrity",
    subtitle: "Do What Is Right",
    description: "We uphold the highest standards of honesty and ethical conduct in all our dealings with customers, partners, and communities."
  },
  {
    icon: Target,
    title: "Community First",
    subtitle: "Build Together",
    description: "We prioritise community wellbeing and foster spaces where families and neighbours strengthen bonds and support one another."
  },
  {
    icon: Shield,
    title: "Excellence",
    subtitle: "Quality Always",
    description: "We are committed to delivering superior quality in every home we build and every service we provide to our residents."
  },
  {
    icon: Users,
    title: "Sustainability",
    subtitle: "For Future Generations",
    description: "We design and build with environmental responsibility, ensuring our communities thrive while preserving natural resources."
  },
];

function Reveal({ children, delay = 0 }) {
  const ref = useScrollReveal({ threshold: 0.12, triggerOnce: true });
  return (
    <div ref={ref} className="scroll-reveal-init" style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

export default function CoreValuesSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="core-values">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-[#22c55e] text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            What Drives Us
          </p>
          <h2 className="text-4xl font-bold text-[#166534] mb-12 text-center">Our Core Values</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="bg-[#166534] h-32 flex items-center justify-center">
                    <Icon className="w-14 h-14 text-white" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-[#166534] mb-1">{value.title}</h4>
                    <p className="text-sm text-[#22c55e] font-semibold mb-3">"{value.subtitle}"</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
