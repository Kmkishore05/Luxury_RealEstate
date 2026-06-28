import { useState, useEffect } from "react";
import { Compass, Menu, X, ArrowRight, Award, Map, ShieldCheck, Mail, Phone } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { key: "home", label: "Home" },
    { key: "properties", label: "Properties" },
    { key: "about", label: "About" },
    { key: "agents", label: "Agents" },
    { key: "gallery", label: "Gallery" },
    { key: "mortgage", label: "Mortgage" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0B0B0B]/85 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2.5 group pointer-events-auto"
          >
            <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-black transition-all group-hover:rotate-12 group-hover:scale-105">
              <Compass className="text-[#D4AF37]" size={20} />
            </div>
            <div className="flex flex-col items-start leading-none text-left">
              <span className="font-syne-luxury font-extrabold text-xl tracking-wider text-white group-hover:text-gold transition-colors">
                LUXESTATE
              </span>
              <span className="text-[7.5px] uppercase tracking-[0.25em] text-[#D4AF37] mt-0.5">
                Extraordinary Living
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.key}
                className="relative"
                onMouseEnter={() => {
                  if (link.key === "properties") setIsMegaMenuOpen(true);
                }}
                onMouseLeave={() => {
                  if (link.key === "properties") setIsMegaMenuOpen(false);
                }}
              >
                <button
                  onClick={() => {
                    onNavigate(link.key);
                    setIsMegaMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all relative ${
                    currentPage === link.key
                      ? "text-gold"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {currentPage === link.key && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold rounded-full" />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="text-xs font-semibold uppercase tracking-widest text-[#F5F5F5]/60 hover:text-white transition-colors"
            >
              Private Desk
            </button>
            <button
              onClick={() => onNavigate("book")}
              className="px-5 py-2.5 rounded-full bg-[#D4AF37] hover:bg-gold-hover text-[#0B0B0B] font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-[#D4AF37]/25 flex items-center gap-1.5"
            >
              <span>Book Visit</span>
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold text-white transition-all"
          >
            <Menu size={18} />
          </button>
        </div>

        {/* MEGA MENU - HOVER TRIGGERED FOR PROPERTIES */}
        {isMegaMenuOpen && (
          <div
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
            className="absolute top-full left-0 right-0 bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 py-10 shadow-2xl z-40 animate-in fade-in slide-in-from-top-4 duration-300"
          >
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8">
              {/* Promo column */}
              <div className="col-span-4 flex flex-col gap-4 border-r border-white/5 pr-8">
                <div className="flex items-center gap-2 text-gold">
                  <Award size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-syne-luxury">
                    Curated Signature Portfolio
                  </span>
                </div>
                <h3 className="font-serif-luxury text-2xl font-light text-white leading-snug">
                  Only the top <span className="text-gold italic font-normal">0.1%</span> of global estates.
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  LUXESTATE manages architectural masterworks across Dubai, Los Angeles, Monaco, and private island reserves. Speak to our global acquisitions director today.
                </p>
                <button
                  onClick={() => {
                    onNavigate("properties");
                    setIsMegaMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-xs font-bold text-gold hover:text-white uppercase tracking-widest mt-2 group"
                >
                  <span>Explore Catalog</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* District grid column */}
              <div className="col-span-5 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#8E8E93] mb-3 font-syne-luxury">
                    Global Districts
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      { city: "Palm Jumeirah", country: "Dubai, UAE" },
                      { city: "Bel Air", country: "Los Angeles, CA" },
                      { city: "Monte Carlo", country: "Monaco" },
                      { city: "St. Moritz", country: "Switzerland" },
                    ].map((d) => (
                      <li key={d.city}>
                        <button
                          onClick={() => {
                            onNavigate("properties");
                            setIsMegaMenuOpen(false);
                          }}
                          className="flex flex-col items-start hover:translate-x-1 transition-transform text-left group"
                        >
                          <span className="text-xs font-bold text-[#F5F5F5] group-hover:text-gold transition-colors">
                            {d.city}
                          </span>
                          <span className="text-[9px] text-[#F5F5F5]/40 uppercase tracking-widest">
                            {d.country}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#8E8E93] mb-3 font-syne-luxury">
                    Property Typology
                  </h4>
                  <ul className="flex flex-col gap-2.5 text-xs text-[#F5F5F5]/75 font-semibold">
                    {["Private Mansions", "Sky-High Penthouses", "Alpine Ski Chalets", "Waterfront Estates", "Private Islands"].map(
                      (type) => (
                        <li key={type}>
                          <button
                            onClick={() => {
                              onNavigate("properties");
                              setIsMegaMenuOpen(false);
                            }}
                            className="hover:text-gold transition-colors"
                          >
                            {type}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* Mini Interactive map preview column */}
              <div className="col-span-3 flex flex-col justify-between glass-panel p-4 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-gold">
                    <Map size={14} />
                    <span className="text-[9px] font-bold uppercase tracking-widest">
                      District Radar
                    </span>
                  </div>
                  <h5 className="text-xs font-bold font-syne-luxury text-white">
                    Explore Virtual Plot Map
                  </h5>
                  <p className="text-[10px] text-white/40 leading-relaxed">
                    Instantly pinpoint neighborhood scores, schools, airports, and private yacht slips.
                  </p>
                </div>

                <button
                  onClick={() => {
                    onNavigate("properties");
                    setIsMegaMenuOpen(false);
                  }}
                  className="w-full py-2.5 bg-white/5 border border-white/10 hover:border-gold hover:text-gold transition-all text-center rounded-xl text-[10px] font-bold uppercase tracking-widest"
                >
                  Launch Plot Radar
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MOBILE DRAWER MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0B0B] flex flex-col justify-between p-6 animate-in fade-in duration-300">
          <div className="flex flex-col gap-8">
            {/* Header row in mobile drawer */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  onNavigate("home");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2"
              >
                <Compass className="text-gold animate-spin" size={18} />
                <span className="font-syne-luxury font-extrabold text-lg tracking-wider text-white">
                  LUXESTATE
                </span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Links Stack */}
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => {
                    onNavigate(link.key);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 font-syne-luxury text-2xl font-bold tracking-wider border-b border-white/5 transition-all ${
                    currentPage === link.key ? "text-gold pl-2" : "text-white/60"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Footer of Mobile Drawer */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-gold" />
                <span>+1 (800) LUXESTATE</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-gold" />
                <span>concierge@luxestate.com</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <ShieldCheck size={13} className="text-[#51d382]" />
                <span>Verified Private Luxury Brokerage</span>
              </div>
            </div>

            <button
              onClick={() => {
                onNavigate("book");
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs rounded-xl text-center shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
            >
              <span>Book Private Session</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
