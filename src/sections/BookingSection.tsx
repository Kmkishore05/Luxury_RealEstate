import { useState } from "react";
import { PROPERTIES } from "../data/properties";
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    property: PROPERTIES[0].title,
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please provide name, email, and phone contact.");
      return;
    }

    setLoading(true);
    // Simulate luxury API submission delay
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      property: PROPERTIES[0].title,
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <section className="relative w-full py-20 bg-[#0B0B0B] border-t border-white/5 overflow-hidden text-left">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text / Selling points */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] font-syne-luxury">
              Private Reservation
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              Request Your <br />
              <span className="font-normal italic text-gold-pure-gradient">
                Private Viewing
              </span>
            </h2>
          </div>

          <p className="text-sm text-white/70 leading-relaxed font-light">
            Due to the absolute exclusive nature of our listings, all physical site tours are accompanied by our Executive Director and require advanced validation.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
                <ShieldCheck size={11} />
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                <span className="font-bold text-white block">Absolute Non-Disclosure Agreements</span>
                Private viewing files and maps are locked under biometric standard NDA guidelines.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
                <ShieldCheck size={11} />
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                <span className="font-bold text-white block">Private Jet / Yacht Chauffeur</span>
                Complimentary luxury transfers from local airports/harbors are integrated into multi-property viewings.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column Booking Form Card */}
        <div className="lg:col-span-7">
          <div className="glass-panel-heavy p-6 md:p-8 rounded-3xl border border-[#D4AF37]/20 shadow-2xl relative">
            {/* Glowing gold frame highlights */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 blur-3xl rounded-full pointer-events-none" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="text-left border-b border-white/5 pb-3">
                  <h3 className="font-syne-luxury text-sm font-bold uppercase tracking-wider text-white">
                    Advisory Booking Dossier
                  </h3>
                  <span className="text-[10px] text-[#8E8E93] font-medium block mt-0.5">
                    Your executive coordinator will confirm the calendar slot within 1 hour.
                  </span>
                </div>

                {/* Form fields grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                      Full Name
                    </label>
                    <div className="relative flex items-center">
                      <User className="absolute left-4 text-white/30" size={14} />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sir Alexander Stirling"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#171717] border border-white/5 hover:border-white/10 focus:border-gold focus:outline-none text-xs font-medium text-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                      Private Telephone
                    </label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-4 text-white/30" size={14} />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (310) 555-0190"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#171717] border border-white/5 hover:border-white/10 focus:border-gold focus:outline-none text-xs font-medium text-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Email address */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                      Corporate/Personal Email
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="absolute left-4 text-white/30" size={14} />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="private@sterlingholdings.co"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#171717] border border-white/5 hover:border-white/10 focus:border-gold focus:outline-none text-xs font-medium text-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Property Selector */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                      Property Choice
                    </label>
                    <div className="relative flex items-center">
                      <FileText className="absolute left-4 text-white/30" size={14} />
                      <select
                        value={formData.property}
                        onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#171717] border border-white/5 hover:border-white/10 focus:border-gold focus:outline-none text-xs font-medium text-white transition-all appearance-none"
                      >
                        {PROPERTIES.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title} ({p.priceFormatted})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                      Preferred Date
                    </label>
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-4 text-white/30" size={14} />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#171717] border border-white/5 hover:border-white/10 focus:border-gold focus:outline-none text-xs font-medium text-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Time selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                      Preferred Time Slot
                    </label>
                    <div className="relative flex items-center">
                      <Clock className="absolute left-4 text-white/30" size={14} />
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#171717] border border-white/5 hover:border-white/10 focus:border-gold focus:outline-none text-xs font-medium text-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Message / Demands details */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                    Bespoke Requirements / Demands
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="E.g. private jet transfers, non-disclosure request, specific language support..."
                    className="w-full px-4 py-3 rounded-xl bg-[#171717] border border-white/5 hover:border-white/10 focus:border-gold focus:outline-none text-xs font-medium text-white transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#D4AF37] hover:bg-gold-hover text-[#0B0B0B] font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Files...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Viewing Request</span>
                      <ArrowRight size={13} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              // Success Slate
              <div className="py-12 flex flex-col items-center justify-center text-center gap-5 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#51d382]/10 border border-[#51d382]/30 flex items-center justify-center text-[#51d382]">
                  <CheckCircle2 size={32} />
                </div>

                <div className="flex flex-col gap-1 max-w-sm">
                  <h3 className="font-syne-luxury text-lg font-bold uppercase tracking-wider text-white">
                    Transmission Successful
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    Your request has been securely compiled and sent directly to Alexander Stirling. An advisor is reviewing the dossier now.
                  </p>
                </div>

                <div className="glass-panel p-4 rounded-2xl w-full max-w-sm border border-[#D4AF37]/20 flex flex-col gap-1 text-left text-xs text-white/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold">Dossier summary:</span>
                  <div>• <span className="font-bold text-white">Client:</span> {formData.name}</div>
                  <div>• <span className="font-bold text-white">Chosen Property:</span> {formData.property}</div>
                  <div>• <span className="font-bold text-white">Schedule:</span> {formData.date} at {formData.time}</div>
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white font-bold text-[10px] rounded-xl uppercase tracking-widest border border-white/5 transition-all mt-2"
                >
                  Book Another Session
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
