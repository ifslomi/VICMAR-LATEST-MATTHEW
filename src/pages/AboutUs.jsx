import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MissionPhilosophySection from "@/components/about/MissionPhilosophySection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import vicmarLogo from "@/images/logos/transparent-vicmar-logo.png";
import bgHero from "@/images/hero-properties.jpg";

/* ── Scroll-reveal wrapper ───────────────────────────────────────── */
function Reveal({ children, className = "", delay = 0 }) {
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

/* ── TATAG Five Traits ───────────────────────────────────────────── */
const tatagTraits = [
  {
    label: "TAPAT",
    sublabel: "(Honest & Transparent)",
    icon: (
      <svg viewBox="0 0 40 40" className="w-12 h-12 mx-auto" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#16a34a" strokeWidth="2.5" />
        <path d="M12 20l5 5 10-10" stroke="#16a34a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "ALAGAAN",
    sublabel: "(Caring & Attentive)",
    icon: (
      <svg viewBox="0 0 40 40" className="w-12 h-12 mx-auto" fill="none">
        <path d="M20 34s-14-8.5-14-17a8 8 0 0116 0 8 8 0 0116 0c0 8.5-14 17-14 17z" stroke="#16a34a" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "TULUNGAN",
    sublabel: "(Helpful & Supportive)",
    icon: (
      <svg viewBox="0 0 40 40" className="w-12 h-12 mx-auto" fill="none">
        <circle cx="14" cy="13" r="5" stroke="#16a34a" strokeWidth="2.3" />
        <circle cx="26" cy="13" r="5" stroke="#16a34a" strokeWidth="2.3" />
        <path d="M7 32c0-5.5 3.1-9 7-9h12c3.9 0 7 3.5 7 9" stroke="#16a34a" strokeWidth="2.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "ANGKOP",
    sublabel: "(Fitting & Relevant)",
    icon: (
      <svg viewBox="0 0 40 40" className="w-12 h-12 mx-auto" fill="none">
        <rect x="8" y="8" width="10" height="10" rx="2" stroke="#16a34a" strokeWidth="2.3" />
        <rect x="22" y="8" width="10" height="10" rx="2" stroke="#16a34a" strokeWidth="2.3" />
        <rect x="8" y="22" width="10" height="10" rx="2" stroke="#16a34a" strokeWidth="2.3" />
        <rect x="22" y="22" width="10" height="10" rx="2" stroke="#16a34a" strokeWidth="2.3" />
      </svg>
    ),
  },
  {
    label: "GALING",
    sublabel: "(Skilled & Competent)",
    icon: (
      <svg viewBox="0 0 40 40" className="w-12 h-12 mx-auto" fill="none">
        <polygon points="20,5 24.5,14.5 35,16 27.5,23 29.5,34 20,29 10.5,34 12.5,23 5,16 15.5,14.5" stroke="#16a34a" strokeWidth="2.3" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/* ═══════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════ */
export default function AboutUs() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const navHeight = document.querySelector("nav")?.offsetHeight ?? 80;
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 350);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        .scroll-reveal-init {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .scroll-reveal-init.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <div
        className="relative w-full"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "320px",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(22,101,52,0.82)" }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-28 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            Building Better Lives: Vicmar Homes' Vision for Filipino Families
          </h1>
          <p className="mt-4 text-gray-200 text-sm md:text-base max-w-xl">
            For over a decade, we have built communities where Filipino families can truly thrive and grow.
          </p>
        </div>
      </div>

      {/* ── 2. ABOUT US INTRO ───────────────────────────────────────── */}
      <section className="bg-white py-14 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Reveal className="flex-1">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#16a34a" }}
            >
              About Us
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4 max-w-lg">
              Weaving Filipino Values into Modern Communities
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg mb-2">
              For years, Vicmar Homes has built communities that embody Filipino
              values and empower families to thrive. As part of our commitment,
              we bring trusted experience to every development — shaping
              neighborhoods that reflect integrity, compassion, and togetherness.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
              More than homes, we create sustainable communities rooted in the
              bayanihan spirit, where every Filipino can live with comfort,
              convenience, and lasting pride.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex-shrink-0">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-widest text-white rounded"
              style={{ background: "#16a34a" }}
            >
              Inquire Now
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 3. MISSION & PHILOSOPHY (2×2 grid) ─────────────────────── */}
      <MissionPhilosophySection />

      {/* ── 4. CORE VALUES ──────────────────────────────────────────── */}
      <CoreValuesSection />

      {/* ── 5. CORPORATE CULTURE ────────────────────────────────────── */}
      <section id="corporate-culture" className="w-full scroll-mt-24" style={{ background: "#15803d" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 flex flex-col md:flex-row items-center gap-12">
          {/* Logo + name */}
          <Reveal className="flex-shrink-0 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <img
                  src={vicmarLogo}
                  alt="Vicmar Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="text-white">
                <p className="text-2xl font-extrabold tracking-wider">TATAG</p>
                <p className="text-xs text-white/70 uppercase tracking-widest mt-1">
                  Tapat, Alagaan, Tulungan, Angkop, Galing
                </p>
              </div>
            </div>
          </Reveal>

          {/* Description */}
          <Reveal delay={120} className="flex-1 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-6">
              Corporate Culture
            </h2>
            <p className="text-white/85 text-sm leading-relaxed mb-4">
              Vicmar Homes has grown through the years by pursuing a clear vision:
              to be the preferred homebuilder for first-time Filipino homebuyers
              who seek to live in a nurturing, dignified community. Built on equally
              strong commitments to customers, employees, and communities, our
              TATAG culture brings together what we believe are the essential
              prerequisites for sustaining our company's long-term health and growth.
            </p>
            <p className="text-white/85 text-sm leading-relaxed">
              One of the most important initiatives we must pursue to realize this
              vision is redefining how we view our internal and external customers.
              Only with the right mindset can we effectively change the way we do
              things.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 6. THE 5 OF TATAG ───────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-8" style={{ background: "#f0fdf4" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold text-center uppercase tracking-widest text-gray-800 mb-12">
              The 5 of TATAG
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-12">
            {tatagTraits.map((trait, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 h-full flex flex-col items-center justify-center gap-3">
                  {trait.icon}
                  <p className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                    {trait.label}
                  </p>
                  <p className="text-xs text-gray-500">{trait.sublabel}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="text-center text-gray-500 text-xs leading-relaxed max-w-3xl mx-auto">
              The Vicmar Customer Engagement Program — TATAG: Tapat, Alagaan,
              Tulungan, Angkop, at Galing — introduces five core service traits
              designed to embed a culture of community-centricity until it becomes
              a way of life at Vicmar Homes. The mission of TATAG is to reshape how
              we see, understand, and care for both our employees and homeowners.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

