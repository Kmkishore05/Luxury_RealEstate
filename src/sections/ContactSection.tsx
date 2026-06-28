import { Phone, Mail, MessageSquare, Clock, MapPin, ShieldAlert, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Global Private Desk",
      value: "+1 (800) LUXESTATE",
      sub: "Toll-free priority connection",
    },
    {
      icon: Mail,
      title: "Secure Client Services",
      value: "concierge@luxestate.com",
      sub: "Encrypted mail communication",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Executive Channel",
      value: "+377 93 25 11 00",
      sub: "Direct text connectivity",
    },
    {
      icon: Clock,
      title: "Operational Hours",
      value: "24/7 Priority Support",
      sub: "Global coordinators always online",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[#0B0B0B] border-t border-white/5 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] font-syne-luxury">
              Global Desk
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              Initiate Private <br />
              <span className="font-normal italic text-gold-pure-gradient">
                Consultation Channels
              </span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white/50 max-w-sm leading-relaxed font-light">
            Contact our partners directly. We are fully equipped to handle complete cryptographic and non-disclosure real estate operations.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Methods (Left Side) */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactMethods.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.title}
                    className="p-5 rounded-2xl bg-[#101010] border border-white/5 flex gap-4 items-center text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-gold shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-0.5 font-syne-luxury">
                        {m.title}
                      </span>
                      <p className="text-sm font-bold text-white font-syne-luxury truncate">
                        {m.value}
                      </p>
                      <span className="text-[10px] text-[#8E8E93] block">
                        {m.sub}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* HQ Office Locations Details */}
            <div className="p-5 rounded-2xl border border-[#D4AF37]/25 bg-[#1E1A0F] flex items-start gap-4 text-left">
              <ShieldAlert className="text-gold shrink-0 mt-0.5" size={18} />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block font-syne-luxury">
                  Confidential Verification
                </span>
                <p className="text-[11px] text-white/70 leading-relaxed mt-0.5">
                  LUXESTATE is fully licensed and audited under Monaco Real Estate Regulatory laws and Dubai RERA standards. Brokerage license: 440-LUX-2026.
                </p>
              </div>
            </div>
          </div>

          {/*HQ Visual Embed Map (Right Side) */}
          <div className="lg:col-span-7 h-[420px] rounded-3xl overflow-hidden border border-white/5 relative bg-[#0e0e13] flex items-center justify-center p-6">
            {/* Ambient gold glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_75%)] pointer-events-none" />

            {/* Custom vector architectural wireframe representing our Headquarters */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)",
                backgroundSize: "16px 16px"
              }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 max-w-sm">
              <div className="w-12 h-12 rounded-full border border-gold bg-black flex items-center justify-center text-gold shadow-lg shadow-gold/15">
                <MapPin size={20} className="animate-bounce" />
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] uppercase tracking-widest font-bold text-gold">
                  Global HQ Command Centre
                </span>
                <h4 className="font-serif-luxury text-xl text-white font-light">
                  Avenue Princesse Grace, Salem
                </h4>
                <p className="text-xs text-white/50 leading-relaxed">
                  Located in the exclusive Salem district. Private secure entrance with direct helicopter landing pads.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <a
                  href="https://www.google.com/maps/place/Salem,+Tamil+Nadu/@11.0231057,77.161388,632688m/data=!3m1!1e3!4m6!3m5!1s0x3babf1ccf52cba0b:0xee9989007068ca47!8m2!3d11.667316!4d78.1321846!16zL20vMDFqbmdz?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-[#171717] hover:bg-[#D4AF37] hover:text-black border border-white/10 hover:border-gold rounded-xl text-[10px] font-bold uppercase tracking-widest text-white transition-all flex items-center gap-1.5"
                >
                  <span>Launch G-Maps GPS</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
