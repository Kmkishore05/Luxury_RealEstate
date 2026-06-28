import { useState } from "react";
import { PROPERTIES, Property } from "../data/properties";
import { MapPin, School, Landmark, Compass, ShieldPlus, ShoppingBag, Plane, ExternalLink, X } from "lucide-react";

interface InteractiveMapProps {
  onSelectProperty: (id: string) => void;
  onNavigate: (page: string) => void;
}

export default function InteractiveMap({ onSelectProperty, onNavigate }: InteractiveMapProps) {
  const [selectedArea, setSelectedArea] = useState<"all" | "dubai" | "la" | "monaco">("all");
  const [activeCategory, setActiveCategory] = useState<"all" | "school" | "hospital" | "restaurant" | "shopping" | "airport">("all");
  const [selectedPin, setSelectedPin] = useState<Property | null>(null);

  // Filter properties based on area selection
  const filteredProperties = PROPERTIES.filter((prop) => {
    if (selectedArea === "all") return true;
    if (selectedArea === "dubai") return prop.city === "Dubai";
    if (selectedArea === "la") return prop.city === "Los Angeles";
    if (selectedArea === "monaco") return prop.city === "Monte Carlo";
    return true;
  });

  const handlePinClick = (prop: Property) => {
    setSelectedPin(prop);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Filters Toolbar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 glass-panel p-4 rounded-2xl">
        {/* District Filter */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] font-syne-luxury mr-2">
            Select District:
          </span>
          {[
            { id: "all", label: "Global Masterplan" },
            { id: "dubai", label: "Palm Jumeirah" },
            { id: "la", label: "Bel Air & Beverly Hills" },
            { id: "monaco", label: "Monte Carlo Cliffs" },
          ].map((area) => (
            <button
              key={area.id}
              onClick={() => {
                setSelectedArea(area.id as any);
                setSelectedPin(null);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all ${
                selectedArea === area.id
                  ? "bg-[#D4AF37] text-[#0B0B0B]"
                  : "text-[#F5F5F5]/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {area.label}
            </button>
          ))}
        </div>

        {/* Hotspots Filter */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] font-syne-luxury mr-2">
            Show Near:
          </span>
          {[
            { id: "all", label: "All Pins", icon: MapPin },
            { id: "school", label: "Elite Schools", icon: School },
            { id: "hospital", label: "Premium Health", icon: ShieldPlus },
            { id: "shopping", label: "Luxury Shopping", icon: ShoppingBag },
            { id: "airport", label: "Private Airports", icon: Plane },
          ].map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                  activeCategory === cat.id
                    ? "bg-white/15 border border-[#D4AF37]/50 text-gold"
                    : "text-[#F5F5F5]/60 border border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon size={13} />
                <span className="hidden sm:inline">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Map Main Canvas */}
      <div className="relative w-full h-[550px] md:h-[600px] rounded-3xl overflow-hidden border border-white/5 bg-[#0e0e13]">
        {/* Deep Luxury Grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,rgba(11,11,11,0.95)_90%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Interactive Custom Styled SVG Map (Dubai Palm/Monaco shore style) */}
        <div className="absolute inset-0 flex items-center justify-center p-12 select-none">
          <svg
            className="w-full h-full max-w-[900px] max-h-[500px] text-[#22222a]"
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Styled Shorelines / Islands */}
            <path
              d="M100 200 C300 250, 450 150, 600 300 C750 450, 850 400, 950 500"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeDasharray="4 8"
              opacity="0.3"
            />
            {/* Palm Jumeirah Archipelago Mock Vector */}
            <g opacity={selectedArea === "all" || selectedArea === "dubai" ? "0.15" : "0.03"} className="transition-all">
              <path
                d="M500 550 L500 400 C500 300, 400 310, 350 250 M500 400 C500 300, 600 310, 650 250 M500 450 C500 350, 380 360, 320 310 M500 450 C500 350, 620 360, 680 310 M500 500 C400 520, 300 480, 280 430 C260 380, 310 250, 500 200 C690 250, 740 380, 720 430 C700 480, 600 520, 500 500"
                stroke="#D4AF37"
                strokeWidth="4"
              />
              <text x="500" y="580" fill="#D4AF37" textAnchor="middle" fontSize="12" className="tracking-widest uppercase font-semibold">
                PALM JUMEIRAH archipelago
              </text>
            </g>

            {/* Monaco cliffside roads vector */}
            <g opacity={selectedArea === "all" || selectedArea === "monaco" ? "0.12" : "0.03"} className="transition-all">
              <path d="M50 80 Q180 120, 340 60 T600 110 T890 50" stroke="#D4AF37" strokeWidth="2.5" />
              <path d="M70 140 Q250 180, 410 130 T750 170" stroke="#fff" strokeWidth="1" opacity="0.3" />
              <text x="80" y="60" fill="#F5F5F5" fontSize="11" className="tracking-wider uppercase opacity-40">
                Avenue Princesse Grace
              </text>
            </g>

            {/* Los Angeles / Beverly Hills grid lines */}
            <g opacity={selectedArea === "all" || selectedArea === "la" ? "0.1" : "0.02"} className="transition-all">
              <line x1="100" y1="50" x2="300" y2="450" stroke="#fff" strokeWidth="1" />
              <line x1="200" y1="40" x2="400" y2="440" stroke="#fff" strokeWidth="1" />
              <line x1="300" y1="30" x2="500" y2="430" stroke="#fff" strokeWidth="1" />
              <line x1="50" y1="200" x2="600" y2="200" stroke="#fff" strokeWidth="1" />
              <line x1="100" y1="350" x2="700" y2="350" stroke="#fff" strokeWidth="1" />
              <text x="150" y="190" fill="#fff" fontSize="10" className="tracking-wider uppercase opacity-30">
                Sunset Blvd
              </text>
            </g>

            {/* Compass rose symbol */}
            <g transform="translate(100, 500)" opacity="0.25">
              <circle cx="0" cy="0" r="30" stroke="#D4AF37" strokeWidth="1" fill="none" />
              <line x1="0" y1="-40" x2="0" y2="40" stroke="#D4AF37" strokeWidth="1" />
              <line x1="-40" y1="0" x2="40" y2="0" stroke="#D4AF37" strokeWidth="1" />
              <polygon points="0,-35 4,-5 0,0" fill="#D4AF37" />
              <polygon points="0,-35 -4,-5 0,0" fill="#fff" opacity="0.7" />
              <text x="-4" y="-45" fill="#D4AF37" fontSize="11" fontWeight="bold">N</text>
            </g>
          </svg>
        </div>

        {/* Dynamic Interactive Hotspot Pins */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Nearby places markers depending on activeCategory */}
          {filteredProperties.map((prop, idx) => {
            // Calculate a stylized coordinates system mapped to 0-100% of our canvas
            // We use simple deterministic mapping based on idx
            const topPercent = 25 + (idx * 11) % 55;
            const leftPercent = 20 + (idx * 14) % 65;

            // Gather matched hotspots for this category
            const matchedHotspots = prop.details.nearbyPlaces.filter(
              (place) => activeCategory === "all" || place.category === activeCategory
            );

            return (
              <div
                key={prop.id}
                className="absolute pointer-events-auto transition-all duration-500"
                style={{ top: `${topPercent}%`, left: `${leftPercent}%` }}
              >
                {/* Main Property Pin */}
                <button
                  onClick={() => handlePinClick(prop)}
                  className={`group relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all ${
                    selectedPin?.id === prop.id ? "scale-125 z-30" : "hover:scale-115 z-20"
                  }`}
                >
                  {/* Outer breathing golden ring */}
                  <div className="absolute -inset-2.5 rounded-full bg-[#D4AF37]/15 animate-ping duration-1000" />
                  
                  {/* Middle interactive ring */}
                  <div className="absolute -inset-1.5 rounded-full bg-black/60 border border-[#D4AF37]/40" />

                  {/* Inner pin button */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    selectedPin?.id === prop.id
                      ? "bg-[#D4AF37] text-[#0B0B0B]"
                      : "bg-[#101010] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0B]"
                  }`}>
                    <Compass size={14} className={selectedPin?.id === prop.id ? "animate-spin" : ""} />
                  </div>

                  {/* Pop-up title tag */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all bg-black/85 border border-[#D4AF37]/35 px-2.5 py-1 rounded-lg shadow-xl flex flex-col items-center gap-0.5 min-w-[140px] z-50">
                    <span className="text-[9px] font-bold tracking-widest text-[#D4AF37] uppercase">
                      {prop.type}
                    </span>
                    <span className="text-[10px] text-white font-medium whitespace-nowrap truncate max-w-[120px]">
                      {prop.title}
                    </span>
                    <span className="text-[10px] text-white/70 font-semibold">{prop.priceFormatted}</span>
                  </div>
                </button>

                {/* Hotspot sub-pins surrounding the property */}
                {matchedHotspots.map((h, hIdx) => {
                  // Scatter hotspots slightly around the main property pin
                  const angle = (hIdx * (2 * Math.PI)) / Math.max(1, matchedHotspots.length);
                  const radius = 55; // pixels
                  const hX = Math.cos(angle) * radius;
                  const hY = Math.sin(angle) * radius;

                  // Hotspot Icon picker
                  let HotspotIcon = Landmark;
                  if (h.category === "school") HotspotIcon = School;
                  if (h.category === "airport") HotspotIcon = Plane;
                  if (h.category === "shopping") HotspotIcon = ShoppingBag;

                  return (
                    <div
                      key={`${prop.id}-hotspot-${hIdx}`}
                      className="absolute z-10 transition-all duration-700"
                      style={{
                        transform: `translate(${hX - 16}px, ${hY - 16}px)`,
                      }}
                    >
                      <div className="group/hotspot relative flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                          <HotspotIcon size={11} />
                        </div>

                        {/* Hotspot details panel on hover */}
                        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover/hotspot:opacity-100 pointer-events-none transition-all duration-250 bg-black/90 border border-white/10 px-2.5 py-1.5 rounded-lg flex flex-col whitespace-nowrap z-50 shadow-2xl">
                          <span className="text-[9px] uppercase tracking-wider text-white/50 font-bold">
                            {h.category} • {h.distance} away
                          </span>
                          <span className="text-[11px] text-[#F5F5F5] font-semibold">{h.name}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Selected Pin Pop-Up card (Bottom Right or Overlaid) */}
        {selectedPin && (
          <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[380px] glass-panel p-4 rounded-2xl z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Close button */}
            <button
              onClick={() => setSelectedPin(null)}
              className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center bg-black/40 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white transition-all"
            >
              <X size={13} />
            </button>

            {/* Content */}
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-white/10">
                <img
                  src={selectedPin.exteriorImage}
                  alt={selectedPin.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="px-2 py-0.5 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 text-[8px] font-bold uppercase tracking-wider rounded">
                      {selectedPin.type}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#F5F5F5]/40 font-bold">
                      {selectedPin.city}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold font-syne-luxury text-white truncate pr-6">
                    {selectedPin.title}
                  </h4>
                  <p className="text-xs text-white/60 truncate mt-0.5">
                    {selectedPin.location}
                  </p>
                </div>

                <div className="flex items-end justify-between gap-2 mt-2">
                  <span className="text-sm font-bold text-[#D4AF37] font-syne-luxury">
                    {selectedPin.priceFormatted}
                  </span>
                  
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => {
                        onSelectProperty(selectedPin.id);
                        onNavigate("property-detail");
                      }}
                      className="px-2.5 py-1.5 bg-[#D4AF37] hover:bg-gold-hover text-black font-bold text-[10px] rounded uppercase tracking-wider flex items-center gap-1 transition-all"
                    >
                      <span>Explore</span>
                      <ExternalLink size={10} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Map Legend */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 border-t border-white/5 pt-4">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#D4AF37] flex items-center justify-center text-black text-[7px] font-bold">
            <Compass size={8} />
          </div>
          <span className="font-semibold text-white/70">LUXESTATE Properties</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/60">
            <School size={8} />
          </div>
          <span>Elite Educational Institutions</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/60">
            <ShieldPlus size={8} />
          </div>
          <span>Premium Healthcare Centers</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/60">
            <ShoppingBag size={8} />
          </div>
          <span>Haute Luxury Shopping</span>
        </div>
      </div>
    </div>
  );
}
