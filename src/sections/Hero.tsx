import { useEffect, useState } from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import { ArrowRight, Compass, ShieldCheck, HelpCircle } from "lucide-react";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Gentle parallax coordinate calculation normalized between -15 and 15 pixels
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-12 select-none">
      {/* Background Image with Parallax Scale & Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[4000ms]"
          style={{
            backgroundImage: `url('assets/hero.jpeg')`,
            transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px) scale(1.08)`,
          }}
        />
        {/* Cinematic Multi-tier Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-[#0B0B0B]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05)_0%,transparent_60%)] animate-pulse-gold" />
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start glass-panel px-4 py-1.5 rounded-full border border-gold/20 shadow-lg">
            <Compass className="text-gold animate-spin" size={13} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] font-syne-luxury">
              Global Sovereign Portfolio 2026
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-1">
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight">
              Own The Future Of <br />
              <span className="font-normal italic text-gold-pure-gradient">
                Extraordinary Living
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-sm md:text-base text-white/70 max-w-lg leading-relaxed font-light">
            LUXESTATE manages an ultra-exclusive collection of signature mansions, private islands, and masterwork penthouses. Curated for the global elite.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button
              onClick={() => onNavigate("properties")}
              className="px-6 py-3.5 rounded-full bg-[#D4AF37] hover:bg-gold-hover text-[#0B0B0B] font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-[#D4AF37]/25 flex items-center gap-2"
            >
              <span>Explore Collection</span>
              <ArrowRight size={13} />
            </button>
            <button
              onClick={() => onNavigate("book")}
              className="px-6 py-3.5 rounded-full bg-[#171717]/80 hover:bg-white/10 text-white border border-white/10 hover:border-gold/30 font-bold text-xs uppercase tracking-widest transition-all backdrop-blur-md"
            >
              Book Private Tour
            </button>
          </div>
        </div>

        {/* Floating Glass Control Card (Right Side) */}
        <div
          className="lg:col-span-5 hidden lg:block transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <div className="glass-panel-heavy p-6 rounded-3xl border border-[#D4AF37]/25 shadow-2xl relative">
            {/* Soft inner gold glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-2xl rounded-full pointer-events-none" />

            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-gold" size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-syne-luxury text-white">
                    Private Brokerage
                  </span>
                </div>
                <span className="text-[9px] uppercase font-bold text-gold bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                  Tier 1 VIP
                </span>
              </div>

              {/* Fast property finder shortcut */}
              <div className="flex flex-col gap-1.5 text-left">
                <span className="text-[10px] uppercase font-bold text-[#8E8E93] tracking-widest">
                  Featured Destination
                </span>
                <p className="text-base font-bold font-syne-luxury text-white">
                  Palm Jumeirah, Dubai
                </p>
                <p className="text-xs text-white/50 leading-relaxed">
                  Rising above the Persian Gulf, featuring absolute private shoreline and custom helipad access. Available starting at $29M.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-1">
                <button
                  onClick={() => onNavigate("properties")}
                  className="py-3 bg-white/5 border border-white/10 hover:border-gold hover:text-gold rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all text-center"
                >
                  View Details
                </button>
                <button
                  onClick={() => onNavigate("book")}
                  className="py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all text-center"
                >
                  Schedule Tour
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-[9px] text-white/30 font-medium justify-center border-t border-white/5 pt-4">
                <HelpCircle size={10} />
                <span>NDA & Confidentiality Agreements Applied</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Counter Stats (Bottom Section) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full mt-12 lg:mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 md:py-8 border-t border-white/5">
          <div className="flex flex-col text-left">
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mb-1">
              Properties Listed
            </span>
            <div className="flex items-baseline gap-1">
              <AnimatedCounter
                end={50}
                suffix="+"
                className="text-2xl md:text-3xl font-bold font-syne-luxury text-white"
              />
              <span className="text-xs text-gold font-bold">Ultra-Luxury</span>
            </div>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mb-1">
              Sovereign Transactions
            </span>
            <div className="flex items-baseline gap-1">
              <AnimatedCounter
                end={8}
                prefix="$"
                suffix="Billion+"
                className="text-2xl md:text-3xl font-bold font-syne-luxury text-white"
              />
              <span className="text-xs text-gold font-bold">Volume Sold</span>
            </div>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mb-1">
              Global VIP Clientele
            </span>
            <div className="flex items-baseline gap-1">
              <AnimatedCounter
                end={1250}
                suffix="+"
                className="text-2xl md:text-3xl font-bold font-syne-luxury text-white"
              />
              <span className="text-xs text-gold font-bold">Families</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
