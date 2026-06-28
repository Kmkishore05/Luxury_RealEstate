import { useState } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";

interface GalleryItem {
  id: string;
  category: "architecture" | "interior" | "coastal" | "wellness";
  title: string;
  location: string;
  url: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    category: "architecture",
    title: "Double Height Travertine Facade",
    location: "Beverly Hills, CA",
    url: "https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    id: "g-2",
    category: "interior",
    title: "Minimalist Sun-Drenched Lounge",
    location: "St. Moritz, Switzerland",
    url: "https://images.pexels.com/photos/7031712/pexels-photo-7031712.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    id: "g-3",
    category: "coastal",
    title: "Superyacht Mooring Slot",
    location: "Key Biscayne, Miami",
    url: "https://images.pexels.com/photos/8143671/pexels-photo-8143671.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    id: "g-4",
    category: "wellness",
    title: "Volcanic Rock Hot Springs Suite",
    location: "Monaco Shore",
    url: "https://images.pexels.com/photos/6957104/pexels-photo-6957104.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    id: "g-5",
    category: "architecture",
    title: "Cantilevered Master Suite Hub",
    location: "Positano, Amalfi Coast",
    url: "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    id: "g-6",
    category: "interior",
    title: "Bespoke Dining and Wine Grotto",
    location: "Palm Jumeirah, Dubai",
    url: "https://images.pexels.com/photos/7614604/pexels-photo-7614604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "architecture" | "interior" | "coastal" | "wellness">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  // Lightbox Navigation
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <section className="relative w-full py-20 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12 text-left">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] font-syne-luxury">
              Visual Chronicles
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              Immersion of <br />
              <span className="font-normal italic text-gold-pure-gradient">
                Sovereign Spaces
              </span>
            </h2>
          </div>
          
          {/* Categories select */}
          <div className="flex flex-wrap items-center gap-1.5 glass-panel p-1.5 rounded-full">
            {[
              { id: "all", label: "All Chronicles" },
              { id: "architecture", label: "Facades" },
              { id: "interior", label: "Salons" },
              { id: "coastal", label: "Coastal" },
              { id: "wellness", label: "Wellness" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat.id
                    ? "bg-gold text-black shadow-lg shadow-gold/25"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/5 hover:border-gold/30 cursor-pointer shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-65 transition-opacity group-hover:opacity-80" />

              {/* Content Panel */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between items-stretch z-10">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[8px] font-bold uppercase tracking-widest rounded">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 size={12} />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-wider text-[#D4AF37] font-bold">
                    {item.location}
                  </span>
                  <h4 className="font-serif-luxury text-lg text-white font-light group-hover:text-gold transition-colors truncate">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Bar info */}
            <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Filter className="text-gold" size={14} />
                <span className="text-xs uppercase font-bold text-white tracking-widest font-syne-luxury">
                  Chronicle {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-white flex items-center justify-center transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-white flex items-center justify-center transition-all z-10"
              title="Previous Chronicle"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-white flex items-center justify-center transition-all z-10"
              title="Next Chronicle"
            >
              <ChevronRight size={24} />
            </button>

            {/* Centered Image Container */}
            <div
              className="w-full max-w-4xl aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 relative z-0"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].title}
                className="w-full h-full object-cover animate-in zoom-in-95 duration-300"
              />

              {/* Title Drawer */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md p-6 text-left border-t border-white/10">
                <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">
                  {filteredItems[lightboxIndex].location}
                </span>
                <h4 className="font-serif-luxury text-xl md:text-2xl text-white font-light mt-1">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
