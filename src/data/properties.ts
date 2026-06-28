export interface Property {
  id: string;
  title: string;
  type: "Mansion" | "Villa" | "Penthouse" | "Chalet" | "Private Island";
  price: number;
  priceFormatted: string;
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  garage: number;
  area: string;
  exteriorImage: string;
  interiorImage: string;
  galleryImages: string[];
  description: string;
  tags: string[];
  status: "Available" | "Sold" | "Exclusive Listing";
  virtualTourUrl: string;
  coordinates: { lat: number; lng: number };
  floorPlanUrl: string;
  details: {
    yearBuilt: string;
    hoa: string;
    tax: string;
    views: string[];
    amenities: string[];
    nearbyPlaces: { name: string; distance: string; category: "school" | "hospital" | "restaurant" | "shopping" | "airport" }[];
  };
}

export const PROPERTIES: Property[] = [
  {
    id: "prop-1",
    title: "The One & Only Peninsula",
    type: "Mansion",
    price: 48000000,
    priceFormatted: "$48,000,000",
    location: "Palm Jumeirah, Dubai, UAE",
    city: "Dubai",
    bedrooms: 7,
    bathrooms: 9,
    garage: 8,
    area: "18,450 sq ft",
    exteriorImage: "https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    interiorImage: "https://images.pexels.com/photos/7031712/pexels-photo-7031712.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    galleryImages: [
      "https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7031712/pexels-photo-7031712.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8143671/pexels-photo-8143671.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7614604/pexels-photo-7614604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    description: "An architectural masterpiece rising from the crystal blue waters of Palm Jumeirah. This extraordinary signature estate combines custom travertine marble facades, floor-to-ceiling glass paneling, a private infinity pool that merges with the Arabian Gulf, and private beach access. Tailored for those who command the absolute peak of sophisticated coastal living.",
    tags: ["Beachfront", "Infinity Pool", "Private Dock", "Smart Home"],
    status: "Exclusive Listing",
    virtualTourUrl: "https://my.matterport.com/show/?m=luxestate-peninsula",
    coordinates: { lat: 25.1124, lng: 55.1390 },
    floorPlanUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    details: {
      yearBuilt: "2024",
      hoa: "$1,200/mo",
      tax: "0% (Tax Free)",
      views: ["Ocean Front", "Dubai Skyline", "Sunset View"],
      amenities: ["Private Cinema", "Champagne Cellar", "Wellness Spa", "Chef's Kitchen", "Helipad Access", "Outdoor BBQ Oasis"],
      nearbyPlaces: [
        { name: "Dubai International Academy", distance: "12 min", category: "school" },
        { name: "King's College Hospital Dubai", distance: "15 min", category: "hospital" },
        { name: "Ossiano Fine Dining", distance: "3 min", category: "restaurant" },
        { name: "The Nakheel Mall", distance: "5 min", category: "shopping" },
        { name: "Dubai Airport DXB", distance: "28 min", category: "airport" }
      ]
    }
  },
  {
    id: "prop-2",
    title: "Bel Air Elysium Estate",
    type: "Villa",
    price: 62500000,
    priceFormatted: "$62,500,000",
    location: "Bel Air, Los Angeles, California",
    city: "Los Angeles",
    bedrooms: 8,
    bathrooms: 11,
    garage: 12,
    area: "21,300 sq ft",
    exteriorImage: "https://images.pexels.com/photos/8143683/pexels-photo-8143683.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    interiorImage: "https://images.pexels.com/photos/7614604/pexels-photo-7614604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    galleryImages: [
      "https://images.pexels.com/photos/8143683/pexels-photo-8143683.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7614604/pexels-photo-7614604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/6957104/pexels-photo-6957104.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8082324/pexels-photo-8082324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    description: "Suspended above the clouds with majestic 360-degree vistas of the Los Angeles basin and Catalina Island, Elysium is a tour-de-force of contemporary design. Conceived by award-winning luxury architects, it is complete with a 250-foot glass-edge swimming pool, professional-grade car gallery, multi-tier water feature garden, and a private wellness retreat.",
    tags: ["Panoramic Views", "Auto Gallery", "Wellness Center", "Gated"],
    status: "Available",
    virtualTourUrl: "https://my.matterport.com/show/?m=luxestate-elysium",
    coordinates: { lat: 34.0837, lng: -118.4417 },
    floorPlanUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    details: {
      yearBuilt: "2023",
      hoa: "$1,850/mo",
      tax: "$780,000/yr",
      views: ["City Lights", "Pacific Ocean", "Canyons"],
      amenities: ["20-Seat Theater", "Sauna & Steam Bath", "Billiard Room", "Yoga Pavilion", "Commercial Kitchen", "Wine Vault"],
      nearbyPlaces: [
        { name: "Harvard-Westlake School", distance: "9 min", category: "school" },
        { name: "UCLA Health Medical Center", distance: "8 min", category: "hospital" },
        { name: "Spago Beverly Hills", distance: "11 min", category: "restaurant" },
        { name: "Rodeo Drive", distance: "10 min", category: "shopping" },
        { name: "LAX Airport", distance: "24 min", category: "airport" }
      ]
    }
  },
  {
    id: "prop-3",
    title: "St. Moritz Ice Palace",
    type: "Chalet",
    price: 35000000,
    priceFormatted: "$35,000,000",
    location: "Via Serlas, St. Moritz, Switzerland",
    city: "St. Moritz",
    bedrooms: 5,
    bathrooms: 6,
    garage: 4,
    area: "9,800 sq ft",
    exteriorImage: "https://images.pexels.com/photos/17627997/pexels-photo-17627997.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    interiorImage: "https://images.pexels.com/photos/8082324/pexels-photo-8082324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    galleryImages: [
      "https://images.pexels.com/photos/17627997/pexels-photo-17627997.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8082324/pexels-photo-8082324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8146154/pexels-photo-8146154.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    description: "Nestled high up on the exclusive slopes of St. Moritz, the Ice Palace is a symphony of local alpine timber, ancient stones, and absolute modern refinement. An expansive glass facade floods the open-concept living spaces with dramatic alpine views, while the luxury heated indoor pool and stone hearth fireplace offer unmatched cozy opulence.",
    tags: ["Ski-In/Ski-Out", "Alpine Mountain", "Indoor Pool", "Fireplace"],
    status: "Available",
    virtualTourUrl: "https://my.matterport.com/show/?m=luxestate-chalet",
    coordinates: { lat: 46.4908, lng: 9.8355 },
    floorPlanUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    details: {
      yearBuilt: "2021",
      hoa: "$950/mo",
      tax: "$145,000/yr",
      views: ["Snowcapped Alps", "Lake St. Moritz", "Village Lights"],
      amenities: ["Heated Ski Mudroom", "Indoor Stone Pool", "Finnish Sauna", "Game Room", "Outdoor Hot Tub", "Private Sommelier Cellar"],
      nearbyPlaces: [
        { name: "Lyceum Alpinum Zuoz", distance: "18 min", category: "school" },
        { name: "Klinik Gut Hospital", distance: "6 min", category: "hospital" },
        { name: "Da Vittorio", distance: "4 min", category: "restaurant" },
        { name: "Via Serlas Luxury Retail", distance: "2 min", category: "shopping" },
        { name: "Engadin Airport (Private)", distance: "10 min", category: "airport" }
      ]
    }
  },
  {
    id: "prop-4",
    title: "Monaco Cliffside Haven",
    type: "Penthouse",
    price: 74000000,
    priceFormatted: "$74,000,000",
    location: "Avenue Princesse Grace, Monte Carlo, Monaco",
    city: "Monte Carlo",
    bedrooms: 6,
    bathrooms: 8,
    garage: 6,
    area: "14,500 sq ft",
    exteriorImage: "https://images.pexels.com/photos/8143677/pexels-photo-8143677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    interiorImage: "https://images.pexels.com/photos/8146154/pexels-photo-8146154.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    galleryImages: [
      "https://images.pexels.com/photos/8143677/pexels-photo-8143677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8146154/pexels-photo-8146154.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7031712/pexels-photo-7031712.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    description: "The crown jewel of Monaco's elite shoreline. Positioned on a sky-high level of Avenue Princesse Grace, this mega-penthouse defines ultra-exclusive lifestyle with 270-degree Mediterranean yacht harbor views, an elite master suite occupying its own half-floor, private rooftop helipad access, and custom Italian marble craftsmanship.",
    tags: ["Yacht Harbor Views", "Rooftop Deck", "Private Spa", "Helipad Access"],
    status: "Exclusive Listing",
    virtualTourUrl: "https://my.matterport.com/show/?m=luxestate-monaco",
    coordinates: { lat: 43.7384, lng: 7.4246 },
    floorPlanUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    details: {
      yearBuilt: "2025",
      hoa: "$3,400/mo",
      tax: "0% (Tax Free)",
      views: ["Mediterranean Sea", "Monaco Harbor", "French Riviera Coast"],
      amenities: ["Private Lift", "Sky Garden Pool", "Caviar Tasting Lounge", "Concierge Desk 24/7", "Personal Bodyguard Suite", "Cigar Salon"],
      nearbyPlaces: [
        { name: "International School of Monaco", distance: "4 min", category: "school" },
        { name: "Princess Grace Hospital", distance: "8 min", category: "hospital" },
        { name: "Alain Ducasse at Hôtel de Paris", distance: "3 min", category: "restaurant" },
        { name: "Casino Square Luxury Shopping", distance: "2 min", category: "shopping" },
        { name: "Nice Côte d'Azur Airport", distance: "25 min", category: "airport" }
      ]
    }
  },
  {
    id: "prop-5",
    title: "Biscayne Bay Sanctuary",
    type: "Mansion",
    price: 29000000,
    priceFormatted: "$29,000,000",
    location: "Key Biscayne, Miami, Florida",
    city: "Miami",
    bedrooms: 6,
    bathrooms: 7,
    garage: 5,
    area: "12,200 sq ft",
    exteriorImage: "https://images.pexels.com/photos/7045701/pexels-photo-7045701.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    interiorImage: "https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    galleryImages: [
      "https://images.pexels.com/photos/7045701/pexels-photo-7045701.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8143671/pexels-photo-8143671.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/6957104/pexels-photo-6957104.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    description: "An absolute coastal masterpiece celebrating contemporary architectural perfection. Set on a double lot in prestigious Key Biscayne, this modern marvel frames dramatic Biscayne Bay scenery through soaring glass curtain walls. Includes a bespoke 100-foot superyacht slip, glass-walled pool, and tropical master suite retreat.",
    tags: ["Superyacht Slip", "Waterfront", "Pool", "Beach Access"],
    status: "Available",
    virtualTourUrl: "https://my.matterport.com/show/?m=luxestate-biscayne",
    coordinates: { lat: 25.6943, lng: -80.1628 },
    floorPlanUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    details: {
      yearBuilt: "2023",
      hoa: "$800/mo",
      tax: "$210,000/yr",
      views: ["Biscayne Bay Skyline", "Sunsets", "Intracoastal Waterway"],
      amenities: ["Jet-Ski Pier", "Glass Pool with Waterfall", "Outdoor Firepit Lounge", "Custom Saltwater Aquarium", "Rooftop Solarium", "Home Spa"],
      nearbyPlaces: [
        { name: "Ransom Everglades School", distance: "11 min", category: "school" },
        { name: "Mercy Hospital Miami", distance: "14 min", category: "hospital" },
        { name: "L'Atelier de Joël Robuchon", distance: "12 min", category: "restaurant" },
        { name: "Miami Design District", distance: "15 min", category: "shopping" },
        { name: "Miami International Airport", distance: "20 min", category: "airport" }
      ]
    }
  },
  {
    id: "prop-6",
    title: "Amalfi Vista Estate",
    type: "Villa",
    price: 41200000,
    priceFormatted: "$41,200,000",
    location: "Positano, Amalfi Coast, Italy",
    city: "Amalfi Coast",
    bedrooms: 6,
    bathrooms: 6,
    garage: 3,
    area: "11,500 sq ft",
    exteriorImage: "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    interiorImage: "https://images.pexels.com/photos/6957104/pexels-photo-6957104.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    galleryImages: [
      "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/6957104/pexels-photo-6957104.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8143677/pexels-photo-8143677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8082324/pexels-photo-8082324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    description: "Carved gracefully into the steep cliffside of Positano, Amalfi Vista Estate is a breathtaking luxury sanctum. Blending Italian Renaissance heritage with sleek modern luxury, it features ancient lemon-grove terraces, private funicular railway, cascading marble pools, and wide open terraces looking directly over the Tyrrhenian Sea.",
    tags: ["Historic Villa", "Sea Views", "Terraces", "Private Elevator"],
    status: "Available",
    virtualTourUrl: "https://my.matterport.com/show/?m=luxestate-amalfi",
    coordinates: { lat: 40.6281, lng: 14.4850 },
    floorPlanUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    details: {
      yearBuilt: "1890 (Fully Reconstructed 2024)",
      hoa: "$500/mo",
      tax: "$95,000/yr",
      views: ["Tyrrhenian Sea", "Positano Village Cliffs", "Capri Island Horizon"],
      amenities: ["Private Cliff Funicular", "Ancient Lemon Grove Walk", "Stone Heated Grotto Pool", "Helipad Access", "Professional Wine Tasting Room", "Pizza Oven Terrace"],
      nearbyPlaces: [
        { name: "Scuola Internazionale Amalfi", distance: "20 min", category: "school" },
        { name: "Ospedale Costa d'Amalfi", distance: "15 min", category: "hospital" },
        { name: "Zass Restaurant (Michelin Star)", distance: "5 min", category: "restaurant" },
        { name: "Positano Boutique District", distance: "4 min", category: "shopping" },
        { name: "Naples International Airport", distance: "65 min", category: "airport" }
      ]
    }
  }
];

export interface Agent {
  id: string;
  name: string;
  role: string;
  experience: string;
  propertiesSold: string;
  languages: string[];
  rating: number;
  image: string;
  email: string;
  phone: string;
  quote: string;
}

export const AGENTS: Agent[] = [
  {
    id: "agent-1",
    name: "Alexander Stirling",
    role: "Senior Partner & Global Advisor",
    experience: "18 Years",
    propertiesSold: "$1.4 Billion+",
    languages: ["English", "French", "German"],
    rating: 5.0,
    image: "https://images.pexels.com/photos/7144261/pexels-photo-7144261.jpeg",
    email: "alexander@luxestate.com",
    phone: "+1 (310) 555-0190",
    quote: "Ultra-luxury real estate is not merely a transaction; it is the art of matching extraordinary souls with extraordinary spaces."
  },
  {
    id: "agent-2",
    name: "Victoria De Monaco",
    role: "Director of European Acquisition",
    experience: "15 Years",
    propertiesSold: "$920 Million+",
    languages: ["French", "English", "Italian", "Russian"],
    rating: 4.9,
    image: "https://images.pexels.com/photos/6716014/pexels-photo-6716014.jpeg",
    email: "victoria@luxestate.com",
    phone: "+377 93 25 11 00",
    quote: "Privacy is the ultimate luxury. My priority is ensuring absolute confidentiality and unparalleled access for the global elite."
  },
  {
    id: "agent-3",
    name: "Faisal Al Mansoor",
    role: "Middle East Managing Partner",
    experience: "12 Years",
    propertiesSold: "$1.1 Billion+",
    languages: ["Arabic", "English"],
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
    email: "faisal@luxestate.com",
    phone: "+971 4 555 1234",
    quote: "Dubai has redefined the limits of architectural ambition. LUXESTATE is here to provide the keys to that future."
  },
  {
    id: "agent-4",
    name: "Elena Rostova",
    role: "High-Net-Worth Advisory Specialist",
    experience: "10 Years",
    propertiesSold: "$680 Million+",
    languages: ["Russian", "English", "Mandarin"],
    rating: 4.9,
    image: "https://images.pexels.com/photos/8730380/pexels-photo-8730380.jpeg",
    email: "elena@luxestate.com",
    phone: "+1 (212) 555-8910",
    quote: "Every property has a heartbeat and a unique history. I help my clients translate real estate into legacy."
  }
];

export interface BlogItem {
  id: string;
  title: string;
  category: "Investment" | "Interior Design" | "Architecture" | "Lifestyle";
  date: string;
  image: string;
  summary: string;
  readTime: string;
}

export const BLOGS: BlogItem[] = [
  {
    id: "blog-1",
    title: "The Architecture of Tomorrow: Glass, Steel & Private Ecosystems",
    category: "Architecture",
    date: "April 24, 2026",
    image: "https://images.pexels.com/photos/7174115/pexels-photo-7174115.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    summary: "As the ultra-luxury buyer's priorities evolve, elite architects are designing homes that function as self-sufficient private sanctuaries with integrated nature, helipads, and biometric safety gates.",
    readTime: "6 min read"
  },
  {
    id: "blog-2",
    title: "Global Wealth Migration & The Hotspots of 2026",
    category: "Investment",
    date: "March 18, 2026",
    image: "https://images.pexels.com/photos/7174109/pexels-photo-7174109.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    summary: "An in-depth analysis of where ultra-high-net-worth individuals (UHNWIs) are moving their capital. Featuring a spotlight on Dubai beachfronts, the Swiss Alps, and private island conversions.",
    readTime: "8 min read"
  },
  {
    id: "blog-3",
    title: "Maximalist Simplicity: The Golden Theme of Haute Interiors",
    category: "Interior Design",
    date: "February 2, 2026",
    image: "https://images.pexels.com/photos/7614604/pexels-photo-7614604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    summary: "Explore how dark, moody, gold-veined marbles, luxury metals, and custom indirect ambient lighting are taking center stage in the world's most premium penthouses.",
    readTime: "5 min read"
  }
];

export const FAQS = [
  {
    question: "What is LUXESTATE's onboarding process for VIP clients?",
    answer: "Every client is assigned a dedicated Luxury Concierge Consultant. We start with a private consultation—either at one of our global lounges, in your private office, or securely via encrypted video. We curate private, off-market listings that align perfectly with your investment parameters and privacy expectations."
  },
  {
    question: "Do you handle completely off-market and pocket listings?",
    answer: "Yes. Approximately 40% of our ultra-luxury transactions (properties above $30 Million) occur completely off-market. If you require absolute privacy, we can provide a personalized, non-disclosure-protected catalog of hidden estates."
  },
  {
    question: "How do you coordinate international property tours?",
    answer: "For our international buyers, LUXESTATE offers an all-inclusive VIP experience. We coordinate private aviation charter, luxury chauffeur service upon arrival, and secure accommodations. For properties with 3D models and Virtual Reality tours, we can provide a full-scale immersive digital preview beforehand."
  },
  {
    question: "What legal assistance and financing options do you provide?",
    answer: "We partner with leading international law firms, tax advisory groups, and elite private wealth management banks to structure acquisitions across jurisdictions, trust accounts, and holding corporations. We offer customized home loan advisory for non-residents and ultra-high-net-worth clients."
  }
];
