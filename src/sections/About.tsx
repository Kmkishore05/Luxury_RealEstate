import { useState } from "react";
import { Award, Compass, ShieldCheck, Milestone, CheckCircle } from "lucide-react";

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(3); // Default to latest

  const timelineData = [
    {
      year: "2001",
      title: "Monaco Founding",
      desc: "Founded in Monte Carlo, catering to Monaco sovereign wealth and European yacht owners.",
      icon: Award,
    },
    {
      year: "2010",
      title: "Dubai Launch",
      desc: "Inception of Middle East offices, securing exclusive masterwork developer plots on Palm Jumeirah.",
      icon: Compass,
    },
    {
      year: "2018",
      title: "Americas Expansion",
      desc: "Opening of Beverly Hills, Aspen, and Miami offices to complete the sovereign coastal triad.",
      icon: ShieldCheck,
    },
    {
      year: "2026",
      title: "Sovereign Portal",
      desc: "Pioneered off-market 3D digital-twin platforms and reached $15 Billion in aggregate volume.",
      icon: Milestone,
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-16">
        {/* Title / Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] font-syne-luxury">
              About The House
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              An Inheritance of <br />
              <span className="font-normal italic text-gold-pure-gradient">
                Absolute Discretion
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
              LUXESTATE is not just a real estate brokerage. We are a sovereign property advisory catering to the world&apos;s most discerning sovereign entities, corporate titans, and private legacy trusts. Our curated portfolio comprises architectural masterpieces that redefine home as an artistic and structural asset.
            </p>
            
            {/* Mission Vision Mini Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="glass-panel p-5 rounded-2xl flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] font-syne-luxury">
                  The Sovereign Mission
                </span>
                <p className="text-xs text-white/60 leading-relaxed">
                  To safeguard absolute client confidentiality while matching families with architectural wonders that stand the test of centuries.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] font-syne-luxury">
                  The Aesthetic Vision
                </span>
                <p className="text-xs text-white/60 leading-relaxed">
                  Pioneering immersive 3D digital-twin ownership, smart ecosystem integration, and zero-carbon luxury living frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Interactive Element */}
        <div className="flex flex-col gap-8 text-left">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] font-syne-luxury">
              Company Journey & Heritage
            </span>
            <h3 className="font-serif-luxury text-xl md:text-2xl text-white font-light">
              Two Decades of Real Estate Legacy
            </h3>
          </div>

          {/* Timeline Visual Line (Horizontal on Desktop, Vertical on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch mt-2">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTimeline === index;

              return (
                <button
                  key={item.year}
                  onClick={() => setActiveTimeline(index)}
                  className={`p-6 rounded-2xl text-left border transition-all duration-300 relative flex flex-col gap-4 group ${
                    isActive
                      ? "bg-white/5 border-gold shadow-lg shadow-gold/10"
                      : "bg-[#101010]/50 border-white/5 hover:border-white/10 hover:bg-white/5"
                  }`}
                >
                  {/* Glowing vertical left bar for active state */}
                  {isActive && (
                    <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gold rounded-l-2xl" />
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold font-syne-luxury text-gold">
                      {item.year}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                      isActive ? "bg-[#D4AF37] text-black border-gold" : "bg-black text-gold border-white/5 group-hover:border-gold/30"
                    } transition-colors`}>
                      <Icon size={12} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Core Achievements Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch border-t border-white/5 pt-12 mt-4 text-left">
          <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gold">
              <CheckCircle size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest font-syne-luxury">Sovereign Validation</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Every LUXESTATE listing undergoes a rigorous 72-point engineering, legal title, and historical validation protocol before presentation.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gold">
              <CheckCircle size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest font-syne-luxury">Carbon Neutrality</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              We pledge to match 100% of energy grid outputs of our managed properties with certified carbon offsets and solar array matching.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gold">
              <CheckCircle size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest font-syne-luxury">VIP Concierge Care</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Unrestricted 24/7 personal coordinator assigned to help transition utility transfers, home staff onboarding, and legal structures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
