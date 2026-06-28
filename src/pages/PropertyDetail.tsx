import { useState } from "react";
import { Property, PROPERTIES } from "../data/properties";
import ThreeDHouseViewer from "../components/ThreeDHouseViewer";
import { MapPin, Bed, Bath, Car, Maximize, ShieldCheck, Heart, Share2, Compass, Check, School, ShieldPlus, ShoppingBag, Plane, Landmark, ArrowRight } from "lucide-react";

interface PropertyDetailProps {
  propertyId: string;
  onNavigate: (page: string) => void;
}

export default function PropertyDetail({ propertyId, onNavigate }: PropertyDetailProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "three-d" | "floorplan">("three-d");
  const [activeFloor, setActiveFloor] = useState<"ground" | "upper">("ground");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [booked, setBooked] = useState(false);

  // Find active property or fallback to first
  const property: Property = PROPERTIES.find((p) => p.id === propertyId) || PROPERTIES[0];

  const isWishlisted = wishlist.includes(property.id);

  const toggleWishlist = () => {
    setWishlist((prev) =>
      prev.includes(property.id) ? prev.filter((item) => item !== property.id) : [...prev, property.id]
    );
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="relative w-full bg-[#0B0B0B] pt-28 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">
        
        {/* Navigation Breadcrumb & Back CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4">
          <button
            onClick={() => onNavigate("properties")}
            className="flex items-center gap-2 text-xs font-bold text-gold hover:text-white uppercase tracking-widest transition-colors group"
          >
            <Compass size={14} className="group-hover:rotate-45 transition-transform" />
            <span>Back to Curated Registry</span>
          </button>

          {/* Social actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleWishlist}
              className={`px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                isWishlisted
                  ? "bg-gold/10 border-gold text-gold"
                  : "bg-white/5 border-white/10 text-white hover:border-gold hover:text-gold"
              }`}
            >
              <Heart size={13} fill={isWishlisted ? "#D4AF37" : "transparent"} />
              <span>{isWishlisted ? "In Wishlist" : "Wishlist"}</span>
            </button>

            <button
              onClick={() => alert("Dossier share link copied to secure clipboard.")}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <Share2 size={13} />
              <span>Share Dossier</span>
            </button>
          </div>
        </div>

        {/* Title Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-gold/10 border border-gold/20 text-gold text-[9px] font-extrabold uppercase tracking-wider rounded-lg">
                {property.status}
              </span>
              <span className="text-xs text-[#8E8E93] font-semibold uppercase tracking-widest">
                License Reg: {property.details.tax === "0% (Tax Free)" ? "DXB-994" : "LA-721"}
              </span>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 text-xs text-white/60">
              <MapPin size={14} className="text-gold" />
              <span>{property.location}</span>
            </div>
          </div>

          <div className="lg:col-span-4 lg:text-right flex flex-col justify-end h-full">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#8E8E93]">
              Asking Sovereign Valuation
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-syne-luxury text-gold-pure-gradient mt-1">
              {property.priceFormatted}
            </span>
            <span className="text-[10px] text-white/30 block mt-0.5">
              Subject to verified offshore trust account checks
            </span>
          </div>
        </div>

        {/* Big Specs Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#101010] rounded-3xl border border-white/5 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold">
              <Bed size={18} />
            </div>
            <div>
              <span className="text-[9px] text-[#8E8E93] font-bold uppercase block">Bedrooms</span>
              <span className="text-base font-bold text-white font-syne-luxury">{property.bedrooms} Chambers</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold">
              <Bath size={18} />
            </div>
            <div>
              <span className="text-[9px] text-[#8E8E93] font-bold uppercase block">Bathrooms</span>
              <span className="text-base font-bold text-white font-syne-luxury">{property.bathrooms} Salons</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold">
              <Car size={18} />
            </div>
            <div>
              <span className="text-[9px] text-[#8E8E93] font-bold uppercase block">Private Garage</span>
              <span className="text-base font-bold text-white font-syne-luxury">{property.garage} Vehicles</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold">
              <Maximize size={18} />
            </div>
            <div>
              <span className="text-[9px] text-[#8E8E93] font-bold uppercase block">Sovereign Area</span>
              <span className="text-base font-bold text-white font-syne-luxury">{property.area}</span>
            </div>
          </div>
        </div>

        {/* View Swapper Controls */}
        <div className="flex justify-center border-b border-white/5 pb-2">
          <div className="flex items-center gap-1.5 glass-panel p-1.5 rounded-full">
            {[
              { id: "three-d", label: "Interactive 3D Studio" },
              { id: "overview", label: "Media Dossier Gallery" },
              { id: "floorplan", label: "Architectural Blueprint" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === tab.id
                    ? "bg-gold text-black shadow-lg shadow-gold/25"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Tab */}
        <div className="w-full">
          {activeTab === "three-d" && (
            <div className="animate-in fade-in duration-300">
              <ThreeDHouseViewer propertyName={property.title} />
            </div>
          )}

          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 animate-in fade-in duration-300">
              {/* Asymmetric Gallery */}
              <div className="md:col-span-8 aspect-video rounded-3xl overflow-hidden border border-white/10">
                <img
                  src={property.exteriorImage}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-4 flex flex-col gap-4">
                <div className="flex-1 aspect-video rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src={property.interiorImage}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 aspect-video rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src={property.galleryImages[2] || property.exteriorImage}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "floorplan" && (
            <div className="glass-panel p-6 md:p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center border border-white/5 animate-in fade-in duration-300">
              {/* Blueprint drawing */}
              <div className="w-full md:w-1/2 aspect-square max-w-[400px] border border-[#D4AF37]/20 rounded-2xl relative bg-[#0e0e13] p-6 flex flex-col justify-between">
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(#D4AF37 1.5px, transparent 1px)",
                    backgroundSize: "24px 24px"
                  }}
                />

                <div className="flex items-center justify-between text-xs text-gold font-bold">
                  <span>SCALE: 1:125</span>
                  <span>PLOT NO: {property.id === "prop-1" ? "A-449" : "X-72"}</span>
                </div>

                {/* SVG Blueprint Mock representation */}
                <svg className="w-full h-44 text-[#D4AF37] stroke-current" viewBox="0 0 100 100" fill="none">
                  {/* Outer Walls */}
                  <rect x="10" y="10" width="80" height="80" strokeWidth="2" strokeDasharray="2 2" />
                  {/* Inner Rooms divisions based on selected floor */}
                  {activeFloor === "ground" ? (
                    <>
                      {/* Living room area */}
                      <rect x="15" y="15" width="40" height="35" strokeWidth="1" />
                      <text x="20" y="30" fill="#D4AF37" fontSize="5" fontWeight="bold">LIVING SALON (550 SF)</text>
                      {/* Kitchen / Dining */}
                      <rect x="55" y="15" width="30" height="35" strokeWidth="1" />
                      <text x="60" y="30" fill="#D4AF37" fontSize="5" fontWeight="bold">CHEF KITCHEN</text>
                      {/* Foyer & Bath */}
                      <rect x="15" y="50" width="30" height="35" strokeWidth="1" />
                      <text x="20" y="65" fill="#D4AF37" fontSize="5" fontWeight="bold">VIP FOYER</text>
                    </>
                  ) : (
                    <>
                      {/* Master bed suite */}
                      <rect x="15" y="15" width="50" height="50" strokeWidth="1.5" />
                      <text x="20" y="35" fill="#D4AF37" fontSize="5" fontWeight="bold">MASTER SUITE (1,200 SF)</text>
                      {/* Terraces */}
                      <rect x="65" y="15" width="20" height="50" strokeWidth="1" strokeDasharray="3 3" />
                      <text x="68" y="35" fill="#D4AF37" fontSize="5" fontWeight="bold">TERRACE</text>
                    </>
                  )}
                  {/* Water feature pool */}
                  <rect x="10" y="80" width="80" height="10" fill="rgba(212,175,55,0.05)" strokeWidth="1" />
                  <text x="40" y="86" fill="#D4AF37" fontSize="4" fontWeight="bold">REFLECTING SPA POOL</text>
                </svg>

                <div className="flex items-center justify-between text-[9px] text-[#8E8E93] font-bold">
                  <span>© LUXESTATE ARCHITECTS INC</span>
                  <span>MONACO - DUBAI</span>
                </div>
              </div>

              {/* Selector and specifications details */}
              <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                    Select Floor Blueprint:
                  </span>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => setActiveFloor("ground")}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                        activeFloor === "ground"
                          ? "bg-gold text-black shadow-lg"
                          : "bg-white/5 hover:bg-white/10 text-white"
                      }`}
                    >
                      Ground Floor Plan
                    </button>
                    <button
                      onClick={() => setActiveFloor("upper")}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                        activeFloor === "upper"
                          ? "bg-gold text-black shadow-lg"
                          : "bg-white/5 hover:bg-white/10 text-white"
                      }`}
                    >
                      Upper Penthouse Suite
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-xs font-bold uppercase text-[#8E8E93] tracking-wider">
                    Floor plan specifications:
                  </h4>
                  <ul className="flex flex-col gap-2.5 text-xs text-white/80">
                    <li className="flex items-center gap-2">
                      <Check size={12} className="text-gold" />
                      <span>Ceiling heights: 4.5 meters (14.7 feet) floor-to-ceiling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={12} className="text-gold" />
                      <span>Complete triple-glazed glass insulation blocks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={12} className="text-gold" />
                      <span>Integrated floor climate and radiant heating columns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Detailed Grid: Description & Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Detailed Content (Left side) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-syne-luxury text-lg font-bold uppercase tracking-wider text-white">
                Historical & Design Dossier
              </h3>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            {/* Micro Details (HOA, Tax, Views) */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
              <div>
                <span className="text-[10px] text-[#8E8E93] font-bold uppercase tracking-wider">Year Completed</span>
                <p className="text-xs font-bold text-white mt-0.5">{property.details.yearBuilt}</p>
              </div>
              <div>
                <span className="text-[10px] text-[#8E8E93] font-bold uppercase tracking-wider">Estimated Association Retainer</span>
                <p className="text-xs font-bold text-white mt-0.5">{property.details.hoa}</p>
              </div>
              <div>
                <span className="text-[10px] text-[#8E8E93] font-bold uppercase tracking-wider">Sovereign Property Tax</span>
                <p className="text-xs font-bold text-white mt-0.5">{property.details.tax}</p>
              </div>
              <div>
                <span className="text-[10px] text-[#8E8E93] font-bold uppercase tracking-wider">Featured Panoramas</span>
                <p className="text-xs font-bold text-white mt-0.5">{property.details.views.join(", ")}</p>
              </div>
            </div>

            {/* Luxury Amenities */}
            <div className="flex flex-col gap-3 text-left">
              <h4 className="text-xs font-bold uppercase text-[#8E8E93] tracking-wider">
                Signature Amenities & Asset Integrations:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {property.details.amenities.map((am) => (
                  <div key={am} className="flex items-center gap-2 text-xs text-white/80 font-medium">
                    <ShieldCheck size={14} className="text-[#D4AF37] shrink-0" />
                    <span>{am}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proximity checks logs */}
            <div className="flex flex-col gap-4 text-left mt-2">
              <h4 className="text-xs font-bold uppercase text-[#8E8E93] tracking-wider">
                Elite Proximity Radar Logs:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.details.nearbyPlaces.map((pl, idx) => {
                  let CatIcon = School;
                  if (pl.category === "airport") CatIcon = Plane;
                  if (pl.category === "hospital") CatIcon = ShieldPlus;
                  if (pl.category === "shopping") CatIcon = ShoppingBag;
                  if (pl.category === "restaurant") CatIcon = Landmark;

                  return (
                    <div key={idx} className="p-3.5 bg-[#101010]/60 rounded-xl border border-white/5 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gold shrink-0">
                          <CatIcon size={14} />
                        </div>
                        <span className="font-semibold text-white truncate max-w-[140px]">{pl.name}</span>
                      </div>
                      <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-[#8E8E93] text-[10px] font-bold shrink-0">
                        {pl.distance} away
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Secure Booking Appointment Card (Right side) */}
          <div className="lg:col-span-5">
            <div className="glass-panel-heavy p-6 md:p-8 rounded-3xl border border-[#D4AF37]/20 shadow-2xl relative sticky top-28">
              {!booked ? (
                <form onSubmit={handleBookingSubmit} className="flex flex-col gap-5">
                  <div className="border-b border-white/5 pb-3">
                    <span className="text-[9px] uppercase font-bold text-gold tracking-widest block font-syne-luxury">
                      Private Schedule Desk
                    </span>
                    <h3 className="font-serif-luxury text-xl font-light text-white mt-1">
                      Request Physical Escort
                    </h3>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="E.g. Sir Rupert Kensington"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#171717] border border-white/5 focus:border-gold focus:outline-none text-xs text-white"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Private Contact</label>
                      <input
                        type="tel"
                        required
                        placeholder="E.g. +1 (310) 555-0190"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#171717] border border-white/5 focus:border-gold focus:outline-none text-xs text-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Date</label>
                        <input
                          type="date"
                          required
                          className="w-full px-4 py-2.5 rounded-xl bg-[#171717] border border-white/5 focus:border-gold focus:outline-none text-xs text-white"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Time Slot</label>
                        <input
                          type="time"
                          required
                          className="w-full px-4 py-2.5 rounded-xl bg-[#171717] border border-white/5 focus:border-gold focus:outline-none text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gold hover:bg-gold-hover text-black font-bold uppercase text-xs tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Request Private Escort</span>
                    <ArrowRight size={13} />
                  </button>

                  <div className="flex items-center gap-1.5 text-[9px] text-white/30 font-medium justify-center mt-1">
                    <ShieldCheck size={11} className="text-[#51d382]" />
                    <span>Requires 256-Bit Corporate verification checks</span>
                  </div>
                </form>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-[#51d382]/10 border border-[#51d382]/30 flex items-center justify-center text-[#51d382]">
                    <Check size={24} />
                  </div>

                  <div className="flex flex-col gap-1 max-w-xs">
                    <h3 className="font-syne-luxury text-base font-bold uppercase tracking-wider text-white">
                      Request Dispatch Secure
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Your schedule block is secured. Our executive coordinator will reach out on your telephone number within 30 minutes to confirm aviation/chauffeur specs.
                    </p>
                  </div>

                  <button
                    onClick={() => setBooked(false)}
                    className="px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-white font-bold uppercase tracking-wider transition-all mt-2"
                  >
                    Reschedule Slot
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
