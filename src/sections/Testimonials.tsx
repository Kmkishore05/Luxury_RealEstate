import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
}

const REVIEWS: Testimonial[] = [
  {
    id: "r-1",
    quote: "Acquiring our estate on Palm Jumeirah through LUXESTATE was a masterclass in privacy and speed. Alexander Stirling handled the off-market negotiations directly with our private office under complete discretion.",
    author: "Sir Rupert Kensington",
    role: "Chairman of Sterling Holdings",
    location: "London & Dubai",
    rating: 5,
  },
  {
    id: "r-2",
    quote: "The 3D virtual showroom let our acquisition committee assess the entire layout of the Monaco Cliffside Haven from our corporate headquarters in New York. The legal tax structuring was absolutely flawless.",
    author: "Elena Rostopovich",
    role: "Executive Trustee, Rostopovich Legacy Fund",
    location: "Monaco & New York",
    rating: 5,
  },
  {
    id: "r-3",
    quote: "I have purchased multiple homes globally, but the 24/7 private concierge team at LUXESTATE is unmatched. Within 48 hours, they coordinated staff onboarding, chef acquisitions, and priority harbor docking slot.",
    author: "Chef Antoine Laurent",
    role: "Michelin Restaurateur",
    location: "Paris & Los Angeles",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const current = REVIEWS[activeIndex];

  return (
    <section className="relative w-full py-20 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      {/* Background vector */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12 text-left relative z-10">
        {/* Title */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] font-syne-luxury">
              Client Valedictions
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              Testimonials of <br />
              <span className="font-normal italic text-gold-pure-gradient">
                Global Distinction
              </span>
            </h2>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white flex items-center justify-center transition-all"
              title="Previous Testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white flex items-center justify-center transition-all"
              title="Next Testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Slide */}
        <div className="w-full glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-start md:items-center">
          {/* Decorative quote icon */}
          <div className="absolute top-4 right-6 text-white/5 pointer-events-none">
            <Quote size={120} />
          </div>

          {/* Stars & Content */}
          <div className="flex-1 flex flex-col gap-6 text-left">
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: current.rating }).map((_, idx) => (
                <Star key={idx} size={15} fill="#D4AF37" />
              ))}
            </div>

            <p className="font-serif-luxury text-xl sm:text-2xl md:text-3xl font-light text-white leading-relaxed tracking-tight max-w-4xl">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="h-px bg-white/5 w-24" />

            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-white uppercase tracking-wider font-syne-luxury">
                {current.author}
              </span>
              <span className="text-xs text-[#8E8E93] font-medium">
                {current.role} &bull; <span className="text-[#D4AF37]">{current.location}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Dots Navigator Indicator */}
        <div className="flex items-center justify-center gap-2">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-6 bg-gold" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
