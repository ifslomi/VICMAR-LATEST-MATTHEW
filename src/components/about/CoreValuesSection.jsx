import React from "react";
import { Heart, Users, Shield, Target } from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "INTEGRITY",
    subtitle: '"Do What Is Right"',
    description: "We uphold the highest standards of honesty and ethical conduct in all our dealings with customers, partners, and communities."
  },
  {
    icon: Target,
    title: "COMMUNITY FIRST",
    subtitle: '"Build Together"',
    description: "We prioritize community wellbeing and foster spaces where families and neighbors strengthen bonds and support one another."
  },
  {
    icon: Shield,
    title: "EXCELLENCE",
    subtitle: '"Quality Always"',
    description: "We are committed to delivering superior quality in every home we build and every service we provide to our residents."
  },
  {
    icon: Users,
    title: "SUSTAINABILITY",
    subtitle: '"For Future Generations"',
    description: "We design and build with environmental responsibility, ensuring our communities thrive while preserving natural resources."
  },
];

export default function CoreValuesSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="core-values">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#166534] text-sm font-semibold uppercase tracking-wider mb-4 text-center">
          OUR VALUES
        </h2>
        <h3 className="text-4xl font-bold text-[#166534] mb-12 text-center">
          OUR CORE VALUES
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
          At Vicmar Homes, our values aren't just words—they guide how we work, how we serve, and how we care for the communities we build every single day.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Icon Background */}
                <div className="bg-[#166534] h-32 flex items-center justify-center">
                  <Icon className="w-16 h-16 text-white" />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-[#166534] mb-1">{value.title}</h4>
                  <p className="text-sm text-[#22c55e] font-semibold mb-3">{value.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
