import { useState } from "react";
import { FAQS } from "../data/properties";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first open

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative w-full py-20 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      {/* Decorative gradient flare */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-12 text-left relative z-10">
        {/* Title */}
        <div className="flex flex-col gap-3 text-center items-center">
          <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
            <HelpCircle size={18} />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] font-syne-luxury">
            Client Inquiries
          </span>
          <h2 className="font-serif-luxury text-3xl md:text-4xl font-light text-white leading-tight">
            Frequently Asked <span className="font-normal italic text-gold-pure-gradient">Questions</span>
          </h2>
          <p className="text-xs md:text-sm text-white/50 max-w-sm leading-relaxed font-light mt-1">
            Browse our core policies regarding luxury transactions, privacy, and logistics.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#101010] border-gold/40 shadow-lg"
                    : "bg-[#101010]/40 border-white/5 hover:border-white/10"
                }`}
              >
                {/* Header row click trigger */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors"
                >
                  <span className="font-syne-luxury text-sm md:text-base font-bold text-white group-hover:text-gold transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                    isOpen ? "bg-gold text-black border-gold" : "bg-black text-white/50 border-white/10"
                  }`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Answer body with smooth height transition */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-white/5 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="p-6 text-xs md:text-sm text-white/70 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
