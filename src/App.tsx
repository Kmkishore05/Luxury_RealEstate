import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import PropertiesSection from "./sections/PropertiesSection";
import InteractiveMap from "./components/InteractiveMap";
import WhyChooseUs from "./sections/WhyChooseUs";
import AgentsSection from "./sections/AgentsSection";
import GallerySection from "./sections/GallerySection";
import MortgageCalculator from "./components/MortgageCalculator";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import FAQ from "./sections/FAQ";
import ContactSection from "./sections/ContactSection";
import BookingSection from "./sections/BookingSection";
import Footer from "./sections/Footer";
import PropertyDetail from "./pages/PropertyDetail";
import { Compass, HelpCircle } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("prop-1");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [cursorPos, setCursorPosition] = useState({ x: -100, y: -100 });

  // Handle initial premium loading screen delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop Mouse Custom Cursor Trailing Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Helper to change page and scroll to top smoothly
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Pre-loader Overlay
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0B0B0B] flex flex-col items-center justify-center gap-6">
        {/* Glowing concentric gold rings */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-gold/10 animate-ping" />
          <div className="absolute -inset-2.5 rounded-full border border-gold/25 animate-pulse" />
          <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center bg-black">
            <Compass className="text-gold animate-spin" size={28} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-1.5 text-center mt-2">
          <span className="font-syne-luxury text-lg font-extrabold tracking-widest text-white">
            LUXESTATE
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
            Decrypting Sovereign Portfolios
          </span>
        </div>

        {/* Counter Simulator */}
        <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-gold animate-[pulse_1.5s_infinite] w-[75%]" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5] overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#0B0B0B] relative">
      
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gold-gradient z-[60] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Custom Luxury Custom Cursor Follower (Desktop Only) */}
      <div
        className="hidden md:block fixed w-5 h-5 rounded-full border border-[#D4AF37] pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 transition-all duration-75 mix-blend-difference"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />

      {/* Global Header Navigation */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Pages Router Switch rendering dynamic views */}
      <main className="transition-all duration-500 ease-out">
        {currentPage === "home" && (
          <div className="animate-in fade-in duration-500">
            {/* Landing Hero */}
            <Hero onNavigate={handleNavigate} />

            {/* Immersive 3D Plot radar and Map sector */}
            <section className="relative py-20 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12 text-left">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] font-syne-luxury">
                      Plot Radar
                    </span>
                    <h2 className="font-serif-luxury text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
                      Confidential Interactive <br />
                      <span className="font-normal italic text-gold-pure-gradient">
                        District Masterplan
                      </span>
                    </h2>
                  </div>
                  <p className="text-xs md:text-sm text-white/50 max-w-sm leading-relaxed font-light">
                    Gain absolute spatial clarity. Toggle proximity layers to pinpoint high-value hospitals, schools, and private airports surrounding each signature property.
                  </p>
                </div>

                <InteractiveMap
                  onSelectProperty={(id) => {
                    setSelectedPropertyId(id);
                  }}
                  onNavigate={handleNavigate}
                />
              </div>
            </section>

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Featured Properties section */}
            <PropertiesSection
              onSelectProperty={(id) => setSelectedPropertyId(id)}
              onNavigate={handleNavigate}
            />

            {/* Story & milestones */}
            <About />

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ */}
            <FAQ />

            {/* Blog */}
            <Blog />

            {/* Footer Book private viewing CTA */}
            <BookingSection />
          </div>
        )}

        {/* Catalog page */}
        {currentPage === "properties" && (
          <div className="animate-in fade-in duration-500 pt-8">
            <PropertiesSection
              onSelectProperty={(id) => setSelectedPropertyId(id)}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {/* Heritage page */}
        {currentPage === "about" && (
          <div className="animate-in fade-in duration-500 pt-8">
            <About />
          </div>
        )}

        {/* Directorate agents page */}
        {currentPage === "agents" && (
          <div className="animate-in fade-in duration-500 pt-8">
            <AgentsSection />
          </div>
        )}

        {/* Chronicles Media page */}
        {currentPage === "gallery" && (
          <div className="animate-in fade-in duration-500 pt-8">
            <GallerySection />
          </div>
        )}

        {/* Treasury Calculator page */}
        {currentPage === "mortgage" && (
          <div className="animate-in fade-in duration-500 pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-8 text-left">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] font-syne-luxury">
                  Treasury Sliders
                </span>
                <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
                  Portfolio Finance <br />
                  <span className="font-normal italic text-gold-pure-gradient">
                    Amortization Planner
                  </span>
                </h1>
                <p className="text-xs md:text-sm text-white/50 max-w-sm leading-relaxed font-light">
                  Simulate interest payments and aggregate down payment ratios mapped instantly on bespoke asset sheets.
                </p>
              </div>

              <MortgageCalculator />
            </div>
          </div>
        )}

        {/* Contact/HQ location page */}
        {currentPage === "contact" && (
          <div className="animate-in fade-in duration-500 pt-8">
            <ContactSection />
          </div>
        )}

        {/* Physical Private booking page */}
        {currentPage === "book" && (
          <div className="animate-in fade-in duration-500 pt-8">
            <BookingSection />
          </div>
        )}

        {/* Dynamic Dossier page */}
        {currentPage === "property-detail" && (
          <div className="animate-in fade-in duration-500">
            <PropertyDetail
              propertyId={selectedPropertyId}
              onNavigate={handleNavigate}
            />
          </div>
        )}
      </main>

      {/* Private Office Help Widget (Fixed bottom-right button) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 bg-black border border-[#D4AF37]/35 pl-4 pr-5 py-3 rounded-full shadow-2xl">
        <div className="w-2.5 h-2.5 rounded-full bg-[#51d382] animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5F5F5] font-syne-luxury">
          Secure Line Online
        </span>
        <button
          onClick={() => handleNavigate("contact")}
          className="w-6 h-6 rounded-full bg-[#D4AF37] hover:bg-gold-hover text-black flex items-center justify-center transition-colors"
          title="Direct Consultation"
        >
          <HelpCircle size={12} />
        </button>
      </div>

      {/* Global Regulatory Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
