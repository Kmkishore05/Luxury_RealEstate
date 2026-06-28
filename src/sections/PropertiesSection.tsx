import { useState, useMemo } from "react";
import { PROPERTIES, Property } from "../data/properties";
import { Search, MapPin, Bed, Bath, Car, Maximize, Eye, Heart, SlidersHorizontal, SortAsc, RefreshCw, X, FileText, Check } from "lucide-react";

interface PropertiesSectionProps {
  onSelectProperty: (id: string) => void;
  onNavigate: (page: string) => void;
}

export default function PropertiesSection({ onSelectProperty, onNavigate }: PropertiesSectionProps) {
  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [minBeds, setMinBeds] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000000); // 100M
  const [sortBy, setSortBy] = useState("featured");

  // Show Advanced Filters toggle
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Wishlist state
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Quick View Modal property state
  const [quickViewProperty, setQuickViewModal] = useState<Property | null>(null);

  // Toggle wishlist function
  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Extract cities and types dynamically
  const cities = useMemo(() => {
    const list = PROPERTIES.map((p) => p.city);
    return ["all", ...Array.from(new Set(list))];
  }, []);

  const types = useMemo(() => {
    const list = PROPERTIES.map((p) => p.type);
    return ["all", ...Array.from(new Set(list))];
  }, []);

  // Filtered and Sorted list
  const filteredAndSorted = useMemo(() => {
    let result = [...PROPERTIES];

    // Search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.location.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      );
    }

    // City
    if (selectedCity !== "all") {
      result = result.filter((p) => p.city === selectedCity);
    }

    // Type
    if (selectedType !== "all") {
      result = result.filter((p) => p.type === selectedType);
    }

    // Beds
    if (minBeds > 0) {
      result = result.filter((p) => p.bedrooms >= minBeds);
    }

    // Max Price
    result = result.filter((p) => p.price <= maxPrice);

    // Sort
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "area-desc") {
      result.sort((a, b) => {
        const areaA = parseInt(a.area.replace(/,/g, ""));
        const areaB = parseInt(b.area.replace(/,/g, ""));
        return areaB - areaA;
      });
    }

    return result;
  }, [searchTerm, selectedCity, selectedType, minBeds, maxPrice, sortBy]);

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCity("all");
    setSelectedType("all");
    setMinBeds(0);
    setMaxPrice(100000000);
    setSortBy("featured");
  };

  return (
    <section className="relative w-full py-20 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">
        {/* Title and Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] font-syne-luxury">
              Curated Estates
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              Our Sovereign <br />
              <span className="font-normal italic text-gold-pure-gradient">
                Signature Collection
              </span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white/50 max-w-sm leading-relaxed font-light">
            Each listing is an irreplaceable legacy. Use our global registry filters to navigate luxury locations, specifications, and prices.
          </p>
        </div>

        {/* Dynamic Filtering Toolbar */}
        <div className="flex flex-col gap-4 bg-[#101010]/80 glass-panel p-5 rounded-2xl">
          {/* Main search and base filter row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
            {/* Search Input */}
            <div className="md:col-span-4 relative flex items-center">
              <Search className="absolute left-4 text-white/30" size={16} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search location, address, keyword..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#171717] border border-white/5 hover:border-white/10 focus:border-gold focus:outline-none text-xs font-medium text-white transition-all placeholder:text-white/30"
              />
            </div>

            {/* City Selector */}
            <div className="md:col-span-3">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#171717] border border-white/5 hover:border-white/10 focus:border-gold focus:outline-none text-xs font-medium text-white transition-all"
              >
                <option value="all">All Locations (Global)</option>
                {cities.filter(c => c !== "all").map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type Selector */}
            <div className="md:col-span-3">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#171717] border border-white/5 hover:border-white/10 focus:border-gold focus:outline-none text-xs font-medium text-white transition-all"
              >
                <option value="all">All Typologies</option>
                {types.filter(t => t !== "all").map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Action buttons */}
            <div className="md:col-span-2 flex gap-2">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className={`flex-1 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                  showAdvanced
                    ? "bg-[#D4AF37]/10 border-[#D4AF37] text-gold"
                    : "bg-[#171717] border-white/5 text-[#F5F5F5]/60 hover:text-white hover:border-gold/30"
                }`}
              >
                <SlidersHorizontal size={13} />
                <span>Filters</span>
              </button>

              <button
                onClick={resetFilters}
                className="px-3 rounded-xl bg-[#171717] border border-white/5 text-white/50 hover:text-white hover:border-gold/30 transition-all flex items-center justify-center"
                title="Reset Filters"
              >
                <RefreshCw size={13} />
              </button>
            </div>
          </div>

          {/* Advanced sliders drawer */}
          {showAdvanced && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 mt-4 border-t border-white/5 text-left animate-in fade-in duration-200">
              {/* Max Price Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                  <span className="text-[#8E8E93]">Maximum Valuation</span>
                  <span className="text-gold font-syne-luxury">
                    ${(maxPrice / 1000000).toFixed(0)}M
                  </span>
                </div>
                <input
                  type="range"
                  min={20000000}
                  max={100000000}
                  step={5000000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-gold h-1 bg-[#171717] rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[8px] text-[#8E8E93] font-bold">
                  <span>$20M</span>
                  <span>$100M</span>
                </div>
              </div>

              {/* Minimum Bedrooms */}
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E8E93]">
                  Minimum Bedrooms
                </span>
                <div className="flex gap-1.5">
                  {[0, 5, 6, 7, 8].map((num) => (
                    <button
                      key={num}
                      onClick={() => setMinBeds(num)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${
                        minBeds === num
                          ? "bg-gold text-black border-gold shadow-lg shadow-gold/20"
                          : "bg-[#171717] border-white/5 text-white/60 hover:text-white hover:border-gold/30"
                      }`}
                    >
                      {num === 0 ? "Any" : `${num}+`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sorting */}
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E8E93]">
                  Sort Listings
                </span>
                <div className="relative flex items-center">
                  <SortAsc className="absolute left-4 text-white/30" size={13} />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#171717] border border-white/5 hover:border-white/10 focus:border-gold focus:outline-none text-xs font-medium text-white transition-all appearance-none"
                  >
                    <option value="featured">Featured (Registry)</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="area-desc">Size: Largest Area First</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredAndSorted.map((prop) => {
            const isWishlisted = wishlist.includes(prop.id);

            return (
              <div
                key={prop.id}
                onClick={() => {
                  onSelectProperty(prop.id);
                  onNavigate("property-detail");
                }}
                className="group flex flex-col justify-between bg-[#101010] border border-white/5 hover:border-[#D4AF37]/30 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer shadow-xl relative"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[4/3] overflow-hidden reveal-wrapper">
                  <img
                    src={prop.exteriorImage}
                    alt={prop.title}
                    className="w-full h-full object-cover reveal-image"
                    loading="lazy"
                  />
                  {/* Glass overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Top Header Row overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-[#D4AF37]/30 text-gold text-[9px] font-bold uppercase tracking-widest rounded-full">
                      {prop.status}
                    </span>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => toggleWishlist(prop.id, e)}
                      className={`w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border flex items-center justify-center transition-all ${
                        isWishlisted
                          ? "border-[#D4AF37] text-gold scale-110"
                          : "border-white/10 text-white hover:border-[#D4AF37] hover:text-gold"
                      }`}
                      title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart size={14} fill={isWishlisted ? "#D4AF37" : "transparent"} />
                    </button>
                  </div>

                  {/* Hotspots & Room tags overlay (Bottom Center) */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-1 z-10">
                    {prop.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/10 backdrop-blur-md text-white text-[9px] font-semibold uppercase tracking-wider rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col gap-4 text-left flex-1 justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] font-syne-luxury">
                        {prop.type}
                      </span>
                      <span className="text-[10px] text-white/40 font-semibold uppercase tracking-wider">
                        {prop.city}
                      </span>
                    </div>

                    <h3 className="font-serif-luxury text-xl font-light text-white group-hover:text-gold transition-colors truncate mt-1">
                      {prop.title}
                    </h3>

                    <div className="flex items-center gap-1 text-white/50 text-xs mt-1">
                      <MapPin size={12} className="text-[#D4AF37]" />
                      <span className="truncate">{prop.location}</span>
                    </div>
                  </div>

                  {/* Icon Specs row */}
                  <div className="grid grid-cols-4 gap-2 py-3 border-y border-white/5 text-[#8E8E93]">
                    <div className="flex flex-col items-center gap-1 text-center">
                      <Bed size={13} className="text-white/60" />
                      <span className="text-[10px] font-bold text-white">{prop.bedrooms} Bed</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <Bath size={13} className="text-white/60" />
                      <span className="text-[10px] font-bold text-white">{prop.bathrooms} Bath</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <Car size={13} className="text-white/60" />
                      <span className="text-[10px] font-bold text-white">{prop.garage} Car</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <Maximize size={13} className="text-white/60" />
                      <span className="text-[9px] font-bold text-white truncate max-w-full">
                        {prop.area.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Price & Primary CTA */}
                  <div className="flex items-center justify-between gap-4 mt-2">
                    <div className="flex flex-col">
                      <span className="text-[8px] uppercase tracking-wider text-white/40 font-bold">
                        Sovereign Price
                      </span>
                      <span className="text-lg font-bold font-syne-luxury text-white">
                        {prop.priceFormatted}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Quick view button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuickViewModal(prop);
                        }}
                        className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#D4AF37]/40 flex items-center justify-center text-white/80 transition-all"
                        title="Quick View Mansion Details"
                      >
                        <Eye size={15} />
                      </button>

                      <button
                        className="px-4 py-2.5 bg-white/5 group-hover:bg-[#D4AF37] text-white group-hover:text-black font-bold text-[10px] rounded-xl uppercase tracking-widest transition-all"
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredAndSorted.length === 0 && (
          <div className="py-20 flex flex-col items-center justify-center gap-4 text-center border border-white/5 rounded-3xl bg-[#101010]/30">
            <SlidersHorizontal className="text-white/20" size={40} />
            <h3 className="font-serif-luxury text-xl text-white font-light">
              No Matching Sovereignties Found
            </h3>
            <p className="text-xs text-white/50 max-w-xs leading-relaxed">
              Adjust your minimum bedrooms, price slider, or select a different world district.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest mt-2 hover:bg-gold-hover transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* QUICK VIEW MODAL OVERLAY */}
      {quickViewProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-[#101010] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
            
            {/* Close button */}
            <button
              onClick={() => setQuickViewModal(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-black/50 border border-white/10 hover:border-gold hover:text-gold text-white transition-all z-20"
            >
              <X size={15} />
            </button>

            {/* Left side Image */}
            <div className="w-full lg:w-1/2 relative aspect-video lg:aspect-auto lg:h-auto overflow-hidden">
              <img
                src={quickViewProperty.exteriorImage}
                alt={quickViewProperty.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent lg:hidden" />
              
              {/* Overlay pricing tag in mobile */}
              <div className="absolute bottom-4 left-4 lg:hidden">
                <span className="text-[10px] uppercase font-bold text-[#D4AF37] font-syne-luxury">
                  {quickViewProperty.type}
                </span>
                <h4 className="text-xl font-bold font-syne-luxury text-white">
                  {quickViewProperty.title}
                </h4>
              </div>
            </div>

            {/* Right side specifications */}
            <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[60vh] lg:max-h-[90vh] text-left">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#D4AF37]/10 text-gold border border-[#D4AF37]/20 text-[9px] font-bold uppercase tracking-wider rounded-lg">
                    {quickViewProperty.status}
                  </span>
                  <span className="text-xs text-[#8E8E93] font-semibold uppercase tracking-wider">
                    {quickViewProperty.location}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl md:text-3xl font-light text-white leading-tight">
                  {quickViewProperty.title}
                </h3>

                <p className="text-xs text-white/70 leading-relaxed font-light mt-1">
                  {quickViewProperty.description}
                </p>

                {/* Highlight specs */}
                <div className="grid grid-cols-4 gap-3 py-3 border-y border-white/5 my-2">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-white/40 font-bold block mb-0.5">Bedrooms</span>
                    <span className="text-xs font-bold text-white">{quickViewProperty.bedrooms}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-white/40 font-bold block mb-0.5">Bathrooms</span>
                    <span className="text-xs font-bold text-white">{quickViewProperty.bathrooms}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-white/40 font-bold block mb-0.5">Garages</span>
                    <span className="text-xs font-bold text-white">{quickViewProperty.garage} Car</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-white/40 font-bold block mb-0.5">Area Size</span>
                    <span className="text-xs font-bold text-white truncate block">{quickViewProperty.area}</span>
                  </div>
                </div>

                {/* Amenities List preview */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E8E93]">
                    Selected Signature Amenities:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {quickViewProperty.details.amenities.slice(0, 4).map((am) => (
                      <div key={am} className="flex items-center gap-2 text-xs text-white/80 font-medium">
                        <Check size={11} className="text-[#D4AF37] shrink-0" />
                        <span>{am}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action and Pricing bar */}
              <div className="flex items-center justify-between gap-4 mt-6 pt-6 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-white/40 font-bold">
                    Asking Price
                  </span>
                  <span className="text-2xl font-bold font-syne-luxury text-gold">
                    {quickViewProperty.priceFormatted}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      onSelectProperty(quickViewProperty.id);
                      onNavigate("property-detail");
                      setQuickViewModal(null);
                    }}
                    className="px-5 py-3 bg-[#D4AF37] hover:bg-gold-hover text-black font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <FileText size={13} />
                    <span>View Dossier</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
