import { Shield, Headphones, Landmark, Scale, Landmark as Bank, Anchor } from "lucide-react";

const ADVANTAGES = [
  {
    icon: Headphones,
    title: "24/7 Private Concierge",
    desc: "A dedicated private assistant coordinate utility handovers, mansion staffing, helipad scheduling, and bespoke lifestyle demands.",
  },
  {
    icon: Shield,
    title: "72-Point Sovereign Security",
    desc: "Rigorous vetting of titles, architectural engineering, and asset history before any property enters our portfolio.",
  },
  {
    icon: Landmark,
    title: "Elite Legal Advisory",
    desc: "Expert cross-border structuring, sovereign asset trust setups, and tax shielding with global elite law firms.",
  },
  {
    icon: Scale,
    title: "Luxury Wealth Management",
    desc: "Align your property acquisitions directly with high-net-worth real estate portfolio management plans.",
  },
  {
    icon: Bank,
    title: "Preferred Financing Lines",
    desc: "Exclusive access to private banking channels, off-market credit lines, and non-resident financing systems.",
  },
  {
    icon: Anchor,
    title: "Yacht & Helipad Mooring",
    desc: "Coordination of priority berthing slots and private jet landing rights within local marinas and airspace.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-20 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      {/* Soft backlighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14 text-left">
        {/* Title / Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] font-syne-luxury">
              Our Foundations
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              The Architecture <br />
              <span className="font-normal italic text-gold-pure-gradient">
                of Trust & Luxury
              </span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white/50 max-w-sm leading-relaxed font-light">
            Behind every transaction is a network of world-class lawyers, concierges, and aviation experts dedicated to frictionless living.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="group p-6 rounded-3xl bg-[#101010] border border-white/5 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4 text-left relative overflow-hidden shadow-xl"
              >
                {/* Micro gold lines */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none" />

                <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-[#D4AF37] text-[#D4AF37] group-hover:text-black border border-white/5 group-hover:border-gold flex items-center justify-center transition-all duration-300 shrink-0">
                  <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-syne-luxury text-sm font-bold uppercase tracking-wider text-white group-hover:text-gold transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light">
                    {adv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
