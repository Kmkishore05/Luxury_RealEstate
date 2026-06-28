import { useState } from "react";
import { AGENTS, Agent } from "../data/properties";
import { Star, Mail, Phone, Globe, Calendar, ArrowRight, ShieldCheck, X } from "lucide-react";

export default function AgentsSection() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  return (
    <section className="relative w-full py-20 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12 text-left">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] font-syne-luxury">
              The Directorate
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              Elite Private <br />
              <span className="font-normal italic text-gold-pure-gradient">
                Sovereign Advisors
              </span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white/50 max-w-sm leading-relaxed font-light">
            Our partners command an aggregate transaction volume of over $4 Billion. Committed to absolute privacy and flawless contract structuring.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {AGENTS.map((agent) => (
            <div
              key={agent.id}
              className="group flex flex-col justify-between bg-[#101010] border border-white/5 hover:border-gold/35 rounded-3xl overflow-hidden transition-all duration-500 shadow-xl"
            >
              {/* Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden reveal-wrapper">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover reveal-image"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-75" />

                {/* Performance volume badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-gold/30 text-gold text-[9px] font-bold uppercase tracking-widest rounded-full">
                    {agent.propertiesSold} Sold
                  </span>
                </div>

                {/* Rating badge */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs text-white">
                  <Star size={11} fill="#D4AF37" className="text-gold" />
                  <span className="text-[10px] font-bold">{agent.rating.toFixed(1)}</span>
                </div>

                {/* Quote overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[11px] text-white/95 italic leading-relaxed font-light">
                    &ldquo;{agent.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Body info */}
              <div className="p-5 flex flex-col gap-4 text-left justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] uppercase tracking-wider text-[#D4AF37] font-bold">
                    {agent.role}
                  </span>
                  <h4 className="font-serif-luxury text-lg font-medium text-white group-hover:text-gold transition-colors truncate">
                    {agent.name}
                  </h4>
                </div>

                <div className="h-px bg-white/5" />

                {/* Metadata */}
                <div className="flex flex-col gap-2 text-xs text-white/65 font-medium">
                  <div className="flex items-center gap-2">
                    <Globe size={12} className="text-[#D4AF37]" />
                    <span className="truncate">{agent.languages.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={12} className="text-[#D4AF37]" />
                    <span>Experience: {agent.experience}</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedAgent(agent)}
                  className="w-full py-3 bg-white/5 group-hover:bg-[#D4AF37] text-white group-hover:text-black font-bold text-[10px] rounded-xl uppercase tracking-widest transition-all flex items-center justify-center gap-1.5"
                >
                  <Calendar size={12} />
                  <span>Book Briefing</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Booking / Contact Modal */}
        {selectedAgent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
            <div className="relative w-full max-w-lg bg-[#101010] border border-[#D4AF37]/35 rounded-3xl p-6 md:p-8 text-left shadow-2xl flex flex-col gap-6">
              
              {/* Close button */}
              <button
                onClick={() => setSelectedAgent(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 border border-white/10 hover:border-gold hover:text-gold text-white transition-all z-25"
              >
                <X size={15} />
              </button>

              {/* Header Agent */}
              <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-[#D4AF37]/30 shrink-0">
                  <img
                    src={selectedAgent.image}
                    alt={selectedAgent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#D4AF37] font-bold block mb-0.5">
                    {selectedAgent.role}
                  </span>
                  <h4 className="font-serif-luxury text-xl font-medium text-white">
                    {selectedAgent.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5 text-xs text-[#8E8E93]">
                    <ShieldCheck size={12} className="text-[#51d382]" />
                    <span>Executive Director</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="bg-[#171717] p-4 rounded-2xl border-l-2 border-gold text-xs text-white/80 italic leading-relaxed">
                &ldquo;{selectedAgent.quote}&rdquo;
              </blockquote>

              {/* Direct Info */}
              <div className="flex flex-col gap-3 text-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E8E93]">
                  Direct Private Channels:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`mailto:${selectedAgent.email}`}
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-[#D4AF37]/10 border border-white/5 hover:border-[#D4AF37]/30 flex items-center gap-3 text-white transition-all font-semibold"
                  >
                    <Mail size={14} className="text-gold" />
                    <span className="truncate">{selectedAgent.email}</span>
                  </a>

                  <a
                    href={`tel:${selectedAgent.phone}`}
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-[#D4AF37]/10 border border-white/5 hover:border-[#D4AF37]/30 flex items-center gap-3 text-white transition-all font-semibold"
                  >
                    <Phone size={14} className="text-gold" />
                    <span className="truncate">{selectedAgent.phone}</span>
                  </a>
                </div>
              </div>

              {/* Bottom confirmation */}
              <button
                onClick={() => setSelectedAgent(null)}
                className="w-full py-3 bg-[#D4AF37] hover:bg-gold-hover text-black font-bold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-gold/10"
              >
                <span>Initiate Encrypted Session</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
